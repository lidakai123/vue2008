export default {
    namespaced: true,
    state: {
        // jwt
        _token: "",
    },
    mutations: {
        // 更新设置jwt
        setJwt(state, arg) {
            state._token = arg;
            // 存到localStorage中一份
            localStorage.setItem("_token", arg);
        },
    },
    actions: {},
    getters: {},
};
