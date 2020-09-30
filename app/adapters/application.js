import RESTAdapter from "@ember-data/adapter/rest";
import ENV from "mymovieworld/config/environment";
const api_token = ENV.API_TOKEN;
const base_url = "https://api.themoviedb.org";
const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + api_token,
};
export default class ApplicationAdapter extends RESTAdapter {
  host = base_url;
  namespace = "3";
  headers = headers;
  pathForType = function () {
    return "discover/movie";
  };
  //  defaultSerializer: '-default'
}
