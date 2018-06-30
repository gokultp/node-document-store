'use strict';
const AWS = require('aws-sdk')
const DEFAULT_OPTIONS = {
    accessKeyId: '',
    secretAccessKey : '',
    bucket : ''
}

function S3Strategy(options=DEFAULT_OPTIONS){
    AWS.config.update(options);
    this.bucket = options.bucket;
    this.s3 = new AWS.S3();
}

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
