import React from "react";
import "./Recommendations.css";
class Recommendations extends React.Component {
	static defaultProps = {
		results: [{
			id: 'placeholder-id',
			name: 'Placeholder Restaurant',
			phone: "+1 123-456-7890",
			price: "$$$$",
			rating: "5",
			url: "#",
			address: "1 Test Street, Toronto, ON XXX XXX" ,
			imgUrl: "http://placehold.it/300x300"
		}]
	}

	render() {
		return (
			<div className="recommendations">
				<div className="inner-content cf">
					{/* WIP component */}
				</div>
			</div>
		)
	}
}

export default Recommendations;