import React from 'react'


class Chekbox extends React.Component{


		handleStateD =(event)=>{
			this.setState({day: event.target.value})
		}
		handleStateM =(event)=>{
			this.setState({month: event.target.value})
		}
		handleStateY =(event)=>{
			this.setState({year: event.target.value})
		}
		state={
			check: false,
			checkOk: true,
			selok: 0,
			citylist: ['red',
			 'blue', 
			 'orange',
			  'green'],
			  option: '',
			  selectOk: ["true", "false"],
			  selectP: [1,2,3],
			  dayArr: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
			  monthArr: [1,2,3],
			  yearArr: []
		}

		render(){
			let info = <p>{this.state.check ? 'Громик *****лиз' : ''}</p>
			let city = this.state.citylist.map((item, index) =>{
				return <option key={index} value={index}>{item}</option>
			})
			var selOk = this.state.selectOk.map((item, index) =>{
				return <option key={index} value={index}>{item}</option>
			
			})
			var selP = this.state.selectP.map((item, index) =>{
				return <option key={index} value={index}>{item}</option>
			
			})
			if(this.state.numberP == 0){
				var text1 = 'ABC'
			}
			else if (this.state.numberP == 1){
				var text2 = 'DML'
			}
			else if(this.state.numberP == 2){
				var text3  = 'FBR'
			}
			let disable;
			if(this.state.option == 'option2') {
				disable =	true
			}  else{
				disable = false
			} 


			for(var i=0; i<50;i++){
				let item = 1998 + i;
					this.state.yearArr.push(item);
			}


			let days = this.state.dayArr.map((item, index) =>{
				return <option key={index}>{item}</option>
			})
			let months = this.state.monthArr.map((item, index) =>{
				return <option key={index}>{item}</option>
			})
			let years = this.state.yearArr.map((item, index) =>{
				return <option key={index}>{item}</option>
			})

			let date = new Date(this.state.year, this.state.month, this.state.day)
			return (
				<div className="forms1">
					<input type='checkbox' checked={this.state.check} onChange={this.handleChecked}/>Розкрити секрет
					{info}
					<select value ={this.state.value} onChange={this.handleState}>
						{city}
					</select>

					<p style={{background: this.state.citylist[this.state.value]}}>{this.state.citylist[this.state.value]}</p>
				<br/>
				<br/>
				<br/>

			<input
				name="lang"
				type="radio"
				value="option1"
				checked={this.state.option == 'option1'}
				onChange={this.handleRadioChange}
			/>

			<input
				name="lang"
				type="radio"
				value="option2"
				checked={this.state.option == 'option2'}
				onChange={this.handleRadioChange}
			/>	
				<input type="text" disabled ={disable} />

			<br/>
			<br/>
			<br/>
			<select value ={this.state.selok} onChange={this.handleStateOK}>
						{selOk}
					</select>
					<input type='checkbox' checked={this.state.selok == 0 ? this.state.checkOk : !this.state.checkOk} onChange={this.handleCheckedOk.bind(this)}/>
					{this.state.selok == 0 ? 'he отмечено' : 'отмечено'}
					<br/>
					<br/>
						<select value = {this.state.numberP} onChange={this.handleStateP}>
						{selP}
						</select>
						<p>1. {text1}</p>
						<p>2. {text2}</p>
						<p>3. {text3}</p>


							<select value ={this.state.day} onChange={this.handleStateD}>
						{days}
					</select>
						<select value ={this.state.month} onChange={this.handleStateM}>
						{months}
					</select>
						<select value = {this.state.year} onChange={this.handleStateY}>
						{years}
					</select>

					Вказаний день: {date.getDay()}
				</div>
				)
		}

		handleChecked =() =>{
			this.setState({ check: !this.state.check})
		}
		handleCheckedOk =() =>{
			
			this.setState({ checkOk: !this.state.checkOk})
			}
		handleState =(event)=>{
			this.setState({value: event.target.value})
		}
		handleStateP =(event)=>{
			this.setState({numberP: event.target.value})
		}
		handleStateOK =(event)=>{
			this.setState({selok: event.target.value})
		}
		handleRadioChange =(event)=>{
	   		this.setState({option: event.target.value})
		}
}


export default Chekbox