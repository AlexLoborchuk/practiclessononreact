import React from 'react'



class Form2 extends React.Component{

state ={
	//	show: false,
		arr: [],
		value: ''
	}

	render(){
		let fio = this.state.value.split(' ');
		return(
		<div >
		<form className = 'forms1' onSubmit={this.AddFIO} >
		<h2>Information about student</h2>
			<input value = {this.state.value} onChange={this.handleChangeFIO}/>
			<p>Surname: {fio[0]}</p>
			<p>Name: {fio[1]}</p>
			<p>Middle name: {fio[2]}</p>
		</form>
	</div>
		)
	}
	
		AddFIO=(event)=>{
		//this.state.arr.push(this.state.value)
		this.setState({arr: this.state.value})
		event.preventDefault()
	}
	handleChangeFIO =(event)=>{
	 this.setState({value: event.target.value})
	}

}

export default Form2