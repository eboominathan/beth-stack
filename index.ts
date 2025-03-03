import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";

const app = new Elysia()
  .use(html())
  .get("/", ({ html }) =>
    html(
      <BaseHtml>
        <body>
          <h1>Hello Boomi</h1>
        </body>
      </BaseHtml>
    )
  )
  .listen(3000);
console.log("Elysia is running");

const basehtml = ({ children }: elements.Children) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
${children}
</html>`;
