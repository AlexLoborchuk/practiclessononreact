 import React from 'react';


class App extends React.Component {

	state = {
			name: 'Alex',
			 surname: 'Lobor',
			 dBithday: 25,
			isOpen: true,
			value: true,
			//name2 : prompt('Our name'),
			nameL : true,
			//newName : prompt('nameList'),
			name3: 'Иван',
			 age: 25, 
			 show: false,
			 arrName: ['Коля', 'Вася', 'Петя', 'Дима'],
			 hrefs: [
					{href: '1.html', text: 'ссылка 1'},
					{href: '2.html', text: 'ссылка 2'},
					{href: '3.html', text: 'ссылка 3'},
	]
	}

 	
 	render() {
	let arr = ['a', 'b', 'c', 'd', 'e'];
	 const list =this.state.isOpen && arr.map((item,index)=>{
 			return <li key={index}>{item}</li>
 		})
 		const namelist = this.state.arrName.map((item, index)=>{
 			return <li key="index"> {item} - {index+1}
 			<button onClick={this.deleteItem}>Delete</button>
 			</li>
 		})
 		const link = this.state.hrefs.map((item, index)=>{
 			return <li key="index"><a href={item.href}> {item.text}</a></li>
 		})
 	if(this.state.show){
 		var text = <p>Имя: {this.state.name3}, возраст: {this.state.age}</p>
 	}
 		return (
 		<div>

 		<div className="block1">
 		<button onClick ={this.infoStudent}>Info</button>
 		<h2>{this.state.surname} {this.state.name}</h2>
 		<button onClick ={this.closeBlock}>{this.state.isOpen ? 'Close' :  'Open'}</button>
 		<ul>{list}</ul>
 		
 		<input type='text' placeholder="TEXT"/>
 		<div>Creation date: {new Date().toDateString()}</div>
 		</div>
 		<div className ='block2'>
 		<h2>Lesson 2</h2>
 			<p onClick={this.say}> {this.state.value ? 'Hello': 'Bye'} {this.state.name2}</p>
 		<hr/>
 		 {text}
 			<button onClick={this.information}>{this.state.show ? 'скрити' : 'показати'}</button>
 			<ul>{namelist}</ul>
 				<button onClick={this.addName}>Add</button>
 				<button onClick={this.deleteArr}>Delete</button>
 			<ul>{link}</ul>
 		</div>	
 		</div>
 		);
 	}	
 		information=()=>{
 			this.setState({	show: !this.state.show})
 		}
 		deleteArr = () =>{
 			this.setState({ arrName: this.state.arrName.slice(0, -1)})
 		}
 		deleteItem = (index) =>{
 			this.state.arrName.splice(index,1)
 			this.setState({arrName: this.state.arrName})
 		}
 		addName=()=>{	
 			this.state.arrName.push('newlist');
 			this.setState({arrName: this.state.arrName})
 		}
		say =()=>{
 		this.setState({
 			value: !this.state.value})
 	}
 		 closeBlock = () =>{
 		this.setState({isOpen: !this.state.isOpen})
 	}
 		infoStudent = ()=>{
 			this.setState({
 				surname: 'Nikitin',
 				name:'Igor'
 			});
 		}

 }

export default App