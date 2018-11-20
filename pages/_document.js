import Document, { Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<html>
				<Head>
					<meta name="viewport" content="initial-scale=1, width=device-width" key="viewport" />
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
