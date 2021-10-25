export default {
  "swagger": "2.0",
  "info": {
    "version": "1.0",
    "title": "wisecaller custom sms",
    "contact": {}
  },
  "host": "localhost:5000/api/v1",
  "basePath": "/sms",
  "schemes": [
    "http"
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "paths": {
    "/send": {
      "post": {
        "summary": "send custom message",
        "tags": [
          "Misc"
        ],
        "operationId": "sendcustommessage",
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
              "$ref": "#/definitions/sendcustommessagerequest"
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
    }
  },
  "definitions": {
    "sendcustommessagerequest": {
      "title": "sendcustommessagerequest",
      "example": {
        "mobileNo": "+918849455045",
        "message": "custom message"
      },
      "type": "object",
      "properties": {
        "mobileNo": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      },
      "required": [
        "mobileNo",
        "message"
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