import {
	faDollarSign,
	faListUl,
	faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Cart = () => {
	return (
		<div>
			<h2 className="text-gray-800 text-lg sm:text-xl font-semibold mt-5 ml-3">
				<FontAwesomeIcon className="text-gray-700" icon={faUsers} />{' '}
				Total Mamber: 0
			</h2>
			<h2 className="text-gray-800 text-md sm:text-lg font-semibold my-5 ml-3">
				<FontAwesomeIcon
					className="text-gray-700"
					icon={faDollarSign}
				/>{' '}
				Total Cost: 0
			</h2>
			<hr />
			<h2 className="text-gray-800 text-md sm:text-lg font-semibold my-1 ml-3">
				<FontAwesomeIcon className="text-gray-700" icon={faListUl} />{' '}
				Selected Mambers:
			</h2>
			<hr />
			<ul className="mt-3">
				<li>Name</li>
				<hr />
			</ul>
		</div>
	);
};

export default Cart;
