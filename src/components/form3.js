import React from 'react';


class form3 extends React.Component{
	state ={
			number1: '',
			nameList: ['Alex', 'Andrew', 'Igor'],
			texts: [], 
			text: ''
	}

	render(){
		let list = this.state.nameList.map((item, index)=>{
			return <li key={index}>{item}
			<input type="button" onClick= {this.removeEl.bind(this, index)} value="Remove Element"/>
			</li>
		})
		let textlist = this.state.texts.map((item, index)=>{
			return <p key={index}>{item}</p>
		})
		return(
		<div className = 'forms1' >
		<form  onSubmit={this.AddInfo}>
		<h2>Work with Forms</h2>
		<ul>{list}</ul>
		<input type='text' value={this.state.number1} onChange={this.handleChangeNumber1}/>
		<br/>
		<br/>
		<input type='submit' value="Answer"/>
			<input type="button" onClick= {this.deleteElem} value="Delete"/>
		</form>
 		<textarea cols="25" rows="5" value={this.state.text} onChange={this.handleChangeText}></textarea>
 		<button onClick={this.arrText}>Ok</button>
 		{textlist}
	</div>
		)
	}
	AddInfo=(event)=>{
		this.state.nameList.push(this.state.number1);
		this.setState({nameList: this.state.nameList});
		event.preventDefault()
	}
	handleChangeNumber1 =(event)=>{
	 this.setState({
	 	number1: event.target.value
	 })
	}
	 arrText =(event)=>{
	 	this.state.texts.push(this.state.text);
	 	this.setState({texts: this.state.texts});
	 	event.preventDefault()
	 }
	handleChangeText =(event)=>{
		this.setState({
			text: event.target.value
		})
	}
	removeEl =(index)=>{
		this.state.nameList.splice(index,1);
		this.setState({nameList: this.state.nameList})
	}
	deleteElem =()=>{
		this.state.nameList.splice(this.state.number1,1);
		this.setState({nameList: this.state.nameList})
	}
}
export default form3
