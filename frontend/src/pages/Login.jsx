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
  EmailInput,
  RememberMeSection,
  RememberMeCheckBox,
  ForgetPassUrl,
  LoginButton
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
            <EmailInput placeholder='mail@website.com'></EmailInput>
            <EmailLabel>Password*</EmailLabel>
            <EmailInput placeholder='Min. 8 characters'></EmailInput>
            <RememberMeSection>
              <RememberMeCheckBox type='checkbox'></RememberMeCheckBox>
              <EmailLabel>Remember me</EmailLabel>
              <ForgetPassUrl href="#">Forget password?</ForgetPassUrl>
            </RememberMeSection>
            <LoginButton>Login</LoginButton>
            <EmailLabel>Not registered yet?</EmailLabel>
            <EmailLabel style={{color: '#5037ebff', marginLeft: '2%'}}>Create an Account</EmailLabel>
            <br/>
            <EmailLabel style={{color: '#bcb8d0ff'}}>@2021 Felix All rights reserved.</EmailLabel>
          </LoginForm>
        </Main>
      </LeftSide>
      <RightSide></RightSide>
    </>
  );
};

export default LoginPage;
