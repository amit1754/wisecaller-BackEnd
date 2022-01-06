import { getUserBll } from "@wisecaller/user-service";
import * as yup from "yup";

export const register = yup.object().shape({
  mobileNo: yup
    .string()
    .min(8)
    .required("A phone number is required")
    .test("unique", "Mobile number already registered", async (value) => {
      let user = await getUserBll.findOneUser({ mobileNo: value });
      if (user) {
        return false;
      }
      return true;
    }),
});

export const login = yup.object().shape({
  mobileNo: yup.string().min(8).required("A phone number is required"),
});

export const verifyOtp = yup.object().shape({
  mobileNo: yup.string().min(8).required("A phone number is required"),
});
