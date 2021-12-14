import React from 'react';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<Header />
				<Banner />
				{/* <Banner background={img} title="Chez vous, partout et ailleurs"/> */}
				{/* <ListLogements /> */}
				{/* <Footer /> */}
			</div>
		);
	}
}

export default Home;
