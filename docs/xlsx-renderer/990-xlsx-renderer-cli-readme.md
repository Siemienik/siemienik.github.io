---
slug: ./cli
id: xlsx-renderer-cli
sidebar_label: Command Line (CLI)
---

# XLSX Renderer - Command Line Interface

[![NPM](https://img.shields.io/npm/l/sxr)![npm](https://img.shields.io/npm/v/sxr)](https://www.npmjs.com/package/sxr) [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/siemienik/xtoolset/xlsx-renderer-cli)](https://github.com/Siemienik/xtoolset/actions)

_Github: [https://github.com/Siemienik/XToolset/.../xlsx-renderer-cli](https://github.com/Siemienik/XToolset/tree/master/packages/xlsx-renderer-cli)_

Command line interface for [xlsx-renderer](./010-xlsx-renderer-homepage.md). Generates spreadsheet files based on the template with view model.

Part of **XToolset** - collection of tools makes handling spreadsheet handy, easy with great developer experience.

## Usages

### Global installation

```shell script
# Install globally:

npm i -g sxr

# Usages:

sxr --model vm.json --output output.xlsx template.xlsx
```

### Local installation

#### 1. Install package

```shell script
# install globally:
npm i --save sxr

# usages:
node_modules/.bin/sxr --model vm.json --output output.xlsx template.xlsx

# usages with npx
npx sxr --model vm.json --output output.xlsx template.xlsx
```

#### 2. Additionally, possible to use with packages.json scripts

`package.json:`

```json
{
    "scripts": {
        "generate-xlsx":"sxr --model vm.json --output output.xlsx template.xlsx"
    }
}
```

bash:

```shell script
npm run generate-xlsx
```

## Examples

```shell script
cat vm.json | sxr  --output output.xlsx template.xlsx

sxr --output output.xlsx template.xlsx "{\"jsonData\":true}"

sxr --model vm.json --output output.xlsx template.xlsx

sxr --model vm.json -o output.xlsx  template.xlsx

sxr -o output.xlsx  template.xlsx "{\"jsonData\":true}"
```

## Command body

`sxr [options] <template> [model]`

### Arguments

* `<template>` indicate  the template file,
* `[model]` view model as a json used to generate a spreadsheet,

### Options

* `-o --output <filename>` write to filename
* `-m --model <filename>` read filename as a `[model]` (using both is denied)
* `-o --output <filename>` write result into filename

### Output

`sxr` out-of-a-box pushes generated files into `stdout`, to save it into a file please to append `> filename.xlsx`.

Library allowing also save output into file by using option `-o --output <filename>`

<!-- TODO: It is also allowed using pipe parameter to forward generated file into another command. -->

## The template file

The template structure inherit from `xlsx-renderer`. Please use link below for more information:

[**XLSX Renderer Documentation**](./010-xlsx-renderer-homepage.md)

## Support

If any help needed, just feel free to create an issue. We will be really thankful for added links into stackoverflow topics if exists.

We are ready to provide paid support, in order that please contact me: [hi@siemienik.com](mailto://hi@siemienik.com) or [support@siemienik.com](mailto://support@siemienik.com).
