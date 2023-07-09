import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { playerSlice } from "../store/reducers/PlayerReducer";
export const useAction = () => {
  const dispatch = useDispatch();
  console.log(playerSlice.actions);
  return bindActionCreators(playerSlice.actions, dispatch);
};
