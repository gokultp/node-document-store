'use strict';
const fs = require('fs');

const DEFAULT_OPTIONS = {
    rootDir :'~'
}

function LocalStrategy(options=DEFAULT_OPTIONS){
    this._rootDir = options.rootDir;
}

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
