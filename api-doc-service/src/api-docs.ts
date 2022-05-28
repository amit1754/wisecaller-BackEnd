export default {
  openapi: "3.0.0",
  info: {
    title: "Wiseccaller update collection",
    contact: {},
    version: "1.0",
  },
  servers: [
    {
      url: "https://2ap8jicooc.execute-api.us-east-1.amazonaws.com/dev/",
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
                mobileNo: "+911234567890",
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
                mobileNo: "+919764569876",
                otp: 4917,
                user_device: {
                  device_token:
                    "f_8U2g2f_RmRrv23-W2opp:APA91bFGeyZ2vYMDk_zcMS2MQGFCzZvGkpHqDhC7VAQintfXiQVIDomRmYCGcGGRAlaYsRsVYYt2BwXNzmOBx4mG2tnZKelsibEOJ6CzNdbsI_GPrOvf8iLBdXV_VvTBFOjz2x6tjaYj",
                  OS: "Naught",
                  platform: "ANDROID",
                  deviceId: "One Plus 10T",
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
                  $ref: "#/components/schemas/Verifywithotp",
                },
                example: {
                  success: true,
                  data: {
                    token:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk0ZmU5NDhmMTNhMWQ1OWQxMWRmMjIiLCJpYXQiOjE2MzcyMjU0NTQsImV4cCI6MTYzNzIzMjY1NH0.zjYvaafmauZLkdBHLmu6IdQC7JFWA1RY7twmaMDEe-s",
                    refreshToken:
                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk0ZmU5NDhmMTNhMWQ1OWQxMWRmMjIiLCJpYXQiOjE2MzcyMjU0NTQsImV4cCI6MTY2ODc2MTQ1NH0.qgEldemvwl3UiXIljRJjGkpMJL_jrNfa1csaqh60cYA",
                    token_expires_at: "2021-11-18T20:50:54.720Z",
                    is_new_user: true,
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
                        calenders: null,
                        prioritize_calender_events: false,
                      },
                      roadSafetyStatus: {
                        is_active: true,
                        devices: ["JBL Enduarance", "Boat Rokerz"],
                        data: {
                          selected_device: "Boat Rokerz",
                          display_to: "contacts",
                          auto_sms: false,
                          notes: {
                            is_custom: true,
                            text: "Not available",
                          },
                          status: {
                            user: null,
                            applicable_types: ["618fb99bc8ba53856cbf0459"],
                            isDeleted: false,
                            _id: "619b27747a4897f6abd7338b",
                            status: "Driving",
                            priority: 0,
                            logo: null,
                            createdAt: "2021-11-22T05:15:32.942Z",
                            updatedAt: "2021-11-22T05:15:32.942Z",
                            __v: 0,
                          },
                        },
                      },
                    },
                    first_name: "firstName",
                    last_name: "lastName",
                    phone: "+919764569876",
                    secondary_no: "+918980514085",
                    profile_image:
                      "https://wisecaller-images.s3.us-east-1.amazonaws.com/profile_images/1637303316530.jpeg",
                    is_profile_from_social_media: "false",
                    media_profile_url: "",
                    email: null,
                    role: "ADMIN",
                    devices: null,
                    is_new_user: true,
                    isActive: true,
                    isDeleted: false,
                    _id: "6195f3e40ba05e4c53063e94",
                    phones: [
                      {
                        used_for_login: true,
                        _id: "6195f3e40ba05e4c53063e95",
                        no: "+919764569876",
                        type: "PRIMARY",
                      },
                      {
                        used_for_login: true,
                        _id: "619730890cd6d371f3aa2e6e",
                        no: "+918980514085",
                        type: "SECONDARY",
                      },
                    ],
                    createdAt: "2021-11-18T06:34:12.028Z",
                    updatedAt: "2021-11-26T09:42:16.746Z",
                    __v: 0,
                    user_status: {
                      name: "abc",
                      status: {
                        sub_status: {
                          user: null,
                          isDeleted: false,
                          _id: "6195023525c96ee17567830d",
                          status: "DND11111",
                          parentId: "6195004219517edbb9a32dde",
                          logo: "https://wisecaller-images.s3.us-east-1.amazonaws.com/status_images/1637155378453.png",
                          createdAt: "2021-11-17T13:23:01.173Z",
                          updatedAt: "2021-11-18T10:31:02.505Z",
                          __v: 0,
                        },
                        _id: "6195004219517edbb9a32dde",
                        user: null,
                        applicable_types: [
                          {
                            _id: "618fb8e614842f8284d028dd",
                            type: "SUPER_EVENTS",
                            order: 2,
                            createdAt: "2021-11-13T13:08:54.457Z",
                            updatedAt: "2021-11-13T13:08:54.457Z",
                            __v: 0,
                          },
                          {
                            _id: "618fb99bc8ba53856cbf0459",
                            type: "ROAD_SAFETY",
                            order: 1,
                            createdAt: "2021-11-13T13:11:55.724Z",
                            updatedAt: "2021-11-13T13:11:55.724Z",
                            __v: 0,
                          },
                        ],
                        isDeleted: false,
                        status: "Do not Disturb",
                        priority: 0,
                        logo: "https://wisecaller-images.s3.us-east-1.amazonaws.com/status_images/1637230992831.png",
                        createdAt: "2021-11-17T13:14:42.642Z",
                        updatedAt: "2021-11-18T10:27:23.281Z",
                        __v: 0,
                      },
                    },
                    organization_subscription: {
                      _id: "61c2b05ff01b8beeb2c45715",
                      user: "61b6e4f05ca721a7e2913b01",
                      __v: 0,
                      coupon_code: "NEW_COUPON",
                      is_active: false,
                      is_revoked: false,
                      organization: "61a8fa3dcc4e890009383b80",
                      quantity: 1,
                      subscription: "61c2a5c6f01b8beeb2c45420",
                      subscription_created_date: "2021-12-22T04:58:07.703Z",
                      subscription_end_date: "2022-12-22T04:58:07.703Z",
                      revoked_reason: "",
                    },
                    user_subscription: {
                      _id: "61c2b605f01b8beeb2c45962",
                      user: "61b6e4f05ca721a7e2913b01",
                      __v: 0,
                      coupon_code: "NEW_COUPON-1",
                      is_active: true,
                      is_revoked: true,
                      quantity: 1,
                      subscription: "61c2b5acf01b8beeb2c45936",
                      subscription_created_date: "2021-12-22T05:22:12.906Z",
                      subscription_end_date: "2022-12-22T05:22:12.907Z",
                      revoked_reason: "Revoke Subscription",
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
    "/auth-service/api/v1/user/update-profile": {
      put: {
        tags: ["Auth service"],
        summary: "update user profile",
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
                    example: "firstName",
                  },
                  last_name: {
                    type: "string",
                    example: "lastName",
                  },
                  profile_image: {
                    type: "file",
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
                  email: {
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
    "/auth-service/api/v1/user/update-profile/json": {
      put: {
        tags: ["Auth service"],
        summary: "update user profile with json",
        operationId: "updateuserprofilewithjson",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/updateuserprofilewithjsonrequest",
              },
              example: {
                first_name: "tushar",
                last_name: "savaliya",
                is_profile_from_social_media: false,
                phone: "+918849455045",
                secondary_no: "+918980514085",
                media_profile_url: "",
                email: "abc@gmail.com",
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
                customStatusId: "custom_status_id",
                statusId: "6195004219517edbb9a32dde",
                subStatusId: "6195023525c96ee17567830d",
                notes: {
                  id: "619e258c5be4d7298bc74696",
                  is_custom: false,
                  text: "",
                },
                is_deleted: false,
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
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk3ZTE2OGU3MTJhNWQyMDI3ZTkwYzEiLCJpYXQiOjE2Mzc4Mzk5MTksImV4cCI6MTYzNzg0MjMxOX0.W9ItR2QwrzxN5va9OTCTAma6RcxIMfyhmwD3IvzzEGw",
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
                  data: {
                    is_active: true,
                    devices: ["JBL Enduarance", "Boat Rokerz"],
                    data: {
                      selected_device: "Boat Rokerz",
                      display_to: "contacts",
                      auto_sms: false,
                      notes: {
                        is_custom: true,
                        text: "Not available",
                      },
                      status: {
                        user: null,
                        applicable_types: [
                          {
                            _id: "61a190ae88e2950009a58a61",
                            type: "ROAD_SAFETY",
                            order: 1,
                            createdAt: "2021-11-27T01:58:06.318Z",
                            updatedAt: "2021-11-27T01:58:06.318Z",
                            __v: 0,
                          },
                        ],
                        isDeleted: false,
                        _id: "61a19522d87d6100088f7a45",
                        status: "Driving",
                        priority: 0,
                        icon_style: "RED_CROSS",
                        logo: null,
                        createdAt: "2021-11-27T02:17:06.417Z",
                        updatedAt: "2021-11-27T02:17:06.417Z",
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
    "/auth-service/api/v1/calendar-sync": {
      post: {
        tags: ["Auth service"],
        summary: "Sync Calender",
        operationId: "SyncCalender",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SyncCalenderRequest",
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
                  message: "Sucess",
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
                  $ref: "#/components/schemas/SyncCallHistoryRequest",
                },
                description: "",
                example: [
                  {
                    call_history_id: 1,
                    phone: "+919714209234",
                    name: "Jignesh Foon",
                    time: "2021-12-13 11:00:00",
                    call_type: "INCOMING",
                    sim: "SIM-1",
                    is_deleted: false,
                  },
                ],
              },
              example: [
                {
                  call_history_id: 1,
                  phone: "+919714209234",
                  name: "Jignesh Foon",
                  time: "2021-12-13 11:00:00",
                  call_type: "INCOMING",
                  sim: "SIM-1",
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
                  message: "Contact synced successfully",
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/call-service/api/v1/callhistory/get-history": {
      get: {
        tags: ["Call History"],
        summary: "call history",
        operationId: "callhistory",
        parameters: [
          {
            in: "query",
            name: "limit",
            required: false,
            schema: {
              type: "number",
            },
          },
          {
            in: "query",
            name: "page",
            required: false,
            schema: {
              type: "number",
            },
          },
          {
            in: "query",
            name: "timestamp",
            required: false,
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
                  $ref: "#/components/schemas/m2009",
                },
                example: {
                  success: true,
                  data: [
                    {
                      is_deleted: false,
                      _id: "61a178c4b65f6d338d4abc26",
                      call_history_id: 1,
                      phone: "+919714209234",
                      name: "Jignesh Foon",
                      time: "2021-12-13T05:30:00.000Z",
                      sim: "SIM-1",
                      user: {
                        first_name: "tushar",
                        last_name: "savaliya",
                        phone: "+919714209234",
                        secondary_no: null,
                        profile_image: null,
                        is_profile_from_social_media: "false",
                        media_profile_url: "",
                        role: "USER",
                        devices: null,
                        isActive: true,
                        isDeleted: false,
                        _id: "619524f9b1f6fc0009e20e74",
                        modes: {
                          workLifeBalance: {
                            is_active: false,
                            data: null,
                          },
                          roadSafetyStatus: {
                            is_active: false,
                            devices: ["JBL Enduarance", "Boat Rokerz"],
                            data: {
                              selected_device: "Boat Rokerz",
                              display_to: "contacts",
                              auto_sms: false,
                              notes: {
                                is_custom: true,
                                text: "Not available",
                              },
                              status: null,
                            },
                          },
                          syncCalender: {
                            calenders: null,
                            priooritize_calender_events: false,
                          },
                        },
                        phones: [
                          {
                            used_for_login: true,
                            _id: "619524f9b1f6fc0009e20e75",
                            no: "+919714209234",
                            type: "PRIMARY",
                          },
                        ],
                        user_status: {
                          name: "abc",
                          status: {
                            sub_status: {
                              user: null,
                              isDeleted: false,
                              _id: "6195023525c96ee17567830d",
                              status: "DND11111",
                              parentId: "6195004219517edbb9a32dde",
                              logo: "https://wisecaller-images.s3.us-east-1.amazonaws.com/status_images/1637155378453.png",
                              createdAt: "2021-11-17T13:23:01.173Z",
                              updatedAt: "2021-11-18T10:31:02.505Z",
                              __v: 0,
                            },
                            _id: "6195004219517edbb9a32dde",
                            user: null,
                            applicable_types: [
                              {
                                _id: "618fb8e614842f8284d028dd",
                                type: "SUPER_EVENTS",
                                order: 2,
                                createdAt: "2021-11-13T13:08:54.457Z",
                                updatedAt: "2021-11-13T13:08:54.457Z",
                                __v: 0,
                              },
                              {
                                _id: "618fb99bc8ba53856cbf0459",
                                type: "ROAD_SAFETY",
                                order: 1,
                                createdAt: "2021-11-13T13:11:55.724Z",
                                updatedAt: "2021-11-13T13:11:55.724Z",
                                __v: 0,
                              },
                            ],
                            isDeleted: false,
                            status: "Do not Disturb",
                            priority: 0,
                            logo: "https://wisecaller-images.s3.us-east-1.amazonaws.com/status_images/1637230992831.png",
                            createdAt: "2021-11-17T13:14:42.642Z",
                            updatedAt: "2021-11-18T10:27:23.281Z",
                            __v: 0,
                          },
                        },
                        createdAt: "2021-11-17T15:51:21.576Z",
                        updatedAt: "2021-11-25T12:33:52.558Z",
                        __v: 0,
                        is_new_user: false,
                      },
                      contact: null,
                      loggedin_user: "6195f3e40ba05e4c53063e94",
                      createdAt: "2021-11-27T00:16:04.520Z",
                      updatedAt: "2021-11-27T00:16:04.520Z",
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
                phone: "+918980514085",
                name: "abcs",
                date_time: "2021-11-13 11:00:00",
                type: "Incoming",
                simId: "sim2",
                caller_history_id: "4",
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
                  $ref: "#/components/schemas/m20010",
                },
                example: {
                  success: true,
                  message: "success",
                  callLogs: {
                    phone: "+918980514085",
                    name: "abcs",
                    date_time: "2021-11-13 11:00:00",
                    type: "Incoming",
                    simId: "sim2",
                    caller_history_id: "4",
                    callHistory: {
                      time: "2021-11-13 11:00:00",
                      type: "Incoming",
                      simId: "sim2",
                    },
                    date: "2021-11-13 11:00:00",
                    user: "6195f3e40ba05e4c53063e94",
                  },
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/call-service/api/v1/callhistory/delete/{id}": {
      delete: {
        tags: ["Call History"],
        summary: "delete records from call history",
        operationId: "deleterecordsfromcallhistory",
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
    "/call-service/api/v1/call-activity": {
      post: {
        tags: ["Call History"],
        summary: "activity of the calls",
        operationId: "call activity",
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/addnumberfromcallhistoryrequest",
              },
              example: {
                status: "busy",
                receiver: "626919b33999ad43b951ce09",
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
                  data: {
                    status: "busy",
                    receiver: "626919b33999ad43b951ce09",
                    user: "626919b33999ad43b951ce09",
                    caller: "626919b33999ad43b951ce09",
                    calledOn: "2022-05-28T00:40:11.003Z",
                  },
                },
              },
            },
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
                    contactId: 150,
                    first_name: "tushar",
                    last_name: "savaliya",
                    profile_image: null,
                    local_profile_image_path: "contacts/abc.png",
                    phones: [
                      {
                        ph_no: "+918849455045",
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
                ],
              },
              example: [
                {
                  contactId: 150,
                  first_name: "tushar",
                  last_name: "savaliya",
                  profile_image: null,
                  local_profile_image_path: "contacts/abc.png",
                  is_favourite: true,
                  is_blocked: false,
                  phones: [
                    {
                      ph_no: "+918849455045",
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
        parameters: [
          {
            in: "query",
            name: "limit",
            required: false,
            schema: {
              type: "number",
            },
          },
          {
            in: "query",
            name: "page",
            required: false,
            schema: {
              type: "number",
            },
          },
        ],
        responses: {
          "200": {
            description: "",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m20013",
                },
                example: {
                  success: true,
                  message: "contact list get successfully",
                  data: [
                    {
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
                    contactId: 150,
                    first_name: "tushar1",
                    last_name: "savaliya1",
                    profile_image: null,
                    local_profile_image_path: "contacts/abc.png",
                    phones: [
                      {
                        ph_no: "+918849455045",
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
                    is_deleted: false,
                  },
                  {
                    contactId: 151,
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
                    is_deleted: false,
                  },
                  {
                    contactId: 152,
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
                    is_deleted: false,
                  },
                ],
              },
              example: [
                {
                  contactId: 150,
                  first_name: "tushar1",
                  last_name: "savaliya1",
                  profile_image: null,
                  local_profile_image_path: "contacts/abc.png",
                  phones: [
                    {
                      ph_no: "+918849455045",
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
                  is_deleted: false,
                },
                {
                  contactId: 151,
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
                  is_deleted: false,
                },
                {
                  contactId: 152,
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
                  is_deleted: false,
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
                phone_number: "919854671230",
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
                  $ref: "#/components/schemas/m20014",
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
    "/auth-service/api/v1/user/search": {
      post: {
        tags: ["Auth service"],
        summary: "search in wiseccaller ",
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
            description: "OK",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m20015",
                },
                example: {
                  success: true,
                  message: "data get successful",
                  data: [
                    {
                      role: "USER",
                      devices: null,
                      isActive: true,
                      isDeleted: false,
                      status: null,
                      subStatus: null,
                      is_new_user: true,
                      _id: "6195f3e40ba05e4c53063e94",
                      modes: {
                        workLifeBalance: {
                          is_active: false,
                          data: null,
                        },
                        roadSafetyStatus: {
                          is_active: true,
                          devices: ["JBL Enduarance", "Boat Rokerz"],
                          data: {
                            selected_device: "Boat Rokerz",
                            display_to: "contacts",
                            auto_sms: false,
                            notes: {
                              is_custom: true,
                              text: "Not available",
                            },
                            status: {
                              user: null,
                              applicable_types: ["618fb99bc8ba53856cbf0459"],
                              isDeleted: false,
                              _id: "619b27747a4897f6abd7338b",
                              status: "Driving",
                              priority: 0,
                              logo: null,
                              createdAt: "2021-11-22T05:15:32.942Z",
                              updatedAt: "2021-11-22T05:15:32.942Z",
                              __v: 0,
                            },
                          },
                        },
                        syncCalender: {
                          calenders: null,
                        },
                      },
                      first_name: "firstName",
                      last_name: "lastName",
                      phone: "+919764569876",
                      secondary_no: "+918980514085",
                      profile_image: "profile_images/1637303316530.jpeg",
                      is_profile_from_social_media: "false",
                      media_profile_url: "",
                      phones: [
                        {
                          used_for_login: true,
                          _id: "6195f3e40ba05e4c53063e95",
                          no: "+919764569876",
                          type: "PRIMARY",
                        },
                        {
                          used_for_login: true,
                          _id: "619730890cd6d371f3aa2e6e",
                          no: "+918980514085",
                          type: "SECONDARY",
                        },
                      ],
                      createdAt: "2021-11-18T06:34:12.028Z",
                      updatedAt: "2021-11-24T08:14:00.851Z",
                      __v: 0,
                      user_status: {
                        name: "abc",
                        status: {
                          sub_status: {
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
                          _id: "6195004219517edbb9a32dde",
                          user: null,
                          applicable_types: [
                            "618fb8e614842f8284d028dd",
                            "618fb99bc8ba53856cbf0459",
                          ],
                          isDeleted: false,
                          status: "Do not Disturb",
                          priority: 0,
                          logo: "status_images/1637230992831.png",
                          createdAt: "2021-11-17T13:14:42.642Z",
                          updatedAt: "2021-11-18T10:27:23.281Z",
                          __v: 0,
                        },
                      },
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
    "/auth-service/api/v1/work-life-balance": {
      post: {
        tags: ["Auth service"],
        summary: "Work Life Balance",
        operationId: "WorkLifeBalance",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/WorkLifeBalanceRequest",
              },
              example: {
                days: [
                  {
                    monday: true,
                    tuesday: false,
                    wednesday: false,
                    thursday: true,
                    friday: false,
                    saturday: false,
                    sunday: false,
                  },
                ],
                start_time: "10:00AM",
                end_time: "03:00PM",
                status: "61a194a2d87d6100088f7a3f",
                sub_status: "61a19703d87d6100088f7a60",
                is_active: true,
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "",
            headers: {},
          },
        },
        deprecated: false,
      },
    },
    "/auth-service/api/v1/usage": {
      get: {
        tags: ["Auth service"],
        summary: "Usage",
        operationId: "Usage",
        parameters: [],
        requestBody: {
          description: "",
        },
        responses: {
          200: {
            description: "",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
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
    "/contact-sync-service/api/v1/contact/callback-request": {
      post: {
        tags: ["Contact sync"],
        summary: "Call back request",
        operationId: "CallBackRequest",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AddBlockcontactRequest",
              },
              example: {
                message: "Call me back",
                to: "+918849455048",
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
                status: "Busy",
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
                  $ref: "#/components/schemas/m20018",
                },
                example: {
                  success: true,
                  message: "global status get successfully",
                  data: [
                    {
                      _id: "61a190ae88e2950009a58a61",
                      type: "ROAD_SAFETY",
                      order: 1,
                      createdAt: "2021-11-27T01:58:06.318Z",
                      updatedAt: "2021-11-27T01:58:06.318Z",
                      __v: 0,
                      global_statuses: [
                        {
                          _id: "61a19522d87d6100088f7a45",
                          user: null,
                          applicable_types: ["61a190ae88e2950009a58a61"],
                          isDeleted: false,
                          status: "Driving",
                          priority: 0,
                          icon_style: "RED_CROSS",
                          logo: null,
                          createdAt: "2021-11-27T02:17:06.417Z",
                          updatedAt: "2021-11-27T02:17:06.417Z",
                          __v: 0,
                          sub_status: [],
                        },
                      ],
                    },
                    {
                      _id: "61a190cd88e2950009a58a64",
                      type: "GENERAL",
                      order: 2,
                      createdAt: "2021-11-27T01:58:37.370Z",
                      updatedAt: "2021-11-27T01:58:37.370Z",
                      __v: 0,
                      global_statuses: [
                        {
                          _id: "61a1944ed87d6100088f7a39",
                          user: null,
                          applicable_types: [
                            "61a190fb88e2950009a58a6a",
                            "61a190cd88e2950009a58a64",
                          ],
                          isDeleted: false,
                          status: "Urgent calls only",
                          priority: 0,
                          icon_style: "YELLOW_WARNING",
                          logo: null,
                          createdAt: "2021-11-27T02:13:34.159Z",
                          updatedAt: "2021-11-27T02:13:34.159Z",
                          __v: 0,
                          sub_status: [],
                        },
                        {
                          _id: "61a1946fd87d6100088f7a3c",
                          user: null,
                          applicable_types: [
                            "61a190fb88e2950009a58a6a",
                            "61a190cd88e2950009a58a64",
                          ],
                          isDeleted: false,
                          status: "Personal calls only",
                          priority: 0,
                          icon_style: "YELLOW_WARNING",
                          logo: null,
                          createdAt: "2021-11-27T02:14:07.653Z",
                          updatedAt: "2021-11-27T02:14:07.653Z",
                          __v: 0,
                          sub_status: [],
                        },
                        {
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
                          sub_status: [
                            {
                              user: null,
                              isDeleted: false,
                              _id: "61a196d7d87d6100088f7a57",
                              status: "Driving",
                              parentId: "61a194a2d87d6100088f7a3f",
                              icon_style: "RED_CROSS",
                              logo: null,
                              createdAt: "2021-11-27T02:24:23.595Z",
                              updatedAt: "2021-11-27T02:24:23.595Z",
                              __v: 0,
                            },
                            {
                              user: null,
                              isDeleted: false,
                              _id: "61a196e4d87d6100088f7a5a",
                              status: "In a meeting",
                              parentId: "61a194a2d87d6100088f7a3f",
                              icon_style: "RED_CROSS",
                              logo: null,
                              createdAt: "2021-11-27T02:24:36.782Z",
                              updatedAt: "2021-11-27T02:24:36.782Z",
                              __v: 0,
                            },
                            {
                              user: null,
                              isDeleted: false,
                              _id: "61a196f9d87d6100088f7a5d",
                              status: "Biking",
                              parentId: "61a194a2d87d6100088f7a3f",
                              icon_style: "RED_CROSS",
                              logo: null,
                              createdAt: "2021-11-27T02:24:57.187Z",
                              updatedAt: "2021-11-27T02:24:57.187Z",
                              __v: 0,
                            },
                            {
                              user: null,
                              isDeleted: false,
                              _id: "61a19703d87d6100088f7a60",
                              status: "Out of office",
                              parentId: "61a194a2d87d6100088f7a3f",
                              icon_style: "RED_CROSS",
                              logo: null,
                              createdAt: "2021-11-27T02:25:07.358Z",
                              updatedAt: "2021-11-27T02:25:07.358Z",
                              __v: 0,
                            },
                          ],
                        },
                        {
                          _id: "61a194e4d87d6100088f7a42",
                          user: null,
                          applicable_types: [
                            "61a190cd88e2950009a58a64",
                            "61a190e988e2950009a58a67",
                          ],
                          isDeleted: false,
                          status: "In a meeting",
                          priority: 0,
                          icon_style: "RED_CROSS",
                          logo: null,
                          createdAt: "2021-11-27T02:16:04.265Z",
                          updatedAt: "2021-11-27T02:16:04.265Z",
                          __v: 0,
                          sub_status: [],
                        },
                        {
                          _id: "61a19547d87d6100088f7a48",
                          user: null,
                          applicable_types: ["61a190cd88e2950009a58a64"],
                          isDeleted: false,
                          status: "Official calls only",
                          priority: 0,
                          icon_style: "YELLOW_WARNING",
                          logo: null,
                          createdAt: "2021-11-27T02:17:43.392Z",
                          updatedAt: "2021-11-27T02:17:43.392Z",
                          __v: 0,
                          sub_status: [],
                        },
                      ],
                    },
                    {
                      _id: "61a190e988e2950009a58a67",
                      type: "CALANDER_STATUS",
                      order: 3,
                      createdAt: "2021-11-27T01:59:05.773Z",
                      updatedAt: "2021-11-27T01:59:05.773Z",
                      __v: 0,
                      global_statuses: [
                        {
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
                          sub_status: [
                            {
                              user: null,
                              isDeleted: false,
                              _id: "61a196d7d87d6100088f7a57",
                              status: "Driving",
                              parentId: "61a194a2d87d6100088f7a3f",
                              icon_style: "RED_CROSS",
                              logo: null,
                              createdAt: "2021-11-27T02:24:23.595Z",
                              updatedAt: "2021-11-27T02:24:23.595Z",
                              __v: 0,
                            },
                            {
                              user: null,
                              isDeleted: false,
                              _id: "61a196e4d87d6100088f7a5a",
                              status: "In a meeting",
                              parentId: "61a194a2d87d6100088f7a3f",
                              icon_style: "RED_CROSS",
                              logo: null,
                              createdAt: "2021-11-27T02:24:36.782Z",
                              updatedAt: "2021-11-27T02:24:36.782Z",
                              __v: 0,
                            },
                            {
                              user: null,
                              isDeleted: false,
                              _id: "61a196f9d87d6100088f7a5d",
                              status: "Biking",
                              parentId: "61a194a2d87d6100088f7a3f",
                              icon_style: "RED_CROSS",
                              logo: null,
                              createdAt: "2021-11-27T02:24:57.187Z",
                              updatedAt: "2021-11-27T02:24:57.187Z",
                              __v: 0,
                            },
                            {
                              user: null,
                              isDeleted: false,
                              _id: "61a19703d87d6100088f7a60",
                              status: "Out of office",
                              parentId: "61a194a2d87d6100088f7a3f",
                              icon_style: "RED_CROSS",
                              logo: null,
                              createdAt: "2021-11-27T02:25:07.358Z",
                              updatedAt: "2021-11-27T02:25:07.358Z",
                              __v: 0,
                            },
                          ],
                        },
                        {
                          _id: "61a194e4d87d6100088f7a42",
                          user: null,
                          applicable_types: [
                            "61a190cd88e2950009a58a64",
                            "61a190e988e2950009a58a67",
                          ],
                          isDeleted: false,
                          status: "In a meeting",
                          priority: 0,
                          icon_style: "RED_CROSS",
                          logo: null,
                          createdAt: "2021-11-27T02:16:04.265Z",
                          updatedAt: "2021-11-27T02:16:04.265Z",
                          __v: 0,
                          sub_status: [],
                        },
                      ],
                    },
                    {
                      _id: "61a190fb88e2950009a58a6a",
                      type: "WORK_LIFE_BALANCE",
                      order: 4,
                      createdAt: "2021-11-27T01:59:23.093Z",
                      updatedAt: "2021-11-27T01:59:23.093Z",
                      __v: 0,
                      global_statuses: [
                        {
                          _id: "61a1944ed87d6100088f7a39",
                          user: null,
                          applicable_types: [
                            "61a190fb88e2950009a58a6a",
                            "61a190cd88e2950009a58a64",
                          ],
                          isDeleted: false,
                          status: "Urgent calls only",
                          priority: 0,
                          icon_style: "YELLOW_WARNING",
                          logo: null,
                          createdAt: "2021-11-27T02:13:34.159Z",
                          updatedAt: "2021-11-27T02:13:34.159Z",
                          __v: 0,
                          sub_status: [],
                        },
                        {
                          _id: "61a1946fd87d6100088f7a3c",
                          user: null,
                          applicable_types: [
                            "61a190fb88e2950009a58a6a",
                            "61a190cd88e2950009a58a64",
                          ],
                          isDeleted: false,
                          status: "Personal calls only",
                          priority: 0,
                          icon_style: "YELLOW_WARNING",
                          logo: null,
                          createdAt: "2021-11-27T02:14:07.653Z",
                          updatedAt: "2021-11-27T02:14:07.653Z",
                          __v: 0,
                          sub_status: [],
                        },
                        {
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
                          sub_status: [
                            {
                              user: null,
                              isDeleted: false,
                              _id: "61a196d7d87d6100088f7a57",
                              status: "Driving",
                              parentId: "61a194a2d87d6100088f7a3f",
                              icon_style: "RED_CROSS",
                              logo: null,
                              createdAt: "2021-11-27T02:24:23.595Z",
                              updatedAt: "2021-11-27T02:24:23.595Z",
                              __v: 0,
                            },
                            {
                              user: null,
                              isDeleted: false,
                              _id: "61a196e4d87d6100088f7a5a",
                              status: "In a meeting",
                              parentId: "61a194a2d87d6100088f7a3f",
                              icon_style: "RED_CROSS",
                              logo: null,
                              createdAt: "2021-11-27T02:24:36.782Z",
                              updatedAt: "2021-11-27T02:24:36.782Z",
                              __v: 0,
                            },
                            {
                              user: null,
                              isDeleted: false,
                              _id: "61a196f9d87d6100088f7a5d",
                              status: "Biking",
                              parentId: "61a194a2d87d6100088f7a3f",
                              icon_style: "RED_CROSS",
                              logo: null,
                              createdAt: "2021-11-27T02:24:57.187Z",
                              updatedAt: "2021-11-27T02:24:57.187Z",
                              __v: 0,
                            },
                            {
                              user: null,
                              isDeleted: false,
                              _id: "61a19703d87d6100088f7a60",
                              status: "Out of office",
                              parentId: "61a194a2d87d6100088f7a3f",
                              icon_style: "RED_CROSS",
                              logo: null,
                              createdAt: "2021-11-27T02:25:07.358Z",
                              updatedAt: "2021-11-27T02:25:07.358Z",
                              __v: 0,
                            },
                          ],
                        },
                      ],
                    },
                    {
                      _id: "61a1910988e2950009a58a6d",
                      type: "AUTO_STATUS",
                      order: 5,
                      createdAt: "2021-11-27T01:59:37.293Z",
                      updatedAt: "2021-11-27T01:59:37.293Z",
                      __v: 0,
                      global_statuses: [
                        {
                          _id: "61a19587d87d6100088f7a4b",
                          user: null,
                          applicable_types: ["61a1910988e2950009a58a6d"],
                          isDeleted: false,
                          status: "DND",
                          priority: 1,
                          icon_style: "RED_CROSS",
                          logo: null,
                          createdAt: "2021-11-27T02:18:47.812Z",
                          updatedAt: "2021-11-27T02:18:47.812Z",
                          __v: 0,
                          sub_status: [],
                        },
                        {
                          _id: "61a1959dd87d6100088f7a4e",
                          user: null,
                          applicable_types: ["61a1910988e2950009a58a6d"],
                          isDeleted: false,
                          status: "On a call",
                          priority: 2,
                          icon_style: "YELLOW_WARNING",
                          logo: null,
                          createdAt: "2021-11-27T02:19:09.207Z",
                          updatedAt: "2021-11-27T02:19:09.207Z",
                          __v: 0,
                          sub_status: [],
                        },
                        {
                          _id: "61a195b3d87d6100088f7a51",
                          user: null,
                          applicable_types: ["61a1910988e2950009a58a6d"],
                          isDeleted: false,
                          status: "Silent",
                          priority: 3,
                          icon_style: "YELLOW_WARNING",
                          logo: null,
                          createdAt: "2021-11-27T02:19:31.424Z",
                          updatedAt: "2021-11-27T02:19:31.424Z",
                          __v: 0,
                          sub_status: [],
                        },
                        {
                          _id: "61a195c7d87d6100088f7a54",
                          user: null,
                          applicable_types: ["61a1910988e2950009a58a6d"],
                          isDeleted: false,
                          status: "Switch off",
                          priority: 4,
                          icon_style: "RED_CROSS",
                          logo: null,
                          createdAt: "2021-11-27T02:19:51.088Z",
                          updatedAt: "2021-11-27T02:19:51.088Z",
                          __v: 0,
                          sub_status: [],
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
    "/status-service/api/v1/global-status/update/{id}": {
      put: {
        tags: ["Status"],
        summary: "update Global status using id",
        operationId: "updateGlobalstatususingid",
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
            "application/json": {
              encoding: {},
              schema: {
                required: ["status", "logo"],
                type: "object",
                properties: {
                  status: {
                    type: "string",
                  },
                  icon_style: {
                    type: "string",
                  },
                },
                example: {
                  status: "Busy",
                  priority: 0,
                  icon_style: "red_cross",
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
                  $ref: "#/components/schemas/m20019",
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
    "/status-service/api/v1/global-status/delete/{id}": {
      delete: {
        tags: ["Status"],
        summary: "Delete global status",
        operationId: "Deleteglobalstatus",
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
                  $ref: "#/components/schemas/m20021",
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
            "application/json": {
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
    "/status-service/api/v1/global-status/sub-update/{id}": {
      put: {
        tags: ["Status"],
        summary: "update sub-status into Global status",
        operationId: "updatesub-statusintoGlobalstatus",
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
            "application/json": {
              encoding: {},
              schema: {
                required: ["status", "logo", "parentId"],
                type: "object",
                properties: {
                  status: {
                    type: "string",
                    example: "DND11111",
                  },
                  parentId: {
                    type: "string",
                    example: "6195004219517edbb9a32dde",
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
                  $ref: "#/components/schemas/m20023",
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
    "/status-service/api/v1/global-status/sub-delete/{id}": {
      delete: {
        tags: ["Status"],
        summary: "Delete sub-status in Global status",
        operationId: "Deletesub-statusinGlobalstatus",
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
                  $ref: "#/components/schemas/m20024",
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
                _id: "619e258c5be4d7298bc74696",
                text: "I am driving, please call me later",
                type: "ROAD SAFETY",
                __v: 0,
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
            style: "form",
            explode: true,
            schema: {
              type: "string",
              example: "ROAD SAFETY",
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
    "/status-service/api/v1/notes/{id}/details": {
      get: {
        tags: ["Status"],
        summary: "Notes Details",
        operationId: "NotesDetails",
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
    "/status-service/api/v1/notes/{id}/update": {
      put: {
        tags: ["Status"],
        summary: "Notes Update",
        operationId: "NotesUpdate",
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
                $ref: "#/components/schemas/NotesUpdateRequest",
              },
              example: {
                text: "I am driving, please call me later",
                type: "ROAD SAFETY",
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
    "/status-service/api/v1/notes/{id}/remove": {
      delete: {
        tags: ["Status"],
        summary: "Notes Delete",
        operationId: "NotesDelete",
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
    "/status-service/api/v1/global-type/update/{id": {
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
                  $ref: "#/components/schemas/m20027",
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
                    start_date: "10/08/2021 10:00 AM",
                    end_date: "10/20/2021 10:00 AM",
                    is_allday_status: true,
                    is_repeat: true,
                    RRULE: "is_repeat",
                    time_zone: "IN/PST etc..",
                    status: "61670b887a7764f6a360db28",
                    substatus: null,
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
                  start_date: "10/08/2021 10:00 AM",
                  end_date: "10/20/2021 10:00 AM",
                  is_allday_status: true,
                  is_repeat: true,
                  RRULE: "is_repeat",
                  time_zone: "IN/PST etc..",
                  status: "61670b887a7764f6a360db28",
                  substatus: null,
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
                    custom_name: "abc",
                    start_date: "10/08/2021 10:00 AM",
                    end_date: "10/20/2021 10:00 AM",
                    is_allday_status: true,
                    is_repeat: true,
                    RRULE: "rrule format if is_repeat is true",
                    time_zone: "IN/PST etc..",
                    status: "61670b887a7764f6a360db28",
                    substatus: null,
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
                    substatus: null,
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
                    substatus: null,
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
                  Excluded_dates: ["11/15/2021", "11/23/2021"],
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
            in: "query",
            name: "limit",
            required: false,
            schema: {
              type: "number",
            },
          },
          {
            in: "query",
            name: "page",
            required: false,
            schema: {
              type: "number",
            },
          },
          {
            in: "query",
            name: "timestamp",
            required: false,
            schema: {
              type: "string",
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
                  $ref: "#/components/schemas/m20031",
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
    "/status-service/api/v1/custom-status/delete/{id}": {
      delete: {
        tags: ["Custom Status"],
        summary: "Custom status delete",
        operationId: "Customstatusdelete",
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
    "/notification-service/api/v1/notification": {
      post: {
        tags: ["Notification Service"],
        summary: "Notification Service",
        operationId: "NotificationService",
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
                    type: "STATUS_UPDATE",
                    data: "",
                    title: "Test Notification",
                    text: "Hello Jignesh",
                    send_all: true,
                    to: ["+918849455048"],
                    user_id: "61a9b9fe5aa1030009fe973f",
                  },
                ],
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
    "/notification-service/api/v1/notification/custom-notification": {
      post: {
        tags: ["Notification Service"],
        summary: "Custom Notification",
        operationId: "CustomNotification",
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
                    title: "Test",
                    to: ["+918980514085", "+918849455048"],
                    send_all: false,
                    text: "Test",
                  },
                ],
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
    "/subscription-service/api/v1/coupon/update": {
      post: {
        tags: ["Subscription Service"],
        summary: "Update",
        operationId: "Update",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UpdateRequest",
              },
              example: {
                coupon_code: "NEW_COUPON-1",
                type: "CASH_DISCOUNT",
                expires_at: "2021-12-19T06:32:35.864Z",
                price: 10,
                discount_price: 10,
                can_use_for: 10,
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/subscription-service/api/v1/coupon": {
      get: {
        tags: ["Subscription Service"],
        summary: "Get All Coupons",
        operationId: "GetAllCoupons",
        parameters: [],
        responses: {
          "200": {
            description: "",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  data: [
                    {
                      _id: "61c2a600f01b8beeb2c45435",
                      coupon_code: "NEW_COUPON",
                      can_use_for: 10,
                      createdAt: "2021-12-22T04:13:51.917Z",
                      discount_price: 10,
                      expires_at: "2021-12-19T06:32:35.864Z",
                      organization: "61a8fa3dcc4e890009383b80",
                      price: 10,
                      subscription: "61c2a5c6f01b8beeb2c45420",
                      type: "CASH_DISCOUNT",
                      updatedAt: "2021-12-22T04:13:51.917Z",
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
    "/subscription-service/api/v1/coupon/bulk-coupon-create": {
      post: {
        tags: ["Subscription Service"],
        summary: "Bulk Coupon Create",
        operationId: "BulkCouponCreate",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/BulkCouponCreateRequest",
                },
                description: "",
                example: [
                  {
                    coupon_code: "NEW_COUPON",
                    type: "CASH_DISCOUNT",
                    expires_at: "2021-12-19T06:32:35.864Z",
                    price: 10,
                    discount_price: 10,
                    can_use_for: 10,
                    subscription: "",
                  },
                ],
              },
              example: [
                {
                  coupon_code: "NEW_COUPON",
                  type: "CASH_DISCOUNT",
                  expires_at: "2021-12-19T06:32:35.864Z",
                  price: 10,
                  discount_price: 10,
                  can_use_for: 10,
                  subscription: "",
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
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  data: [
                    {
                      _id: "61c2a600f01b8beeb2c45435",
                      coupon_code: "NEW_COUPON",
                      can_use_for: 10,
                      createdAt: "2021-12-22T04:13:51.917Z",
                      discount_price: 10,
                      expires_at: "2021-12-19T06:32:35.864Z",
                      organization: "61a8fa3dcc4e890009383b80",
                      price: 10,
                      subscription: "61c2a5c6f01b8beeb2c45420",
                      type: "CASH_DISCOUNT",
                      updatedAt: "2021-12-22T04:13:51.917Z",
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
    "/subscription-service/api/v1/coupon/redeem-coupon": {
      post: {
        tags: ["Subscription Service"],
        summary: "Redeem Coupon Code",
        operationId: "RedeemCouponCode",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/RedeemCouponCodeRequest",
              },
              example: {
                coupon_code: "NEW_COUPON",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  data: {
                    _id: "61c2a600f01b8beeb2c45435",
                    coupon_code: "NEW_COUPON",
                    can_use_for: 10,
                    createdAt: "2021-12-22T04:13:51.917Z",
                    discount_price: 10,
                    expires_at: "2021-12-19T06:32:35.864Z",
                    organization: "61a8fa3dcc4e890009383b80",
                    price: 10,
                    subscription: "61c2a5c6f01b8beeb2c45420",
                    type: "CASH_DISCOUNT",
                    updatedAt: "2021-12-22T04:13:51.917Z",
                  },
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/subscription-service/api/v1/subscription/update": {
      post: {
        tags: ["Subscription Service"],
        summary: "New Subscription",
        operationId: "NewSubscription",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/NewSubscriptionRequest",
              },
              example: {
                title: "New Subscription",
                original_price: 10,
                current_price: 9,
                min_quantity_price: 0,
                features: [
                  {
                    feature: "AD_FREE",
                    text: "Enjoy Ad free experience",
                  },
                  {
                    feature: "CALENDAR_SYNC",
                    text: "Attend your meetings without worrying about your status",
                  },
                ],
                gst_percentage: 18,
                cess_percentage: 1,
                type: "USER",
                duration: 12,
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/subscription-service/api/v1/subscription": {
      get: {
        tags: ["Subscription Service"],
        summary: "Get All Subscription",
        operationId: "GetAllSubscription",
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
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  data: [
                    {
                      _id: "61c2b5acf01b8beeb2c45936",
                      title: "New Subscription",
                      type: "USER",
                      __v: 0,
                      cess_percentage: 1,
                      createdAt: "2021-12-22T05:20:44.352Z",
                      current_price: 9,
                      duration: 12,
                      features: [
                        {
                          feature: "AD_FREE",
                          text: "Enjoy Ad free experience",
                        },
                        {
                          feature: "CALENDAR_SYNC",
                          text: "Attend your meetings without worrying about your status",
                        },
                      ],
                      gst_percentage: 18,
                      min_quantity_price: 0,
                      original_price: 10,
                      updatedAt: "2021-12-22T05:20:44.352Z",
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
    "/subscription-service/api/v1/user-subscription/revoke": {
      post: {
        tags: ["Subscription Service"],
        summary: "Revoke Subscription",
        operationId: "RevokeSubscription",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {},
              example: {
                reason: "Revoke Subscription",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/subscription-service/api/v1/payment/order": {
      post: {
        tags: ["Subscription Service"],
        summary: "Order",
        operationId: "Order",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {},
              example: {
                amount: 10,
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  data: {
                    id: "order_IaSEPVXUKBGxx2",
                    entity: "order",
                    amount: 1000,
                    amount_paid: 0,
                    amount_due: 1000,
                    currency: "INR",
                    receipt: "2021-12-22T08:27:04.765Z",
                    offer_id: null,
                    status: "created",
                    attempts: 0,
                    notes: [],
                    created_at: 1640161625,
                  },
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/subscription-service/api/v1/payment": {
      post: {
        tags: ["Subscription Service"],
        summary: "Payment",
        operationId: "Payment",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {},
              example: {
                transactionId: "order_IaPz2mLsDvQl6F",
                subscription: "61c2b605f01b8beeb2c45962",
                amount: "10",
                paymentFor: "Subscrition",
                status: "SUCCESS",
                mode: "ONLINE",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  data: {
                    _id: "61c2c7d5f01b8beeb2c46042",
                    transactionId: "order_IaPz2mLsDvQl6F",
                    user: "61b6e4f05ca721a7e2913b01",
                    __v: 0,
                    amount: 10,
                    createdAt: "2021-12-22T06:38:13.226Z",
                    mode: "ONLINE",
                    paymentFor: "Subscrition",
                    payment_date: "2021-12-22T08:28:10.505Z",
                    status: "SUCCESS",
                    subscription: "61c2b605f01b8beeb2c45962",
                    updatedAt: "2021-12-22T08:28:10.508Z",
                  },
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/subscription-service/api/v1/organization-payment": {
      post: {
        tags: ["Subscription Service"],
        summary: "Organization Payment",
        operationId: "OrganizationPayment",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {},
              example: {
                transactionId: "order_IaPz2mLsDvQl6F",
                subscription: "61c2b605f01b8beeb2c45962",
                amount: "10",
                paymentFor: "Organization Coupon",
                status: "SUCCESS",
                mode: "ONLINE",
                quantity: 50,
                coupon_expiry_date: "2021-12-22 04:13:51.917Z",
                coupon_code: "MY_CHECK_50",
              },
            },
          },
          required: true,
        },
        responses: {
          "200": {
            description: "",
            headers: {},
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/m2001",
                },
                example: {
                  success: true,
                  data: {
                    _id: "61c2c7d5f01b8beeb2c46042",
                    transactionId: "order_IaPz2mLsDvQl6F",
                    user: "61b6e4f05ca721a7e2913b01",
                    __v: 0,
                    amount: 10,
                    createdAt: "2021-12-22T06:38:13.226Z",
                    mode: "ONLINE",
                    paymentFor: "Subscrition",
                    payment_date: "2021-12-22T08:28:10.505Z",
                    status: "SUCCESS",
                    subscription: "61c2b605f01b8beeb2c45962",
                    updatedAt: "2021-12-22T08:28:10.508Z",
                  },
                },
              },
            },
          },
        },
        deprecated: false,
      },
    },
    "/organization-service/api/v1/auth/register": {
      post: {
        tags: ["Organization Service"],
        summary: "Create Organazation",
        operationId: "CreateOrganazation",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CreateOrganazationRequest",
              },
              example: {
                name: "Tushar",
                email: "savaliyatushar2197@gmail.com",
                website: "www.aaa.com",
                phone_no: "+918980514085",
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
    "/organization-service/api/v1/auth/login": {
      post: {
        tags: ["Organization Service"],
        summary: "Organazation Login",
        operationId: "OrganazationLogin",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/OrganazationLoginRequest",
              },
              example: {
                phone_no: "+918980514085",
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
    "/organization-service/api/v1/auth/verify": {
      post: {
        tags: ["Organization Service"],
        summary: "Verify OTP for Organazation",
        operationId: "VerifyOTPforOrganazation",
        parameters: [],
        requestBody: {
          description: "",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/VerifyOTPforOrganazationRequest",
              },
              example: {
                phone_no: "+918980514085",
                otp: 3381,
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
          mobileNo: "+911234567890",
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
          mobileNo: "+919764569876",
          otp: 4917,
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
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk0ZmU5NDhmMTNhMWQ1OWQxMWRmMjIiLCJpYXQiOjE2MzcyMjU0NTQsImV4cCI6MTYzNzIzMjY1NH0.zjYvaafmauZLkdBHLmu6IdQC7JFWA1RY7twmaMDEe-s",
            refreshToken:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk0ZmU5NDhmMTNhMWQ1OWQxMWRmMjIiLCJpYXQiOjE2MzcyMjU0NTQsImV4cCI6MTY2ODc2MTQ1NH0.qgEldemvwl3UiXIljRJjGkpMJL_jrNfa1csaqh60cYA",
            token_expires_at: "2021-11-18T20:50:54.720Z",
            is_new_user: true,
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
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk0ZmU5NDhmMTNhMWQ1OWQxMWRmMjIiLCJpYXQiOjE2MzcyMjU0NTQsImV4cCI6MTYzNzIzMjY1NH0.zjYvaafmauZLkdBHLmu6IdQC7JFWA1RY7twmaMDEe-s",
          refreshToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk0ZmU5NDhmMTNhMWQ1OWQxMWRmMjIiLCJpYXQiOjE2MzcyMjU0NTQsImV4cCI6MTY2ODc2MTQ1NH0.qgEldemvwl3UiXIljRJjGkpMJL_jrNfa1csaqh60cYA",
          token_expires_at: "2021-11-18T20:50:54.720Z",
          is_new_user: true,
        },
      },
      m200: {
        title: "m200",
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
            $ref: "#/components/schemas/Data1",
          },
        },
        example: {
          sucess: true,
          message: "User Profile details get successfully",
          data: {
            _id: "6194fe948f13a1d59d11df22",
            first_name: " tushar",
            last_name: "savaliya",
            phone: "+918849455045",
            secondary_no: "+918980514085",
            profile_image: null,
            is_profile_from_social_media: " false",
            media_profile_url: " ",
            role: "ADMIN",
            devices: null,
            isActive: true,
            isDeleted: false,
            phones: [
              {
                used_for_login: true,
                _id: "6194fe948f13a1d59d11df23",
                no: "+918849455045",
                type: "PRIMARY",
              },
              {
                used_for_login: true,
                _id: "6194fedc8f13a1d59d11df2c",
                no: "+918980514085",
                type: "SECONDARY",
              },
            ],
            createdAt: "2021-11-17T13:07:32.717Z",
            updatedAt: "2021-11-18T08:50:54.681Z",
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
      Data1: {
        title: "Data1",
        required: [
          "_id",
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
          "phones",
          "createdAt",
          "updatedAt",
          "__v",
          "user_status",
        ],
        type: "object",
        properties: {
          _id: {
            type: "string",
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
          _id: "6194fe948f13a1d59d11df22",
          first_name: " tushar",
          last_name: "savaliya",
          phone: "+918849455045",
          secondary_no: "+918980514085",
          profile_image: null,
          is_profile_from_social_media: " false",
          media_profile_url: " ",
          role: "ADMIN",
          devices: null,
          isActive: true,
          isDeleted: false,
          phones: [
            {
              used_for_login: true,
              _id: "6194fe948f13a1d59d11df23",
              no: "+918849455045",
              type: "PRIMARY",
            },
            {
              used_for_login: true,
              _id: "6194fedc8f13a1d59d11df2c",
              no: "+918980514085",
              type: "SECONDARY",
            },
          ],
          createdAt: "2021-11-17T13:07:32.717Z",
          updatedAt: "2021-11-18T08:50:54.681Z",
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
          _id: "6194fe948f13a1d59d11df23",
          no: "+918849455045",
          type: "PRIMARY",
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
            $ref: "#/components/schemas/Status",
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
      Status: {
        title: "Status",
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
            $ref: "#/components/schemas/SubStatus",
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
            type: "file",
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
      SubStatus: {
        title: "SubStatus",
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
            type: "file",
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
          rule:{
            type:"string",
          },
          end_date:{
            type:"string",
          },
          notes: {
            $ref: "#/components/schemas/Notes",
          },
        },
        example: {
          customStatusId: "61950368448ab7e5f7775ce0",
          statusId: "6195004219517edbb9a32dde",
          subStatusId: "6195023525c96ee17567830d",
          rule:"the rulname coming in from a scheduled process",
          end_date:"the status end date, either from scheduled process or calculated",
          notes: {
            id: "619e258c5be4d7298bc74696",
            is_custom: false,
            text: "",
          },
          is_deleted: false,
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
          id: "619e258c5be4d7298bc74696",
          is_custom: false,
          text: "",
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
            $ref: "#/components/schemas/Modes",
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
      Modes: {
        title: "Modes",
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
            $ref: "#/components/schemas/SyncCalender",
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
      SyncCalender: {
        title: "SyncCalender",
        required: ["calenders"],
        type: "object",
        properties: {
          calenders: {
            type: "string",
            nullable: true,
          },
        },
        example: {
          calenders: null,
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
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk3ZTE2OGU3MTJhNWQyMDI3ZTkwYzEiLCJpYXQiOjE2Mzc4Mzk5MTksImV4cCI6MTYzNzg0NDkxOX0.ly5zRRfxeIaUAzRYKSMyK0VAW-10fSSLUfAIzEyDNzA",
          refreshToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk3ZTE2OGU3MTJhNWQyMDI3ZTkwYzEiLCJpYXQiOjE2Mzc4Mzk5MTksImV4cCI6MTYzNzg0MjMxOX0.W9ItR2QwrzxN5va9OTCTAma6RcxIMfyhmwD3IvzzEGw",
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
      SyncCalenderRequest: {
        title: "SyncCalenderRequest",
        required: [],
        type: "object",
        properties: {
          calenders: "array",
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
      AddcallHistoryRequest: {
        title: "AddcallHistoryRequest",
        required: ["phone", "name", "callHistory", "date"],
        type: "object",
        properties: {
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
        },
        example: {
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
        },
      },
      SyncCallHistoryRequest: {
        title: "SyncCallHistoryRequest",
        required: ["call_history_id", "phone", "name", "type"],
        type: "object",
        properties: {
          phone: {
            type: "string",
          },
          name: {
            type: "string",
          },
          call_history_id: {
            type: "number",
          },
          time: {
            type: "string",
          },
          call_type: {
            type: "string",
          },
          sim: {
            type: "string",
          },
          is_deleted: {
            type: "boolean",
          },
        },
        example: {
          call_history_id: 1,
          phone: "+919714209234",
          name: "Jignesh Foon",
          time: "2021-12-13 11:00:00",
          call_type: "INCOMING",
          sim: "SIM-1",
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
      m2009: {
        title: "m2009",
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
              _id: "2021-11-14",
              list: [
                {
                  _id: "6196186a93f0d600093ed1f4",
                  wisecallerId: "6194fe948f13a1d59d11df22",
                  callerId: null,
                  contactId: "618fa6b12ac1e05fd9709daa",
                  phone: "+919496955716",
                  name: "abcs",
                  callHistory: [
                    {
                      simId: "sim1",
                      _id: "6196186a93f0d600093ed1f5",
                      time: "2021-12-12 11:00:00",
                      type: "Incoming",
                    },
                    {
                      simId: "sim2",
                      _id: "6196186a93f0d600093ed1f6",
                      time: "2021-12-12 11:00:00",
                      type: "Outgoing",
                    },
                  ],
                  date: "2021-11-14T10:20:22.000Z",
                  createdAt: "2021-11-18T09:10:02.543Z",
                  updatedAt: "2021-11-18T09:10:02.543Z",
                  __v: 0,
                  subStatus: [],
                  userContact: [],
                },
                {
                  _id: "6196186a93f0d600093ed1f9",
                  wisecallerId: "6194fe948f13a1d59d11df22",
                  callerId: null,
                  contactId: null,
                  phone: "+918989898989",
                  name: "abcs",
                  callHistory: [
                    {
                      simId: "sim1",
                      _id: "6196186a93f0d600093ed1fa",
                      time: "2021-12-12 11:00:00",
                      type: "Incoming",
                    },
                    {
                      simId: "sim2",
                      _id: "6196186a93f0d600093ed1fb",
                      time: "2021-12-12 11:00:00",
                      type: "Outgoing",
                    },
                  ],
                  date: "2021-11-14T10:20:22.000Z",
                  createdAt: "2021-11-18T09:10:02.550Z",
                  updatedAt: "2021-11-18T09:10:02.550Z",
                  __v: 0,
                  subStatus: [],
                  userContact: [],
                },
              ],
            },
            {
              _id: "2021-11-13",
              list: [
                {
                  _id: "6196186a93f0d600093ed1ef",
                  wisecallerId: "6194fe948f13a1d59d11df22",
                  callerId: null,
                  contactId: "618fa6b02ac1e05fd9709da0",
                  phone: "+919714209234",
                  name: "abc",
                  callHistory: [
                    {
                      simId: "sim1",
                      _id: "6196186a93f0d600093ed1f0",
                      time: "2021-12-12 11:00:00",
                      type: "Incoming",
                    },
                    {
                      simId: "sim2",
                      _id: "6196186a93f0d600093ed1f1",
                      time: "2021-12-12 11:00:00",
                      type: "Outgoing",
                    },
                  ],
                  date: "2021-11-13T10:20:22.000Z",
                  createdAt: "2021-11-18T09:10:02.516Z",
                  updatedAt: "2021-11-18T09:10:02.516Z",
                  __v: 0,
                  subStatus: [],
                  userContact: [],
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
          _id: "2021-11-14",
          list: [
            {
              _id: "6196186a93f0d600093ed1f4",
              wisecallerId: "6194fe948f13a1d59d11df22",
              callerId: null,
              contactId: "618fa6b12ac1e05fd9709daa",
              phone: "+919496955716",
              name: "abcs",
              callHistory: [
                {
                  simId: "sim1",
                  _id: "6196186a93f0d600093ed1f5",
                  time: "2021-12-12 11:00:00",
                  type: "Incoming",
                },
                {
                  simId: "sim2",
                  _id: "6196186a93f0d600093ed1f6",
                  time: "2021-12-12 11:00:00",
                  type: "Outgoing",
                },
              ],
              date: "2021-11-14T10:20:22.000Z",
              createdAt: "2021-11-18T09:10:02.543Z",
              updatedAt: "2021-11-18T09:10:02.543Z",
              __v: 0,
              subStatus: [],
              userContact: [],
            },
            {
              _id: "6196186a93f0d600093ed1f9",
              wisecallerId: "6194fe948f13a1d59d11df22",
              callerId: null,
              contactId: null,
              phone: "+918989898989",
              name: "abcs",
              callHistory: [
                {
                  simId: "sim1",
                  _id: "6196186a93f0d600093ed1fa",
                  time: "2021-12-12 11:00:00",
                  type: "Incoming",
                },
                {
                  simId: "sim2",
                  _id: "6196186a93f0d600093ed1fb",
                  time: "2021-12-12 11:00:00",
                  type: "Outgoing",
                },
              ],
              date: "2021-11-14T10:20:22.000Z",
              createdAt: "2021-11-18T09:10:02.550Z",
              updatedAt: "2021-11-18T09:10:02.550Z",
              __v: 0,
              subStatus: [],
              userContact: [],
            },
          ],
        },
      },
      List: {
        title: "List",
        required: [
          "_id",
          "wisecallerId",
          "callerId",
          "contactId",
          "phone",
          "name",
          "callHistory",
          "date",
          "createdAt",
          "updatedAt",
          "__v",
          "subStatus",
          "userContact",
        ],
        type: "object",
        properties: {
          _id: {
            type: "string",
          },
          wisecallerId: {
            type: "string",
          },
          callerId: {
            type: "string",
            nullable: true,
          },
          contactId: {
            type: "string",
            nullable: true,
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
              $ref: "#/components/schemas/CallHistory1",
            },
            description: "",
          },
          date: {
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
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
          userContact: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
        },
        example: {
          _id: "6196186a93f0d600093ed1f4",
          wisecallerId: "6194fe948f13a1d59d11df22",
          callerId: null,
          contactId: "618fa6b12ac1e05fd9709daa",
          phone: "+919496955716",
          name: "abcs",
          callHistory: [
            {
              simId: "sim1",
              _id: "6196186a93f0d600093ed1f5",
              time: "2021-12-12 11:00:00",
              type: "Incoming",
            },
            {
              simId: "sim2",
              _id: "6196186a93f0d600093ed1f6",
              time: "2021-12-12 11:00:00",
              type: "Outgoing",
            },
          ],
          date: "2021-11-14T10:20:22.000Z",
          createdAt: "2021-11-18T09:10:02.543Z",
          updatedAt: "2021-11-18T09:10:02.543Z",
          __v: 0,
          subStatus: [],
          userContact: [],
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
          _id: "6196186a93f0d600093ed1f5",
          time: "2021-12-12 11:00:00",
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
      m20010: {
        title: "m20010",
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
      contactsyncrequest: {
        title: "contactsyncrequest",
        required: [
          "contactId",
          "first_name",
          "last_name",
          "profile_image",
          "local_profile_image_path",
          "phones",
        ],
        type: "object",
        properties: {
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
        },
        example: {
          contactId: 150,
          first_name: "tushar",
          last_name: "savaliya",
          profile_image: null,
          local_profile_image_path: "contacts/abc.png",
          phones: [
            {
              ph_no: "+918849455045",
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
          ph_no: "+918849455045",
          type: "PRIMARY",
        },
      },
      m20013: {
        title: "m20013",
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
              _id: "619619e82c05f200095b25a9",
              profile_image: null,
              local_profile_image_path: "contacts/abc.png",
              customId: 152,
              first_name: "jignesh",
              last_name: "jignesh",
              phones: [
                {
                  wisecallerId: null,
                  _id: "619619e82c05f200095b25aa",
                  ph_no: "+919854671230",
                  type: "PRIMARY",
                },
                {
                  wisecallerId: null,
                  _id: "619619e82c05f200095b25ab",
                  ph_no: "+912567894130",
                  type: "SECONDARY",
                },
                {
                  wisecallerId: null,
                  _id: "619619e82c05f200095b25ac",
                  ph_no: "+919568732410",
                  type: "OFFICE",
                },
                {
                  wisecallerId: null,
                  _id: "619619e82c05f200095b25ad",
                  ph_no: "+919496782117",
                  type: "HOME",
                },
              ],
              user: "6194fe948f13a1d59d11df22",
              createdAt: "2021-11-18T09:16:24.247Z",
              updatedAt: "2021-11-18T09:16:24.247Z",
              __v: 0,
              wisecallerUser: [],
              userStatus: [],
              userSubStatus: [],
            },
            {
              _id: "619619e82c05f200095b259f",
              profile_image: null,
              local_profile_image_path: "contacts/abc.png",
              customId: 151,
              first_name: "mehul",
              last_name: "mehul",
              phones: [
                {
                  wisecallerId: null,
                  _id: "619619e82c05f200095b25a0",
                  ph_no: "+911237896540",
                  type: "PRIMARY",
                },
                {
                  wisecallerId: null,
                  _id: "619619e82c05f200095b25a1",
                  ph_no: "+919874563210",
                  type: "SECONDARY",
                },
                {
                  wisecallerId: null,
                  _id: "619619e82c05f200095b25a2",
                  ph_no: "+915478963210",
                  type: "OFFICE",
                },
                {
                  wisecallerId: null,
                  _id: "619619e82c05f200095b25a3",
                  ph_no: "+918756941230",
                  type: "HOME",
                },
              ],
              user: "6194fe948f13a1d59d11df22",
              createdAt: "2021-11-18T09:16:24.233Z",
              updatedAt: "2021-11-18T09:16:24.233Z",
              __v: 0,
              wisecallerUser: [],
              userStatus: [],
              userSubStatus: [],
            },
            {
              _id: "619619e82c05f200095b2595",
              profile_image: null,
              local_profile_image_path: "contacts/abc.png",
              customId: 150,
              first_name: "tushar",
              last_name: "savaliya",
              phones: [
                {
                  wisecallerId: null,
                  _id: "619619e82c05f200095b2596",
                  ph_no: "+911234567890",
                  type: "PRIMARY",
                },
                {
                  wisecallerId: null,
                  _id: "619619e82c05f200095b2597",
                  ph_no: "+913216549870",
                  type: "SECONDARY",
                },
                {
                  wisecallerId: null,
                  _id: "619619e82c05f200095b2598",
                  ph_no: "+911236547890",
                  type: "OFFICE",
                },
                {
                  wisecallerId: null,
                  _id: "619619e82c05f200095b2599",
                  ph_no: "+917412589630",
                  type: "HOME",
                },
              ],
              user: "6194fe948f13a1d59d11df22",
              createdAt: "2021-11-18T09:16:24.207Z",
              updatedAt: "2021-11-18T09:16:24.207Z",
              __v: 0,
              wisecallerUser: [],
              userStatus: [],
              userSubStatus: [],
            },
          ],
        },
      },
      Data5: {
        title: "Data5",
        required: [
          "_id",
          "profile_image",
          "local_profile_image_path",
          "customId",
          "first_name",
          "last_name",
          "phones",
          "user",
          "createdAt",
          "updatedAt",
          "__v",
          "wisecallerUser",
          "userStatus",
          "userSubStatus",
        ],
        type: "object",
        properties: {
          _id: {
            type: "string",
          },
          profile_image: {
            type: "string",
            nullable: true,
          },
          local_profile_image_path: {
            type: "string",
          },
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
          phones: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Phone3",
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
          wisecallerUser: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
          userStatus: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
          userSubStatus: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
        },
        example: {
          _id: "619619e82c05f200095b25a9",
          profile_image: null,
          local_profile_image_path: "contacts/abc.png",
          customId: 152,
          first_name: "jignesh",
          last_name: "jignesh",
          phones: [
            {
              wisecallerId: null,
              _id: "619619e82c05f200095b25aa",
              ph_no: "+919854671230",
              type: "PRIMARY",
            },
            {
              wisecallerId: null,
              _id: "619619e82c05f200095b25ab",
              ph_no: "+912567894130",
              type: "SECONDARY",
            },
            {
              wisecallerId: null,
              _id: "619619e82c05f200095b25ac",
              ph_no: "+919568732410",
              type: "OFFICE",
            },
            {
              wisecallerId: null,
              _id: "619619e82c05f200095b25ad",
              ph_no: "+919496782117",
              type: "HOME",
            },
          ],
          user: "6194fe948f13a1d59d11df22",
          createdAt: "2021-11-18T09:16:24.247Z",
          updatedAt: "2021-11-18T09:16:24.247Z",
          __v: 0,
          wisecallerUser: [],
          userStatus: [],
          userSubStatus: [],
        },
      },
      Phone3: {
        title: "Phone3",
        required: ["wisecallerId", "_id", "ph_no", "type"],
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
          wisecallerId: null,
          _id: "619619e82c05f200095b25aa",
          ph_no: "+919854671230",
          type: "PRIMARY",
        },
      },
      contactupdaterequest: {
        title: "contactupdaterequest",
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
              $ref: "#/components/schemas/Phone2",
            },
            description: "",
          },
          is_deleted: {
            type: "boolean",
          },
        },
        example: {
          contactId: 150,
          first_name: "tushar1",
          last_name: "savaliya1",
          profile_image: null,
          local_profile_image_path: "contacts/abc.png",
          phones: [
            {
              ph_no: "+918849455045",
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
          phone_number: "919854671230",
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
              $ref: "#/components/schemas/Phone5",
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
      Phone5: {
        title: "Phone5",
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
          _id: "619f612b86750c993ef9f8f0",
          ph_no: "+919854671230",
          type: "PRIMARY",
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
      m20015: {
        title: "m20015",
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
          message: "data get successful",
          data: [
            {
              role: "USER",
              devices: null,
              isActive: true,
              isDeleted: false,
              status: null,
              subStatus: null,
              is_new_user: true,
              _id: "6195f3e40ba05e4c53063e94",
              modes: {
                workLifeBalance: {
                  is_active: false,
                  data: null,
                },
                roadSafetyStatus: {
                  is_active: true,
                  devices: ["JBL Enduarance", "Boat Rokerz"],
                  data: {
                    selected_device: "Boat Rokerz",
                    display_to: "contacts",
                    auto_sms: false,
                    notes: {
                      is_custom: true,
                      text: "Not available",
                    },
                    status: {
                      user: null,
                      applicable_types: ["618fb99bc8ba53856cbf0459"],
                      isDeleted: false,
                      _id: "619b27747a4897f6abd7338b",
                      status: "Driving",
                      priority: 0,
                      logo: null,
                      createdAt: "2021-11-22T05:15:32.942Z",
                      updatedAt: "2021-11-22T05:15:32.942Z",
                      __v: 0,
                    },
                  },
                },
                syncCalender: {
                  calenders: null,
                },
              },
              first_name: "firstName",
              last_name: "lastName",
              phone: "+919764569876",
              secondary_no: "+918980514085",
              profile_image: "profile_images/1637303316530.jpeg",
              is_profile_from_social_media: "false",
              media_profile_url: "",
              phones: [
                {
                  used_for_login: true,
                  _id: "6195f3e40ba05e4c53063e95",
                  no: "+919764569876",
                  type: "PRIMARY",
                },
                {
                  used_for_login: true,
                  _id: "619730890cd6d371f3aa2e6e",
                  no: "+918980514085",
                  type: "SECONDARY",
                },
              ],
              createdAt: "2021-11-18T06:34:12.028Z",
              updatedAt: "2021-11-24T08:14:00.851Z",
              __v: 0,
              user_status: {
                name: "abc",
                status: {
                  sub_status: {
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
                  _id: "6195004219517edbb9a32dde",
                  user: null,
                  applicable_types: [
                    "618fb8e614842f8284d028dd",
                    "618fb99bc8ba53856cbf0459",
                  ],
                  isDeleted: false,
                  status: "Do not Disturb",
                  priority: 0,
                  logo: "status_images/1637230992831.png",
                  createdAt: "2021-11-17T13:14:42.642Z",
                  updatedAt: "2021-11-18T10:27:23.281Z",
                  __v: 0,
                },
              },
            },
          ],
        },
      },
      Data7: {
        title: "Data7",
        required: [
          "role",
          "devices",
          "isActive",
          "isDeleted",
          "status",
          "subStatus",
          "is_new_user",
          "_id",
          "modes",
          "first_name",
          "last_name",
          "phone",
          "secondary_no",
          "profile_image",
          "is_profile_from_social_media",
          "media_profile_url",
          "phones",
          "createdAt",
          "updatedAt",
          "__v",
          "user_status",
        ],
        type: "object",
        properties: {
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
          status: {
            type: "string",
            nullable: true,
          },
          subStatus: {
            type: "string",
            nullable: true,
          },
          is_new_user: {
            type: "boolean",
          },
          _id: {
            type: "string",
          },
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
          },
          is_profile_from_social_media: {
            type: "string",
          },
          media_profile_url: {
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
          role: "USER",
          devices: null,
          isActive: true,
          isDeleted: false,
          status: null,
          subStatus: null,
          is_new_user: true,
          _id: "6195f3e40ba05e4c53063e94",
          modes: {
            workLifeBalance: {
              is_active: false,
              data: null,
            },
            roadSafetyStatus: {
              is_active: true,
              devices: ["JBL Enduarance", "Boat Rokerz"],
              data: {
                selected_device: "Boat Rokerz",
                display_to: "contacts",
                auto_sms: false,
                notes: {
                  is_custom: true,
                  text: "Not available",
                },
                status: {
                  user: null,
                  applicable_types: ["618fb99bc8ba53856cbf0459"],
                  isDeleted: false,
                  _id: "619b27747a4897f6abd7338b",
                  status: "Driving",
                  priority: 0,
                  logo: null,
                  createdAt: "2021-11-22T05:15:32.942Z",
                  updatedAt: "2021-11-22T05:15:32.942Z",
                  __v: 0,
                },
              },
            },
            syncCalender: {
              calenders: null,
            },
          },
          first_name: "firstName",
          last_name: "lastName",
          phone: "+919764569876",
          secondary_no: "+918980514085",
          profile_image: "profile_images/1637303316530.jpeg",
          is_profile_from_social_media: "false",
          media_profile_url: "",
          phones: [
            {
              used_for_login: true,
              _id: "6195f3e40ba05e4c53063e95",
              no: "+919764569876",
              type: "PRIMARY",
            },
            {
              used_for_login: true,
              _id: "619730890cd6d371f3aa2e6e",
              no: "+918980514085",
              type: "SECONDARY",
            },
          ],
          createdAt: "2021-11-18T06:34:12.028Z",
          updatedAt: "2021-11-24T08:14:00.851Z",
          __v: 0,
          user_status: {
            name: "abc",
            status: {
              sub_status: {
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
              _id: "6195004219517edbb9a32dde",
              user: null,
              applicable_types: [
                "618fb8e614842f8284d028dd",
                "618fb99bc8ba53856cbf0459",
              ],
              isDeleted: false,
              status: "Do not Disturb",
              priority: 0,
              logo: "status_images/1637230992831.png",
              createdAt: "2021-11-17T13:14:42.642Z",
              updatedAt: "2021-11-18T10:27:23.281Z",
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
            $ref: "#/components/schemas/RoadSafetyStatus1",
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
            is_active: true,
            devices: ["JBL Enduarance", "Boat Rokerz"],
            data: {
              selected_device: "Boat Rokerz",
              display_to: "contacts",
              auto_sms: false,
              notes: {
                is_custom: true,
                text: "Not available",
              },
              status: {
                user: null,
                applicable_types: ["618fb99bc8ba53856cbf0459"],
                isDeleted: false,
                _id: "619b27747a4897f6abd7338b",
                status: "Driving",
                priority: 0,
                logo: null,
                createdAt: "2021-11-22T05:15:32.942Z",
                updatedAt: "2021-11-22T05:15:32.942Z",
                __v: 0,
              },
            },
          },
          syncCalender: {
            calenders: null,
          },
        },
      },
      RoadSafetyStatus1: {
        title: "RoadSafetyStatus1",
        required: ["is_active", "devices", "data"],
        type: "object",
        properties: {
          is_active: {
            type: "boolean",
          },
          devices: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
          data: {
            $ref: "#/components/schemas/Data8",
          },
        },
        example: {
          is_active: true,
          devices: ["JBL Enduarance", "Boat Rokerz"],
          data: {
            selected_device: "Boat Rokerz",
            display_to: "contacts",
            auto_sms: false,
            notes: {
              is_custom: true,
              text: "Not available",
            },
            status: {
              user: null,
              applicable_types: ["618fb99bc8ba53856cbf0459"],
              isDeleted: false,
              _id: "619b27747a4897f6abd7338b",
              status: "Driving",
              priority: 0,
              logo: null,
              createdAt: "2021-11-22T05:15:32.942Z",
              updatedAt: "2021-11-22T05:15:32.942Z",
              __v: 0,
            },
          },
        },
      },
      Data8: {
        title: "Data8",
        required: [
          "selected_device",
          "display_to",
          "auto_sms",
          "notes",
          "status",
        ],
        type: "object",
        properties: {
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
            $ref: "#/components/schemas/Notes2",
          },
          status: {
            $ref: "#/components/schemas/Status2",
          },
        },
        example: {
          selected_device: "Boat Rokerz",
          display_to: "contacts",
          auto_sms: false,
          notes: {
            is_custom: true,
            text: "Not available",
          },
          status: {
            user: null,
            applicable_types: ["618fb99bc8ba53856cbf0459"],
            isDeleted: false,
            _id: "619b27747a4897f6abd7338b",
            status: "Driving",
            priority: 0,
            logo: null,
            createdAt: "2021-11-22T05:15:32.942Z",
            updatedAt: "2021-11-22T05:15:32.942Z",
            __v: 0,
          },
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
          text: "Not available",
        },
      },
      Status2: {
        title: "Status2",
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
            type: "file",
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
          applicable_types: ["618fb99bc8ba53856cbf0459"],
          isDeleted: false,
          _id: "619b27747a4897f6abd7338b",
          status: "Driving",
          priority: 0,
          logo: null,
          createdAt: "2021-11-22T05:15:32.942Z",
          updatedAt: "2021-11-22T05:15:32.942Z",
          __v: 0,
        },
      },
      SyncCalender1: {
        title: "SyncCalender1",
        required: ["calenders"],
        type: "object",
        properties: {
          calenders: {
            type: "string",
            nullable: true,
          },
        },
        example: {
          calenders: null,
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
          status: "Busy",
          applicable_types: [
            "618fb99bc8ba53856cbf0459",
            "618fba343bc52886fb4f6b7d",
            "618fba473bc52886fb4f6b83",
            "619b27cc7a4897f6abd7338e",
          ],
          priority: 0,
        },
      },
      m20018: {
        title: "m20018",
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
              $ref: "#/components/schemas/Data9",
            },
            description: "",
          },
        },
        example: {
          success: true,
          message: "global status get successfully",
          data: [
            {
              _id: "61a190ae88e2950009a58a61",
              type: "ROAD_SAFETY",
              order: 1,
              createdAt: "2021-11-27T01:58:06.318Z",
              updatedAt: "2021-11-27T01:58:06.318Z",
              __v: 0,
              global_statuses: [
                {
                  _id: "61a19522d87d6100088f7a45",
                  user: null,
                  applicable_types: ["61a190ae88e2950009a58a61"],
                  isDeleted: false,
                  status: "Driving",
                  priority: 0,
                  icon_style: "RED_CROSS",
                  logo: null,
                  createdAt: "2021-11-27T02:17:06.417Z",
                  updatedAt: "2021-11-27T02:17:06.417Z",
                  __v: 0,
                  sub_status: [],
                },
              ],
            },
            {
              _id: "61a190cd88e2950009a58a64",
              type: "GENERAL",
              order: 2,
              createdAt: "2021-11-27T01:58:37.370Z",
              updatedAt: "2021-11-27T01:58:37.370Z",
              __v: 0,
              global_statuses: [
                {
                  _id: "61a1944ed87d6100088f7a39",
                  user: null,
                  applicable_types: [
                    "61a190fb88e2950009a58a6a",
                    "61a190cd88e2950009a58a64",
                  ],
                  isDeleted: false,
                  status: "Urgent calls only",
                  priority: 0,
                  icon_style: "YELLOW_WARNING",
                  logo: null,
                  createdAt: "2021-11-27T02:13:34.159Z",
                  updatedAt: "2021-11-27T02:13:34.159Z",
                  __v: 0,
                  sub_status: [],
                },
                {
                  _id: "61a1946fd87d6100088f7a3c",
                  user: null,
                  applicable_types: [
                    "61a190fb88e2950009a58a6a",
                    "61a190cd88e2950009a58a64",
                  ],
                  isDeleted: false,
                  status: "Personal calls only",
                  priority: 0,
                  icon_style: "YELLOW_WARNING",
                  logo: null,
                  createdAt: "2021-11-27T02:14:07.653Z",
                  updatedAt: "2021-11-27T02:14:07.653Z",
                  __v: 0,
                  sub_status: [],
                },
                {
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
                  sub_status: [
                    {
                      user: null,
                      isDeleted: false,
                      _id: "61a196d7d87d6100088f7a57",
                      status: "Driving",
                      parentId: "61a194a2d87d6100088f7a3f",
                      icon_style: "RED_CROSS",
                      logo: null,
                      createdAt: "2021-11-27T02:24:23.595Z",
                      updatedAt: "2021-11-27T02:24:23.595Z",
                      __v: 0,
                    },
                    {
                      user: null,
                      isDeleted: false,
                      _id: "61a196e4d87d6100088f7a5a",
                      status: "In a meeting",
                      parentId: "61a194a2d87d6100088f7a3f",
                      icon_style: "RED_CROSS",
                      logo: null,
                      createdAt: "2021-11-27T02:24:36.782Z",
                      updatedAt: "2021-11-27T02:24:36.782Z",
                      __v: 0,
                    },
                    {
                      user: null,
                      isDeleted: false,
                      _id: "61a196f9d87d6100088f7a5d",
                      status: "Biking",
                      parentId: "61a194a2d87d6100088f7a3f",
                      icon_style: "RED_CROSS",
                      logo: null,
                      createdAt: "2021-11-27T02:24:57.187Z",
                      updatedAt: "2021-11-27T02:24:57.187Z",
                      __v: 0,
                    },
                    {
                      user: null,
                      isDeleted: false,
                      _id: "61a19703d87d6100088f7a60",
                      status: "Out of office",
                      parentId: "61a194a2d87d6100088f7a3f",
                      icon_style: "RED_CROSS",
                      logo: null,
                      createdAt: "2021-11-27T02:25:07.358Z",
                      updatedAt: "2021-11-27T02:25:07.358Z",
                      __v: 0,
                    },
                  ],
                },
                {
                  _id: "61a194e4d87d6100088f7a42",
                  user: null,
                  applicable_types: [
                    "61a190cd88e2950009a58a64",
                    "61a190e988e2950009a58a67",
                  ],
                  isDeleted: false,
                  status: "In a meeting",
                  priority: 0,
                  icon_style: "RED_CROSS",
                  logo: null,
                  createdAt: "2021-11-27T02:16:04.265Z",
                  updatedAt: "2021-11-27T02:16:04.265Z",
                  __v: 0,
                  sub_status: [],
                },
                {
                  _id: "61a19547d87d6100088f7a48",
                  user: null,
                  applicable_types: ["61a190cd88e2950009a58a64"],
                  isDeleted: false,
                  status: "Official calls only",
                  priority: 0,
                  icon_style: "YELLOW_WARNING",
                  logo: null,
                  createdAt: "2021-11-27T02:17:43.392Z",
                  updatedAt: "2021-11-27T02:17:43.392Z",
                  __v: 0,
                  sub_status: [],
                },
              ],
            },
            {
              _id: "61a190e988e2950009a58a67",
              type: "CALANDER_STATUS",
              order: 3,
              createdAt: "2021-11-27T01:59:05.773Z",
              updatedAt: "2021-11-27T01:59:05.773Z",
              __v: 0,
              global_statuses: [
                {
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
                  sub_status: [
                    {
                      user: null,
                      isDeleted: false,
                      _id: "61a196d7d87d6100088f7a57",
                      status: "Driving",
                      parentId: "61a194a2d87d6100088f7a3f",
                      icon_style: "RED_CROSS",
                      logo: null,
                      createdAt: "2021-11-27T02:24:23.595Z",
                      updatedAt: "2021-11-27T02:24:23.595Z",
                      __v: 0,
                    },
                    {
                      user: null,
                      isDeleted: false,
                      _id: "61a196e4d87d6100088f7a5a",
                      status: "In a meeting",
                      parentId: "61a194a2d87d6100088f7a3f",
                      icon_style: "RED_CROSS",
                      logo: null,
                      createdAt: "2021-11-27T02:24:36.782Z",
                      updatedAt: "2021-11-27T02:24:36.782Z",
                      __v: 0,
                    },
                    {
                      user: null,
                      isDeleted: false,
                      _id: "61a196f9d87d6100088f7a5d",
                      status: "Biking",
                      parentId: "61a194a2d87d6100088f7a3f",
                      icon_style: "RED_CROSS",
                      logo: null,
                      createdAt: "2021-11-27T02:24:57.187Z",
                      updatedAt: "2021-11-27T02:24:57.187Z",
                      __v: 0,
                    },
                    {
                      user: null,
                      isDeleted: false,
                      _id: "61a19703d87d6100088f7a60",
                      status: "Out of office",
                      parentId: "61a194a2d87d6100088f7a3f",
                      icon_style: "RED_CROSS",
                      logo: null,
                      createdAt: "2021-11-27T02:25:07.358Z",
                      updatedAt: "2021-11-27T02:25:07.358Z",
                      __v: 0,
                    },
                  ],
                },
                {
                  _id: "61a194e4d87d6100088f7a42",
                  user: null,
                  applicable_types: [
                    "61a190cd88e2950009a58a64",
                    "61a190e988e2950009a58a67",
                  ],
                  isDeleted: false,
                  status: "In a meeting",
                  priority: 0,
                  icon_style: "RED_CROSS",
                  logo: null,
                  createdAt: "2021-11-27T02:16:04.265Z",
                  updatedAt: "2021-11-27T02:16:04.265Z",
                  __v: 0,
                  sub_status: [],
                },
              ],
            },
            {
              _id: "61a190fb88e2950009a58a6a",
              type: "WORK_LIFE_BALANCE",
              order: 4,
              createdAt: "2021-11-27T01:59:23.093Z",
              updatedAt: "2021-11-27T01:59:23.093Z",
              __v: 0,
              global_statuses: [
                {
                  _id: "61a1944ed87d6100088f7a39",
                  user: null,
                  applicable_types: [
                    "61a190fb88e2950009a58a6a",
                    "61a190cd88e2950009a58a64",
                  ],
                  isDeleted: false,
                  status: "Urgent calls only",
                  priority: 0,
                  icon_style: "YELLOW_WARNING",
                  logo: null,
                  createdAt: "2021-11-27T02:13:34.159Z",
                  updatedAt: "2021-11-27T02:13:34.159Z",
                  __v: 0,
                  sub_status: [],
                },
                {
                  _id: "61a1946fd87d6100088f7a3c",
                  user: null,
                  applicable_types: [
                    "61a190fb88e2950009a58a6a",
                    "61a190cd88e2950009a58a64",
                  ],
                  isDeleted: false,
                  status: "Personal calls only",
                  priority: 0,
                  icon_style: "YELLOW_WARNING",
                  logo: null,
                  createdAt: "2021-11-27T02:14:07.653Z",
                  updatedAt: "2021-11-27T02:14:07.653Z",
                  __v: 0,
                  sub_status: [],
                },
                {
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
                  sub_status: [
                    {
                      user: null,
                      isDeleted: false,
                      _id: "61a196d7d87d6100088f7a57",
                      status: "Driving",
                      parentId: "61a194a2d87d6100088f7a3f",
                      icon_style: "RED_CROSS",
                      logo: null,
                      createdAt: "2021-11-27T02:24:23.595Z",
                      updatedAt: "2021-11-27T02:24:23.595Z",
                      __v: 0,
                    },
                    {
                      user: null,
                      isDeleted: false,
                      _id: "61a196e4d87d6100088f7a5a",
                      status: "In a meeting",
                      parentId: "61a194a2d87d6100088f7a3f",
                      icon_style: "RED_CROSS",
                      logo: null,
                      createdAt: "2021-11-27T02:24:36.782Z",
                      updatedAt: "2021-11-27T02:24:36.782Z",
                      __v: 0,
                    },
                    {
                      user: null,
                      isDeleted: false,
                      _id: "61a196f9d87d6100088f7a5d",
                      status: "Biking",
                      parentId: "61a194a2d87d6100088f7a3f",
                      icon_style: "RED_CROSS",
                      logo: null,
                      createdAt: "2021-11-27T02:24:57.187Z",
                      updatedAt: "2021-11-27T02:24:57.187Z",
                      __v: 0,
                    },
                    {
                      user: null,
                      isDeleted: false,
                      _id: "61a19703d87d6100088f7a60",
                      status: "Out of office",
                      parentId: "61a194a2d87d6100088f7a3f",
                      icon_style: "RED_CROSS",
                      logo: null,
                      createdAt: "2021-11-27T02:25:07.358Z",
                      updatedAt: "2021-11-27T02:25:07.358Z",
                      __v: 0,
                    },
                  ],
                },
              ],
            },
            {
              _id: "61a1910988e2950009a58a6d",
              type: "AUTO_STATUS",
              order: 5,
              createdAt: "2021-11-27T01:59:37.293Z",
              updatedAt: "2021-11-27T01:59:37.293Z",
              __v: 0,
              global_statuses: [
                {
                  _id: "61a19587d87d6100088f7a4b",
                  user: null,
                  applicable_types: ["61a1910988e2950009a58a6d"],
                  isDeleted: false,
                  status: "DND",
                  priority: 1,
                  icon_style: "RED_CROSS",
                  logo: null,
                  createdAt: "2021-11-27T02:18:47.812Z",
                  updatedAt: "2021-11-27T02:18:47.812Z",
                  __v: 0,
                  sub_status: [],
                },
                {
                  _id: "61a1959dd87d6100088f7a4e",
                  user: null,
                  applicable_types: ["61a1910988e2950009a58a6d"],
                  isDeleted: false,
                  status: "On a call",
                  priority: 2,
                  icon_style: "YELLOW_WARNING",
                  logo: null,
                  createdAt: "2021-11-27T02:19:09.207Z",
                  updatedAt: "2021-11-27T02:19:09.207Z",
                  __v: 0,
                  sub_status: [],
                },
                {
                  _id: "61a195b3d87d6100088f7a51",
                  user: null,
                  applicable_types: ["61a1910988e2950009a58a6d"],
                  isDeleted: false,
                  status: "Silent",
                  priority: 3,
                  icon_style: "YELLOW_WARNING",
                  logo: null,
                  createdAt: "2021-11-27T02:19:31.424Z",
                  updatedAt: "2021-11-27T02:19:31.424Z",
                  __v: 0,
                  sub_status: [],
                },
                {
                  _id: "61a195c7d87d6100088f7a54",
                  user: null,
                  applicable_types: ["61a1910988e2950009a58a6d"],
                  isDeleted: false,
                  status: "Switch off",
                  priority: 4,
                  icon_style: "RED_CROSS",
                  logo: null,
                  createdAt: "2021-11-27T02:19:51.088Z",
                  updatedAt: "2021-11-27T02:19:51.088Z",
                  __v: 0,
                  sub_status: [],
                },
              ],
            },
          ],
        },
      },
      Data9: {
        title: "Data9",
        required: [
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
          logo: {
            type: "file",
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
              oneOf: [
                {
                  $ref: "#/components/schemas/SubCategory",
                },
                {
                  type: "string",
                },
              ],
            },
            description: "",
            example: [
              {
                _id: "6195023525c96ee17567830d",
                user: null,
                isDeleted: false,
                status: "DND2",
                parentId: "6195004219517edbb9a32dde",
                logo: "status_images/1637155378453.png",
                createdAt: "2021-11-17T13:23:01.173Z",
                updatedAt: "2021-11-17T13:23:01.173Z",
                __v: 0,
              },
            ],
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
          subCategory: [
            {
              _id: "6195023525c96ee17567830d",
              user: null,
              isDeleted: false,
              status: "DND2",
              parentId: "6195004219517edbb9a32dde",
              logo: "status_images/1637155378453.png",
              createdAt: "2021-11-17T13:23:01.173Z",
              updatedAt: "2021-11-17T13:23:01.173Z",
              __v: 0,
            },
          ],
          applicableType: [
            {
              _id: "618fb8e614842f8284d028dd",
              type: "SUPER_EVENTS",
              order: 2,
              createdAt: "2021-11-13T13:08:54.457Z",
              updatedAt: "2021-11-13T13:08:54.457Z",
              __v: 0,
            },
            {
              _id: "618fb99bc8ba53856cbf0459",
              type: "ROAD_SAFETY",
              order: 1,
              createdAt: "2021-11-13T13:11:55.724Z",
              updatedAt: "2021-11-13T13:11:55.724Z",
              __v: 0,
            },
          ],
        },
      },
      SubCategory: {
        title: "SubCategory",
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
          logo: {
            type: "file",
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
          _id: "6195023525c96ee17567830d",
          user: null,
          isDeleted: false,
          status: "DND2",
          parentId: "6195004219517edbb9a32dde",
          logo: "status_images/1637155378453.png",
          createdAt: "2021-11-17T13:23:01.173Z",
          updatedAt: "2021-11-17T13:23:01.173Z",
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
          _id: "618fb8e614842f8284d028dd",
          type: "SUPER_EVENTS",
          order: 2,
          createdAt: "2021-11-13T13:08:54.457Z",
          updatedAt: "2021-11-13T13:08:54.457Z",
          __v: 0,
        },
      },
      m20019: {
        title: "m20019",
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
            type: "file",
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
            $ref: "#/components/schemas/Data12",
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
      Data12: {
        title: "Data12",
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
            type: "file",
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
      m20023: {
        title: "m20023",
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
            $ref: "#/components/schemas/Data13",
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
      Data13: {
        title: "Data13",
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
            type: "file",
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
            type: "array",
            items: {
              $ref: "#/components/schemas/Data14",
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
      Data14: {
        title: "Data14",
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
      customstatusupdaterequest: {
        title: "customstatusupdaterequest",
        required: ["status", "workLife"],
        type: "object",
        properties: {
          status: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Status4",
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
      Status4: {
        title: "Status4",
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
      m20031: {
        title: "m20031",
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
            $ref: "#/components/schemas/Data15",
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
      Data15: {
        title: "Data15",
        required: ["status", "worklife"],
        type: "object",
        properties: {
          status: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Status5",
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
      Status5: {
        title: "Status5",
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
            $ref: "#/components/schemas/Notes5",
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
      Notes5: {
        title: "Notes5",
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
      WorkLifeBalanceRequest: {
        title: "WorkLifeBalanceRequest",
        required: [
          "days",
          "start_time",
          "end_time",
          "status",
          "sub_status",
          "excluded_dates",
          "is_active",
        ],
        type: "object",
        properties: {
          days: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Day",
            },
            description: "",
          },
          start_time: {
            type: "string",
          },
          end_time: {
            type: "string",
          },
          status: {
            type: "string",
          },
          sub_status: {
            type: "string",
          },
          excluded_dates: {
            type: "array",
            items: {
              type: "string",
            },
            description: "",
          },
          is_active: {
            type: "boolean",
          },
        },
        example: {
          days: [
            {
              monday: true,
              tuesday: false,
              wednesday: false,
              thursday: true,
              friday: false,
              saturday: false,
              sunday: false,
            },
          ],
          start_time: "10:00AM",
          end_time: "03:00PM",
          status: "61a194a2d87d6100088f7a3f",
          sub_status: "61a19703d87d6100088f7a60",
          is_active: true,
        },
      },
      CreateOrganazationRequest: {
        title: "CreateOrganazationRequest",
        required: ["name", "email", "website", "phone_no"],
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          email: {
            type: "string",
          },
          website: {
            type: "string",
          },
          phone_no: {
            type: "string",
          },
        },
        example: {
          name: "Tushar",
          email: "savaliyatushar2197@gmail.com",
          website: "www.aaa.com",
          phone_no: "+918980514085",
        },
      },
      OrganazationLoginRequest: {
        title: "OrganazationLoginRequest",
        required: ["phone_no"],
        type: "object",
        properties: {
          phone_no: {
            type: "string",
          },
        },
        example: {
          phone_no: "+918980514085",
        },
      },
      VerifyOTPforOrganazationRequest: {
        title: "VerifyOTPforOrganazationRequest",
        required: ["phone_no", "otp"],
        type: "object",
        properties: {
          phone_no: {
            type: "string",
          },
          otp: {
            type: "integer",
            format: "int32",
          },
        },
        example: {
          phone_no: "+918980514085",
          otp: 3381,
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
  ],
};
