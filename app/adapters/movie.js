import ApplicationAdapter from "./application";

export default class MovieAdapter extends ApplicationAdapter {
  pathForType = function () {
    return "/movie";
  };
}
