import Model, { attr, belongsTo } from "@ember-data/model";

export default class MoviesModel extends Model {
  @belongsTo("result") results;
  @attr() page;

  // @attr() total_result;
  // @attr() results;
}
