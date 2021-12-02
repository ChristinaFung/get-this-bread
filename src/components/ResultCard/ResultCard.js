/* eslint-disable no-template-curly-in-string */
import React from "react";
import "./ResultCard.css";
import fpoImg from "../../assets/fpo.png";

class ResultCard extends React.Component {
	static defaultProps = {
		name: "Restaurant Name",
		phone: "+1 123-456-7890",
		price: "XXX",
		rating: "X",
		url: "#",
		address: "1 Placeholder Street, Toronto, ON XXX XXX, Canada" 
		// imgUrl: "http://placehold.it/300x300"
	}

	render() {
		const name = this.props.name;
		const phone = this.props.phone;
		const price = this.props.price;
		const url = this.props.url;
		const rating = this.props.rating;
		const address = this.props.address;
		// const imgUrl = this.props.imgUrl;

		return (
			<div className="result-card">
				<div className="img-container">
					{/* <img src={imgUrl} alt="" /> */}
					<img src={fpoImg} alt="" />
				</div>
				<div className="copy-container">
					<div className="resto-header">
						<h3 className="resto-name"><a href={url}>{name} ({price})</a></h3>
					</div>
					<div className="rating">
						<h4 className="label">Rating: </h4>
						<span>{rating}</span>
					</div>
					<div className="phone">
						<h4 className="label">Phone: </h4>
						<span>{phone}</span>
					</div>
					<div className="address">
						<h4 className="label">Address: </h4>
						<span>{address}</span>
					</div>
				</div>
			</div>
		)
	}
}

export default ResultCard;