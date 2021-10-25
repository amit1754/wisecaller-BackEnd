export default {
  "swagger": "2.0",
  "info": {
    "version": "1.0",
    "title": "wisecaller status",
    "contact": {}
  },
  "host": "aa5jvj8sn5.execute-api.us-east-1.amazonaws.com/dev",
  "basePath": "/api/v1/event",
  "schemes": [
    "https"
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "paths": {
    "/add": {
      "post": {
        "summary": "Get Event status",
        "tags": [
          "Misc"
        ],
        "operationId": "GetEventstatus",
        "deprecated": false,
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Body",
            "in": "body",
            "required": true,
            "description": "",
            "schema": {
              "$ref": "#/definitions/GetEventstatusRequest"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "headers": {}
          }
        }
      }
    },
    "/get": {
      "get": {
        "summary": "Get Event status",
        "tags": [
          "Misc"
        ],
        "operationId": "GetEventstatus1",
        "deprecated": false,
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "",
            "headers": {}
          }
        }
      }
    },
    "/update/{id}": {
      "put": {
        "summary": "update Event detaiols",
        "tags": [
          "Misc"
        ],
        "operationId": "updateEventdetaiols",
        "deprecated": false,
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }

          },
          {
            "name": "Body",
            "in": "body",
            "required": true,
            "description": "",
            "schema": {
              "$ref": "#/definitions/updateEventdetaiolsRequest"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "headers": {}
          }
        }
      }
    },
    "/delete/{id}": {
      "delete": {
        "summary": "Delete Event Status",
        "tags": [
          "Misc"
        ],
        "operationId": "DeleteEventStatus",
        "deprecated": false,
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "type": "string"
            }

          },
        ],
        "responses": {
          "200": {
            "description": "",
            "headers": {}
          }
        }
      }
    }
  },
  "definitions": {
    "GetEventstatusRequest": {
      "title": "GetEventstatusRequest",
      "example": {
        "status": "Do not Disturb"
      },
      "type": "object",
      "properties": {
        "status": {
          "type": "string"
        }
      },
      "required": [
        "status"
      ]
    },
    "updateEventdetaiolsRequest": {
      "title": "updateEventdetaiolsRequest",
      "example": {
        "status": "BUSY1"
      },
      "type": "object",
      "properties": {
        "status": {
          "type": "string"
        }
      },
      "required": [
        "status"
      ]
    }
  },
  "tags": [
    {
      "name": "Misc",
      "description": ""
    }
  ]
}