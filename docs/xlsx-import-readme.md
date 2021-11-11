---
slug: ./xlsx-import
id: xlsx-import
sidebar_label: XLSX-Import
sidebar_position: 1
---

# XLSX-Import

[![NPM](https://img.shields.io/npm/l/xlsx-import)![npm](https://img.shields.io/npm/v/xlsx-import)](https://www.npmjs.com/package/xlsx-import) [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/siemienik/xtoolset/xlsx-import)](https://github.com/Siemienik/xtoolset/actions) [![codecov](https://codecov.io/gh/Siemienik/xtoolset/branch/master/graph/badge.svg?flag=xlsx-import)](https://codecov.io/gh/Siemienik/xtoolset/tree/master/packages/xlsx-import)

_Github: [https://github.com/Siemienik/XToolset/.../xlsx-import](https://github.com/Siemienik/XToolset/tree/master/packages/xlsx-import)_

Importing data from xlsx as simple as possible and map into configured data model with fully TypeScript typing support.

Part of **XToolset** - collection of tools makes handling spreadsheet handy, easy with great developer experience.

## Getting Started

### 1. Install the package

```shell script
npm i xlsx-import --save
```

### 2. Declare types if using TypeScript

```ts
interface Book {
    Id: number;
    Title: string;
    Author: string;
}

interface Person {
    FirstName: string;
    SecondName: string;
    Age: number;

    EmployedIn: string;
    IsUnemployed: boolean;
    IsEmployed: boolean;
}
```

### 3. Write a config

```ts
    const config = {
        books: {
            type: 'list',
            worksheet: 'Favourites',
            columns: [
                {
                    index: 1, // column index (1,2,3....n); `1` for column `A`
                    key: 'Id', // output item's field
                    mapper: (v: string) => Number.parseInt(v) // nullable, for transformating values
                },
                {index: 2, key: 'Title'}, // column `B`
                {index: 5, key: 'Author'}, // column `E`
            ],
            rowOffset: 1, // offset header row
        },
        owner: {
            worksheet: 'About list owner',
            type: 'object',
            fields: [
                {row: 2, col: 1, key: 'FirstName'}, // `A2`
                {row: 2, col: 2, key: 'SecondName'}, // `B2`
                {row: 3, col: 1, key: 'Age', mapper: Number.parseInt}, // `A3`
            ]
        },
    };
```

### 4. Use mappers (optional)

Mapper is a function that transforms values. You can use [built-in mappers](#mappers) or write your own.

```ts
import { upperCaseMapper, isEmpty, isFilled, isValue } from 'xlsx-import/lib/mappers';

// isValue: assert / check the value
const isMale = isValue(['male', 'm']);
const isFemale = isValue(['female', 'f']);

const config = {
    // ...
    owner: {
        worksheet: 'About list owner',
        type: 'object',
        fields:[
            {row: 2, col: 1, key: 'FirstName'},
            {row: 2, col: 2, key: 'SecondName', mapper: upperCaseMapper},
            {row: 3, col: 1, key: 'Age', mapper: Number.parseInt},
            // three fields based on one cell but with different mapper
            {row: 2, col: 3, key: 'EmployedIn'},
            {row: 2, col: 3, key: 'IsUnemployed', mapper: isEmpty},
            {row: 2, col: 3, key: 'IsEmployed', mapper: isFilled},
            // custom mappers defined above
            {row: 2, col: 3, key: 'isMale', mapper: isMale},
            {row: 2, col: 3, key: 'isFemale', mapper: isFemale},
        ]
    },
};
```

### 5. Import data

```ts
const factory = new ImporterFactory();

//...

const importer = await factory.from(filePath);
const books = importer.getAllItems<Book[]>(config.books); // it returns `Book[]`
const book = importer.getFirstItem<Book>(config.books); // it returns first `Book` item
const author = importer.getFirstItem<Person>(config.owner); // it returns `Person`

```

## Command Line Interface (CLI)

It is possible to use the command line interface [read more about xlsx-import-cli](./xlsx-import-cli-readme.md).

## Examples

Example integrations with `xlsx-import` are placed in [samples](https://github.com/Siemienik/XToolSet/tree/master/samples) directory. Currently, available:

### Frontend frameworks

* [Vue sample](https://github.com/Siemienik/XToolSet/tree/master/samples/xlsx-import%2Bvue) - it is a web app created with Vue that displays parsed xlsx file.
* [React sample](https://github.com/Siemienik/XToolSet/tree/master/samples/xlsx-import%2Breact) - it is a web app created with React that displays parsed xlsx file.
* [Angular sample](https://github.com/Siemienik/XToolSet/tree/master/samples/xlsx-import%2Bangular) - it is a web app created with Angular that displays parsed xlsx file.

### Console / CLI

* [NodeJS sample](https://github.com/Siemienik/XToolSet/tree/master/samples/xlsx-import%2Bnodejs) of **importing an invoice** - it is pure JS example which runs on nodejs.
* [NodeJS + TS sample](https://github.com/Siemienik/XToolSet/tree/master/samples/xlsx-import%2Bnodejs%2Bts) of **importing an invoice** - it is Typescript example that can be transpiled down to pure JS or run directly with ts-node.
* [**:star: Command line of xlsx-import**](https://github.com/Siemienik/XToolSet/tree/master/samples/xlsx-import-cli)  examples with prepared scripts based on cli version of xlsx-import.

### Backend

* [ExpressJS sample](https://github.com/Siemienik/XToolSet/tree/master/samples/xlsx-import%2Bexpress) - it is a small service created with ExpressJS can parse xlsx files with concrete structure

## The Configuration

Xlsx supports two modes of importing files: [Vertical List](#type-listvertical) and [Single Object](#type-singleobject).

**Example:**

```js
const cfg = {
    // Indicates which worksheet should be used for data source .
    // For CSV typically `sheet 1` works perfectly.
    // string, required.
    worksheet:'sheet 1',

    // Indicates importing strategy, described below
    type : 'object' // or 'list'

    // ... type required fields, read below
}
```

* **`worksheet`**

(string, required) Indicates which worksheet should be used for data source. For CSV typically `sheet 1` works perfectly.

* **`types`**

| Enum `ImportType` | Raw values | Description
|-----|------------|-----------
| **Default:** <br/>`List`, aliases: `ListVertical`,  `Vertical`  | `list`, `list-vertical`, `vertical` | Used to import list of objects from worksheet reading from top to down (row by row). Each field has to defined column index (`A` is `1`, `B` is `2` ... etc.). Fallback mechanism use this option for incorrect `type` value (warn message will be printed).
| `Object`, aliases: `Single`,  `Singleton`  | `object`, `single`, `singletion` | Used to import single object from worksheet. Each field has to has defined row&col index.

### Type: `ListVertical`

**For type values:** `list`, `list-vertical`, `vertical`

`ListVertical` iterates each row after `offset` and read data by using configured columns indexes.

**Example:**

```js
const cfg = {
    worksheet:'sheet 1',
    type : 'list',

    // How many rows should omit, default 0
    rowOffset: 1,

    // Configure columns
    columns: [
        {
            // Column index (1,2,3....n); `1` for column `A`
            index: 1,

            // Indicade where in imported object data should be placed
            key: 'id',

            // A function which allow us to map a result field.
            // The xlsx-importer has build-in mappers, @see #Mappers
            mapper: (v: string) => Number.parseInt(v)
        },
        /* more columns ... */
    ],
}
```

### Type: `SingleObject`

**For type values:** `object`, `single`, `singletion`

`SingleObject` do **not** iterate through the worksheet. It picks data from specific targets configured in the field: `fields`. It always produces exactly one object.

**Example:**

```ts
const cfg = {
    worksheet:'sheet 1',
    type : 'object',

    // configure fields
    fields: [
        {
            // Specify column index. Indexing starts from 1. That means, `1` is `A`, `2` is `B`, etc...
            // Indicade row index. Row indexing starts from 1, index 0 doesn't exist.
            // This example target into `A2`.
            col: 2, row: 2,

            // Indicade where in imported object data should be placed
            key: 'secondName',

            // A function which allow us to map a result field.
            // The xlsx-importer has build-in mappers, @see #Mappers
            // Below implemented mapper, which makes upper first letter.
            mapper: (v: string) => v.replace(/^[a-z]/, (match) => match.toUpperCase() )
        },
        /* more fields ... */
    ],
}
```

## Mappers

| Exported Name | Description
|-----|-----------
|upperCaseMapper|Transforms string to upper case
|lowerCaseMapper|Transforms string to lower case
|jsonMapper|Transforms a json string to a TJsonResponse or to null if parsing was not possible
|integerMapper|Transforms string into integer
|booleanMapper|Transforms string into boolean
|numberMapper|Transforms string into number
|dateMapper|Transforms date string into `Date` object
|isValue|Examines if value is included in accepted values provided
|isEmpty|Examines if input is empty
|isFilled|Examines if input is not empty
|[splitMapper](#splitmapper)|Transforms string into array of items

### `splitMapper`

Configurable and immutable **splitMapper** with possibility to use specific `itemMapper<TReturnType>(mapper)` or `separator(string)`.

* `.separator(';'): SplitMapper` - set separator
* `.itemMapper(itemMapper): SplitMapper` - set mapper for items,

Setting separator or item mapper do not change origin mapper but create new one. As an item mapper may use also another `splitMapper` like below:

```ts
// Building a mapper
const sentenceSplitter = splitMapper.separator('. ');
const wordSplitter = splitMapper.separator(' ');
const wordsInSentencesMapper = sentenceSplitter.itemMapper<string[]>(wordSplitter);

// Standalone usage:
const input = 'Lorem ipsum dolor sit amet. consectetur adipiscing elit. Nullam placerat massa nec efficir. ';

const result = wordsInSentencesMapper(input);
// [
//     ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'],
//     ['consectetur', 'adipiscing', 'elit'],
//     ['Nullam', 'placerat', 'massa', 'nec', 'efficir'],
//     ['']
// ]


// In a config:
// {row: 3, col: 1, key: 'words', mapper: wordsInSentencesMapper},

```

## Support

If any help needed, just feel free to create an issue. We will be really thankful for added links into stackoverflow topics if exists.

We are ready to provide paid support, in order that please contact me: [hi@siemienik.pl](mailto://hi@siemienik.pl) or [support@siemienik.pl](mailto://support@siemienik.pl).

### ✅ Browser Support

Browser supporting has been proved for ✅ _Chrome_ and ✅ _Firefox_ in [Angular & Vue & React Samples](#frontend-frameworks) and theirs tests. Feel welcome to run samples by yourselves and check it.

### ✅ NodeJS Support

10 | 11 | 12 | 13 | 14 | 15
----|----|----|----|----|----
✅ | ✅ | ✅ | ✅ | ✅ | ✅

If Node v8 & v9 needed, please contact us [support@siemienik.pl](mailto://support@siemienik.pl).

