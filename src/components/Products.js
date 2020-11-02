import React, {Component} from 'react'
import Product from './newcomp/Product'

import '../css/style2.css'

class Products extends Component{
	state={
		prod: [
		{name: 'Кавун',price: 50, amount: 13, check: false},
		{name: 'Диня',price: 67, amount: 9, check: false},
		{name: 'Гарбуз',price: 25, amount: 44, check: false},
		{name: 'Кабачок',price: 15, amount: 37, check: false}
		],
		name: '',
		price: null,
		amount: null,
		hide: true,
		check: false
	}
	render(){
		let hidden, visible, result =0;
	var list = this.state.prod.map((item, index) =>{
		return 	<Product key= {index}
		name = {item.name} 
		price = {item.price} 
		amount = {item.amount} 
		index = {index}
		check = {item.check}
		DeleteProduct = {this.DeleteProduct.bind(this)} 
		updateCheck = {this.updateCheck} 
		/>	
	})

			for(var i=0;i<this.state.prod.length;i++){
				result +=  this.state.prod[i].price * this.state.prod[i].amount
			}
	if(this.state.hide){
			hidden = 'hidden'
			visible = 'visible'
	}
	else{
			hidden = 'visible'
			visible = 'hidden'
	}
		return(
			<div>
			<h3 style={{textAlign: 'center', marginTop: '50px'}}>
			Продукція</h3>
			<div  style={{textAlign: 'center', marginRight: '175px'}}>
			<div className='info'>Назва </div>
			<div className='info'>Ціна</div>
			<div className='info'>Кількість</div>
			<div className='info'>Оптова ціна</div>
			</div>
				{list}
				<div style={{textAlign: 'center', marginRight: '175px',visibility: hidden}}>
					<input type="text" className='info' value={this.state.name} onChange={this.handleChangeName}/>
					<input type="text" className='info' value={this.state.price} onChange={this.handleChangePrice}/>
					<input type="text" className='info' value={this.state.amount} onChange={this.handleChangeAmount}/>
					<div  className='info' style={{visibility: 'visible'}}>
					Загальна сума: {result}</div>
				</div>
					<div style={{textAlign: 'center'}}>
				<button className='newprod' style={{visibility: visible}}
				onClick={this.ReductProduct}>New product
				</button>
				<button className='newprod'  style={{visibility: hidden}}
				onClick={this.AddProduct}>Ok
				</button>
				</div>
				{console.log(this.state.check)}
			</div>)
	}

	DeleteProduct=(index)=>{
		this.state.prod.splice(index,1);
		this.setState({prod: this.state.prod})
	}
	ReductProduct=()=>{
		this.setState({hide: !this.state.hide})
		
	}
	AddProduct =()=>{
		this.state.prod.push({name: this.state.name, price: this.state.price, amount: this.state.amount})
	this.setState({prod: this.state.prod})
		this.setState({hide: !this.state.hide})
	}
	handleChangeName=(event)=>{
		this.setState({name: event.target.value})
	}
		handleChangePrice=(event)=>{
		this.setState({price: event.target.value})
	}
		handleChangeAmount=(event)=>{
		this.setState({amount: event.target.value})
	}
	updateCheck =(value)=>{
		this.setState({check: value})
		//this.state.prod.push({check: this.state.check})
	}
}



export default Products