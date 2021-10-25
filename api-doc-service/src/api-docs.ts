export default {
  openapi: "3.0.3",
  info: {
    version: 1.0,
    title: "Wisecaller APIs",
  },
  servers: [
    {
      url: "http://localhost:5000",
    },
  ],
  securityDefinitions: {},
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/auth-service/auth/login": {
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
    "/auth-service/auth/verify-otp": {
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
          },
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
          }
        }
      }
    },
    "/auth-service/user/get-profile": {
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
                  "role": "ADMIN",
                  "isActive": true,
                  "isDeleted": false,
                  "_id": "6161872b43430600096f3fee",
                  "mobileNo": "+918980514085",
                  "createdAt": "2021-10-09T12:12:27.303Z",
                  "updatedAt": "2021-10-12T04:08:28.401Z",
                  "__v": 0,
                  "email": "savaliyatushar2197@gmail.com",
                  "firstName": "tushar",
                  "lastName": "savaliya",
                  "profileImage": "1633781736878.png",
                  "modes": {
                    "workLifeBalanceStatus": "true",
                    "roadSafetyStatus": "false"
                  }
                }
              }
            },
            "headers": {}
          }
        }
      }
    },
    "/auth-service/user/update-profile": {
      "put": {
        "description": "| Name      |Type    | M/o   | Example\n| ---       | ---    | ---   | ---\n| firstName | string | M     | abc\n| lastName  | string | M     | abc\n| email     | string | M     | abc@abc.com\n| status    | string | M     | 61211f1ef34e5900080a6812",
        "summary": "update user profile",
        "tags": [
          "Misc"
        ],
        "operationId": "updateuserprofile",
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
            "name": "firstName",
            "in": "formData",
            "required": true,
            "type": "string",
            "description": ""
          },
          {
            "name": "lastName",
            "in": "formData",
            "required": true,
            "type": "string",
            "description": ""
          },
          {
            "name": "email",
            "in": "formData",
            "required": true,
            "type": "string",
            "description": ""
          },
          {
            "name": "status",
            "in": "formData",
            "required": true,
            "type": "string",
            "description": ""
          },
          {
            "name": "profileImage",
            "in": "formData",
            "required": true,
            "type": "string",
            "description": ""
          },
          {
            "name": "workLifeBalanceStatus",
            "in": "formData",
            "required": true,
            "type": "boolean",
            "description": ""
          },
          {
            "name": "roadSafetyStatus",
            "in": "formData",
            "required": true,
            "type": "boolean",
            "description": ""
          },
          {
            "name": "syncCalender",
            "in": "formData",
            "required": true,
            "type": "boolean",
            "description": ""
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
                  "role": "ADMIN",
                  "isActive": true,
                  "isDeleted": false,
                  "status": "612e3103185624e6a914bd55",
                  "_id": "6161872b43430600096f3fee",
                  "mobileNo": "+918980514085",
                  "createdAt": "2021-10-09T12:12:27.303Z",
                  "updatedAt": "2021-10-12T04:08:28.401Z",
                  "__v": 0,
                  "email": "savaliyatushar2197@gmail.com",
                  "firstName": "tushar",
                  "lastName": "savaliya",
                  "profileImage": "1633781736878.png",
                  "modes": {
                    "workLifeBalanceStatus": "true",
                    "roadSafetyStatus": "false"
                  }
                }
              }
            },
            "headers": {}
          }
        }
      }
    },
    "/auth-service/contact-us": {
      "post": {
        "summary": "contactUs",
        "tags": [
          "Misc"
        ],
        "operationId": "contactUs",
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
              "$ref": "#/definitions/contactUsRequest"
            }
          }
        ],
        "responses": {
          "default": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/m2004"
            },
            "examples": {
              "application/json": {
                "success": true,
                "message": "success",
                "data": []
              }
            },
            "headers": {}
          }
        }
      }
    },
    "/auth-service/contact-us/get": {
      "get": {
        "summary": "get contact us details",
        "tags": [
          "Misc"
        ],
        "operationId": "getcontactusdetails",
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
          "default": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/m2005"
            },
            "examples": {
              "application/json": {
                "success": true,
                "data": [
                  {
                    "_id": "6159a52a45419a83759c620b",
                    "email": "saveliyatushar143@gmail.com",
                    "Message": "systme is not working",
                    "createdAt": "2021-10-03T12:42:18.705Z",
                    "updatedAt": "2021-10-03T12:42:18.705Z",
                    "__v": 0
                  }
                ],
                "message": "contactUs details get sucess fully"
              }
            },
            "headers": {}
          }
        }
      }
    },
    "/auth-service/user/add-devices": {
      "post": {
        "summary": "add devices",
        "tags": [
          "Misc"
        ],
        "operationId": "adddevices",
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
              "$ref": "#/definitions/adddevicesrequest"
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
    "/auth-service/auth/resend-otp": {
      "post": {
        "summary": "resend otp if otp is already send",
        "tags": [
          "Misc"
        ],
        "operationId": "resendotp",
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
              "$ref": "#/definitions/resendotprequest"
            }
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
                "data": {
                  "expiresAt": "2021-10-25T11:03:23.469Z",
                  "isActive": true,
                  "isDeleted": false,
                  "_id": "61768f29ebb1b457ded07cd9",
                  "otp": 1628,
                  "user": "6161872b43430600096f3fee",
                  "createdAt": "2021-10-25T11:04:09.200Z",
                  "updatedAt": "2021-10-25T11:07:37.351Z",
                  "__v": 0
                }
              }
            },
            "headers": {}
          }
        }
      }
    },
  
    "/call-service/api/v1/callhistory/get": {
      post: {
        summary: "Call History",
        tags: ["Call Service"],
        parameters: [
          {
            name: "Authorization",
            in: "header",
            required: false,
            default: "Bearer {token}",
            type: "string",
          },
          {
            name: "Body",
            in: "body",
            required: true,
            description: "",
            schema: {
              $ref: "#/definitions/CallHistoryRequest",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/CallHistoryResponse",
            },
          },
          500: {
            description: "Internal server error",
            schema: {
              $ref: "#/definitions/InternalServerError",
            },
          },
        },
      },
    },
    "/call-service/api/v1/callhistory/call-details": {
      post: {
        summary: "Call Details",
        tags: ["Call Service"],
        operationId: "calldetails",
        deprecated: false,
        produces: ["application/json"],
        parameters: [
          {
            name: "Authorization",
            in: "header",
            required: false,
            default: "Bearer {token}",
            type: "string",
          },
          {
            name: "Body",
            in: "body",
            required: true,
            description: "",
            schema: {
              $ref: "#/definitions/CallDetailsRequest",
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {},
          },
        },
      },
    },
    "/call-service/api/v1/callhistory/favorite-add": {
      post: {
        summary: "Add to Favourites",
        tags: ["Call Service"],
        deprecated: false,
        produces: ["application/json"],
        parameters: [
          {
            name: "Authorization",
            in: "header",
            required: false,
            default: "Bearer {token}",
            type: "string",
          },
          {
            name: "Body",
            in: "body",
            required: true,
            description: "",
            schema: {
              $ref: "#/definitions/AddfavoriteRequest",
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {},
          },
        },
      },
    },
    "/call-service/api/v1/callhistory/block-add": {
      post: {
        summary: "Add Block contact",
        tags: ["Call Service"],
        operationId: "AddBlockcontact",
        deprecated: false,
        produces: ["application/json"],
        parameters: [
          {
            name: "Authorization",
            in: "header",
            required: false,
            default: "Bearer {token}",
            type: "string",
          },
          {
            name: "Body",
            in: "body",
            required: true,
            description: "",
            schema: {
              $ref: "#/definitions/AddBlockcontactRequest",
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {},
          },
        },
      },
    },
    "/notification-service/api/v1/sms/send": {
      post: {
        summary: "Send SMS",
        tags: ["Notification Service"],
        operationId: "AddBlockcontact",
        deprecated: false,
        produces: ["application/json"],
        parameters: [
          {
            name: "Authorization",
            in: "header",
            required: false,
            default: "Bearer {token}",
            type: "string",
          },
          {
            name: "Body",
            in: "body",
            required: true,
            description: "",
            schema: {
              $ref: "#/definitions/NotificationSmsRequest",
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {},
          },
        },
      },
    },
    "/contact-service/api/v1/contact/sync": {
      post: {
        summary: "Sync Contact",
        tags: ["Contact Service"],
        deprecated: false,
        produces: ["application/json"],
        parameters: [
          {
            name: "Authorization",
            in: "header",
            required: false,
            default: "Bearer {token}",
            type: "string",
          },
          {
            name: "Body",
            in: "body",
            required: true,
            description: "",
            schema: {
              $ref: "#/definitions/SyncContactRequest",
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {},
          },
        },
      },
    },
    "/contact-service/api/v1/contact/get": {
      get: {
        summary: "Get Contact Details",
        tags: ["Contact Service"],
        deprecated: false,
        produces: ["application/json"],
        parameters: [
          {
            name: "Authorization",
            in: "header",
            required: false,
            default: "Bearer {token}",
            type: "string",
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {},
          },
        },
      },
    },
    "/contact-service/api/v1/calender/sync": {
      post: {
        summary: "Sync Calender",
        tags: ["Contact Service"],
        deprecated: false,
        produces: ["application/json"],
        parameters: [
          {
            name: "Authorization",
            in: "header",
            required: false,
            default: "Bearer {token}",
            type: "string",
          },
          {
            name: "Body",
            in: "body",
            required: true,
            description: "",
            schema: {
              $ref: "#/definitions/CalenderSyncRequest",
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {},
          },
        },
      },
    },
    "/contact-service/api/v1/calender/get": {
      get: {
        summary: "Get Calender Details",
        tags: ["Contact Service"],
        deprecated: false,
        produces: ["application/json"],
        parameters: [
          {
            name: "Authorization",
            in: "header",
            required: false,
            default: "Bearer {token}",
            type: "string",
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {},
          },
        },
      },
    },
    "/status-service/api/v1/event/add": {
      post: {
        summary: "Set Event status",
        tags: ["Status Service"],
        operationId: "GetEventstatus",
        deprecated: false,
        produces: ["application/json"],
        parameters: [
          {
            name: "Body",
            in: "body",
            required: true,
            description: "",
            schema: {
              $ref: "#/definitions/NewEventStatusRequest",
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {},
          },
        },
      },
    },
    "/status-service/api/v1/event/get": {
      get: {
        summary: "Get Event status",
        tags: ["Status Service"],
        deprecated: false,
        produces: ["application/json"],
        parameters: [],
        responses: {
          "200": {
            description: "OK",
            headers: {},
          },
        },
      },
    },
    "/status-service/api/v1/event/update/${id}": {
      put: {
        summary: "Update Event Status",
        tags: ["Status Service"],
        deprecated: false,
        produces: ["application/json"],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "string",
            },
          },
          {
            name: "Body",
            in: "body",
            required: true,
            description: "",
            schema: {
              $ref: "#/definitions/UpdateEventStatusRequest",
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {},
          },
        },
      },
    },
    "/status-service/api/v1/event/delete/${id}": {
      delete: {
        summary: "Delete Event Status",
        tags: ["Status Service"],
        deprecated: false,
        produces: ["application/json"],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {},
          },
        },
      },
    },
    "/work-hrs-service/api/v1/work-life/add": {
      post: {
        summary: "Add hrs",
        tags: ["Work Hrs Service"],
        deprecated: false,
        produces: ["application/json"],
        parameters: [
          {
            name: "Authorization",
            in: "header",
            required: false,
            default: "Bearer {token}",
            type: "string",
          },
          {
            name: "Body",
            in: "body",
            required: true,
            description: "",
            schema: {
              $ref: "#/definitions/AddhrsRequest",
            },
          },
        ],
        responses: {
          "500": {
            description: "Internal Server Error",
            schema: {
              $ref: "#/definitions/InternalServerError",
            },
          },
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/AddHrsResponse",
            },
          },
        },
      },
    },
    "/work-hrs-service/api/v1/work-life/update/{id}": {
      post: {
        summary: "Update hrs",
        tags: ["Work Hrs Service"],
        deprecated: false,
        produces: ["application/json"],
        parameters: [
          {
            name: "Authorization",
            in: "header",
            required: false,
            default: "Bearer {token}",
            type: "string",
          },
          {
            name: "Body",
            in: "body",
            required: true,
            description: "",
            schema: {
              $ref: "#/definitions/UpdatehrsRequest",
            },
          },
        ],
        responses: {
          "500": {
            description: "Internal Server Error",
            schema: {
              $ref: "#/definitions/InternalServerError",
            },
          },
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/UpdateHrsResponse",
            },
          },
        },
      },
    },
    "/work-hrs-service/api/v1/work-life/get": {
      get: {
        summary: "Get Hrs",
        tags: ["Work Hrs Service"],
        deprecated: false,
        produces: ["application/json"],
        parameters: [
          {
            name: "Authorization",
            in: "header",
            required: false,
            default: "Bearer {token}",
            type: "string",
          },
        ],
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/GetHrsResponse",
            },
            headers: {},
          },
        },
      },
    },
    "/work-hrs-service/api/v1/get/${id}": {
      delete: {
        summary: "Delete working days",
        tags: ["Work Hrs Service"],
        deprecated: false,
        produces: ["application/json"],
        parameters: [
          {
            name: "Authorization",
            in: "header",
            required: false,
            default: "Bearer {token}",
            type: "string",
          },
        ],
        responses: {
          "200": {
            description: "OK",
            schema: {
              $ref: "#/definitions/m2001",
            },
          },
          "500": {
            description: "Internal Server Error",
            schema: {
              $ref: "#/definitions/InternalServerError",
            },
          },
        },
      },
    },
  },
  definitions: {

    "LoginuserRequest": {
      "title": "LoginuserRequest",
      "example": {
        "mobileNo": "+918980514085"
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
    "verifyotprequest": {
      "title": "verifyotprequest",
      "example": {
        "mobileNo": "+918980514085",
        "otp": 1628
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
          "role": "ADMIN",
          "isActive": true,
          "isDeleted": false,
          "_id": "6161872b43430600096f3fee",
          "mobileNo": "+918980514085",
          "createdAt": "2021-10-09T12:12:27.303Z",
          "updatedAt": "2021-10-12T04:08:28.401Z",
          "__v": 0,
          "email": "savaliyatushar2197@gmail.com",
          "firstName": "tushar",
          "lastName": "savaliya",
          "profileImage": "1633781736878.png",
          "modes": {
            "workLifeBalanceStatus": "true",
            "roadSafetyStatus": "false"
          }
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
        "role": "ADMIN",
        "isActive": true,
        "isDeleted": false,
        "_id": "6161872b43430600096f3fee",
        "mobileNo": "+918980514085",
        "createdAt": "2021-10-09T12:12:27.303Z",
        "updatedAt": "2021-10-12T04:08:28.401Z",
        "__v": 0,
        "email": "savaliyatushar2197@gmail.com",
        "firstName": "tushar",
        "lastName": "savaliya",
        "profileImage": "1633781736878.png",
        "modes": {
          "workLifeBalanceStatus": "true",
          "roadSafetyStatus": "false"
        }
      },
      "type": "object",
      "properties": {
        "role": {
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
        },
        "profileImage": {
          "type": "string"
        },
        "modes": {
          "$ref": "#/definitions/Modes"
        }
      },
      "required": [
        "role",
        "isActive",
        "isDeleted",
        "_id",
        "mobileNo",
        "createdAt",
        "updatedAt",
        "__v",
        "email",
        "firstName",
        "lastName",
        "profileImage",
        "modes"
      ]
    },
    "Modes": {
      "title": "Modes",
      "example": {
        "workLifeBalanceStatus": "true",
        "roadSafetyStatus": "false"
      },
      "type": "object",
      "properties": {
        "workLifeBalanceStatus": {
          "type": "string"
        },
        "roadSafetyStatus": {
          "type": "string"
        }
      },
      "required": [
        "workLifeBalanceStatus",
        "roadSafetyStatus"
      ]
    },
    "m2003": {
      "title": "m2003",
      "example": {
        "success": true,
        "data": {
          "role": "ADMIN",
          "isActive": true,
          "isDeleted": false,
          "status": "612e3103185624e6a914bd55",
          "_id": "6161872b43430600096f3fee",
          "mobileNo": "+918980514085",
          "createdAt": "2021-10-09T12:12:27.303Z",
          "updatedAt": "2021-10-12T04:08:28.401Z",
          "__v": 0,
          "email": "savaliyatushar2197@gmail.com",
          "firstName": "tushar",
          "lastName": "savaliya",
          "profileImage": "1633781736878.png",
          "modes": {
            "workLifeBalanceStatus": "true",
            "roadSafetyStatus": "false"
          }
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
        "role": "ADMIN",
        "isActive": true,
        "isDeleted": false,
        "status": "612e3103185624e6a914bd55",
        "_id": "6161872b43430600096f3fee",
        "mobileNo": "+918980514085",
        "createdAt": "2021-10-09T12:12:27.303Z",
        "updatedAt": "2021-10-12T04:08:28.401Z",
        "__v": 0,
        "email": "savaliyatushar2197@gmail.com",
        "firstName": "tushar",
        "lastName": "savaliya",
        "profileImage": "1633781736878.png",
        "modes": {
          "workLifeBalanceStatus": "true",
          "roadSafetyStatus": "false"
        }
      },
      "type": "object",
      "properties": {
        "role": {
          "type": "string"
        },
        "isActive": {
          "type": "boolean"
        },
        "isDeleted": {
          "type": "boolean"
        },
        "status": {
          "type": "string"
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
        },
        "profileImage": {
          "type": "string"
        },
        "modes": {
          "$ref": "#/definitions/Modes"
        }
      },
      "required": [
        "role",
        "isActive",
        "isDeleted",
        "status",
        "_id",
        "mobileNo",
        "createdAt",
        "updatedAt",
        "__v",
        "email",
        "firstName",
        "lastName",
        "profileImage",
        "modes"
      ]
    },
    "contactUsRequest": {
      "title": "contactUsRequest",
      "example": {
        "email": "savaliyatushar2197@gmail.com",
        "message": "systme is not working"
      },
      "type": "object",
      "properties": {
        "email": {
          "type": "string"
        },
        "message": {
          "type": "string"
        }
      },
      "required": [
        "email",
        "message"
      ]
    },
    "m2004": {
      "title": "m2004",
      "example": {
        "success": true,
        "message": "success",
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
    "m2005": {
      "title": "m2005",
      "example": {
        "success": true,
        "data": [
          {
            "_id": "6159a52a45419a83759c620b",
            "email": "saveliyatushar143@gmail.com",
            "Message": "systme is not working",
            "createdAt": "2021-10-03T12:42:18.705Z",
            "updatedAt": "2021-10-03T12:42:18.705Z",
            "__v": 0
          }
        ],
        "message": "contactUs details get sucess fully"
      },
      "type": "object",
      "properties": {
        "success": {
          "type": "boolean"
        },
        "data": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Data4"
          }
        },
        "message": {
          "type": "string"
        }
      },
      "required": [
        "success",
        "data",
        "message"
      ]
    },
    "Data4": {
      "title": "Data4",
      "example": {
        "_id": "6159a52a45419a83759c620b",
        "email": "saveliyatushar143@gmail.com",
        "Message": "systme is not working",
        "createdAt": "2021-10-03T12:42:18.705Z",
        "updatedAt": "2021-10-03T12:42:18.705Z",
        "__v": 0
      },
      "type": "object",
      "properties": {
        "_id": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "Message": {
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
        "email",
        "Message",
        "createdAt",
        "updatedAt",
        "__v"
      ]
    },
    "adddevicesrequest": {
      "title": "adddevicesrequest",
      "example": {
        "devices": [
          "speaket",
          "blutooth"
        ]
      },
      "type": "object",
      "properties": {
        "devices": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "devices"
      ]
    },
    "resendotprequest": {
      "title": "resendotprequest",
      "example": {
        "mobileNo": "+918980514085"
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
    CallHistoryRequest: {
      type: "object",
      properties: {
        contact: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              number: {
                type: "string",
              },
            },
          },
        },
      },
      example: {
        contact: [
          {
            name: "abc",
            number: "+918980514085",
          },
          {
            name: "abc",
            number: "+911122554455",
          },
        ],
      },
    },
    CallHistoryResponse: {
      description: "OK",
    },
    CallDetailsRequest: {
      type: "object",
      properties: {
        contact: {
          properties: {
            name: {
              type: "string",
            },
            number: {
              type: "string",
            },
            isfavourite: {
              type: "boolean",
            },
          },
        },
      },
      example: {
        name: "abc",
        number: "+918980514085",
        isfavourite: false,
      },
    },
    AddfavoriteRequest: {
      type: "object",
      properties: {
        name: {
          type: "string",
        },
        number: {
          type: "string",
        },
        isFavorite: {
          type: "boolean",
        },
      },
      example: {
        name: "abc",
        number: "+918849455045",
        isFavorite: true,
      },
    },
    AddBlockcontactRequest: {
      type: "object",
      properties: {
        name: {
          type: "string",
        },
        number: {
          type: "string",
        },
        isBlock: {
          type: "boolean",
        },
      },
      example: {
        name: "abc",
        number: "+918849455045",
        isBlock: true,
      },
    },
    NotificationSmsRequest: {
      type: "object",
      properties: {
        mobileNo: {
          type: "string",
        },
        message: {
          type: "string",
        },
      },
      example: {
        mobileNo: "+918849455045",
        message: "Welcome to wisecaller",
      },
    },
    SyncContactRequest: {
      type: "object",
      properties: {
        mobileNO: {
          type: "string",
        },
        contact: {
          type: "array",
          items: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              number: {
                type: "string",
              },
              isFavorite: {
                type: "boolean",
              },
              isBlock: {
                type: "boolean",
              },
              nummber: {
                type: "string",
              },
            },
          },
        },
      },
      example: {
        mobileNO: "+918980514085",
        contact: [
          {
            name: "abc",
            number: "+918849455045",
            isFavorite: true,
            isBlock: true,
          },
          {
            name: "abc1",
            nummber: "+911234567889",
            isFavorite: true,
          },
          {
            name: "abcd",
            nummber: "+911234567888",
            isFavorite: true,
          },
          {
            name: "abcd1",
            nummber: "+911234567889",
            isFavorite: true,
          },
          {
            name: "abcd3",
            nummber: "+911234567810",
            isFavorite: true,
          },
        ],
      },
    },
    CalenderSyncRequest: {
      type: "object",
      properties: {
        calenderEvent: {
          type: "array",
          items: {
            type: "object",
            properties: {
              eventName: {
                type: "string",
              },
              allDay: {
                type: "boolean",
              },
              startDate: {
                type: "string",
              },
              endDay: {
                type: "string",
              },
            },
          },
        },
      },
      example: {
        calenderEvent: [
          {
            eventName: "abc",
            allDay: true,
            startDate: "24-05-2021",
            endDay: "24-05-2021",
          },
          {
            eventName: "abc1",
            allDay: true,
            startDate: "24-05-2021",
            endDay: "24-05-2021",
          },
        ],
      },
    },
    NewEventStatusRequest: {
      type: "object",
      properties: {
        status: {
          type: "string",
        },
      },
      example: {
        status: "Do not Disturb",
      },
    },
    UpdateEventStatusRequest: {
      properties: {
        status: {
          type: "string",
        },
      },
    },
    AddhrsRequest: {
      type: "object",
      properties: {
        Monday: {
          type: "boolean",
        },
        Tuesday: {
          type: "boolean",
        },
        Wednesday: {
          type: "boolean",
        },
        Thursday: {
          type: "boolean",
        },
        Friday: {
          type: "boolean",
        },
        Saturday: {
          type: "boolean",
        },
        Sunday: {
          type: "boolean",
        },
        startTime: {
          type: "string",
        },
        endTime: {
          type: "string",
        },
        otherStatus: {
          type: "string",
        },
      },
      example: {
        Monday: false,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: true,
        startTime: "09:00 AM",
        endTime: "10:00 PM",
        otherStatus: "612e310c185624e6a914bd57",
      },
    },
    AddHrsResponse: {
      type: "object",
      properties: {
        success: {
          type: "boolean",
        },
        message: {
          type: "string",
        },
      },
    },
    UpdatehrsRequest: {
      type: "object",
      properties: {
        Monday: {
          type: "boolean",
        },
        Tuesday: {
          type: "boolean",
        },
        Wednesday: {
          type: "boolean",
        },
        Thursday: {
          type: "boolean",
        },
        Friday: {
          type: "boolean",
        },
        Saturday: {
          type: "boolean",
        },
        Sunday: {
          type: "boolean",
        },
        startTime: {
          type: "string",
        },
        endTime: {
          type: "string",
        },
        otherStatus: {
          type: "string",
        },
      },
      example: {
        Monday: false,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: true,
        startTime: "09:00 AM",
        endTime: "10:00 PM",
        otherStatus: "612e310c185624e6a914bd57",
      },
    },
    UpdateHrsResponse: {
      type: "object",
      properties: {
        success: {
          type: "boolean",
        },
        message: {
          type: "string",
        },
      },
    },
    GetHrsResponse: {
      type: "object",
      properties: {
        success: {
          type: "boolean",
        },
        message: {
          type: "string",
        },
        data: {
          type: "array",
          items: {
            properties: {
              _id: {
                type: "string",
              },
              Monday: {
                type: "boolean",
              },
              Tuesday: {
                type: "boolean",
              },
              Wednesday: {
                type: "boolean",
              },
              Thursday: {
                type: "boolean",
              },
              Friday: {
                type: "boolean",
              },
              Saturday: {
                type: "boolean",
              },
              startTime: {
                type: "string",
              },
              endTime: {
                type: "string",
              },
              otherStatus: {
                $ref: "#/definitions/OtherStatus",
              },
              user: {
                type: "string",
              },
              createdAt: {
                type: "string",
              },
              updatedAt: {
                type: "string",
              },
              __v: {
                type: "integer",
                format: "int32",
              },
            },
          },
        },
      },
      example: {
        success: true,
        message: "workingdays get successfully",
        data: [
          {
            _id: "613b608065f6f2404e2dd33f",
            Monday: false,
            Tuesday: true,
            Wednesday: true,
            Thursday: true,
            Friday: true,
            Saturday: true,
            startTime: "09:00 AM",
            endTime: "10:00 PM",
            otherStatus: {
              _id: "612e310c185624e6a914bd57",
              isDeleted: false,
              status: "Do not Disturb",
              createdAt: "2021-08-31T13:39:24.778Z",
              updatedAt: "2021-08-31T13:39:24.778Z",
              __v: 0,
            },
            user: "61211f1ef34e5900080a6812",
            createdAt: "2021-09-10T13:41:20.086Z",
            updatedAt: "2021-09-10T13:41:20.086Z",
            __v: 0,
          },
        ],
      },
    },
    DeleteWorkingResponse: {
      type: "object",
      properties: {
        success: {
          type: "boolean",
        },
        message: {
          type: "string",
        },
        data: {
          type: "array",
          items: {
            type: "string",
          },
        },
      },
      example: {
        success: true,
        message: "workingdays update successfully",
        data: [],
      },
    },
    InternalServerError: {
      type: "object",
      properties: {
        success: {
          type: "boolean",
        },
        message: {
          type: "string",
        },
      },
    },
  },
  components: {
    securitySchemes: {
      jwt: {
        type: "http",
        scheme: "bearer",
        in: "header",
        bearerFormat: "JWT",
      },
    },
  },
  security: {
    jwt: [],
  },
};
