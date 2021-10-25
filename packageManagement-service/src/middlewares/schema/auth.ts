import * as yup from "yup";

export const packages = yup.object().shape({
  name: yup
    .string()
    .required('package Name is required'),
  duration: yup
    .number()
    .required('Time duration is required'),
  price: yup
    .number()
    .required('Package  price is required'),

});

export const woucher = yup.object().shape({

  name: yup
    .string()
    .required('woucher Name is required'),
  code: yup
    .string()
    .required('code is required'),
  minAmount: yup
    .number()
    .required('minAmount is required'),
  amount: yup
    .number()
    .required('amount is required'),
  discountType: yup
    .string()
    .required('discount type must be FLAT/PERSANTAGE'),
  startDate: yup
    .date()
    .required('startDate is required'),
  endDate: yup
    .date()
    .required('endDate is required'),

});

