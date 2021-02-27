import AuthService from '@/auth_services/auth.service';
import jwt_decode from "jwt-decode";

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit, dispatch }, user) {
      return AuthService.login(user).then(
        user => {
            console.log('logou');
          commit('loginSuccess', user);
          dispatch('autoRefresh', user);
          return Promise.resolve(user);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    refresh({ commit, dispatch, state }){
        console.log('faz o refresh');
        AuthService.refresh(state.user).then(
            response => {
                commit('refreshSucess', response.access);
                dispatch('autoRefresh', state.user);
                return Promise.resolve(response);
            },
            error => {
                commit('refreshFailure');
                return Promise.reject(error)
            }
        );
    },
    // TODO: Refactor
    // This auto refresh I get here https://stackoverflow.com/questions/55747521/how-to-implement-auto-refresh-in-client-sidevue-js
    // but maybe there is a better option with axios interceptor
    autoRefresh ({ dispatch, state }, credentials) {
        if (state.status.loggedIn){
            console.log('vai fazer o refresh');
            const { access } = credentials;
            const { exp } = jwt_decode(access);
            const now = Date.now() / 1000;
            let timeUntilRefresh = exp - now;
            timeUntilRefresh -= (1 * 60);
            setTimeout(() => dispatch('refresh'), timeUntilRefresh * 1000);
        }
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        response => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    refreshSucess(state, acess) {
        state.status.loggedIn = true;
        state.user.access = acess;
    },
    refreshFailure(state) {
        state.status.loggedIn = false;
        state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  }
};
