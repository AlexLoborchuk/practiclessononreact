import React from 'react';


class FormReact extends React.Component{
	state ={
		show: false,
		value: ''
	}

	render(){
	var years = new Date().getFullYear() - Number(this.state.value);
	 	let HB = ''
		if(this.state.show){
	  HB = <p >Ви народились в {years} році</p>
	}
		return(
		<div >
		<form className = 'forms1' onSubmit={this.AddInfo}>
		<h2>Work with Forms</h2>
		<input value = {this.state.value} onChange={this.handleChange}/>
				{HB}
		</form>
	</div>
		)
	}
	AddInfo=(event)=>{
		this.setState({value: this.state.value})
		event.preventDefault()
		this.setState({show: true})
	}
	handleChange =(event)=>{
	 this.setState({
	 	value: event.target.value
	 })
	}

}

export default FormReact