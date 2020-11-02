import React, {Component} from 'react'


class Product extends Component{
	constructor(props){
		super(props)

	}
	state ={
		checked: false
	}

	render(){
		
		return(
			<div style={{textAlign: 'center'}}>	
				<div className = 'info'>
				{this.props.name}
				</div>
				<div className = 'info'>
				{this.props.price}
				</div>
				<div className = 'info'>
				{this.props.amount}
				</div>
				
				<div className = 'info'>
				{this.state.checked ? this.FullConst() : 0}
				</div>
				<div className = 'info'>
				<input type='checkbox' 
				checked = {this.state.checked}
				onChange={this.handleChangeSum}
				/>
				</div>
				<button className = 'delete' 
				onClick={this.props.DeleteProduct.bind(null, this.props.index)}>Remove</button>
			</div>
			)
	}

		FullConst=()=>{
		return Number(this.props.price) * Number(this.props.amount)
	}
		handleChangeSum=()=>{
			this.setState({checked: !this.state.checked})
			this.props.updateCheck(this.state.checked)
	}
}

export default Product