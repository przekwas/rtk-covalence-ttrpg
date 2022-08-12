import { GiHamburgerMenu } from 'react-icons/gi';
import StatCounter from './StatCounter';

const Nav = ({ toggleVisible }) => {
	return (
		<div className="items-center justify-between navbar bg-neutral text-neutral-content">
			<div>
				<button className="btn btn-square btn-ghost" onClick={toggleVisible}>
					<GiHamburgerMenu className="text-2xl md:text-3xl" />
				</button>
			</div>
			<div className="flex justify-around flex-1 text-sm md:text-lg">
				<StatCounter name="attr" select="attributes" />
				<StatCounter name="skills" select="skills" />
				<StatCounter name="boons" select="boons" />
				<StatCounter name="curses" select="curses" />
			</div>
		</div>
	);
};

export default Nav;
