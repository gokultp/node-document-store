'use strict';

function DocumentStore(){
  this._key = 'doc_store';
}

DocumentStore.prototype.use = function(strategy) {
  if (strategy === null){
    throw (new Error('No strategy found'));
  }
  this.strategy = strategy;
  return this;
};

DocumentStore.prototype.setAuthKeys = function(authKeys) {
  this.strategy.setAuthKeys(authKeys);
  return this;
};

DocumentStore.prototype.getDocuments = function() {
  return this.strategy.getDocuments();
};

DocumentStore.prototype.createDocument = function(name, data) {
  return this.strategy.createDocument(name, data);
};

DocumentStore.prototype.deleteDocument = function(identifier) {
  return this.strategy.deleteDocument(identifier);
};


