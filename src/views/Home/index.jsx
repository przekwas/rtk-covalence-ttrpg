import { Link } from 'react-router-dom';
import CovalenceLogo from '../../assets/covalence-mark-blue-gradient.png';

const Home = () => {
	return (
		<div>
			<div
				className="hero bg-base-200"
				style={{ marginTop: '64px', minHeight: 'calc(100vh - 64px)' }}>
				<div className="flex-col text-center lg:text-left hero-content lg:flex-row-reverse">
					<img src={CovalenceLogo} className="max-w-sm rounded-lg" alt="covalence logo" />
					<div>
						<h1 className="text-2xl font-bold text-blue-500 lg:text-5xl">Covalence</h1>
						<p className="py-2 text-sm lg:text-base lg:py-3">
							It's a busy day at the Covalence Intelligence Agency (CIA), and there
							are spies.
						</p>
						<p className="py-2 text-sm lg:text-base lg:py-3">
							<span className="font-semibold">YOU</span> are a{' '}
							<span className="italic">HACKER</span>, an actor in the 5D chess game
							between government agencies, Anonymous, and hacktivist groups unfolding
							inside of the CIA. Your mission: disguise yourself and steal
							confidential information tied to the internet's leading trade school.
							Employ keyloggers, cryptoanalytic attacks, and botnets to take
							everything you can and leave before you are discovered... or worse.
						</p>
						<p className="py-2 text-sm lg:text-base lg:py-3">
							It's you vs. everyone else. Can you evade security? Fool a polygraph
							test? Undermine the enemy hackers? Cover your tracks or get got in...
						</p>
						<h2
							className="py-2 text-2xl font-semibold tracking-widest text-indigo-500 lg:text-4xl lg:py-3"
							id="game-text">
							PHISHION
						</h2>
						<Link to="/attributes" className="btn btn-primary">
							Get Hacking!
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
