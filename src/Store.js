import { createStore, applyMiddleware ,combineReducers } from 'redux'
import thunk from 'redux-thunk';
import  reducers from './reducers';
import { reducer as network  ,createNetworkMiddleware} from 'react-native-offline';

const rootReducer = combineReducers({
    reducers,
    network,
  });

  const networkMiddleware = createNetworkMiddleware({
    queueReleaseThrottle: 200,
  });



const store = createStore(rootReducer ,applyMiddleware(networkMiddleware ,thunk))
export default store ;


