import React from 'react';


const Form = (props) => (
	<form onSubmit={props.getImage}>

		<input type="text" name="image"/>

		<button>Show image</button>

	</form>
);

export default Form;