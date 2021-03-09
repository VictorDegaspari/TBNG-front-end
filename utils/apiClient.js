"use strict";

const axios = require("axios");
const urljoin = require("url-join");
const localStore = require("./localStorage");
const queryString = require("query-string");

function getUrl() {
  if (process.browser) {
    switch (window.location.hostname) {
      case "localhost":
        return "http://localhost:8000/";
    }
  }
  return "";
}

function internalRequest(method, url, data, skipToken) {
  let baseUrl = getUrl();

  if (!baseUrl) {
    return;
  }
  let apiKey = "";

  if (!skipToken) apiKey = "Token " + localStore.userToken;

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

function internalDelete(url) {
  return internalRequest("delete", url, null);
}

function internalGet(url) {
  return internalRequest("get", url, null);
}

function internalPost(url, data, skipToken) {
  return internalRequest("post", url, data, skipToken);
}

function internalPut(url, data) {
  return internalRequest("put", url, data);
}

function internalPatch(url, data) {
  return internalRequest("patch", url, data);
}
class ApiClient {
  async login(username, password) {
    const payload = {
      username: username,
      password: password,
    };

    const result = await internalPost(urljoin("auth", "login"), payload, true);
    localStore.userToken = result.token;
    return result;
  }

  // CLIENTE
  createMember(obj) {
    return internalPost("members/", obj);
  }
}

export default new ApiClient();
