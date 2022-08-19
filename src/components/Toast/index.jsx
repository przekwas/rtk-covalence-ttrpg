import { GiMineExplosion, GiSave, GiHazardSign } from 'react-icons/gi';
import { toast } from 'react-toastify';

const ToastTemplate = ({ message, icon }) => {
	return (
		<div className="flex items-center">
			{icon}
			<span className="ml-6">{message}</span>
		</div>
	);
};

const error = message =>
	toast.error(
		<ToastTemplate message={message} icon={<GiMineExplosion className="text-4xl" />} />,
		{
			className: 'border-l-8 border-red-500',
			bodyClassName: 'text-red-100',
			progressClassName: 'bg-red-600',
			style: { background: '#742a2a' }
		}
	);

const warning = message =>
	toast.warning(
		<ToastTemplate message={message} icon={<GiHazardSign className="text-4xl" />} />,
		{
			className: 'border-l-8 border-yellow-500',
			bodyClassName: 'text-yellow-100',
			progressClassName: 'bg-yellow-600',
			style: { background: '#ca8a04' }
		}
	);

const success = message =>
	toast.success(<ToastTemplate message={message} icon={<GiSave className="text-4xl" />} />, {
		className: 'border-l-8 border-green-500',
		bodyClassName: 'text-green-100',
		progressClassName: 'bg-green-600',
		style: { background: '#22543d' }
	});

const Toast = {
	success,
	error,
	warning
};

export default Toast;
