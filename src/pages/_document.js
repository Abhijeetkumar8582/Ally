import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
          <script defer type="text/javascript" src="https://prod-us-druid-cdn.azureedge.net/v2/druid_webchat_v2_load.js?botId=87466e44-86a2-483b-ed4e-08dd8d8f8ad7&amp;baseUrl=https%3A%2F%2Fdruidapi.us.druidplatform.com">
        </script>
      </body>
    </Html>
  );
}
