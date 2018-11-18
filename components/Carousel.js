import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import Slider from 'nuka-carousel'


class Carousel extends Component {
	render () {
		return (
			<Fragment>
				<Slider>
					<article className="Slider_img" style={{background: "url(https://picsum.photos/1500/800/?image=780)"}}>
						<div className="Slider_content">
							<h1 className="Slider_headline"> Title One </h1>
							<p className="Slider_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget leo in nisl finibus aliquam vitae et elit. Nullam nisi eros, euismod vel nisl at, tincidunt elementum leo.</p>
							<Link>
								<a className="Slider_link" href="/">Link to the news</a>
							</Link>
						</div>
					</article>
					<article className="Slider_img" style={{background: "url(https://picsum.photos/1500/800/?image=787)"}}>
						<div className="Slider_content">
							<h1 className="Slider_headline"> Title Two </h1>
							<p className="Slider_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget leo in nisl finibus aliquam vitae et elit. Nullam nisi eros, euismod vel nisl at, tincidunt elementum leo.</p>
							<Link>
							<a className="Slider_link" href="/">Link to the news</a>
							</Link>
						</div>
					</article>
					<article className="Slider_img" style={{background: "url(https://picsum.photos/1500/800/?image=789)"}}>
						<div className="Slider_content">
							<h1 className="Slider_headline"> Title Three </h1>
							<p className="Slider_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget leo in nisl finibus aliquam vitae et elit. Nullam nisi eros, euismod vel nisl at, tincidunt elementum leo.</p>
							<Link>
								<a className="Slider_link" href="/">Link to the news</a>
							</Link>
						</div>
					</article>
				</Slider>
		</Fragment>
		)
	}
} 

export default Carousel
