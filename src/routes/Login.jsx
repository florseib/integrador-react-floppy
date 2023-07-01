import { useFormik } from "formik";
import {
  AccountButton,
  Form,
  LoginForm,
} from "../StyledComponents/AccountComponents";
import { Input } from "../components/Input";

export const Login = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit(values, { resetForm }) {
      console.log(values);
      resetForm();
    },
  });

  return (
    <LoginForm>
      <h2>Ingrese su información de usuario</h2>
      <Form>
        <Input
          handleChange={handleChange}
          value={values.username}
          label="Usuario"
          type="text"
          name="username"
        />
        <Input
          handleChange={handleChange}
          value={values.password}
          label="Contraseña"
          type="password"
          name="password"
        />
        <AccountButton
          onSubmit={(e) => {
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
