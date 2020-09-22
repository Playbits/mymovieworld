import Route from "@ember/routing/route";
import ENV from "mymovieworld/config/environment";
const api_token = ENV.API_TOKEN;
const base_url = "https://api.themoviedb.org/3";

export default class IndexRoute extends Route {
  async model() {
    const url = base_url + "/discover/movie";
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
  //   async allMovies() {
  //     const url = base_url + "/movie/76341";
  //     let request = await fetch(url, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + api_token,
  //       },
  //     });
  //     let response = await request.json();
  //     return response;
  //   }
}
