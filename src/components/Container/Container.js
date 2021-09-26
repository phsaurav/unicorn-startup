import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Cart from '../Cart/Cart';

const Container = () => {
	const [candidates, setCandidates] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch('./fakeData.json')
			.then((res) => res.json())
			.then((data) => {
				setCandidates(data);
			});
	}, []);

	const handleAddToTeam = (candidate) => {
		const newCart = [...cart, candidate];
		console.log(newCart);
		setCart(newCart);
	};

	return (
		<div className="grid grid-cols-3  md:grid-cols-4  xl:grid-cols-5 gap-2">
			<div className="col-start-1 col-span-2 md:col-span-3 xl:col-span-4">
				<div className="bg-gray-200 font-sans">
					<div className="mx-5 flex flex-row items-center flex-wrap justify-center">
						{candidates.map((candidate) => (
							<Cards
								key={candidate.key}
								candidate={candidate}
								handleAddToTeam={handleAddToTeam}
							></Cards>
						))}
					</div>
				</div>
			</div>
			<Cart></Cart>
		</div>
	);
};

export default Container;
