import React from "react";
import { StyledErrorPageLayout } from "./404.styled";
import Error404Image from "../../assets/404/error404Image.png";

const Error404Container = () => {
  return (
    <StyledErrorPageLayout>
      <img src={Error404Image} />
    </StyledErrorPageLayout>
  );
};

export default Error404Container;
