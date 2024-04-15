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
    date: "2023.09",
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
            "ring": 0,
            "label": "HQL",
            "active": true,
            "moved": 0,
            "link": "https://spark.apache.org/docs/latest/sql-ref.html"
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
            "quadrant": 0,
            "ring": 0,
            "label": "Spark",
            "active": true,
            "moved": 0,
            "link": ""
        },
        {
            "quadrant": 0,
            "ring": 3,
            "label": "Great Expectations",
            "active": true,
            "moved": 1,
            "link": "https://greatexpectations.io/"
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
            "ring": 0,
            "label": "Fivetran",
            "active": true,
            "moved": 0,
            "link": "https://launcher.myapps.microsoft.com/api/signin/d874d0b8-55ce-45c5-a8e9-7b5d08dcaf53?tenantId=865c00b5-ed13-4bd3-b214-de46635aeec8"
        },
        {
            "quadrant": 1,
            "ring": 0,
            "label": "Azure Data Factory",
            "active": true,
            "moved": 0,
            "link": "https://adf.azure.com/en/home?factory=%2Fsubscriptions%2Fe0bd9b9b-9f13-4d56-99e4-02c967911d1f%2FresourceGroups%2Fbatchstarter-prod01%2Fproviders%2FMicrosoft.DataFactory%2Ffactories%2Fadfprod01"
        },    
        {
            "quadrant": 1,
            "ring": 0,
            "label": "MS Logic Apps",
            "active": true,
            "moved": 1,
            "link": "https://azure.microsoft.com/services/logic-apps"
        },
        {
            "quadrant": 1,
            "ring": 2,
            "label": "OpenTelemetry",
            "active": false,
            "moved": 0,
            "link": "https://opentelemetry.io/"
        },
        {
            "quadrant": 1,
            "ring": 0,
            "label": "Azure Key Vault",
            "active": true,
            "moved": 1,
            "link": "https://azure.microsoft.com/services/key-vault"
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
            "label": "Databricks SQL",
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
            "quadrant": 2,
            "ring": 2,
            "label": "Azure File Sync",
            "active": true,
            "moved": 0,
            "link": "https://learn.microsoft.com/en-us/azure/storage/files/storage-sync-files-planning"
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
            "quadrant": 3,
            "ring": 2,
            "label": "Azure Data Explorer",
            "active": false,
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
            "quadrant": 3,
            "ring": 2,
            "label": "Power BI",
            "active": true,
            "moved": 0,
            "link": "https://powerbi.microsoft.com/"
        },
        {
            "quadrant": 3,
            "ring": 0,
            "label": "Azure Purview",
            "active": true,
            "moved": 1,
            "link": "https://web.purview.azure.com/resource/prvprod01/?feature.tenant=865c00b5-ed13-4bd3-b214-de46635aeec8"
        },
        {
            "quadrant": 3,
            "ring": 2,
            "label": "Azure Data Catalog",
            "active": false,
            "moved": 0,
            "link": "https://azure.microsoft.com/en-us/products/data-catalog"
        },
        {
            "quadrant": 3,
            "ring": 0,
            "label": "Unity Catalog",
            "active": true,
            "moved": 1,
            "link": "https://www.databricks.com/product/unity-catalog"
        },
        {
            "quadrant": 3,
            "ring": 1,
            "label": "Alteryx",
            "active": false,
            "moved": 0,
            "link": "https://www.alteryx.com/alteryx-analytics-automation-platform"
        },
        {
            "quadrant": 0,
            "ring": 1,
            "label": "Azure Open AI",
            "active": false,
            "moved": 0,
            "link": "https://azure.microsoft.com/en-us/products/ai-services/openai-service"
        },
        {
            "quadrant": 0,
            "ring": 1,
            "label": "DBRX",
            "active": false,
            "moved": 0,
            "link": "https://www.databricks.com/blog/introducing-dbrx-new-state-art-open-llm"
        }
    ]
    //ENTRIES
});
