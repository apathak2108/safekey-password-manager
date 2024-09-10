import React from "react";
import { StyledErrorPageLayout } from "./404.styled.js";
import Error404Image from "../../assets/404/error404Image.png";
import Header from "../../components/header";

const Error404Container = () => {
  return (
    <StyledErrorPageLayout>
      <Header flag={false} />
      <img src={Error404Image} />
      
    </StyledErrorPageLayout>
  );
};

export default Error404Container;
