radar_visualization({
    svg_id: "radar",
    width: 1450,
    height: 1000,
    colors: {
        background: "#14141f",
        grid: '#999',
        inactive: "#ddd"
    },
    title: "Glanbia Tech Radar",
    date: "2023.02",
    quadrants: [{
            name: "Languages & Frameworks"
        },
        {
            name: "Infrastructure & Tools"
        },
        {
            name: "Datastores"
        },
        {
            name: "Data Management"
        },
    ],
    rings: [{
            name: "ADOPT",
            color: "#5ba300"
        },
        {
            name: "TRIAL",
            color: "#009eb0"
        },
        {
            name: "ASSESS",
            color: "#c7ba00"
        },
        {
            name: "HOLD",
            color: "#e09b96"
        }
    ],
    print_layout: true,
    links_in_new_tabs: true,
    // zoomed_quadrant: 0,
    //ENTRIES
    entries: [{
            "quadrant": 0,
            "ring": 0,
            "label": "Python",
            "active": true,
            "moved": 0,
            "link": ""
        },
        {
            "quadrant": 0,
            "ring": 0,
            "label": "R",
            "active": true,
            "moved": 0,
            "link": ""
        },
        {
            "quadrant": 0,
            "ring": 2,
            "label": "Scala",
            "active": true,
            "moved": 0,
            "link": ""
        },
        {
            "quadrant": 1,
            "ring": 1,
            "label": "Azure Functions",
            "active": false,
            "moved": 0,
            "link": "https://azure.microsoft.com/services/functions"
        },
        {
            "quadrant": 1,
            "ring": 1,
            "label": "Azure Machine Learning",
            "active": false,
            "moved": 0,
            "link": "https://azure.microsoft.com/services/machine-learning-services"
        },
        {
            "quadrant": 1,
            "ring": 1,
            "label": "Azure Devops",
            "active": false,
            "moved": 0,
            "link": "https://dev.azure.com/glanbia/"
        },
        {
            "quadrant": 1,
            "ring": 0,
            "label": "GitHub",
            "active": true,
            "moved": 0,
            "link": "https://github.com/Glanbia"
        },
        {
            "quadrant": 2,
            "ring": 1,
            "label": "Azure SQL Database",
            "active": true,
            "moved": 0,
            "link": "https://azure.microsoft.com/services/sql-database"
        },
        {
            "quadrant": 2,
            "ring": 0,
            "label": "Azure Blob storage",
            "active": true,
            "moved": 0,
            "link": "https://azure.microsoft.com/services/storage/blobs"
        },
        {
            "quadrant": 2,
            "ring": 0,
            "label": "Databricks Catalog",
            "active": true,
            "moved": 0,
            "link": "https://adb-1334844506153603.3.azuredatabricks.net/"
        },
        {
            "quadrant": 2,
            "ring": 0,
            "label": "MS SharePoint",
            "active": true,
            "moved": 0,
            "link": "https://glanbia.sharepoint.com/sites/INT-GBS-ITDataAnalytics"
        },
        {
            "quadrant": 3,
            "ring": 0,
            "label": "Databricks",
            "active": true,
            "moved": 0,
            "link": "https://adb-1334844506153603.3.azuredatabricks.net/"
        },
        {
            "quadrant": 0,
            "ring": 0,
            "label": "Spark",
            "active": true,
            "moved": 0,
            "link": ""
        },
        {
            "quadrant": 3,
            "ring": 0,
            "label": "Azure Data Factory",
            "active": true,
            "moved": 0,
            "link": "https://adf.azure.com/en/home?factory=%2Fsubscriptions%2Fe0bd9b9b-9f13-4d56-99e4-02c967911d1f%2FresourceGroups%2Fbatchstarter-prod01%2Fproviders%2FMicrosoft.DataFactory%2Ffactories%2Fadfprod01"
        },
        {
            "quadrant": 3,
            "ring": 2,
            "label": "Azure Data Explorer",
            "active": true,
            "moved": 0,
            "link": "https://azure.microsoft.com/services/data-explorer"
        },
        {
            "quadrant": 3,
            "ring": 0,
            "label": "Tableau",
            "active": true,
            "moved": 0,
            "link": "https://us-east-1.online.tableau.com/#/site/glanbiaanalytics?:isFromSaml=y"
        },
        {
            "quadrant": 1,
            "ring": 1,
            "label": "MS PowerAutomate",
            "active": true,
            "moved": 0,
            "link": "https://powerautomate.microsoft.com/en-us/"
        },
        {
            "quadrant": 1,
            "ring": 0,
            "label": "MS Teams",
            "active": true,
            "moved": 0,
            "link": "https://www.microsoft.com/en-ie/microsoft-teams/log-in"
        },
        {
            "quadrant": 1,
            "ring": 0,
            "label": "Asana",
            "active": true,
            "moved": 0,
            "link": "https://app.asana.com/0/1201432048659573/board"
        },
        {
            "quadrant": 1,
            "ring": 1,
            "label": "MS Logic Apps",
            "active": true,
            "moved": 0,
            "link": "https://azure.microsoft.com/services/logic-apps"
        },
        {
            "quadrant": 0,
            "ring": 2,
            "label": "OpenTelemetry",
            "active": false,
            "moved": 0,
            "link": "https://opentelemetry.io/"
        },
        {
            "quadrant": 0,
            "ring": 2,
            "label": "Great Expectations",
            "active": true,
            "moved": 0,
            "link": "https://greatexpectations.io/"
        },
        {
            "quadrant": 1,
            "ring": 1,
            "label": "Azure Key Vault",
            "active": true,
            "moved": 0,
            "link": "https://azure.microsoft.com/services/key-vault"
        }
    ]
    //ENTRIES
});