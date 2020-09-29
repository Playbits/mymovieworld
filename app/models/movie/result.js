import Model, { attr } from '@ember-data/model';

export default class MovieResultModel extends Model {
    @attr() adult;
    @attr() backdrop_path;
    @attr() genre_ids;
    // id: 539885
}
