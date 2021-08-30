import React from 'react';

import GoogleLogin from 'react-google-login';

import {
  Login,
  LeftSide,
  RightSide,
  Container,
  Link,
  LogoImage,
  LineSection,
  Line,
  LoginForm,
  EmailInput,
  RememberMeSection,
  RememberMeCheckBox,
  ForgetPassUrl,
  LoginButton,
  Text,
  CreateAccount
} from '../style/style';

const LoginPage = () => {
  return (
    <Login>
      <LeftSide>
        <Container>
          <Link>
            <LogoImage src='./logo.png' />
          </Link>
          <div style={{height: '70'}}></div>
          <Text fontSize='2rem' fontWeight='bold'>
            Login
          </Text>
          <div style={{height: '20'}}></div>
          <Text color='#5b5675ff'>
            See your growth and get consulting support!
          </Text>
          <div style={{height: '20'}}></div>
          <GoogleLogin></GoogleLogin>
          <div style={{height: '30'}}></div>
          <LineSection>
            <Line></Line>
            <Text color='#bcb8d0ff' fontSize='0.75rem' style={{ width: 300 }}>
              or Sign in with Email
            </Text>
            <Line></Line>
          </LineSection>
          <div style={{height: '40'}}></div>
          <LoginForm>
            <Text color='#0b081cff'>Email*</Text>
            <EmailInput placeholder='mail@website.com'></EmailInput>
            <div style={{height: '30'}}></div>
            <Text color='#0b081cff'>Password*</Text>
            <EmailInput placeholder='Min. 8 characters'></EmailInput>
            <div style={{height: '30'}}></div>
            <RememberMeSection>
              <RememberMeCheckBox type='checkbox'></RememberMeCheckBox>
              <Text>Remember me</Text>
              <ForgetPassUrl href='#'>Forget password?</ForgetPassUrl>
            </RememberMeSection>
            <div style={{height: '30'}}></div>
            <LoginButton>Login</LoginButton>
            <div style={{height: '30'}}></div>
            <CreateAccount>
            <Text>Not registered yet?</Text>
            <Text style={{ color: '#5037ebff', marginLeft: '2%' }}>
              Create an Account
            </Text>
            </CreateAccount>
            <div style={{height: '130'}}></div>
            <Text style={{ color: '#bcb8d0ff' }}>
              @2021 Felix All rights reserved.
            </Text>
          </LoginForm>
        </Container>
      </LeftSide>
      <RightSide></RightSide>
    </Login>
  );
};

export default LoginPage;
