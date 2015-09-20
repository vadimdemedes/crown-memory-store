'use strict';

/**
 * Dependencies
 */

const MemoryStore = require('./');
const test = require('ava');


/**
 * Tests
 */

test('get value', function (t) {
  let store = new MemoryStore();

  store.store['some-key'] = true;

  return store.get('some-key')
    .then(function (value) {
      t.true(value);
    });
});

test('set value', function (t) {
  let store = new MemoryStore();

  return store.set('some-key', true)
    .then(function () {
      t.true(store.store['some-key']);
    });
});

test('delete value', function (t) {
  let store = new MemoryStore();

  store.store['some-key'] = true;

  return store.destroy('some-key')
    .then(function () {
      t.is(store.store['some-key'], null);
    });
});

