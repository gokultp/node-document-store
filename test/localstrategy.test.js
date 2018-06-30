var assert = require('assert');
const localStore = require('../index').docstore;
const DIR_PATH  = './temp';
const FileTypes = require('../index').FileTypes;

const LocalStrategy = require('../index').LocalStrategy;
localStore.use(new LocalStrategy({rootDir: DIR_PATH}));

describe('Test cases for local strategy', function() {
  
  this.timeout(10000);
  
  

  

//   it('should  return files while doing ls', function(done) {
//     localStore.listDocuments().then(files=>{
// 		console.log(files)
//         assert.equal(files.length, 0);
//         done()
//     }).catch(err=>{
//         assert.equal(err, null);
//         done()
//     })
//   });

//   it('should create a file', function(done) {
//     localStore.createDocument('test2', FileTypes.csv, null,'a,b,c\n1,2,3\nz,x,c' ).then(res=>{
//         assert.equal(res.key, 'test2');
//         done()
//     }).catch(err=>{
//       	console.log(err)
//         assert.equal(err, null);
//         done()
//     })
//   });

  

//   it('should delete the file', function(done) {
//     localStore.deleteDocument('test2.csv').then(res=>{
//         done()
//     }).catch(err=>{
// 		console.log(err)
//         assert.equal(err, null);
//         done()
//     })
//   });

  

});
