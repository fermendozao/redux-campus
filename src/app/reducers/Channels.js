/* --------------------
 * Channels reducers
 --------------------*/

// Import actions
import {
  CHANNELS_REQUEST,
  CHANNELS_SUCCESS,
  CHANNELS_FAILURE
} from '../actions/Channels';

// Define reducer's initial state
const initialState = {
  isFetching: false,
  channels: [],
  error: null
};

// Define reducer
export const channels = (state = initialState, action) => {
  switch (action.type) {
    case CHANNELS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case CHANNELS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        channels: action.channels
      };
    case CHANNELS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};
