import Model, { attr } from "@ember-data/model";

export default class ResultModel extends Model {
  @attr() belongs_to_collection;
  @attr() adult;
  @attr() genres;
  @attr() title;
  @attr() overview;
  @attr() release_date;
  @attr() vote_average;
  @attr() poster_path;
  @attr() budget;
  @attr() production_companies;
  @attr() spoken_languages;
  @attr() vote_count;
  @attr() popularity;
}
