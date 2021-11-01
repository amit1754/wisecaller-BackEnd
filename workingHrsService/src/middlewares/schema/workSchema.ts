import { WorkLife } from "../../models/worklIfe";
import * as yup from "yup";

export const workLife = yup.object().shape({
    Monday: yup
        .boolean()
        .required('Value Monday is required'),
    Tuesday: yup
        .boolean()
        .required('Value Tuesday is required'),
    Wednesday: yup
        .boolean()
        .required('Value Wednesday is required'),
    Thursday: yup
        .boolean()
        .required('Value Thursday is required'),
    Friday: yup
        .boolean()
        .required('Value Friday is required'),
    Saturday: yup
        .boolean()
        .required('Value Saturday is required'),
    Sunday: yup
        .boolean()
        .required('Value Sunday is required'),
    startTime: yup
        .string()
        .required('StartTime is required'),
    endTime: yup
        .string()
        .required('endTime is required'),
});

