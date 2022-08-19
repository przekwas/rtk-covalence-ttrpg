import { Routes, Route } from 'react-router-dom';

import { Home, Attributes, Traits, Details, Description } from '../views';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Description" element={<Description />} />
			<Route path="/attributes" element={<Attributes />} />
			<Route path="/traits" element={<Traits />} />
			<Route path="/details" element={<Details />} />
		</Routes>
	);
};

export default AppRoutes;