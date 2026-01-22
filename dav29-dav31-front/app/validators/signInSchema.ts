
import * as Yup from "yup"


export const signInSchema = Yup.object().shape({
    email:Yup.string().required("required").email("@"),
    password:Yup.string().min(6,"min 6 char").max(20,"max20")
})