import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class MovieRoute extends Route {
  @service store;
  async model(params) {
    const movie_id = params.movie_id;
    return this.store.find("result", movie_id);
  }
  // async model(params) {
  //   const movie_id = params.movie_id;
  //   const url = base_url + "/movie/" + movie_id;
  //   const request = await fetch(url, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + api_token,
  //     },
  //   });
  //   let response = await request.json();
  //   console.log(response);
  //   return response;
  // }
}
