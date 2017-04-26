import {combineReducers} from 'redux';
import {channels as channelsList} from './Channels';
import {routerReducer as routing} from 'react-router-redux';

const rootReducer = combineReducers({
  channelsList,
  routing
});

export default rootReducer;
