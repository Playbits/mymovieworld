import EmberRouter from "@ember/routing/router";
import config from "mymovieworld/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("movie", { path: "/movie/:movie_id" });
});
