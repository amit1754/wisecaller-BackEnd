export default {
  "swagger": "2.0",
  "info": {
    "version": "1.0",
    "title": "wisecaller call servicce",
    "contact": {}
  },
  "host": "okfeyhobj3.execute-api.us-east-1.amazonaws.com/dev/api/v1",
  "basePath": "/callhistory",
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
    "/get": {
      "post": {
        "summary": "call history",
        "tags": [
          "Misc"
        ],
        "operationId": "callhistory",
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
              "$ref": "#/definitions/callhistoryrequest"
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
    "/call-details": {
      "post": {
        "summary": "call details",
        "tags": [
          "Misc"
        ],
        "operationId": "calldetails",
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
              "$ref": "#/definitions/calldetailsrequest"
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
    "/favorite-add": {
      "post": {
        "summary": "Add favorite",
        "tags": [
          "Misc"
        ],
        "operationId": "Addfavorite",
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
              "$ref": "#/definitions/AddfavoriteRequest"
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
    "/block-add": {
      "post": {
        "summary": "Add Block contact",
        "tags": [
          "Misc"
        ],
        "operationId": "AddBlockcontact",
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
              "$ref": "#/definitions/AddBlockcontactRequest"
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
    "callhistoryrequest": {
      "title": "callhistoryrequest",
      "example": {
        "contact": [
          {
            "name": "abc",
            "number": "+918980514085"
          },
          {
            "name": "abc",
            "number": "+911122554455"
          }
        ]
      },
      "type": "object",
      "properties": {
        "contact": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Contact"
          }
        }
      },
      "required": [
        "contact"
      ]
    },
    "Contact": {
      "title": "Contact",
      "example": {
        "name": "abc",
        "number": "+918980514085"
      },
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "number": {
          "type": "string"
        }
      },
      "required": [
        "name",
        "number"
      ]
    },
    "calldetailsrequest": {
      "title": "calldetailsrequest",
      "example": {
        "contact": {
          "name": "abc",
          "number": "+918980514085",
          "isfavourite": false
        }
      },
      "type": "object",
      "properties": {
        "contact": {
          "$ref": "#/definitions/Contact1"
        }
      },
      "required": [
        "contact"
      ]
    },
    "Contact1": {
      "title": "Contact1",
      "example": {
        "name": "abc",
        "number": "+918980514085",
        "isfavourite": false
      },
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "number": {
          "type": "string"
        },
        "isfavourite": {
          "type": "boolean"
        }
      },
      "required": [
        "name",
        "number",
        "isfavourite"
      ]
    },
    "AddfavoriteRequest": {
      "title": "AddfavoriteRequest",
      "example": {
        "name": "abc",
        "number": "+918849455045",
        "isFavorite": true
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
        }
      },
      "required": [
        "name",
        "number",
        "isFavorite"
      ]
    },
    "AddBlockcontactRequest": {
      "title": "AddBlockcontactRequest",
      "example": {
        "name": "abc",
        "number": "+918849455045",
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
        "isBlock": {
          "type": "boolean"
        }
      },
      "required": [
        "name",
        "number",
        "isBlock"
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