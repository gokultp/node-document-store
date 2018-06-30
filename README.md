# Document Store

> An npm package for managing document store in various object storage providers and in local storage.

[![NPM Version][npm-image]][npm-url]
[![Linux Build][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

## Install

```bash
#not published to npm yet
git clone https://github.com/gokultp/node-document-store
npm link document-store

```

## Usage

### Example for S3 strategy

```javascript
const SECRET    = process.env.SECRET;
const ACCESS_ID = process.env.ACCESS;
const docstore = require('../index').docstore;
const FileTypes = require('../index').FileTypes;
const S3Strategy = require('../index').S3Strategy;
docstore.use(new S3Strategy({accessKeyId : ACCESS_ID, secretAccessKey: SECRET, bucket: 'bucket'}));

//listing documents
docstore.listDocuments().then(files=>{
    console.log(files)
}).catch(err=>{
    console.log(err);
})

    
```

### Example for Local strategy

```javascript
const SECRET    = process.env.SECRET;
const ACCESS_ID = process.env.ACCESS;
const docstore = require('../index').docstore;
const FileTypes = require('../index').FileTypes;
const LocalStrategy = require('../index').LocalStrategy;
docstore.use(new LocalStrategy({rootDir: './temp'}));

//listing documents
docstore.listDocuments().then(files=>{
    console.log(files)
}).catch(err=>{
    console.log(err);
})

    
```

The library can be enhanced with more strategies.

## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/live-xxx.svg
[npm-url]: https://npmjs.org/package/live-xxx
[travis-image]: https://travis-ci.org/gokultp/node-document-store.svg?branch=master
[travis-url]: https://travis-ci.org/gokultp/node-document-store
[coveralls-image]: https://img.shields.io/coveralls/live-js/live-xxx/master.svg
[coveralls-url]: https://coveralls.io/r/live-js/live-xxx?branch=master