import { useFormik } from "formik";
import {
  AccountButton,
  AccountForm,
  Form,
  RegisterForm,
} from "../StyledComponents/AccountComponents";
import { Input } from "../components/Input";

export const Register = () => {
  const { values, handleChange } = useFormik({
    initialValues: {
      username: "",
      password: "",
      repeatpassword: "",
    },
    onSubmit(values, { resetForm }) {
      console.log(values);
      resetForm();
    },
  });

  return (
    <RegisterForm>
      <h2>Registración</h2>
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
        <Input
          handleChange={handleChange}
          value={values.repeatpassword}
          label="Repetir contraseña"
          type="repeatpassword"
          name="repeatpassword"
        />
        <div class="save-info">
          <input type={"checkbox"} name={"rememberme"}></input>
          <label htmlFor={"rememberme"}>Guardar información de usuario</label>
        </div>
        <AccountButton
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          type={"submit"}
          value={"Enviar"}
        />
      </Form>
    </RegisterForm>
  );
};
