import { cli } from "https://deno.land/x/surv@v0.2.5/cli.ts";

const html = (options: {
  module: string;
  title: string;
}) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no" />
    <title>${options.title}</title>
    <script defer type="module">
      import "${options.module}"
    </script>
  </head>
  <body></body>
</html>
`;

if (import.meta.main) {
  const ignore = "--ignore=" + [
    "docs",
    "jsx.d.ts",
    "preact.d.ts",
  ].join(",");
  await cli({
    server: "https://deno.land/x/surv@v0.2.5/serve.ts",
    build: [{
      cmd: [
        "deno",
        "run",
        "-A",
        "https://deno.land/x/edcb@v0.6.1/cli.ts",
        ignore,
      ],
    }],
    modules: {
      index: "./index.tsx",
    },
    pages: {
      index: html({
        title: "Preact with Deno",
        module: "./index.js",
      }),
    },
  });
}
