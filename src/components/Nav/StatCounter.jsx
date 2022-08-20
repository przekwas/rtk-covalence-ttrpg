import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const StatCounter = ({ name, select }) => {
	const navigate = useNavigate();
	const points = useSelector(state => state[select].points);

	return (
		<div
			onClick={() => navigate(`/${select === 'skills' ? 'attributes' : select}`)}
			className="cursor-pointer">
			<span>{name}</span>{' '}
			<span className={`font-bold tracking-widest ${!points.current && 'text-error'}`}>
				{points.current}/{points.max}
			</span>
		</div>
	);
};

export default StatCounter;
