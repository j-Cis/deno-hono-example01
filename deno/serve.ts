import { add } from "$logic";
import { appMain, type AppMain } from "./apps/main.ts";
const appFetch = appMain.fetch;

//console.log(appFetch.getElementById("ssr-root"))
Deno.serve({"port": 8003}, appFetch);

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
