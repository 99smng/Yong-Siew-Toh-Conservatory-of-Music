var APP_DATA = {
  "scenes": [
    {
      "id": "0-alice-lee-plaza",
      "name": "Alice Lee Plaza",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3592425048865628,
          "pitch": -0.19880723173406878,
          "rotation": 0,
          "target": "1-conservatory-foyer"
        },
        {
          "yaw": 2.1056095899279637,
          "pitch": -0.012054727533651999,
          "rotation": 0,
          "target": "2-conservatory-lounge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7646272439298336,
          "pitch": -0.046249542020683876,
          "title": "Alice Lee Plaza",
          "text": "Welcome to music school and hope you have an enjoyable tour here! We have performance here once in a while and stay tuned for our next performance.&nbsp;"
        }
      ]
    },
    {
      "id": "1-conservatory-foyer",
      "name": "Conservatory Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6122682486303574,
          "pitch": -0.0809191865940786,
          "rotation": 0,
          "target": "0-alice-lee-plaza"
        },
        {
          "yaw": 2.7329534685089145,
          "pitch": -0.026641996928805867,
          "rotation": 0,
          "target": "2-conservatory-lounge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2857306472414116,
          "pitch": -0.007801593338090385,
          "title": "Conservatory Foyer",
          "text": "Lobby access to multiple floor of music school."
        }
      ]
    },
    {
      "id": "2-conservatory-lounge",
      "name": "Conservatory Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3420742075414491,
          "pitch": -0.047650758425874074,
          "rotation": 0,
          "target": "0-alice-lee-plaza"
        },
        {
          "yaw": -2.9675846230439724,
          "pitch": -0.016783528851977536,
          "rotation": 0,
          "target": "1-conservatory-foyer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9748402029781307,
          "pitch": 0.008970806533517006,
          "title": "Conservatory Lounge",
          "text": "A history gallery walk here to help you understand more about the constitution of Music School"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
