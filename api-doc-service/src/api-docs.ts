export default {
  openapi: "3.0.0",
  info: {
    title: "wisecaller",
    contact: {},
    version: "1.0",
  },
  servers: [
    {
      url: "http://localhost:8000",
      variables: {},
    },
  ],
  paths: {
    "/auth-service/api/v1/auth/login": {
      post: {
        tags: ["Auth Service"],
        summary: "Login user",
        description:
          "| Name     |Type    | M/o   | Example\n| ---      | ---    | ---   | ---\n|mobileNo  | string | M     | +911212121212",
        operationId: "Loginuser",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/LoginuserRequest",
              },
              example: {
                mobileNo: "+918980514085",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/auth-service/api/v1/auth/verify-otp": {
      post: {
        tags: ["Auth Service"],
        summary: "verify otp",
        description:
          "| Name     |Type    | M/o   | Example\n| ---      | ---    | ---   | ---\n| mobileNo | string | M     | +911212121212\n| otp      | number | M     | 1234",
        operationId: "verifyotp",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/verifyotprequest",
              },
              example: {
                mobileNo: "+918980514085",
                otp: 1628,
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/auth-service/api/v1/user/get-profile": {
      get: {
        tags: ["Auth Service"],
        summary: "get user profile",
        operationId: "getuserprofile",
        parameters: [],
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/auth-service/api/v1/user/update-profile": {
      put: {
        tags: ["Auth Service"],
        summary: "update user profile",
        description: "",
        operationId: "updateuserprofile",
        parameters: [],
        requestBody: {
          content: {
            "multipart/form-data": {
              encoding: {},
              schema: {
                required: [],
                type: "object",
                properties: {
                  first_name: {
                    type: "string",
                    example: " nithin1",
                  },
                  last_name: {
                    type: "string",
                    example: " paul",
                  },
                  profile_image: {
                    type: "file",
                  },
                  is_profile_from_social_media: {
                    type: "boolean",
                    example: false,
                  },
                  media_profile_url: {
                    type: "string",
                  },
                  user_status: {
                    type: "string",
                    example: "617bdc232e8a70362c05b6ef",
                  },
                  user_sub_status: {
                    type: "string",
                    example: "617bdef62349463cba0aaf9b",
                  },
                  custom_status: {
                    type: "string",
                    example: "6191f857f01b8beeb2bdd32f",
                  },
                  phone: {
                    type: "string",
                    example: "+918585858586",
                  },
                  secondary_no: {
                    type: "string",
                    example: "+918585858586",
                  },
                },
              },
            },
          },
          required: false,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/auth-service/api/v1/contact-us": {
      post: {
        tags: ["Auth Service"],
        summary: "contactUs",
        operationId: "contactUs",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/contactUsRequest",
              },
              example: {
                email: "savaliyatushar2197@gmail.com",
                message: "systme is not working",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/auth-service/api/v1/contact-us/get": {
      get: {
        tags: ["Auth Service"],
        summary: "get contact us details",
        operationId: "getcontactusdetails",
        parameters: [],
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/auth-service/api/v1/user/add-devices": {
      post: {
        tags: ["Auth Service"],
        summary: "add devices",
        operationId: "adddevices",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/adddevicesrequest",
              },
              example: {
                devices: ["speaket", "blutooth"],
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/auth-service/api/v1/auth/resend-otp": {
      post: {
        tags: ["Auth Service"],
        summary: "resend otp",
        operationId: "resendotp",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/resendotprequest",
              },
              example: {
                mobileNo: "+919898803674",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/call-service/api/v1/callhistory/add": {
      post: {
        tags: ["Call Service"],
        summary: "call hISTORY",
        operationId: "callhISTORY",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/callhISTORYRequest",
              },
              example: {
                callLogs: [
                  {
                    dateId: "2021-10-27",
                    callList: [
                      {
                        wiseCallerId: "6174ccf5ba15ff00084330f3",
                        phoneNumber: "9876543212",
                        name: "PRIYA",
                        status: "busy",
                        callType: "incoming",
                        time: "5:00pm",
                        message: "will call you later",
                        simId: "SIM1",
                      },
                      {
                        wiseCallerId: "6161872b43430600096f3fee",
                        phoneNumber: "9876543212",
                        name: "PRIYA",
                        status: "busy",
                        callType: "incoming",
                        time: "5:00pm",
                        message: "will call you later",
                        simId: "SIM1",
                      },
                      {
                        wiseCallerId: "6174ccf5ba15ff00084330f3",
                        phoneNumber: "9876543212",
                        name: "PRIYA",
                        status: "busy",
                        callType: "incoming",
                        time: "5:00pm",
                        message: "will call you later",
                        simId: "SIM1",
                      },
                    ],
                  },
                  {
                    dateId: "2020-10-23",
                    callList: [
                      {
                        wiseCallerId: "617690a6c294d45bd496d176",
                        phoneNumber: "9876543212",
                        name: "PRIYA",
                        status: "busy",
                        callType: "incoming",
                        time: "5:00pm",
                        message: "will call you later",
                        simId: "SIM1",
                      },
                      {
                        wiseCallerId: "6174ccf5ba15ff00084330f3",
                        phoneNumber: "9876543212",
                        name: "PRIYA",
                        status: "busy",
                        callType: "incoming",
                        time: "5:00pm",
                        message: "will call you later",
                        simId: "SIM1",
                      },
                      {
                        wiseCallerId: "6177a25b8a2ccc03fc481270",
                        phoneNumber: "9876543212",
                        name: "PRIYA",
                        status: "busy",
                        callType: "incoming",
                        time: "5:00pm",
                        message: "will call you later",
                        simId: "SIM1",
                      },
                    ],
                  },
                  {
                    dateId: "2020-10-22",
                    callList: [
                      {
                        wiseCallerId: "6177a25b8a2ccc03fc481270",
                        phoneNumber: "9876543212",
                        name: "PRIYA",
                        status: "busy",
                        callType: "incoming",
                        time: "5:00pm",
                        message: "will call you later",
                        simId: "SIM1",
                      },
                      {
                        wiseCallerId: "6177b82712131f000acc444b",
                        phoneNumber: "9876543212",
                        name: "PRIYA",
                        status: "busy",
                        callType: "incoming",
                        time: "5:00pm",
                        message: "will call you later",
                        simId: "SIM1",
                      },
                      {
                        wiseCallerId: "6177b82712131f000acc444b",
                        phoneNumber: "9876543212",
                        name: "PRIYA",
                        status: "busy",
                        callType: "incoming",
                        time: "5:00pm",
                        message: "will call you later",
                        simId: "SIM1",
                      },
                    ],
                  },
                ],
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/call-service/api/v1/callhistory/get": {
      get: {
        tags: ["Call Service"],
        summary: "call history",
        operationId: "callhistory",
        parameters: [],
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/call-service/api/v1/callhistory/add-number": {
      post: {
        tags: ["Call Service"],
        summary: "add number from call history",
        operationId: "addnumberfromcallhistory",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/addnumberfromcallhistoryrequest",
              },
              example: {
                callLogId: "617a3468c0182323f296cf9b",
                callDetails: {
                  wiseCallerId: "617949e2917167caf3ad3e23",
                  name: "TUSHAR0dfgg07",
                  phoneNumber: "9876543212",
                  callType: "incoming",
                  time: "5:00pm",
                  message: "will call you later",
                  simId: "SIM1",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/call-service/api/v1/callhistory/delete-number": {
      post: {
        tags: ["Call Service"],
        summary: "delete number from call history",
        operationId: "deletenumberfromcallhistory",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/deletenumberfromcallhistoryrequest",
              },
              example: {
                callLogId: "617a3468c0182323f296cf9b",
                callId: "617949e2917167caf3ad3e23",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/call-service/api/v1/callhistory/favorite-add": {
      post: {
        tags: ["Call Service"],
        summary: "Add favorite",
        operationId: "Addfavorite",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AddfavoriteRequest",
              },
              example: {
                name: "abc",
                number: "+918849455045",
                isFavorite: true,
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/call-service/api/v1/callhistory/block-add": {
      post: {
        tags: ["Call Service"],
        summary: "Add Block contact",
        operationId: "AddBlockcontact",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AddBlockcontactRequest",
              },
              example: {
                name: "abc",
                number: "+918849455045",
                isBlock: true,
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/notification-service/api/v1/sms/send": {
      post: {
        tags: ["Notification Service"],
        summary: "send custom message",
        operationId: "sendcustommessage",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/sendcustommessagerequest",
              },
              example: {
                mobileNo: "+918849455045",
                message: "custom message",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/contact-service/api/v1/contact/sync": {
      post: {
        tags: ["Contact Service"],
        summary: "contact sync",
        operationId: "contactsync",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/contactsyncrequest",
              },
              example: {
                mobileNO: "+918980514085",
                contact: [
                  {
                    name: "abc",
                    number: "+918849455045",
                    isFavorite: true,
                    isBlock: true,
                    note: "aaaa",
                  },
                  {
                    name: "abc1",
                    number: "+911234567889",
                    isFavorite: true,
                    note: "aaaa",
                  },
                  {
                    name: "abcd",
                    number: "+911234567888",
                    isFavorite: true,
                  },
                  {
                    name: "abcd1",
                    number: "+911234567889",
                    isFavorite: true,
                  },
                  {
                    name: "abcd3",
                    number: "+911234567810",
                    isFavorite: true,
                  },
                ],
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/contact-service/api/v1/contact/get": {
      get: {
        tags: ["Contact Service"],
        summary: "Get contact details",
        operationId: "Getcontactdetails",
        parameters: [],
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/contact-service/api/v1/calender/sync": {
      post: {
        tags: ["Contact Service"],
        summary: "Calendar sync",
        operationId: "Calendarsync",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CalendarsyncRequest",
              },
              example: {
                email: "savaliyatushar2197@gmail.com",
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
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/contact-service/api/v1/calender/get": {
      get: {
        tags: ["Contact Service"],
        summary: "get calendar Event",
        operationId: "getcalendarEvent",
        parameters: [],
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/contact-service/api/v1/calender/update/{id}": {
      put: {
        tags: ["Contact Service"],
        summary: "update email address into calendar event",
        operationId: "updateemailaddressintocalendarevent",
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
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/event/add": {
      post: {
        tags: ["Status Service"],
        summary: "Add Event status",
        operationId: "AddEventstatus",
        parameters: [],
        requestBody: {
          content: {
            "multipart/form-data": {
              encoding: {},
              schema: {
                required: ["status", "logo"],
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "DND2",
                  },
                  logo: {
                    type: "file",
                  },
                },
              },
            },
          },
          required: false,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/event/get": {
      get: {
        tags: ["Status Service"],
        summary: "Get All Event status",
        operationId: "GetAllEventstatus",
        parameters: [],
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/event/update/{id}": {
      put: {
        tags: ["Status Service"],
        summary: "update Event Details",
        operationId: "updateEventDetails",
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
        requestBody: {
          content: {
            "multipart/form-data": {
              encoding: {},
              schema: {
                required: ["status", "logo"],
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "DND",
                  },
                  logo: {
                    type: "file",
                  },
                },
              },
            },
          },
          required: false,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/event/delete/{id}": {
      delete: {
        tags: ["Status Service"],
        summary: "Delete Event Status",
        operationId: "DeleteEventStatus",
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
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/event/add-sub": {
      post: {
        tags: ["Status Service"],
        summary: "add sub status",
        operationId: "addsubstatus",
        parameters: [],
        requestBody: {
          content: {
            "multipart/form-data": {
              encoding: {},
              schema: {
                required: ["status", "parentId", "logo"],
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "DND2",
                  },
                  parentId: {
                    type: "string",
                    example: "61670b887a7764f6a360db28",
                  },
                  logo: {
                    type: "file",
                  },
                },
              },
            },
          },
          required: false,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/event/sub-update/{id}": {
      put: {
        tags: ["Status Service"],
        summary: "update Event subStatus",
        operationId: "updateEventsubStatus",
        parameters: [],
        requestBody: {
          content: {
            "multipart/form-data": {
              encoding: {},
              schema: {
                required: ["status", "logo", "parentId"],
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "DND11111",
                  },
                  logo: {
                    type: "file",
                  },
                  parentId: {
                    type: "string",
                    example: "61670e7633b5790416bcfc03",
                  },
                },
              },
            },
          },
          required: false,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/work-hrs-service/api/v1/work-life/add": {
      post: {
        tags: ["Work Hrs Service"],
        summary: "Add working Hrs",
        operationId: "AddworkingHrs",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AddworkingHrsRequest",
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
                userStatus: "61670b887a7764f6a360db28",
                userSubStatus: "6167128a37ecb90f33f6f924",
                Excluded_dates: ["11/12/2021", "20/12/2021"],
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/work-hrs-service/api/v1/work-life/update/{id}": {
      put: {
        tags: ["Work Hrs Service"],
        summary: "update working Hrs",
        operationId: "updateworkingHrs",
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
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/updateworkingHrsRequest",
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
                userStatus: "61670b887a7764f6a360db28",
                userSubStatus: "6167128a37ecb90f33f6f924",
                Excluded_dates: ["11/12/2021", "20/12/2021"],
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/work-hrs-service/api/v1/work-life/get": {
      get: {
        tags: ["Work Hrs Service"],
        summary: "Get working Hrs",
        operationId: "GetworkingHrs",
        parameters: [],
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/work-hrs-service/api/v1/work-life/delete/{id}": {
      delete: {
        tags: ["Work Hrs Service"],
        summary: "delete working Hrs",
        operationId: "deleteworkingHrs",
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
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/package-service/api/v1/packages/add": {
      post: {
        tags: ["Package Service"],
        summary: "add  packages",
        operationId: "addpackages",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/addpackagesrequest",
              },
              example: {
                name: "abac",
                duration: 12,
                price: 500,
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/package-service/api/v1/packages/get": {
      get: {
        tags: ["Package Service"],
        summary: "Get packages",
        operationId: "Getpackages",
        parameters: [],
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/package-service/api/v1/packages/update/{id}": {
      put: {
        tags: ["Package Service"],
        summary: "update packages",
        operationId: "updatepackages",
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
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/updatepackagesrequest",
              },
              example: {
                name: "abac",
                duration: 12,
                price: 400,
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/package-service/api/v1/packages/delete/{id}": {
      delete: {
        tags: ["Package Service"],
        summary: "delete packages",
        operationId: "deletepackages",
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
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/package-service/api/v1/woucher/add": {
      post: {
        tags: ["Package Service"],
        summary: "Add woucher",
        operationId: "Addwoucher",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AddwoucherRequest",
              },
              example: {
                name: "abac",
                code: "aaa",
                amount: 10,
                minAmount: 100,
                discountType: "FLAT",
                startDate: "2021-12-15",
                endDate: "2021-12-20",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/package-service/api/v1/woucher/get": {
      get: {
        tags: ["Package Service"],
        summary: "Get Wouchers",
        operationId: "GetWouchers",
        parameters: [],
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/package-service/api/v1/woucher/update/{id}": {
      put: {
        tags: ["Package Service"],
        summary: "update woucher",
        operationId: "updatewoucher",
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
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/updatewoucherrequest",
              },
              example: {
                name: "abac",
                code: "aaa",
                amount: 100,
                minAmount: 100,
                discountType: "FLAT",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/package-service/api/v1/woucher/delete/{id}": {
      delete: {
        tags: ["Package Service"],
        summary: "delete Woucher",
        operationId: "deleteWoucher",
        parameters: [],
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/package-service/api/v1/payment/add": {
      post: {
        tags: ["Package Service"],
        summary: "payment Add",
        operationId: "paymentAdd",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/paymentAddRequest",
              },
              example: {
                packageId: "613bc118bc2da97b67b2ee17",
                paymentId: "pay_HxHEX7lHP9E2Em",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/package-service/api/v1/payment/get": {
      get: {
        tags: ["Package Service"],
        summary: "payment Get",
        operationId: "paymentGet",
        parameters: [],
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/package-service/api/v1/cms/add": {
      post: {
        tags: ["Package Service"],
        summary: "create page",
        operationId: "createpage",
        parameters: [],
        requestBody: {
          content: {
            "application/x-www-form-urlencoded": {
              encoding: {},
              schema: {
                required: ["pageName", "content"],
                type: "object",
                properties: {
                  pageName: {
                    type: "string",
                    example: " policy2",
                  },
                  content: {
                    type: "string",
                    example:
                      ' <div class="container"><div id="left-sidebar" data-is-here-when="md lg" class="left-sidebar js-pinned-left-sidebar ps-relative"><div class="left-sidebar--sticky-container js-sticky-leftnav"><nav role="navigation"><ol class="nav-links"><li class=""><a href="/" class="pl8 js-gps-track nav-links--link" data-gps-track="top_nav.click({is_current: false, location: 2, destination: 8})" aria-controls="" data-controller="" data-s-popover-placement="right" data-s-popover-auto-show="true" data-s-popover-hide-on-outside-click="never"><div class="d-flex ai-center"><div class="flex--item truncate"> Home </div></div></a></li><li><ol class="nav-links"><li class="fs-fine tt-uppercase ml8 mt16 mb4 fc-light">Public</li><li class=" youarehere">',
                  },
                },
              },
            },
          },
          required: false,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/package-service/api/v1/cms/get": {
      get: {
        tags: ["Package Service"],
        summary: "get cms page",
        operationId: "getcmspage",
        parameters: [],
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/package-service/api/v1/cms/update/{id}": {
      put: {
        tags: ["Package Service"],
        summary: "update CMS page",
        operationId: "updateCMSpage",
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
        requestBody: {
          content: {
            "application/x-www-form-urlencoded": {
              encoding: {},
              schema: {
                required: ["pageName", "content"],
                type: "object",
                properties: {
                  pageName: {
                    type: "string",
                    example: "policy22",
                  },
                  content: {
                    type: "string",
                    example:
                      '<div class="container"><div id="left-sidebar" data-is-here-when="md lg" class="left-sidebar js-pinned-left-sidebar ps-relative"><div class="left-sidebar--sticky-container js-sticky-leftnav"><nav role="navigation"><ol class="nav-links"><li class=""><a href="/" class="pl8 js-gps-track nav-links--link" data-gps-track="top_nav.click({is_current: false, location: 2, destination: 8})" aria-controls="" data-controller="" data-s-popover-placement="right" data-s-popover-auto-show="true" data-s-popover-hide-on-outside-click="never"><div class="d-flex ai-center"><div class="flex--item truncate"> Home </div></div></a></li><li><ol class="nav-links"><li class="fs-fine tt-uppercase ml8 mt16 mb4 fc-light">Public</li><li class=" youarehere">',
                  },
                },
              },
            },
          },
          required: false,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/package-service/api/v1/cms/delete/{id}": {
      delete: {
        tags: ["Package Service"],
        summary: "delete cms page",
        operationId: "deletecmspage",
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
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/auth-service/api/v1/auth/refresh-token": {
      post: {
        tags: ["Auth Service"],
        summary: "refresh token",
        operationId: "refreshtoken",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/refreshtokenrequest",
              },
              example: {
                token:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYxODcyYjQzNDMwNjAwMDk2ZjNmZWUiLCJtb2JpbGVObyI6Iis5MTg5ODA1MTQwODUiLCJpYXQiOjE2MzU0OTA5NTUsImV4cCI6MTYzNTQ5MTAxNX0.7mDc3RwACVbSiBamoGGhZW4XRPVFq-Gzc18EvJ-XbQc",
                refreshToken:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYxODcyYjQzNDMwNjAwMDk2ZjNmZWUiLCJtb2JpbGVObyI6Iis5MTg5ODA1MTQwODUiLCJpYXQiOjE2MzU0ODkyMTcsImV4cCI6MTYzNTU3NTYxN30.gXjRlkdVMELgFGfXd7sX7WGb4pnssrJTVxCEZCPzR5c",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/custom-status/add": {
      post: {
        tags: ["Status Service"],
        summary: "custom status add",
        operationId: "customstatusadd",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/customstatusaddrequest",
                },
                description: "",
                example: [
                  {
                    customId: 147,
                    custom_name: "abc",
                    start_date: "10/08/2021 10:00 AM",
                    end_date: "10/20/2021 10:00 AM",
                    is_allday_status: true,
                    is_repeat: true,
                    RRULE: "rrule format if is_repeat is true",
                    time_zone: "IN/PST etc..",
                    status: "61670b887a7764f6a360db28",
                    sub_status: null,
                    notes: {
                      is_custom: true,
                      text: "text for sending sms",
                    },
                    display_to: "contacts/all",
                    auto_sms: true,
                  },
                ],
              },
              example: [
                {
                  customId: 147,
                  custom_name: "abc",
                  start_date: "10/08/2021 10:00 AM",
                  end_date: "10/20/2021 10:00 AM",
                  is_allday_status: true,
                  is_repeat: true,
                  RRULE: "rrule format if is_repeat is true",
                  time_zone: "IN/PST etc..",
                  status: "61670b887a7764f6a360db28",
                  sub_status: null,
                  notes: {
                    is_custom: true,
                    text: "text for sending sms",
                  },
                  display_to: "contacts/all",
                  auto_sms: true,
                },
              ],
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/custom-status/update": {
      put: {
        tags: ["Status Service"],
        summary: "custom status update",
        operationId: "customstatusupdate",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/customstatusupdaterequest",
              },
              example: {
                status: [
                  {
                    customId: 147,
                    custom_name: "abc",
                    start_date: "10/08/2021 10:00 AM",
                    end_date: "10/20/2021 10:00 AM",
                    is_allday_status: true,
                    is_repeat: true,
                    RRULE: "rrule format if is_repeat is true",
                    time_zone: "IN/PST etc..",
                    status: "61670b887a7764f6a360db28",
                    sub_status: null,
                    notes: {
                      is_custom: true,
                      text: "text for sending sms",
                    },
                    display_to: "contacts/all",
                    auto_sms: true,
                    is_deleted: null,
                  },
                  {
                    customId: 148,
                    custom_name: "status2",
                    start_date: "10/08/2021 10:00 AM",
                    end_date: "10/20/2021 10:00 AM",
                    is_allday_status: true,
                    is_repeat: true,
                    RRULE: "rrule format if is_repeat is true",
                    time_zone: "IN/PST etc..",
                    status: "61670b887a7764f6a360db28",
                    sub_status: null,
                    notes: {
                      is_custom: true,
                      text: "text for sending sms",
                    },
                    display_to: "contacts/all",
                    auto_sms: true,
                    is_deleted: "2021-22-11",
                  },
                ],
                workLife: {
                  Excluded_dates: ["11/12/2021", "20/12/2021"],
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/custom-status/delete/{id}": {
      delete: {
        tags: ["Status Service"],
        summary: "delete custom status",
        operationId: "deletecustomstatus",
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
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/custom-status/get": {
      get: {
        tags: ["Status Service"],
        summary: "get user status",
        operationId: "getuserstatus",
        parameters: [],
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/global-type/add": {
      post: {
        tags: ["Global Type"],
        summary: "global typee add",
        operationId: "globaltypeeadd",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/globaltypeeaddrequest",
              },
              example: {
                type: "AUTO_STATUS",
                order: 6,
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/global-type/update/{id}": {
      put: {
        tags: ["Global Type"],
        summary: "global type update",
        operationId: "globaltypeupdate",
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
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/globaltypeupdaterequest",
              },
              example: {
                type: "ROAD_SAFETY",
                order: 1,
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/global-type/get": {
      get: {
        tags: ["Global Type"],
        summary: "global type get",
        operationId: "globaltypeget",
        parameters: [],
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/global-type/delete/{id}": {
      delete: {
        tags: ["Global Type"],
        summary: "global type delete",
        operationId: "globaltypedelete",
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
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/general-status/add": {
      post: {
        tags: ["General status"],
        summary: "general_status add",
        operationId: "general_statusadd",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/general_statusaddrequest",
              },
              example: {
                name: "Busy",
                priority: 0,
                applicable_types: [
                  "618fb8e614842f8284d028dd",
                  "618fb99bc8ba53856cbf0459",
                ],
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/general-status/update/{id}": {
      put: {
        tags: ["General status"],
        summary: "general status update",
        operationId: "generalstatusupdate",
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
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/generalstatusupdaterequest",
              },
              example: {
                name: "Busy",
                priority: 0,
                applicable_types: [
                  "618fb8e614842f8284d028dd",
                  "618fb99bc8ba53856cbf0459",
                ],
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/general-status/get": {
      get: {
        tags: ["General status"],
        summary: "general status get",
        operationId: "generalstatusget",
        parameters: [],
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/general-status/delete/{id}": {
      delete: {
        tags: ["General status"],
        summary: "general status delete",
        operationId: "generalstatusdelete",
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
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/contact-sync-service/api/v1/contact/update": {
      put: {
        tags: ["Contact Service"],
        summary: "contact update",
        operationId: "contactupdate",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/contactupdaterequest",
                },
                description: "",
                example: [
                  {
                    customId: 150,
                    first_name: "tushar1",
                    last_name: "savaliya2",
                    profile_image: null,
                    local_profile_image_path: "contacts/abc.png",
                    phones: [
                      {
                        wisecallerId: "618f6146385c780009f97e21",
                        _id: "618fa6ae2ac1e05fd9709d97",
                        ph_no: "+911234567890",
                        type: "PRIMARY",
                      },
                      {
                        wisecallerId: null,
                        _id: "618fa6ae2ac1e05fd9709d98",
                        ph_no: "+913216549870",
                        type: "SECONDARY",
                      },
                      {
                        wisecallerId: null,
                        _id: "618fa6ae2ac1e05fd9709d99",
                        ph_no: "+911236547890",
                        type: "OFFICE",
                      },
                      {
                        wisecallerId: null,
                        _id: "618fa6ae2ac1e05fd9709d9a",
                        ph_no: "+917412589630",
                        type: "HOME",
                      },
                    ],
                  },
                  {
                    customId: 151,
                    first_name: "mehul",
                    last_name: "mehul",
                    profile_image: null,
                    local_profile_image_path: "contacts/abc.png",
                    phones: [
                      {
                        wisecallerId: null,
                        _id: "618fa6b02ac1e05fd9709da1",
                        ph_no: "+911237896540",
                        type: "PRIMARY",
                      },
                      {
                        wisecallerId: null,
                        _id: "618fa6b02ac1e05fd9709da2",
                        ph_no: "+919874563210",
                        type: "SECONDARY",
                      },
                      {
                        wisecallerId: null,
                        _id: "618fa6b02ac1e05fd9709da3",
                        ph_no: "+915478963210",
                        type: "OFFICE",
                      },
                      {
                        wisecallerId: null,
                        _id: "618fa6b02ac1e05fd9709da4",
                        ph_no: "+918756941230",
                        type: "HOME",
                      },
                    ],
                  },
                  {
                    customId: 152,
                    first_name: "jignesh",
                    last_name: "jignesh",
                    profile_image: null,
                    local_profile_image_path: "contacts/abc.png",
                    phones: [
                      {
                        ph_no: "+919854671230",
                        type: "PRIMARY",
                      },
                      {
                        ph_no: "+912567894130",
                        type: "SECONDARY",
                      },
                      {
                        ph_no: "+919568732410",
                        type: "OFFICE",
                      },
                      {
                        ph_no: "+919496782117",
                        type: "HOME",
                      },
                    ],
                  },
                ],
              },
              example: [
                {
                  customId: 150,
                  first_name: "tushar1",
                  last_name: "savaliya2",
                  profile_image: null,
                  local_profile_image_path: "contacts/abc.png",
                  phones: [
                    {
                      wisecallerId: "618f6146385c780009f97e21",
                      _id: "618fa6ae2ac1e05fd9709d97",
                      ph_no: "+911234567890",
                      type: "PRIMARY",
                    },
                    {
                      wisecallerId: null,
                      _id: "618fa6ae2ac1e05fd9709d98",
                      ph_no: "+913216549870",
                      type: "SECONDARY",
                    },
                    {
                      wisecallerId: null,
                      _id: "618fa6ae2ac1e05fd9709d99",
                      ph_no: "+911236547890",
                      type: "OFFICE",
                    },
                    {
                      wisecallerId: null,
                      _id: "618fa6ae2ac1e05fd9709d9a",
                      ph_no: "+917412589630",
                      type: "HOME",
                    },
                  ],
                },
                {
                  customId: 151,
                  first_name: "mehul",
                  last_name: "mehul",
                  profile_image: null,
                  local_profile_image_path: "contacts/abc.png",
                  phones: [
                    {
                      wisecallerId: null,
                      _id: "618fa6b02ac1e05fd9709da1",
                      ph_no: "+911237896540",
                      type: "PRIMARY",
                    },
                    {
                      wisecallerId: null,
                      _id: "618fa6b02ac1e05fd9709da2",
                      ph_no: "+919874563210",
                      type: "SECONDARY",
                    },
                    {
                      wisecallerId: null,
                      _id: "618fa6b02ac1e05fd9709da3",
                      ph_no: "+915478963210",
                      type: "OFFICE",
                    },
                    {
                      wisecallerId: null,
                      _id: "618fa6b02ac1e05fd9709da4",
                      ph_no: "+918756941230",
                      type: "HOME",
                    },
                  ],
                },
                {
                  customId: 152,
                  first_name: "jignesh",
                  last_name: "jignesh",
                  profile_image: null,
                  local_profile_image_path: "contacts/abc.png",
                  phones: [
                    {
                      ph_no: "+919854671230",
                      type: "PRIMARY",
                    },
                    {
                      ph_no: "+912567894130",
                      type: "SECONDARY",
                    },
                    {
                      ph_no: "+919568732410",
                      type: "OFFICE",
                    },
                    {
                      ph_no: "+919496782117",
                      type: "HOME",
                    },
                  ],
                },
              ],
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/contact-sync-service/api/v1/contact/search": {
      post: {
        tags: ["Contact Service"],
        summary: "search contact in list",
        operationId: "searchcontactinlist",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/searchcontactinlistrequest",
              },
              example: {
                phone_number: "911234567890",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/contact-sync-service/api/v1/contact/search-wisecaller": {
      post: {
        tags: ["Contact Service"],
        summary: "search in wiseccaller contact in list",
        operationId: "searchinwiseccallercontactinlist",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/searchinwiseccallercontactinlistrequest",
              },
              example: {
                phone_number: "911234567890",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
  },
  components: {
    schemas: {
      LoginuserRequest: {
        title: "LoginuserRequest",
        required: ["mobileNo"],
        type: "object",
        properties: {
          mobileNo: {
            type: "string",
          },
        },
        example: {
          mobileNo: "+918980514085",
        },
      },
      verifyotprequest: {
        title: "verifyotprequest",
        required: ["mobileNo", "otp"],
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
          mobileNo: "+918980514085",
          otp: 1628,
        },
      },
      contactUsRequest: {
        title: "contactUsRequest",
        required: ["email", "message"],
        type: "object",
        properties: {
          email: {
            type: "string",
          },
          message: {
            type: "string",
          },
        },
        example: {
          email: "savaliyatushar2197@gmail.com",
          message: "systme is not working",
        },
      },
      adddevicesrequest: {
        title: "adddevicesrequest",
        required: ["devices"],
        type: "object",
        properties: {
          devices: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
        },
        example: {
          devices: ["speaket", "blutooth"],
        },
      },
      resendotprequest: {
        title: "resendotprequest",
        required: ["mobileNo"],
        type: "object",
        properties: {
          mobileNo: {
            type: "string",
          },
        },
        example: {
          mobileNo: "+919898803674",
        },
      },
      callhISTORYRequest: {
        title: "callhISTORYRequest",
        required: ["callLogs"],
        type: "object",
        properties: {
          callLogs: {
            type: "array",
            items: {
              $ref: "#/components/schemas/CallLog",
            },
            description: "",
          },
        },
        example: {
          callLogs: [
            {
              dateId: "2021-10-27",
              callList: [
                {
                  wiseCallerId: "6174ccf5ba15ff00084330f3",
                  phoneNumber: "9876543212",
                  name: "PRIYA",
                  status: "busy",
                  callType: "incoming",
                  time: "5:00pm",
                  message: "will call you later",
                  simId: "SIM1",
                },
                {
                  wiseCallerId: "6161872b43430600096f3fee",
                  phoneNumber: "9876543212",
                  name: "PRIYA",
                  status: "busy",
                  callType: "incoming",
                  time: "5:00pm",
                  message: "will call you later",
                  simId: "SIM1",
                },
                {
                  wiseCallerId: "6174ccf5ba15ff00084330f3",
                  phoneNumber: "9876543212",
                  name: "PRIYA",
                  status: "busy",
                  callType: "incoming",
                  time: "5:00pm",
                  message: "will call you later",
                  simId: "SIM1",
                },
              ],
            },
            {
              dateId: "2020-10-23",
              callList: [
                {
                  wiseCallerId: "617690a6c294d45bd496d176",
                  phoneNumber: "9876543212",
                  name: "PRIYA",
                  status: "busy",
                  callType: "incoming",
                  time: "5:00pm",
                  message: "will call you later",
                  simId: "SIM1",
                },
                {
                  wiseCallerId: "6174ccf5ba15ff00084330f3",
                  phoneNumber: "9876543212",
                  name: "PRIYA",
                  status: "busy",
                  callType: "incoming",
                  time: "5:00pm",
                  message: "will call you later",
                  simId: "SIM1",
                },
                {
                  wiseCallerId: "6177a25b8a2ccc03fc481270",
                  phoneNumber: "9876543212",
                  name: "PRIYA",
                  status: "busy",
                  callType: "incoming",
                  time: "5:00pm",
                  message: "will call you later",
                  simId: "SIM1",
                },
              ],
            },
            {
              dateId: "2020-10-22",
              callList: [
                {
                  wiseCallerId: "6177a25b8a2ccc03fc481270",
                  phoneNumber: "9876543212",
                  name: "PRIYA",
                  status: "busy",
                  callType: "incoming",
                  time: "5:00pm",
                  message: "will call you later",
                  simId: "SIM1",
                },
                {
                  wiseCallerId: "6177b82712131f000acc444b",
                  phoneNumber: "9876543212",
                  name: "PRIYA",
                  status: "busy",
                  callType: "incoming",
                  time: "5:00pm",
                  message: "will call you later",
                  simId: "SIM1",
                },
                {
                  wiseCallerId: "6177b82712131f000acc444b",
                  phoneNumber: "9876543212",
                  name: "PRIYA",
                  status: "busy",
                  callType: "incoming",
                  time: "5:00pm",
                  message: "will call you later",
                  simId: "SIM1",
                },
              ],
            },
          ],
        },
      },
      CallLog: {
        title: "CallLog",
        required: ["dateId", "callList"],
        type: "object",
        properties: {
          dateId: {
            type: "string",
          },
          callList: {
            type: "array",
            items: {
              $ref: "#/components/schemas/CallList",
            },
            description: "",
          },
        },
        example: {
          dateId: "2021-10-27",
          callList: [
            {
              wiseCallerId: "6174ccf5ba15ff00084330f3",
              phoneNumber: "9876543212",
              name: "PRIYA",
              status: "busy",
              callType: "incoming",
              time: "5:00pm",
              message: "will call you later",
              simId: "SIM1",
            },
            {
              wiseCallerId: "6161872b43430600096f3fee",
              phoneNumber: "9876543212",
              name: "PRIYA",
              status: "busy",
              callType: "incoming",
              time: "5:00pm",
              message: "will call you later",
              simId: "SIM1",
            },
            {
              wiseCallerId: "6174ccf5ba15ff00084330f3",
              phoneNumber: "9876543212",
              name: "PRIYA",
              status: "busy",
              callType: "incoming",
              time: "5:00pm",
              message: "will call you later",
              simId: "SIM1",
            },
          ],
        },
      },
      CallList: {
        title: "CallList",
        required: [
          "wiseCallerId",
          "phoneNumber",
          "name",
          "status",
          "callType",
          "time",
          "message",
          "simId",
        ],
        type: "object",
        properties: {
          wiseCallerId: {
            type: "string",
          },
          phoneNumber: {
            type: "string",
          },
          name: {
            type: "string",
          },
          status: {
            type: "string",
          },
          callType: {
            type: "string",
          },
          time: {
            type: "string",
          },
          message: {
            type: "string",
          },
          simId: {
            type: "string",
          },
        },
        example: {
          wiseCallerId: "6174ccf5ba15ff00084330f3",
          phoneNumber: "9876543212",
          name: "PRIYA",
          status: "busy",
          callType: "incoming",
          time: "5:00pm",
          message: "will call you later",
          simId: "SIM1",
        },
      },
      addnumberfromcallhistoryrequest: {
        title: "addnumberfromcallhistoryrequest",
        required: ["callLogId", "callDetails"],
        type: "object",
        properties: {
          callLogId: {
            type: "string",
          },
          callDetails: {
            $ref: "#/components/schemas/CallDetails",
          },
        },
        example: {
          callLogId: "617a3468c0182323f296cf9b",
          callDetails: {
            wiseCallerId: "617949e2917167caf3ad3e23",
            name: "TUSHAR0dfgg07",
            phoneNumber: "9876543212",
            callType: "incoming",
            time: "5:00pm",
            message: "will call you later",
            simId: "SIM1",
          },
        },
      },
      CallDetails: {
        title: "CallDetails",
        required: [
          "wiseCallerId",
          "name",
          "phoneNumber",
          "callType",
          "time",
          "message",
          "simId",
        ],
        type: "object",
        properties: {
          wiseCallerId: {
            type: "string",
          },
          name: {
            type: "string",
          },
          phoneNumber: {
            type: "string",
          },
          callType: {
            type: "string",
          },
          time: {
            type: "string",
          },
          message: {
            type: "string",
          },
          simId: {
            type: "string",
          },
        },
        example: {
          wiseCallerId: "617949e2917167caf3ad3e23",
          name: "TUSHAR0dfgg07",
          phoneNumber: "9876543212",
          callType: "incoming",
          time: "5:00pm",
          message: "will call you later",
          simId: "SIM1",
        },
      },
      deletenumberfromcallhistoryrequest: {
        title: "deletenumberfromcallhistoryrequest",
        required: ["callLogId", "callId"],
        type: "object",
        properties: {
          callLogId: {
            type: "string",
          },
          callId: {
            type: "string",
          },
        },
        example: {
          callLogId: "617a3468c0182323f296cf9b",
          callId: "617949e2917167caf3ad3e23",
        },
      },
      Contact: {
        title: "Contact",
        required: ["name", "number"],
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          number: {
            type: "string",
          },
        },
        example: {
          name: "abc",
          number: "+918980514085",
        },
      },
      calldetailsrequest: {
        title: "calldetailsrequest",
        required: ["contact"],
        type: "object",
        properties: {
          contact: {
            $ref: "#/components/schemas/Contact1",
          },
        },
        example: {
          contact: {
            name: "abc",
            number: "+918980514085",
            isfavourite: false,
          },
        },
      },
      Contact1: {
        title: "Contact1",
        required: ["name", "number", "isfavourite"],
        type: "object",
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
        example: {
          name: "abc",
          number: "+918980514085",
          isfavourite: false,
        },
      },
      AddfavoriteRequest: {
        title: "AddfavoriteRequest",
        required: ["name", "number", "isFavorite"],
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
        title: "AddBlockcontactRequest",
        required: ["name", "number", "isBlock"],
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
      sendcustommessagerequest: {
        title: "sendcustommessagerequest",
        required: ["mobileNo", "message"],
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
          message: "custom message",
        },
      },
      contactsyncrequest: {
        title: "contactsyncrequest",
        required: ["mobileNO", "contact"],
        type: "object",
        properties: {
          mobileNO: {
            type: "string",
          },
          contact: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Contact2",
            },
            description: "",
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
              note: "aaaa",
            },
            {
              name: "abc1",
              number: "+911234567889",
              isFavorite: true,
              note: "aaaa",
            },
            {
              name: "abcd",
              number: "+911234567888",
              isFavorite: true,
            },
            {
              name: "abcd1",
              number: "+911234567889",
              isFavorite: true,
            },
            {
              name: "abcd3",
              number: "+911234567810",
              isFavorite: true,
            },
          ],
        },
      },
      Contact2: {
        title: "Contact2",
        required: ["name", "number", "isFavorite"],
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
          note: {
            type: "string",
          },
        },
        example: {
          name: "abc",
          number: "+918849455045",
          isFavorite: true,
          isBlock: true,
          note: "aaaa",
        },
      },
      CalendarsyncRequest: {
        title: "CalendarsyncRequest",
        required: ["email", "calenderEvent"],
        type: "object",
        properties: {
          email: {
            type: "string",
          },
          calenderEvent: {
            type: "array",
            items: {
              $ref: "#/components/schemas/CalenderEvent",
            },
            description: "",
          },
        },
        example: {
          email: "savaliyatushar2197@gmail.com",
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
      CalenderEvent: {
        title: "CalenderEvent",
        required: ["eventName", "allDay", "startDate", "endDay"],
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
        example: {
          eventName: "abc",
          allDay: true,
          startDate: "24-05-2021",
          endDay: "24-05-2021",
        },
      },
      AddworkingHrsRequest: {
        title: "AddworkingHrsRequest",
        required: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
          "startTime",
          "endTime",
          "otherStatus",
        ],
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
      updateworkingHrsRequest: {
        title: "updateworkingHrsRequest",
        required: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
          "startTime",
          "endTime",
          "otherStatus",
        ],
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
      addpackagesrequest: {
        title: "addpackagesrequest",
        required: ["name", "duration", "price"],
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          duration: {
            type: "integer",
            format: "int32",
          },
          price: {
            type: "integer",
            format: "int32",
          },
        },
        example: {
          name: "abac",
          duration: 12,
          price: 500,
        },
      },
      updatepackagesrequest: {
        title: "updatepackagesrequest",
        required: ["name", "duration", "price"],
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          duration: {
            type: "integer",
            format: "int32",
          },
          price: {
            type: "integer",
            format: "int32",
          },
        },
        example: {
          name: "abac",
          duration: 12,
          price: 400,
        },
      },
      AddwoucherRequest: {
        title: "AddwoucherRequest",
        required: [
          "name",
          "code",
          "amount",
          "minAmount",
          "discountType",
          "startDate",
          "endDate",
        ],
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          code: {
            type: "string",
          },
          amount: {
            type: "integer",
            format: "int32",
          },
          minAmount: {
            type: "integer",
            format: "int32",
          },
          discountType: {
            type: "string",
          },
          startDate: {
            type: "string",
          },
          endDate: {
            type: "string",
          },
        },
        example: {
          name: "abac",
          code: "aaa",
          amount: 10,
          minAmount: 100,
          discountType: "FLAT",
          startDate: "2021-12-15",
          endDate: "2021-12-20",
        },
      },
      updatewoucherrequest: {
        title: "updatewoucherrequest",
        required: ["name", "code", "amount", "minAmount", "discountType"],
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          code: {
            type: "string",
          },
          amount: {
            type: "integer",
            format: "int32",
          },
          minAmount: {
            type: "integer",
            format: "int32",
          },
          discountType: {
            type: "string",
          },
        },
        example: {
          name: "abac",
          code: "aaa",
          amount: 100,
          minAmount: 100,
          discountType: "FLAT",
        },
      },
      paymentAddRequest: {
        title: "paymentAddRequest",
        required: ["packageId", "paymentId"],
        type: "object",
        properties: {
          packageId: {
            type: "string",
          },
          paymentId: {
            type: "string",
          },
        },
        example: {
          packageId: "613bc118bc2da97b67b2ee17",
          paymentId: "pay_HxHEX7lHP9E2Em",
        },
      },
      refreshtokenrequest: {
        title: "refreshtokenrequest",
        required: ["token", "refreshToken"],
        type: "object",
        properties: {
          token: {
            type: "string",
          },
          refreshToken: {
            type: "string",
          },
        },
        example: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYxODcyYjQzNDMwNjAwMDk2ZjNmZWUiLCJtb2JpbGVObyI6Iis5MTg5ODA1MTQwODUiLCJpYXQiOjE2MzU0OTA5NTUsImV4cCI6MTYzNTQ5MTAxNX0.7mDc3RwACVbSiBamoGGhZW4XRPVFq-Gzc18EvJ-XbQc",
          refreshToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYxODcyYjQzNDMwNjAwMDk2ZjNmZWUiLCJtb2JpbGVObyI6Iis5MTg5ODA1MTQwODUiLCJpYXQiOjE2MzU0ODkyMTcsImV4cCI6MTYzNTU3NTYxN30.gXjRlkdVMELgFGfXd7sX7WGb4pnssrJTVxCEZCPzR5c",
        },
      },
      customstatusaddrequest: {
        title: "customstatusaddrequest",
        required: [
          "customId",
          "custom_name",
          "start_date",
          "end_date",
          "is_allday_status",
          "is_repeat",
          "RRULE",
          "time_zone",
          "status",
          "sub_status",
          "notes",
          "display_to",
          "auto_sms",
        ],
        type: "object",
        properties: {
          customId: {
            type: "integer",
            format: "int32",
          },
          custom_name: {
            type: "string",
          },
          start_date: {
            type: "string",
          },
          end_date: {
            type: "string",
          },
          is_allday_status: {
            type: "boolean",
          },
          is_repeat: {
            type: "boolean",
          },
          RRULE: {
            type: "string",
          },
          time_zone: {
            type: "string",
          },
          status: {
            type: "string",
          },
          sub_status: {
            type: "string",
            nullable: true,
          },
          notes: {
            $ref: "#/components/schemas/Notes",
          },
          display_to: {
            type: "string",
          },
          auto_sms: {
            type: "boolean",
          },
        },
        example: {
          customId: 147,
          custom_name: "abc",
          start_date: "10/08/2021 10:00 AM",
          end_date: "10/20/2021 10:00 AM",
          is_allday_status: true,
          is_repeat: true,
          RRULE: "rrule format if is_repeat is true",
          time_zone: "IN/PST etc..",
          status: "61670b887a7764f6a360db28",
          sub_status: null,
          notes: {
            is_custom: true,
            text: "text for sending sms",
          },
          display_to: "contacts/all",
          auto_sms: true,
        },
      },
      Notes: {
        title: "Notes",
        required: ["is_custom", "text"],
        type: "object",
        properties: {
          is_custom: {
            type: "boolean",
          },
          text: {
            type: "string",
          },
        },
        example: {
          is_custom: true,
          text: "text for sending sms",
        },
      },
      customstatusupdaterequest: {
        title: "customstatusupdaterequest",
        required: ["status", "workLife"],
        type: "object",
        properties: {
          status: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Status",
            },
            description: "",
          },
          workLife: {
            $ref: "#/components/schemas/WorkLife",
          },
        },
        example: {
          status: [
            {
              customId: 147,
              custom_name: "abc",
              start_date: "10/08/2021 10:00 AM",
              end_date: "10/20/2021 10:00 AM",
              is_allday_status: true,
              is_repeat: true,
              RRULE: "rrule format if is_repeat is true",
              time_zone: "IN/PST etc..",
              status: "61670b887a7764f6a360db28",
              sub_status: null,
              notes: {
                is_custom: true,
                text: "text for sending sms",
              },
              display_to: "contacts/all",
              auto_sms: true,
              is_deleted: null,
            },
            {
              customId: 148,
              custom_name: "status2",
              start_date: "10/08/2021 10:00 AM",
              end_date: "10/20/2021 10:00 AM",
              is_allday_status: true,
              is_repeat: true,
              RRULE: "rrule format if is_repeat is true",
              time_zone: "IN/PST etc..",
              status: "61670b887a7764f6a360db28",
              sub_status: null,
              notes: {
                is_custom: true,
                text: "text for sending sms",
              },
              display_to: "contacts/all",
              auto_sms: true,
              is_deleted: "2021-22-11",
            },
          ],
          workLife: {
            Excluded_dates: ["11/12/2021", "20/12/2021"],
          },
        },
      },
      Status: {
        title: "Status",
        required: [
          "customId",
          "custom_name",
          "start_date",
          "end_date",
          "is_allday_status",
          "is_repeat",
          "RRULE",
          "time_zone",
          "status",
          "sub_status",
          "notes",
          "display_to",
          "auto_sms",
          "is_deleted",
        ],
        type: "object",
        properties: {
          customId: {
            type: "integer",
            format: "int32",
          },
          custom_name: {
            type: "string",
          },
          start_date: {
            type: "string",
          },
          end_date: {
            type: "string",
          },
          is_allday_status: {
            type: "boolean",
          },
          is_repeat: {
            type: "boolean",
          },
          RRULE: {
            type: "string",
          },
          time_zone: {
            type: "string",
          },
          status: {
            type: "string",
          },
          sub_status: {
            type: "string",
            nullable: true,
          },
          notes: {
            $ref: "#/components/schemas/Notes",
          },
          display_to: {
            type: "string",
          },
          auto_sms: {
            type: "boolean",
          },
          is_deleted: {
            type: "string",
            nullable: true,
          },
        },
        example: {
          customId: 147,
          custom_name: "abc",
          start_date: "10/08/2021 10:00 AM",
          end_date: "10/20/2021 10:00 AM",
          is_allday_status: true,
          is_repeat: true,
          RRULE: "rrule format if is_repeat is true",
          time_zone: "IN/PST etc..",
          status: "61670b887a7764f6a360db28",
          sub_status: null,
          notes: {
            is_custom: true,
            text: "text for sending sms",
          },
          display_to: "contacts/all",
          auto_sms: true,
          is_deleted: null,
        },
      },
      WorkLife: {
        title: "WorkLife",
        required: ["Excluded_dates"],
        type: "object",
        properties: {
          Excluded_dates: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
        },
        example: {
          Excluded_dates: ["11/12/2021", "20/12/2021"],
        },
      },
      globaltypeeaddrequest: {
        title: "globaltypeeaddrequest",
        required: ["type", "order"],
        type: "object",
        properties: {
          type: {
            type: "string",
          },
          order: {
            type: "integer",
            format: "int32",
          },
        },
        example: {
          type: "AUTO_STATUS",
          order: 6,
        },
      },
      globaltypeupdaterequest: {
        title: "globaltypeupdaterequest",
        required: ["type", "order"],
        type: "object",
        properties: {
          type: {
            type: "string",
          },
          order: {
            type: "integer",
            format: "int32",
          },
        },
        example: {
          type: "ROAD_SAFETY",
          order: 1,
        },
      },
      general_statusaddrequest: {
        title: "general_statusaddrequest",
        required: ["name", "priority", "applicable_types"],
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          priority: {
            type: "integer",
            format: "int32",
          },
          applicable_types: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
        },
        example: {
          name: "Busy",
          priority: 0,
          applicable_types: [
            "618fb8e614842f8284d028dd",
            "618fb99bc8ba53856cbf0459",
          ],
        },
      },
      generalstatusupdaterequest: {
        title: "generalstatusupdaterequest",
        required: ["name", "priority", "applicable_types"],
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          priority: {
            type: "integer",
            format: "int32",
          },
          applicable_types: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
        },
        example: {
          name: "Busy",
          priority: 0,
          applicable_types: [
            "618fb8e614842f8284d028dd",
            "618fb99bc8ba53856cbf0459",
          ],
        },
      },
      updatecontactrequest: {
        title: "updatecontactrequest",
        required: [
          "customId",
          "first_name",
          "last_name",
          "profile_image",
          "local_profile_image_path",
          "phones",
        ],
        type: "object",
        properties: {
          customId: {
            type: "integer",
            format: "int32",
          },
          first_name: {
            type: "string",
          },
          last_name: {
            type: "string",
          },
          profile_image: {
            type: "string",
            nullable: true,
          },
          local_profile_image_path: {
            type: "string",
          },
          phones: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Phone1",
            },
            description: "",
          },
        },
        example: {
          customId: 150,
          first_name: "tushar1",
          last_name: "savaliya2",
          profile_image: null,
          local_profile_image_path: "contacts/abc.png",
          phones: [
            {
              wisecallerId: "618f6146385c780009f97e21",
              _id: "618fa6ae2ac1e05fd9709d97",
              ph_no: "+911234567890",
              type: "PRIMARY",
            },
            {
              wisecallerId: null,
              _id: "618fa6ae2ac1e05fd9709d98",
              ph_no: "+913216549870",
              type: "SECONDARY",
            },
            {
              wisecallerId: null,
              _id: "618fa6ae2ac1e05fd9709d99",
              ph_no: "+911236547890",
              type: "OFFICE",
            },
            {
              wisecallerId: null,
              _id: "618fa6ae2ac1e05fd9709d9a",
              ph_no: "+917412589630",
              type: "HOME",
            },
          ],
        },
      },
      searchcontactinlistrequest: {
        title: "searchcontactinlistrequest",
        required: ["phone_number"],
        type: "object",
        properties: {
          phone_number: {
            type: "string",
          },
        },
        example: {
          phone_number: "911234567890",
        },
      },
      searchinwiseccallercontactinlistrequest: {
        title: "searchinwiseccallercontactinlistrequest",
        required: ["phone_number"],
        type: "object",
        properties: {
          phone_number: {
            type: "string",
          },
        },
        example: {
          phone_number: "911234567890",
        },
      },
    },
    securitySchemes: {
      httpBearer: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
  security: [
    {
      httpBearer: [],
    },
  ],
  tags: [
    {
      name: "Package Service",
      description: "",
    },
  ],
};
