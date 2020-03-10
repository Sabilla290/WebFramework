import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import BlogPost from "./container/BlogPost/BlogPost";
import Mahasiswa from "./container/Mahasiswa/Mahasiswa";
//function HelloWord(argument) {
	// body...
//	return <p> ini adalah function component</p>
//}




ReactDOM.render(<Mahasiswa />, document.getElementById('content'));

// //If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();