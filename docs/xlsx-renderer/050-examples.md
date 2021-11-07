---
slug: ./examples
id: examples
sidebar_label: Examples
---

# Examples

Actually, these examples are integration test fixtures. Each contains:

* `template.xlsx` with a Template file created in MS Excel,
* `viewModel.json` with a ViewModel - data which will put into the template,
* `expected.xlsx` with the expected result.
* **After tests being run:** `test-output.xlsx` with fresh generated file.

_These examples are able to run by using the command line tool, [read more](./990-xlsx-renderer-cli-readme.md)._

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

<!-- TODO add some codesandbox/jsfiddle examples -->
