import styled from 'styled-components';

export const LeftSide = styled.div`
  /* background-color: #eee; */
  width: 40%;
  height: 100%;
  float: left;
  /* display: inline-block; */
`;

export const RightSide = styled.div`
  background-color: #ddd;
  width: 60%;
  height: 100%;
  float: left;
  /* display: inline-block; */
`;

export const Main = styled.div`
  width: 400px;
  height: 100%;
  /* border: 1px solid red; */
  margin: auto;
`;

export const Logo = styled.div`
  width: 40;
  height: 50;
  background-color: #5138eeff;
`;

export const LoginText = styled.div`
  color: #0a071bff;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const LoginDetailsText = styled.div`
  color: #5b5675ff;
  font-size: 0.75rem;
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
`;
