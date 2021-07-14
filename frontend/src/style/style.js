import styled from 'styled-components';

export const Login = styled.div`
  display: flex;
  height: 100%;
`;

export const LeftSide = styled.div`
  width: 40%;
  display: flex;
`;

export const RightSide = styled.div`
  background-color: #ddd;
  width: 60%;
`;

export const Container = styled.div`
  width: 400px;
  height: 850px;

  margin: auto;
`;

export const Link = styled.a``;

export const LogoImage = styled.img`
  width: 50;
  height: 50;
`;

export const LoginText = styled.div`
  color: #0a071bff;
  font-size: 2rem;
  font-weight: bold;
`;

export const GoogleButton = styled.button`
  color: #0e0b1fff;
  background-color: #fff;
  font-size: 0.75rem;
  width: 25rem;
  height: 3.25rem;
  border-width: 2px;
  border-color: #e1dfecff;
  border-style: solid;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GoogleLogo = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: #5037ebff;
  border-radius: 100%;
  margin: 0.75rem;
`;

export const LineSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;

  background-color: #bcb8d0ff;
`;

export const LoginForm = styled.form``;

export const EmailInput = styled.input`
  color: #0b081cff;
  width: 100%;
  height: 50px;
  font-size: 1rem;
  padding-left: 20px;
  border: 1px solid #e1dfecff;
`;

export const RememberMeSection = styled.div`
  /* border: 1px solid red; */
  margin-top: 3%;
`;

export const RememberMeCheckBox = styled.input`
  margin-right: 2%;
`;

export const ForgetPassUrl = styled.a`
  color: #5037ebff;
  outline: none;
  text-decoration: none;
  float: right;
  margin-right: 2%;
`;

export const LoginButton = styled.button`
  height: 50px;
  width: 100%;
  color: #fff;
  background-color: #5037ebff;
  border: 0;
  font-size: 1rem;
`;
