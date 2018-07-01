import React from 'react';

import Form from './components/Form';
import Image from './components/Image';



class App extends React.Component {
	state = {
		href: undefined,
		error: undefined,
	}
	
	getImage = async (e) => {
		e.preventDefault();

		const image = e.target.elements.image.value;

		const api_call = await fetch(`https://images-api.nasa.gov/search?q=${image}&media_type=image`);

		const data = await api_call.json();


		if(data && data.collection.items.length !== 0) {
			console.log(data);

			this.setState({
				href: data.collection.items[0].links[0].href,
				error: '',
			});
		} else {
			this.setState({
				href: undefined,
				error: "Image not found",
			});
		}
	}

	render() {
		return (
			<div className="wrapper">
				<div className="header">
					<Form getImage={this.getImage} />
				</div>

				<div className="searched_image">
					<Image 
						image={this.state.href}
						error={this.state.error} 
					/>
				</div>
			</div>
		);
	}
}

export default App;
