import axios from 'axios';

export const CHANNEL_MEDS_REQUEST = 'CHANNEL_MEDS_REQUEST';
export const CHANNEL_MEDS_SUCCESS = 'CHANNEL_MEDS_SUCCESS';
export const CHANNEL_MEDS_FAILURE = 'CHANNEL_MEDS_FAILURE';

const requestChannelMeds = () => ({
  type: CHANNEL_MEDS_REQUEST,
});

const successChannelMeds = (data, channelSlug) => ({
  type: CHANNEL_MEDS_SUCCESS,
  channelSlug,
  data
});

const failureChannelMeds = error => ({
  type: CHANNEL_MEDS_FAILURE,
  error
});

const fetchMeds = channelSlug => dispatch => {
  dispatch(requestChannelMeds);

  return axios
    .get(`channels/${channelSlug}/meds`)
    .then(response => {
      dispatch(successChannelMeds(response.data.results, channelSlug));
    })
    .catch(error => {
      dispatch(failureChannelMeds(error));
    });
};

const shouldFetchMeds = (state, channelSlug) => {
  const meds = state.medsByChannel[channelSlug];
  if (!meds) {
    return true;
  }
  if (meds.isFetching) {
    return false;
  }
};

export const fetchMedsIfNeeded = channelSlug => (dispatch, getState) => {
  if (shouldFetchMeds(getState(), channelSlug)) {
    return dispatch(fetchMeds(channelSlug));
  }
};
