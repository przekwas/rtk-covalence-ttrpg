import { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AppRoutes from './AppRoutes';
import { Nav, Drawer, SideDrawer } from '../components';

const App = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => setVisible(p => !p);

	return (
		<HashRouter>
			<ToastContainer
				position="bottom-right"
				autoClose={3000}
				draggable={false}
				pauseOnHover={false}
			/>
			<Drawer
				open={visible}
				onClickOverlay={toggleVisible}
				side={<SideDrawer toggleVisible={toggleVisible} />}>
				<Nav toggleVisible={toggleVisible} />
				<AppRoutes />
			</Drawer>
		</HashRouter>
	);
};

export default App;
