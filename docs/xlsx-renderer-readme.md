---
slug: ./xlsx-renderer
id: xlsx-renderer
sidebar_label: XLSX-Renderer
sidebar_position: 2
---

# XLSX Renderer

[![NPM](https://img.shields.io/npm/l/xlsx-renderer)![npm](https://img.shields.io/npm/v/xlsx-renderer)](https://www.npmjs.com/package/xlsx-renderer) [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/siemienik/xtoolset/xlsx-renderer)](https://github.com/Siemienik/xtoolset/actions) [![codecov](https://codecov.io/gh/Siemienik/xtoolset/branch/master/graph/badge.svg?flag=xlsx-renderer)](https://codecov.io/gh/Siemienik/xtoolset/tree/master/packages/xlsx-renderer)

Generate spreadsheet files in smart way based on a template **XLSX** file created in your favourite spreadsheet application.

Part of **XToolset** - collection of tools makes handling spreadsheet handy, easy with great developer experience.

## Use case

1. **Are you feeling nervous when the business wants to change the invoice layout?**
   Now you may say "bye-bye" to changing thousands of line codes. It is enough to update `invoice-template.xlsx` and use with this tool.

2. **Do you need generate complex report?**
   Imagine that it will not be terrible too much. Commonly generating files requires to write a lot of lines of code (for instance get cell A1, set font bold, border solid, test etc.). With this tool you may use Microsoft Excel to fancy create `complex-report.xlsx` and mix it with your data by using xlsx-renderer.

3. **Did the boss said that it is only a little change in `sales-report.xlsx`, but it isn't?**
   With `xlsx-renderer` you mustn't change any line of code, just update your `template.xlsx`

## How it works

It consumes a template which is common Excel file, then add yours data called view model. Blend it and done, as result you'll get result file.
![How it works](./xlsx-renderer/how-it-works-explanation.png)

## Getting Started

### 1. Install package

```shell script
npm i xlsx-renderer --save
```

### 2. Write code

```ts
import {Renderer} from 'xlsx-renderer';
// ...
const renderer = new Renderer();
// ...
const viewModel = { awesome:"Oh yeah!", items:[/*...*/] };

// for node:
const result = await renderer.renderFromFile('./report-template.xlsx', viewModel);
await result.xlsx.writeFile('./my-awesome-report.xlsx');

// for browsers:
const result2 = await renderer.renderFromArrayBuffer(templateArrayBuffer, viewModel);
await result2.xlsx.writeBuffer().then(/* use saveAs() to download on a browser */);
```

For more explanations for browser usages go into [#93 comment](https://github.com/Siemienik/XToolSet/issues/93#issuecomment-732309383)

### 3. Consider using CLI

It is possible to use the command line interface [read more about xlsx-renderer-cli](./xlsx-renderer-cli-readme.md)

## Documentation

### Cells

| Category | Name | Matching Order | Matching Rule | Description | More info |
|----------|-----:|-------|--------|-------------|:---------|
| - | [BaseCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/src/cell/BaseCell.ts) | n/o | n/o | All Cell\`s definition classes extend it. | **abstract** |
| Content | [NormalCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/src/cell/NormalCell.ts) | 1 | not started by `##`, `#!` or `#=` | This one copy all styles, width, properties and value form template.  | **default** |
| Content | [VariableCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/src/cell/VariableCell.ts) | 3 | `## pathToVariable` | Write variable from `ViewModel`. <br/> Paths to object's property or array item are allowed.<br/> When asking about undefined variable it returns empty string. | **Paths examples:** <br/> `simplePath` <br/> `someObject.property` <br/> `array.0.field` <br/> `items.1.path.to.object.prop`|
| Content | [TemplateStringCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/src/cell/TemplateStringCell.ts) | 4 | Starts with <code>#` </code> | Template string allows you to create advanced text, for example concat two variables or put them into a sentence. To write in a variable use `${pathToVariable}`. | **Example:**<br/> <code>#` Hello ${name}! How are you?</code> gives for instance <code>Hello World! How are you?</code> <br/> [Example](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer018-TemplateString)|
| Content | [HyperlinkCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/src/cell/HyperlinkCell.ts) | 7 | `#! HYPERLINK pathToLabel pathToTarget` | Create a hyperlink. | *Paths resolve exactly same as VariableCell* |
| Content | [FormulaCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/src/cell/FormulaCell.ts) | 6 | Cell.type eq. formulae | It handles correctly formulas inside and outside of loops - when rows were shifted compared to the template. | *It is used automatically when formulae from the template being rendered* <br/> [Example](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer010-Formula)|
| Content | [TemplateFormulaCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/src/cell/TemplateFormulaCell.ts) | 5 | Starts with `#=` | This one allows you to put a template string (custom formula) into a cell as a formula. To write in a variable use `${pathToVariable}`. | **Example:**<br/> `#= ${summaryFormula}(A2:A${item.__endOutput.r})` gives something like `=MAX(A2:A2910)` <br/> [Example](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer017-TemplateFormula)|
| Navigation | [EndRowCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/src/cell/EndRowCell.ts) | 2 | `#! END_ROW` | Go to the beginning of next row |  |
| Worksheet<br/>Navigation<br/>Loop | [FinishCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/src/cell/FinishCell.ts) | 9 | `#! FINISH conditionPath` | Finish rendering for current worksheet and: <br/> 1) go to next worksheet if `conditionPath===true`<br/> 2) repeat this template worksheet again (`conditionPath === false`) - looping through worksheets <br/> 3) finished whole rendering when this worksheet is the last one.   | **Examples:**<br/> `#! FINISHED` or `#! FINISHED itemFromLoop.__iterated` |
| Worksheet | [WsNameCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/src/cell/WsNameCell.ts) | 15 | `#! WS_NAME pathToVariable` | Set worksheet's name.  | **Examples:** <br/> `#! WS_NAME worksheetName` <br/> `#! WS_NAME item.title` <br/> `#! WS_NAME translatedNames.0` |
| Loop | [DumpColsCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/src/cell/DumpColsCell.ts) | 12 | `#! DUMP_COLS pathToArray` | Useful for writing through multiple columns. It put each value of array to next column. | [Example](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer011-DumpCols) |
| Loop | [ForEachCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/src/cell/ForEachCell.ts) | 8 | #! FOR_EACH item items | Begin the loop named `item`, set the first element of `items` into `item` and go to the beginning of next line.| Connected to: `ContinueCell`, `EndLoopCell`, `DeleteCell`, `FinishedCell`, `SumCell`, `AverageCell`. |
| Loop | [ContinueCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/src/cell/ContinueCell.ts) | 11 | `#! CONTINUE item` | Iterate to next element of loop named `item` (check `ForEachCell` for more information) and navigate to the beginning of new line. | |
| Loop | [EndLoopCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/src/cell/EndLoopCell.ts) | 10 | `#! END_LOOP item` | Mark cell when the loop `item` finished. | |
| Aggregation| [SumCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/src/cell/SumCell.ts) | 13 | `#! SUM item` | Write sum formulae for current column and the `item`'s rows.  | [Example](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer007-ForEach-Sum) |
| Aggregation | [AverageCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/src/cell/AverageCell.ts) | 14 | `#! AVERAGE item` | Write average formulae for current column and the `item`'s rows.  | [Example](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer009-ForEach-Average) |
| View Model | [DeleteCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/src/cell/DeleteCell.ts) | 16 | `#! DELETE pathToVariable` | Delete variable, useful for nested loops.|  [Example](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer009-ForEach-Average)  |

