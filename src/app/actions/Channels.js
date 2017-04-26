import axios from 'axios';

export const CHANNELS_REQUEST = 'CHANNELS_REQUEST';
export const CHANNELS_SUCCESS = 'CHANNELS_SUCCESS';
export const CHANNELS_FAILURE = 'CHANNELS_FAILURE';

const requestChannels = () => ({
  type: CHANNELS_REQUEST
});

const receiveChannels = data => ({
  type: CHANNELS_SUCCESS,
  channels: data
});

const failureChannels = error => ({
  type: CHANNELS_FAILURE,
  error
});

export const fetchChannels = () => dispatch => {
  dispatch(requestChannels());

  return axios
    .get('/channels')
    .then(response => {
      console.log(response);
      dispatch(receiveChannels(response.data.results));
    })
    .catch(error => {
      console.log(error);
      dispatch(failureChannels(error));
    });
};
