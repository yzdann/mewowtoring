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
  "description": "Support Node Exporter v0.16 and above.Optimize the main metrics display. Includes: CPU, memory, disk IO, network, temperature and other monitoring metrics。https://github.com/starsliao/Prometheus",
  "editable": true,
  "gnetId": 8919,
  "graphTooltip": 0,
  "id": 2,
  "iteration": 1581702320068,
  "links": [
    {
      "asDropdown": false,
      "icon": "info",
      "includeVars": false,
      "tags": [
        "$node"
      ],
      "targetBlank": true,
      "title": "Server IP：$node",
      "type": "link",
      "url": ""
    },
    {
      "icon": "external link",
      "tags": [],
      "targetBlank": true,
      "title": "Update node_exporter",
      "tooltip": "",
      "type": "link",
      "url": "https://github.com/prometheus/node_exporter/releases"
    },
    {
      "icon": "external link",
      "tags": [],
      "targetBlank": true,
      "title": "Update Dashboards",
      "tooltip": "",
      "type": "link",
      "url": "https://grafana.com/dashboards/11074"
    },
    {
      "icon": "external link",
      "tags": [],
      "targetBlank": true,
      "title": "StarsL's Blog",
      "tooltip": "",
      "type": "link",
      "url": "https://starsl.cn"
    }
  ],
  "panels": [
    {
      "cacheTimeout": null,
      "colorBackground": false,
      "colorPostfix": false,
      "colorPrefix": false,
      "colorValue": true,
      "colors": [
        "rgba(245, 54, 54, 0.9)",
        "rgba(237, 129, 40, 0.89)",
        "rgba(50, 172, 45, 0.97)"
      ],
      "datasource": "Prometheus",
      "decimals": 1,
      "description": "",
      "format": "s",
      "gauge": {
        "maxValue": 100,
        "minValue": 0,
        "show": false,
        "thresholdLabels": false,
        "thresholdMarkers": true
      },
      "gridPos": {
        "h": 3,
        "w": 2,
        "x": 0,
        "y": 0
      },
      "hideTimeOverride": true,
      "id": 15,
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
      "nullPointMode": "null",
      "nullText": null,
      "options": {},
      "pluginVersion": "6.4.2",
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
        "show": false
      },
      "tableColumn": "",
      "targets": [
        {
          "expr": "sum(time() - node_boot_time_seconds{instance=~\"$node\"})",
          "format": "time_series",
          "hide": false,
          "instant": true,
          "intervalFactor": 1,
          "refId": "A",
          "step": 40
        }
      ],
      "thresholds": "1,2",
      "title": "System Uptime",
      "type": "singlestat",
      "valueFontSize": "100%",
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
      "colorValue": true,
      "colors": [
        "rgba(245, 54, 54, 0.9)",
        "rgba(237, 129, 40, 0.89)",
        "rgba(50, 172, 45, 0.97)"
      ],
      "datasource": "Prometheus",
      "decimals": 2,
      "description": "",
      "format": "bytes",
      "gauge": {
        "maxValue": 100,
        "minValue": 0,
        "show": false,
        "thresholdLabels": false,
        "thresholdMarkers": true
      },
      "gridPos": {
        "h": 3,
        "w": 2,
        "x": 2,
        "y": 0
      },
      "id": 75,
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
      "maxPerRow": 6,
      "nullPointMode": "null",
      "nullText": null,
      "options": {},
      "postfix": "",
      "postfixFontSize": "70%",
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
        "show": false
      },
      "tableColumn": "",
      "targets": [
        {
          "expr": "sum(node_memory_MemTotal_bytes{instance=~\"$node\"})",
          "format": "time_series",
          "instant": true,
          "intervalFactor": 1,
          "legendFormat": "{{instance}}",
          "refId": "A",
          "step": 20
        }
      ],
      "thresholds": "2,3",
      "title": "Total RAM",
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
      "datasource": "Prometheus",
      "gridPos": {
        "h": 6,
        "w": 4,
        "x": 4,
        "y": 0
      },
      "id": 177,
      "options": {
        "displayMode": "lcd",
        "fieldOptions": {
          "calcs": [
            "last"
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
                "value": 60
              },
              {
                "color": "red",
                "value": 80
              }
            ],
            "title": "",
            "unit": "percent"
          },
          "override": {},
          "values": false
        },
        "orientation": "horizontal"
      },
      "pluginVersion": "6.5.2",
      "targets": [
        {
          "expr": "100 - (avg(irate(node_cpu_seconds_total{instance=~\"$node\",mode=\"idle\"}[30m])) * 100)",
          "instant": true,
          "legendFormat": "CPU Busy",
          "refId": "A"
        },
        {
          "expr": "avg(irate(node_cpu_seconds_total{instance=~\"$node\",mode=\"iowait\"}[30m])) * 100",
          "hide": true,
          "instant": true,
          "legendFormat": "Busy Iowait",
          "refId": "C"
        },
        {
          "expr": "(1 - (node_memory_MemAvailable_bytes{instance=~\"$node\"} / (node_memory_MemTotal_bytes{instance=~\"$node\"})))* 100",
          "instant": true,
          "legendFormat": "Used RAM Memory",
          "refId": "B"
        },
        {
          "expr": "100 - ((node_filesystem_avail_bytes{instance=~\"$node\",mountpoint=\"$maxmount\",fstype=~\"ext4|xfs\"} * 100) / node_filesystem_size_bytes {instance=~\"$node\",mountpoint=\"$maxmount\",fstype=~\"ext4|xfs\"})",
          "hide": false,
          "instant": true,
          "legendFormat": "Used Max Mount($maxmount)",
          "refId": "D"
        },
        {
          "expr": "(1 - (node_memory_SwapFree_bytes{instance=~\"$node\"} / node_memory_SwapTotal_bytes{instance=~\"$node\"})) * 100",
          "instant": true,
          "legendFormat": "Used SWAP",
          "refId": "E"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "",
      "type": "bargauge"
    },
    {
      "columns": [],
      "datasource": "Prometheus",
      "fontSize": "110%",
      "gridPos": {
        "h": 6,
        "w": 10,
        "x": 8,
        "y": 0
      },
      "id": 164,
      "links": [],
      "options": {},
      "pageSize": null,
      "scroll": true,
      "showHeader": true,
      "sort": {
        "col": 6,
        "desc": false
      },
      "styles": [
        {
          "alias": "Mounted on",
          "colorMode": null,
          "colors": [
            "rgba(50, 172, 45, 0.97)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(245, 54, 54, 0.9)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "mappingType": 1,
          "pattern": "mountpoint",
          "thresholds": [
            ""
          ],
          "type": "string",
          "unit": "bytes"
        },
        {
          "alias": "Avail",
          "colorMode": "value",
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "mappingType": 1,
          "pattern": "Value #A",
          "thresholds": [
            "10000000000",
            "20000000000"
          ],
          "type": "number",
          "unit": "bytes"
        },
        {
          "alias": "Used",
          "colorMode": "cell",
          "colors": [
            "rgba(50, 172, 45, 0.97)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(245, 54, 54, 0.9)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "mappingType": 1,
          "pattern": "Value #B",
          "thresholds": [
            "0.6",
            "0.8"
          ],
          "type": "number",
          "unit": "percentunit"
        },
        {
          "alias": "Size",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 1,
          "link": false,
          "mappingType": 1,
          "pattern": "Value #C",
          "thresholds": [],
          "type": "number",
          "unit": "bytes"
        },
        {
          "alias": "Filesystem",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "link": false,
          "mappingType": 1,
          "pattern": "fstype",
          "thresholds": [],
          "type": "string",
          "unit": "short"
        },
        {
          "alias": "IP",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "dateFormat": "YYYY-MM-DD HH:mm:ss",
          "decimals": 2,
          "link": false,
          "mappingType": 1,
          "pattern": "instance",
          "preserveFormat": false,
          "sanitize": false,
          "thresholds": [],
          "type": "string",
          "unit": "short"
        },
        {
          "alias": "",
          "colorMode": null,
          "colors": [
            "rgba(245, 54, 54, 0.9)",
            "rgba(237, 129, 40, 0.89)",
            "rgba(50, 172, 45, 0.97)"
          ],
          "decimals": 2,
          "pattern": "/.*/",
          "preserveFormat": true,
          "sanitize": false,
          "thresholds": [],
          "type": "hidden",
          "unit": "short"
        }
      ],
      "targets": [
        {
          "expr": "node_filesystem_size_bytes{instance=~'$node',fstype=~\"ext4|xfs\"}-0",
          "format": "table",
          "hide": false,
          "instant": true,
          "intervalFactor": 1,
          "legendFormat": "",
          "refId": "C"
        },
        {
          "expr": "node_filesystem_avail_bytes {instance=~'$node',fstype=~\"ext4|xfs\"}-0",
          "format": "table",
          "hide": false,
          "instant": true,
          "interval": "10s",
          "intervalFactor": 1,
          "legendFormat": "",
          "refId": "A"
        },
        {
          "expr": "1-(node_filesystem_free_bytes{instance=~'$node',fstype=~\"ext4|xfs\"} / node_filesystem_size_bytes{instance=~'$node',fstype=~\"ext4|xfs\"})",
          "format": "table",
          "hide": false,
          "instant": true,
          "intervalFactor": 1,
          "legendFormat": "",
          "refId": "B"
        }
      ],
      "title": "Disk Space Used Basic(EXT4/XFS)",
      "transform": "table",
      "type": "table"
    },
    {
      "aliasColors": {
        "filefd_192.168.200.241:9100": "super-light-green",
        "switches_192.168.200.241:9100": "semi-dark-red"
      },
      "bars": false,
      "cacheTimeout": null,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "description": "",
      "fill": 0,
      "fillGradient": 1,
      "gridPos": {
        "h": 6,
        "w": 6,
        "x": 18,
        "y": 0
      },
      "hiddenSeries": false,
      "hideTimeOverride": false,
      "id": 16,
      "legend": {
        "alignAsTable": false,
        "avg": false,
        "current": true,
        "max": true,
        "min": false,
        "rightSide": false,
        "show": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 2,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pluginVersion": "6.4.2",
      "pointradius": 1,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [
        {
          "alias": "/filefd_.*/",
          "lines": false,
          "pointradius": 1,
          "points": true
        },
        {
          "alias": "/switches_.*/",
          "color": "#F2495C",
          "yaxis": 2
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "node_filefd_allocated{instance=~\"$node\"}",
          "format": "time_series",
          "instant": false,
          "interval": "",
          "intervalFactor": 5,
          "legendFormat": "filefd_{{instance}}",
          "refId": "B"
        },
        {
          "expr": "irate(node_context_switches_total{instance=~\"$node\"}[30m])",
          "intervalFactor": 5,
          "legendFormat": "switches_{{instance}}",
          "refId": "A"
        },
        {
          "expr": "node_filefd_maximum{instance=~\"$node\"}",
          "hide": true,
          "refId": "C"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Open  File Descriptor(left)/Context switches(right)",
      "tooltip": {
        "shared": true,
        "sort": 2,
        "value_type": "individual"
      },
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
          "label": "",
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "format": "short",
          "label": "context_switches",
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
    },
    {
      "cacheTimeout": null,
      "colorBackground": false,
      "colorPostfix": false,
      "colorValue": true,
      "colors": [
        "rgba(245, 54, 54, 0.9)",
        "rgba(237, 129, 40, 0.89)",
        "rgba(50, 172, 45, 0.97)"
      ],
      "datasource": "Prometheus",
      "description": "",
      "format": "short",
      "gauge": {
        "maxValue": 100,
        "minValue": 0,
        "show": false,
        "thresholdLabels": false,
        "thresholdMarkers": true
      },
      "gridPos": {
        "h": 3,
        "w": 2,
        "x": 0,
        "y": 3
      },
      "id": 14,
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
      "maxPerRow": 6,
      "nullPointMode": "null",
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
        "show": false
      },
      "tableColumn": "",
      "targets": [
        {
          "expr": "sum(count(node_cpu_seconds_total{instance=~\"$node\", mode='system'}) by (cpu))",
          "format": "time_series",
          "instant": true,
          "intervalFactor": 1,
          "legendFormat": "",
          "refId": "A",
          "step": 20
        }
      ],
      "thresholds": "1,2",
      "title": "CPU Cores",
      "type": "singlestat",
      "valueFontSize": "100%",
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
      "colorValue": true,
      "colors": [
        "#299c46",
        "rgba(237, 129, 40, 0.89)",
        "#d44a3a"
      ],
      "datasource": "Prometheus",
      "decimals": 2,
      "description": "",
      "format": "percent",
      "gauge": {
        "maxValue": 100,
        "minValue": 0,
        "show": false,
        "thresholdLabels": false,
        "thresholdMarkers": true
      },
      "gridPos": {
        "h": 3,
        "w": 2,
        "x": 2,
        "y": 3
      },
      "id": 20,
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
      "pluginVersion": "6.4.2",
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
        "lineColor": "#3274D9",
        "show": true,
        "ymax": null,
        "ymin": null
      },
      "tableColumn": "",
      "targets": [
        {
          "expr": "avg(irate(node_cpu_seconds_total{instance=~\"$node\",mode=\"iowait\"}[30m])) * 100",
          "format": "time_series",
          "hide": false,
          "instant": false,
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "",
          "refId": "A",
          "step": 20
        }
      ],
      "thresholds": "20,50",
      "timeFrom": null,
      "timeShift": null,
      "title": "CPU IOwait",
      "type": "singlestat",
      "valueFontSize": "100%",
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
      "aliasColors": {
        "15分钟": "#6ED0E0",
        "1分钟": "#BF1B00",
        "5分钟": "#CCA300"
      },
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "editable": true,
      "error": false,
      "fill": 1,
      "fillGradient": 1,
      "grid": {},
      "gridPos": {
        "h": 8,
        "w": 8,
        "x": 0,
        "y": 6
      },
      "height": "300",
      "hiddenSeries": false,
      "id": 13,
      "legend": {
        "alignAsTable": true,
        "avg": true,
        "current": true,
        "max": true,
        "min": false,
        "rightSide": false,
        "show": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 2,
      "links": [],
      "maxPerRow": 6,
      "nullPointMode": "null as zero",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "repeat": null,
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "node_load1{instance=~\"$node\"}",
          "format": "time_series",
          "instant": false,
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_1m",
          "metric": "",
          "refId": "A",
          "step": 20,
          "target": ""
        },
        {
          "expr": "node_load5{instance=~\"$node\"}",
          "format": "time_series",
          "instant": false,
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_5m",
          "refId": "B",
          "step": 20
        },
        {
          "expr": "node_load15{instance=~\"$node\"}",
          "format": "time_series",
          "instant": false,
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_15m",
          "refId": "C",
          "step": 20
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "System Load",
      "tooltip": {
        "msResolution": false,
        "shared": true,
        "sort": 2,
        "value_type": "cumulative"
      },
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
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "format": "short",
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
    },
    {
      "aliasColors": {
        "192.168.200.241:9100_Total": "dark-red",
        "Idle - Waiting for something to happen": "#052B51",
        "guest": "#9AC48A",
        "idle": "#052B51",
        "iowait": "#EAB839",
        "irq": "#BF1B00",
        "nice": "#C15C17",
        "sdb_每秒I/O操作%": "#d683ce",
        "softirq": "#E24D42",
        "steal": "#FCE2DE",
        "system": "#508642",
        "user": "#5195CE",
        "磁盘花费在I/O操作占比": "#ba43a9"
      },
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "decimals": 2,
      "description": "",
      "fill": 1,
      "fillGradient": 0,
      "gridPos": {
        "h": 8,
        "w": 8,
        "x": 8,
        "y": 6
      },
      "hiddenSeries": false,
      "id": 7,
      "legend": {
        "alignAsTable": true,
        "avg": true,
        "current": true,
        "hideEmpty": true,
        "hideZero": true,
        "max": true,
        "min": false,
        "rightSide": false,
        "show": true,
        "sideWidth": null,
        "sort": "current",
        "sortDesc": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 2,
      "links": [],
      "maxPerRow": 6,
      "nullPointMode": "null",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "repeat": null,
      "seriesOverrides": [
        {
          "alias": "/.*_Total/",
          "color": "#C4162A",
          "fill": 0
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "avg(irate(node_cpu_seconds_total{instance=~\"$node\",mode=\"system\"}[30m])) by (instance)",
          "format": "time_series",
          "hide": false,
          "instant": false,
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_System",
          "refId": "A",
          "step": 20
        },
        {
          "expr": "avg(irate(node_cpu_seconds_total{instance=~\"$node\",mode=\"user\"}[30m])) by (instance)",
          "format": "time_series",
          "hide": false,
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_User",
          "refId": "B",
          "step": 240
        },
        {
          "expr": "avg(irate(node_cpu_seconds_total{instance=~\"$node\",mode=\"iowait\"}[30m])) by (instance)",
          "format": "time_series",
          "hide": false,
          "instant": false,
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_Iowait",
          "refId": "D",
          "step": 240
        },
        {
          "expr": "1 - avg(irate(node_cpu_seconds_total{instance=~\"$node\",mode=\"idle\"}[30m])) by (instance)",
          "format": "time_series",
          "hide": false,
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_Total",
          "refId": "F",
          "step": 240
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "CPU Basic",
      "tooltip": {
        "shared": true,
        "sort": 2,
        "value_type": "individual"
      },
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
          "decimals": 2,
          "format": "percentunit",
          "label": "",
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
          "show": false
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "aliasColors": {
        "192.168.10.227:9100_em1_in下载": "super-light-green",
        "192.168.10.227:9100_em1_out上传": "dark-blue"
      },
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "fill": 1,
      "fillGradient": 3,
      "gridPos": {
        "h": 8,
        "w": 8,
        "x": 16,
        "y": 6
      },
      "height": "300",
      "hiddenSeries": false,
      "id": 157,
      "legend": {
        "alignAsTable": true,
        "avg": false,
        "current": true,
        "hideEmpty": true,
        "hideZero": true,
        "max": true,
        "min": false,
        "rightSide": false,
        "show": true,
        "sort": "current",
        "sortDesc": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 2,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 2,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [
        {
          "alias": "/.*_transmit$/",
          "transform": "negative-Y"
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "irate(node_network_receive_bytes_total{instance=~'$node',device!~'tap.*|veth.*|br.*|docker.*|virbr*|lo*'}[30m])*8",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_{{device}}_receive",
          "refId": "A",
          "step": 4
        },
        {
          "expr": "irate(node_network_transmit_bytes_total{instance=~'$node',device!~'tap.*|veth.*|br.*|docker.*|virbr*|lo*'}[30m])*8",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_{{device}}_transmit",
          "refId": "B",
          "step": 4
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Network Traffic Basic",
      "tooltip": {
        "shared": true,
        "sort": 2,
        "value_type": "individual"
      },
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
          "format": "bps",
          "label": "transmit（-）/receive（+）",
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
          "show": false
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "fill": 1,
      "fillGradient": 3,
      "gridPos": {
        "h": 8,
        "w": 8,
        "x": 0,
        "y": 14
      },
      "hiddenSeries": false,
      "id": 174,
      "legend": {
        "alignAsTable": true,
        "avg": false,
        "current": true,
        "hideEmpty": false,
        "hideZero": false,
        "max": false,
        "min": false,
        "rightSide": false,
        "show": true,
        "sideWidth": null,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 2,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [
        {
          "alias": "/Inodes.*/",
          "yaxis": 2
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "1-(node_filesystem_free_bytes{instance=~'$node',fstype=~\"ext4|xfs\"} / node_filesystem_size_bytes{instance=~'$node',fstype=~\"ext4|xfs\"})",
          "format": "time_series",
          "instant": false,
          "intervalFactor": 1,
          "legendFormat": "{{instance}}：{{mountpoint}}",
          "refId": "A"
        },
        {
          "expr": "node_filesystem_files_free{instance=~'$node',fstype=~\"ext4|xfs\"} / node_filesystem_files{instance=~'$node',fstype=~\"ext4|xfs\"}",
          "hide": true,
          "legendFormat": "Inodes：{{instance}}：{{mountpoint}}",
          "refId": "B"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Disk Space Used Basic",
      "tooltip": {
        "shared": true,
        "sort": 2,
        "value_type": "individual"
      },
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
          "decimals": 2,
          "format": "percentunit",
          "label": "",
          "logBase": 1,
          "max": null,
          "min": null,
          "show": true
        },
        {
          "decimals": 2,
          "format": "percentunit",
          "label": null,
          "logBase": 1,
          "max": "1",
          "min": null,
          "show": true
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "aliasColors": {
        "192.168.200.241:9100_总内存": "dark-red",
        "内存_Avaliable": "#6ED0E0",
        "内存_Cached": "#EF843C",
        "内存_Free": "#629E51",
        "内存_Total": "#6d1f62",
        "内存_Used": "#eab839",
        "可用": "#9ac48a",
        "总内存": "#bf1b00"
      },
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "decimals": 2,
      "fill": 1,
      "fillGradient": 0,
      "gridPos": {
        "h": 8,
        "w": 8,
        "x": 8,
        "y": 14
      },
      "height": "300",
      "hiddenSeries": false,
      "id": 156,
      "legend": {
        "alignAsTable": true,
        "avg": false,
        "current": true,
        "max": false,
        "min": false,
        "rightSide": false,
        "show": true,
        "sort": "current",
        "sortDesc": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 2,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [
        {
          "alias": "/.*_Total/",
          "color": "#C4162A",
          "fill": 0
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "node_memory_MemTotal_bytes{instance=~\"$node\"}",
          "format": "time_series",
          "hide": false,
          "instant": false,
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_Total",
          "refId": "A",
          "step": 4
        },
        {
          "expr": "node_memory_MemTotal_bytes{instance=~\"$node\"} - node_memory_MemAvailable_bytes{instance=~\"$node\"}",
          "format": "time_series",
          "hide": false,
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_Used",
          "refId": "B",
          "step": 4
        },
        {
          "expr": "node_memory_MemAvailable_bytes{instance=~\"$node\"}",
          "format": "time_series",
          "hide": false,
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_Avaliable",
          "refId": "F",
          "step": 4
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Memory Basic",
      "tooltip": {
        "shared": true,
        "sort": 2,
        "value_type": "individual"
      },
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
          "format": "bytes",
          "label": null,
          "logBase": 1,
          "max": null,
          "min": "0",
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
    },
    {
      "aliasColors": {
        "Idle - Waiting for something to happen": "#052B51",
        "guest": "#9AC48A",
        "idle": "#052B51",
        "iowait": "#EAB839",
        "irq": "#BF1B00",
        "nice": "#C15C17",
        "sdb_每秒I/O操作%": "#d683ce",
        "softirq": "#E24D42",
        "steal": "#FCE2DE",
        "system": "#508642",
        "user": "#5195CE",
        "磁盘花费在I/O操作占比": "#ba43a9"
      },
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "decimals": null,
      "description": "The time spent on I/O in the natural time of each second.（wall-clock time）",
      "fill": 1,
      "fillGradient": 5,
      "gridPos": {
        "h": 8,
        "w": 8,
        "x": 16,
        "y": 14
      },
      "hiddenSeries": false,
      "id": 175,
      "legend": {
        "alignAsTable": true,
        "avg": true,
        "current": true,
        "hideEmpty": true,
        "hideZero": true,
        "max": true,
        "min": false,
        "rightSide": false,
        "show": true,
        "sideWidth": null,
        "sort": null,
        "sortDesc": null,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 2,
      "links": [],
      "maxPerRow": 6,
      "nullPointMode": "null",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "irate(node_disk_io_time_seconds_total{instance=~\"$node\"}[30m])",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_{{device}}_ IO time",
          "refId": "C"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Time Spent Doing I/Os",
      "tooltip": {
        "shared": true,
        "sort": 2,
        "value_type": "individual"
      },
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
          "decimals": null,
          "format": "s",
          "label": "",
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
          "show": false
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "aliasColors": {
        "vda_write": "#6ED0E0"
      },
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "description": "Read/write completions per second",
      "fill": 1,
      "fillGradient": 1,
      "gridPos": {
        "h": 9,
        "w": 8,
        "x": 0,
        "y": 22
      },
      "height": "300",
      "hiddenSeries": false,
      "id": 161,
      "legend": {
        "alignAsTable": true,
        "avg": true,
        "current": true,
        "hideEmpty": true,
        "hideZero": true,
        "max": true,
        "min": false,
        "show": true,
        "sort": "current",
        "sortDesc": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 2,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [
        {
          "alias": "/.*_Reads completed$/",
          "transform": "negative-Y"
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "irate(node_disk_reads_completed_total{instance=~\"$node\"}[30m])",
          "format": "time_series",
          "hide": false,
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_{{device}}_Reads completed",
          "refId": "A",
          "step": 10
        },
        {
          "expr": "irate(node_disk_writes_completed_total{instance=~\"$node\"}[30m])",
          "format": "time_series",
          "hide": false,
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_{{device}}_Writes completed",
          "refId": "B",
          "step": 10
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Disk IOps Completed",
      "tooltip": {
        "shared": true,
        "sort": 2,
        "value_type": "individual"
      },
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
          "decimals": null,
          "format": "iops",
          "label": "IO read (-) / write (+)",
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
    },
    {
      "aliasColors": {
        "vda_write": "#6ED0E0"
      },
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "description": "Per second read / write bytes ",
      "fill": 1,
      "fillGradient": 1,
      "gridPos": {
        "h": 9,
        "w": 8,
        "x": 8,
        "y": 22
      },
      "height": "300",
      "hiddenSeries": false,
      "id": 168,
      "legend": {
        "alignAsTable": true,
        "avg": true,
        "current": true,
        "hideEmpty": true,
        "hideZero": true,
        "max": true,
        "min": false,
        "show": true,
        "sort": "current",
        "sortDesc": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 2,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [
        {
          "alias": "/.*_Read bytes$/",
          "transform": "negative-Y"
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "irate(node_disk_read_bytes_total{instance=~\"$node\"}[30m])",
          "format": "time_series",
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_{{device}}_Read bytes",
          "refId": "A",
          "step": 10
        },
        {
          "expr": "irate(node_disk_written_bytes_total{instance=~\"$node\"}[30m])",
          "format": "time_series",
          "hide": false,
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_{{device}}_Written bytes",
          "refId": "B",
          "step": 10
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Disk R/W Data",
      "tooltip": {
        "shared": true,
        "sort": 2,
        "value_type": "individual"
      },
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
          "decimals": null,
          "format": "Bps",
          "label": "Bytes read (-) / write (+)",
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
          "show": false
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "aliasColors": {
        "vda": "#6ED0E0"
      },
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "description": "Time spent on each read/write operation",
      "fill": 1,
      "fillGradient": 1,
      "gridPos": {
        "h": 9,
        "w": 8,
        "x": 16,
        "y": 22
      },
      "height": "300",
      "hiddenSeries": false,
      "id": 160,
      "legend": {
        "alignAsTable": true,
        "avg": true,
        "current": true,
        "hideEmpty": true,
        "hideZero": true,
        "max": true,
        "min": false,
        "show": true,
        "sort": "current",
        "sortDesc": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 2,
      "links": [],
      "nullPointMode": "null as zero",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [
        {
          "alias": "/,*_Read time$/",
          "transform": "negative-Y"
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "irate(node_disk_read_time_seconds_total{instance=~\"$node\"}[30m]) / irate(node_disk_reads_completed_total{instance=~\"$node\"}[30m])",
          "format": "time_series",
          "hide": false,
          "instant": false,
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_{{device}}_Read time",
          "refId": "B"
        },
        {
          "expr": "irate(node_disk_write_time_seconds_total{instance=~\"$node\"}[30m]) / irate(node_disk_writes_completed_total{instance=~\"$node\"}[30m])",
          "format": "time_series",
          "hide": false,
          "instant": false,
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_{{device}}_Write time",
          "refId": "C"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Disk R/W Time(Reference: less than 100ms)(beta)",
      "tooltip": {
        "shared": true,
        "sort": 2,
        "value_type": "individual"
      },
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
          "format": "s",
          "label": "Time. read (-) / write (+)",
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
          "show": false
        }
      ],
      "yaxis": {
        "align": false,
        "alignLevel": null
      }
    },
    {
      "aliasColors": {
        "TCP": "#6ED0E0"
      },
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "description": "TCP_alloc - Allocated sockets\n\nCurrEstab - TCP connections for which the current state is either ESTABLISHED or CLOSE- WAIT\n\nTCP_tw - Sockets wating close\n\nUDP_inuse - Udp sockets currently in use\n\nSockets_used - Sockets currently in use",
      "fill": 1,
      "fillGradient": 0,
      "gridPos": {
        "h": 12,
        "w": 12,
        "x": 0,
        "y": 31
      },
      "height": "300",
      "id": 158,
      "interval": "",
      "legend": {
        "alignAsTable": true,
        "avg": true,
        "current": true,
        "hideEmpty": true,
        "hideZero": true,
        "max": true,
        "min": false,
        "rightSide": false,
        "show": true,
        "sort": "current",
        "sortDesc": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 2,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [
        {
          "alias": "/.*_Sockets_used/",
          "color": "#C4162A",
          "fill": 0
        }
      ],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "node_netstat_Tcp_CurrEstab{instance=~'$node'}",
          "format": "time_series",
          "hide": false,
          "instant": false,
          "interval": "",
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_CurrEstab",
          "refId": "A",
          "step": 20
        },
        {
          "expr": "node_sockstat_TCP_tw{instance=~'$node'}",
          "format": "time_series",
          "intervalFactor": 1,
          "legendFormat": "{{instance}}_TCP_tw",
          "refId": "D"
        },
        {
          "expr": "node_sockstat_sockets_used{instance=~'$node'}",
          "legendFormat": "{{instance}}_Sockets_used",
          "refId": "B"
        },
        {
          "expr": "node_sockstat_UDP_inuse{instance=~'$node'}",
          "legendFormat": "{{instance}}_UDP_inuse",
          "refId": "C"
        },
        {
          "expr": "node_sockstat_TCP_alloc{instance=~'$node'}",
          "legendFormat": "{{instance}}_TCP_alloc",
          "refId": "E"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Network Sockstat",
      "tooltip": {
        "shared": true,
        "sort": 2,
        "value_type": "individual"
      },
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
    },
    {
      "aliasColors": {},
      "bars": false,
      "dashLength": 10,
      "dashes": false,
      "datasource": "Prometheus",
      "description": "",
      "fill": 0,
      "fillGradient": 1,
      "gridPos": {
        "h": 12,
        "w": 12,
        "x": 12,
        "y": 31
      },
      "id": 169,
      "legend": {
        "alignAsTable": true,
        "avg": true,
        "current": true,
        "hideEmpty": true,
        "hideZero": true,
        "max": true,
        "min": false,
        "rightSide": false,
        "show": true,
        "sideWidth": null,
        "sort": "current",
        "sortDesc": true,
        "total": false,
        "values": true
      },
      "lines": true,
      "linewidth": 2,
      "links": [],
      "nullPointMode": "null",
      "options": {
        "dataLinks": []
      },
      "percentage": false,
      "pointradius": 0.5,
      "points": false,
      "renderer": "flot",
      "seriesOverrides": [],
      "spaceLength": 10,
      "stack": false,
      "steppedLine": false,
      "targets": [
        {
          "expr": "node_hwmon_temp_celsius{instance=~'$node'}",
          "format": "time_series",
          "intervalFactor": 10,
          "legendFormat": "{{instance}}_{{chip}}_{{sensor}}",
          "refId": "A"
        }
      ],
      "thresholds": [],
      "timeFrom": null,
      "timeRegions": [],
      "timeShift": null,
      "title": "Hardware Temperature(VM may not display the metrics)",
      "tooltip": {
        "shared": true,
        "sort": 2,
        "value_type": "individual"
      },
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
          "format": "celsius",
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
  "refresh": false,
  "schemaVersion": 21,
  "style": "dark",
  "tags": [
    "Prometheus",
    "node_exporter",
    "StarsL.cn"
  ],
  "templating": {
    "list": [
      {
        "allValue": null,
        "current": {
          "text": "system",
          "value": "system"
        },
        "datasource": "Prometheus",
        "definition": "label_values(node_uname_info, job)",
        "hide": 0,
        "includeAll": false,
        "label": "JOB",
        "multi": false,
        "name": "job",
        "options": [],
        "query": "label_values(node_uname_info, job)",
        "refresh": 1,
        "regex": "",
        "skipUrlSync": false,
        "sort": 1,
        "tagValuesQuery": "",
        "tags": [],
        "tagsQuery": "",
        "type": "query",
        "useTags": false
      },
      {
        "allValue": null,
        "current": {
          "selected": false,
          "text": "All",
          "value": "$__all"
        },
        "datasource": "Prometheus",
        "definition": "label_values(node_uname_info{job=~\"$job\"}, nodename)",
        "hide": 0,
        "includeAll": true,
        "label": "Host",
        "multi": true,
        "name": "hostname",
        "options": [],
        "query": "label_values(node_uname_info{job=~\"$job\"}, nodename)",
        "refresh": 1,
        "regex": "",
        "skipUrlSync": false,
        "sort": 0,
        "tagValuesQuery": "",
        "tags": [],
        "tagsQuery": "",
        "type": "query",
        "useTags": false
      },
      {
        "allFormat": "glob",
        "allValue": null,
        "current": {
          "selected": false,
          "text": "All",
          "value": "$__all"
        },
        "datasource": "Prometheus",
        "definition": "label_values(node_uname_info{nodename=~\"$hostname\"},instance)",
        "hide": 0,
        "includeAll": true,
        "label": "IP",
        "multi": false,
        "multiFormat": "regex values",
        "name": "node",
        "options": [],
        "query": "label_values(node_uname_info{nodename=~\"$hostname\"},instance)",
        "refresh": 2,
        "regex": "",
        "skipUrlSync": false,
        "sort": 1,
        "tagValuesQuery": "",
        "tags": [],
        "tagsQuery": "",
        "type": "query",
        "useTags": false
      },
      {
        "allValue": null,
        "current": {
          "text": "/",
          "value": "/"
        },
        "datasource": "Prometheus",
        "definition": "",
        "hide": 2,
        "includeAll": false,
        "label": "",
        "multi": false,
        "name": "maxmount",
        "options": [],
        "query": "query_result(topk(1,sort_desc (max(node_filesystem_size_bytes{instance=~'$node',fstype=~\"ext4|xfs\"}) by (mountpoint))))",
        "refresh": 2,
        "regex": "/.*\\\"(.*)\\\".*/",
        "skipUrlSync": false,
        "sort": 0,
        "tagValuesQuery": "",
        "tags": [],
        "tagsQuery": "",
        "type": "query",
        "useTags": false
      },
      {
        "allFormat": "glob",
        "allValue": null,
        "current": {
          "isNone": true,
          "selected": false,
          "text": "None",
          "value": ""
        },
        "datasource": "Prometheus",
        "definition": "",
        "hide": 2,
        "includeAll": false,
        "label": "环境",
        "multi": false,
        "multiFormat": "regex values",
        "name": "env",
        "options": [],
        "query": "label_values(node_exporter_build_info,env)",
        "refresh": 2,
        "regex": "",
        "skipUrlSync": false,
        "sort": 1,
        "tagValuesQuery": "",
        "tags": [],
        "tagsQuery": "",
        "type": "query",
        "useTags": false
      },
      {
        "allFormat": "glob",
        "allValue": "",
        "current": {
          "isNone": true,
          "selected": false,
          "text": "None",
          "value": ""
        },
        "datasource": "Prometheus",
        "definition": "label_values(node_exporter_build_info{env=~'$env'},name)",
        "hide": 2,
        "includeAll": false,
        "label": "名称",
        "multi": true,
        "multiFormat": "regex values",
        "name": "name",
        "options": [],
        "query": "label_values(node_exporter_build_info{env=~'$env'},name)",
        "refresh": 2,
        "regex": "",
        "skipUrlSync": false,
        "sort": 1,
        "tagValuesQuery": "/.*/",
        "tags": [],
        "tagsQuery": "",
        "type": "query",
        "useTags": false
      }
    ]
  },
  "time": {
    "from": "now-2d",
    "to": "now"
  },
  "timepicker": {
    "now": true,
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
    ],
    "time_options": [
      "5m",
      "15m",
      "1h",
      "6h",
      "12h",
      "24h",
      "2d",
      "7d",
      "30d"
    ]
  },
  "timezone": "browser",
  "title": "Node-exporter",
  "uid": "hb7fSE0Zz",
  "version": 1
}
