const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            // state.result += action.payload;
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            // state.lastValues.push(action.payload);
            break;
        case "SUBSTRACT":
            // state.result -= action.payload;
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            // state.lastValues.push(action.payload);
            break;
    }
    return state;
};
export default mathReducer;