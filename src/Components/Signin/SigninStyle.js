import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  background: #01bf71;
`;

export const FormWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin: 32px 0 0 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  width: 100%;
  height: auto;
  padding: 80px 32px;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  display: grid;
  z-index: 1;

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 40px;
  text-align: center;
`;

export const FormLable = styled.label`
  font-size: 14px;
  color: #fff;
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  border: none;
  margin-bottom: 32px;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #01bf71;
  border-radius: 4px;
  border: none;
  padding: 16px 0;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
