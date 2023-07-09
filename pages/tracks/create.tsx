import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import { Button, Grid, TextField } from "@mui/material";
import FileUpload from "../../components/FileUpload";

const Create = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [image, setImage] = useState();
  const [audio, setAudio] = useState(null);
  const next = () => {
    setActiveStep((prevState) =>
      prevState !== 2 ? prevState + 1 : prevState - 1
    );
  };
  const back = () => {
    setActiveStep((prevState) => prevState - 1);
  };

  function Information() {
    return (
      <Grid container direction={"column"} style={{ padding: 20 }}>
        <TextField label={"Track name"} style={{ marginTop: 10 }} />
        <TextField label={"Artist name"} style={{ marginTop: 10 }} />
        <TextField label={"Text"} rows={3} style={{ marginTop: 10 }} />
      </Grid>
    );
  }
  function AlbumCover() {
    return (
      <div>
        <FileUpload setFile={setImage} accept="image/*">
          <Button>Download cover</Button>
        </FileUpload>
      </div>
    );
  }

  function DownloadTrack() {
    return (
      <div>
        <FileUpload setFile={setAudio} accept="audio/*">
          <Button>Download your track</Button>
        </FileUpload>
      </div>
    );
  }
  function Switcher(activeStep: number) {
    switch (activeStep) {
      case 0:
        return <Information />;
      case 1:
        return <AlbumCover />;
      case 2:
        return <DownloadTrack />;
    }
  }

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>{Switcher(activeStep)}</StepWrapper>
      <Grid container justifyContent="space-between">
        <Button onClick={back} disabled={activeStep === 0}>
          Back
        </Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
