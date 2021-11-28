import React from "react";
import "./Recommendations.css";
import ResultCard from "../../components/ResultCard/ResultCard";
class Recommendations extends React.Component {
	render() {
		return (
			<div className="recommendations">
				<div className="inner-content">
					{/* <h2>Recommendations</h2> */}
					{/* WIP component */}
					<ResultCard/>
				</div>
			</div>
		)
	}
}

export default Recommendations;