import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const AccountForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 145, 0);
  border-radius: 30px;
  padding: 50px 30px;
  box-sizing: border-box;
`;

export const LoginForm = styled(AccountForm)`
  width: 25%;

  form {
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  h2 {
    margin-top: 0px;
  }

  @media (max-width: 1500px) {
    width: 30%;
  }

  @media (max-width: 1200px) {
    width: 35%;
  }

  @media (max-width: 1000px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const RegisterForm = styled(AccountForm)`
  width: 30%;

  form {
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: left;
  }

  h2 {
    margin-top: 0px;
  }

  @media (max-width: 1200px) {
    width: 35%;
  }

  @media (max-width: 1000px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const AccountButton = styled.input`
  height: 35px;
`;

export const StyledInput = styled.input`
  height: 30px;
  border: solid 0px;
`;

// export const Form = styled(FormikForm)`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;
