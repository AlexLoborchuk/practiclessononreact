import React from 'react'

class Components extends React.Component{
	constructor(props){
		super(props)
		}

		state ={
			checked: false,
			redact: false,
			nameredac: this.props.name
		}


		handleChange =()=>{
			this.setState({checked: !this.state.checked})
		}
		Redact =()=>{
			this.setState({redact: !this.state.redact})
		}

		changeInfo=(event)=>{
			this.setState({nameredac: event.target.value})
		}		


	render(){
		var color, show, redactive;
		if(this.state.checked){
			 color = 'line-through'
		}
		else{
			 color = 'none'
		}

		if(this.state.redact){
			show = 'hidden'
			redactive = 'visible'
		}else{
			show = 'visible'
			redactive = 'hidden'
		}
		return(<div>
			<li style={{textDecoration: color, visibility: show}}>
				<div>Ім'я: {this.state.nameredac}</div>
				<div>Прізвище: {this.props.surname} </div>
				<input type="checkbox" checked = {this.state.checked} onChange={this.handleChange}/>
				<button onClick={this.props.deleteUser.bind(null, this.props.index)}>Delete me</button>
			</li>
			<br/>
			<button onClick={this.Redact}>{!this.state.redact ? 'Redactive' : 'Acept' }</button>
			<input type="text" value={this.state.nameredac} 
			style={{visibility: redactive}}
			 onChange ={this.changeInfo}/>
			<br/>
			</div>)
	}
}

export default Components