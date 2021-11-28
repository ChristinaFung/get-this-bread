/* eslint-disable no-template-curly-in-string */
import React from "react";
import "./ResultCard.css";

class ResultCard extends React.Component {
	static defaultProps = {
		name: "Resto Name",
		price: "XXX",
		url: "#",
		imgUrl: "http://placehold.it/300x300"
	}

	render() {
		const name = this.props.name;
		const price = this.props.price;
		const url = this.props.url;
		const imgUrl = this.props.imgUrl;

		return (
			<div className="result-card">
				<div className="img-container">
					<img src={imgUrl} alt="" />
				</div>
				<div className="copy-container">
					<div className="resto-header">
						<h3 className="resto-name"><a href={url}>{name}</a></h3>
						<p className="price">{price}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default ResultCard;