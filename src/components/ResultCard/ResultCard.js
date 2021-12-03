/* eslint-disable no-template-curly-in-string */
import React from "react";
import "./ResultCard.css";

class ResultCard extends React.Component {


	render() {
		const name = this.props.result.name;
		const phone = this.props.result.display_phone;
		const price = this.props.result.price || '?';
		const url = this.props.result.url;
		const rating = this.props.result.rating || '?';
		const address = this.props.result.location.formatted_address.toString();
		const imgUrl = this.props.result.photos[0];

		return (
			<div className="result-card">
				<div className="img-container">
					<img src={imgUrl} alt="" />
				</div>
				<div className="copy-container">
					<div className="resto-header">
						<h3 className="resto-name"><a href={url} target="_blank" rel="noreferrer">{name} ({price})</a></h3>
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