import { Routes, Route } from 'react-router-dom';

import { Home, Attributes, Boons, Curses, Perks, Details } from '../views';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/attributes" element={<Attributes />} />
			<Route path="/boons" element={<Boons />} />
			<Route path="/curses" element={<Curses />} />
			<Route path="/perks" element={<Perks />} />
			<Route path="/details" element={<Details />} />
		</Routes>
	);
};

export default AppRoutes;