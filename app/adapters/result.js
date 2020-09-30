import ApplicationAdapter from "./application";

export default class MovieAdapter extends ApplicationAdapter {
  pathForType = function () {
    return "movie";
  };
  handleResponse = (status, header, payload, reqdata) => {
    const data = payload;
    const result = { result: data };
    return result;
  };
}
