import React, {Component} from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			company: '',
			company: '',
			message: ''
		};
	}
	submitForm(event) {
		event.preventDefault();
		const formData = this.state;
		console.table(formData);
	}
	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	render() {
		return (
			<form className="Form" onSubmit={this.submitForm.bind(this)}>
				<div className="Form_step1">
					<label htmlFor="firstName">
						{' '}
						First Name
						<input
							type="text"
							name="firstName"
							onChange={this.handleInputChange.bind(this)}
							required
						/>
					</label>
					<label htmlFor="lastName">
						{' '}
						Last Name
						<input
							type="text"
							name="lastName"
							onChange={this.handleInputChange.bind(this)}
							required
						/>
					</label>
				</div>
				<div className="Form_step2">
					<label htmlFor="company">
						{' '}
						Company
						<input
							type="text"
							name="company"
							onChange={this.handleInputChange.bind(this)}
							required
						/>
					</label>
					<label htmlFor="selectAvailability">
						{' '}
						Select your availability
						<select className="Form_select" required>
							<option className="Form_option" value="firstChoice">
								--Any--
							</option>
							<option className="Form_option" value="firstChoice">
								First Choice
							</option>
							<option className="Form_option" value="secondChoice">
								Second Choice
							</option>
							<option className="Form_option" value="thirdChoice">
								Third Choice
							</option>
						</select>
					</label>
					<div className="Form_step3">
						<label htmlFor="message">
							{' '}
							Message
							<textarea
								type="text"
								name="message"
								onChange={this.handleInputChange.bind(this)}
								required
							/>
						</label>
					</div>
				</div>
				<button type="text" className="submitBtn">
					Send
				</button>
			</form>
		);
	}
}
export default Form;
