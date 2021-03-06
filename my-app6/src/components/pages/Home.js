//Импорт основного компонента React.js
import React, {Component} from 'react';
import ArticleList from '../ArticleList'
import articles from '../../articles'

class Home extends Component {
	state = {
		reverted: false
	}
	render(){
		return (
			<div className="container">
				<div className="jumbotron">
					<h1 className="display-3">Home</h1>
					<button className="btn" onClick={this.revert}>Revert</button>
				</div>
				<ArticleList articles={ this.state.reverted ? articles.slice().reverse() : articles} />
			</div>
		)
	}
	revert = () => {
		this.setState({
			reverted: !this.state.reverted
		})
	}
}

export default Home