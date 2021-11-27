import React from "react";
import "./Footer.css";
class Footer extends React.Component {
	render() {
		return (
			<footer className="app-footer">
				<div className="inner-content">
					<p className="copyright">&copy; 2021 christina fung. created with <a href="https://reactjs.org/" target="_blank" rel="noreferrer">react</a> + the <a href="https://www.yelp.ca/developers/documentation/v3/get_started" target="_blank" rel="noreferrer">yelp api</a>.</p>
				</div>
			</footer>
		)
	}
}

export default Footer;