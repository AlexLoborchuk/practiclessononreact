import React from 'react';
import {useParams} from 'react-router-dom';

function UserId(){
	let {userName} = useParams();
	return(	<div>
		
		<li><a href="/infousers">Назад</a></li>
		<h2>User: {userName}</h2>
		</div>)
}

export default UserId