import styled from "styled-components";

export const InputForm = styled.label`
  padding: 10px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 600px;
  background-color: beige;
  padding: 10px;
`;

export const ShortInput = styled.input`
  width: 260px;
  height: 40px;
  border-radius: 4px;
`;

export const LongInput = styled.input`
  width: 590px;
  height: 40px;
  border-radius: 4px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LabelText = styled.p`
  color: grey;
  size: 12px;
`;

export const SubmitWrapper = styled.div`
  padding: 25px;
  border-top: solid rgb(141, 156, 141) 1px;
`;

export const BtnSubmit = styled.button`
  width: 200px;
  height: 45px;
  border: solid green 1px;
  border-radius: 4px;
`;

export const RedStar = styled.span`
  color: red;
`;
