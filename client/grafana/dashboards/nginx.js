{
  "annotations": {
    "list": [
      {
        "builtIn": 1,
        "datasource": "-- Grafana --",
        "enable": true,
        "hide": true,
        "iconColor": "rgba(0, 211, 255, 1)",
        "name": "Annotations & Alerts",
        "type": "dashboard"
      }
    ]
  },
  "editable": true,
  "gnetId": null,
  "graphTooltip": 0,
  "id": 4,
  "links": [],
  "panels": [
    {
      "cacheTimeout": null,
      "colorBackground": false,
      "colorPostfix": false,
      "colorValue": true,
      "colors": [
        "#F2495C",
        "rgba(237, 129, 40, 0.89)",
        "#F2495C"
      ],
      "datasource": null,
      "format": "none",
      "gauge": {
        "maxValue": 100,
        "minValue": 0,
        "show": false,
        "thresholdLabels": false,
        "thresholdMarkers": true
      },
      "gridPos": {
        "h": 7,
        "w": 4,
        "x": 0,
        "y": 0
      },
      "id": 6,
      "interval": null,
      "links": [],
      "mappingType": 1,
      "mappingTypes": [
        {
          "name": "value to text",
          "value": 1
        },
        {
          "name": "range to text",
          "value": 2
        }
      ],
      "maxDataPoints": 100,
      "nullPointMode": "connected",
      "nullText": null,
      "options": {},
      "postfix": "",
      "postfixFontSize": "50%",
      "prefix": "",
      "prefixFontSize": "50%",
      "rangeMaps": [
        {
          "from": "null",
          "text": "N/A",
          "to": "null"
        }
      ],
      "sparkline": {
        "fillColor": "rgba(31, 118, 189, 0.18)",
        "full": false,
        "lineColor": "rgb(31, 120, 193)",
        "show": false,
        "ymax": null,
        "ymin": null
      },
      "tableColumn": "",
      "targets": [
        {
          "expr": "nginx_http_requests_total{host=\"\",status=\"500\"}",
          "refId": "A"
        }
      ],
      "thresholds": "",
      "timeFrom": null,
      "timeShift": null,
      "title": "500: Internal Server",
      "type": "singlestat",
      "valueFontSize": "80%",
      "valueMaps": [
        {
          "op": "=",
          "text": "N/A",
          "value": "null"
        }
      ],
      "valueName": "avg"
    },
    {
      "cacheTimeout": null,
      "colorBackground": false,
      "colorValue": true,
      "colors": [
        "#E02F44",
        "rgba(237, 129, 40, 0.89)",
        "#d44a3a"
      ],
      "datasource": null,
      "format": "none",
      "gauge": {
        "maxValue": 100,
        "minValue": 0,
        "show": false,
        "thresholdLabels": false,
        "thresholdMarkers": true
      },
      "gridPos": {
        "h": 7,
        "w": 4,
        "x": 4,
        "y": 0
      },
      "id": 8,
      "interval": null,
      "links": [],
      "mappingType": 1,
      "mappingTypes": [
        {
          "name": "value to text",
          "value": 1
        },
        {
          "name": "range to text",
          "value": 2
        }
      ],
      "maxDataPoints": 100,
      "nullPointMode": "connected",
      "nullText": null,
      "options": {},
      "postfix": "",
      "postfixFontSize": "50%",
      "prefix": "",
      "prefixFontSize": "50%",
      "rangeMaps": [
        {
          "from": "null",
          "text": "N/A",
          "to": "null"
        }
      ],
      "sparkline": {
        "fillColor": "rgba(31, 118, 189, 0.18)",
        "full": false,
        "lineColor": "rgb(31, 120, 193)",
        "show": false,
        "ymax": null,
        "ymin": null
      },
      "tableColumn": "",
      "targets": [
        {
          "expr": "nginx_http_requests_total{host=\"\",status=\"502\"}",
          "refId": "A"
        }
      ],
      "thresholds": "",
      "timeFrom": null,
      "timeShift": null,
      "title": "502 : Bad Gateway",
      "type": "singlestat",
      "valueFontSize": "80%",
      "valueMaps": [
        {
          "op": "=",
          "text": "N/A",
          "value": "null"
        }
      ],
      "valueName": "avg"
    },
    {
      "cacheTimeout": null,
      "colorBackground": false,
      "colorValue": true,
      "colors": [
        "#FADE2A",
        "rgba(237, 129, 40, 0.89)",
        "#d44a3a"
      ],
      "datasource": null,
      "format": "none",
      "gauge": {
        "maxValue": 100,
        "minValue": 0,
        "show": false,
        "thresholdLabels": false,
        "thresholdMarkers": true
      },
      "gridPos": {
        "h": 7,
        "w": 4,
        "x": 8,
        "y": 0
      },
      "id": 10,
      "interval": null,
      "links": [],
      "mappingType": 1,
      "mappingTypes": [
        {
          "name": "value to text",
          "value": 1
        },
        {
          "name": "range to text",
          "value": 2
        }
      ],
      "maxDataPoints": 100,
      "nullPointMode": "connected",
      "nullText": null,
      "options": {},
      "postfix": "",
      "postfixFontSize": "50%",
      "prefix": "",
      "prefixFontSize": "50%",
      "rangeMaps": [
        {
          "from": "null",
          "text": "N/A",
          "to": "null"
        }
      ],
      "sparkline": {
        "fillColor": "rgba(31, 118, 189, 0.18)",
        "full": false,
        "lineColor": "rgb(31, 120, 193)",
        "show": false,
        "ymax": null,
        "ymin": null
      },
      "tableColumn": "",
      "targets": [
        {
          "expr": "nginx_http_requests_total{host=\"\",status=\"404\"}",
          "refId": "A"
        }
      ],
      "thresholds": "",
      "timeFrom": null,
      "timeShift": null,
      "title": "404 : Not Found",
      "type": "singlestat",
      "valueFontSize": "80%",
      "valueMaps": [
        {
          "op": "=",
          "text": "N/A",
          "value": "null"
        }
      ],
      "valueName": "avg"
    },
    {
      "cacheTimeout": null,
      "colorBackground": false,
      "colorValue": true,
      "colors": [
        "#299c46",
        "rgba(237, 129, 40, 0.89)",
        "#d44a3a"
      ],
      "datasource": null,
      "format": "none",
      "gauge": {
        "maxValue": 100,
        "minValue": 0,
        "show": false,
        "thresholdLabels": false,
        "thresholdMarkers": true
      },
      "gridPos": {
        "h": 7,
        "w": 4,
        "x": 12,
        "y": 0
      },
      "id": 4,
      "interval": null,
      "links": [],
      "mappingType": 1,
      "mappingTypes": [
        {
          "name": "value to text",
          "value": 1
        },
        {
          "name": "range to text",
          "value": 2
        }
      ],
      "maxDataPoints": 100,
      "nullPointMode": "connected",
      "nullText": null,
      "options": {},
      "postfix": "",
      "postfixFontSize": "50%",
      "prefix": "",
      "prefixFontSize": "50%",
      "rangeMaps": [
        {
          "from": "null",
          "text": "N/A",
          "to": "null"
        }
      ],
      "sparkline": {
        "fillColor": "rgba(31, 118, 189, 0.18)",
        "full": false,
        "lineColor": "rgb(31, 120, 193)",
        "show": false,
        "ymax": null,
        "ymin": null
      },
      "tableColumn": "",
      "targets": [
        {
          "expr": "nginx_http_requests_total{host=\"\",status=\"200\"}",
          "refId": "A"
        }
      ],
      "thresholds": "",
      "timeFrom": null,
      "timeShift": null,
      "title": "200 : OK",
      "type": "singlestat",
      "valueFontSize": "80%",
      "valueMaps": [
        {
          "op": "=",
          "text": "N/A",
          "value": "null"
        }
      ],
      "valueName": "current"
    },
    {
      "cacheTimeout": null,
      "colorBackground": false,
      "colorValue": false,
      "colors": [
        "#299c46",
        "rgba(237, 129, 40, 0.89)",
        "#d44a3a"
      ],
      "datasource": null,
      "format": "none",
      "gauge": {
        "maxValue": 100,
        "minValue": 0,
        "show": false,
        "thresholdLabels": false,
        "thresholdMarkers": true
      },
      "gridPos": {
        "h": 5,
        "w": 4,
        "x": 0,
        "y": 7
      },
      "id": 18,
      "interval": null,
      "links": [],
      "mappingType": 1,
      "mappingTypes": [
        {
          "name": "value to text",
          "value": 1
        },
        {
          "name": "range to text",
          "value": 2
        }
      ],
      "maxDataPoints": 100,
      "nullPointMode": "connected",
      "nullText": null,
      "options": {},
      "postfix": "",
      "postfixFontSize": "50%",
      "prefix": "",
      "prefixFontSize": "50%",
      "rangeMaps": [
        {
          "from": "null",
          "text": "N/A",
          "to": "null"
        }
      ],
      "sparkline": {
        "fillColor": "rgba(31, 118, 189, 0.18)",
        "full": false,
        "lineColor": "rgb(31, 120, 193)",
        "show": false,
        "ymax": null,
        "ymin": null
      },
      "tableColumn": "",
      "targets": [
        {
          "expr": "nginx_http_request_duration_seconds_sum{host=\"\"}",
          "refId": "A"
        }
      ],
      "thresholds": "",
      "timeFrom": null,
      "timeShift": null,
      "title": "HTTP Duration Seconds Sum",
      "type": "singlestat",
      "valueFontSize": "80%",
      "valueMaps": [
        {
          "op": "=",
          "text": "N/A",
          "value": "null"
        }
      ],
      "valueName": "avg"
    },
    {
      "datasource": "Prometheus",
      "gridPos": {
        "h": 5,
        "w": 4,
        "x": 4,
        "y": 7
      },
      "id": 12,
      "options": {
        "fieldOptions": {
          "calcs": [
            "max"
          ],
          "defaults": {
            "mappings": [
              {
                "from": "",
                "id": 1,
                "operator": "",
                "text": "",
                "to": "",
                "type": 1,
                "value": ""
              }
            ],
            "max": 100,
            "min": 0,
            "thresholds": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 1000
              }
            ],
            "title": ""
          },
          "override": {},
          "values": false
        },
        "orientation": "auto",
        "showThresholdLabels": false,
        "showThresholdMarkers": true
      },
      "pluginVersion": "6.5.2",
      "targets": [
        {
          "expr": "nginx_http_connections{state=\"waiting\"}",
          "refId": "A"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "HTTP connections Waiting",
      "type": "gauge"
    },
    {
      "datasource": null,
      "gridPos": {
        "h": 5,
        "w": 4,
        "x": 8,
        "y": 7
      },
      "id": 16,
      "options": {
        "fieldOptions": {
          "calcs": [
            "max"
          ],
          "defaults": {
            "mappings": [],
            "max": 100,
            "min": 0,
            "thresholds": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "#EAB839",
                "value": 100
              },
              {
                "color": "red",
                "value": 200
              }
            ]
          },
          "override": {},
          "values": false
        },
        "orientation": "auto",
        "showThresholdLabels": false,
        "showThresholdMarkers": true
      },
      "pluginVersion": "6.5.2",
      "targets": [
        {
          "expr": "nginx_http_connections{state=\"writing\"}",
          "refId": "A"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "HTTP Connections Writing",
      "type": "gauge"
    },
    {
      "datasource": null,
      "gridPos": {
        "h": 5,
        "w": 4,
        "x": 12,
        "y": 7
      },
      "id": 14,
      "options": {
        "fieldOptions": {
          "calcs": [
            "max"
          ],
          "defaults": {
            "mappings": [],
            "max": 100,
            "min": 0,
            "thresholds": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "override": {},
          "values": false
        },
        "orientation": "auto",
        "showThresholdLabels": false,
        "showThresholdMarkers": true
      },
      "pluginVersion": "6.5.2",
      "targets": [
        {
          "expr": "nginx_http_connections{state=\"reading\"}",
          "refId": "A"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "HTTP connections Reading",
      "type": "gauge"
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "fill": 2,
      "fillGradient": 2,
      "gridPos": {
        "h": 6,
        "w": 16,
        "x": 0,
        "y": 12
      },
      "hiddenSeries": false,
      "id": 2,
      "legend": {
        "alignAsTable": false,
        "avg": false,
        "current": true,
        "hideEmpty": false,
        "max": false,
        "min": false,
        "rightSide": true,
        "show": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 2,
      "nullPointMode": "null as zero",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pluginVersion": "6.5.2",
      "pointradius": 2,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "irate(nginx_http_requests_total{host=\"\",status=\"200\"}[5m])",
          "hide": false,
          "instant": false,
          "refId": "A"
        },
        {
          "expr": "irate(nginx_http_requests_total{host=\"\",status=\"400\"}[5m])",
          "refId": "B"
        },
        {
          "expr": "irate(nginx_http_requests_total{host=\"\",status=\"500\"}[5m])",
          "refId": "C"
        },
        {
          "expr": "irate(nginx_http_requests_total{host=\"\",status=\"502\"}[5m])",
          "refId": "D"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Nginx status code",
      "tooltip": {
        "shared": true,
        "sort": 0,
        "value_type": "individual"
      },
      "transparent": true,
      "type": "graph",
      "xaxis": {
        "buckets": null,
        "mode": "time",
        "name": null,
        "show": true,
        "values": []
      },
      "yaxes": [
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "format": "short",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    }
  ],
  "refresh": "5s",
  "schemaVersion": 21,
  "style": "dark",
  "tags": [],
  "templating": {
    "list": []
  },
  "time": {
    "from": "now-6h",
    "to": "now"
  },
  "timepicker": {
    "refresh_intervals": [
      "5s",
      "10s",
      "30s",
      "1m",
      "5m",
      "15m",
      "30m",
      "1h",
      "2h",
      "1d"
    ]
  },
  "timezone": "",
  "title": "Nginx",
  "uid": "MsjffzSZz",
  "version": 3
}