## Examples

Actually, these examples are integration test fixtures. Each contains:

* `template.xlsx` with a Template file created in MS Excel,
* `viewModel.json` with a ViewModel - data which will put into the template,
* `expected.xlsx` with the expected result.
* **After tests being run:** `test-output.xlsx` with fresh generated file.

_These examples might be runned by using the command line tool, [read more](./xlsx-renderer-cli-readme.md)._

| Id | Example | Explanation |
|----|---------|-------------|
| 0 | [FinishCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer000-FinishCell) | Testing `FinishCell` basic behaviour. |
| 1 | [EndRow](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer001-EndRow) | Testing `EndRowCell` behaviour |
| 2 | [Variable](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer002-Variable) | Testing displaying value of view model variables by using `VariableCell`. |
| 3 | [WsName](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer003-WsName) | Testing if `WsNameCell` set worksheet name correctly. |
| 4 | [Hyperlink](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer004-Hyperlink) | Testing creating hyperlinks by HyperlinkCell. |
| 5 | [ForEach-simple](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer005-ForEach-simple) | Checks simple loop. |
| 6 | [ForEach-Continue-stripped-table](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer006-ForEach-Continue-stripped-table) | Checks ContinueCell behaviour, creates stripped table. |
| 7 | [ForEach-Sum](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer007-ForEach-Sum) | Checks summing of loop part of column. |
| 8 | [Delete](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer008-Delete) | Testing deleting variables. |
| 9 | [ForEach-Average](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer009-ForEach-Average) | Checks getting of average of generated table. |
| 10 | [Formula](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer010-Formula) | Checks formulas. |
| 11 | [DumpCols](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer011-DumpCols) | Checks horizontally appending columns.|
| 12 | [ForEach-special](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer012-ForEach-special) | Checks advance for each usages like looping on worksheets. |
| 13 | [Merged-cells-fill](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer013-Merged-cells-fill) | Checks merged cells behaviour |
| 14 | [ForEach-merged](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer014-ForEach-merged) | Checks merged cells behaviour |
| 15 | [ForEach-merged-two-tables](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer015-ForEach-merged-two-tables) | Checks merged cells behaviour |
| 16 | [ForEach-merged-pyramid](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer016-ForEach-merged-pyramid) | Checks merged cells behaviour |
| 17 | [TemplateFormulaCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer017-TemplateFormulaCell) | Dynamic formula creation |
| 18 | [TemplateStringCell](https://github.com/Siemienik/XToolset/blob/master/packages/xlsx-renderer/tests/integration/data/Renderer018-TemplateStringCell) | Dynamic content creation following by custom template string (`Hello ${name}`). |

## Support

If any help needed, just feel free to create an issue. We will be really thankful for added links into stackoverflow topics if exists.

We are ready to provide paid support, in order that please contact me: [hi@siemienik.pl](mailto://hi@siemienik.pl) or [support@siemienik.pl](mailto://support@siemienik.pl).

### ✅ NodeJS Support

|  10 |  11 |  12 |  13 |  14 | 15 |
|-----|-----|-----|-----|-----|----|
| 🟢 |  🟢 | 🟢 |  🟢 | 🟢 | 🟢 |

If Node v8 & v9 needed, please contact us [support@siemienik.pl](mailto://support@siemienik.pl).

### ✅ Browser Support

XLSX Renderer may run on browser side. [**Read more about browser support**](https://github.com/Siemienik/XToolset/issues/93#issuecomment-797835786).

```js
import { Renderer } from "xlsx-renderer";
import { saveAs } from "file-saver";

// ... define viewModel:
const viewModel = {};

//... generate a report:

// 1. Download a template.
fetch("./template.xlsx")
  // 2. Get template as ArrayBuffer.
  .then((response) => response.arrayBuffer())
  // 3. Fill the template with data (generate a report).
  .then((buffer) => new Renderer().renderFromArrayBuffer(buffer, viewModel))
  // 4. Get a report as buffer.
  .then((report) => report.xlsx.writeBuffer())
  // 5. Use `saveAs` to download on browser site.
  .then((buffer) => saveAs(new Blob([buffer]), `${Date.now()}_report.xlsx`))
  // Handle errors.
  .catch((err) => console.log("Error writing excel export", err));
```

