import styled from 'styled-components';

export const Login = styled.div`
  display: flex;
  height: 100%;
`;

export const LeftSide = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
`;

export const RightSide = styled.div`
  background-color: #ddd;
  width: 60%;
`;

export const Container = styled.div`
  width: 400px;
  /* height: 850px; */
  /* height: 80%; */

  margin: auto;

  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
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

  display: flex;
  flex-direction: row;
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

export const Text = styled.div`
  color: ${props => props.color || 'black'};
  font-size: ${props => props.fontSize || '1rem'};
  font-weight: ${props => props.fontWeight || 'normal'};
`;

export const CreateAccount = styled.div`
  display: flex;
  flex-direction: row;
`;
