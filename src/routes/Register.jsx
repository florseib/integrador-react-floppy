import { useFormik } from "formik";
import {
  AccountButton,
  AccountForm,
  Form,
  RegisterForm,
} from "../StyledComponents/AccountComponents";
import { Input } from "../components/Input";
import { useDispatch } from "react-redux";
import { createUser } from "../redux-store/slice/UserSlice";

export const Register = () => {
  const dispatch = useDispatch();
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatpassword: "",
    },
    onSubmit(values, { resetForm }) {
      console.log(values);
      dispatch(
        createUser({
          email: values.email,
          password: values.password,
          repeatPassword: values.repeatpassword,
        })
      );
      resetForm();
    },
  });

  return (
    <RegisterForm>
      <h2>Registración</h2>
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
        <Input
          handleChange={handleChange}
          value={values.repeatpassword}
          label="Repetir contraseña"
          type="password"
          name="repeatpassword"
        />
        {/* <div class="save-info">
          <input type={"checkbox"} name={"rememberme"}></input>
          <label htmlFor={"rememberme"}>Guardar información de usuario</label>
        </div> */}
        <AccountButton
          onClick={(e) => {
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
