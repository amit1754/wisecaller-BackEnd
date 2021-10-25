export default {
  "swagger": "2.0",
  "info": {
    "version": "1.0",
    "title": "wisecaller",
    "contact": {}
  },
  "host": "mqm8cbdh30.execute-api.us-east-1.amazonaws.com/dev/",
  "basePath": "/api/v1",
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
    "/auth/register": {
      "post": {
        "description": "| Name     |Type    | M/o   | Example\n| ---      | ---    | ---   | ---\n|mobileNo  | string | M     | +911212121212",
        "summary": "Register User",
        "tags": [
          "Misc"
        ],
        "operationId": "RegisterUser",
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
              "$ref": "#/definitions/RegisterUserRequest"
            }
          }
        ],
        "responses": {
          "400": {
            "description": "Bad Request",
            "schema": {
              "$ref": "#/definitions/m4221"
            },
            "examples": {
              "application/json": {
                "success": false,
                "message": "Mobile number is required"
              }
            },
            "headers": {}
          },
          "default": {
            "description": "",
            "headers": {}
          },
          "500": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/m4221"
            },
            "examples": {
              "application/json": {
                "success": false,
                "message": "Mobile number already registered"
              }
            },
            "headers": {}
          }
        }
      }
    },
    "/auth/login": {
      "post": {
        "description": "| Name     |Type    | M/o   | Example\n| ---      | ---    | ---   | ---\n|mobileNo  | string | M     | +911212121212",
        "summary": "Login user",
        "tags": [
          "Misc"
        ],
        "operationId": "Loginuser",
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
              "$ref": "#/definitions/LoginuserRequest"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/m200"
            },
            "examples": {
              "application/json": {
                "success": true,
                "data": {
                  "expiresAt": "2021-07-19T15:47:14.673Z",
                  "isActive": true,
                  "isDeleted": false,
                  "_id": "60f5a4c1c3d25497a170f5cb",
                  "otp": 1965,
                  "user": "60f5a039c3d25497a170f5b3",
                  "createdAt": "2021-07-19T16:13:53.277Z",
                  "updatedAt": "2021-07-19T16:13:53.277Z",
                  "__v": 0
                }
              }
            },
            "headers": {}
          },
          "422": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/m4221"
            },
            "examples": {
              "application/json": {
                "success": false,
                "message": "Mobile number is required"
              }
            },
            "headers": {}
          }
        }
      }
    },
    "/auth/verify-otp": {
      "post": {
        "description": "| Name     |Type    | M/o   | Example\n| ---      | ---    | ---   | ---\n| mobileNo | string | M     | +911212121212\n| otp      | number | M     | 1234",
        "summary": "verify otp",
        "tags": [
          "Misc"
        ],
        "operationId": "verifyotp",
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
              "$ref": "#/definitions/verifyotprequest"
            }
          }
        ],
        "responses": {
          "422": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/m4221"
            },
            "examples": {
              "application/json": {
                "success": false,
                "message": "Token expired!"
              }
            },
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
                "data": {
                  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1YTAzOWMzZDI1NDk3YTE3MGY1YjMiLCJtb2JpbGVObyI6Ijg5ODA1MTQwODUiLCJpYXQiOjE2MjY3MTE3MzIsImV4cCI6MTYyNjc5ODEzMn0.0MaUUo_2zEYcO4sxoEB7mPE4-DjxP3ye4-kaLsUNeGI",
                  "user": {
                    "isActive": true,
                    "isDeleted": false,
                    "_id": "60f5a039c3d25497a170f5b3",
                    "mobileNo": "8980514085",
                    "createdAt": "2021-07-19T15:54:33.292Z",
                    "updatedAt": "2021-07-19T15:54:33.292Z",
                    "__v": 0
                  }
                }
              }
            },
            "headers": {}
          }
        }
      }
    },
    "/user/get-profile": {
      "get": {
        "summary": "get user profile",
        "tags": [
          "Misc"
        ],
        "operationId": "getuserprofile",
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
            "schema": {
              "$ref": "#/definitions/m2002"
            },
            "examples": {
              "application/json": {
                "success": true,
                "data": {
                  "isActive": true,
                  "isDeleted": false,
                  "_id": "60f5a039c3d25497a170f5b3",
                  "mobileNo": "8980514085",
                  "createdAt": "2021-07-19T15:54:33.292Z",
                  "updatedAt": "2021-07-19T15:54:33.292Z",
                  "__v": 0
                }
              }
            },
            "headers": {}
          }
        }
      }
    },
    "/user/update-profile": {
      "put": {
        "description": "| Name      |Type    | M/o   | Example\n| ---       | ---    | ---   | ---\n| firstName | string | M     | abc\n| lastName  | string | M     | abc\n| email     | string | M     | abc@abc.com",
        "summary": "update user profile",
        "tags": [
          "Misc"
        ],
        "operationId": "updateuserprofile",
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
              "$ref": "#/definitions/updateuserprofilerequest"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/m2003"
            },
            "examples": {
              "application/json": {
                "success": true,
                "data": {
                  "isActive": true,
                  "isDeleted": false,
                  "_id": "60f5a039c3d25497a170f5b3",
                  "mobileNo": "8980514085",
                  "createdAt": "2021-07-19T15:54:33.292Z",
                  "updatedAt": "2021-07-19T16:27:18.666Z",
                  "__v": 0,
                  "email": "savaliyatushar2197@gmail.com",
                  "firstName": "tushar",
                  "lastName": "savaliya"
                }
              }
            },
            "headers": {}
          }
        }
      }
    }
  },
  "definitions": {
    "RegisterUserRequest": {
      "title": "RegisterUserRequest",
      "example": {
        "mobileNo": "+918980514084"
      },
      "type": "object",
      "properties": {
        "mobileNo": {
          "type": "string"
        }
      },
      "required": [
        "mobileNo"
      ]
    },
    "m4221": {
      "title": "m4221",
      "example": {
        "success": false,
        "message": "Mobile number is required"
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
    "LoginuserRequest": {
      "title": "LoginuserRequest",
      "example": {
        "mobileNo": "8980514085"
      },
      "type": "object",
      "properties": {
        "mobileNo": {
          "type": "string"
        }
      },
      "required": [
        "mobileNo"
      ]
    },
    "m200": {
      "title": "m200",
      "example": {
        "success": true,
        "data": {
          "expiresAt": "2021-07-19T15:47:14.673Z",
          "isActive": true,
          "isDeleted": false,
          "_id": "60f5a4c1c3d25497a170f5cb",
          "otp": 1965,
          "user": "60f5a039c3d25497a170f5b3",
          "createdAt": "2021-07-19T16:13:53.277Z",
          "updatedAt": "2021-07-19T16:13:53.277Z",
          "__v": 0
        }
      },
      "type": "object",
      "properties": {
        "success": {
          "type": "boolean"
        },
        "data": {
          "$ref": "#/definitions/Data"
        }
      },
      "required": [
        "success",
        "data"
      ]
    },
    "Data": {
      "title": "Data",
      "example": {
        "expiresAt": "2021-07-19T15:47:14.673Z",
        "isActive": true,
        "isDeleted": false,
        "_id": "60f5a4c1c3d25497a170f5cb",
        "otp": 1965,
        "user": "60f5a039c3d25497a170f5b3",
        "createdAt": "2021-07-19T16:13:53.277Z",
        "updatedAt": "2021-07-19T16:13:53.277Z",
        "__v": 0
      },
      "type": "object",
      "properties": {
        "expiresAt": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "isDeleted": {
          "type": "boolean"
        },
        "_id": {
          "type": "string"
        },
        "otp": {
          "type": "integer",
          "format": "int32"
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
        "expiresAt",
        "isActive",
        "isDeleted",
        "_id",
        "otp",
        "user",
        "createdAt",
        "updatedAt",
        "__v"
      ]
    },
    "verifyotprequest": {
      "title": "verifyotprequest",
      "example": {
        "mobileNo": "+918980514084",
        "otp": 6702
      },
      "type": "object",
      "properties": {
        "mobileNo": {
          "type": "string"
        },
        "otp": {
          "type": "integer",
          "format": "int32"
        }
      },
      "required": [
        "mobileNo",
        "otp"
      ]
    },
    "m2001": {
      "title": "m2001",
      "example": {
        "success": true,
        "data": {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1YTAzOWMzZDI1NDk3YTE3MGY1YjMiLCJtb2JpbGVObyI6Ijg5ODA1MTQwODUiLCJpYXQiOjE2MjY3MTE3MzIsImV4cCI6MTYyNjc5ODEzMn0.0MaUUo_2zEYcO4sxoEB7mPE4-DjxP3ye4-kaLsUNeGI",
          "user": {
            "isActive": true,
            "isDeleted": false,
            "_id": "60f5a039c3d25497a170f5b3",
            "mobileNo": "8980514085",
            "createdAt": "2021-07-19T15:54:33.292Z",
            "updatedAt": "2021-07-19T15:54:33.292Z",
            "__v": 0
          }
        }
      },
      "type": "object",
      "properties": {
        "success": {
          "type": "boolean"
        },
        "data": {
          "$ref": "#/definitions/Data1"
        }
      },
      "required": [
        "success",
        "data"
      ]
    },
    "Data1": {
      "title": "Data1",
      "example": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGY1YTAzOWMzZDI1NDk3YTE3MGY1YjMiLCJtb2JpbGVObyI6Ijg5ODA1MTQwODUiLCJpYXQiOjE2MjY3MTE3MzIsImV4cCI6MTYyNjc5ODEzMn0.0MaUUo_2zEYcO4sxoEB7mPE4-DjxP3ye4-kaLsUNeGI",
        "user": {
          "isActive": true,
          "isDeleted": false,
          "_id": "60f5a039c3d25497a170f5b3",
          "mobileNo": "8980514085",
          "createdAt": "2021-07-19T15:54:33.292Z",
          "updatedAt": "2021-07-19T15:54:33.292Z",
          "__v": 0
        }
      },
      "type": "object",
      "properties": {
        "token": {
          "type": "string"
        },
        "user": {
          "$ref": "#/definitions/User"
        }
      },
      "required": [
        "token",
        "user"
      ]
    },
    "User": {
      "title": "User",
      "example": {
        "isActive": true,
        "isDeleted": false,
        "_id": "60f5a039c3d25497a170f5b3",
        "mobileNo": "8980514085",
        "createdAt": "2021-07-19T15:54:33.292Z",
        "updatedAt": "2021-07-19T15:54:33.292Z",
        "__v": 0
      },
      "type": "object",
      "properties": {
        "isActive": {
          "type": "boolean"
        },
        "isDeleted": {
          "type": "boolean"
        },
        "_id": {
          "type": "string"
        },
        "mobileNo": {
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
        "isActive",
        "isDeleted",
        "_id",
        "mobileNo",
        "createdAt",
        "updatedAt",
        "__v"
      ]
    },
    "m2002": {
      "title": "m2002",
      "example": {
        "success": true,
        "data": {
          "isActive": true,
          "isDeleted": false,
          "_id": "60f5a039c3d25497a170f5b3",
          "mobileNo": "8980514085",
          "createdAt": "2021-07-19T15:54:33.292Z",
          "updatedAt": "2021-07-19T15:54:33.292Z",
          "__v": 0
        }
      },
      "type": "object",
      "properties": {
        "success": {
          "type": "boolean"
        },
        "data": {
          "$ref": "#/definitions/Data2"
        }
      },
      "required": [
        "success",
        "data"
      ]
    },
    "Data2": {
      "title": "Data2",
      "example": {
        "isActive": true,
        "isDeleted": false,
        "_id": "60f5a039c3d25497a170f5b3",
        "mobileNo": "8980514085",
        "createdAt": "2021-07-19T15:54:33.292Z",
        "updatedAt": "2021-07-19T15:54:33.292Z",
        "__v": 0
      },
      "type": "object",
      "properties": {
        "isActive": {
          "type": "boolean"
        },
        "isDeleted": {
          "type": "boolean"
        },
        "_id": {
          "type": "string"
        },
        "mobileNo": {
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
        "isActive",
        "isDeleted",
        "_id",
        "mobileNo",
        "createdAt",
        "updatedAt",
        "__v"
      ]
    },
    "updateuserprofilerequest": {
      "title": "updateuserprofilerequest",
      "example": {
        "firstName": "tushar",
        "lastName": "savaliya",
        "email": "savaliyatushar2197@gmail.com"
      },
      "type": "object",
      "properties": {
        "firstName": {
          "type": "string"
        },
        "lastName": {
          "type": "string"
        },
        "email": {
          "type": "string"
        }
      },
      "required": [
        "firstName",
        "lastName",
        "email"
      ]
    },
    "m2003": {
      "title": "m2003",
      "example": {
        "success": true,
        "data": {
          "isActive": true,
          "isDeleted": false,
          "_id": "60f5a039c3d25497a170f5b3",
          "mobileNo": "8980514085",
          "createdAt": "2021-07-19T15:54:33.292Z",
          "updatedAt": "2021-07-19T16:27:18.666Z",
          "__v": 0,
          "email": "savaliyatushar2197@gmail.com",
          "firstName": "tushar",
          "lastName": "savaliya"
        }
      },
      "type": "object",
      "properties": {
        "success": {
          "type": "boolean"
        },
        "data": {
          "$ref": "#/definitions/Data3"
        }
      },
      "required": [
        "success",
        "data"
      ]
    },
    "Data3": {
      "title": "Data3",
      "example": {
        "isActive": true,
        "isDeleted": false,
        "_id": "60f5a039c3d25497a170f5b3",
        "mobileNo": "8980514085",
        "createdAt": "2021-07-19T15:54:33.292Z",
        "updatedAt": "2021-07-19T16:27:18.666Z",
        "__v": 0,
        "email": "savaliyatushar2197@gmail.com",
        "firstName": "tushar",
        "lastName": "savaliya"
      },
      "type": "object",
      "properties": {
        "isActive": {
          "type": "boolean"
        },
        "isDeleted": {
          "type": "boolean"
        },
        "_id": {
          "type": "string"
        },
        "mobileNo": {
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
        "email": {
          "type": "string"
        },
        "firstName": {
          "type": "string"
        },
        "lastName": {
          "type": "string"
        }
      },
      "required": [
        "isActive",
        "isDeleted",
        "_id",
        "mobileNo",
        "createdAt",
        "updatedAt",
        "__v",
        "email",
        "firstName",
        "lastName"
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