---
slug: ./
id: homepage
sidebar_label: Introduction
---

# XLSX-Renderer

[![NPM](https://img.shields.io/npm/l/xlsx-renderer)![npm](https://img.shields.io/npm/v/xlsx-renderer)](https://www.npmjs.com/package/xlsx-renderer) [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/siemienik/xtoolset/xlsx-renderer)](https://github.com/Siemienik/xtoolset/actions) [![codecov](https://codecov.io/gh/Siemienik/xtoolset/branch/master/graph/badge.svg?flag=xlsx-renderer)](https://codecov.io/gh/Siemienik/xtoolset/tree/master/packages/xlsx-renderer)

_Github: [https://github.com/Siemienik/XToolset/.../xlsx-renderer](https://github.com/Siemienik/XToolset/tree/master/packages/xlsx-renderer)_

## Introduction

XLSX-Renderer is a JavaScript / TypeScript package specialized in generating Excel files with minimum code and maximum flexibility.
It satisfies both assumptions by using a template engine implemented by design. It means you do not need to write tons of code to set up cells styles, fonts or borders, etc.
Instead of that, it is enough to create a template in MS Excel (or use another spreadsheet manager). Of course, it needs to follow some rules and syntax principles.
About that and how to customize the renderer, you will read more in the next sections of the documentation.


## Use case

1. **Are you feeling nervous when the business wants to change the invoice layout?**
   Now you may say "bye-bye" to changing thousands of line codes. It is enough to update `invoice-template.xlsx` and use with this tool.

2. **Do you need generate complex report?**
   Imagine that it will not be terrible too much. Commonly generating files requires to write a lot of lines of code (for instance get cell A1, set font bold, border solid, test etc.). With this tool you may use Microsoft Excel to fancy create `complex-report.xlsx` and mix it with your data by using xlsx-renderer.

3. **Did the boss said that it is only a little change in `sales-report.xlsx`, but it isn't?**
   With `xlsx-renderer` you mustn't change any line of code, just update your `template.xlsx`

## How it works

It consumes a template which is common Excel file, then add yours data called view model. Blend it and done, as result you'll get result file.
![How it works](./how-it-works-explanation.png)


## Curriculum

This website constrains four main parts:

1. [Installation](./020-installation.md)
2. [Getting Started](./030-getting-started.md)
3. [Cells commands](./040-cells.md)
4. [Examples](./050-examples.md)
5. [Command line](./990-xlsx-renderer-cli-readme.md)

## Worth to know

* XLSX-Renderer is member of [XToolset](../xtoolset-readme.md),
* There is a possibility to import data from XLSX (also from generated) files, read more about [XLSX-Import](../xlsx-import-readme.md),
* GitHub repository: https://github.com/Siemienik/XToolSet.

### License

Whole XToolset is created by the community with [Siemienik](https://github.com/Siemienik)'s leadership, many thanks to [all contributors](https://github.com/Siemienik/XToolset/graphs/contributors).

This software licensed by [MIT](https://github.com/Siemienik/XToolset/blob/master/LICENSE).

### Support

If any help needed, just feel free to create a [discussions](https://github.com/Siemienik/XToolset/discussions/new). We will be really thankful for added links into stackoverflow topics if exists.

To report a bug please [create an issue](https://github.com/Siemienik/XToolset/issues/new).

We are ready to provide paid support or consulting, in order that please contact me: [hi@siemienik.pl](mailto://hi@siemienik.pl) or [support@siemienik.pl](mailto://support@siemienik.pl).

#### ✅ NodeJS Support

|  10 |  11 |  12 |  13 |  14 | 15 |
|-----|-----|-----|-----|-----|----|
| 🟢 |  🟢 | 🟢 |  🟢 | 🟢 | 🟢 |

If Node v8 & v9 needed, please contact us [support@siemienik.pl](mailto://support@siemienik.pl).

#### ✅ Browser Support

XLSX Renderer may run on browser side. [**Read more about browser support**](https://github.com/Siemienik/XToolset/issues/93#issuecomment-797835786).
