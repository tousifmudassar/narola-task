const actions = {
    USER_LOGIN: 'USER_LOGIN',
    userLogin: (payload) => ({type: actions.USER_LOGIN,payload}),

    USER_LOGOUT: 'USER_LOGOUT',
    userLogout: (payload) => ({type: actions.USER_LOGOUT,payload}),

    UPDATE_USER_DATA: 'UPDATE_USER_DATA',
    updateUserData: (payload) => ({type: actions.UPDATE_USER_DATA,payload})
}

export default actions;