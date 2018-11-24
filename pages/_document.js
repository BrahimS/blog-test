import Document, { Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="initial-scale=1, width=device-width" key="viewport" />
					<meta http-equiv="X-UA-Compatible" content="ie=edge" />
					<meta description="" />
					<meta keyword="" />
					<link rel="stylesheet" href="/_next/static/css/styles.chunk.css"/>
				</Head>
				<body className="Layout">
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}

export default  MyDocument
