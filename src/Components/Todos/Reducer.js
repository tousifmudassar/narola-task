import actions from './Actions';
const initialState = [];

const Reducer = (state = initialState,action) => {
    let newState;
    switch(action.type) {
        case actions.ADD_TODO:
            newState = JSON.parse(JSON.stringify(state));
            newState.push({
                ...action.payload,
                id: state.length + 1
            });
            return newState;
        case actions.UPDATE_STORE:
            newState = JSON.parse(JSON.stringify(state));
            newState.find((todo) => todo.id === action.payload ).completed = true;
            return newState;
        default:
            return state;
    }
}

export default Reducer;