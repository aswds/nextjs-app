import {
  PlayerAction,
  PlayerActionTypes,
  PlayerState,
} from "../../Types/player";
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { bindActionCreators } from "redux";

const initialState: PlayerState = {
  currentTime: 0,
  pause: true,
  duration: 0,
  volume: 50,
  active: null,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playTrack: (state) => {
      state.pause = false;
    },
    pauseTrack: (state) => {
      state.pause = true;
    },
    setActive: (state, action) => {
      state.active = action.payload;
      state.duration = 0;
      state.currentTime = 0;
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },

    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.player,
      };
    },
  },
});

export const {
  setActive,
  setCurrentTime,
  setDuration,
  setVolume,
  pauseTrack,
  playTrack,
} = playerSlice.actions;

export default playerSlice.reducer;
