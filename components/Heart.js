import React, {Component} from 'react';

class Heart extends Component {
	constructor() {
		super();
		this.state = {
			count: 0
		};
	}

	handleClick(event) {
		event.preventDefault();
		this.setState(prevState => {
			return {
				count: ++prevState.count
			};
		});
	}

	/*
	TODO: Add localStorage to persist the data the likes value
	FIXME:  Need to find a way to make the localstorage more specific to each ArticleCard 
	*/

	componentDidUpdate() {
		localStorage.setItem('likes', JSON.stringify(this.state));
	}

	componentDidMount() {
		const localData = localStorage.getItem('likes');
		if (localData) {
			this.setState(prevState => {
				return JSON.parse(localData);
			});
		}
	}

	render() {
		return (
			<div className="Heart_wrapper">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 57.947 57.947"
					onClick={this.handleClick.bind(this)}
				>
					<path
						className="Heart_red"
						d="M28.947 56.486c15.685-11.277 23.532-21.592 27.222-29.46 4.311-9.193.561-20.589-8.845-24.413C36.268-1.88 28.947 8.486 28.947 8.486S21.678-1.907 10.623 2.588C1.217 6.412-2.533 17.808 1.778 27.001c3.69 7.867 11.484 18.209 27.169 29.485z"
					/>
				</svg>
				<span className="Heart_counter">{this.state.count}</span>
			</div>
		);
	}
}

export default Heart;
