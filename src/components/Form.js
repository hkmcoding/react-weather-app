import React from "react";

const Form = props => (
	<form onSubmit = {props.getWeather}>
		<input type = "text" name = "city" placeholder = "Enter your city"/>
		<input type = "text" name = "country" placeholder = "Enter your country"/>
		<button>Get Weather</button>
	</form>
);

export default Form