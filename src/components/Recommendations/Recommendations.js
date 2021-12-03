import React from "react";
import "./Recommendations.css";
import ResultCard from "../../components/ResultCard/ResultCard";
class Recommendations extends React.Component {
	render() {
		const results = this.props.results;

		return (
			<div className="recommendations">
				<div className="inner-content cf">
					{/* WIP component */}
					{
						results.map((res) => 
							<ResultCard
								key={res.id}
								result={res}
							/>
						)
					}
				</div>
			</div>
		)
	}
}

export default Recommendations;