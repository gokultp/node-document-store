'use strict';
const fs = require('fs');

const DEFAULT_OPTIONS = {
    rootDir :'~'
}


/**
 * @class LocalStrategy
 * LocalStrategy defines an instance of document store that works with local file system
 */
function LocalStrategy(options=DEFAULT_OPTIONS){
    this._rootDir = options.rootDir;
}

/**
 * listDocuments will list all documents
 * @param {string} dirPath it will list all files in this particular path
 */
LocalStrategy.prototype.listDocuments = function(dirPath='') {

	const completePath = this._rootDir + '/' + dirPath;
	console.log(this._rootDir, dirPath, completePath)

	return new Promise(function (resolve, reject) {
		return fs.readdir(completePath, function (err, files) {
		if(err){
			return reject(err);
		}
		return resolve(files.map(file=>({key: file})));
		});
	});
};

/**
 * creates a document
 * @param {string} name file name
 * @param {FileType} type type of file
 * @param {string} path path in which file to be saved
 * @param {string} data data to be written to file
 */
LocalStrategy.prototype.createDocument  = function (name, type, path, data) {
	var completePath = this._rootDir + '/' + path + '/' + name + type.extension;

	if(!path || path == '.'){
		var completePath = this._rootDir +  '/' + name + type.extension;
	}
	return new Promise(function (resolve, reject) {
		return fs.writeFile(completePath, data, function (err) {
		if(err){
			return reject(err);
		}
		return resolve({key: name});
		});
	});
};

/**
 * deletes file
 * @param {string} identifier identifier of file to be deleted
 */
LocalStrategy.prototype.deleteDocument  = function (name) {
	var completePath = this._rootDir + '/'  + name;
	return new Promise(function (resolve, reject) {
		return fs.unlink(completePath,function(err){
			if(err){
				return reject(err);
			}
			return resolve(null);
		});
	});
}




module.exports = LocalStrategy;
