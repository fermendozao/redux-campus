import {
  CHANNEL_MEDS_REQUEST,
  CHANNEL_MEDS_SUCCESS,
  CHANNEL_MEDS_FAILURE
} from '../actions/ChannelMeds';

const initialState = {
  isFetching: false,
  meds: [],
  error: null
};

const channelMeds = (state = initialState, action) => {
  switch (action.type) {
    case CHANNEL_MEDS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case CHANNEL_MEDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        meds: action.data
      };
    case CHANNEL_MEDS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export const medsByChannel = (state = {}, action) => {
  switch (action.type) {
    case CHANNEL_MEDS_REQUEST:
    case CHANNEL_MEDS_SUCCESS:
      return {
        ...state,
        [action.channelSlug]:
        channelMeds(state[action.channelSlug], action)
      };
    default:
      return state;
  }
};
