## Classes

<dl>
<dt><a href="#DocumentStore">DocumentStore</a></dt>
<dd><p>DocumentStore
Document store defines an instance of document store</p>
</dd>
<dt><a href="#LocalStrategy">LocalStrategy</a></dt>
<dd><p>LocalStrategy
LocalStrategy defines an instance of document store that works with local file system</p>
</dd>
<dt><a href="#S3Strategy">S3Strategy</a></dt>
<dd><p>S3Strategy
S3Strategy defines an instance of document store that works with AWS S3</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#FileType">FileType</a> : <code>Object</code></dt>
<dd><p>File types defines the file types, its extension and mimetypes used in requests.</p>
</dd>
</dl>

<a name="DocumentStore"></a>

## DocumentStore
DocumentStore
Document store defines an instance of document store

**Kind**: global class  

* [DocumentStore](#DocumentStore)
    * [.use(strategy)](#DocumentStore+use)
    * [.listDocuments(dirPath)](#DocumentStore+listDocuments)
    * [.createDocument(name, type, path, data)](#DocumentStore+createDocument)
    * [.deleteDocument(identifier)](#DocumentStore+deleteDocument)

<a name="DocumentStore+use"></a>

### documentStore.use(strategy)
use selects the strategy for DocumentStore

**Kind**: instance method of [<code>DocumentStore</code>](#DocumentStore)  

| Param | Type |
| --- | --- |
| strategy | <code>Object</code> | 

<a name="DocumentStore+listDocuments"></a>

### documentStore.listDocuments(dirPath)
listDocuments will list all documents

**Kind**: instance method of [<code>DocumentStore</code>](#DocumentStore)  

| Param | Type | Description |
| --- | --- | --- |
| dirPath | <code>string</code> | it will list all files in this particular path |

<a name="DocumentStore+createDocument"></a>

### documentStore.createDocument(name, type, path, data)
creates a document

**Kind**: instance method of [<code>DocumentStore</code>](#DocumentStore)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | file name |
| type | [<code>FileType</code>](#FileType) | type of file |
| path | <code>string</code> | path in which file to be saved |
| data | <code>string</code> | data to be written to file |

<a name="DocumentStore+deleteDocument"></a>

### documentStore.deleteDocument(identifier)
deletes file

**Kind**: instance method of [<code>DocumentStore</code>](#DocumentStore)  

| Param | Type | Description |
| --- | --- | --- |
| identifier | <code>string</code> | identifier of file to be deleted |

<a name="LocalStrategy"></a>

## LocalStrategy
LocalStrategy
LocalStrategy defines an instance of document store that works with local file system

**Kind**: global class  

* [LocalStrategy](#LocalStrategy)
    * [.listDocuments(dirPath)](#LocalStrategy+listDocuments)
    * [.createDocument(name, type, path, data)](#LocalStrategy+createDocument)
    * [.deleteDocument(identifier)](#LocalStrategy+deleteDocument)

<a name="LocalStrategy+listDocuments"></a>

### localStrategy.listDocuments(dirPath)
listDocuments will list all documents

**Kind**: instance method of [<code>LocalStrategy</code>](#LocalStrategy)  

| Param | Type | Description |
| --- | --- | --- |
| dirPath | <code>string</code> | it will list all files in this particular path |

<a name="LocalStrategy+createDocument"></a>

### localStrategy.createDocument(name, type, path, data)
creates a document

**Kind**: instance method of [<code>LocalStrategy</code>](#LocalStrategy)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | file name |
| type | [<code>FileType</code>](#FileType) | type of file |
| path | <code>string</code> | path in which file to be saved |
| data | <code>string</code> | data to be written to file |

<a name="LocalStrategy+deleteDocument"></a>

### localStrategy.deleteDocument(identifier)
deletes file

**Kind**: instance method of [<code>LocalStrategy</code>](#LocalStrategy)  

| Param | Type | Description |
| --- | --- | --- |
| identifier | <code>string</code> | identifier of file to be deleted |

<a name="S3Strategy"></a>

## S3Strategy
S3Strategy
S3Strategy defines an instance of document store that works with AWS S3

**Kind**: global class  

* [S3Strategy](#S3Strategy)
    * [.listDocuments(dirPath)](#S3Strategy+listDocuments)
    * [.createDocument(name, type, path, data)](#S3Strategy+createDocument)
    * [.deleteDocument(identifier)](#S3Strategy+deleteDocument)

<a name="S3Strategy+listDocuments"></a>

### s3Strategy.listDocuments(dirPath)
listDocuments will list all documents

**Kind**: instance method of [<code>S3Strategy</code>](#S3Strategy)  

| Param | Type | Description |
| --- | --- | --- |
| dirPath | <code>string</code> | it will list all files in this particular path |

<a name="S3Strategy+createDocument"></a>

### s3Strategy.createDocument(name, type, path, data)
creates a document

**Kind**: instance method of [<code>S3Strategy</code>](#S3Strategy)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | file name |
| type | [<code>FileType</code>](#FileType) | type of file |
| path | <code>string</code> | path in which file to be saved |
| data | <code>string</code> | data to be written to file |

<a name="S3Strategy+deleteDocument"></a>

### s3Strategy.deleteDocument(identifier)
deletes file

**Kind**: instance method of [<code>S3Strategy</code>](#S3Strategy)  

| Param | Type | Description |
| --- | --- | --- |
| identifier | <code>string</code> | identifier of file to be deleted |

<a name="FileType"></a>

## FileType : <code>Object</code>
File types defines the file types, its extension and mimetypes used in requests.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| extension | <code>String</code> | defines the file extension of file type. |
| mime | <code>String</code> | defines the mime type used in requests. |

