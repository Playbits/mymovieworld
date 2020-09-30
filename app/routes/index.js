import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class IndexRoute extends Route {
  @service store;
  async model() {
    const response = this.store.findAll("movie");
    return response;
  }
}
