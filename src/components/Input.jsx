import { StyleSheetManager } from "styled-components";
import { StyledInput } from "../StyledComponents/AccountComponents";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = ({
  label,
  type,
  name,
  value,
  handleChange,
  handleBlur,
}) => {
  return (
    <InputContainer>
      <label htmlFor={label}>{label}</label>
      <StyledInput
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        type={type}
        id={label}
        name={name}
      ></StyledInput>
    </InputContainer>
  );
};
