import React from 'react'


class PracticForm extends React.Component{
	constructor(props){
		super(props)
		this.checked = React.createRef();
	}
	state = {
			//checked: true,
			users: [
		{name: 'Коля', surname: 'Иванов', age: 30},
		{name: 'Вася', surname: 'Петров', age: 40},
		{name: 'Петя', surname: 'Сидоров', age: 50},
	]
		}
			
			handleChange0= () => {
			this.setState({checked0: !this.state.checked0})
		}	
		handleChange1= () => {
			this.setState({checked1: !this.state.checked1})
		}	
		handleChange2= () => {
			this.setState({checked2: !this.state.checked2})
		}	

			handleChange= (index) => {
						this.setState({checked: !this.state.checked})
				}


	render(){

		if(this.state.checked0 === true){
			var show0 = 'none';
		}
		if(this.state.checked1 === true){
			var show1 = 'none';
		}
		if(this.state.checked2 === true){
			var show2 = 'none';
		}


		/*let list = this.state.users.map((item,index) =>{
			return 	<li key={index}>
			 <input type="checkbox" refs={this.checked} onChange={this.handleChange.bind(this, index)}/>
			 <p id = {index} style={{display: show}}> Імя: {item.name}
			 <br/> Прізвище: {item.surname}
			 <br/> Вік: {item.age}
			 <br/>
			 </p>
			 </li>})*/
		return(
			<div>
			<ul>
				{/*list*/}
			 <li>
			<input type="checkbox" checked={this.state.checked0} onChange={this.handleChange0}/>
			 <p  style={{display: show0}}>
			  Ім'я: {this.state.users[0].name}
			 <br/> Прізвище: {this.state.users[0].surname}
			 <br/> Вік: {this.state.users[0].age}
			 <br/>
			 </p>
			 </li>

			 	<li >
			 <input type="checkbox" checked={this.state.checked1} onChange={this.handleChange1}/>
			 <p  style={{display: show1}}> Ім'я: {this.state.users[1].name}
			 <br/> Прізвище: {this.state.users[1].surname}
			 <br/> Вік: {this.state.users[1].age}
			 <br/>
			 </p>
			 </li>

			 <li>
			 <input type="checkbox" checked={this.state.checked2} onChange={this.handleChange2}/>
			 <p  style={{display: show2}}> Ім'я: {this.state.users[2].name}
			 <br/> Прізвище: {this.state.users[2].surname}
			 <br/> Вік: {this.state.users[2].age}
			 <br/>
			 </p>
			 </li>
			</ul>	

			</div>
			)
	}

}

export default PracticForm