import * as Yup from "yup";
export const SignUpSchema = Yup.object().shape({
  fullName: Yup.string().required("full name is required!"),
  email: Yup.string().email().required("wrong email!"),
  password: Yup.string()
    .required("password is required!")
    .min(6, "min 6 char!")
    .max(20, "max 20 char!"),
});
export type SignUpFormSchema = Yup.InferType<typeof SignUpSchema>;
