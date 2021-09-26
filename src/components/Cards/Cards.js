import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Cards = (props) => {
	const { name, subtitle, img, unique, age, salary, share_requirement } =
		props.candidate;
	return (
		<div className="flex items-center">
			{/* *Cart Start */}
			<div className="card w-80 bg-white  shadow-xl hover:shadow mt-28 mx-3 mb-5">
				<img
					className="w-40 mx-auto rounded-full -mt-20 border-8 border-white"
					src={img}
					alt=""
				/>
				<div className="text-center mt-2 text-3xl font-medium">
					{name}
				</div>
				<div className="text-center mt-2 font-light text-sm">
					{subtitle}
				</div>
				<div className="text-center font-normal text-lg">
					Uniqueness: {unique}
				</div>
				<div className="px-6 text-center mt-2 font-light text-sm">
					<p>Age: {age}</p>
				</div>
				<button
					onClick={() => props.handleAddToTeam(props.candidate)}
					className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded mt-2"
				>
					<FontAwesomeIcon className="text-sm" icon={faPlusCircle} />{' '}
					Add to Team
				</button>
				<hr className="mt-3" />
				<div className="flex p-4">
					<div className="w-1/2 text-center">
						<span className="font-bold">Salary:</span> ${salary}
					</div>
					<div className="w-0 border border-gray-300"></div>
					<div className="w-1/2 text-center">
						<span className="font-bold">Share Claim:</span>{' '}
						{share_requirement}%
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
