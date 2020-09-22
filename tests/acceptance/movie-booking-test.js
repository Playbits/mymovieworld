import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | movie booking', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /movie-booking', async function(assert) {
    await visit('/movie-booking');
    assert.equal(currentURL(), '/movie-booking');
  });
});
