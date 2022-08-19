import { NavLink } from 'react-router-dom';

const SideDrawer = ({ toggleVisible }) => {
	return (
		<ul className="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
			<li>
				<NavLink onClick={toggleVisible} to="/">
					Home
				</NavLink>
			</li>
			<li>
				<NavLink onClick={toggleVisible} to="/attributes">
					Attributes
				</NavLink>
			</li>
			<li>
				<NavLink onClick={toggleVisible} to="/traits">
					Traits
				</NavLink>
			</li>
			<li>
				<NavLink onClick={toggleVisible} to="/details">
					Details
				</NavLink>
			</li>
		</ul>
	);
};

export default SideDrawer;
