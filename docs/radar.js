/**
 * Technology Radar Visualization
 * Based on D3.js v7
 * Inspired by ThoughtWorks Technology Radar
 */

function radar_visualization(config) {

  // Custom random number generator for reproducible positioning
  // Ensures same technologies appear in same positions each time
  var seed = 42;
  function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }

  function random_between(min, max) {
    return min + random() * (max - min);
  }

  function normal_between(min, max) {
    return min + (random() + random()) * 0.5 * (max - min);
  }

  // Quadrant configuration (radial_min/max are multiples of PI)
  const quadrants = [
    { radial_min: 0, radial_max: 0.5, factor_x: 1, factor_y: 1 },
    { radial_min: 0.5, radial_max: 1, factor_x: -1, factor_y: 1 },
    { radial_min: -1, radial_max: -0.5, factor_x: -1, factor_y: -1 },
    { radial_min: -0.5, radial_max: 0, factor_x: 1, factor_y: -1 }
  ];

  // Ring configuration with radii
  const rings = [
    { radius: 130 },
    { radius: 220 },
    { radius: 310 },
    { radius: 400 }
  ];

  // Layout offsets
  const title_offset = { x: -675, y: -420 };
  const footer_offset = { x: -675, y: 420 };
  const legend_offset = [
    { x: 450, y: 90 },
    { x: -675, y: 90 },
    { x: -675, y: -310 },
    { x: 450, y: -310 }
  ];

  // Coordinate transformation helpers
  function polar(cartesian) {
    var x = cartesian.x;
    var y = cartesian.y;
    return {
      t: Math.atan2(y, x),
      r: Math.sqrt(x * x + y * y)
    }
  }

  function cartesian(polar) {
    return {
      x: polar.r * Math.cos(polar.t),
      y: polar.r * Math.sin(polar.t)
    }
  }

  function bounded_interval(value, min, max) {
    var low = Math.min(min, max);
    var high = Math.max(min, max);
    return Math.min(Math.max(value, low), high);
  }

  function bounded_ring(polar, r_min, r_max) {
    return {
      t: polar.t,
      r: bounded_interval(polar.r, r_min, r_max)
    }
  }

  function bounded_box(point, min, max) {
    return {
      x: bounded_interval(point.x, min.x, max.x),
      y: bounded_interval(point.y, min.y, max.y)
    }
  }

  // Segment calculator for positioning entries within their quadrant/ring
  function segment(quadrant, ring) {
    var polar_min = {
      t: quadrants[quadrant].radial_min * Math.PI,
      r: ring === 0 ? 30 : rings[ring - 1].radius
    };
    var polar_max = {
      t: quadrants[quadrant].radial_max * Math.PI,
      r: rings[ring].radius
    };
    var cartesian_min = {
      x: 15 * quadrants[quadrant].factor_x,
      y: 15 * quadrants[quadrant].factor_y
    };
    var cartesian_max = {
      x: rings[3].radius * quadrants[quadrant].factor_x,
      y: rings[3].radius * quadrants[quadrant].factor_y
    };
    return {
      clipx: function(d) {
        var c = bounded_box(d, cartesian_min, cartesian_max);
        var p = bounded_ring(polar(c), polar_min.r + 15, polar_max.r - 15);
        d.x = cartesian(p).x;
        return d.x;
      },
      clipy: function(d) {
        var c = bounded_box(d, cartesian_min, cartesian_max);
        var p = bounded_ring(polar(c), polar_min.r + 15, polar_max.r - 15);
        d.y = cartesian(p).y;
        return d.y;
      },
      random: function() {
        return cartesian({
          t: random_between(polar_min.t, polar_max.t),
          r: normal_between(polar_min.r, polar_max.r)
        });
      }
    }
  }

  // Position each entry randomly in its segment
  for (var i = 0; i < config.entries.length; i++) {
    var entry = config.entries[i];
    entry.segment = segment(entry.quadrant, entry.ring);
    var point = entry.segment.random();
    entry.x = point.x;
    entry.y = point.y;
    entry.color = entry.active || config.print_layout ?
      config.rings[entry.ring].color : config.colors.inactive;
  }

  // Partition entries by segment
  var segmented = new Array(4);
  for (var quadrant = 0; quadrant < 4; quadrant++) {
    segmented[quadrant] = new Array(4);
    for (var ring = 0; ring < 4; ring++) {
      segmented[quadrant][ring] = [];
    }
  }
  for (var i = 0; i < config.entries.length; i++) {
    var entry = config.entries[i];
    segmented[entry.quadrant][entry.ring].push(entry);
  }

  // Assign unique sequential IDs to entries
  var id = 1;
  for (var quadrant of [2, 3, 1, 0]) {
    for (var ring = 0; ring < 4; ring++) {
      var entries = segmented[quadrant][ring];
      entries.sort(function(a, b) { return a.label.localeCompare(b.label); })
      for (var i = 0; i < entries.length; i++) {
        entries[i].id = "" + id++;
      }
    }
  }

  // Helper functions
  function translate(x, y) {
    return "translate(" + x + "," + y + ")";
  }

  function viewbox(quadrant) {
    return [
      Math.max(0, quadrants[quadrant].factor_x * 400) - 420,
      Math.max(0, quadrants[quadrant].factor_y * 400) - 420,
      440,
      440
    ].join(" ");
  }

  // Initialize SVG
  var svg = d3.select("svg#" + config.svg_id)
    .style("background-color", config.colors.background)
    .attr("width", config.width)
    .attr("height", config.height);

  var radar = svg.append("g");
  if ("zoomed_quadrant" in config) {
    svg.attr("viewBox", viewbox(config.zoomed_quadrant));
  } else {
    radar.attr("transform", translate(config.width / 2, config.height / 2));
  }

  var grid = radar.append("g");

  // Draw grid lines
  grid.append("line")
    .attr("x1", 0).attr("y1", -400)
    .attr("x2", 0).attr("y2", 400)
    .style("stroke", config.colors.grid)
    .style("stroke-width", 1);

  grid.append("line")
    .attr("x1", -400).attr("y1", 0)
    .attr("x2", 400).attr("y2", 0)
    .style("stroke", config.colors.grid)
    .style("stroke-width", 1);

  // Background filter for legend items
  var defs = grid.append("defs");
  var filter = defs.append("filter")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 1)
    .attr("height", 1)
    .attr("id", "solid");
  filter.append("feFlood")
    .attr("flood-color", "rgba(0, 0, 0, 0.8)");
  filter.append("feComposite")
    .attr("in", "SourceGraphic");

  // Draw rings
  for (var i = 0; i < rings.length; i++) {
    grid.append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", rings[i].radius)
      .style("fill", "none")
      .style("stroke", config.colors.grid)
      .style("stroke-width", 1)
      .style("opacity", 0)
      .transition()
      .duration(800)
      .delay(i * 100)
      .style("opacity", 1);

    if (config.print_layout) {
      grid.append("text")
        .text(config.rings[i].name)
        .attr("y", -rings[i].radius + 62)
        .attr("text-anchor", "middle")
        .style("fill", config.rings[i].color)
        .style("opacity", 0)
        .style("font-family", "Inter, Arial, Helvetica, sans-serif")
        .style("font-size", "42px")
        .style("font-weight", "bold")
        .style("pointer-events", "none")
        .style("user-select", "none")
        .transition()
        .duration(600)
        .delay(200 + i * 100)
        .style("opacity", 0.35);
    }
  }

  // Legend transform helper
  function legend_transform(quadrant, ring, index = null) {
    var dx = ring < 2 ? 0 : 140;
    var dy = (index == null ? -16 : index * 12);
    if (ring % 2 === 1) {
      dy = dy + 36 + segmented[quadrant][ring - 1].length * 12;
    }
    return translate(
      legend_offset[quadrant].x + dx,
      legend_offset[quadrant].y + dy
    );
  }

  // Draw title and legend (print layout only)
  if (config.print_layout) {
    // Title
    radar.append("text")
      .attr("transform", translate(title_offset.x, title_offset.y))
      .text(config.title)
      .style("font-family", "Inter, Arial, Helvetica, sans-serif")
      .style("fill", "#e4e6eb")
      .style("font-size", "34px")
      .style("font-weight", "bold")
      .style("opacity", 0)
      .transition()
      .duration(600)
      .style("opacity", 1);

    // Date
    radar.append("text")
      .attr("transform", translate(title_offset.x, title_offset.y + 25))
      .text(config.date || "")
      .style("font-family", "Inter, Arial, Helvetica, sans-serif")
      .style("font-size", "14px")
      .style("fill", "#b8bec9")
      .style("opacity", 0)
      .transition()
      .duration(600)
      .delay(100)
      .style("opacity", 1);

    // Footer
    radar.append("text")
      .attr("transform", translate(footer_offset.x, footer_offset.y))
      .text("▲ moved up     ▼ moved down")
      .attr("xml:space", "preserve")
      .style("font-family", "Inter, Arial, Helvetica, sans-serif")
      .style("fill", "#8b92a0")
      .style("font-size", "10px");

    // Legend
    var legend = radar.append("g");
    for (var quadrant = 0; quadrant < 4; quadrant++) {
      // Quadrant name
      legend.append("text")
        .attr("transform", translate(
          legend_offset[quadrant].x,
          legend_offset[quadrant].y - 45
        ))
        .text(config.quadrants[quadrant].name)
        .style("font-family", "Inter, Arial, Helvetica, sans-serif")
        .style("font-size", "18px")
        .style("fill", "#e4e6eb")
        .style("font-weight", "bold")
        .style("opacity", 0)
        .transition()
        .duration(600)
        .delay(300)
        .style("opacity", 1);

      // Ring entries
      for (var ring = 0; ring < 4; ring++) {
        legend.append("text")
          .attr("transform", legend_transform(quadrant, ring))
          .text(config.rings[ring].name)
          .style("font-family", "Inter, Arial, Helvetica, sans-serif")
          .style("font-size", "12px")
          .style("font-weight", "bold")
          .style("fill", config.rings[ring].color);

        legend.selectAll(".legend" + quadrant + ring)
          .data(segmented[quadrant][ring])
          .enter()
          .append("a")
          .attr("href", function(d, i) {
            return d.link ? d.link : "#";
          })
          .attr("target", function(d, i) {
            return (d.link && config.links_in_new_tabs) ? "_blank" : null;
          })
          .append("text")
          .attr("transform", function(d, i) { return legend_transform(quadrant, ring, i); })
          .attr("class", "legend" + quadrant + ring)
          .attr("id", function(d, i) { return "legendItem" + d.id; })
          .text(function(d, i) { return d.id + ". " + d.label; })
          .style("font-family", "Inter, Arial, Helvetica, sans-serif")
          .style("font-size", "11px")
          .style("fill", "#b8bec9")
          .style("cursor", d => d.link ? "pointer" : "default")
          .style("opacity", 0)
          .on("mouseover", function(event, d) { showBubble(d); highlightLegendItem(d); })
          .on("mouseout", function(event, d) { hideBubble(d); unhighlightLegendItem(d); })
          .transition()
          .duration(400)
          .delay((d, i) => 400 + i * 20)
          .style("opacity", 1);
      }
    }
  }

  // Entry layer
  var rink = radar.append("g").attr("id", "rink");

  // Tooltip bubble
  var bubble = radar.append("g")
    .attr("id", "bubble")
    .attr("x", 0)
    .attr("y", 0)
    .style("opacity", 0)
    .style("pointer-events", "none")
    .style("user-select", "none");

  bubble.append("rect")
    .attr("rx", 4)
    .attr("ry", 4)
    .style("fill", "#1a1f35");

  bubble.append("text")
    .style("font-family", "Inter, sans-serif")
    .style("font-size", "11px")
    .style("fill", "#e4e6eb")
    .style("font-weight", "500");

  bubble.append("path")
    .attr("d", "M 0,0 10,0 5,8 z")
    .style("fill", "#1a1f35");

  // Tooltip functions
  function showBubble(d) {
    if (d.active || config.print_layout) {
      var tooltip = d3.select("#bubble text").text(d.label);
      var bbox = tooltip.node().getBBox();
      d3.select("#bubble")
        .attr("transform", translate(d.x - bbox.width / 2, d.y - 16))
        .transition()
        .duration(200)
        .style("opacity", 0.95);
      d3.select("#bubble rect")
        .attr("x", -5)
        .attr("y", -bbox.height)
        .attr("width", bbox.width + 10)
        .attr("height", bbox.height + 4);
      d3.select("#bubble path")
        .attr("transform", translate(bbox.width / 2 - 5, 3));
    }
  }

  function hideBubble(d) {
    d3.select("#bubble")
      .transition()
      .duration(150)
      .style("opacity", 0);
  }

  function highlightLegendItem(d) {
    var legendItem = document.getElementById("legendItem" + d.id);
    if (legendItem) {
      legendItem.setAttribute("filter", "url(#solid)");
      legendItem.setAttribute("fill", "white");
    }
  }

  function unhighlightLegendItem(d) {
    var legendItem = document.getElementById("legendItem" + d.id);
    if (legendItem) {
      legendItem.removeAttribute("filter");
      legendItem.removeAttribute("fill");
    }
  }

  // Draw blips (technology entries)
  var blips = rink.selectAll(".blip")
    .data(config.entries)
    .enter()
    .append("g")
    .attr("class", "blip")
    .attr("transform", function(d, i) { return legend_transform(d.quadrant, d.ring, i); })
    .style("opacity", 0)
    .on("mouseover", function(event, d) {
      showBubble(d);
      highlightLegendItem(d);
      d3.select(this).transition().duration(200).attr("transform", function(d) {
        return translate(d.segment.clipx(d), d.segment.clipy(d)) + " scale(1.2)";
      });
    })
    .on("mouseout", function(event, d) {
      hideBubble(d);
      unhighlightLegendItem(d);
      d3.select(this).transition().duration(200).attr("transform", function(d) {
        return translate(d.segment.clipx(d), d.segment.clipy(d)) + " scale(1)";
      });
    });

  // Configure each blip
  blips.each(function(d) {
    var blip = d3.select(this);

    // Add link if present
    if (d.active && d.hasOwnProperty("link") && d.link) {
      blip = blip.append("a")
        .attr("xlink:href", d.link);

      if (config.links_in_new_tabs) {
        blip.attr("target", "_blank");
      }
    }

    // Blip shape based on movement
    if (d.moved > 0) {
      blip.append("path")
        .attr("d", "M -11,5 11,5 0,-13 z")
        .style("fill", d.color);
    } else if (d.moved < 0) {
      blip.append("path")
        .attr("d", "M -11,-5 11,-5 0,13 z")
        .style("fill", d.color);
    } else {
      blip.append("circle")
        .attr("r", 9)
        .attr("fill", d.color);
    }

    // Blip text
    if (d.active || config.print_layout) {
      var blip_text = config.print_layout ? d.id : d.label.match(/[a-z]/i);
      blip.append("text")
        .text(blip_text)
        .attr("y", 3)
        .attr("text-anchor", "middle")
        .style("fill", "#fff")
        .style("font-family", "Inter, Arial, Helvetica, sans-serif")
        .style("font-size", function(d) { return blip_text.length > 2 ? "8px" : "9px"; })
        .style("font-weight", "600")
        .style("pointer-events", "none")
        .style("user-select", "none");
    }
  });

  // Animation tick function
  function ticked() {
    blips.attr("transform", function(d) {
      return translate(d.segment.clipx(d), d.segment.clipy(d));
    });
  }

  // Force simulation for collision avoidance
  d3.forceSimulation()
    .nodes(config.entries)
    .velocityDecay(0.19)
    .force("collision", d3.forceCollide().radius(12).strength(0.85))
    .on("tick", ticked)
    .on("end", function() {
      // Fade in blips after positioning
      blips.transition()
        .duration(400)
        .delay((d, i) => i * 5)
        .style("opacity", 1);
    });
}
