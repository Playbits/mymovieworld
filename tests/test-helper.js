import Application from 'mymovieworld/app';
import config from 'mymovieworld/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
