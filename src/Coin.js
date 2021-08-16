import React, {Component} from 'react';
import './Coin.css';

class Coin extends Component{
	
	render(){
	let clsName = this.props.isFlip ? `Coin flip` : 'Coin';
		return(
			<div className={clsName}>
				<img src={this.props.url} />
			</div>
		);
	};
};

export default Coin;