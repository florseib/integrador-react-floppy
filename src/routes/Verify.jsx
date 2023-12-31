import { useFormik } from "formik";
import {
  AccountButton,
  BoldedSpan,
  Error,
  ErrorSpan,
  Form,
  LoginForm,
} from "../StyledComponents/AccountComponents";
import { useState } from "react";
import { Input } from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux-store/slice/UserSlice";
import { Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { PostVerify } from "../axios/axios-auth";
import styled from "styled-components";

export const Verify = () => {
  const hasLoggedUser = useSelector((state) => state.user.loggedUser) != null;
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorList, setErrorList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .email("No es una dirección de email válida")
      .required("Requerido"),
    codigo: Yup.string().trim().required("Requerido"),
  });

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        codigo: "",
      },
      onSubmit(values, { resetForm }) {
          PostVerify({
            email: values.email,
            code: values.codigo,
          }).then((data) => {
            if(data.status == 201) {
              resetForm();
              setShowSuccessMessage(true);
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
      <h2>Ingrese su email y su código de validación</h2>
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
            value={values.codigo}
            label="Código"
            type="codigo"
            name="codigo"
          />
          {errors.codigo && touched.codigo && (
            <Error>{errors.codigo}</Error>
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
      {showSuccessMessage ? <BoldedSpan>Usuario validado correctamente</BoldedSpan> : ""}
      {errorList.length != 0 && (errorList.map((error) => {
        return <ErrorSpan style={{ "margin-bottom": "0px" }}>
          {error}
        </ErrorSpan>
      })
      )}
    </LoginForm>
  );
};
