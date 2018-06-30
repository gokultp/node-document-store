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


DocumentStore.prototype.listDocuments = function(dirPath) {
  	return this.strategy.listDocuments(dirPath);
};

DocumentStore.prototype.createDocument = function(name, type, path, data) {
	return this.strategy.createDocument(name, type, path, data);
};

DocumentStore.prototype.deleteDocument = function(identifier) {
  	return this.strategy.deleteDocument(identifier);
};

module.exports = DocumentStore;


