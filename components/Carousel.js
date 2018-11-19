import Link from 'next/link'
import Slider from 'nuka-carousel'


const Carousel = (props) => {
		return (
				<Slider>
					<article className="Slider_img" style={{background: `url(${props.image})`}}>
						<div className="Slider_content">
							<h1 className="Slider_headline"> {props.title}</h1>
							<p className="Slider_para">{props.body}</p>
							<Link href="/">
								<a className="Slider_link">Link to the news</a>
							</Link>
						</div>
					</article>
					<article className="Slider_img" style={{background: `url(${props.image})`}}>
						<div className="Slider_content">
							<h1 className="Slider_headline"> {props.title}</h1>
							<p className="Slider_para">{props.body}</p>
							<Link href="/">
								<a className="Slider_link"> Link to the news</a>
							</Link>
						</div>
					</article>
					<article className="Slider_img" style={{ background: `url(${props.image})`}}>
						<div className="Slider_content">
							<h1 className="Slider_headline"> {props.title}</h1>
							<p className="Slider_para">{props.body}</p>
							<Link href="/">
								<a className="Slider_link">Link to the news</a>
							</Link>
						</div>
					</article>
				</Slider>
		)
} 

export default Carousel
