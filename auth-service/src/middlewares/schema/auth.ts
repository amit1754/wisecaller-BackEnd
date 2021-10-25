import { User } from "../../models/user";
import * as yup from "yup";

export const register = yup.object().shape({
  mobileNo: yup
    .string()
    .min(8)
    .required('A phone number is required')
    .test("unique", "Mobile number already registered", async (value) => {
      let user = await User.findOne({ mobileNo: value });
      if (user) {
        return false;
      }
      return true;
    }),
});

export const login = yup.object().shape({
  mobileNo: yup
    .string()
    .min(8)
    .required('A phone number is required')
});

export const verifyOtp = yup.object().shape({
  mobileNo: yup
    .string()
    .min(8)
    .required('A phone number is required'),
  otp: yup
    .number()
    .min(4)
    .required('otp is required'),
});
