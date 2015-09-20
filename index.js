'use strict';

/**
 * Dependencies
 */

var Promise = require('pinkie-promise');


/**
 * Expose `crown-memory-store`
 */

module.exports = MemoryStore;


/**
 * Memory store for Crown
 */

function MemoryStore () {
  if (!(this instanceof MemoryStore)) return new MemoryStore();

  this.store = Object.create(null);
}


/**
 * Get value
 *
 * @param {String} key
 * @return {Mixed}
 */

MemoryStore.prototype.get = function (key) {
  var value = this.store[key];

  if (!value) {
    return Promise.reject();
  }

  return Promise.resolve(value);
};


/**
 * Set value
 *
 * @param {String} key
 * @param {Mixed} value
 * @return {Mixed}
 */

MemoryStore.prototype.set = function (key, value) {
  this.store[key] = value;

  return Promise.resolve();
};


/**
 * Delete value
 *
 * @param {String} key
 */

MemoryStore.prototype.destroy = function (key) {
  this.store[key] = null;

  return Promise.resolve();
};
