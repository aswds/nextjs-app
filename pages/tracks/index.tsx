import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Button, Card, Grid, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { ITrack } from "../../Types/track";
import TrackList from "../../components/TrackList";
const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: "1",
      name: "Name 1",
      artist: "Artist 1",
      text: "Text 1",
      listens: 19,
      audio: "URL",
      picture: require("../../pictures/images_1.jpg"),
      comments: [],
    },
    {
      _id: "2",
      name: "Name 2",
      artist: "Artist 2",
      text: "Text 2",
      listens: 29,
      audio: "URL",
      picture: require("../../pictures/Screenshot 2022-10-19 230753.png"),
      comments: [],
    },
    {
      _id: "3",
      name: "Name 3",
      artist: "Artist 3",
      text: "Text 3",
      listens: 39,
      audio: "URL",
      picture: require("../../pictures/MyT5g7zxHSU.jpg"),
      comments: [],
    },
  ];
  return (
    <MainLayout>
      <Grid container justifyContent={"center"}>
        <Card style={{ width: 900 }}>
          <Box p={2}>
            <Grid container justifyContent={"space-between"}>
              <h1>List of tracks</h1>
              <Button onClick={() => router.push("/tracks/create")}>
                Download
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
