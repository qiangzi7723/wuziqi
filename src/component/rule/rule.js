import React from "react";
import "./rule.scss";

class Rule extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<section className="rule">
				<div className="rule-wrap">
					<div className="rule-banner"></div>
					<div className="rule-container">
						<div className="rule-top">
							<div className="rule-back" onClick={this.props.triggerRule}></div>
							<p className="rule-title">详细说明</p>
							<div
								className="rule-close"
								onClick={this.props.triggerRule}
							></div>
						</div>
						<div className="rule-scroll">
							<p className="rule-content">
								详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容详细说明内容
							</p>
						</div>
						<div className="rule-tail"></div>
					</div>
				</div>
			</section>
		);
	}
}

export default Rule;
