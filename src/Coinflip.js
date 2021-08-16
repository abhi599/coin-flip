import React, {Component} from 'react';
import Coin from './Coin';
import './Coinflip.css';

const urls={
	heads : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/US_Half_Dollar_Obverse_2015.png/607px-US_Half_Dollar_Obverse_2015.png',
	tails : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/US_50_Cent_Rev.png/600px-US_50_Cent_Rev.png'
}

class Coinflip extends Component{
	constructor(props){
		super(props);
		this.state = {
			flips : 0, heads : 0, tails : 0,
			isHead: false, isFlip: false
		};
	}

	flip = e =>{
		let { flips, heads, tails, isHead } = this.state;
		flips = flips+1;
		let randNum = Math.floor(Math.random()*100);
		randNum=randNum%2;
		console.log('randNum == ', randNum);
		if(randNum === 1){
			heads = heads+1;
			isHead = true;
		}
		else{
			tails = tails+1;
			isHead = false;
		}
		setTimeout(()=>{this.setState({isFlip: false})}, 2500);
		this.setState({ flips : flips, heads : heads, tails : tails, isHead: isHead, isFlip: true});
	}

	render(){
		let url = this.state.isHead ? urls.heads : urls.tails;
		let btnClass = this.state.isFlip ? 'active' : 'disabled';
		return(
			<div className='Coinflip'>
				<h1>Let's flip a Coin!!</h1>
				<div className="Coinflip-middle">
					<Coin url={url} isFlip={this.state.isFlip} />
					<button onClick={this.flip} disabled={this.state.isFlip} className={btnClass}> Flip Me </button>
				</div>
				<div className='details'>
					<h4>Flips : {this.state.flips}</h4>
					<h4>Heads : {this.state.heads}</h4>
					<h4>Tails : {this.state.tails}</h4>
				</div>
			</div>
		);
	};
};

export default Coinflip;