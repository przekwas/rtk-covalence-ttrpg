import { useSelector } from 'react-redux';

import AttributeDetails from './AttrDetails';
import TraitDetails from './TraitDetails';

const attributesArray = [
	{
		type: 'dexterity'
	},
	{
		type: 'tenacity'
	},
	{
		type: 'logic'
	},
	{
		type: 'creativity'
	},
	{
		type: 'learning'
	}
];

const Details = () => {
	const selectedTraits = useSelector(state => state.traits.selected);
	const description = useSelector(state => state.description);

	return (
		<div className="container mx-auto mt-20 mb-5">
			<div className="mb-5 text-4xl font-extrabold text-center" id="game-text">
				Details
			</div>
			<div className="font-mono divider">Description</div>
			{description.name || description.handle ? (
				<div className="w-full mx-auto shadow-xl card lg:w-1/2 bg-primary text-primary-content">
					<div className="card-body">
						<h2 className="font-mono text-4xl card-title">{description.handle}</h2>
						<h3 className="text-sm italic font-semibold card-title">{description.name}</h3>
						<p>{description.background}</p>
					</div>
				</div>
			) : (
				<div className="mb-5 text-4xl font-extrabold text-center" id="game-text">
					None Written
				</div>
			)}
			<div className="font-mono divider">Attributes & Skills</div>
			<section className="flex flex-wrap items-stretch justify-center w-full overflow-hidden md:-mx-3">
				{attributesArray.map(attr => (
					<AttributeDetails key={attr.type} {...attr} />
				))}
			</section>
			<div className="font-mono divider">Traits</div>
			<section className="flex flex-wrap items-stretch justify-center w-full overflow-hidden md:-mx-3">
				{selectedTraits.length ? (
					selectedTraits.map(trait => <TraitDetails key={trait.id} trait={trait} />)
				) : (
					<div className="mb-5 text-4xl font-extrabold text-center" id="game-text">
						None Selected
					</div>
				)}
			</section>
		</div>
	);
};

export default Details;
