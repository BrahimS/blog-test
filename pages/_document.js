import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<html>
				<Head>
					<meta name="viewport" content="initial-scale=1, width=device-width" key="viewport" />
					<title> This is a test blog </title>
					<link rel="stylesheet" href="/_next/static/css/styles.chunk.css"/>
				</Head>
				<body className="">
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
