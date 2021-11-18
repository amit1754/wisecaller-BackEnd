export default {
  openapi: "3.0.0",
  info: {
    title: "wisecaller",
    contact: {},
    version: "1.0",
  },
  servers: [
    {
      url: "https://kkd6boswxb.execute-api.us-east-1.amazonaws.com/dev",
      variables: {},
    },
  ],
  paths: {
    "/auth-service/api/v1/auth/login": {
      post: {
        tags: ["Auth Service"],
        summary: "Login user",
        description: "",
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
                mobileNo: "+919714209234",
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
                mobileNo: "+919714209234",
                otp: 1896,
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
        description:
          "| Name      |Type    | M/o   | Example\n| ---       | ---    | ---   | ---\n| firstName | string | M     | abc\n| lastName  | string | M     | abc\n| email     | string | M     | abc@abc.com\n| status    | string | M     | 61211f1ef34e5900080a6812",
        operationId: "updateuserprofile",
        parameters: [],
        requestBody: {
          content: {
            "application/x-www-form-urlencoded": {
              encoding: {},
              schema: {
                required: [
                  "first_name",
                  "last_name",
                  "profile_image",
                  "is_profile_from_social_media",
                  "phone",
                  "secondary_no",
                ],
                type: "object",
                properties: {
                  first_name: {
                    type: "string",
                    example: " tushar",
                  },
                  last_name: {
                    type: "string",
                    example: "savaliya",
                  },
                  profile_image: {
                    type: "string",
                  },
                  is_profile_from_social_media: {
                    type: "boolean",
                    example: false,
                  },
                  phone: {
                    type: "string",
                    example: "+918849455045",
                  },
                  secondary_no: {
                    type: "string",
                    example: "+918980514085",
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
    "/auth-service/api/v1/user/update-user-status": {
      put: {
        tags: ["Auth Service"],
        summary: "update user status",
        description:
          "| Name      |Type    | M/o   | Example\n| ---       | ---    | ---   | ---\n| firstName | string | M     | abc\n| lastName  | string | M     | abc\n| email     | string | M     | abc@abc.com\n| status    | string | M     | 61211f1ef34e5900080a6812",
        operationId: "updateuserstatus",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/updateuserstatusrequest",
              },
              example: {
                customStatusId: "61950368448ab7e5f7775ce0",
                statusId: "6195004219517edbb9a32dde",
                subStatusId: "6195023525c96ee17567830d",
                notesId: "",
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
        tags: ["Admin Service"],
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
                mobileNo: "+918585858588",
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
        tags: ["call-History"],
        summary: "call hISTORY",
        operationId: "callhISTORY",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/callhISTORYRequest",
                },
                description: "",
                example: [
                  {
                    wisecallerId: "6161872b43430600096f3fee",
                    phone: "+919714209234",
                    contactId: "618fa6b02ac1e05fd9709da0",
                    name: "abc",
                    callHistory: [
                      {
                        time: "2021-12-12 11:00:00",
                        type: "Incoming",
                        simId: "sim1",
                      },
                      {
                        time: "2021-12-12 11:00:00",
                        type: "Outgoing",
                        simId: "sim2",
                      },
                    ],
                    date: "2021-11-13 10:20:22",
                  },
                  {
                    wisecallerId: "6161872b43430600096f3fee",
                    phone: "+919496955716",
                    contactId: "618fa6b12ac1e05fd9709daa",
                    name: "abcs",
                    callHistory: [
                      {
                        time: "2021-12-12 11:00:00",
                        type: "Incoming",
                        simId: "sim1",
                      },
                      {
                        time: "2021-12-12 11:00:00",
                        type: "Outgoing",
                        simId: "sim2",
                      },
                    ],
                    date: "2021-11-14 10:20:22",
                  },
                  {
                    wisecallerId: "6174ccf5ba15ff00084330f3",
                    phone: "+918989898989",
                    contactId: null,
                    name: "abcs",
                    callHistory: [
                      {
                        time: "2021-12-12 11:00:00",
                        type: "Incoming",
                        simId: "sim1",
                      },
                      {
                        time: "2021-12-12 11:00:00",
                        type: "Outgoing",
                        simId: "sim2",
                      },
                    ],
                    date: "2021-11-14 10:20:22",
                  },
                ],
              },
              example: [
                {
                  wisecallerId: "6161872b43430600096f3fee",
                  phone: "+919714209234",
                  contactId: "618fa6b02ac1e05fd9709da0",
                  name: "abc",
                  callHistory: [
                    {
                      time: "2021-12-12 11:00:00",
                      type: "Incoming",
                      simId: "sim1",
                    },
                    {
                      time: "2021-12-12 11:00:00",
                      type: "Outgoing",
                      simId: "sim2",
                    },
                  ],
                  date: "2021-11-13 10:20:22",
                },
                {
                  wisecallerId: "6161872b43430600096f3fee",
                  phone: "+919496955716",
                  contactId: "618fa6b12ac1e05fd9709daa",
                  name: "abcs",
                  callHistory: [
                    {
                      time: "2021-12-12 11:00:00",
                      type: "Incoming",
                      simId: "sim1",
                    },
                    {
                      time: "2021-12-12 11:00:00",
                      type: "Outgoing",
                      simId: "sim2",
                    },
                  ],
                  date: "2021-11-14 10:20:22",
                },
                {
                  wisecallerId: "6174ccf5ba15ff00084330f3",
                  phone: "+918989898989",
                  contactId: null,
                  name: "abcs",
                  callHistory: [
                    {
                      time: "2021-12-12 11:00:00",
                      type: "Incoming",
                      simId: "sim1",
                    },
                    {
                      time: "2021-12-12 11:00:00",
                      type: "Outgoing",
                      simId: "sim2",
                    },
                  ],
                  date: "2021-11-14 10:20:22",
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
    "/call-service/api/v1/callhistory/get": {
      get: {
        tags: ["call-History"],
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
        tags: ["call-History"],
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
                phone: "+919099909990",
                name: "abcs",
                time: "2021-12-12 11:00:00",
                type: "Incoming",
                simId: "sim2",
                date: "2021-12-12 11:00:00",
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
    // "/call-service/api/v1/callhistory/delete-number": {
    //   post: {
    //     tags: ["call-History"],
    //     summary: "delete number from call history",
    //     operationId: "deletenumberfromcallhistory",
    //     parameters: [],
    //     requestBody: {
    //       description: "",
    //       content: {
    //         "application/json": {
    //           schema: {
    //             $ref: "#/components/schemas/deletenumberfromcallhistoryrequest",
    //           },
    //           example: {
    //             callLogId: "617a3468c0182323f296cf9b",
    //             callId: "617949e2917167caf3ad3e23",
    //           },
    //         },
    //       },
    //       required: true,
    //     },
    //     responses: {
    //       "200": {
    //         description: "",
    //         headers: {},
    //       },
    //     },
    //     deprecated: false,
    //   },
    // },
    // "/call-service/api/v1/callhistory/favorite-add": {
    //   post: {
    //     tags: ["Misc"],
    //     summary: "Add favorite",
    //     operationId: "Addfavorite",
    //     parameters: [],
    //     requestBody: {
    //       description: "",
    //       content: {
    //         "application/json": {
    //           schema: {
    //             $ref: "#/components/schemas/AddfavoriteRequest",
    //           },
    //           example: {
    //             name: "abc",
    //             number: "+918849455045",
    //             isFavorite: true,
    //           },
    //         },
    //       },
    //       required: true,
    //     },
    //     responses: {
    //       "200": {
    //         description: "",
    //         headers: {},
    //       },
    //     },
    //     deprecated: false,
    //   },
    // },
    // "/call-service/api/v1/callhistory/block-add": {
    //   post: {
    //     tags: ["Misc"],
    //     summary: "Add Block contact",
    //     operationId: "AddBlockcontact",
    //     parameters: [],
    //     requestBody: {
    //       description: "",
    //       content: {
    //         "application/json": {
    //           schema: {
    //             $ref: "#/components/schemas/AddBlockcontactRequest",
    //           },
    //           example: {
    //             name: "abc",
    //             number: "+918849455045",
    //             isBlock: true,
    //           },
    //         },
    //       },
    //       required: true,
    //     },
    //     responses: {
    //       "200": {
    //         description: "",
    //         headers: {},
    //       },
    //     },
    //     deprecated: false,
    //   },
    // },
    "/notification-service/api/v1/sms/send": {
      post: {
        tags: ["notification-service"],
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
    "/contact-sync-service/api/v1/contact/sync": {
      post: {
        tags: ["contact-sync"],
        summary: "contact sync",
        operationId: "contactsync",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/contactsyncrequest",
                },
                description: "",
                example: [
                  {
                    customId: 150,
                    first_name: "tushar",
                    last_name: "savaliya",
                    profile_image: null,
                    local_profile_image_path: "contacts/abc.png",
                    phones: [
                      {
                        ph_no: "+911234567890",
                        type: "PRIMARY",
                      },
                      {
                        ph_no: "+913216549870",
                        type: "SECONDARY",
                      },
                      {
                        ph_no: "+911236547890",
                        type: "OFFICE",
                      },
                      {
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
                        ph_no: "+911237896540",
                        type: "PRIMARY",
                      },
                      {
                        ph_no: "+919874563210",
                        type: "SECONDARY",
                      },
                      {
                        ph_no: "+915478963210",
                        type: "OFFICE",
                      },
                      {
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
                  first_name: "tushar",
                  last_name: "savaliya",
                  profile_image: null,
                  local_profile_image_path: "contacts/abc.png",
                  phones: [
                    {
                      ph_no: "+911234567890",
                      type: "PRIMARY",
                    },
                    {
                      ph_no: "+913216549870",
                      type: "SECONDARY",
                    },
                    {
                      ph_no: "+911236547890",
                      type: "OFFICE",
                    },
                    {
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
                      ph_no: "+911237896540",
                      type: "PRIMARY",
                    },
                    {
                      ph_no: "+919874563210",
                      type: "SECONDARY",
                    },
                    {
                      ph_no: "+915478963210",
                      type: "OFFICE",
                    },
                    {
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
    "/contact-sync-service/api/v1/contact/get": {
      get: {
        tags: ["contact-sync"],
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
    "/contact-sync-service/api/v1/calender/sync": {
      post: {
        tags: ["contact-sync"],
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
    "/contact-sync-service/api/v1/calender/get": {
      get: {
        tags: ["contact-sync"],
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
    "/contact-sync/api/v1/calender/update/{id}": {
      put: {
        tags: ["contact-sync"],
        summary: "update email address into calendar event",
        operationId: "updateemailaddressintocalendarevent",
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
    "/status-service/api/v1/event/add": {
      post: {
        tags: ["status-service"],
        summary: "Add Event status json",
        operationId: "AddEventstatusjson",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AddEventstatusjsonRequest",
              },
              example: {
                status: "Do not Disturb",
                applicable_types: [
                  "618fb8e614842f8284d028dd",
                  "618fb99bc8ba53856cbf0459",
                ],
                priority: 0,
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
    "/status-service/api/v1/event/get": {
      get: {
        tags: ["status-service"],
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
        tags: ["status-service"],
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
            "application/x-www-form-urlencoded": {
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
                    type: "string",
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
        tags: ["status-service"],
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
        tags: ["status-service"],
        summary: "add sub status",
        operationId: "addsubstatus",
        parameters: [],
        requestBody: {
          content: {
            "application/x-www-form-urlencoded": {
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
                    example: "6195004219517edbb9a32dde",
                  },
                  logo: {
                    type: "string",
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
        tags: ["status-service"],
        summary: "update Event subStatus",
        operationId: "updateEventsubStatus",
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
                required: ["status", "logo", "parentId"],
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "DND11111",
                  },
                  logo: {
                    type: "string",
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
        tags: ["work life"],
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
        tags: ["work life"],
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
                status: true,
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
    "/work-hrs-service/api/v1/work-life/delete/{id}": {
      delete: {
        tags: ["work life"],
        summary: "delete working Hrs",
        operationId: "",
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
    "/work-hrs-service/api/v1/work-life/get": {
      get: {
        tags: ["work life"],
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
    "/package-service/api/v1/packages/add": {
      post: {
        tags: ["Admin Service"],
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
        tags: ["Admin Service"],
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
        tags: ["Admin Service"],
        summary: "update packages",
        operationId: "updatepackages",
        parameters: [],
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
        tags: ["Admin Service"],
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
        tags: ["Admin Service"],
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
        tags: ["Admin Service"],
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
        tags: ["Admin Service"],
        summary: "update woucher",
        operationId: "updatewoucher",
        parameters: [],
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
        tags: ["Admin Service"],
        summary: "delete Woucher",
        operationId: "deleteWoucher",
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
    "/package-service/api/v1/payment/add": {
      post: {
        tags: ["Admin Service"],
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
        tags: ["Admin Service"],
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
    "/cms/add": {
      post: {
        tags: ["Admin Service"],
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
        tags: ["Admin Service"],
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
        tags: ["Admin Service"],
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
        tags: ["Admin Service"],
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
        tags: ["status-service"],
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
                    customId: 135,
                    custom_name: "abc",
                    start_date: "10/08/2021 10:00 AM",
                    end_date: "10/20/2021 10:00 AM",
                    is_allday_status: true,
                    is_repeat: true,
                    RRULE: "is_repeat",
                    time_zone: "IN/PST etc..",
                    status: "61670b887a7764f6a360db28",
                    sub_status: null,
                    notes: {
                      is_custom: true,
                      text: "text for sending sms",
                    },
                    display_to: "ALL",
                    auto_sms: true,
                  },
                ],
              },
              example: [
                {
                  customId: 135,
                  custom_name: "abc",
                  start_date: "10/08/2021 10:00 AM",
                  end_date: "10/20/2021 10:00 AM",
                  is_allday_status: true,
                  is_repeat: true,
                  RRULE: "is_repeat",
                  time_zone: "IN/PST etc..",
                  status: "61670b887a7764f6a360db28",
                  sub_status: null,
                  notes: {
                    is_custom: true,
                    text: "text for sending sms",
                  },
                  display_to: "ALL",
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
        tags: ["status-service"],
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
                    is_deleted: false,
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
                    is_deleted: false,
                  },
                  {
                    customId: 1588,
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
                    is_deleted: false,
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
        tags: ["status-service"],
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
        tags: ["status-service"],
        summary: "get custom status",
        operationId: "getcustomstatus",
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
    "/contact-sync-service/api/v1/contact/update": {
      put: {
        tags: ["contact-sync"],
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
    "/status-service/api/v1/global-type/add": {
      post: {
        tags: ["status-service"],
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
        tags: ["status-service"],
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
        tags: ["status-service"],
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
    "/status-service/api/v1/global-type/delete/{id": {
      delete: {
        tags: ["status-service"],
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
    "/contact-sync-service/api/v1/contact/delete/{id}": {
      delete: {
        tags: ["contact-sync"],
        summary: "user contact delete",
        operationId: "usercontactdelete",
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
    "/contact-sync-service/api/v1/contact/search": {
      post: {
        tags: ["contact-sync"],
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
        tags: ["contact-sync"],
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
          mobileNo: "+919714209234",
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
          mobileNo: "+919714209234",
          otp: 1896,
        },
      },
      updateuserstatusrequest: {
        title: "updateuserstatusrequest",
        required: ["customStatusId", "statusId", "subStatusId", "notesId"],
        type: "object",
        properties: {
          customStatusId: {
            type: "string",
          },
          statusId: {
            type: "string",
          },
          subStatusId: {
            type: "string",
          },
          notesId: {
            type: "string",
          },
        },
        example: {
          customStatusId: "61950368448ab7e5f7775ce0",
          statusId: "6195004219517edbb9a32dde",
          subStatusId: "6195023525c96ee17567830d",
          notesId: "",
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
          mobileNo: "+918585858588",
        },
      },
      callhISTORYRequest: {
        title: "callhISTORYRequest",
        required: [
          "wisecallerId",
          "phone",
          "contactId",
          "name",
          "callHistory",
          "date",
        ],
        type: "object",
        properties: {
          wisecallerId: {
            type: "string",
          },
          phone: {
            type: "string",
          },
          contactId: {
            type: "string",
            nullable: true,
          },
          name: {
            type: "string",
          },
          callHistory: {
            type: "array",
            items: {
              $ref: "#/components/schemas/CallHistory",
            },
            description: "",
          },
          date: {
            type: "string",
          },
        },
        example: {
          wisecallerId: "6161872b43430600096f3fee",
          phone: "+919714209234",
          contactId: "618fa6b02ac1e05fd9709da0",
          name: "abc",
          callHistory: [
            {
              time: "2021-12-12 11:00:00",
              type: "Incoming",
              simId: "sim1",
            },
            {
              time: "2021-12-12 11:00:00",
              type: "Outgoing",
              simId: "sim2",
            },
          ],
          date: "2021-11-13 10:20:22",
        },
      },
      CallHistory: {
        title: "CallHistory",
        required: ["time", "type", "simId"],
        type: "object",
        properties: {
          time: {
            type: "string",
          },
          type: {
            type: "string",
          },
          simId: {
            type: "string",
          },
        },
        example: {
          time: "2021-12-12 11:00:00",
          type: "Incoming",
          simId: "sim1",
        },
      },
      addnumberfromcallhistoryrequest: {
        title: "addnumberfromcallhistoryrequest",
        required: ["phone", "name", "time", "type", "simId", "date"],
        type: "object",
        properties: {
          phone: {
            type: "string",
          },
          name: {
            type: "string",
          },
          time: {
            type: "string",
          },
          type: {
            type: "string",
          },
          simId: {
            type: "string",
          },
          date: {
            type: "string",
          },
        },
        example: {
          phone: "+919099909990",
          name: "abcs",
          time: "2021-12-12 11:00:00",
          type: "Incoming",
          simId: "sim2",
          date: "2021-12-12 11:00:00",
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
              $ref: "#/components/schemas/Phone",
            },
            description: "",
          },
        },
        example: {
          customId: 150,
          first_name: "tushar",
          last_name: "savaliya",
          profile_image: null,
          local_profile_image_path: "contacts/abc.png",
          phones: [
            {
              ph_no: "+911234567890",
              type: "PRIMARY",
            },
            {
              ph_no: "+913216549870",
              type: "SECONDARY",
            },
            {
              ph_no: "+911236547890",
              type: "OFFICE",
            },
            {
              ph_no: "+917412589630",
              type: "HOME",
            },
          ],
        },
      },
      Phone: {
        title: "Phone",
        required: ["ph_no", "type"],
        type: "object",
        properties: {
          ph_no: {
            type: "string",
          },
          type: {
            type: "string",
          },
        },
        example: {
          ph_no: "+911234567890",
          type: "PRIMARY",
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
      AddEventstatusjsonRequest: {
        title: "AddEventstatusjsonRequest",
        required: ["status", "applicable_types", "priority"],
        type: "object",
        properties: {
          status: {
            type: "string",
          },
          applicable_types: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
          priority: {
            type: "integer",
            format: "int32",
          },
        },
        example: {
          status: "Do not Disturb",
          applicable_types: [
            "618fb8e614842f8284d028dd",
            "618fb99bc8ba53856cbf0459",
          ],
          priority: 0,
        },
      },
      updateEventDetailsjsonRequest: {
        title: "updateEventDetailsjsonRequest",
        required: ["status", "applicable_types", "priority"],
        type: "object",
        properties: {
          status: {
            type: "string",
          },
          applicable_types: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
          priority: {
            type: "integer",
            format: "int32",
          },
        },
        example: {
          status: "Do not Disturb",
          applicable_types: [
            "618fb8e614842f8284d028dd",
            "618fb99bc8ba53856cbf0459",
          ],
          priority: 0,
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
          "userStatus",
          "userSubStatus",
          "Excluded_dates",
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
          userStatus: {
            type: "string",
          },
          userSubStatus: {
            type: "string",
          },
          Excluded_dates: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
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
          userStatus: "61670b887a7764f6a360db28",
          userSubStatus: "6167128a37ecb90f33f6f924",
          Excluded_dates: ["11/12/2021", "20/12/2021"],
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
          "userStatus",
          "userSubStatus",
          "Excluded_dates",
          "status",
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
          userStatus: {
            type: "string",
          },
          userSubStatus: {
            type: "string",
          },
          Excluded_dates: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
          status: {
            type: "boolean",
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
          userStatus: "61670b887a7764f6a360db28",
          userSubStatus: "6167128a37ecb90f33f6f924",
          Excluded_dates: ["11/12/2021", "20/12/2021"],
          status: true,
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
          customId: 135,
          custom_name: "abc",
          start_date: "10/08/2021 10:00 AM",
          end_date: "10/20/2021 10:00 AM",
          is_allday_status: true,
          is_repeat: true,
          RRULE: "is_repeat",
          time_zone: "IN/PST etc..",
          status: "61670b887a7764f6a360db28",
          sub_status: null,
          notes: {
            is_custom: true,
            text: "text for sending sms",
          },
          display_to: "ALL",
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
              is_deleted: false,
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
              is_deleted: false,
            },
            {
              customId: 1588,
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
              is_deleted: false,
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
          is_deleted: false,
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
      contactupdaterequest: {
        title: "contactupdaterequest",
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
      Phone1: {
        title: "Phone1",
        required: ["ph_no", "type"],
        type: "object",
        properties: {
          wisecallerId: {
            type: "string",
            nullable: true,
          },
          _id: {
            type: "string",
          },
          ph_no: {
            type: "string",
          },
          type: {
            type: "string",
          },
        },
        example: {
          wisecallerId: "618f6146385c780009f97e21",
          _id: "618fa6ae2ac1e05fd9709d97",
          ph_no: "+911234567890",
          type: "PRIMARY",
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
  tags: [],
};