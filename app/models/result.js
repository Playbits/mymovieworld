import Model, { attr } from "@ember-data/model";

export default class ResultModel extends Model {
  @attr() adult;
  @attr() backdrop_path;
  @attr() genre_ids;
  @attr() title;
  @attr() overview;
  @attr() release_date;
  @attr() vote_average;
  @attr() vote_average;
  @attr() poster_path;
  // id: 539885
  // original_language: "en"
  // original_title: "Ava"
  // overview: "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong."
  // popularity: 1574.716
  // poster_path: "/qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg"
  // release_date: "2020-08-06"
  // title: "Ava"
  // video: false
  // vote_average: 6
  // vote_count: 355
}
