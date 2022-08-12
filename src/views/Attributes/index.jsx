import { GiButtonFinger, GiHeartWings, GiBrain, GiProcessor, GiSmart } from 'react-icons/gi';

import AttributeCard from './AttributeCard';

const attributesArray = [
	{
		type: 'dexterity',
		Icon: GiButtonFinger,
		description:
			'Dexterity is important for typing speed and your ability to stealthily write and deploy code.'
	},
	{
		type: 'grit',
		Icon: GiHeartWings,
		description:
			'Grit is passion and perseverance for long-term and meaningful goals.  It helps you sit in your chair longer, find typos without crushing your spirit, and the courage to tackle otherwise impossible coding problems.'
	},
	{
		type: 'logic',
		Icon: GiProcessor,
		description:
			'Logic deals with what problems can be solved on a model of computation, using an algorithm, how efficiently they can be solved or to what degree.'
	},
	{
		type: 'creativity',
		Icon: GiSmart,
		description:
			'Creativity is the ability to create new and unique applications, programs, and hacks.'
	},
	{
		type: 'learning',
		Icon: GiBrain,
		description:
			'Learning is the acquisition of knowledge or skills through experience, mentorship, or by reading documentation.'
	}
];

const Attributes = () => {
	return (
		<div className="container mx-auto my-5">
			<div className="mb-5 text-4xl font-extrabold text-center">Attributes</div>
			<section className="flex flex-wrap items-stretch justify-center w-full overflow-hidden md:-mx-3">
				{attributesArray.map(attr => (
					<AttributeCard key={attr.type} {...attr} />
				))}
			</section>
		</div>
	);
};

export default Attributes;
