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
    "/auth-service/api/v1/auth/register": {
      post: {
        summary: "Register User",
        tags: ["Authentication Service"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/RegisterRequest",
              },
            },
          },
        },
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/RegisterResponse",
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
    "/auth-service/api/v1/auth/login": {
      post: {
        summary: "Login User",
        tags: ["Authentication Service"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/LoginRequest",
              },
            },
          },
        },
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/LoginResponse",
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
    "/auth-service/api/v1/auth/verify-otp": {
      post: {
        summary: "Verify OTP",
        tags: ["Authentication Service"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/OtpRequest",
              },
            },
          },
        },
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/LoginResponse",
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
    "/auth-service/api/v1/user/get-profile": {
      get: {
        summary: "Get User Profile",
        tags: ["Authentication Service"],
        security: {
          bearerAuth: [],
        },
        parameters: [{}],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/LoginResponse",
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
    "/auth-service/api/v1/user/update-profile": {
      put: {
        summary: "Verify OTP",
        tags: ["Authentication Service"],
        parameters: [
          {
            name: "Authorization",
            in: "header",
            required: false,
            default: "Bearer {token}",
            type: "string",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/definitions/UpdateUserRequest",
              },
            },
          },
        },
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/UpdateUserResponse",
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
    RegisterRequest: {
      type: "object",
      properties: {
        mobileNo: {
          type: "string",
        },
      },
      example: {
        mobileNo: "+919714209234",
      },
    },
    RegisterResponse: {
      type: "object",
      properties: {
        success: {
          type: "boolean",
        },
        data: {
          type: "object",
          properties: {
            isActive: {
              type: "boolean",
            },
            isDeleted: {
              type: "boolean",
            },
            _id: {
              type: "string",
            },
            mobileNo: {
              type: "string",
            },
            createdAt: {
              type: "string",
            },
            updatedAt: {
              type: "string",
            },
          },
        },
      },
      example: {
        success: true,
        data: {
          isActive: true,
          isDeleted: false,
          _id: "60f5a039c3d25497a170f5b3",
          mobileNo: "8980514085",
          createdAt: "2021-07-19T15:54:33.292Z",
          updatedAt: "2021-07-19T15:54:33.292Z",
          __v: 0,
        },
      },
    },
    LoginRequest: {
      type: "object",
      properties: {
        mobileNo: {
          type: "string",
        },
      },
      example: {
        mobileNo: "+919714209234",
      },
    },
    LoginResponse: {
      type: "object",
      properties: {
        success: {
          type: "boolean",
        },
        data: {
          type: "object",
          properties: {
            isActive: {
              type: "boolean",
            },
            isDeleted: {
              type: "boolean",
            },
            otp: {
              type: "number",
            },
            _id: {
              type: "string",
            },
            mobileNo: {
              type: "string",
            },
            createdAt: {
              type: "string",
            },
            updatedAt: {
              type: "string",
            },
          },
        },
      },
      example: {
        success: true,
        data: {
          isActive: true,
          isDeleted: false,
          otp: 1234,
          _id: "60f5a039c3d25497a170f5b3",
          mobileNo: "8980514085",
          createdAt: "2021-07-19T15:54:33.292Z",
          updatedAt: "2021-07-19T15:54:33.292Z",
          __v: 0,
        },
      },
    },
    OtpRequest: {
      type: "object",
      properties: {
        mobileNo: {
          type: "string",
        },
        otp: {
          type: "integer",
          format: "int32",
        },
      },
      example: {
        mobileNo: "+918980514084",
        otp: 6702,
      },
    },
    OtpResponse: {
      type: "object",
      properties: {
        isActive: {
          type: "boolean",
        },
        isDeleted: {
          type: "boolean",
        },
        _id: {
          type: "string",
        },
        mobileNo: {
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
      example: {
        isActive: true,
        isDeleted: false,
        _id: "60f5a039c3d25497a170f5b3",
        mobileNo: "8980514085",
        createdAt: "2021-07-19T15:54:33.292Z",
        updatedAt: "2021-07-19T15:54:33.292Z",
        __v: 0,
      },
    },
    UpdateUserRequest: {
      type: "object",
      properties: {
        firstName: {
          type: "string",
        },
        lastName: {
          type: "string",
        },
        email: {
          type: "string",
        },
      },
      example: {
        firstName: "tushar",
        lastName: "savaliya",
        email: "savaliyatushar2197@gmail.com",
      },
    },
    UpdateUserResponse: {
      type: "object",
      properties: {
        success: {
          type: "boolean",
        },
        data: {
          type: "object",
          properties: {
            isActive: {
              type: "boolean",
            },
            isDeleted: {
              type: "boolean",
            },
            otp: {
              type: "number",
            },
            _id: {
              type: "string",
            },
            mobileNo: {
              type: "string",
            },
            createdAt: {
              type: "string",
            },
            updatedAt: {
              type: "string",
            },
          },
        },
      },
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
