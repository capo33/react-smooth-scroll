import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  Text,
  FormButton,
  FormH1,
  FormInput,
  FormLable,
} from "./SigninStyle";

function SignIn() {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">Delta</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign In to your account</FormH1>
            <FormLable htmlFor="for">Email</FormLable>
            <FormInput type="email" required />
            <FormLable htmlFor="for">Password</FormLable>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password?</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
}

export default SignIn;
