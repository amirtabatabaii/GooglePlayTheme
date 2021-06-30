import { GAME_LIST } from "./types";

// get Game Lists
export const getGameLists = (listOfGames) => (dispatch) => {
  dispatch({
    type: GAME_LIST,
    payload: { listOfGames },
  });
};
