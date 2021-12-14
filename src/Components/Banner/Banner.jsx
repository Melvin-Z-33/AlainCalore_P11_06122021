import React from 'react';
import banner from '../../assets/banner/IMG.png';
import './Banner.css';

class Banner extends React.Component {
	render() {
		return (
			<div className="banner">
				{/* <h1 className="banner-title">{this.props.title}</h1> */}
				<img src={banner} alt=""></img>
			</div>
		);
	}
}

export default Banner;
