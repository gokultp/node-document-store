'use strict';
var DocumentStore = require('./lib/documentstore');
var LocalStrategy = require('./lib/strategy/LocalStrategy');

module.exports = {
  docstore: new DocumentStore(),
  LocalStrategy: LocalStrategy
};
