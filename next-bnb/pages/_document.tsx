import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

// export default class MyDocument extends Document {
//     static async getInitialProps(ctx: DocumentContext) {
//         const sheet = new ServerStyleSheet();
//         const originalRenderPage = ctx.renderPage;

//         try {
//             ctx.renderPage = () =>
//                 originalRenderPage({
//                     enhanceApp: (App) => (props) =>
//                         sheet.collectStyles(<App {...props} />),
//                 });

//             const initialProps = await Document.getInitialProps(ctx);
//             return {
//                 ...initialProps,
//                 styles: (
//                     <>
//                         {initialProps.styles}
//                         {sheet.getStyleElement()}
//                     </>
//                 )
//             }
//         } finally {
//             sheet.seal();
//         }
//     }
// }

class MyDocument extends Document {
    render() {
        return (
            <Html lang="ko">
                <Head>
                    <meta name="title" content="깃허브 레파지토리" />
                    <meta name="description" content="깃허브 레파지토리 리스트입니다." />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Noto+Sans:400,700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:400,700&display=swap&subset=korean"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
