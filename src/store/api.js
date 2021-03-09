const axios = require("axios");

function getUrl() {
  return "";
}

async function internalRequest({ method, url, data, token }) {
  let baseUrl = getUrl();

  if (!baseUrl) {
    return;
  }
  let apiKey = "";

  if (token) apiKey = "Token " + token;

  return axios({
    method: method,
    headers: {
      Authorization: apiKey,
      "Content-Type": "application/json",
    },
    crossdomain: true,
    url: baseUrl + "/" + url,
    data: data,
  })
    .then(function(res) {
      if (res.data) return res.data;
      return null;
    })
    .catch(function(err) {
      var exception = {};

      if (err.response && err.response.data) {
        exception.data = err.response.data;
        exception.statusCode = err.response.status;
        throw exception;
      }
      throw err;
    });
}

export const state = () => ({
  loading: false,
  token: null,
  apiError: {},
});

export const mutations = {
  setLoading(state, loading) {
    state.loading = loading;
  },
  setToken(state, token) {
    state.token = token;
  },
  setApiError(state, apiError) {
    state.apiError = apiError;
  },
};

export const actions = {
  async doLogin({ commit, dispatch }, payload) {
    commit("setLoading", true);
    try {
      commit("setApiError", {});
      const res = await internalRequest({
        method: "POST",
        url: "auth/login",
        data: payload,
      });
      commit("setToken", res.token);
    } catch (err) {
      commit("setApiError", err.data);
    } finally {
      commit("setLoading", false);
    }
  },
};
