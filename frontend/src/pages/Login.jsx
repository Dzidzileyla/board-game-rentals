import React from 'react';

import {
  LeftSide,
  RightSide,
  Main,
  Logo,
  LoginText,
  LoginDetailsText,
  GoogleButton,
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
          <GoogleButton>Sign in with Google</GoogleButton>
        </Main>
      </LeftSide>
      <RightSide></RightSide>
    </>
  );
};

export default LoginPage;
