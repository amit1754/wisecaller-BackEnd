export default {
  "swagger": "2.0",
  "info": {
    "version": "1.0",
    "title": "wisecaller contactsync",
    "contact": {}
  },
  "host": "localhost:5000",
  "basePath": "/api/v1",

  "securityDefinitions": {
    "Bearer": {
      "type": "http",
      "schema": "bearer",
      "bearerFormat": "JWT",

    }
  },
  "security": {
    "bearerAuth": []
  },
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
    "/contact/sync": {
      "post": {
        "summary": "SyncContact",
        "tags": [
          "Misc"
        ],
        "operationId": "SyncContact",
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
              "$ref": "#/definitions/SyncContactRequest"
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
    "/contact/get": {
      "get": {

        "summary": "Get contact details",
        "tags": [
          "Misc"
        ],
        "operationId": "Getcontactdetails",
        "deprecated": false,
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "number",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32",
            "description": ""
          },
          {
            "name": "isFavourite",
            "in": "query",
            "required": false,
            "type": "boolean",
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
    "/calender/sync": {
      "post": {
        "summary": "calenderSync",
        "tags": [
          "Misc"
        ],
        "operationId": "calenderSync",
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
              "$ref": "#/definitions/calenderSyncRequest"
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
    "/calender/get": {
      "get": {
        "summary": "calenderEvent Get",
        "tags": [
          "Misc"
        ],
        "operationId": "calenderEventGet",
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
            "description": "",
            "headers": {}
          }
        }
      }
    },
    "/calender/update/{id}": {
      "put": {
        "summary": "update email address",
        "tags": [
          "Misc"
        ],
        "operationId": "updateemailaddress",
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
            "name": "Authorization",
            "in": "header",
            "required": false,
            "default": "Bearer {token}",
            "type": "string"
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
    "SyncContactRequest": {
      "title": "SyncContactRequest",
      "example": {
        "mobileNO": "+918980514085",
        "contact": [
          {
            "name": "abc",
            "number": "+918849455045",
            "isFavorite": true,
            "isBlock": true
          },
          {
            "name": "abc1",
            "nummber": "+911234567889",
            "isFavorite": true
          },
          {
            "name": "abcd",
            "nummber": "+911234567888",
            "isFavorite": true
          },
          {
            "name": "abcd1",
            "nummber": "+911234567889",
            "isFavorite": true
          },
          {
            "name": "abcd3",
            "nummber": "+911234567810",
            "isFavorite": true
          }
        ]
      },
      "type": "object",
      "properties": {
        "mobileNO": {
          "type": "string"
        },
        "contact": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Contact"
          }
        }
      },
      "required": [
        "mobileNO",
        "contact"
      ]
    },
    "Contact": {
      "title": "Contact",
      "example": {
        "name": "abc",
        "number": "+918849455045",
        "isFavorite": true,
        "isBlock": true
      },
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "number": {
          "type": "string"
        },
        "isFavorite": {
          "type": "boolean"
        },
        "isBlock": {
          "type": "boolean"
        },
        "nummber": {
          "type": "string"
        }
      },
      "required": [
        "name",
        "isFavorite"
      ]
    },
    "calenderSyncRequest": {
      "title": "calenderSyncRequest",
      "example": {
        "email": "savaliyatushar2197@gmail.com",
        "calenderEvent": [
          {
            "eventName": "abc",
            "allDay": true,
            "startDate": "24-05-2021",
            "endDay": "24-05-2021"
          },
          {
            "eventName": "abc1",
            "allDay": true,
            "startDate": "24-05-2021",
            "endDay": "24-05-2021"
          }
        ]
      },
      "type": "object",
      "properties": {
        "email": {
          "type": "string"
        },
        "calenderEvent": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/CalenderEvent"
          }
        }
      },
      "required": [
        "email",
        "calenderEvent"
      ]
    },
    "CalenderEvent": {
      "title": "CalenderEvent",
      "example": {
        "eventName": "abc",
        "allDay": true,
        "startDate": "24-05-2021",
        "endDay": "24-05-2021"
      },
      "type": "object",
      "properties": {
        "eventName": {
          "type": "string"
        },
        "allDay": {
          "type": "boolean"
        },
        "startDate": {
          "type": "string"
        },
        "endDay": {
          "type": "string"
        }
      },
      "required": [
        "eventName",
        "allDay",
        "startDate",
        "endDay"
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