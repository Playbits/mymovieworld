import Route from "@ember/routing/route";
import ENV from "mymovieworld/config/environment";
const api_token = ENV.API_TOKEN;
const base_url = "https://api.themoviedb.org/3";

export default class MovieRoute extends Route {
  async model(params) {
    const movie_id = params.movie_id;
    const url = base_url + "/movie/" + movie_id;
    const request = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + api_token,
      },
    });
    let response = await request.json();
    console.log(response);
    return response;
  }
}
