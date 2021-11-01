export default {
  "swagger": "2.0",
  "info": {
    "version": "1.0",
    "title": "wisecaller working days",
    "contact": {}
  },
  "host": "9msbe76tz7.execute-api.us-east-1.amazonaws.com/dev",
  "basePath": "/api/v1/work-life",
  "securityDefinitions": {},
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
        "summary": "Add hrs",
        "tags": [
          "Misc"
        ],
        "operationId": "Addhrs",
        "deprecated": false,
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": false,
            "default": "Bearer {token}",
            "type": "string"
          },
          {
            "name": "Body",
            "in": "body",
            "required": true,
            "description": "",
            "schema": {
              "$ref": "#/definitions/AddhrsRequest"
            }
          }
        ],
        "responses": {
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": "#/definitions/m5001"
            },
            "examples": {
              "application/json": {
                "success": false,
                "message": "endTime is required"
              }
            },
            "headers": {}
          },
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/m5001"
            },
            "examples": {
              "application/json": {
                "success": true,
                "message": "workingdays Added successfully"
              }
            },
            "headers": {}
          }
        }
      }
    },
    "/update/611b8e97c8252e0008fb4269": {
      "put": {
        "summary": "update  hrs",
        "tags": [
          "Misc"
        ],
        "operationId": "updatehrs",
        "deprecated": false,
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": false,
            "default": "Bearer {token}",
            "type": "string"
          },
          {
            "name": "Body",
            "in": "body",
            "required": true,
            "description": "",
            "schema": {
              "$ref": "#/definitions/updatehrsrequest"
            }
          }
        ],
        "responses": {
          "default": {
            "description": "",
            "headers": {}
          },
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/m2001"
            },
            "examples": {
              "application/json": {
                "success": true,
                "message": "workingdays update successfully",
                "data": []
              }
            },
            "headers": {}
          }
        }
      }
    },
    "/get": {
      "get": {
        "summary": "Get Hrs",
        "tags": [
          "Misc"
        ],
        "operationId": "GetHrs",
        "deprecated": false,
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": false,
            "default": "Bearer {token}",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/m2002"
            },
            "examples": {
              "application/json": {
                "success": true,
                "message": "workingdays get successfully",
                "data": [
                  {
                    "_id": "613b608065f6f2404e2dd33f",
                    "Monday": false,
                    "Tuesday": true,
                    "Wednesday": true,
                    "Thursday": true,
                    "Friday": true,
                    "Saturday": true,
                    "startTime": "09:00 AM",
                    "endTime": "10:00 PM",
                    "otherStatus": {
                      "_id": "612e310c185624e6a914bd57",
                      "isDeleted": false,
                      "status": "Do not Disturb",
                      "createdAt": "2021-08-31T13:39:24.778Z",
                      "updatedAt": "2021-08-31T13:39:24.778Z",
                      "__v": 0
                    },
                    "user": "61211f1ef34e5900080a6812",
                    "createdAt": "2021-09-10T13:41:20.086Z",
                    "updatedAt": "2021-09-10T13:41:20.086Z",
                    "__v": 0
                  }
                ]
              }
            },
            "headers": {}
          }
        }
      }
    },
    "/get/611b4ea37ffbe47789e35ecc": {
      "delete": {
        "summary": "delete working days",
        "tags": [
          "Misc"
        ],
        "operationId": "deleteworkingdays",
        "deprecated": false,
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": false,
            "default": "Bearer {token}",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/m2001"
            },
            "examples": {
              "application/json": {
                "success": true,
                "message": "workingdays delete successfully",
                "data": []
              }
            },
            "headers": {}
          },
          "500": {
            "description": "Internal Server Error",
            "schema": {
              "$ref": "#/definitions/m5001"
            },
            "examples": {
              "application/json": {
                "success": false,
                "message": "id is invalid"
              }
            },
            "headers": {}
          }
        }
      }
    }
  },
  "definitions": {
    "AddhrsRequest": {
      "title": "AddhrsRequest",
      "example": {
        "Monday": false,
        "Tuesday": true,
        "Wednesday": true,
        "Thursday": true,
        "Friday": true,
        "Saturday": true,
        "Sunday": true,
        "startTime": "09:00 AM",
        "endTime": "10:00 PM",
        "otherStatus": "612e310c185624e6a914bd57"
      },
      "type": "object",
      "properties": {
        "Monday": {
          "type": "boolean"
        },
        "Tuesday": {
          "type": "boolean"
        },
        "Wednesday": {
          "type": "boolean"
        },
        "Thursday": {
          "type": "boolean"
        },
        "Friday": {
          "type": "boolean"
        },
        "Saturday": {
          "type": "boolean"
        },
        "Sunday": {
          "type": "boolean"
        },
        "startTime": {
          "type": "string"
        },
        "endTime": {
          "type": "string"
        },
        "otherStatus": {
          "type": "string"
        }
      },
      "required": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "startTime",
        "endTime",
        "otherStatus"
      ]
    },
    "m5001": {
      "title": "m5001",
      "example": {
        "success": false,
        "message": "endTime is required"
      },
      "type": "object",
      "properties": {
        "success": {
          "type": "boolean"
        },
        "message": {
          "type": "string"
        }
      },
      "required": [
        "success",
        "message"
      ]
    },
    "updatehrsrequest": {
      "title": "updatehrsrequest",
      "example": {
        "Monday": false,
        "Tuesday": true,
        "Wednesday": true,
        "Thursday": true,
        "Friday": true,
        "Saturday": true,
        "Sunday": true,
        "startTime": "09:00 AM",
        "endTime": "10:00 PM",
        "otherStatus": "612e310c185624e6a914bd57"
      },
      "type": "object",
      "properties": {
        "Monday": {
          "type": "boolean"
        },
        "Tuesday": {
          "type": "boolean"
        },
        "Wednesday": {
          "type": "boolean"
        },
        "Thursday": {
          "type": "boolean"
        },
        "Friday": {
          "type": "boolean"
        },
        "Saturday": {
          "type": "boolean"
        },
        "Sunday": {
          "type": "boolean"
        },
        "startTime": {
          "type": "string"
        },
        "endTime": {
          "type": "string"
        },
        "otherStatus": {
          "type": "string"
        }
      },
      "required": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "startTime",
        "endTime",
        "otherStatus"
      ]
    },
    "m2001": {
      "title": "m2001",
      "example": {
        "success": true,
        "message": "workingdays update successfully",
        "data": []
      },
      "type": "object",
      "properties": {
        "success": {
          "type": "boolean"
        },
        "message": {
          "type": "string"
        },
        "data": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "success",
        "message",
        "data"
      ]
    },
    "m2002": {
      "title": "m2002",
      "example": {
        "success": true,
        "message": "workingdays get successfully",
        "data": [
          {
            "_id": "613b608065f6f2404e2dd33f",
            "Monday": false,
            "Tuesday": true,
            "Wednesday": true,
            "Thursday": true,
            "Friday": true,
            "Saturday": true,
            "startTime": "09:00 AM",
            "endTime": "10:00 PM",
            "otherStatus": {
              "_id": "612e310c185624e6a914bd57",
              "isDeleted": false,
              "status": "Do not Disturb",
              "createdAt": "2021-08-31T13:39:24.778Z",
              "updatedAt": "2021-08-31T13:39:24.778Z",
              "__v": 0
            },
            "user": "61211f1ef34e5900080a6812",
            "createdAt": "2021-09-10T13:41:20.086Z",
            "updatedAt": "2021-09-10T13:41:20.086Z",
            "__v": 0
          }
        ]
      },
      "type": "object",
      "properties": {
        "success": {
          "type": "boolean"
        },
        "message": {
          "type": "string"
        },
        "data": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Datum"
          }
        }
      },
      "required": [
        "success",
        "message",
        "data"
      ]
    },
    "Datum": {
      "title": "Datum",
      "example": {
        "_id": "613b608065f6f2404e2dd33f",
        "Monday": false,
        "Tuesday": true,
        "Wednesday": true,
        "Thursday": true,
        "Friday": true,
        "Saturday": true,
        "startTime": "09:00 AM",
        "endTime": "10:00 PM",
        "otherStatus": {
          "_id": "612e310c185624e6a914bd57",
          "isDeleted": false,
          "status": "Do not Disturb",
          "createdAt": "2021-08-31T13:39:24.778Z",
          "updatedAt": "2021-08-31T13:39:24.778Z",
          "__v": 0
        },
        "user": "61211f1ef34e5900080a6812",
        "createdAt": "2021-09-10T13:41:20.086Z",
        "updatedAt": "2021-09-10T13:41:20.086Z",
        "__v": 0
      },
      "type": "object",
      "properties": {
        "_id": {
          "type": "string"
        },
        "Monday": {
          "type": "boolean"
        },
        "Tuesday": {
          "type": "boolean"
        },
        "Wednesday": {
          "type": "boolean"
        },
        "Thursday": {
          "type": "boolean"
        },
        "Friday": {
          "type": "boolean"
        },
        "Saturday": {
          "type": "boolean"
        },
        "startTime": {
          "type": "string"
        },
        "endTime": {
          "type": "string"
        },
        "otherStatus": {
          "$ref": "#/definitions/OtherStatus"
        },
        "user": {
          "type": "string"
        },
        "createdAt": {
          "type": "string"
        },
        "updatedAt": {
          "type": "string"
        },
        "__v": {
          "type": "integer",
          "format": "int32"
        }
      },
      "required": [
        "_id",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "startTime",
        "endTime",
        "otherStatus",
        "user",
        "createdAt",
        "updatedAt",
        "__v"
      ]
    },
    "OtherStatus": {
      "title": "OtherStatus",
      "example": {
        "_id": "612e310c185624e6a914bd57",
        "isDeleted": false,
        "status": "Do not Disturb",
        "createdAt": "2021-08-31T13:39:24.778Z",
        "updatedAt": "2021-08-31T13:39:24.778Z",
        "__v": 0
      },
      "type": "object",
      "properties": {
        "_id": {
          "type": "string"
        },
        "isDeleted": {
          "type": "boolean"
        },
        "status": {
          "type": "string"
        },
        "createdAt": {
          "type": "string"
        },
        "updatedAt": {
          "type": "string"
        },
        "__v": {
          "type": "integer",
          "format": "int32"
        }
      },
      "required": [
        "_id",
        "isDeleted",
        "status",
        "createdAt",
        "updatedAt",
        "__v"
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