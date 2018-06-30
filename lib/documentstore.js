'use strict';
/**
 * @class DocumentStore
 * Document store defines an instance of document store
 */
function DocumentStore(){
	this._key = 'doc_store';
}

/**
 * use selects the strategy for DocumentStore
 * @param {Object} strategy
 */
DocumentStore.prototype.use = function(strategy) {
	if (strategy == null){
		throw (new Error('No strategy found'));
	}
	this.strategy = strategy;
	return this;
};

/**
 * listDocuments will list all documents
 * @param {string} dirPath it will list all files in this particular path
 */
DocumentStore.prototype.listDocuments = function(dirPath) {
	if (this.strategy === null){
		throw (new Error('No strategy found'));
	}
  	return this.strategy.listDocuments(dirPath);
};

/**
 * creates a document
 * @param {string} name file name
 * @param {FileType} type type of file
 * @param {string} path path in which file to be saved
 * @param {string} data data to be written to file
 */
DocumentStore.prototype.createDocument = function(name, type, path, data) {
	if (this.strategy === null){
		throw (new Error('No strategy found'));
	}
	return this.strategy.createDocument(name, type, path, data);
};

/**
 * deletes file
 * @param {string} identifier identifier of file to be deleted
 */
DocumentStore.prototype.deleteDocument = function(identifier) {
	if (this.strategy === null){
		throw (new Error('No strategy found'));
	}
  	return this.strategy.deleteDocument(identifier);
};

module.exports = DocumentStore;


