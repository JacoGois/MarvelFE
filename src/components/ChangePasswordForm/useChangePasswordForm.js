import * as Yup from "yup";
import { useFormik } from "formik";

const Schema = Yup.object({
    password: Yup.string()
    .required("Password is required"),
    new_password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
    confirm_new_password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password confirmation is required")
    .when("new_password", {
      is: (val) => Boolean(val?.length),
      then: Yup.string().oneOf(
        [Yup.ref("new_password")],
        "Both password need to be the same"
      ),
})})

export const useChangePasswordForm = ({ onSubmit}) => {
  return useFormik({
    initialValues: {

    },
    onSubmit,
    validationSchema: Schema,
    validateOnBlur: true,
    validateOnChange: false,
  });
};
