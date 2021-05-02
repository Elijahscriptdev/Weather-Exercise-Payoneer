import { WEATHER_INFO_SUCCESS, WEATHER_INFO_FAIL } from "../actions/types";

const initialState = {
  loading: true,
  data: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case WEATHER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case WEATHER_INFO_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
