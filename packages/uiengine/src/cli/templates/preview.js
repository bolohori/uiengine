export const template = title =>
  `
<!DOCTYPE html>
<html>
  <head>
    <title>\${variant.title}</title>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <!-- add you custom styles here:
    <link href="/styles/my.css" rel="stylesheet">
    -->
  </head>
  <body>
    \${variant.rendered}

    <!-- add you custom styles here:
    <script src="/scripts/my.js" defer></script>
    -->
  </body>
</html>
`
