import React, { useEffect, useState } from "react";
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import styles from "../styles/Player.module.scss";
import { ITrack } from "../Types/track";
import TrackProgress from "./TrackProgress";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useAction } from "../hooks/useAction";
import { useDispatch } from "react-redux";
import {
  playTrack,
  pauseTrack,
  setVolume,
  setCurrentTime,
  setDuration,
  setActive,
} from "../store/reducers/PlayerReducer";

let audio: HTMLAudioElement;
const Player = () => {
  const track: ITrack = {
    _id: "1",
    name: "Name 1",
    artist: "Artist 1",
    text: "Text 1",
    listens: 19,
    audio:
      "http://localhost:5000/audio/f1e4b013-69ab-4e37-9581-6ce5364b8584.wav",
    picture: require("../pictures/images_1.jpg"),
    comments: [],
  };
  const { active, currentTime, duration, pause, volume } = useTypedSelector(
    (state) => state.player
  );
  const dispatch = useDispatch();
  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    dispatch(setVolume(Number(e.target.value)));
  };
  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    dispatch(setCurrentTime(Number(e.target.value)));
  };
  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
  }, [active]);

  const setAudio = () => {
    if (active) {
      audio.src = active.audio;
      console.log(active);
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        dispatch(setDuration(audio.duration));
      };
      audio.ontimeupdate = () => {
        dispatch(setCurrentTime(audio.currentTime));
      };
    }
  };

  const play = () => {
    if (pause) {
      dispatch(playTrack());
      audio.play();
    } else {
      dispatch(pauseTrack());
      audio.pause();
    }
  };
  if (!active) {
    return null;
  }
  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {!pause ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid
        container
        direction={"column"}
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{active?.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{active?.artist}</div>
      </Grid>
      <TrackProgress
        left={Math.ceil(currentTime)}
        right={Math.ceil(duration)}
        onChange={changeCurrentTime}
      />

      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={volume} right={100} onChange={changeVolume} />
    </div>
  );
};

export default Player;
