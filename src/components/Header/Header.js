import React from 'react';
import cover from '../../images/cover.jpg';

const Header = () => {
	return (
		<div className="header flex justify-center h-60">
			<h1 className="text-white z-10 absolute text-3xl sm:text-4xl mt-16 font-semibold">
				Select An Unicorn Startup Team
			</h1>
			<h3 className="text-white z-10 absolute text-lg sm:text-xl mt-28 font-normal inline-block">
				I had a dream, to see it I need a team
			</h3>
			<h1 className="text-white z-10 absolute text-3xl sm:text-4xl mt-40 font-medium">
				BUDGET: 600000
			</h1>
			<img
				className="object-cover h-60 w-full absolute top-0 z-0"
				src={cover}
				alt=""
			/>
		</div>
	);
};

export default Header;
