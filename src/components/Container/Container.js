import React from 'react';
import Cards from '../Cards/Cards';
import Cart from '../Cart/Cart';

const Container = () => {
	return (
		<div className="grid grid-cols-3  md:grid-cols-4  xl:grid-cols-5 gap-2">
			<div className="col-start-1 col-span-2 md:col-span-3 xl:col-span-4">
				<Cards></Cards>
			</div>
			<Cart></Cart>
		</div>
	);
};

export default Container;
