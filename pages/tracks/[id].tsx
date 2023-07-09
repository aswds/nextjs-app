import React from "react";
import { ITrack } from "../../Types/track";
import MainLayout from "../../layouts/MainLayout";
import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";

const TrackPage = () => {
  const track: ITrack = {
    _id: "1",
    name: "Name 1",
    artist: "Artist 1",
    text: "Text 1",
    listens: 19,
    audio: "URL",
    picture: require("../../pictures/images_1.jpg"),
    comments: [],
  };
  const router = useRouter();
  return (
    <MainLayout>
      <Button onClick={() => router.push("/tracks")}>Go back</Button>
      <Grid container style={{ margin: "0 20px" }}>
        <Image src={track.picture} alt={"Image"} width={200} height={200} />
        <div style={{ marginLeft: 30 }}>
          <h1>Name: {track.name}</h1>
          <h1>Artist: {track.artist}</h1>
          <h1>Listens: {track.listens}</h1>
        </div>
      </Grid>
      <h1>Track words</h1>
      <p>{track.text}</p>
      <Grid container>
        <h1>Comments</h1>
        <TextField label={"Your name"} fullWidth style={{ marginBottom: 20 }} />
        <TextField label={"Comment text"} fullWidth rows={4} />
        <Button>Send</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => {
          return <div></div>;
        })}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
