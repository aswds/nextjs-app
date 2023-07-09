import React from "react";
import { Grid } from "@mui/material";

interface TrackProgressProps extends React.PropsWithChildren {
  left: number;
  right: number;
  onChange: (e: any) => void;
}

const TrackProgress: React.FC<TrackProgressProps> = ({
  left,
  right,
  onChange,
  children,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <input
        type="range"
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div>
        {left} / {right}
      </div>
    </div>
  );
};

export default TrackProgress;
