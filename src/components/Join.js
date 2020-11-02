 import React from 'react';
 import {BrowserRouter as Router, Switch,Route, Link} from 'react-router-dom'
 import '../style.css';
 import Header from './Header'
 import App from './App'
 import Article from './Article'
 import FormReact from './FormReact'
 import Form2 from './Form2'
 import Form3 from './form3'
 import Checkbox from './Checkbox'
 import PracticForm from './PracticForm'
 import Products from './Products'
 import Users from './Users'
 import InfoUsers from './InfoUsers'
  import UserId from './UserId'
 import Error from './Error'


 function Join(){
 	return (<div>
 		 {/* <Header/>*/}
 <Router>
 <nav>
			<li><Link to="/">Article</Link></li>
			<li><Link to="/app">App</Link></li>
			<li><Link to="/formreact">FormReact</Link></li>
			<li><Link to="/form2">Form2</Link></li>
			<li><Link to="/form3">Form3</Link></li>
			<li><Link to="/checkbox">Checkbox</Link></li>
			<li><Link to="/products">Products</Link></li>
			<li><Link to="/practicform">PracticForm</Link></li>
		{/*	<li><Link to="/users">Users</Link></li>*/}
			<li><Link to="/infousers">Information about Users</Link></li>
		</nav>
 	<Switch>
 		<Route exect path='/article' component={Article}/>
 		<Route path='/app' component={App}/>
 		<Route path='/formreact' component={FormReact}/>
	 	<Route path='/form2' component={Form2}/>
	 	<Route path='/form3' component={Form3}/>
	 	<Route path='/checkbox' component={Checkbox}/>
	 	<Route path='/products' component={Products}/>
	 	<Route path='/practicform' component={PracticForm}/>
	 	{/*<Route  path='/users' component={Users}/>*/}
 		<Route exact path='/infousers' component={InfoUsers}/>
 		<Route path='/infousers/:userName' component={UserId}/>
 			
 			<Route component={Error}/>
 	</Switch>
 </Router>
 </div>)
 }

 export default Join;