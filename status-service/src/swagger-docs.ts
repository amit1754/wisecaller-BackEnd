export default {
  openapi: "3.0.0",
  info: {
    title: "Wiseccaller update collection",
    contact: {},
    version: "1.0",
  },
  servers: [
    {
      url: "http://example.com",
      variables: {},
    },
  ],
  paths: {
    "/auth-service/api/v1/auth/login": {
      post: {
        tags: ["Auth service"],
        summary: "Login user",
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
                mobileNo: "+918849455045",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Loginuser",
                },
                example: {
                  success: true,
                  message: "message send successful",
                  otp: 1773,
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/auth-service/api/v1/auth/verify-otp": {
      post: {
        tags: ["Auth service"],
        summary: "Verify with otp",
        operationId: "Verifywithotp",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/VerifywithotpRequest",
              },
              example: {
                mobileNo: "+918980514085",
                otp: 2196,
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Verifywithotp",
                },
                example: {
                  success: true,
                  data: {
                    token:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWE0NjQ0YjVlZmE4YzZkMWM1YTBjYTEiLCJpYXQiOjE2MzgyNzk0NzksImV4cCI6MTY2OTgzNzA3OX0.QH9ZFFU8lbB4ktq12jDzWIaxug7SRfBt61NWzgYBzoM",
                    refreshToken:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWE0NjQ0YjVlZmE4YzZkMWM1YTBjYTEiLCJpYXQiOjE2MzgyNzk0NzksImV4cCI6MTYzODI4MTg3OX0.zY-ROOdHITXn-y9--2-32E7Lq80zC4QczFnaUILyFRU",
                    token_expires_at: "2022-11-30T19:37:59.000Z",
                    is_new_user: false,
                  },
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/auth-service/api/v1/user/get-profile": {
      get: {
        tags: ["Auth service"],
        summary: "Get user profile",
        operationId: "Getuserprofile",
        parameters: [],
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m200",
                },
                example: {
                  success: true,
                  message: "User Profile details get successfully",
                  data: {
                    modes: {
                      workLifeBalance: {
                        is_active: false,
                        data: null,
                      },
                      roadSafety: {
                        is_active: false,
                        devices: null,
                        data: null,
                      },
                      syncCalender: {
                        calenders: [
                          {
                            id: "tesr@gmail.com",
                            synced: true,
                          },
                        ],
                        prioritize_calender_events: false,
                        status: {
                          user: null,
                          applicable_types: [
                            "61a190fb88e2950009a58a6a",
                            "61a190cd88e2950009a58a64",
                            "61a190e988e2950009a58a67",
                          ],
                          isDeleted: false,
                          _id: "61a194a2d87d6100088f7a3f",
                          status: "Busy",
                          priority: 0,
                          icon_style: "RED_CROSS",
                          createdAt: "2021-11-27T02:14:58.570Z",
                          updatedAt: "2021-11-27T02:14:58.570Z",
                          __v: 0,
                          subStatus: {
                            user: null,
                            isDeleted: false,
                            _id: "61a196e4d87d6100088f7a5a",
                            status: "In a meeting",
                            parentId: "61a194a2d87d6100088f7a3f",
                            icon_style: "RED_CROSS",
                            createdAt: "2021-11-27T02:24:36.782Z",
                            updatedAt: "2021-11-27T02:24:36.782Z",
                            __v: 0,
                          },
                        },
                      },
                    },
                    first_name: null,
                    last_name: null,
                    phone: "+918849455045",
                    secondary_no: null,
                    profile_image: null,
                    is_profile_from_social_media: "false",
                    media_profile_url: null,
                    email: null,
                    role: "USER",
                    devices: null,
                    is_new_user: true,
                    isActive: true,
                    isDeleted: false,
                    _id: "61a9fb1c1fc95eada4d185a7",
                    phones: [
                      {
                        used_for_login: true,
                        _id: "61a9fb1c1fc95eada4d185a8",
                        no: "+918849455045",
                        type: "PRIMARY",
                      },
                    ],
                    createdAt: "2021-12-03T11:10:20.896Z",
                    updatedAt: "2021-12-03T11:32:55.026Z",
                    __v: 0,
                  },
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/auth-service/api/v1/user/update-profile": {
      put: {
        tags: ["Auth service"],
        summary: "update user profile",
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
                  "media_profile_url",
                ],
                type: "object",
                properties: {
                  first_name: {
                    type: "string",
                    example: "firstName",
                  },
                  last_name: {
                    type: "string",
                    example: "lastName",
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
                  media_profile_url: {
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
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  message: "user update successfully",
                  data: [],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/auth-service/api/v1/user/update-user-status": {
      put: {
        tags: ["Auth service"],
        summary: "update user status",
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
                customStatusId: "3_paul",
                statusId: "",
                subStatusId: "",
                notes: {
                  id: "",
                  is_custom: true,
                  text: "adsad",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2003",
                },
                example: {
                  success: true,
                  data: {
                    modes: {
                      workLifeBalance: {
                        is_active: false,
                        data: null,
                      },
                      roadSafetyStatus: {
                        is_active: false,
                        devices: null,
                        data: null,
                      },
                      syncCalender: {
                        calenders: null,
                        priooritize_calender_events: false,
                      },
                    },
                    first_name: "tushar",
                    last_name: "savaliya",
                    phone: "+918849455045",
                    secondary_no: "+918980514085",
                    profile_image: null,
                    is_profile_from_social_media: "false",
                    media_profile_url: "",
                    role: "ADMIN",
                    devices: null,
                    isActive: true,
                    isDeleted: false,
                    _id: "6194fe948f13a1d59d11df22",
                    phones: [
                      {
                        used_for_login: true,
                        _id: "6194fe948f13a1d59d11df23",
                        no: "+918849455045",
                        type: "PRIMARY",
                      },
                      {
                        used_for_login: false,
                        _id: "61961587c65f230009c3a4e2",
                        no: "+918980514085",
                        type: "SECONDARY",
                      },
                    ],
                    createdAt: "2021-11-17T13:07:32.717Z",
                    updatedAt: "2021-11-18T09:01:19.402Z",
                    __v: 0,
                    user_status: {
                      name: "abc",
                      status: {
                        sub_status: {
                          user: null,
                          isDeleted: false,
                          _id: "6195023525c96ee17567830d",
                          status: "DND2",
                          parentId: "6195004219517edbb9a32dde",
                          logo: "status_images/1637155378453.png",
                          createdAt: "2021-11-17T13:23:01.173Z",
                          updatedAt: "2021-11-17T13:23:01.173Z",
                          __v: 0,
                        },
                        _id: "6195004219517edbb9a32dde",
                        user: null,
                        applicable_types: [
                          "618fb8e614842f8284d028dd",
                          "618fb99bc8ba53856cbf0459",
                        ],
                        isDeleted: false,
                        status: "Do not Disturb",
                        priority: 0,
                        logo: "status_images/1637155090761.png",
                        createdAt: "2021-11-17T13:14:42.642Z",
                        updatedAt: "2021-11-17T13:19:10.157Z",
                        __v: 0,
                      },
                    },
                  },
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/auth-service/api/v1/contact-us": {
      post: {
        tags: ["Auth service"],
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
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  message: "success",
                  data: [],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/auth-service/api/v1/contact-us/get": {
      get: {
        tags: ["Auth service"],
        summary: "get contact us details",
        operationId: "getcontactusdetails",
        parameters: [],
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2005",
                },
                example: {
                  success: true,
                  data: [
                    {
                      _id: "6196171ec65f230009c3a4ec",
                      email: "savaliyatushar2197@gmail.com",
                      Message: "systme is not working",
                      createdAt: "2021-11-18T09:04:30.813Z",
                      updatedAt: "2021-11-18T09:04:30.813Z",
                      __v: 0,
                    },
                  ],
                  message: "contactUs details get sucess fully",
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/auth-service/api/v1/auth/resend-otp": {
      post: {
        tags: ["Auth service"],
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
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2006",
                },
                example: {
                  success: true,
                  message: "message send successful",
                  otp: 2059,
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/auth-service/api/v1/road-safety": {
      post: {
        tags: ["Auth service"],
        summary: "Update Road Safety",
        operationId: "UpdateRoadSafety",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UpdateRoadSafetyRequest",
              },
              example: {
                devices: ["JBL Enduarance", "Boat Rokerz"],
                selected_device: "Boat Rokerz",
                display_to: "contacts",
                auto_sms: false,
                notes: {
                  note_id: "",
                  is_custom: true,
                  text: "Not available",
                },
                is_active: true,
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2007",
                },
                example: {
                  success: true,
                  message: "Roadsafety updated successfully",
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/auth-service/api/v1/auth/refresh-token": {
      post: {
        tags: ["Auth service"],
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
                refreshToken:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk0ZmU5NDhmMTNhMWQ1OWQxMWRmMjIiLCJpYXQiOjE2MzgxOTEzNTksImV4cCI6MTYzODE5Mzc1OX0.kNt0ScvUeFry-FcvlZ9PJmDcYWo4f3jNa3jxzhjISaQ",
              },
            },
          },
          required: true,
        },
        responses: {
          default: {
            description: "",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2008",
                },
                example: {
                  success: true,
                  message: "token refresh sucessfully",
                  token:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk3ZTE2OGU3MTJhNWQyMDI3ZTkwYzEiLCJpYXQiOjE2Mzc4Mzk5MTksImV4cCI6MTYzNzg0NDkxOX0.ly5zRRfxeIaUAzRYKSMyK0VAW-10fSSLUfAIzEyDNzA",
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/auth-service/api/v1/user/search": {
      post: {
        tags: ["Auth service"],
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
                phone_number: "89805140",
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
    "/auth-service/api/v1/calendar-sync": {
      post: {
        tags: ["Auth service"],
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
                calenders: [
                  {
                    id: "tesr@gmail.com",
                    synced: true,
                  },
                ],
                prioritize_calendar_events: false,
                status: "61a194a2d87d6100088f7a3f",
                subStatus: "61a196e4d87d6100088f7a5a",
              },
            },
          },
          required: true,
        },
        responses: {
          default: {
            description: "",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Calendarsync",
                },
                example: {
                  success: true,
                  message: "Sucess",
                  data: [],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/call-service/api/v1/callhistory/add": {
      post: {
        tags: ["Call History"],
        summary: "Add call History",
        operationId: "AddcallHistory",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/AddcallHistoryRequest",
                },
                description: "",
                example: [
                  {
                    call_history_id: "1",
                    phone: "+919714209234",
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
                    is_deleted: false,
                  },
                  {
                    call_history_id: "2",
                    is_deleted: false,
                    phone: "+919496955716",
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
                    call_history_id: "3",
                    is_deleted: false,
                    phone: "+918989898989",
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
                  call_history_id: "1",
                  phone: "+919714209234",
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
                  is_deleted: false,
                },
                {
                  call_history_id: "2",
                  is_deleted: false,
                  phone: "+919496955716",
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
                  call_history_id: "3",
                  is_deleted: false,
                  phone: "+918989898989",
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
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  message: "Sucess",
                  data: [],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/call-service/api/v1/callhistory/get": {
      get: {
        tags: ["Call History"],
        summary: "call history",
        operationId: "callhistory",
        parameters: [],
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m20010",
                },
                example: {
                  success: true,
                  message: "Sucess",
                  data: [
                    {
                      _id: "2021-11-13",
                      list: [
                        {
                          _id: "61a0cf9af01b8beeb2c047e5",
                          caller_history_id: "1",
                          __v: 0,
                          callHistory: [
                            {
                              simId: "sim1",
                              _id: "61a0cf9ad51a91a14d8a8749",
                              time: "2021-12-12T05:30:00.000Z",
                              type: "Incoming",
                            },
                            {
                              simId: "sim2",
                              _id: "61a0cf9ad51a91a14d8a874a",
                              time: "2021-12-12T05:30:00.000Z",
                              type: "Outgoing",
                            },
                          ],
                          createdAt: "2021-11-26T12:14:18.312Z",
                          date: "2021-11-13T04:50:22.000Z",
                          is_deleted: false,
                          name: "abc",
                          phone: "+919714209234",
                          updatedAt: "2021-11-26T12:14:18.312Z",
                          user: "6195f3e40ba05e4c53063e94",
                        },
                      ],
                    },
                    {
                      _id: "2021-11-14",
                      list: [
                        {
                          _id: "61a0cf9bf01b8beeb2c047e8",
                          caller_history_id: "2",
                          __v: 0,
                          callHistory: [
                            {
                              simId: "sim1",
                              _id: "61a0cf9ad51a91a14d8a874d",
                              time: "2021-12-12T05:30:00.000Z",
                              type: "Incoming",
                            },
                            {
                              simId: "sim2",
                              _id: "61a0cf9ad51a91a14d8a874e",
                              time: "2021-12-12T05:30:00.000Z",
                              type: "Outgoing",
                            },
                          ],
                          createdAt: "2021-11-26T12:14:18.950Z",
                          date: "2021-11-14T04:50:22.000Z",
                          is_deleted: false,
                          name: "abcs",
                          phone: "+919496955716",
                          updatedAt: "2021-11-26T12:14:18.950Z",
                          user: "6195f3e40ba05e4c53063e94",
                        },
                        {
                          _id: "61a0cf9bf01b8beeb2c047ec",
                          caller_history_id: "3",
                          __v: 0,
                          callHistory: [
                            {
                              simId: "sim1",
                              _id: "61a0cf9bd51a91a14d8a8751",
                              time: "2021-12-12T05:30:00.000Z",
                              type: "Incoming",
                            },
                            {
                              simId: "sim2",
                              _id: "61a0cf9bd51a91a14d8a8752",
                              time: "2021-12-12T05:30:00.000Z",
                              type: "Outgoing",
                            },
                          ],
                          createdAt: "2021-11-26T12:14:19.592Z",
                          date: "2021-11-14T04:50:22.000Z",
                          is_deleted: false,
                          name: "abcs",
                          phone: "+918989898989",
                          updatedAt: "2021-11-26T12:14:19.592Z",
                          user: "6195f3e40ba05e4c53063e94",
                        },
                      ],
                    },
                  ],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/call-service/api/v1/callhistory/add-number": {
      post: {
        tags: ["Call History"],
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
                date_time: "2021-12-12 11:00:00",
                type: "Incoming",
                simId: "sim2",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m20011",
                },
                example: {
                  success: true,
                  message: "success",
                  callLogs: {
                    phone: "+919099909990",
                    name: "abcs",
                    time: "2021-12-12 11:00:00",
                    type: "Incoming",
                    simId: "sim2",
                    date: "2021-12-12 11:00:00",
                    callHistory: {
                      time: "2021-12-12 11:00:00",
                      type: "Incoming",
                      simId: "sim2",
                    },
                    callerId: "6194fe948f13a1d59d11df22",
                    wisecallerId: "6194fe948f13a1d59d11df22",
                  },
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/call-service/api/v1/callhistory/delete/619f396c314ed17773fb2b9e": {
      delete: {
        tags: ["Call History"],
        summary: "delete records from call history",
        operationId: "deleterecordsfromcallhistory",
        parameters: [],
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  message: "success",
                  data: [],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/call-service/api/v1/callhistory/sync-history": {
      post: {
        tags: ["Call History"],
        summary: "Sync Call History",
        operationId: "SyncCallHistory",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/SyncCallHistoryRequest",
                },
                description: "",
                example: [
                  {
                    call_history_id: "jignesh_122",
                    name: "Nithin Paul",
                  },
                ],
              },
              example: [
                {
                  call_history_id: "jignesh_122",
                  name: "Nithin Paul",
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
    "/call-service/api/v1/callhistory/get-history": {
      get: {
        tags: ["Call History"],
        summary: "Get Call History",
        operationId: "GetCallHistory",
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
    "/contact-sync-service/api/v1/contact/sync": {
      post: {
        tags: ["Contact sync"],
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
                    contactId: "jignesh_122",
                    first_name: "Nithin",
                    last_name: "Paul-1",
                    profile_image: null,
                    local_profile_image_path: "contacts/abc.png",
                    phones: [
                      {
                        ph_no: "+919633178118",
                        type: "PRIMARY",
                      },
                      {
                        ph_no: "+919633178119",
                        type: "SECONDARY",
                      },
                    ],
                    is_deleted: false,
                  },
                ],
              },
              example: [
                {
                  contactId: "jignesh_122",
                  first_name: "Nithin",
                  last_name: "Paul-1",
                  profile_image: null,
                  local_profile_image_path: "contacts/abc.png",
                  phones: [
                    {
                      ph_no: "+919633178118",
                      type: "PRIMARY",
                    },
                    {
                      ph_no: "+919633178119",
                      type: "SECONDARY",
                    },
                  ],
                  is_deleted: false,
                },
              ],
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  message: "contact sync successfully",
                  data: [],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/contact-sync-service/api/v1/contact/get": {
      get: {
        tags: ["Contact sync"],
        summary: "Get synced Contact",
        operationId: "GetsyncedContact",
        parameters: [],
        responses: {
          "200": {
            description: "",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m20014",
                },
                example: {
                  success: true,
                  message: "contact list get successfully",
                  data: [
                    {
                      profile_image: null,
                      local_profile_image_path: "contacts/abc.png",
                      is_blocked: false,
                      is_favourite: false,
                      is_deleted: false,
                      _id: "61a5e747f01b8beeb2c11f3d",
                      contactId: 152,
                      user: {
                        modes: {
                          workLifeBalance: {
                            is_active: false,
                            data: null,
                          },
                          roadSafety: {
                            is_active: false,
                            devices: null,
                            data: null,
                          },
                          syncCalender: {
                            calenders: null,
                            prioritize_calender_events: false,
                          },
                        },
                        first_name: "tushar",
                        last_name: "savaliya",
                        phone: "+918980514085",
                        secondary_no: null,
                        profile_image:
                          "https://wisecaller-images.s3.us-east-1.amazonaws.com/profile_images/1638164210938.jpeg",
                        is_profile_from_social_media: "true",
                        media_profile_url: null,
                        email: "savaliyatushar2197@gmail.com",
                        role: "USER",
                        devices: null,
                        is_new_user: false,
                        isActive: true,
                        isDeleted: false,
                        _id: "61a4644b5efa8c6d1c5a0ca1",
                        phones: [
                          {
                            used_for_login: true,
                            _id: "61a4644b5efa8c6d1c5a0ca2",
                            no: "+918980514085",
                            type: "PRIMARY",
                          },
                        ],
                        createdAt: "2021-11-29T05:25:31.494Z",
                        updatedAt: "2021-11-30T08:55:26.917Z",
                        __v: 0,
                      },
                      __v: 0,
                      createdAt: "2021-11-30T08:56:39.029Z",
                      first_name: "jignesh80",
                      last_name: "jignesh80",
                      phones: [
                        {
                          _id: "61a5e7470703eda959d4a9ef",
                          ph_no: "+919496782117",
                          type: "PRIMARY",
                        },
                        {
                          _id: "61a5e7470703eda959d4a9f0",
                          ph_no: "+919568732410",
                          type: "SECONDARY",
                        },
                      ],
                      updatedAt: "2021-11-30T08:56:39.029Z",
                    },
                  ],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/contact-sync-service/api/v1/contact/update": {
      put: {
        tags: ["Contact sync"],
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
                    contactId: "jignesh_122",
                    first_name: "User Update",
                    is_deleted: false,
                  },
                ],
              },
              example: [
                {
                  contactId: "jignesh_122",
                  first_name: "User Update",
                  is_deleted: false,
                },
              ],
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  message: "contact update successfully",
                  data: [],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/contact-sync-service/api/v1/contact/search": {
      post: {
        tags: ["Contact sync"],
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
                phone_number: "+919633178119",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m20016",
                },
                example: {
                  success: true,
                  message: "data get successful",
                  data: [
                    {
                      profile_image: null,
                      local_profile_image_path: "contacts/abc.png",
                      is_deleted: false,
                      _id: "619f59b65afc378e7c7aa615",
                      contactId: 152,
                      first_name: "jignesh",
                      last_name: "jignesh",
                      phones: [
                        {
                          _id: "619f612b86750c993ef9f8f0",
                          ph_no: "+919854671230",
                          type: "PRIMARY",
                        },
                        {
                          _id: "619f612b86750c993ef9f8f1",
                          ph_no: "+912567894130",
                          type: "SECONDARY",
                        },
                        {
                          _id: "619f612b86750c993ef9f8f2",
                          ph_no: "+919568732410",
                          type: "OFFICE",
                        },
                        {
                          _id: "619f612b86750c993ef9f8f3",
                          ph_no: "+919496782117",
                          type: "HOME",
                        },
                      ],
                      user: "6195f3e40ba05e4c53063e94",
                      createdAt: "2021-11-25T09:39:02.197Z",
                      updatedAt: "2021-11-25T10:10:51.102Z",
                      __v: 0,
                    },
                  ],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/contact-sync-service/api/v1/contact/favorite-add": {
      post: {
        tags: ["Contact sync"],
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
                number: "+911237896540",
                is_favorite: false,
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  message: "Sucess",
                  data: [],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/contact-sync-service/api/v1/contact/block-add": {
      post: {
        tags: ["Contact sync"],
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
                number: "+911237896540",
                is_blocked: false,
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  message: "Sucess",
                  data: [],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/global-status/add": {
      post: {
        tags: ["Status"],
        summary: "Add Global status",
        operationId: "AddGlobalstatus",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AddGlobalstatusRequest",
              },
              example: {
                status: "Busylast",
                applicable_types: [
                  "618fb99bc8ba53856cbf0459",
                  "618fba343bc52886fb4f6b7d",
                  "618fba473bc52886fb4f6b83",
                  "619b27cc7a4897f6abd7338e",
                ],
                priority: 0,
                icon_style: "red_cross",
              },
            },
          },
          required: true,
        },
        responses: {
          default: {
            description: "",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  message: "User status added successfully",
                  data: [],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/event/add": {
      post: {
        tags: ["Status"],
        summary: "Add global status with image",
        operationId: "Addglobalstatuswithimage",
        parameters: [],
        requestBody: {
          content: {
            "application/x-www-form-urlencoded": {
              encoding: {},
              schema: {
                required: ["status", "logo", "icon_style"],
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "DND2",
                  },
                  logo: {
                    type: "string",
                  },
                  icon_style: {
                    type: "string",
                    example: "red_cross",
                  },
                },
              },
            },
          },
          required: false,
        },
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  message: "User status added successfully",
                  data: [],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/global-status/get": {
      get: {
        tags: ["Status"],
        summary: "Get All Event status",
        operationId: "GetAllEventstatus",
        parameters: [],
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m20021",
                },
                example: {
                  success: true,
                  message: "global status get successfully",
                  data: [
                    {
                      _id: "61a0ad14d77a5b6e37d8917d",
                      user: null,
                      applicable_types: [
                        "618fb99bc8ba53856cbf0459",
                        "618fba343bc52886fb4f6b7d",
                        "618fba473bc52886fb4f6b83",
                        "619b27cc7a4897f6abd7338e",
                      ],
                      isDeleted: false,
                      status: "Busylast",
                      priority: 0,
                      icon_style: "red_cross",
                      logo: null,
                      createdAt: "2021-11-26T09:47:00.175Z",
                      updatedAt: "2021-11-26T09:47:00.175Z",
                      __v: 0,
                      subCategory: [
                        {
                          _id: "61a0ad48d77a5b6e37d89182",
                          user: null,
                          isDeleted: false,
                          status: "DND2",
                          parentId: "61a0ad14d77a5b6e37d8917d",
                          icon_style: "green_cross",
                          logo: null,
                          createdAt: "2021-11-26T09:47:52.368Z",
                          updatedAt: "2021-11-26T09:47:52.368Z",
                          __v: 0,
                        },
                      ],
                      applicableType: [
                        {
                          _id: "618fb99bc8ba53856cbf0459",
                          type: "ROAD_SAFETY",
                          order: 1,
                          createdAt: "2021-11-13T13:11:55.724Z",
                          updatedAt: "2021-11-13T13:11:55.724Z",
                          __v: 0,
                        },
                        {
                          _id: "618fba343bc52886fb4f6b7d",
                          type: "CALENDAR_EVENTS",
                          order: 3,
                          createdAt: "2021-11-13T13:14:28.133Z",
                          updatedAt: "2021-11-13T13:14:28.133Z",
                          __v: 0,
                        },
                        {
                          _id: "618fba473bc52886fb4f6b83",
                          type: "WORK_LIFE_MODE",
                          order: 5,
                          createdAt: "2021-11-13T13:14:47.554Z",
                          updatedAt: "2021-11-13T13:14:47.554Z",
                          __v: 0,
                        },
                        {
                          _id: "619b27cc7a4897f6abd7338e",
                          type: "GENERAL",
                          order: 7,
                          createdAt: "2021-11-22T05:17:00.339Z",
                          updatedAt: "2021-11-22T05:17:00.339Z",
                          __v: 0,
                        },
                      ],
                    },
                  ],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/global-status/update/6195004219517edbb9a32dde": {
      put: {
        tags: ["Status"],
        summary: "update Global status using id",
        operationId: "updateGlobalstatususingid",
        parameters: [],
        requestBody: {
          content: {
            "application/x-www-form-urlencoded": {
              encoding: {},
              schema: {
                required: ["status", "logo", "icon_style"],
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "DND",
                  },
                  logo: {
                    type: "string",
                  },
                  icon_style: {
                    type: "string",
                    example: "red_cross",
                  },
                },
              },
            },
          },
          required: false,
        },
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m20022",
                },
                example: {
                  success: true,
                  message: "global Status update successfully",
                  data: {
                    user: null,
                    applicable_types: [
                      "618fb8e614842f8284d028dd",
                      "618fb99bc8ba53856cbf0459",
                    ],
                    isDeleted: false,
                    _id: "6195004219517edbb9a32dde",
                    status: "DND",
                    priority: 0,
                    logo: "status_images/1637230992831.png",
                    createdAt: "2021-11-17T13:14:42.642Z",
                    updatedAt: "2021-11-18T10:23:13.150Z",
                    __v: 0,
                  },
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/global-status/delete/61961de00d7a2900096955af": {
      delete: {
        tags: ["Status"],
        summary: "Delete global status",
        operationId: "Deleteglobalstatus",
        parameters: [],
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m20024",
                },
                example: {
                  success: true,
                  message: "Global Status delete sucessfully",
                  data: {
                    user: null,
                    applicable_types: [
                      "618fb8e614842f8284d028dd",
                      "618fb99bc8ba53856cbf0459",
                    ],
                    isDeleted: false,
                    _id: "61961de00d7a2900096955af",
                    status: "Do not Disturb1",
                    priority: 0,
                    logo: null,
                    createdAt: "2021-11-18T09:33:20.153Z",
                    updatedAt: "2021-11-18T09:33:20.153Z",
                    __v: 0,
                  },
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/global-status/add-sub": {
      post: {
        tags: ["Status"],
        summary: "Add sub status into Global status",
        operationId: "AddsubstatusintoGlobalstatus",
        parameters: [],
        requestBody: {
          content: {
            "application/x-www-form-urlencoded": {
              encoding: {},
              schema: {
                required: ["status", "parentId", "logo", "icon_style"],
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "DND2",
                  },
                  parentId: {
                    type: "string",
                    example: "61a0ad14d77a5b6e37d8917d",
                  },
                  logo: {
                    type: "string",
                  },
                  icon_style: {
                    type: "string",
                    example: "green_cross",
                  },
                },
              },
            },
          },
          required: false,
        },
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  message: "global Sub-Status added sucessfully",
                  data: [],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/global-status/sub-update/6195023525c96ee17567830d":
      {
        put: {
          tags: ["Status"],
          summary: "update sub-status into Global status",
          operationId: "updatesub-statusintoGlobalstatus",
          parameters: [],
          requestBody: {
            content: {
              "application/x-www-form-urlencoded": {
                encoding: {},
                schema: {
                  required: ["status", "logo", "parentId", "icon_style"],
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
                      example: "6195004219517edbb9a32dde",
                    },
                    icon_style: {
                      type: "string",
                      example: "red_creoss",
                    },
                  },
                },
              },
            },
            required: false,
          },
          responses: {
            "200": {
              description: "OK",
              headers: {},
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/m20026",
                  },
                  example: {
                    success: true,
                    message: "global sub status update successfully",
                    data: {
                      user: null,
                      isDeleted: false,
                      _id: "6195023525c96ee17567830d",
                      status: "DND11111",
                      parentId: "6195004219517edbb9a32dde",
                      logo: "status_images/1637155378453.png",
                      createdAt: "2021-11-17T13:23:01.173Z",
                      updatedAt: "2021-11-18T10:31:02.505Z",
                      __v: 0,
                    },
                  },
                },
              },
            },
          },
          deprecated: false,
        },
      },
    "/status-service/api/v1/global-status/sub-delete/6195023525c96ee17567830d":
      {
        delete: {
          tags: ["Status"],
          summary: "Delete sub-status in Global status",
          operationId: "Deletesub-statusinGlobalstatus",
          parameters: [],
          responses: {
            "200": {
              description: "OK",
              headers: {},
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/m20027",
                  },
                  example: {
                    success: true,
                    message: "Global Status delete sucessfully",
                    data: null,
                  },
                },
              },
            },
          },
          deprecated: false,
        },
      },
    "/status-service/api/v1/notes/add": {
      post: {
        tags: ["Status"],
        summary: "New Notes",
        operationId: "NewNotes",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/NewNotesRequest",
              },
              example: {
                text: "I am driving, please call me later",
                display_to: "ALL",
                type: "ROAD SAFETY",
                auto_sms: false,
                is_admin: true,
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
    "/status-service/api/v1/notes": {
      get: {
        tags: ["Status"],
        summary: "Notes List With Filters",
        operationId: "NotesListWithFilters",
        parameters: [
          {
            name: "type",
            in: "query",
            description: "",
            required: true,
            style: "form",
            explode: true,
            schema: {
              type: "string",
              example: "ROAD SAFETY",
            },
          },
          {
            name: "is_admin",
            in: "query",
            description: "",
            required: true,
            style: "form",
            explode: true,
            schema: {
              type: "boolean",
              example: true,
            },
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m20028",
                },
                example: {
                  success: true,
                  data: [
                    {
                      auto_sms: false,
                      _id: "619e258c5be4d7298bc74696",
                      text: "I am driving, please call me later",
                      display_to: "ALL",
                      type: "ROAD SAFETY",
                      __v: 0,
                    },
                  ],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/notes/61963837b5a4e06136be00e1/details": {
      get: {
        tags: ["Status"],
        summary: "Notes Details",
        operationId: "NotesDetails",
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
    "/status-service/api/v1/notes/61963837b5a4e06136be00e1/update": {
      put: {
        tags: ["Status"],
        summary: "Notes Update",
        operationId: "NotesUpdate",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/NotesUpdateRequest",
              },
              example: {
                text: "I am driving, please call me later",
                display_to: "CONTACTS",
                type: "ROAD SAFETY",
                auto_sms: true,
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
    "/status-service/api/v1/notes/61963837b5a4e06136be00e1/remove": {
      delete: {
        tags: ["Status"],
        summary: "Notes Delete",
        operationId: "NotesDelete",
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
                type: "GENERAL",
                order: 7,
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  message: "gobal type added successfully",
                  data: [],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/global-type/update/61962c9494db150009cac095": {
      put: {
        tags: ["Global Type"],
        summary: "global type update",
        operationId: "globaltypeupdate",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/globaltypeupdaterequest",
              },
              example: {
                type: "ROAD_SAFETqY",
                order: 7,
              },
            },
          },
          required: true,
        },
        responses: {
          default: {
            description: "",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  message: "global Type update successfully",
                  data: [],
                },
              },
            },
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
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m20031",
                },
                example: {
                  success: true,
                  message: "global type get successful",
                  data: [
                    {
                      _id: "618fb99bc8ba53856cbf0459",
                      type: "ROAD_SAFETY",
                      order: 1,
                      createdAt: "2021-11-13T13:11:55.724Z",
                      updatedAt: "2021-11-13T13:11:55.724Z",
                      __v: 0,
                    },
                    {
                      _id: "618fb8e614842f8284d028dd",
                      type: "SUPER_EVENTS",
                      order: 2,
                      createdAt: "2021-11-13T13:08:54.457Z",
                      updatedAt: "2021-11-13T13:08:54.457Z",
                      __v: 0,
                    },
                    {
                      _id: "618fba343bc52886fb4f6b7d",
                      type: "CALENDAR_EVENTS",
                      order: 3,
                      createdAt: "2021-11-13T13:14:28.133Z",
                      updatedAt: "2021-11-13T13:14:28.133Z",
                      __v: 0,
                    },
                    {
                      _id: "618fba3d3bc52886fb4f6b80",
                      type: "CUSTOM_EVENTS",
                      order: 4,
                      createdAt: "2021-11-13T13:14:37.273Z",
                      updatedAt: "2021-11-13T13:14:37.273Z",
                      __v: 0,
                    },
                    {
                      _id: "618fba473bc52886fb4f6b83",
                      type: "WORK_LIFE_MODE",
                      order: 5,
                      createdAt: "2021-11-13T13:14:47.554Z",
                      updatedAt: "2021-11-13T13:14:47.554Z",
                      __v: 0,
                    },
                    {
                      _id: "618fc88c61e23400084ad415",
                      type: "AUTO_STATUS",
                      order: 6,
                      createdAt: "2021-11-13T14:15:40.380Z",
                      updatedAt: "2021-11-13T14:16:19.805Z",
                      __v: 0,
                    },
                    {
                      _id: "61962c9494db150009cac095",
                      type: "AUTO_STATUS1",
                      order: 7,
                      createdAt: "2021-11-18T10:36:04.715Z",
                      updatedAt: "2021-11-18T10:36:04.715Z",
                      __v: 0,
                    },
                  ],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/global-type/delete/618fb6f50619e07d4547c985": {
      delete: {
        tags: ["Global Type"],
        summary: "global type delete",
        operationId: "globaltypedelete",
        parameters: [],
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  message: "Global type deleted successfully",
                  data: [],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/custom-status/add": {
      post: {
        tags: ["Custom Status"],
        summary: "Custom Status add",
        operationId: "CustomStatusadd",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/CustomStatusaddRequest",
                },
                description: "",
                example: [
                  {
                    customId: 134,
                    custom_name: "abc",
                    start_date: "2021-11-14T18:30:00.000Z",
                    end_date: "2021-11-16T18:30:00.000Z",
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
                  {
                    customId: 135,
                    custom_name: "abc",
                    start_date: "2021-11-14T18:30:00.000Z",
                    end_date: "2021-11-16T18:30:00.000Z",
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
                  customId: 134,
                  custom_name: "abc",
                  start_date: "2021-11-14T18:30:00.000Z",
                  end_date: "2021-11-16T18:30:00.000Z",
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
                {
                  customId: 135,
                  custom_name: "abc",
                  start_date: "2021-11-14T18:30:00.000Z",
                  end_date: "2021-11-16T18:30:00.000Z",
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
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  message: "User status added successfully",
                  data: [],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/custom-status/update": {
      put: {
        tags: ["Custom Status"],
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
                    custom_name: "aaaabc",
                    start_date: "08/14/2021 10:00 AM",
                    end_date: "10/10/2021 10:00 AM",
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
                    custom_name: "stat148us2",
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
                    start_date: "2021-11-14T18:30:00.000Z",
                    end_date: "2021-11-16T18:30:00.000Z",
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
                  Excluded_dates: [
                    "2021-11-16T00:00:00.000Z",
                    "2021-11-16T00:00:00.000Z",
                  ],
                },
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  message: "User status update successfully",
                  data: [],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/custom-status/get": {
      get: {
        tags: ["Custom Status"],
        summary: "Custom Status Get",
        operationId: "CustomStatusGet",
        parameters: [
          {
            name: "timestamp",
            in: "query",
            description: "",
            required: true,
            style: "form",
            explode: true,
            schema: {
              type: "string",
              example: "2021-08-15",
            },
          },
        ],
        responses: {
          default: {
            description: "",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m20035",
                },
                example: {
                  sucess: true,
                  message: "getdata successfully",
                  data: {
                    status: [
                      {
                        _id: "61950368448ab7e5f7775ce0",
                        notes: {
                          noteId: null,
                          is_custom: "true",
                          text: "text for sending sms",
                        },
                        is_allday_status: true,
                        status: "61670b887a7764f6a360db28",
                        substatus: null,
                        user: "6194fe948f13a1d59d11df22",
                        display_to: "ALL",
                        auto_sms: true,
                        is_enabled: true,
                        is_deleted: false,
                        customId: 135,
                        custom_name: "abc",
                        start_date: "2021-10-08T04:30:00.000Z",
                        end_date: "2021-10-20T04:30:00.000Z",
                        RRULE: "is_repeat",
                        time_zone: "IN/PST etc..",
                        createdAt: "2021-11-17T13:28:08.571Z",
                        updatedAt: "2021-11-17T13:28:08.571Z",
                        __v: 0,
                      },
                      {
                        _id: "61962fb4403857000969c198",
                        notes: {
                          noteId: null,
                          is_custom: "true",
                          text: "text for sending sms",
                        },
                        is_allday_status: true,
                        status: "61670b887a7764f6a360db28",
                        substatus: null,
                        user: "6194fe948f13a1d59d11df22",
                        display_to: "ALL",
                        auto_sms: true,
                        is_enabled: true,
                        is_deleted: false,
                        customId: 134,
                        custom_name: "abc",
                        start_date: "2021-10-08T10:00:00.000Z",
                        end_date: "2021-10-20T10:00:00.000Z",
                        RRULE: "is_repeat",
                        time_zone: "IN/PST etc..",
                        createdAt: "2021-11-18T10:49:24.745Z",
                        updatedAt: "2021-11-18T10:49:24.745Z",
                        __v: 0,
                      },
                    ],
                    worklife: {
                      Excluded_dates: ["11/12/2021", "20/12/2021"],
                    },
                  },
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/status-service/api/v1/custom-status/delete/61962fb4403857000969c198": {
      delete: {
        tags: ["Custom Status"],
        summary: "Custom status delete",
        operationId: "Customstatusdelete",
        parameters: [],
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  message: "User status deleted successfully",
                  data: [],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/work-hrs-service/api/v1/work-life/add": {
      post: {
        tags: ["worklife Balance"],
        summary: "Add Work-life Balance",
        operationId: "AddWork-lifeBalance",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AddWork-lifeBalanceRequest",
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
                userStatus: "61a194a2d87d6100088f7a3f",
                userSubStatus: "61a196d7d87d6100088f7a57",
                Excluded_dates: ["11/12/2021", "20/12/2021"],
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/AddWork-lifeBalance",
                },
                example: {
                  success: true,
                  message: "workingdays Added successfully",
                  data: [],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/work-hrs-service/api/v1/work-life/update/{id}": {
      put: {
        tags: ["worklife Balance"],
        summary: "Update Work-life Balance",
        operationId: "UpdateWork-lifeBalance",
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
                $ref: "#/components/schemas/UpdateWork-lifeBalanceRequest",
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
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  message: "workingdays update successfully",
                  data: [],
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/work-hrs-service/api/v1/work-life/get": {
      get: {
        tags: ["worklife Balance"],
        summary: "Get work-life Balance",
        operationId: "Getwork-lifeBalance",
        parameters: [],
        responses: {
          "200": {
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m20038",
                },
                example: {
                  success: true,
                  message: "workingdays get successfully",
                  data: {
                    _id: "61b042ecbc9b2e16bd8080f1",
                    Monday: false,
                    Tuesday: true,
                    Wednesday: true,
                    Thursday: true,
                    Friday: true,
                    Saturday: true,
                    userStatus: {
                      _id: "61a194a2d87d6100088f7a3f",
                      user: null,
                      applicable_types: [
                        "61a190fb88e2950009a58a6a",
                        "61a190cd88e2950009a58a64",
                        "61a190e988e2950009a58a67",
                      ],
                      isDeleted: false,
                      status: "Busy",
                      priority: 0,
                      icon_style: "RED_CROSS",
                      logo: null,
                      createdAt: "2021-11-27T02:14:58.570Z",
                      updatedAt: "2021-11-27T02:14:58.570Z",
                      __v: 0,
                    },
                    userSubStatus: {
                      _id: "61a196d7d87d6100088f7a57",
                      user: null,
                      isDeleted: false,
                      status: "Driving",
                      parentId: "61a194a2d87d6100088f7a3f",
                      icon_style: "RED_CROSS",
                      logo: null,
                      createdAt: "2021-11-27T02:24:23.595Z",
                      updatedAt: "2021-11-27T02:24:23.595Z",
                      __v: 0,
                    },
                    startTime: "09:00 AM",
                    endTime: "10:00 PM",
                    Excluded_dates: ["11/12/2021", "20/12/2021"],
                    user: "61ae248bcb07d10008f4ed84",
                    createdAt: "2021-12-08T05:30:20.266Z",
                    updatedAt: "2021-12-08T05:30:20.266Z",
                    __v: 0,
                  },
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/work-hrs-service/api/v1/work-life/delete/{id}": {
      delete: {
        tags: ["worklife Balance"],
        summary: "Delete work-life Balance",
        operationId: "Deletework-lifeBalance",
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
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  message: "workingdays delete successfully",
                  data: [],
                },
              },
            },
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
          mobileNo: "+918849455045",
        },
      },
      Loginuser: {
        title: "Loginuser",
        required: ["success", "message", "otp"],
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
          message: {
            type: "string",
          },
          otp: {
            type: "integer",
            format: "int32",
          },
        },
        example: {
          success: true,
          message: "message send successful",
          otp: 1773,
        },
      },
      VerifywithotpRequest: {
        title: "VerifywithotpRequest",
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
          otp: 2196,
        },
      },
      Verifywithotp: {
        title: "Verifywithotp",
        required: ["success", "data"],
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
          data: {
            $ref: "#/components/schemas/Data",
          },
        },
        example: {
          success: true,
          data: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWE0NjQ0YjVlZmE4YzZkMWM1YTBjYTEiLCJpYXQiOjE2MzgyNzk0NzksImV4cCI6MTY2OTgzNzA3OX0.QH9ZFFU8lbB4ktq12jDzWIaxug7SRfBt61NWzgYBzoM",
            refreshToken:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWE0NjQ0YjVlZmE4YzZkMWM1YTBjYTEiLCJpYXQiOjE2MzgyNzk0NzksImV4cCI6MTYzODI4MTg3OX0.zY-ROOdHITXn-y9--2-32E7Lq80zC4QczFnaUILyFRU",
            token_expires_at: "2022-11-30T19:37:59.000Z",
            is_new_user: false,
          },
        },
      },
      Data: {
        title: "Data",
        required: ["token", "refreshToken", "token_expires_at", "is_new_user"],
        type: "object",
        properties: {
          token: {
            type: "string",
          },
          refreshToken: {
            type: "string",
          },
          token_expires_at: {
            type: "string",
          },
          is_new_user: {
            type: "boolean",
          },
        },
        example: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWE0NjQ0YjVlZmE4YzZkMWM1YTBjYTEiLCJpYXQiOjE2MzgyNzk0NzksImV4cCI6MTY2OTgzNzA3OX0.QH9ZFFU8lbB4ktq12jDzWIaxug7SRfBt61NWzgYBzoM",
          refreshToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWE0NjQ0YjVlZmE4YzZkMWM1YTBjYTEiLCJpYXQiOjE2MzgyNzk0NzksImV4cCI6MTYzODI4MTg3OX0.zY-ROOdHITXn-y9--2-32E7Lq80zC4QczFnaUILyFRU",
          token_expires_at: "2022-11-30T19:37:59.000Z",
          is_new_user: false,
        },
      },
      m200: {
        title: "m200",
        required: ["success", "message", "data"],
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
          message: {
            type: "string",
          },
          data: {
            $ref: "#/components/schemas/Data1",
          },
        },
        example: {
          success: true,
          message: "User Profile details get successfully",
          data: {
            modes: {
              workLifeBalance: {
                is_active: false,
                data: null,
              },
              roadSafety: {
                is_active: false,
                devices: null,
                data: null,
              },
              syncCalender: {
                calenders: [
                  {
                    id: "tesr@gmail.com",
                    synced: true,
                  },
                ],
                prioritize_calender_events: false,
                status: {
                  user: null,
                  applicable_types: [
                    "61a190fb88e2950009a58a6a",
                    "61a190cd88e2950009a58a64",
                    "61a190e988e2950009a58a67",
                  ],
                  isDeleted: false,
                  _id: "61a194a2d87d6100088f7a3f",
                  status: "Busy",
                  priority: 0,
                  icon_style: "RED_CROSS",
                  createdAt: "2021-11-27T02:14:58.570Z",
                  updatedAt: "2021-11-27T02:14:58.570Z",
                  __v: 0,
                  subStatus: {
                    user: null,
                    isDeleted: false,
                    _id: "61a196e4d87d6100088f7a5a",
                    status: "In a meeting",
                    parentId: "61a194a2d87d6100088f7a3f",
                    icon_style: "RED_CROSS",
                    createdAt: "2021-11-27T02:24:36.782Z",
                    updatedAt: "2021-11-27T02:24:36.782Z",
                    __v: 0,
                  },
                },
              },
            },
            first_name: null,
            last_name: null,
            phone: "+918849455045",
            secondary_no: null,
            profile_image: null,
            is_profile_from_social_media: "false",
            media_profile_url: null,
            email: null,
            role: "USER",
            devices: null,
            is_new_user: true,
            isActive: true,
            isDeleted: false,
            _id: "61a9fb1c1fc95eada4d185a7",
            phones: [
              {
                used_for_login: true,
                _id: "61a9fb1c1fc95eada4d185a8",
                no: "+918849455045",
                type: "PRIMARY",
              },
            ],
            createdAt: "2021-12-03T11:10:20.896Z",
            updatedAt: "2021-12-03T11:32:55.026Z",
            __v: 0,
          },
        },
      },
      Data1: {
        title: "Data1",
        required: [
          "modes",
          "first_name",
          "last_name",
          "phone",
          "secondary_no",
          "profile_image",
          "is_profile_from_social_media",
          "media_profile_url",
          "email",
          "role",
          "devices",
          "is_new_user",
          "isActive",
          "isDeleted",
          "_id",
          "phones",
          "createdAt",
          "updatedAt",
          "__v",
        ],
        type: "object",
        properties: {
          modes: {
            $ref: "#/components/schemas/Modes",
          },
          first_name: {
            type: "string",
            nullable: true,
          },
          last_name: {
            type: "string",
            nullable: true,
          },
          phone: {
            type: "string",
          },
          secondary_no: {
            type: "string",
            nullable: true,
          },
          profile_image: {
            type: "string",
            nullable: true,
          },
          is_profile_from_social_media: {
            type: "string",
          },
          media_profile_url: {
            type: "string",
            nullable: true,
          },
          email: {
            type: "string",
            nullable: true,
          },
          role: {
            type: "string",
          },
          devices: {
            type: "string",
            nullable: true,
          },
          is_new_user: {
            type: "boolean",
          },
          isActive: {
            type: "boolean",
          },
          isDeleted: {
            type: "boolean",
          },
          _id: {
            type: "string",
          },
          phones: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Phone",
            },
            description: "",
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
          modes: {
            workLifeBalance: {
              is_active: false,
              data: null,
            },
            roadSafety: {
              is_active: false,
              devices: null,
              data: null,
            },
            syncCalender: {
              calenders: [
                {
                  id: "tesr@gmail.com",
                  synced: true,
                },
              ],
              prioritize_calender_events: false,
              status: {
                user: null,
                applicable_types: [
                  "61a190fb88e2950009a58a6a",
                  "61a190cd88e2950009a58a64",
                  "61a190e988e2950009a58a67",
                ],
                isDeleted: false,
                _id: "61a194a2d87d6100088f7a3f",
                status: "Busy",
                priority: 0,
                icon_style: "RED_CROSS",
                createdAt: "2021-11-27T02:14:58.570Z",
                updatedAt: "2021-11-27T02:14:58.570Z",
                __v: 0,
                subStatus: {
                  user: null,
                  isDeleted: false,
                  _id: "61a196e4d87d6100088f7a5a",
                  status: "In a meeting",
                  parentId: "61a194a2d87d6100088f7a3f",
                  icon_style: "RED_CROSS",
                  createdAt: "2021-11-27T02:24:36.782Z",
                  updatedAt: "2021-11-27T02:24:36.782Z",
                  __v: 0,
                },
              },
            },
          },
          first_name: null,
          last_name: null,
          phone: "+918849455045",
          secondary_no: null,
          profile_image: null,
          is_profile_from_social_media: "false",
          media_profile_url: null,
          email: null,
          role: "USER",
          devices: null,
          is_new_user: true,
          isActive: true,
          isDeleted: false,
          _id: "61a9fb1c1fc95eada4d185a7",
          phones: [
            {
              used_for_login: true,
              _id: "61a9fb1c1fc95eada4d185a8",
              no: "+918849455045",
              type: "PRIMARY",
            },
          ],
          createdAt: "2021-12-03T11:10:20.896Z",
          updatedAt: "2021-12-03T11:32:55.026Z",
          __v: 0,
        },
      },
      Modes: {
        title: "Modes",
        required: ["workLifeBalance", "roadSafety", "syncCalender"],
        type: "object",
        properties: {
          workLifeBalance: {
            $ref: "#/components/schemas/WorkLifeBalance",
          },
          roadSafety: {
            $ref: "#/components/schemas/RoadSafety",
          },
          syncCalender: {
            $ref: "#/components/schemas/SyncCalender",
          },
        },
        example: {
          workLifeBalance: {
            is_active: false,
            data: null,
          },
          roadSafety: {
            is_active: false,
            devices: null,
            data: null,
          },
          syncCalender: {
            calenders: [
              {
                id: "tesr@gmail.com",
                synced: true,
              },
            ],
            prioritize_calender_events: false,
            status: {
              user: null,
              applicable_types: [
                "61a190fb88e2950009a58a6a",
                "61a190cd88e2950009a58a64",
                "61a190e988e2950009a58a67",
              ],
              isDeleted: false,
              _id: "61a194a2d87d6100088f7a3f",
              status: "Busy",
              priority: 0,
              icon_style: "RED_CROSS",
              createdAt: "2021-11-27T02:14:58.570Z",
              updatedAt: "2021-11-27T02:14:58.570Z",
              __v: 0,
              subStatus: {
                user: null,
                isDeleted: false,
                _id: "61a196e4d87d6100088f7a5a",
                status: "In a meeting",
                parentId: "61a194a2d87d6100088f7a3f",
                icon_style: "RED_CROSS",
                createdAt: "2021-11-27T02:24:36.782Z",
                updatedAt: "2021-11-27T02:24:36.782Z",
                __v: 0,
              },
            },
          },
        },
      },
      WorkLifeBalance: {
        title: "WorkLifeBalance",
        required: ["is_active", "data"],
        type: "object",
        properties: {
          is_active: {
            type: "boolean",
          },
          data: {
            type: "string",
            nullable: true,
          },
        },
        example: {
          is_active: false,
          data: null,
        },
      },
      RoadSafety: {
        title: "RoadSafety",
        required: ["is_active", "devices", "data"],
        type: "object",
        properties: {
          is_active: {
            type: "boolean",
          },
          devices: {
            type: "string",
            nullable: true,
          },
          data: {
            type: "string",
            nullable: true,
          },
        },
        example: {
          is_active: false,
          devices: null,
          data: null,
        },
      },
      SyncCalender: {
        title: "SyncCalender",
        required: ["calenders", "prioritize_calender_events", "status"],
        type: "object",
        properties: {
          calenders: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Calender",
            },
            description: "",
          },
          prioritize_calender_events: {
            type: "boolean",
          },
          status: {
            $ref: "#/components/schemas/Status",
          },
        },
        example: {
          calenders: [
            {
              id: "tesr@gmail.com",
              synced: true,
            },
          ],
          prioritize_calender_events: false,
          status: {
            user: null,
            applicable_types: [
              "61a190fb88e2950009a58a6a",
              "61a190cd88e2950009a58a64",
              "61a190e988e2950009a58a67",
            ],
            isDeleted: false,
            _id: "61a194a2d87d6100088f7a3f",
            status: "Busy",
            priority: 0,
            icon_style: "RED_CROSS",
            createdAt: "2021-11-27T02:14:58.570Z",
            updatedAt: "2021-11-27T02:14:58.570Z",
            __v: 0,
            subStatus: {
              user: null,
              isDeleted: false,
              _id: "61a196e4d87d6100088f7a5a",
              status: "In a meeting",
              parentId: "61a194a2d87d6100088f7a3f",
              icon_style: "RED_CROSS",
              createdAt: "2021-11-27T02:24:36.782Z",
              updatedAt: "2021-11-27T02:24:36.782Z",
              __v: 0,
            },
          },
        },
      },
      Calender: {
        title: "Calender",
        required: ["id", "synced"],
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          synced: {
            type: "boolean",
          },
        },
        example: {
          id: "tesr@gmail.com",
          synced: true,
        },
      },
      Status: {
        title: "Status",
        required: [
          "user",
          "applicable_types",
          "isDeleted",
          "_id",
          "status",
          "priority",
          "icon_style",
          "createdAt",
          "updatedAt",
          "__v",
          "subStatus",
        ],
        type: "object",
        properties: {
          user: {
            type: "string",
            nullable: true,
          },
          applicable_types: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
          isDeleted: {
            type: "boolean",
          },
          _id: {
            type: "string",
          },
          status: {
            type: "string",
          },
          priority: {
            type: "integer",
            format: "int32",
          },
          icon_style: {
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
          subStatus: {
            $ref: "#/components/schemas/SubStatus",
          },
        },
        example: {
          user: null,
          applicable_types: [
            "61a190fb88e2950009a58a6a",
            "61a190cd88e2950009a58a64",
            "61a190e988e2950009a58a67",
          ],
          isDeleted: false,
          _id: "61a194a2d87d6100088f7a3f",
          status: "Busy",
          priority: 0,
          icon_style: "RED_CROSS",
          createdAt: "2021-11-27T02:14:58.570Z",
          updatedAt: "2021-11-27T02:14:58.570Z",
          __v: 0,
          subStatus: {
            user: null,
            isDeleted: false,
            _id: "61a196e4d87d6100088f7a5a",
            status: "In a meeting",
            parentId: "61a194a2d87d6100088f7a3f",
            icon_style: "RED_CROSS",
            createdAt: "2021-11-27T02:24:36.782Z",
            updatedAt: "2021-11-27T02:24:36.782Z",
            __v: 0,
          },
        },
      },
      SubStatus: {
        title: "SubStatus",
        required: [
          "user",
          "isDeleted",
          "_id",
          "status",
          "parentId",
          "icon_style",
          "createdAt",
          "updatedAt",
          "__v",
        ],
        type: "object",
        properties: {
          user: {
            type: "string",
            nullable: true,
          },
          isDeleted: {
            type: "boolean",
          },
          _id: {
            type: "string",
          },
          status: {
            type: "string",
          },
          parentId: {
            type: "string",
          },
          icon_style: {
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
          user: null,
          isDeleted: false,
          _id: "61a196e4d87d6100088f7a5a",
          status: "In a meeting",
          parentId: "61a194a2d87d6100088f7a3f",
          icon_style: "RED_CROSS",
          createdAt: "2021-11-27T02:24:36.782Z",
          updatedAt: "2021-11-27T02:24:36.782Z",
          __v: 0,
        },
      },
      Phone: {
        title: "Phone",
        required: ["used_for_login", "_id", "no", "type"],
        type: "object",
        properties: {
          used_for_login: {
            type: "boolean",
          },
          _id: {
            type: "string",
          },
          no: {
            type: "string",
          },
          type: {
            type: "string",
          },
        },
        example: {
          used_for_login: true,
          _id: "61a9fb1c1fc95eada4d185a8",
          no: "+918849455045",
          type: "PRIMARY",
        },
      },
      m2001: {
        title: "m2001",
        required: ["success", "message", "data"],
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
            description: "",
          },
        },
        example: {
          success: true,
          message: "user update successfully",
          data: [],
        },
      },
      updateuserprofilewithjsonrequest: {
        title: "updateuserprofilewithjsonrequest",
        required: [
          "first_name",
          "last_name",
          "is_profile_from_social_media",
          "phone",
          "secondary_no",
          "media_profile_url",
        ],
        type: "object",
        properties: {
          first_name: {
            type: "string",
          },
          last_name: {
            type: "string",
          },
          is_profile_from_social_media: {
            type: "boolean",
          },
          phone: {
            type: "string",
          },
          secondary_no: {
            type: "string",
          },
          media_profile_url: {
            type: "string",
          },
        },
        example: {
          first_name: "tushar",
          last_name: "savaliya",
          is_profile_from_social_media: false,
          phone: "+911234567890",
          secondary_no: "",
          media_profile_url: "",
        },
      },
      updateuserstatusrequest: {
        title: "updateuserstatusrequest",
        required: ["customStatusId", "statusId", "subStatusId", "notes"],
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
          notes: {
            $ref: "#/components/schemas/Notes",
          },
        },
        example: {
          customStatusId: "3_paul",
          statusId: "",
          subStatusId: "",
          notes: {
            id: "",
            is_custom: true,
            text: "adsad",
          },
        },
      },
      Notes: {
        title: "Notes",
        required: ["id", "is_custom", "text"],
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          is_custom: {
            type: "boolean",
          },
          text: {
            type: "string",
          },
        },
        example: {
          id: "",
          is_custom: true,
          text: "adsad",
        },
      },
      m2003: {
        title: "m2003",
        required: ["success", "data"],
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
          data: {
            $ref: "#/components/schemas/Data2",
          },
        },
        example: {
          success: true,
          data: {
            modes: {
              workLifeBalance: {
                is_active: false,
                data: null,
              },
              roadSafetyStatus: {
                is_active: false,
                devices: null,
                data: null,
              },
              syncCalender: {
                calenders: null,
                priooritize_calender_events: false,
              },
            },
            first_name: "tushar",
            last_name: "savaliya",
            phone: "+918849455045",
            secondary_no: "+918980514085",
            profile_image: null,
            is_profile_from_social_media: "false",
            media_profile_url: "",
            role: "ADMIN",
            devices: null,
            isActive: true,
            isDeleted: false,
            _id: "6194fe948f13a1d59d11df22",
            phones: [
              {
                used_for_login: true,
                _id: "6194fe948f13a1d59d11df23",
                no: "+918849455045",
                type: "PRIMARY",
              },
              {
                used_for_login: false,
                _id: "61961587c65f230009c3a4e2",
                no: "+918980514085",
                type: "SECONDARY",
              },
            ],
            createdAt: "2021-11-17T13:07:32.717Z",
            updatedAt: "2021-11-18T09:01:19.402Z",
            __v: 0,
            user_status: {
              name: "abc",
              status: {
                sub_status: {
                  user: null,
                  isDeleted: false,
                  _id: "6195023525c96ee17567830d",
                  status: "DND2",
                  parentId: "6195004219517edbb9a32dde",
                  logo: "status_images/1637155378453.png",
                  createdAt: "2021-11-17T13:23:01.173Z",
                  updatedAt: "2021-11-17T13:23:01.173Z",
                  __v: 0,
                },
                _id: "6195004219517edbb9a32dde",
                user: null,
                applicable_types: [
                  "618fb8e614842f8284d028dd",
                  "618fb99bc8ba53856cbf0459",
                ],
                isDeleted: false,
                status: "Do not Disturb",
                priority: 0,
                logo: "status_images/1637155090761.png",
                createdAt: "2021-11-17T13:14:42.642Z",
                updatedAt: "2021-11-17T13:19:10.157Z",
                __v: 0,
              },
            },
          },
        },
      },
      Data2: {
        title: "Data2",
        required: [
          "modes",
          "first_name",
          "last_name",
          "phone",
          "secondary_no",
          "profile_image",
          "is_profile_from_social_media",
          "media_profile_url",
          "role",
          "devices",
          "isActive",
          "isDeleted",
          "_id",
          "phones",
          "createdAt",
          "updatedAt",
          "__v",
          "user_status",
        ],
        type: "object",
        properties: {
          modes: {
            $ref: "#/components/schemas/Modes1",
          },
          first_name: {
            type: "string",
          },
          last_name: {
            type: "string",
          },
          phone: {
            type: "string",
          },
          secondary_no: {
            type: "string",
          },
          profile_image: {
            type: "string",
            nullable: true,
          },
          is_profile_from_social_media: {
            type: "string",
          },
          media_profile_url: {
            type: "string",
          },
          role: {
            type: "string",
          },
          devices: {
            type: "string",
            nullable: true,
          },
          isActive: {
            type: "boolean",
          },
          isDeleted: {
            type: "boolean",
          },
          _id: {
            type: "string",
          },
          phones: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Phone",
            },
            description: "",
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
          user_status: {
            $ref: "#/components/schemas/UserStatus",
          },
        },
        example: {
          modes: {
            workLifeBalance: {
              is_active: false,
              data: null,
            },
            roadSafetyStatus: {
              is_active: false,
              devices: null,
              data: null,
            },
            syncCalender: {
              calenders: null,
              priooritize_calender_events: false,
            },
          },
          first_name: "tushar",
          last_name: "savaliya",
          phone: "+918849455045",
          secondary_no: "+918980514085",
          profile_image: null,
          is_profile_from_social_media: "false",
          media_profile_url: "",
          role: "ADMIN",
          devices: null,
          isActive: true,
          isDeleted: false,
          _id: "6194fe948f13a1d59d11df22",
          phones: [
            {
              used_for_login: true,
              _id: "6194fe948f13a1d59d11df23",
              no: "+918849455045",
              type: "PRIMARY",
            },
            {
              used_for_login: false,
              _id: "61961587c65f230009c3a4e2",
              no: "+918980514085",
              type: "SECONDARY",
            },
          ],
          createdAt: "2021-11-17T13:07:32.717Z",
          updatedAt: "2021-11-18T09:01:19.402Z",
          __v: 0,
          user_status: {
            name: "abc",
            status: {
              sub_status: {
                user: null,
                isDeleted: false,
                _id: "6195023525c96ee17567830d",
                status: "DND2",
                parentId: "6195004219517edbb9a32dde",
                logo: "status_images/1637155378453.png",
                createdAt: "2021-11-17T13:23:01.173Z",
                updatedAt: "2021-11-17T13:23:01.173Z",
                __v: 0,
              },
              _id: "6195004219517edbb9a32dde",
              user: null,
              applicable_types: [
                "618fb8e614842f8284d028dd",
                "618fb99bc8ba53856cbf0459",
              ],
              isDeleted: false,
              status: "Do not Disturb",
              priority: 0,
              logo: "status_images/1637155090761.png",
              createdAt: "2021-11-17T13:14:42.642Z",
              updatedAt: "2021-11-17T13:19:10.157Z",
              __v: 0,
            },
          },
        },
      },
      Modes1: {
        title: "Modes1",
        required: ["workLifeBalance", "roadSafetyStatus", "syncCalender"],
        type: "object",
        properties: {
          workLifeBalance: {
            $ref: "#/components/schemas/WorkLifeBalance",
          },
          roadSafetyStatus: {
            $ref: "#/components/schemas/RoadSafetyStatus",
          },
          syncCalender: {
            $ref: "#/components/schemas/SyncCalender1",
          },
        },
        example: {
          workLifeBalance: {
            is_active: false,
            data: null,
          },
          roadSafetyStatus: {
            is_active: false,
            devices: null,
            data: null,
          },
          syncCalender: {
            calenders: null,
            priooritize_calender_events: false,
          },
        },
      },
      RoadSafetyStatus: {
        title: "RoadSafetyStatus",
        required: ["is_active", "devices", "data"],
        type: "object",
        properties: {
          is_active: {
            type: "boolean",
          },
          devices: {
            type: "string",
            nullable: true,
          },
          data: {
            type: "string",
            nullable: true,
          },
        },
        example: {
          is_active: false,
          devices: null,
          data: null,
        },
      },
      SyncCalender1: {
        title: "SyncCalender1",
        required: ["calenders", "priooritize_calender_events"],
        type: "object",
        properties: {
          calenders: {
            type: "string",
            nullable: true,
          },
          priooritize_calender_events: {
            type: "boolean",
          },
        },
        example: {
          calenders: null,
          priooritize_calender_events: false,
        },
      },
      UserStatus: {
        title: "UserStatus",
        required: ["name", "status"],
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          status: {
            $ref: "#/components/schemas/Status1",
          },
        },
        example: {
          name: "abc",
          status: {
            sub_status: {
              user: null,
              isDeleted: false,
              _id: "6195023525c96ee17567830d",
              status: "DND2",
              parentId: "6195004219517edbb9a32dde",
              logo: "status_images/1637155378453.png",
              createdAt: "2021-11-17T13:23:01.173Z",
              updatedAt: "2021-11-17T13:23:01.173Z",
              __v: 0,
            },
            _id: "6195004219517edbb9a32dde",
            user: null,
            applicable_types: [
              "618fb8e614842f8284d028dd",
              "618fb99bc8ba53856cbf0459",
            ],
            isDeleted: false,
            status: "Do not Disturb",
            priority: 0,
            logo: "status_images/1637155090761.png",
            createdAt: "2021-11-17T13:14:42.642Z",
            updatedAt: "2021-11-17T13:19:10.157Z",
            __v: 0,
          },
        },
      },
      Status1: {
        title: "Status1",
        required: [
          "sub_status",
          "_id",
          "user",
          "applicable_types",
          "isDeleted",
          "status",
          "priority",
          "logo",
          "createdAt",
          "updatedAt",
          "__v",
        ],
        type: "object",
        properties: {
          sub_status: {
            $ref: "#/components/schemas/SubStatus1",
          },
          _id: {
            type: "string",
          },
          user: {
            type: "string",
            nullable: true,
          },
          applicable_types: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
          isDeleted: {
            type: "boolean",
          },
          status: {
            type: "string",
          },
          priority: {
            type: "integer",
            format: "int32",
          },
          logo: {
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
          sub_status: {
            user: null,
            isDeleted: false,
            _id: "6195023525c96ee17567830d",
            status: "DND2",
            parentId: "6195004219517edbb9a32dde",
            logo: "status_images/1637155378453.png",
            createdAt: "2021-11-17T13:23:01.173Z",
            updatedAt: "2021-11-17T13:23:01.173Z",
            __v: 0,
          },
          _id: "6195004219517edbb9a32dde",
          user: null,
          applicable_types: [
            "618fb8e614842f8284d028dd",
            "618fb99bc8ba53856cbf0459",
          ],
          isDeleted: false,
          status: "Do not Disturb",
          priority: 0,
          logo: "status_images/1637155090761.png",
          createdAt: "2021-11-17T13:14:42.642Z",
          updatedAt: "2021-11-17T13:19:10.157Z",
          __v: 0,
        },
      },
      SubStatus1: {
        title: "SubStatus1",
        required: [
          "user",
          "isDeleted",
          "_id",
          "status",
          "parentId",
          "logo",
          "createdAt",
          "updatedAt",
          "__v",
        ],
        type: "object",
        properties: {
          user: {
            type: "string",
            nullable: true,
          },
          isDeleted: {
            type: "boolean",
          },
          _id: {
            type: "string",
          },
          status: {
            type: "string",
          },
          parentId: {
            type: "string",
          },
          logo: {
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
          user: null,
          isDeleted: false,
          _id: "6195023525c96ee17567830d",
          status: "DND2",
          parentId: "6195004219517edbb9a32dde",
          logo: "status_images/1637155378453.png",
          createdAt: "2021-11-17T13:23:01.173Z",
          updatedAt: "2021-11-17T13:23:01.173Z",
          __v: 0,
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
      m2005: {
        title: "m2005",
        required: ["success", "data", "message"],
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
          data: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Data3",
            },
            description: "",
          },
          message: {
            type: "string",
          },
        },
        example: {
          success: true,
          data: [
            {
              _id: "6196171ec65f230009c3a4ec",
              email: "savaliyatushar2197@gmail.com",
              Message: "systme is not working",
              createdAt: "2021-11-18T09:04:30.813Z",
              updatedAt: "2021-11-18T09:04:30.813Z",
              __v: 0,
            },
          ],
          message: "contactUs details get sucess fully",
        },
      },
      Data3: {
        title: "Data3",
        required: ["_id", "email", "Message", "createdAt", "updatedAt", "__v"],
        type: "object",
        properties: {
          _id: {
            type: "string",
          },
          email: {
            type: "string",
          },
          Message: {
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
          _id: "6196171ec65f230009c3a4ec",
          email: "savaliyatushar2197@gmail.com",
          Message: "systme is not working",
          createdAt: "2021-11-18T09:04:30.813Z",
          updatedAt: "2021-11-18T09:04:30.813Z",
          __v: 0,
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
      m2006: {
        title: "m2006",
        required: ["success", "message", "otp"],
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
          message: {
            type: "string",
          },
          otp: {
            type: "integer",
            format: "int32",
          },
        },
        example: {
          success: true,
          message: "message send successful",
          otp: 2059,
        },
      },
      UpdateRoadSafetyRequest: {
        title: "UpdateRoadSafetyRequest",
        required: [
          "devices",
          "selected_device",
          "display_to",
          "auto_sms",
          "notes",
          "is_active",
        ],
        type: "object",
        properties: {
          devices: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
          selected_device: {
            type: "string",
          },
          display_to: {
            type: "string",
          },
          auto_sms: {
            type: "boolean",
          },
          notes: {
            $ref: "#/components/schemas/Notes1",
          },
          is_active: {
            type: "boolean",
          },
        },
        example: {
          devices: ["JBL Enduarance", "Boat Rokerz"],
          selected_device: "Boat Rokerz",
          display_to: "contacts",
          auto_sms: false,
          notes: {
            note_id: "",
            is_custom: true,
            text: "Not available",
          },
          is_active: true,
        },
      },
      Notes1: {
        title: "Notes1",
        required: ["note_id", "is_custom", "text"],
        type: "object",
        properties: {
          note_id: {
            type: "string",
          },
          is_custom: {
            type: "boolean",
          },
          text: {
            type: "string",
          },
        },
        example: {
          note_id: "",
          is_custom: true,
          text: "Not available",
        },
      },
      m2007: {
        title: "m2007",
        required: ["success", "message"],
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
          message: {
            type: "string",
          },
        },
        example: {
          success: true,
          message: "Roadsafety updated successfully",
        },
      },
      refreshtokenrequest: {
        title: "refreshtokenrequest",
        required: ["refreshToken"],
        type: "object",
        properties: {
          refreshToken: {
            type: "string",
          },
        },
        example: {
          refreshToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk0ZmU5NDhmMTNhMWQ1OWQxMWRmMjIiLCJpYXQiOjE2MzgxOTEzNTksImV4cCI6MTYzODE5Mzc1OX0.kNt0ScvUeFry-FcvlZ9PJmDcYWo4f3jNa3jxzhjISaQ",
        },
      },
      m2008: {
        title: "m2008",
        required: ["success", "message", "token"],
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
          message: {
            type: "string",
          },
          token: {
            type: "string",
          },
        },
        example: {
          success: true,
          message: "token refresh sucessfully",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk3ZTE2OGU3MTJhNWQyMDI3ZTkwYzEiLCJpYXQiOjE2Mzc4Mzk5MTksImV4cCI6MTYzNzg0NDkxOX0.ly5zRRfxeIaUAzRYKSMyK0VAW-10fSSLUfAIzEyDNzA",
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
          phone_number: "89805140",
        },
      },
      CalendarsyncRequest: {
        title: "CalendarsyncRequest",
        required: [
          "calenders",
          "prioritize_calendar_events",
          "status",
          "subStatus",
        ],
        type: "object",
        properties: {
          calenders: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Calender",
            },
            description: "",
          },
          prioritize_calendar_events: {
            type: "boolean",
          },
          status: {
            type: "string",
          },
          subStatus: {
            type: "string",
          },
        },
        example: {
          calenders: [
            {
              id: "tesr@gmail.com",
              synced: true,
            },
          ],
          prioritize_calendar_events: false,
          status: "61a194a2d87d6100088f7a3f",
          subStatus: "61a196e4d87d6100088f7a5a",
        },
      },
      Calendarsync: {
        title: "Calendarsync",
        required: ["success", "message", "data"],
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
            description: "",
          },
        },
        example: {
          success: true,
          message: "Sucess",
          data: [],
        },
      },
      AddcallHistoryRequest: {
        title: "AddcallHistoryRequest",
        required: [
          "call_history_id",
          "phone",
          "name",
          "callHistory",
          "date",
          "is_deleted",
        ],
        type: "object",
        properties: {
          call_history_id: {
            type: "string",
          },
          phone: {
            type: "string",
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
          is_deleted: {
            type: "boolean",
          },
        },
        example: {
          call_history_id: "1",
          phone: "+919714209234",
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
          is_deleted: false,
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
      m20010: {
        title: "m20010",
        required: ["success", "message", "data"],
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
              $ref: "#/components/schemas/Data4",
            },
            description: "",
          },
        },
        example: {
          success: true,
          message: "Sucess",
          data: [
            {
              _id: "2021-11-13",
              list: [
                {
                  _id: "61a0cf9af01b8beeb2c047e5",
                  caller_history_id: "1",
                  __v: 0,
                  callHistory: [
                    {
                      simId: "sim1",
                      _id: "61a0cf9ad51a91a14d8a8749",
                      time: "2021-12-12T05:30:00.000Z",
                      type: "Incoming",
                    },
                    {
                      simId: "sim2",
                      _id: "61a0cf9ad51a91a14d8a874a",
                      time: "2021-12-12T05:30:00.000Z",
                      type: "Outgoing",
                    },
                  ],
                  createdAt: "2021-11-26T12:14:18.312Z",
                  date: "2021-11-13T04:50:22.000Z",
                  is_deleted: false,
                  name: "abc",
                  phone: "+919714209234",
                  updatedAt: "2021-11-26T12:14:18.312Z",
                  user: "6195f3e40ba05e4c53063e94",
                },
              ],
            },
            {
              _id: "2021-11-14",
              list: [
                {
                  _id: "61a0cf9bf01b8beeb2c047e8",
                  caller_history_id: "2",
                  __v: 0,
                  callHistory: [
                    {
                      simId: "sim1",
                      _id: "61a0cf9ad51a91a14d8a874d",
                      time: "2021-12-12T05:30:00.000Z",
                      type: "Incoming",
                    },
                    {
                      simId: "sim2",
                      _id: "61a0cf9ad51a91a14d8a874e",
                      time: "2021-12-12T05:30:00.000Z",
                      type: "Outgoing",
                    },
                  ],
                  createdAt: "2021-11-26T12:14:18.950Z",
                  date: "2021-11-14T04:50:22.000Z",
                  is_deleted: false,
                  name: "abcs",
                  phone: "+919496955716",
                  updatedAt: "2021-11-26T12:14:18.950Z",
                  user: "6195f3e40ba05e4c53063e94",
                },
                {
                  _id: "61a0cf9bf01b8beeb2c047ec",
                  caller_history_id: "3",
                  __v: 0,
                  callHistory: [
                    {
                      simId: "sim1",
                      _id: "61a0cf9bd51a91a14d8a8751",
                      time: "2021-12-12T05:30:00.000Z",
                      type: "Incoming",
                    },
                    {
                      simId: "sim2",
                      _id: "61a0cf9bd51a91a14d8a8752",
                      time: "2021-12-12T05:30:00.000Z",
                      type: "Outgoing",
                    },
                  ],
                  createdAt: "2021-11-26T12:14:19.592Z",
                  date: "2021-11-14T04:50:22.000Z",
                  is_deleted: false,
                  name: "abcs",
                  phone: "+918989898989",
                  updatedAt: "2021-11-26T12:14:19.592Z",
                  user: "6195f3e40ba05e4c53063e94",
                },
              ],
            },
          ],
        },
      },
      Data4: {
        title: "Data4",
        required: ["_id", "list"],
        type: "object",
        properties: {
          _id: {
            type: "string",
          },
          list: {
            type: "array",
            items: {
              $ref: "#/components/schemas/List",
            },
            description: "",
          },
        },
        example: {
          _id: "2021-11-13",
          list: [
            {
              _id: "61a0cf9af01b8beeb2c047e5",
              caller_history_id: "1",
              __v: 0,
              callHistory: [
                {
                  simId: "sim1",
                  _id: "61a0cf9ad51a91a14d8a8749",
                  time: "2021-12-12T05:30:00.000Z",
                  type: "Incoming",
                },
                {
                  simId: "sim2",
                  _id: "61a0cf9ad51a91a14d8a874a",
                  time: "2021-12-12T05:30:00.000Z",
                  type: "Outgoing",
                },
              ],
              createdAt: "2021-11-26T12:14:18.312Z",
              date: "2021-11-13T04:50:22.000Z",
              is_deleted: false,
              name: "abc",
              phone: "+919714209234",
              updatedAt: "2021-11-26T12:14:18.312Z",
              user: "6195f3e40ba05e4c53063e94",
            },
          ],
        },
      },
      List: {
        title: "List",
        required: [
          "_id",
          "caller_history_id",
          "__v",
          "callHistory",
          "createdAt",
          "date",
          "is_deleted",
          "name",
          "phone",
          "updatedAt",
          "user",
        ],
        type: "object",
        properties: {
          _id: {
            type: "string",
          },
          caller_history_id: {
            type: "string",
          },
          __v: {
            type: "integer",
            format: "int32",
          },
          callHistory: {
            type: "array",
            items: {
              $ref: "#/components/schemas/CallHistory1",
            },
            description: "",
          },
          createdAt: {
            type: "string",
          },
          date: {
            type: "string",
          },
          is_deleted: {
            type: "boolean",
          },
          name: {
            type: "string",
          },
          phone: {
            type: "string",
          },
          updatedAt: {
            type: "string",
          },
          user: {
            type: "string",
          },
        },
        example: {
          _id: "61a0cf9af01b8beeb2c047e5",
          caller_history_id: "1",
          __v: 0,
          callHistory: [
            {
              simId: "sim1",
              _id: "61a0cf9ad51a91a14d8a8749",
              time: "2021-12-12T05:30:00.000Z",
              type: "Incoming",
            },
            {
              simId: "sim2",
              _id: "61a0cf9ad51a91a14d8a874a",
              time: "2021-12-12T05:30:00.000Z",
              type: "Outgoing",
            },
          ],
          createdAt: "2021-11-26T12:14:18.312Z",
          date: "2021-11-13T04:50:22.000Z",
          is_deleted: false,
          name: "abc",
          phone: "+919714209234",
          updatedAt: "2021-11-26T12:14:18.312Z",
          user: "6195f3e40ba05e4c53063e94",
        },
      },
      CallHistory1: {
        title: "CallHistory1",
        required: ["simId", "_id", "time", "type"],
        type: "object",
        properties: {
          simId: {
            type: "string",
          },
          _id: {
            type: "string",
          },
          time: {
            type: "string",
          },
          type: {
            type: "string",
          },
        },
        example: {
          simId: "sim1",
          _id: "61a0cf9ad51a91a14d8a8749",
          time: "2021-12-12T05:30:00.000Z",
          type: "Incoming",
        },
      },
      addnumberfromcallhistoryrequest: {
        title: "addnumberfromcallhistoryrequest",
        required: ["phone", "name", "date_time", "type", "simId"],
        type: "object",
        properties: {
          phone: {
            type: "string",
          },
          name: {
            type: "string",
          },
          date_time: {
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
          phone: "+919099909990",
          name: "abcs",
          date_time: "2021-12-12 11:00:00",
          type: "Incoming",
          simId: "sim2",
        },
      },
      m20011: {
        title: "m20011",
        required: ["success", "message", "callLogs"],
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
          message: {
            type: "string",
          },
          callLogs: {
            $ref: "#/components/schemas/CallLogs",
          },
        },
        example: {
          success: true,
          message: "success",
          callLogs: {
            phone: "+919099909990",
            name: "abcs",
            time: "2021-12-12 11:00:00",
            type: "Incoming",
            simId: "sim2",
            date: "2021-12-12 11:00:00",
            callHistory: {
              time: "2021-12-12 11:00:00",
              type: "Incoming",
              simId: "sim2",
            },
            callerId: "6194fe948f13a1d59d11df22",
            wisecallerId: "6194fe948f13a1d59d11df22",
          },
        },
      },
      CallLogs: {
        title: "CallLogs",
        required: [
          "phone",
          "name",
          "time",
          "type",
          "simId",
          "date",
          "callHistory",
          "callerId",
          "wisecallerId",
        ],
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
          callHistory: {
            $ref: "#/components/schemas/CallHistory",
          },
          callerId: {
            type: "string",
          },
          wisecallerId: {
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
          callHistory: {
            time: "2021-12-12 11:00:00",
            type: "Incoming",
            simId: "sim2",
          },
          callerId: "6194fe948f13a1d59d11df22",
          wisecallerId: "6194fe948f13a1d59d11df22",
        },
      },
      SyncCallHistoryRequest: {
        title: "SyncCallHistoryRequest",
        required: ["call_history_id", "name"],
        type: "object",
        properties: {
          call_history_id: {
            type: "string",
          },
          name: {
            type: "string",
          },
        },
        example: {
          call_history_id: "jignesh_122",
          name: "Nithin Paul",
        },
      },
      contactsyncrequest: {
        title: "contactsyncrequest",
        required: [
          "contactId",
          "first_name",
          "last_name",
          "profile_image",
          "local_profile_image_path",
          "phones",
          "is_deleted",
        ],
        type: "object",
        properties: {
          contactId: {
            type: "string",
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
              $ref: "#/components/schemas/Phone2",
            },
            description: "",
          },
          is_deleted: {
            type: "boolean",
          },
        },
        example: {
          contactId: "jignesh_122",
          first_name: "Nithin",
          last_name: "Paul-1",
          profile_image: null,
          local_profile_image_path: "contacts/abc.png",
          phones: [
            {
              ph_no: "+919633178118",
              type: "PRIMARY",
            },
            {
              ph_no: "+919633178119",
              type: "SECONDARY",
            },
          ],
          is_deleted: false,
        },
      },
      Phone2: {
        title: "Phone2",
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
          ph_no: "+919633178118",
          type: "PRIMARY",
        },
      },
      m20014: {
        title: "m20014",
        required: ["success", "message", "data"],
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
              $ref: "#/components/schemas/Data5",
            },
            description: "",
          },
        },
        example: {
          success: true,
          message: "contact list get successfully",
          data: [
            {
              profile_image: null,
              local_profile_image_path: "contacts/abc.png",
              is_blocked: false,
              is_favourite: false,
              is_deleted: false,
              _id: "61a5e747f01b8beeb2c11f3d",
              contactId: 152,
              user: {
                modes: {
                  workLifeBalance: {
                    is_active: false,
                    data: null,
                  },
                  roadSafety: {
                    is_active: false,
                    devices: null,
                    data: null,
                  },
                  syncCalender: {
                    calenders: null,
                    prioritize_calender_events: false,
                  },
                },
                first_name: "tushar",
                last_name: "savaliya",
                phone: "+918980514085",
                secondary_no: null,
                profile_image:
                  "https://wisecaller-images.s3.us-east-1.amazonaws.com/profile_images/1638164210938.jpeg",
                is_profile_from_social_media: "true",
                media_profile_url: null,
                email: "savaliyatushar2197@gmail.com",
                role: "USER",
                devices: null,
                is_new_user: false,
                isActive: true,
                isDeleted: false,
                _id: "61a4644b5efa8c6d1c5a0ca1",
                phones: [
                  {
                    used_for_login: true,
                    _id: "61a4644b5efa8c6d1c5a0ca2",
                    no: "+918980514085",
                    type: "PRIMARY",
                  },
                ],
                createdAt: "2021-11-29T05:25:31.494Z",
                updatedAt: "2021-11-30T08:55:26.917Z",
                __v: 0,
              },
              __v: 0,
              createdAt: "2021-11-30T08:56:39.029Z",
              first_name: "jignesh80",
              last_name: "jignesh80",
              phones: [
                {
                  _id: "61a5e7470703eda959d4a9ef",
                  ph_no: "+919496782117",
                  type: "PRIMARY",
                },
                {
                  _id: "61a5e7470703eda959d4a9f0",
                  ph_no: "+919568732410",
                  type: "SECONDARY",
                },
              ],
              updatedAt: "2021-11-30T08:56:39.029Z",
            },
          ],
        },
      },
      Data5: {
        title: "Data5",
        required: [
          "profile_image",
          "local_profile_image_path",
          "is_blocked",
          "is_favourite",
          "is_deleted",
          "_id",
          "contactId",
          "user",
          "__v",
          "createdAt",
          "first_name",
          "last_name",
          "phones",
          "updatedAt",
        ],
        type: "object",
        properties: {
          profile_image: {
            type: "string",
            nullable: true,
          },
          local_profile_image_path: {
            type: "string",
          },
          is_blocked: {
            type: "boolean",
          },
          is_favourite: {
            type: "boolean",
          },
          is_deleted: {
            type: "boolean",
          },
          _id: {
            type: "string",
          },
          contactId: {
            type: "integer",
            format: "int32",
          },
          user: {
            $ref: "#/components/schemas/User",
          },
          __v: {
            type: "integer",
            format: "int32",
          },
          createdAt: {
            type: "string",
          },
          first_name: {
            type: "string",
          },
          last_name: {
            type: "string",
          },
          phones: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Phone4",
            },
            description: "",
          },
          updatedAt: {
            type: "string",
          },
        },
        example: {
          profile_image: null,
          local_profile_image_path: "contacts/abc.png",
          is_blocked: false,
          is_favourite: false,
          is_deleted: false,
          _id: "61a5e747f01b8beeb2c11f3d",
          contactId: 152,
          user: {
            modes: {
              workLifeBalance: {
                is_active: false,
                data: null,
              },
              roadSafety: {
                is_active: false,
                devices: null,
                data: null,
              },
              syncCalender: {
                calenders: null,
                prioritize_calender_events: false,
              },
            },
            first_name: "tushar",
            last_name: "savaliya",
            phone: "+918980514085",
            secondary_no: null,
            profile_image:
              "https://wisecaller-images.s3.us-east-1.amazonaws.com/profile_images/1638164210938.jpeg",
            is_profile_from_social_media: "true",
            media_profile_url: null,
            email: "savaliyatushar2197@gmail.com",
            role: "USER",
            devices: null,
            is_new_user: false,
            isActive: true,
            isDeleted: false,
            _id: "61a4644b5efa8c6d1c5a0ca1",
            phones: [
              {
                used_for_login: true,
                _id: "61a4644b5efa8c6d1c5a0ca2",
                no: "+918980514085",
                type: "PRIMARY",
              },
            ],
            createdAt: "2021-11-29T05:25:31.494Z",
            updatedAt: "2021-11-30T08:55:26.917Z",
            __v: 0,
          },
          __v: 0,
          createdAt: "2021-11-30T08:56:39.029Z",
          first_name: "jignesh80",
          last_name: "jignesh80",
          phones: [
            {
              _id: "61a5e7470703eda959d4a9ef",
              ph_no: "+919496782117",
              type: "PRIMARY",
            },
            {
              _id: "61a5e7470703eda959d4a9f0",
              ph_no: "+919568732410",
              type: "SECONDARY",
            },
          ],
          updatedAt: "2021-11-30T08:56:39.029Z",
        },
      },
      User: {
        title: "User",
        required: [
          "modes",
          "first_name",
          "last_name",
          "phone",
          "secondary_no",
          "profile_image",
          "is_profile_from_social_media",
          "media_profile_url",
          "email",
          "role",
          "devices",
          "is_new_user",
          "isActive",
          "isDeleted",
          "_id",
          "phones",
          "createdAt",
          "updatedAt",
          "__v",
        ],
        type: "object",
        properties: {
          modes: {
            $ref: "#/components/schemas/Modes2",
          },
          first_name: {
            type: "string",
          },
          last_name: {
            type: "string",
          },
          phone: {
            type: "string",
          },
          secondary_no: {
            type: "string",
            nullable: true,
          },
          profile_image: {
            type: "string",
          },
          is_profile_from_social_media: {
            type: "string",
          },
          media_profile_url: {
            type: "string",
            nullable: true,
          },
          email: {
            type: "string",
          },
          role: {
            type: "string",
          },
          devices: {
            type: "string",
            nullable: true,
          },
          is_new_user: {
            type: "boolean",
          },
          isActive: {
            type: "boolean",
          },
          isDeleted: {
            type: "boolean",
          },
          _id: {
            type: "string",
          },
          phones: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Phone",
            },
            description: "",
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
          modes: {
            workLifeBalance: {
              is_active: false,
              data: null,
            },
            roadSafety: {
              is_active: false,
              devices: null,
              data: null,
            },
            syncCalender: {
              calenders: null,
              prioritize_calender_events: false,
            },
          },
          first_name: "tushar",
          last_name: "savaliya",
          phone: "+918980514085",
          secondary_no: null,
          profile_image:
            "https://wisecaller-images.s3.us-east-1.amazonaws.com/profile_images/1638164210938.jpeg",
          is_profile_from_social_media: "true",
          media_profile_url: null,
          email: "savaliyatushar2197@gmail.com",
          role: "USER",
          devices: null,
          is_new_user: false,
          isActive: true,
          isDeleted: false,
          _id: "61a4644b5efa8c6d1c5a0ca1",
          phones: [
            {
              used_for_login: true,
              _id: "61a4644b5efa8c6d1c5a0ca2",
              no: "+918980514085",
              type: "PRIMARY",
            },
          ],
          createdAt: "2021-11-29T05:25:31.494Z",
          updatedAt: "2021-11-30T08:55:26.917Z",
          __v: 0,
        },
      },
      Modes2: {
        title: "Modes2",
        required: ["workLifeBalance", "roadSafety", "syncCalender"],
        type: "object",
        properties: {
          workLifeBalance: {
            $ref: "#/components/schemas/WorkLifeBalance",
          },
          roadSafety: {
            $ref: "#/components/schemas/RoadSafety",
          },
          syncCalender: {
            $ref: "#/components/schemas/SyncCalender2",
          },
        },
        example: {
          workLifeBalance: {
            is_active: false,
            data: null,
          },
          roadSafety: {
            is_active: false,
            devices: null,
            data: null,
          },
          syncCalender: {
            calenders: null,
            prioritize_calender_events: false,
          },
        },
      },
      SyncCalender2: {
        title: "SyncCalender2",
        required: ["calenders", "prioritize_calender_events"],
        type: "object",
        properties: {
          calenders: {
            type: "string",
            nullable: true,
          },
          prioritize_calender_events: {
            type: "boolean",
          },
        },
        example: {
          calenders: null,
          prioritize_calender_events: false,
        },
      },
      Phone4: {
        title: "Phone4",
        required: ["_id", "ph_no", "type"],
        type: "object",
        properties: {
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
          _id: "61a5e7470703eda959d4a9ef",
          ph_no: "+919496782117",
          type: "PRIMARY",
        },
      },
      contactupdaterequest: {
        title: "contactupdaterequest",
        required: ["contactId", "first_name", "is_deleted"],
        type: "object",
        properties: {
          contactId: {
            type: "string",
          },
          first_name: {
            type: "string",
          },
          is_deleted: {
            type: "boolean",
          },
        },
        example: {
          contactId: "jignesh_122",
          first_name: "User Update",
          is_deleted: false,
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
          phone_number: "+919633178119",
        },
      },
      m20016: {
        title: "m20016",
        required: ["success", "message", "data"],
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
              $ref: "#/components/schemas/Data6",
            },
            description: "",
          },
        },
        example: {
          success: true,
          message: "data get successful",
          data: [
            {
              profile_image: null,
              local_profile_image_path: "contacts/abc.png",
              is_deleted: false,
              _id: "619f59b65afc378e7c7aa615",
              contactId: 152,
              first_name: "jignesh",
              last_name: "jignesh",
              phones: [
                {
                  _id: "619f612b86750c993ef9f8f0",
                  ph_no: "+919854671230",
                  type: "PRIMARY",
                },
                {
                  _id: "619f612b86750c993ef9f8f1",
                  ph_no: "+912567894130",
                  type: "SECONDARY",
                },
                {
                  _id: "619f612b86750c993ef9f8f2",
                  ph_no: "+919568732410",
                  type: "OFFICE",
                },
                {
                  _id: "619f612b86750c993ef9f8f3",
                  ph_no: "+919496782117",
                  type: "HOME",
                },
              ],
              user: "6195f3e40ba05e4c53063e94",
              createdAt: "2021-11-25T09:39:02.197Z",
              updatedAt: "2021-11-25T10:10:51.102Z",
              __v: 0,
            },
          ],
        },
      },
      Data6: {
        title: "Data6",
        required: [
          "profile_image",
          "local_profile_image_path",
          "is_deleted",
          "_id",
          "contactId",
          "first_name",
          "last_name",
          "phones",
          "user",
          "createdAt",
          "updatedAt",
          "__v",
        ],
        type: "object",
        properties: {
          profile_image: {
            type: "string",
            nullable: true,
          },
          local_profile_image_path: {
            type: "string",
          },
          is_deleted: {
            type: "boolean",
          },
          _id: {
            type: "string",
          },
          contactId: {
            type: "integer",
            format: "int32",
          },
          first_name: {
            type: "string",
          },
          last_name: {
            type: "string",
          },
          phones: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Phone4",
            },
            description: "",
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
        example: {
          profile_image: null,
          local_profile_image_path: "contacts/abc.png",
          is_deleted: false,
          _id: "619f59b65afc378e7c7aa615",
          contactId: 152,
          first_name: "jignesh",
          last_name: "jignesh",
          phones: [
            {
              _id: "619f612b86750c993ef9f8f0",
              ph_no: "+919854671230",
              type: "PRIMARY",
            },
            {
              _id: "619f612b86750c993ef9f8f1",
              ph_no: "+912567894130",
              type: "SECONDARY",
            },
            {
              _id: "619f612b86750c993ef9f8f2",
              ph_no: "+919568732410",
              type: "OFFICE",
            },
            {
              _id: "619f612b86750c993ef9f8f3",
              ph_no: "+919496782117",
              type: "HOME",
            },
          ],
          user: "6195f3e40ba05e4c53063e94",
          createdAt: "2021-11-25T09:39:02.197Z",
          updatedAt: "2021-11-25T10:10:51.102Z",
          __v: 0,
        },
      },
      AddfavoriteRequest: {
        title: "AddfavoriteRequest",
        required: ["number", "is_favorite"],
        type: "object",
        properties: {
          number: {
            type: "string",
          },
          is_favorite: {
            type: "boolean",
          },
        },
        example: {
          number: "+911237896540",
          is_favorite: false,
        },
      },
      AddBlockcontactRequest: {
        title: "AddBlockcontactRequest",
        required: ["number", "is_blocked"],
        type: "object",
        properties: {
          number: {
            type: "string",
          },
          is_blocked: {
            type: "boolean",
          },
        },
        example: {
          number: "+911237896540",
          is_blocked: false,
        },
      },
      AddGlobalstatusRequest: {
        title: "AddGlobalstatusRequest",
        required: ["status", "applicable_types", "priority", "icon_style"],
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
          icon_style: {
            type: "string",
          },
        },
        example: {
          status: "Busylast",
          applicable_types: [
            "618fb99bc8ba53856cbf0459",
            "618fba343bc52886fb4f6b7d",
            "618fba473bc52886fb4f6b83",
            "619b27cc7a4897f6abd7338e",
          ],
          priority: 0,
          icon_style: "red_cross",
        },
      },
      m20021: {
        title: "m20021",
        required: ["success", "message", "data"],
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
              $ref: "#/components/schemas/Data7",
            },
            description: "",
          },
        },
        example: {
          success: true,
          message: "global status get successfully",
          data: [
            {
              _id: "61a0ad14d77a5b6e37d8917d",
              user: null,
              applicable_types: [
                "618fb99bc8ba53856cbf0459",
                "618fba343bc52886fb4f6b7d",
                "618fba473bc52886fb4f6b83",
                "619b27cc7a4897f6abd7338e",
              ],
              isDeleted: false,
              status: "Busylast",
              priority: 0,
              icon_style: "red_cross",
              logo: null,
              createdAt: "2021-11-26T09:47:00.175Z",
              updatedAt: "2021-11-26T09:47:00.175Z",
              __v: 0,
              subCategory: [
                {
                  _id: "61a0ad48d77a5b6e37d89182",
                  user: null,
                  isDeleted: false,
                  status: "DND2",
                  parentId: "61a0ad14d77a5b6e37d8917d",
                  icon_style: "green_cross",
                  logo: null,
                  createdAt: "2021-11-26T09:47:52.368Z",
                  updatedAt: "2021-11-26T09:47:52.368Z",
                  __v: 0,
                },
              ],
              applicableType: [
                {
                  _id: "618fb99bc8ba53856cbf0459",
                  type: "ROAD_SAFETY",
                  order: 1,
                  createdAt: "2021-11-13T13:11:55.724Z",
                  updatedAt: "2021-11-13T13:11:55.724Z",
                  __v: 0,
                },
                {
                  _id: "618fba343bc52886fb4f6b7d",
                  type: "CALENDAR_EVENTS",
                  order: 3,
                  createdAt: "2021-11-13T13:14:28.133Z",
                  updatedAt: "2021-11-13T13:14:28.133Z",
                  __v: 0,
                },
                {
                  _id: "618fba473bc52886fb4f6b83",
                  type: "WORK_LIFE_MODE",
                  order: 5,
                  createdAt: "2021-11-13T13:14:47.554Z",
                  updatedAt: "2021-11-13T13:14:47.554Z",
                  __v: 0,
                },
                {
                  _id: "619b27cc7a4897f6abd7338e",
                  type: "GENERAL",
                  order: 7,
                  createdAt: "2021-11-22T05:17:00.339Z",
                  updatedAt: "2021-11-22T05:17:00.339Z",
                  __v: 0,
                },
              ],
            },
          ],
        },
      },
      Data7: {
        title: "Data7",
        required: [
          "_id",
          "user",
          "applicable_types",
          "isDeleted",
          "status",
          "priority",
          "icon_style",
          "logo",
          "createdAt",
          "updatedAt",
          "__v",
          "subCategory",
          "applicableType",
        ],
        type: "object",
        properties: {
          _id: {
            type: "string",
          },
          user: {
            type: "string",
            nullable: true,
          },
          applicable_types: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
          isDeleted: {
            type: "boolean",
          },
          status: {
            type: "string",
          },
          priority: {
            type: "integer",
            format: "int32",
          },
          icon_style: {
            type: "string",
          },
          logo: {
            type: "string",
            nullable: true,
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
          subCategory: {
            type: "array",
            items: {
              $ref: "#/components/schemas/SubCategory",
            },
            description: "",
          },
          applicableType: {
            type: "array",
            items: {
              $ref: "#/components/schemas/ApplicableType",
            },
            description: "",
          },
        },
        example: {
          _id: "61a0ad14d77a5b6e37d8917d",
          user: null,
          applicable_types: [
            "618fb99bc8ba53856cbf0459",
            "618fba343bc52886fb4f6b7d",
            "618fba473bc52886fb4f6b83",
            "619b27cc7a4897f6abd7338e",
          ],
          isDeleted: false,
          status: "Busylast",
          priority: 0,
          icon_style: "red_cross",
          logo: null,
          createdAt: "2021-11-26T09:47:00.175Z",
          updatedAt: "2021-11-26T09:47:00.175Z",
          __v: 0,
          subCategory: [
            {
              _id: "61a0ad48d77a5b6e37d89182",
              user: null,
              isDeleted: false,
              status: "DND2",
              parentId: "61a0ad14d77a5b6e37d8917d",
              icon_style: "green_cross",
              logo: null,
              createdAt: "2021-11-26T09:47:52.368Z",
              updatedAt: "2021-11-26T09:47:52.368Z",
              __v: 0,
            },
          ],
          applicableType: [
            {
              _id: "618fb99bc8ba53856cbf0459",
              type: "ROAD_SAFETY",
              order: 1,
              createdAt: "2021-11-13T13:11:55.724Z",
              updatedAt: "2021-11-13T13:11:55.724Z",
              __v: 0,
            },
            {
              _id: "618fba343bc52886fb4f6b7d",
              type: "CALENDAR_EVENTS",
              order: 3,
              createdAt: "2021-11-13T13:14:28.133Z",
              updatedAt: "2021-11-13T13:14:28.133Z",
              __v: 0,
            },
            {
              _id: "618fba473bc52886fb4f6b83",
              type: "WORK_LIFE_MODE",
              order: 5,
              createdAt: "2021-11-13T13:14:47.554Z",
              updatedAt: "2021-11-13T13:14:47.554Z",
              __v: 0,
            },
            {
              _id: "619b27cc7a4897f6abd7338e",
              type: "GENERAL",
              order: 7,
              createdAt: "2021-11-22T05:17:00.339Z",
              updatedAt: "2021-11-22T05:17:00.339Z",
              __v: 0,
            },
          ],
        },
      },
      SubCategory: {
        title: "SubCategory",
        required: [
          "_id",
          "user",
          "isDeleted",
          "status",
          "parentId",
          "icon_style",
          "logo",
          "createdAt",
          "updatedAt",
          "__v",
        ],
        type: "object",
        properties: {
          _id: {
            type: "string",
          },
          user: {
            type: "string",
            nullable: true,
          },
          isDeleted: {
            type: "boolean",
          },
          status: {
            type: "string",
          },
          parentId: {
            type: "string",
          },
          icon_style: {
            type: "string",
          },
          logo: {
            type: "string",
            nullable: true,
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
          _id: "61a0ad48d77a5b6e37d89182",
          user: null,
          isDeleted: false,
          status: "DND2",
          parentId: "61a0ad14d77a5b6e37d8917d",
          icon_style: "green_cross",
          logo: null,
          createdAt: "2021-11-26T09:47:52.368Z",
          updatedAt: "2021-11-26T09:47:52.368Z",
          __v: 0,
        },
      },
      ApplicableType: {
        title: "ApplicableType",
        required: ["_id", "type", "order", "createdAt", "updatedAt", "__v"],
        type: "object",
        properties: {
          _id: {
            type: "string",
          },
          type: {
            type: "string",
          },
          order: {
            type: "integer",
            format: "int32",
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
          _id: "618fb99bc8ba53856cbf0459",
          type: "ROAD_SAFETY",
          order: 1,
          createdAt: "2021-11-13T13:11:55.724Z",
          updatedAt: "2021-11-13T13:11:55.724Z",
          __v: 0,
        },
      },
      m20022: {
        title: "m20022",
        required: ["success", "message", "data"],
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
          message: {
            type: "string",
          },
          data: {
            $ref: "#/components/schemas/Data8",
          },
        },
        example: {
          success: true,
          message: "global Status update successfully",
          data: {
            user: null,
            applicable_types: [
              "618fb8e614842f8284d028dd",
              "618fb99bc8ba53856cbf0459",
            ],
            isDeleted: false,
            _id: "6195004219517edbb9a32dde",
            status: "DND",
            priority: 0,
            logo: "status_images/1637230992831.png",
            createdAt: "2021-11-17T13:14:42.642Z",
            updatedAt: "2021-11-18T10:23:13.150Z",
            __v: 0,
          },
        },
      },
      Data8: {
        title: "Data8",
        required: [
          "user",
          "applicable_types",
          "isDeleted",
          "_id",
          "status",
          "priority",
          "logo",
          "createdAt",
          "updatedAt",
          "__v",
        ],
        type: "object",
        properties: {
          user: {
            type: "string",
            nullable: true,
          },
          applicable_types: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
          isDeleted: {
            type: "boolean",
          },
          _id: {
            type: "string",
          },
          status: {
            type: "string",
          },
          priority: {
            type: "integer",
            format: "int32",
          },
          logo: {
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
          user: null,
          applicable_types: [
            "618fb8e614842f8284d028dd",
            "618fb99bc8ba53856cbf0459",
          ],
          isDeleted: false,
          _id: "6195004219517edbb9a32dde",
          status: "DND",
          priority: 0,
          logo: "status_images/1637230992831.png",
          createdAt: "2021-11-17T13:14:42.642Z",
          updatedAt: "2021-11-18T10:23:13.150Z",
          __v: 0,
        },
      },
      updateglobalstatuswithoutimagerequest: {
        title: "updateglobalstatuswithoutimagerequest",
        required: ["status", "applicable_types", "priority", "icon_style"],
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
          icon_style: {
            type: "string",
          },
        },
        example: {
          status: "Do not Disturb",
          applicable_types: [
            "618fb8e614842f8284d028dd",
            "618fb99bc8ba53856cbf0459",
          ],
          priority: 0,
          icon_style: "red_cross",
        },
      },
      m20024: {
        title: "m20024",
        required: ["success", "message", "data"],
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
          message: {
            type: "string",
          },
          data: {
            $ref: "#/components/schemas/Data10",
          },
        },
        example: {
          success: true,
          message: "Global Status delete sucessfully",
          data: {
            user: null,
            applicable_types: [
              "618fb8e614842f8284d028dd",
              "618fb99bc8ba53856cbf0459",
            ],
            isDeleted: false,
            _id: "61961de00d7a2900096955af",
            status: "Do not Disturb1",
            priority: 0,
            logo: null,
            createdAt: "2021-11-18T09:33:20.153Z",
            updatedAt: "2021-11-18T09:33:20.153Z",
            __v: 0,
          },
        },
      },
      Data10: {
        title: "Data10",
        required: [
          "user",
          "applicable_types",
          "isDeleted",
          "_id",
          "status",
          "priority",
          "logo",
          "createdAt",
          "updatedAt",
          "__v",
        ],
        type: "object",
        properties: {
          user: {
            type: "string",
            nullable: true,
          },
          applicable_types: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
          isDeleted: {
            type: "boolean",
          },
          _id: {
            type: "string",
          },
          status: {
            type: "string",
          },
          priority: {
            type: "integer",
            format: "int32",
          },
          logo: {
            type: "string",
            nullable: true,
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
          user: null,
          applicable_types: [
            "618fb8e614842f8284d028dd",
            "618fb99bc8ba53856cbf0459",
          ],
          isDeleted: false,
          _id: "61961de00d7a2900096955af",
          status: "Do not Disturb1",
          priority: 0,
          logo: null,
          createdAt: "2021-11-18T09:33:20.153Z",
          updatedAt: "2021-11-18T09:33:20.153Z",
          __v: 0,
        },
      },
      m20026: {
        title: "m20026",
        required: ["success", "message", "data"],
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
          message: {
            type: "string",
          },
          data: {
            $ref: "#/components/schemas/Data11",
          },
        },
        example: {
          success: true,
          message: "global sub status update successfully",
          data: {
            user: null,
            isDeleted: false,
            _id: "6195023525c96ee17567830d",
            status: "DND11111",
            parentId: "6195004219517edbb9a32dde",
            logo: "status_images/1637155378453.png",
            createdAt: "2021-11-17T13:23:01.173Z",
            updatedAt: "2021-11-18T10:31:02.505Z",
            __v: 0,
          },
        },
      },
      Data11: {
        title: "Data11",
        required: [
          "user",
          "isDeleted",
          "_id",
          "status",
          "parentId",
          "logo",
          "createdAt",
          "updatedAt",
          "__v",
        ],
        type: "object",
        properties: {
          user: {
            type: "string",
            nullable: true,
          },
          isDeleted: {
            type: "boolean",
          },
          _id: {
            type: "string",
          },
          status: {
            type: "string",
          },
          parentId: {
            type: "string",
          },
          logo: {
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
          user: null,
          isDeleted: false,
          _id: "6195023525c96ee17567830d",
          status: "DND11111",
          parentId: "6195004219517edbb9a32dde",
          logo: "status_images/1637155378453.png",
          createdAt: "2021-11-17T13:23:01.173Z",
          updatedAt: "2021-11-18T10:31:02.505Z",
          __v: 0,
        },
      },
      m20027: {
        title: "m20027",
        required: ["success", "message", "data"],
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
          message: {
            type: "string",
          },
          data: {
            type: "string",
            nullable: true,
          },
        },
        example: {
          success: true,
          message: "Global Status delete sucessfully",
          data: null,
        },
      },
      NewNotesRequest: {
        title: "NewNotesRequest",
        required: ["text", "display_to", "type", "auto_sms", "is_admin"],
        type: "object",
        properties: {
          text: {
            type: "string",
          },
          display_to: {
            type: "string",
          },
          type: {
            type: "string",
          },
          auto_sms: {
            type: "boolean",
          },
          is_admin: {
            type: "boolean",
          },
        },
        example: {
          text: "I am driving, please call me later",
          display_to: "ALL",
          type: "ROAD SAFETY",
          auto_sms: false,
          is_admin: true,
        },
      },
      m20028: {
        title: "m20028",
        required: ["success", "data"],
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
          data: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Data12",
            },
            description: "",
          },
        },
        example: {
          success: true,
          data: [
            {
              auto_sms: false,
              _id: "619e258c5be4d7298bc74696",
              text: "I am driving, please call me later",
              display_to: "ALL",
              type: "ROAD SAFETY",
              __v: 0,
            },
          ],
        },
      },
      Data12: {
        title: "Data12",
        required: ["auto_sms", "_id", "text", "display_to", "type", "__v"],
        type: "object",
        properties: {
          auto_sms: {
            type: "boolean",
          },
          _id: {
            type: "string",
          },
          text: {
            type: "string",
          },
          display_to: {
            type: "string",
          },
          type: {
            type: "string",
          },
          __v: {
            type: "integer",
            format: "int32",
          },
        },
        example: {
          auto_sms: false,
          _id: "619e258c5be4d7298bc74696",
          text: "I am driving, please call me later",
          display_to: "ALL",
          type: "ROAD SAFETY",
          __v: 0,
        },
      },
      NotesUpdateRequest: {
        title: "NotesUpdateRequest",
        required: ["text", "display_to", "type", "auto_sms"],
        type: "object",
        properties: {
          text: {
            type: "string",
          },
          display_to: {
            type: "string",
          },
          type: {
            type: "string",
          },
          auto_sms: {
            type: "boolean",
          },
        },
        example: {
          text: "I am driving, please call me later",
          display_to: "CONTACTS",
          type: "ROAD SAFETY",
          auto_sms: true,
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
          type: "GENERAL",
          order: 7,
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
          type: "ROAD_SAFETqY",
          order: 7,
        },
      },
      m20031: {
        title: "m20031",
        required: ["success", "message", "data"],
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
              $ref: "#/components/schemas/Data13",
            },
            description: "",
          },
        },
        example: {
          success: true,
          message: "global type get successful",
          data: [
            {
              _id: "618fb99bc8ba53856cbf0459",
              type: "ROAD_SAFETY",
              order: 1,
              createdAt: "2021-11-13T13:11:55.724Z",
              updatedAt: "2021-11-13T13:11:55.724Z",
              __v: 0,
            },
            {
              _id: "618fb8e614842f8284d028dd",
              type: "SUPER_EVENTS",
              order: 2,
              createdAt: "2021-11-13T13:08:54.457Z",
              updatedAt: "2021-11-13T13:08:54.457Z",
              __v: 0,
            },
            {
              _id: "618fba343bc52886fb4f6b7d",
              type: "CALENDAR_EVENTS",
              order: 3,
              createdAt: "2021-11-13T13:14:28.133Z",
              updatedAt: "2021-11-13T13:14:28.133Z",
              __v: 0,
            },
            {
              _id: "618fba3d3bc52886fb4f6b80",
              type: "CUSTOM_EVENTS",
              order: 4,
              createdAt: "2021-11-13T13:14:37.273Z",
              updatedAt: "2021-11-13T13:14:37.273Z",
              __v: 0,
            },
            {
              _id: "618fba473bc52886fb4f6b83",
              type: "WORK_LIFE_MODE",
              order: 5,
              createdAt: "2021-11-13T13:14:47.554Z",
              updatedAt: "2021-11-13T13:14:47.554Z",
              __v: 0,
            },
            {
              _id: "618fc88c61e23400084ad415",
              type: "AUTO_STATUS",
              order: 6,
              createdAt: "2021-11-13T14:15:40.380Z",
              updatedAt: "2021-11-13T14:16:19.805Z",
              __v: 0,
            },
            {
              _id: "61962c9494db150009cac095",
              type: "AUTO_STATUS1",
              order: 7,
              createdAt: "2021-11-18T10:36:04.715Z",
              updatedAt: "2021-11-18T10:36:04.715Z",
              __v: 0,
            },
          ],
        },
      },
      Data13: {
        title: "Data13",
        required: ["_id", "type", "order", "createdAt", "updatedAt", "__v"],
        type: "object",
        properties: {
          _id: {
            type: "string",
          },
          type: {
            type: "string",
          },
          order: {
            type: "integer",
            format: "int32",
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
          _id: "618fb99bc8ba53856cbf0459",
          type: "ROAD_SAFETY",
          order: 1,
          createdAt: "2021-11-13T13:11:55.724Z",
          updatedAt: "2021-11-13T13:11:55.724Z",
          __v: 0,
        },
      },
      CustomStatusaddRequest: {
        title: "CustomStatusaddRequest",
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
            $ref: "#/components/schemas/Notes2",
          },
          display_to: {
            type: "string",
          },
          auto_sms: {
            type: "boolean",
          },
        },
        example: {
          customId: 134,
          custom_name: "abc",
          start_date: "2021-11-14T18:30:00.000Z",
          end_date: "2021-11-16T18:30:00.000Z",
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
      Notes2: {
        title: "Notes2",
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
              $ref: "#/components/schemas/Status2",
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
              custom_name: "aaaabc",
              start_date: "08/14/2021 10:00 AM",
              end_date: "10/10/2021 10:00 AM",
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
              custom_name: "stat148us2",
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
              start_date: "2021-11-14T18:30:00.000Z",
              end_date: "2021-11-16T18:30:00.000Z",
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
            Excluded_dates: [
              "2021-11-16T00:00:00.000Z",
              "2021-11-16T00:00:00.000Z",
            ],
          },
        },
      },
      Status2: {
        title: "Status2",
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
            $ref: "#/components/schemas/Notes2",
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
          custom_name: "aaaabc",
          start_date: "08/14/2021 10:00 AM",
          end_date: "10/10/2021 10:00 AM",
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
          Excluded_dates: [
            "2021-11-16T00:00:00.000Z",
            "2021-11-16T00:00:00.000Z",
          ],
        },
      },
      m20035: {
        title: "m20035",
        required: ["sucess", "message", "data"],
        type: "object",
        properties: {
          sucess: {
            type: "boolean",
          },
          message: {
            type: "string",
          },
          data: {
            $ref: "#/components/schemas/Data14",
          },
        },
        example: {
          sucess: true,
          message: "getdata successfully",
          data: {
            status: [
              {
                _id: "61950368448ab7e5f7775ce0",
                notes: {
                  noteId: null,
                  is_custom: "true",
                  text: "text for sending sms",
                },
                is_allday_status: true,
                status: "61670b887a7764f6a360db28",
                substatus: null,
                user: "6194fe948f13a1d59d11df22",
                display_to: "ALL",
                auto_sms: true,
                is_enabled: true,
                is_deleted: false,
                customId: 135,
                custom_name: "abc",
                start_date: "2021-10-08T04:30:00.000Z",
                end_date: "2021-10-20T04:30:00.000Z",
                RRULE: "is_repeat",
                time_zone: "IN/PST etc..",
                createdAt: "2021-11-17T13:28:08.571Z",
                updatedAt: "2021-11-17T13:28:08.571Z",
                __v: 0,
              },
              {
                _id: "61962fb4403857000969c198",
                notes: {
                  noteId: null,
                  is_custom: "true",
                  text: "text for sending sms",
                },
                is_allday_status: true,
                status: "61670b887a7764f6a360db28",
                substatus: null,
                user: "6194fe948f13a1d59d11df22",
                display_to: "ALL",
                auto_sms: true,
                is_enabled: true,
                is_deleted: false,
                customId: 134,
                custom_name: "abc",
                start_date: "2021-10-08T10:00:00.000Z",
                end_date: "2021-10-20T10:00:00.000Z",
                RRULE: "is_repeat",
                time_zone: "IN/PST etc..",
                createdAt: "2021-11-18T10:49:24.745Z",
                updatedAt: "2021-11-18T10:49:24.745Z",
                __v: 0,
              },
            ],
            worklife: {
              Excluded_dates: ["11/12/2021", "20/12/2021"],
            },
          },
        },
      },
      Data14: {
        title: "Data14",
        required: ["status", "worklife"],
        type: "object",
        properties: {
          status: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Status3",
            },
            description: "",
          },
          worklife: {
            $ref: "#/components/schemas/WorkLife",
          },
        },
        example: {
          status: [
            {
              _id: "61950368448ab7e5f7775ce0",
              notes: {
                noteId: null,
                is_custom: "true",
                text: "text for sending sms",
              },
              is_allday_status: true,
              status: "61670b887a7764f6a360db28",
              substatus: null,
              user: "6194fe948f13a1d59d11df22",
              display_to: "ALL",
              auto_sms: true,
              is_enabled: true,
              is_deleted: false,
              customId: 135,
              custom_name: "abc",
              start_date: "2021-10-08T04:30:00.000Z",
              end_date: "2021-10-20T04:30:00.000Z",
              RRULE: "is_repeat",
              time_zone: "IN/PST etc..",
              createdAt: "2021-11-17T13:28:08.571Z",
              updatedAt: "2021-11-17T13:28:08.571Z",
              __v: 0,
            },
            {
              _id: "61962fb4403857000969c198",
              notes: {
                noteId: null,
                is_custom: "true",
                text: "text for sending sms",
              },
              is_allday_status: true,
              status: "61670b887a7764f6a360db28",
              substatus: null,
              user: "6194fe948f13a1d59d11df22",
              display_to: "ALL",
              auto_sms: true,
              is_enabled: true,
              is_deleted: false,
              customId: 134,
              custom_name: "abc",
              start_date: "2021-10-08T10:00:00.000Z",
              end_date: "2021-10-20T10:00:00.000Z",
              RRULE: "is_repeat",
              time_zone: "IN/PST etc..",
              createdAt: "2021-11-18T10:49:24.745Z",
              updatedAt: "2021-11-18T10:49:24.745Z",
              __v: 0,
            },
          ],
          worklife: {
            Excluded_dates: ["11/12/2021", "20/12/2021"],
          },
        },
      },
      Status3: {
        title: "Status3",
        required: [
          "_id",
          "notes",
          "is_allday_status",
          "status",
          "substatus",
          "user",
          "display_to",
          "auto_sms",
          "is_enabled",
          "is_deleted",
          "customId",
          "custom_name",
          "start_date",
          "end_date",
          "RRULE",
          "time_zone",
          "createdAt",
          "updatedAt",
          "__v",
        ],
        type: "object",
        properties: {
          _id: {
            type: "string",
          },
          notes: {
            $ref: "#/components/schemas/Notes4",
          },
          is_allday_status: {
            type: "boolean",
          },
          status: {
            type: "string",
          },
          substatus: {
            type: "string",
            nullable: true,
          },
          user: {
            type: "string",
          },
          display_to: {
            type: "string",
          },
          auto_sms: {
            type: "boolean",
          },
          is_enabled: {
            type: "boolean",
          },
          is_deleted: {
            type: "boolean",
          },
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
          RRULE: {
            type: "string",
          },
          time_zone: {
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
          _id: "61950368448ab7e5f7775ce0",
          notes: {
            noteId: null,
            is_custom: "true",
            text: "text for sending sms",
          },
          is_allday_status: true,
          status: "61670b887a7764f6a360db28",
          substatus: null,
          user: "6194fe948f13a1d59d11df22",
          display_to: "ALL",
          auto_sms: true,
          is_enabled: true,
          is_deleted: false,
          customId: 135,
          custom_name: "abc",
          start_date: "2021-10-08T04:30:00.000Z",
          end_date: "2021-10-20T04:30:00.000Z",
          RRULE: "is_repeat",
          time_zone: "IN/PST etc..",
          createdAt: "2021-11-17T13:28:08.571Z",
          updatedAt: "2021-11-17T13:28:08.571Z",
          __v: 0,
        },
      },
      Notes4: {
        title: "Notes4",
        required: ["noteId", "is_custom", "text"],
        type: "object",
        properties: {
          noteId: {
            type: "string",
            nullable: true,
          },
          is_custom: {
            type: "string",
          },
          text: {
            type: "string",
          },
        },
        example: {
          noteId: null,
          is_custom: "true",
          text: "text for sending sms",
        },
      },
      "AddWork-lifeBalanceRequest": {
        title: "AddWork-lifeBalanceRequest",
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
          userStatus: "61a194a2d87d6100088f7a3f",
          userSubStatus: "61a196d7d87d6100088f7a57",
          Excluded_dates: ["11/12/2021", "20/12/2021"],
        },
      },
      "AddWork-lifeBalance": {
        title: "AddWork-lifeBalance",
        required: ["success", "message", "data"],
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
            description: "",
          },
        },
        example: {
          success: true,
          message: "workingdays Added successfully",
          data: [],
        },
      },
      "UpdateWork-lifeBalanceRequest": {
        title: "UpdateWork-lifeBalanceRequest",
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
      m20038: {
        title: "m20038",
        required: ["success", "message", "data"],
        type: "object",
        properties: {
          success: {
            type: "boolean",
          },
          message: {
            type: "string",
          },
          data: {
            $ref: "#/components/schemas/Data15",
          },
        },
        example: {
          success: true,
          message: "workingdays get successfully",
          data: {
            _id: "61b042ecbc9b2e16bd8080f1",
            Monday: false,
            Tuesday: true,
            Wednesday: true,
            Thursday: true,
            Friday: true,
            Saturday: true,
            userStatus: {
              _id: "61a194a2d87d6100088f7a3f",
              user: null,
              applicable_types: [
                "61a190fb88e2950009a58a6a",
                "61a190cd88e2950009a58a64",
                "61a190e988e2950009a58a67",
              ],
              isDeleted: false,
              status: "Busy",
              priority: 0,
              icon_style: "RED_CROSS",
              logo: null,
              createdAt: "2021-11-27T02:14:58.570Z",
              updatedAt: "2021-11-27T02:14:58.570Z",
              __v: 0,
            },
            userSubStatus: {
              _id: "61a196d7d87d6100088f7a57",
              user: null,
              isDeleted: false,
              status: "Driving",
              parentId: "61a194a2d87d6100088f7a3f",
              icon_style: "RED_CROSS",
              logo: null,
              createdAt: "2021-11-27T02:24:23.595Z",
              updatedAt: "2021-11-27T02:24:23.595Z",
              __v: 0,
            },
            startTime: "09:00 AM",
            endTime: "10:00 PM",
            Excluded_dates: ["11/12/2021", "20/12/2021"],
            user: "61ae248bcb07d10008f4ed84",
            createdAt: "2021-12-08T05:30:20.266Z",
            updatedAt: "2021-12-08T05:30:20.266Z",
            __v: 0,
          },
        },
      },
      Data15: {
        title: "Data15",
        required: [
          "_id",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "userStatus",
          "userSubStatus",
          "startTime",
          "endTime",
          "Excluded_dates",
          "user",
          "createdAt",
          "updatedAt",
          "__v",
        ],
        type: "object",
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
          userStatus: {
            $ref: "#/components/schemas/UserStatus1",
          },
          userSubStatus: {
            $ref: "#/components/schemas/UserSubStatus",
          },
          startTime: {
            type: "string",
          },
          endTime: {
            type: "string",
          },
          Excluded_dates: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
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
        example: {
          _id: "61b042ecbc9b2e16bd8080f1",
          Monday: false,
          Tuesday: true,
          Wednesday: true,
          Thursday: true,
          Friday: true,
          Saturday: true,
          userStatus: {
            _id: "61a194a2d87d6100088f7a3f",
            user: null,
            applicable_types: [
              "61a190fb88e2950009a58a6a",
              "61a190cd88e2950009a58a64",
              "61a190e988e2950009a58a67",
            ],
            isDeleted: false,
            status: "Busy",
            priority: 0,
            icon_style: "RED_CROSS",
            logo: null,
            createdAt: "2021-11-27T02:14:58.570Z",
            updatedAt: "2021-11-27T02:14:58.570Z",
            __v: 0,
          },
          userSubStatus: {
            _id: "61a196d7d87d6100088f7a57",
            user: null,
            isDeleted: false,
            status: "Driving",
            parentId: "61a194a2d87d6100088f7a3f",
            icon_style: "RED_CROSS",
            logo: null,
            createdAt: "2021-11-27T02:24:23.595Z",
            updatedAt: "2021-11-27T02:24:23.595Z",
            __v: 0,
          },
          startTime: "09:00 AM",
          endTime: "10:00 PM",
          Excluded_dates: ["11/12/2021", "20/12/2021"],
          user: "61ae248bcb07d10008f4ed84",
          createdAt: "2021-12-08T05:30:20.266Z",
          updatedAt: "2021-12-08T05:30:20.266Z",
          __v: 0,
        },
      },
      UserStatus1: {
        title: "UserStatus1",
        required: [
          "_id",
          "user",
          "applicable_types",
          "isDeleted",
          "status",
          "priority",
          "icon_style",
          "logo",
          "createdAt",
          "updatedAt",
          "__v",
        ],
        type: "object",
        properties: {
          _id: {
            type: "string",
          },
          user: {
            type: "string",
            nullable: true,
          },
          applicable_types: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
          isDeleted: {
            type: "boolean",
          },
          status: {
            type: "string",
          },
          priority: {
            type: "integer",
            format: "int32",
          },
          icon_style: {
            type: "string",
          },
          logo: {
            type: "string",
            nullable: true,
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
          _id: "61a194a2d87d6100088f7a3f",
          user: null,
          applicable_types: [
            "61a190fb88e2950009a58a6a",
            "61a190cd88e2950009a58a64",
            "61a190e988e2950009a58a67",
          ],
          isDeleted: false,
          status: "Busy",
          priority: 0,
          icon_style: "RED_CROSS",
          logo: null,
          createdAt: "2021-11-27T02:14:58.570Z",
          updatedAt: "2021-11-27T02:14:58.570Z",
          __v: 0,
        },
      },
      UserSubStatus: {
        title: "UserSubStatus",
        required: [
          "_id",
          "user",
          "isDeleted",
          "status",
          "parentId",
          "icon_style",
          "logo",
          "createdAt",
          "updatedAt",
          "__v",
        ],
        type: "object",
        properties: {
          _id: {
            type: "string",
          },
          user: {
            type: "string",
            nullable: true,
          },
          isDeleted: {
            type: "boolean",
          },
          status: {
            type: "string",
          },
          parentId: {
            type: "string",
          },
          icon_style: {
            type: "string",
          },
          logo: {
            type: "string",
            nullable: true,
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
          _id: "61a196d7d87d6100088f7a57",
          user: null,
          isDeleted: false,
          status: "Driving",
          parentId: "61a194a2d87d6100088f7a3f",
          icon_style: "RED_CROSS",
          logo: null,
          createdAt: "2021-11-27T02:24:23.595Z",
          updatedAt: "2021-11-27T02:24:23.595Z",
          __v: 0,
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
      name: "Auth service",
    },
    {
      name: "Call History",
    },
    {
      name: "Contact sync",
    },
    {
      name: "Status",
    },
    {
      name: "Global Type",
    },
    {
      name: "Custom Status",
    },
    {
      name: "worklife Balance",
    },
  ],
};
