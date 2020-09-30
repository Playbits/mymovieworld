import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class MovieRoute extends Route {
  @service store;
  async model(params) {
    const movie_id = params.movie_id;
    return this.store.find("result", movie_id);
  }
}
