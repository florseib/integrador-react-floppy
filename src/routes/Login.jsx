import { useFormik } from "formik";
import {
  AccountButton,
  Error,
  Form,
  LoginForm,
} from "../StyledComponents/AccountComponents";
import { Input } from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux-store/slice/UserSlice";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export const Login = () => {
  const hasLoggedUser = useSelector((state) => state.user.loggedUser) != null;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .email("No es una dirección de email válida")
      .required("Requerido"),
    // password: Yup.string().trim().required("Required"),
    password: Yup.string().trim().required("Requerido"),
  });

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit(values, { resetForm }) {
        dispatch(
          logIn({
            email: values.email,
            password: values.password,
          })
        );
        resetForm();
        navigate("/");
      },
      validationSchema,
    });

  return hasLoggedUser ? (
    <Navigate to={"/"} />
  ) : (
    <LoginForm>
      <h2>Ingrese su información de usuario</h2>
      <Form>
        <div style={{ width: "80%" }}>
          <Input
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.email}
            label="Mail"
            type="text"
            name="email"
          />
          {errors.email && touched.email && <Error>{errors.email}</Error>}
        </div>
        <div style={{ width: "80%" }}>
          <Input
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.password}
            label="Contraseña"
            type="password"
            name="password"
          />
          {errors.password && touched.password && (
            <Error>{errors.password}</Error>
          )}
        </div>
        <AccountButton
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          type={"submit"}
          value={"Enviar"}
        />
      </Form>
    </LoginForm>
  );
};
