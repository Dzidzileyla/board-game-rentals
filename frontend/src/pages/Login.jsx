import React from 'react';
import Text from '../components/Text';

import {
  Login,
  LeftSide,
  RightSide,
  Container,
  Link,
  LogoImage,
  GoogleButton,
  GoogleLogo,
  LineSection,
  Line,
  LoginForm,
  EmailInput,
  RememberMeSection,
  RememberMeCheckBox,
  ForgetPassUrl,
  LoginButton,
} from '../style/style';

const LoginPage = () => {
  return (
    <Login>
      <LeftSide>
        <Container>
          <Link>
            <LogoImage src='./logo.png' />
          </Link>
          <Text fontSize='2rem' fontWeight='bold'>
            Login
          </Text>
          <Text color='#5b5675ff'>
            See your growth and get consulting support!
          </Text>
          <GoogleButton>
            <GoogleLogo></GoogleLogo>
            <Text>Sign in with Google</Text>
          </GoogleButton>
          <LineSection>
            <Line></Line>
            <Text color='#bcb8d0ff' fontSize='0.75rem' style={{ width: 300 }}>
              or Sign in with Email
            </Text>
            <Line></Line>
          </LineSection>
          <LoginForm>
            <Text color='#0b081cff'>Email*</Text>
            <EmailInput placeholder='mail@website.com'></EmailInput>
            <Text color='#0b081cff'>Password*</Text>
            <EmailInput placeholder='Min. 8 characters'></EmailInput>
            <RememberMeSection>
              <RememberMeCheckBox type='checkbox'></RememberMeCheckBox>
              <Text>Remember me</Text>
              <ForgetPassUrl href='#'>Forget password?</ForgetPassUrl>
            </RememberMeSection>
            <LoginButton>Login</LoginButton>
            <Text>Not registered yet?</Text>
            <Text style={{ color: '#5037ebff', marginLeft: '2%' }}>
              Create an Account
            </Text>
            <br />
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
