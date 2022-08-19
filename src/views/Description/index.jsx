import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from '../../features/description/descriptionSlice';

const Description = () => {
	const dispatch = useDispatch();
	const values = useSelector(state => state.description);

	const handleChanges = e => {
		dispatch(changeValue({ key: e.target.name, value: e.target.value }));
	};

	return (
		<div className="container mx-auto mt-20 mb-5">
			<div className="mb-5 text-4xl font-extrabold text-center" id="game-text">
				Description
			</div>
			<div>
				<form className="w-full px-4 py-8 mx-auto lg:w-1/2">
					<div className="flex flex-wrap justify-between">
						<div className="w-full max-w-xs mb-5 lg:mr-5 form-control">
							<label className="label">
								<span className="label-text">Real Name</span>
							</label>
							<input
								type="text"
								name="name"
								placeholder="Luke Przekwas"
								className="w-full max-w-xs input input-bordered input-primary"
								value={values.name}
								onChange={handleChanges}
							/>
						</div>
						<div className="w-full max-w-xs mb-5 form-control">
							<label className="label">
								<span className="label-text">Hacker Handle</span>
							</label>
							<input
								type="text"
								name="handle"
								placeholder="Tuna_No_Crust"
								className="w-full max-w-xs input input-bordered input-primary"
								value={values.handle}
								onChange={handleChanges}
							/>
						</div>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Your Bio</span>
						</label>
						<textarea
							name="background"
                            rows="10"
							className="textarea textarea-bordered textarea-primary"
							placeholder="Tuna_No_Crust has always been interested in hacking, and Phishion is the catalyst to get some real first hand experience in it!"
							value={values.background}
							onChange={handleChanges}></textarea>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Description;
