const actions = {

    //hit the api inside the saga
    CREATE_TODO : 'CREATE_TODO',
    createTodo: (payload) => ({type: actions.CREATE_TODO,payload}),

    //update the store data inside the reducer
    ADD_TODO: 'ADD_TODO',
    addTodo: (payload) => ({type: actions.ADD_TODO,payload}),

    //hit the api inside the saga
    MARK_COMPLETED: 'MARK_COMPLETED',
    markCompleted : (payload) =>({type: actions.MARK_COMPLETED,payload}),

    //update the store
    UPDATE_STORE: 'UPDATE_STORE',
    updateStore: (payload) => ({type:actions.UPDATE_STORE,payload})
}

export default actions;