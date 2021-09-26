import {
	faChartPie,
	faDollarSign,
	faListUl,
	faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Cart = (props) => {
	const { cart } = props;
	let totalCost = 0;
	let totalShare = 0;
	let myShare = 100;
	for (const candidate of cart) {
		totalCost += parseInt(candidate.salary);
		totalShare += parseInt(candidate.share_requirement);
	}
	myShare -= totalShare;
	return (
		<div>
			<h2 className="text-gray-800 text-lg sm:text-xl font-semibold mt-5 ml-3">
				<FontAwesomeIcon className="text-gray-700" icon={faUsers} />{' '}
				Total Mamber: {cart.length}
			</h2>
			<h2 className="text-gray-800 text-md sm:text-lg font-semibold my-5 ml-3">
				<FontAwesomeIcon
					className="text-gray-700"
					icon={faDollarSign}
				/>{' '}
				Total Cost: {totalCost}
			</h2>
			<h2 className="text-gray-800 text-md sm:text-lg font-semibold mb-6 ml-3">
				<FontAwesomeIcon className="text-gray-700" icon={faChartPie} />{' '}
				My Share: {myShare}%
			</h2>
			<hr />
			<h2 className="text-gray-800 text-md sm:text-lg font-semibold my-1 ml-3">
				<FontAwesomeIcon className="text-gray-700" icon={faListUl} />{' '}
				Selected Mambers:
			</h2>
			<hr />
			<ul className="mt-3 mb-2">
				{cart.map((candidate, index) => {
					return (
						<div className="my-2" key={candidate.key}>
							<li>{candidate.name}</li>
							<hr />
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default Cart;
