import { useSelector } from 'react-redux';

const StatCounter = ({ name, select }) => {
	const points = useSelector(state => state[select].points);

	return (
		<div>
			<span>{name}</span>{' '}
			<span className={`font-bold tracking-widest ${!points.current && 'text-error'}`}>
				{points.current}/{points.max}
			</span>
		</div>
	);
};

export default StatCounter;
