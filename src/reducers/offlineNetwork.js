import { offlineActionTypes } from 'react-native-offline';




const initialState = {
    isConnected: true,
    //actionQueue: Array<*>

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case offlineActionTypes.FETCH_OFFLINE_MODE:
            return {
                ...state, isConnected: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;