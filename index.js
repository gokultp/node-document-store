'use strict';
var DocumentStore = require('./lib/documentstore');
var LocalStrategy = require('./lib/strategy/LocalStrategy');
var S3Strategy = require('./lib/strategy/S3Strategy');
var FileTypes = require('./lib/filetypes');

module.exports = {
  docstore: new DocumentStore(),
  LocalStrategy: LocalStrategy,
  S3Strategy: S3Strategy,
  FileTypes : FileTypes
};
