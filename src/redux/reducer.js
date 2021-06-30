import { GAME_LIST } from "./types";

import initialState from "./store";

export default function (state = initialState, action) {
  switch (action.type) {
    case GAME_LIST:
      return {
        ...state,
        listOfGames: action.payload.listOfGames,
      };

    default:
      return {
        ...state,
      };
  }
}
