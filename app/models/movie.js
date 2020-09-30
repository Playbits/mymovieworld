import Model, { attr } from "@ember-data/model";

export default class MovieModel extends Model {
  @attr() adult;
  @attr() title;
  @attr() overview;
  @attr() release_date;
  @attr() vote_average;
  @attr() poster_path;
}
