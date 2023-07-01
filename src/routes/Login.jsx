import { useFormik } from "formik";
import {
  AccountButton,
  Form,
  LoginForm,
} from "../StyledComponents/AccountComponents";
import { Input } from "../components/Input";
import { useDispatch } from "react-redux";
import { logIn } from "../redux-store/slice/UserSlice";

export const Login = () => {
  const dispatch = useDispatch();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit(values, { resetForm }) {
      console.log(values);
      dispatch(
        logIn({
          email: values.email,
          password: values.password,
        })
      );
      resetForm();
    },
  });

  return (
    <LoginForm>
      <h2>Ingrese su información de usuario</h2>
      <Form>
        <Input
          handleChange={handleChange}
          value={values.email}
          label="Mail"
          type="text"
          name="email"
        />
        <Input
          handleChange={handleChange}
          value={values.password}
          label="Contraseña"
          type="password"
          name="password"
        />
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
