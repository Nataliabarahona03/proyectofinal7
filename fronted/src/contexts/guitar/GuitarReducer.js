const GuitarReducer = (globalState, action) => {
    switch (action.type) {
        case "OBTENER_GUITARRAS":
            return {
                ...globalState,
                guitars: action.payload
            }    
        default:
            return globalState;
    }
}

export default GuitarReducer;