const docstore = require('../index').docstore;
var LocalStrategy = require('../index').LocalStrategy;

docstore.use(new LocalStrategy({rootDir: '.'}));

docstore.listDocuments('.').then(console.log).catch(console.log)