const SECRET    = process.env.SECRET;
const ACCESS_ID = process.env.ACCESS;

var assert = require('assert');
const docstore = require('../index').docstore;
const FileTypes = require('../index').FileTypes;

const S3Strategy = require('../index').S3Strategy;
docstore.use(new S3Strategy({accessKeyId : ACCESS_ID, secretAccessKey: SECRET, bucket: 'saasgrids-ui'}));

describe('Test cases for s3 strategy', function() {
  
  this.timeout(10000);
  

  it('should return files while doing ls', function(done) {
    docstore.listDocuments('').then(files=>{
        assert.notEqual(files.length, 0);
        assert.notEqual(files[0].Key, null);

        done()
    }).catch(err=>{
        console.log(err);
        assert.equal(err, null);
        done()
    })
  });

  it('should create a file', function(done) {
    docstore.createDocument('test2', FileTypes.csv, 'temp','a,b,c\n1,2,3\nz,x,c' ).then(res=>{
        assert.equal(res.key, 'temp/test2');
        done()
    }).catch(err=>{
        assert.equal(err, null);
        done()
    })
  });

  it('should delete the file', function(done) {
    docstore.deleteDocument('temp/test2').then(res=>{
        done()
    }).catch(err=>{
        assert.equal(err, null);
        done()
    })
  });

  

});

