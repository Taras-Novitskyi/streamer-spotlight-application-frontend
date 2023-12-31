import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: ${(p) => p.theme.space(2)};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 420px;
  width: 360px;

  margin-bottom: ${(p) => p.theme.space(18)};
  padding-top: ${(p) => p.theme.space(8)};
  padding-left: ${(p) => p.theme.space(6)};
  padding-right: ${(p) => p.theme.space(6)};

  background-color: #274364;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  cursor: pointer;
`;

export const Label = styled.label`
  margin-bottom: ${(p) => p.theme.space(2)};
  margin-left: ${(p) => p.theme.space(2)};

  font-size: ${(p) => p.theme.fontSizes.l}px;
  color: ${(p) => p.theme.colors.lightBgColor};
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;

  margin-bottom: ${(p) => p.theme.space(5)};
  padding: ${(p) => p.theme.space(2)};

  font-size: ${(p) => p.theme.fontSizes.l}px;
  color: ${(p) => p.theme.colors.whiteText};
  background-color: ${(p) => p.theme.colors.inputBgColor};
  border-radius: 4px;
  border: none;
  outline: none;
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;

  margin-bottom: ${(p) => p.theme.space(5)};
  padding: ${(p) => p.theme.space(2)};

  color: ${(p) => p.theme.colors.whiteText};
  background-color: ${(p) => p.theme.colors.inputBgColor};
  border-radius: 4px;
  border: none;
  outline: none;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;

  margin-bottom: ${(p) => p.theme.space(6)};
  padding: ${(p) => p.theme.space(2)};

  color: ${(p) => p.theme.colors.whiteText};
  background-color: ${(p) => p.theme.colors.inputBgColor};
  border-radius: 4px;
  border: none;
  outline: none;
  resize: none;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorContainer = styled.span`
  position: absolute;
  bottom: 4px;
  right: 12px;

  font-size: ${(p) => p.theme.fontSizes.m}px;
  color: #ce0316;
`;
