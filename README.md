# telnyx-deno
Deno module for Telnyx API based on OpenAPI 3 spec


## Usage

```typescript
import { Telnyx } from "telnyx";

const telnyx = new Telnyx({
  TOKEN: "KEY******",
});


// List faxes
const faxes = await telnyx.programmableFaxCommands.listFaxes();


console.log(faxes);
```