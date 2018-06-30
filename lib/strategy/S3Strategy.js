'use strict';
const AWS = require('aws-sdk')
const DEFAULT_OPTIONS = {
    accessKeyId: '',
    secretAccessKey : '',
    bucket : ''
}


/**
 * @class S3Strategy
 * S3Strategy defines an instance of document store that works with AWS S3
 */
function S3Strategy(options=DEFAULT_OPTIONS){
    AWS.config.update(options);
    this.bucket = options.bucket;
    this.s3 = new AWS.S3();
}

/**
 * listDocuments will list all documents
 * @param {string} dirPath it will list all files in this particular path
 */
S3Strategy.prototype.listDocuments = function(dirPath='') {
    var params = {
        Bucket: this.bucket,
    };
    let self    = this;
    return new Promise(function (resolve, reject) {
        self.s3.listObjects(params, function (err, data) {
            if(err){
                return reject(err);
            }
            return resolve(data.Contents);
        })
    })
};

/**
 * creates a document
 * @param {string} name file name
 * @param {FileType} type type of file
 * @param {string} path path in which file to be saved
 * @param {string} data data to be written to file
 */
S3Strategy.prototype.createDocument  = function (name, type, path='', data) {
    var params = {
        Bucket: this.bucket,
        Key: path+ '/' + name, 
        Body: data,
        ContentType: type.mime
    };
    var options = {partSize: 10 * 1024 * 1024, queueSize: 1};
    let self    = this;

    return new Promise(function (resolve, reject) {    
        self.s3.upload(params, options, function(err, data) {
            if(err){
                return reject(err);
            }
            return resolve(data);
        });
    })
    
};

/**
 * deletes file
 * @param {string} identifier identifier of file to be deleted
 */
S3Strategy.prototype.deleteDocument  = function (identifier) {
    var params = {
        Bucket: this.bucket,
        Key: identifier, 
    };
    let self    = this;

    return new Promise(function (resolve, reject) {    
        self.s3.deleteObject(params, function(err, data) {
            if(err){
                return reject(err);
            }
            return resolve(data);
        });
    })

};




module.exports = S3Strategy;
