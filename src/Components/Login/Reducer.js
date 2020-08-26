import actions from './Actions';
const initialState = {};

const Reducer = (state = initialState,{type,payload}) => {
    switch(type) {
        case actions.UPDATE_USER_DATA:
            return {
                ...payload
            };
        default: 
            return state;
    }
}

export default Reducer;