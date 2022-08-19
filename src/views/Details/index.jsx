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

	return (
		<div className="container mx-auto mt-20 mb-5">
			<div className="mb-5 text-4xl font-extrabold text-center" id="game-text">
				Details
			</div>
			<div className="font-mono divider">Attributes & Skills</div>
			<section className="flex flex-wrap items-stretch justify-center w-full overflow-hidden md:-mx-3">
				{attributesArray.map(attr => (
					<AttributeDetails key={attr.type} {...attr} />
				))}
			</section>
			<div className="font-mono divider">Traits</div>
			<section className="flex flex-wrap items-stretch justify-center w-full overflow-hidden md:-mx-3">
				{selectedTraits.map(trait => (
					<TraitDetails key={trait.id} trait={trait} />
				))}
			</section>
		</div>
	);
};

export default Details;
