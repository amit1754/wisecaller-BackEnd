export default {
  "swagger": "2.0",
  "info": {
    "version": "1.0",
    "title": "packages service",
    "contact": {}
  },
  "host": "wh8c1fdabe.execute-api.us-east-1.amazonaws.com/dev/",
  "basePath": "api/v1",
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
    "/packages/add": {
      "post": {
        "summary": "add packages",
        "tags": [
          "Misc"
        ],
        "operationId": "addpackages",
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
              "$ref": "#/definitions/addpackagesrequest"
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
    "/packages/get": {
      "get": {
        "summary": "Get packages",
        "tags": [
          "Misc"
        ],
        "operationId": "Getpackages",
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
    "/packages/update/{id}": {
      "put": {
        "summary": "update packages",
        "tags": [
          "Misc"
        ],
        "operationId": "updatepackages",
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
            "name": "id",
            "in": "header",
            "required": false,
            "type": "string"
          },
          {
            "name": "Body",
            "in": "body",
            "required": true,
            "description": "",
            "schema": {
              "$ref": "#/definitions/updatepackagesrequest"
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
    "/packages/delete/{id}": {
      "delete": {
        "summary": "delete packages",
        "tags": [
          "Misc"
        ],
        "operationId": "deletepackages",
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
          },
        ],
        "responses": {
          "200": {
            "description": "",
            "headers": {}
          }
        }
      }
    },
    "/woucher/add": {
      "post": {
        "summary": "Add woucher",
        "tags": [
          "Misc"
        ],
        "operationId": "Addwoucher",
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
              "$ref": "#/definitions/AddwoucherRequest"
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
    "/woucher/get": {
      "get": {
        "summary": "Get Wouchers",
        "tags": [
          "Misc"
        ],
        "operationId": "GetWouchers",
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
    "/woucher/update/{id}": {
      "put": {
        "summary": "update woucher",
        "tags": [
          "Misc"
        ],
        "operationId": "updatewoucher",
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
          },
          {
            "name": "Body",
            "in": "body",
            "required": true,
            "description": "",
            "schema": {
              "$ref": "#/definitions/updatewoucherrequest"
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
    "/woucher/delete/{id}": {
      "delete": {
        "summary": "delete Woucher",
        "tags": [
          "Misc"
        ],
        "operationId": "deleteWoucher",
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
          },
        ],
        "responses": {
          "200": {
            "description": "",
            "headers": {}
          }
        }
      }
    },
    "/payment/add": {
      "post": {
        "summary": "payment Add",
        "tags": [
          "Misc"
        ],
        "operationId": "paymentAdd",
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
              "$ref": "#/definitions/paymentAddRequest"
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
    "/payment/get": {
      "get": {
        "summary": "payment Get",
        "tags": [
          "Misc"
        ],
        "operationId": "paymentGet",
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
     "/cms/add": {
      "post": {
        "summary": "create page",
        "tags": [
          "Misc"
        ],
        "operationId": "createpage",
        "deprecated": false,
        "produces": [
          "application/json"
        ],
        "consumes": [
          "application/x-www-form-urlencoded"
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
            "name": "pageName",
            "in": "formData",
            "required": true,
            "type": "string",
            "description": ""
          },
          {
            "name": "content",
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
    "/cms/get": {
      "get": {
        "summary": "get cms page",
        "tags": [
          "Misc"
        ],
        "operationId": "getcmspage",
        "deprecated": false,
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "pageName",
            "in": "header",
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
    "/cms/update/{id}": {
      "put": {
        "summary": "update CMS page",
        "tags": [
          "Misc"
        ],
        "operationId": "updateCMSpage",
        "deprecated": false,
        "produces": [
          "application/json"
        ],
        "consumes": [
          "application/x-www-form-urlencoded"
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
            "name": "pageName",
            "in": "formData",
            "required": true,
            "type": "string",
            "description": ""
          },
          {
            "name": "content",
            "in": "formData",
            "required": true,
            "type": "string",
            "description": ""
          },
          {
            "name": "id",
            "in": "header",
            "required": false,
            "type": "string"
          },
        ],
        "responses": {
          "200": {
            "description": "",
            "headers": {}
          }
        }
      }
    },
    "/cms/delete/{id}": {
      "delete": {
        "summary": "delete cms page",
        "tags": [
          "Misc"
        ],
        "operationId": "deletecmspage",
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
    "addpackagesrequest": {
      "title": "addpackagesrequest",
      "example": {
        "name": "abac",
        "duration": 12,
        "price": 500
      },
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "duration": {
          "type": "integer",
          "format": "int32"
        },
        "price": {
          "type": "integer",
          "format": "int32"
        }
      },
      "required": [
        "name",
        "duration",
        "price"
      ]
    },
    "updatepackagesrequest": {
      "title": "updatepackagesrequest",
      "example": {
        "name": "abac",
        "duration": 12,
        "price": 400
      },
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "duration": {
          "type": "integer",
          "format": "int32"
        },
        "price": {
          "type": "integer",
          "format": "int32"
        }
      },
      "required": [
        "name",
        "duration",
        "price"
      ]
    },
    "AddwoucherRequest": {
      "title": "AddwoucherRequest",
      "example": {
        "name": "abac",
        "code": "aaa",
        "amount": 10,
        "minAmount": 100,
        "discountType": "FLAT",
        "startDate": "2021-12-15",
        "endDate": "2021-12-20"
      },
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "code": {
          "type": "string"
        },
        "amount": {
          "type": "integer",
          "format": "int32"
        },
        "minAmount": {
          "type": "integer",
          "format": "int32"
        },
        "discountType": {
          "type": "string"
        },
        "startDate": {
          "type": "string"
        },
        "endDate": {
          "type": "string"
        }
      },
      "required": [
        "name",
        "code",
        "amount",
        "minAmount",
        "discountType",
        "startDate",
        "endDate"
      ]
    },
    "updatewoucherrequest": {
      "title": "updatewoucherrequest",
      "example": {
        "name": "abac",
        "code": "aaa",
        "amount": 100,
        "minAmount": 100,
        "discountType": "FLAT"
      },
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "code": {
          "type": "string"
        },
        "amount": {
          "type": "integer",
          "format": "int32"
        },
        "minAmount": {
          "type": "integer",
          "format": "int32"
        },
        "discountType": {
          "type": "string"
        }
      },
      "required": [
        "name",
        "code",
        "amount",
        "minAmount",
        "discountType"
      ]
    },
    "paymentAddRequest": {
      "title": "paymentAddRequest",
      "example": {
        "packageId": "613bc118bc2da97b67b2ee17",
        "paymentId": "pay_HxHEX7lHP9E2Em"
      },
      "type": "object",
      "properties": {
        "packageId": {
          "type": "string"
        },
        "paymentId": {
          "type": "string"
        }
      },
      "required": [
        "packageId",
        "paymentId"
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