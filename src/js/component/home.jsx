import React from "react";
import { BrowserRouter,Routes, Route, Link} from 'react-router-dom'
import About from './about.jsx'
import Service from './service.jsx'
import Contact from './contact.jsx'
import Header from './header.jsx'
const Home = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<About />}/>
					<Route path='/contactenos' element={<Contact />}/>
					<Route path='/servicios' element={<Service />}/>
				</Routes>
				<h3>Footer</h3>
			</BrowserRouter>
		</>		
	);
};

export default Home;
