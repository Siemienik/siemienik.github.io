---
slug: ./xtoolset
id: xtoolset
sidebar_label: XToolset
sidebar_position: 0
---

# XToolset

Fancy TypeScript / JavaScript spreadsheet package for browsers, and node, and command line tools.

Helps handle spreadsheet files `xlsx` in smart way by using high level api.

## Packages

### [The `xlsx-import`](./xlsx-import-readme.md)

[![NPM](https://img.shields.io/npm/l/xlsx-import)![npm](https://img.shields.io/npm/v/xlsx-import)](https://www.npmjs.com/package/xlsx-import) [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/siemienik/xtoolset/xlsx-import)](https://github.com/Siemienik/xtoolset/actions) [![codecov](https://codecov.io/gh/Siemienik/xtoolset/branch/master/graph/badge.svg?flag=xlsx-import)](https://codecov.io/gh/Siemienik/xtoolset/tree/master/packages/xlsx-import)

It allows you to import xlsx spreadsheet file with data into your system with defined TypeScript types.

```ts
const xlsx = await importerFactory.from('./my-awesome-books.xlsx');
const books: Array<Book> = xlsx.getAllItems<Book>(config.books);
```

[Read more :arrow_right:](./xlsx-import-readme.md)

### [The `xlsx-renderer`](./xlsx-renderer-readme.md)

[![NPM](https://img.shields.io/npm/l/xlsx-renderer)![npm](https://img.shields.io/npm/v/xlsx-renderer)](https://www.npmjs.com/package/xlsx-renderer) [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/siemienik/xtoolset/xlsx-renderer)](https://github.com/Siemienik/xtoolset/actions) [![codecov](https://codecov.io/gh/Siemienik/xtoolset/branch/master/graph/badge.svg?flag=xlsx-renderer)](https://codecov.io/gh/Siemienik/xtoolset/tree/master/packages/xlsx-renderer)

Makes generating spreadsheet files as simple as possible - it is enough one line to generate pretty customizable spreadsheet file.

```ts
const renderer = new Renderer();
await renderer.renderFromFile('./invoice-template.xlsx', invoiceData)
    .then(wb => wb.xlsx.writeFile('./invoice.xlsx'));
```

[Read more :arrow_right:](./xlsx-renderer-readme.md)

## Command Line Tools

### [The `xlsx-import-cli` (package: `sxi`)](./xlsx-import-cli-readme.md)

[![NPM](https://img.shields.io/npm/l/sxi)](https://www.npmjs.com/package/sxr) [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/siemienik/xtoolset/xlsx-import-cli)](https://github.com/Siemienik/xtoolset/actions)

Imports data from spreadsheet file using command line.

```shell script
sxi books.cfg.js my-awesome-books.xlsx > books-list.json
```

[Read more :arrow_right:](./xlsx-import-cli-readme.md)

### [The `xlsx-renderer-cli` (package: `sxr`)](./xlsx-renderer-cli-readme.md)

[![NPM](https://img.shields.io/npm/l/sxr)](https://www.npmjs.com/package/sxr) [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/siemienik/xtoolset/xlsx-renderer-cli)](https://github.com/Siemienik/xtoolset/actions)

Generate spreadsheets files following by the `template` with `view model` from command line.

```shell script
sxr --model invoice-data.json invoice-template.xlsx > invoice.xlsx
```

[Read more :arrow_right:](./xlsx-renderer-cli-readme.md)

## Examples

Examples are available in a flat structure, and they are named by using : `[package_name]+[technology]` - for instance `xlsx-import+nodejs+ts`.

[See on GitHub](https://github.com/Siemienik/XToolSet/tree/master/samples)


Additionally, the `xlsx-renderer` has lots of examples used for the integration testing.
[Read more](https://github.com/Siemienik/XToolSet/tree/master/packages/xlsx-renderer#examples).

## Support

If any help needed, just feel free to create an issue. We will be really thankful for added links into stackoverflow topics if exists.

We are ready to provide paid support, in order that please contact me: [hi@siemienik.pl](mailto://hi@siemienik.pl) or [support@siemienik.pl](mailto://support@siemienik.pl).
