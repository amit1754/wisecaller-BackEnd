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
        "summary": "AddEvent status",
        "tags": [
          "Misc"
        ],
        "operationId": "AddEventstatus",
        "deprecated": false,
        "produces": [
          "application/json"
        ],
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "parameters": [
          {
            "name": "status",
            "in": "formData",
            "required": true,
            "type": "string",
            "description": ""
          },
          {
            "name": "logo",
            "in": "formData",
            "required": true,
            "type": "file",
            "description": ""
          }
        ],
        "responses": {
          "default": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/m200"
            },
            "examples": {
              "application/json": {
                "success": true,
                "message": "Sucess",
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
        "summary": "Get Event status",
        "tags": [
          "Misc"
        ],
        "operationId": "GetEventstatus",
        "deprecated": false,
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "default": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/m2001"
            },
            "examples": {
              "application/json": {
                "success": true,
                "data": [
                  {
                    "isDeleted": false,
                    "_id": "612e3103185624e6a914bd55",
                    "status": "ACTIVE!",
                    "createdAt": "2021-08-31T13:39:15.359Z",
                    "updatedAt": "2021-08-31T17:11:27.592Z",
                    "__v": 0
                  },
                  {
                    "isDeleted": false,
                    "_id": "612e310c185624e6a914bd57",
                    "status": "Do not Disturb",
                    "createdAt": "2021-08-31T13:39:24.778Z",
                    "updatedAt": "2021-08-31T13:39:24.778Z",
                    "__v": 0
                  },
                  {
                    "isDeleted": false,
                    "_id": "612e32a6b2dbfee915b48429",
                    "createdAt": "2021-08-31T13:46:14.115Z",
                    "updatedAt": "2021-08-31T13:46:14.115Z",
                    "__v": 0
                  },
                  {
                    "isDeleted": false,
                    "_id": "612e339b408f69eaa6c668c4",
                    "status": "BUSY1",
                    "createdAt": "2021-08-31T13:50:19.869Z",
                    "updatedAt": "2021-08-31T13:50:19.869Z",
                    "__v": 0
                  },
                  {
                    "isDeleted": false,
                    "_id": "612e33c3408f69eaa6c668c8",
                    "status": "BUSY1",
                    "createdAt": "2021-08-31T13:50:59.435Z",
                    "updatedAt": "2021-08-31T13:50:59.435Z",
                    "__v": 0
                  },
                  {
                    "isDeleted": false,
                    "_id": "612e30cb185624e6a914bd53",
                    "__v": 0,
                    "createdAt": "2021-08-31T16:58:40.765Z",
                    "status": "BUSY1",
                    "updatedAt": "2021-08-31T17:05:29.431Z"
                  },
                  {
                    "isDeleted": false,
                    "_id": "612e5fcbc5245700095cc4aa",
                    "status": "Do not Disturb1",
                    "createdAt": "2021-08-31T16:58:51.149Z",
                    "updatedAt": "2021-08-31T16:58:51.149Z",
                    "__v": 0
                  },
                  {
                    "isDeleted": false,
                    "_id": "612e6140c5245700095cc4ac",
                    "status": "Do not Disturb2",
                    "createdAt": "2021-08-31T17:05:04.226Z",
                    "updatedAt": "2021-08-31T17:05:04.226Z",
                    "__v": 0
                  },
                  {
                    "isDeleted": false,
                    "_id": "615aa519a862b7f16f20f184",
                    "status": "DND",
                    "logo": "1633330451566.png",
                    "createdAt": "2021-10-04T06:54:18.022Z",
                    "updatedAt": "2021-10-04T06:54:18.022Z",
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
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "header",
            "required": false,
            "type": "string"
          },
          {
            "name": "status",
            "in": "formData",
            "required": true,
            "type": "string",
            "description": ""
          },
          {
            "name": "logo",
            "in": "formData",
            "required": true,
            "type": "file",
            "description": ""
          }
        ],
        "responses": {
          "default": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/m2002"
            },
            "examples": {
              "application/json": {
                "success": true,
                "message": "user Event Status update successfully",
                "data": {
                  "isDeleted": false,
                  "_id": "615aa519a862b7f16f20f184",
                  "status": "DND",
                  "logo": "1633330513170.png",
                  "createdAt": "2021-10-04T06:54:18.022Z",
                  "updatedAt": "2021-10-04T06:55:16.352Z",
                  "__v": 0
                }
              }
            },
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
            "name": "id",
            "in": "header",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "default": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/m2002"
            },
            "examples": {
              "application/json": {
                "success": true,
                "message": "Event Status delete sucessfully",
                "data": {
                  "isDeleted": false,
                  "_id": "615aa519a862b7f16f20f184",
                  "status": "DND",
                  "logo": "1633330513170.png",
                  "createdAt": "2021-10-04T06:54:18.022Z",
                  "updatedAt": "2021-10-04T06:55:16.352Z",
                  "__v": 0
                }
              }
            },
            "headers": {}
          }
        }
      }
    },
    "/add-sub": {
      "post": {
        "summary": "add sub status",
        "tags": [
          "Misc"
        ],
        "operationId": "addsubstatus",
        "deprecated": false,
        "produces": [
          "application/json"
        ],
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "parameters": [
          {
            "name": "status",
            "in": "formData",
            "required": true,
            "type": "string",
            "description": ""
          },
          {
            "name": "parentId",
            "in": "formData",
            "required": true,
            "type": "string",
            "description": ""
          },
          {
            "name": "logo",
            "in": "formData",
            "required": true,
            "type": "string",
            "description": ""
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
    "/sub-update/{id}": {
      "put": {
        "summary": "update Event sub",
        "tags": [
          "Misc"
        ],
        "operationId": "updateEventsub",
        "deprecated": false,
        "produces": [
          "application/json"
        ],
        "consumes": [
          "application/x-www-form-urlencoded"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "header",
            "required": false,
            "type": "string"
          },
          {
            "name": "status",
            "in": "formData",
            "required": true,
            "type": "string",
            "description": ""
          },
          {
            "name": "logo",
            "in": "formData",
            "required": true,
            "type": "string",
            "description": ""
          },
          {
            "name": "parentId",
            "in": "formData",
            "required": true,
            "type": "string",
            "description": ""
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
    "m200": {
      "title": "m200",
      "example": {
        "success": true,
        "message": "Sucess",
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
    "m2001": {
      "title": "m2001",
      "example": {
        "success": true,
        "data": [
          {
            "isDeleted": false,
            "_id": "612e3103185624e6a914bd55",
            "status": "ACTIVE!",
            "createdAt": "2021-08-31T13:39:15.359Z",
            "updatedAt": "2021-08-31T17:11:27.592Z",
            "__v": 0
          },
          {
            "isDeleted": false,
            "_id": "612e310c185624e6a914bd57",
            "status": "Do not Disturb",
            "createdAt": "2021-08-31T13:39:24.778Z",
            "updatedAt": "2021-08-31T13:39:24.778Z",
            "__v": 0
          },
          {
            "isDeleted": false,
            "_id": "612e32a6b2dbfee915b48429",
            "createdAt": "2021-08-31T13:46:14.115Z",
            "updatedAt": "2021-08-31T13:46:14.115Z",
            "__v": 0
          },
          {
            "isDeleted": false,
            "_id": "612e339b408f69eaa6c668c4",
            "status": "BUSY1",
            "createdAt": "2021-08-31T13:50:19.869Z",
            "updatedAt": "2021-08-31T13:50:19.869Z",
            "__v": 0
          },
          {
            "isDeleted": false,
            "_id": "612e33c3408f69eaa6c668c8",
            "status": "BUSY1",
            "createdAt": "2021-08-31T13:50:59.435Z",
            "updatedAt": "2021-08-31T13:50:59.435Z",
            "__v": 0
          },
          {
            "isDeleted": false,
            "_id": "612e30cb185624e6a914bd53",
            "__v": 0,
            "createdAt": "2021-08-31T16:58:40.765Z",
            "status": "BUSY1",
            "updatedAt": "2021-08-31T17:05:29.431Z"
          },
          {
            "isDeleted": false,
            "_id": "612e5fcbc5245700095cc4aa",
            "status": "Do not Disturb1",
            "createdAt": "2021-08-31T16:58:51.149Z",
            "updatedAt": "2021-08-31T16:58:51.149Z",
            "__v": 0
          },
          {
            "isDeleted": false,
            "_id": "612e6140c5245700095cc4ac",
            "status": "Do not Disturb2",
            "createdAt": "2021-08-31T17:05:04.226Z",
            "updatedAt": "2021-08-31T17:05:04.226Z",
            "__v": 0
          },
          {
            "isDeleted": false,
            "_id": "615aa519a862b7f16f20f184",
            "status": "DND",
            "logo": "1633330451566.png",
            "createdAt": "2021-10-04T06:54:18.022Z",
            "updatedAt": "2021-10-04T06:54:18.022Z",
            "__v": 0
          }
        ]
      },
      "type": "object",
      "properties": {
        "success": {
          "type": "boolean"
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
        "data"
      ]
    },
    "Datum": {
      "title": "Datum",
      "example": {
        "isDeleted": false,
        "_id": "612e3103185624e6a914bd55",
        "status": "ACTIVE!",
        "createdAt": "2021-08-31T13:39:15.359Z",
        "updatedAt": "2021-08-31T17:11:27.592Z",
        "__v": 0
      },
      "type": "object",
      "properties": {
        "isDeleted": {
          "type": "boolean"
        },
        "_id": {
          "type": "string"
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
        },
        "logo": {
          "type": "string"
        }
      },
      "required": [
        "isDeleted",
        "_id",
        "createdAt",
        "updatedAt",
        "__v"
      ]
    },
    "m2002": {
      "title": "m2002",
      "example": {
        "success": true,
        "message": "user Event Status update successfully",
        "data": {
          "isDeleted": false,
          "_id": "615aa519a862b7f16f20f184",
          "status": "DND",
          "logo": "1633330513170.png",
          "createdAt": "2021-10-04T06:54:18.022Z",
          "updatedAt": "2021-10-04T06:55:16.352Z",
          "__v": 0
        }
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
          "$ref": "#/definitions/Data"
        }
      },
      "required": [
        "success",
        "message",
        "data"
      ]
    },
    "Data": {
      "title": "Data",
      "example": {
        "isDeleted": false,
        "_id": "615aa519a862b7f16f20f184",
        "status": "DND",
        "logo": "1633330513170.png",
        "createdAt": "2021-10-04T06:54:18.022Z",
        "updatedAt": "2021-10-04T06:55:16.352Z",
        "__v": 0
      },
      "type": "object",
      "properties": {
        "isDeleted": {
          "type": "boolean"
        },
        "_id": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "logo": {
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
        "isDeleted",
        "_id",
        "status",
        "logo",
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