---
slug: ./getting-started
id: getting-started
sidebar_label: Getting Started
---

# Getting Started

## Create template

Basic part of using XLSX-Renderer is creating a template file. 
The best way to learn how to use this library is reading the [Cell's documentation](./040-cells.md) and studying [examples](./050-examples.md).

For purpose of this tutorial:
1. Open MS Excel (or another worksheet manager) and create new file,
2. In `A1` type <code># Hello ${name}! How are you?</code> - which insert variable `name` into template string,
3. In `A2` type `#! END_ROW` - which commits this row and move to the next one,
4. In `B1` type `Total items:`,
5. In `B2` type `## items.lenght` - which writes length of array `items`,
6. In `B3` type `#! FINISH` - which tells to the renderer, that this worksheet is done.
7. Save file as `report-template.xlsx` in your project dir,
8. (optional) Try some different styling, widths & heights.

Useful links:
* [Cells commands](./040-cells.md) - describes how different values for cells drive the renderer.
* [Examples](./050-examples.md) - list of set of template, viewModel and expected results used for testing purposes.
* [Discussions](https://github.com/Siemienik/XToolset/discussions) - There are some topics, where people ask how to do some goals.
* [Gitter](https://gitter.im/Siemienik/community) - community live chat.
* [CLI](./990-xlsx-renderer-cli-readme.md) - Command line interface, handy for creating and testing templates.

## Write a code

### NodeJS:

```ts
import {Renderer} from 'xlsx-renderer';

// ... define viewModel
const viewModel = { name:"World", items:[/*...*/] };

// ... generate a report:
const renderer = new Renderer();
const result = await renderer.renderFromFile('./report-template.xlsx', viewModel);
await result.xlsx.writeFile('./my-awesome-report.xlsx');
```

<!-- TODO add codesandbox example --->

### Or for browser:

```ts
import { Renderer } from "xlsx-renderer";
import { saveAs } from "file-saver";

// ... define viewModel:
const viewModel = { name:"World", items:[/*...*/] };

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

<!-- TODO add jsfiddle example -->