import React from 'react'
import Components from './newcomp/Components'

class Users extends React.Component{

	state = {
			namelist: [
			{name: 'Alex', surname: 'Lobor'},
			{name: 'Andrew', surname: 'Loborchuk'},
			{name: 'Igor', surname: 'Kuditich'}
			]
		}
		deleteUser(index){
			this.state.namelist.splice(index,1);
			this.setState({namelist: this.state.namelist})
		}

	render(){
			let list = this.state.namelist.map((item,index)=>{
				return 	<Components key = {index}
				 name={item.name}
				 index = {index}
				 surname={item.surname}
				// num = {index + 1}
				 deleteUser = {this.deleteUser.bind(this)}
				  />
			})
		return(
			<ul>
				{list}
			</ul>)
	}
}

export default Users