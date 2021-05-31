import SocialLogin from "components/SocialLogin";
import React from "react";
import styled from "styled-components";

const AuthContainer = styled.div`
  -webkit-flex-direction: column;
  flex-direction: column;
  height: 100vh;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  display: flex;
  display: -webkit-flex;
`;

const Login = () => {
  return (
    <AuthContainer>
      <SocialLogin />
    </AuthContainer>
  );
};
export default Login;
