import React from "react";
import { ITrack } from "../Types/track";
import { Card, Grid, IconButton } from "@mui/material";
import styles from "../styles/TrackItem.module.scss";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { playTrack, setActive } from "../store/reducers/PlayerReducer";
import { useDispatch } from "react-redux";
interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}
const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  const dispatch = useDispatch();

  const router = useRouter();

  const play = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    dispatch(setActive(track));
    dispatch(playTrack());
  };
  return (
    <Card
      className={styles.track}
      onClick={() => router.push("/tracks/" + track._id)}
    >
      <IconButton onClick={play}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Image width={70} height={70} src={track.picture} alt={"track image"} />
      <Grid
        container
        direction={"column"}
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
      </Grid>
      {active && <div>02:55 / 03:52</div>}
      <IconButton
        onClick={(e) => e.stopPropagation()}
        style={{ marginLeft: "auto" }}
      >
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
