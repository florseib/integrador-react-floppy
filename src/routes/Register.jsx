import { useFormik } from "formik";
import {
  AccountButton,
  AccountForm,
  Error,
  ErrorSpan,
  Form,
  RegisterForm,
} from "../StyledComponents/AccountComponents";
import { Input } from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux-store/slice/UserSlice";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import {PostRegister} from "../axios/axios-auth";

export const Register = () => {
  const hasLoggedUser = useSelector((state) => state.user.loggedUser) != null;
  const userList = useSelector((state) => state.user.userList);
  const [userExists, setUserExists] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorList, setErrorList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .email("No es una dirección de email válida")
      .required("Requerido"),
    password: Yup.string()
      .trim()
      .min(6, "La contraseña debe tener un mínimo de 6 caracteres")
      .required("Requerido"),
    repeatPassword: Yup.string()
      .trim()
      .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
      .required("Requerido"),
  });

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        repeatPassword: "",
      },
      onSubmit(values, { resetForm }) {
        if (userList.find((x) => x.email === values.email)) {
          setUserExists(true);
        } else {
          PostRegister({
            email: values.email,
            password: values.password,
            repeatPassword: values.repeatPassword,
          }).then((data) => {
            if(data.status == 201) {
              resetForm();
              setShowSuccessMessage(true);
            }
            else {
              setErrorList(data.data.errors.map(error => error.msg));
              console.log(errorList);
            }
          })
        }
      },
      validationSchema,
    });

  return hasLoggedUser ? (
    <Navigate to={"/"} />
  ) : (
    <RegisterForm>
      <h2>Registración</h2>
      <Form>
        <div style={{ width: "100%" }}>
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
        <div style={{ width: "100%" }}>
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
        <div style={{ width: "100%" }}>
          <Input
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.repeatPassword}
            label="Repetir contraseña"
            type="password"
            name="repeatPassword"
          />
          {errors.repeatPassword && touched.repeatPassword && (
            <Error>{errors.repeatPassword}</Error>
          )}
        </div>
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
        {userExists && (
          <Error style={{ "margin-bottom": "0px" }}>
            Ya existe un usuario con este nombre
          </Error>
        )}
      </Form>
      {showSuccessMessage ? <Span>Usuario registrado correctamente</Span> : ""}
      {errorList.length != 0 && (errorList.map((error) => {
        return <ErrorSpan style={{ "margin-bottom": "0px" }}>
          {error}
        </ErrorSpan>
      })
      )}
    </RegisterForm>
  );
};
