'use strict';
const fs = require('fs');

const DEFAULT_OPTIONS = {
  rootDir :'.'
}

function LocalStrategy(options=DEFAULT_OPTIONS){
  this._rootDir = options.rootDir;
}

LocalStrategy.prototype.listDocuments = function(dirPath='') {
  const completePath = this._rootDir + '/' + dirPath;
  return new Promise(function (resolve, reject) {
    return fs.readdir(completePath, function (err, files) {
      if(err){
        return reject(err);
      }
      return resolve(files);
    });
  });
};

LocalStrategy.prototype.createDocument  = function (name, path='', data) {
  const completePath = this._rootDir + '/' + path + '/' + name;
  return new Promise(function (resolve, reject) {
    return fs.writeFile(completePath, data, function (err, files) {
      if(err){
        return reject(err);
      }
      return resolve(files);
    });
  });
};


LocalStrategy.prototype.deleteDocument  = function (name, path='') {
  const completePath = this._rootDir + '/' + dirPath + '/' + name;
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
