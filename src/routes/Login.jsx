import { useFormik } from "formik";
import {
  AccountButton,
  Error,
  Form,
  LoginForm,
  AccountSpan,
  ErrorSpan,
} from "../StyledComponents/AccountComponents";
import { Input } from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux-store/slice/UserSlice";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Link, LinkVerify } from "../StyledComponents/Components";
import styled from "styled-components";
import { PostLogin } from "../axios/axios-auth";
import { useState } from "react";

export const Login = () => {
  const hasLoggedUser = useSelector((state) => state.user.loggedUser) != null;
  const [errorList, setErrorList] = useState([]);
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
        PostLogin(dispatch, {
          email: values.email,
          password: values.password,
        }).then((data) => {
          if (data.status == 201) {
            resetForm();
            navigate("/");
          }
          else {
            if (data.data.errors && data.data.errors.length != 0)
              setErrorList(data.data.errors.map(error => error.msg));
            else
              setErrorList([data.data.msg]);
            console.log(errorList);
          }
        })
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
      <AccountSpan>Necesitás validar tu cuenta? Hacé click <LinkVerify to="/verify">acá</LinkVerify></AccountSpan>
      {errorList.length != 0 && (errorList.map((error) => {
        return <ErrorSpan style={{ "margin-bottom": "0px" }}>
          {error}
        </ErrorSpan>
      })
      )}
    </LoginForm>
  );
};
