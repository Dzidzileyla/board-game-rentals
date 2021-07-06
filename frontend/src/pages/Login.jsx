import React from 'react';

import {
  LeftSide,
  RightSide,
  Main,
  Logo,
  LoginText,
  LoginDetailsText,
  GoogleButton,
  GoogleLogo,
  GoogleButtonText,
  LineSection,
  Line,
  LineText,
  LoginForm,
  EmailLabel,
  EmailInput
} from '../style/style';

const LoginPage = () => {
  return (
    <>
      <LeftSide>
        <Main>
          <Logo></Logo>
          <LoginText>Login</LoginText>
          <LoginDetailsText>
            See your growth and get consulting support!
          </LoginDetailsText>
          <GoogleButton>
            <GoogleLogo></GoogleLogo>
            <GoogleButtonText>Sign in with Google</GoogleButtonText>
          </GoogleButton>
          <LineSection>
            <Line></Line>
            <LineText>or Sign in with Email</LineText>
            <Line></Line>
          </LineSection>
          <LoginForm>
            <EmailLabel>Email*</EmailLabel>
            <EmailInput placeholder="mail@website.com"></EmailInput>
          </LoginForm>
        </Main>
      </LeftSide>
      <RightSide></RightSide>
    </>
  );
};

export default LoginPage;
