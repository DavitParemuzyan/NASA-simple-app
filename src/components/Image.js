import React from 'react';

const Image = (props) => (
	<div>

		<img src={ props.image } alt=''/>
		
		<p> { props.error } </p>

	</div>
);

export default Image;