import React, { Component, Fragment } from 'react'
import fetch from 'isomorphic-unfetch'
import Home from '../components/Home'
import '../static/css/index.sass'

const HomePage = (props) =>  (
		<Fragment>
			<Home />
			
		</Fragment>
)


HomePage.getInitialProps = async function() {
		const url = `https://api.myjson.com/bins/p1laa`
		const response = await fetch(url)
		const data = await response.json()
		return {
			data
		}
	}


export default HomePage
