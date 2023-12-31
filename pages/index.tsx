import React from "react";
import { Button } from "@mui/material";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      <div className={"center"}>
        <h1>Welcome!</h1>
        <h3>You can find best tracks here </h3>
      </div>
      <style jsx>
        {`
          .center {
            margin-top: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </MainLayout>
  );
};

export default Index;
