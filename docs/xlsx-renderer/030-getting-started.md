---
slug: ./getting-started
id: getting-started
sidebar_label: Getting-started
---

# Getting Started

## Create template

## Write a code

### NodeJS:

```ts
import {Renderer} from 'xlsx-renderer';

// ... define viewModel
const viewModel = { awesome:"Oh yeah!", items:[/*...*/] };

// ... generate a report:
const renderer = new Renderer();
const result = await renderer.renderFromFile('./report-template.xlsx', viewModel);
await result.xlsx.writeFile('./my-awesome-report.xlsx');
```

### Or for browser:

```ts
import { Renderer } from "xlsx-renderer";
import { saveAs } from "file-saver";

// ... define viewModel:
const viewModel = { awesome:"Oh yeah!", items:[/*...*/] };

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
