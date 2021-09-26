import React from 'react';

const Cards = () => {
	return (
		<div>
			<div className="bg-gray-200 font-sans  ">
				<div className="mx-5 flex flex-row items-center flex-wrap">
					{/* *Cart Start */}
					<div className="card w-80 bg-white  shadow-xl hover:shadow mt-28 mx-3 mb-5">
						<img
							className="w-40 mx-auto rounded-full -mt-20 border-8 border-white"
							src="https://avatars.githubusercontent.com/u/67946056?v=4"
							alt=""
						/>
						<div className="text-center mt-2 text-3xl font-medium">
							Ajo Alex
						</div>
						<div className="text-center mt-2 font-light text-sm">
							@devpenzil
						</div>
						<div className="text-center font-normal text-lg">
							Kerala
						</div>
						<div className="px-6 text-center mt-2 font-light text-sm">
							<p>
								Front end Developer, avid reader. Love to take a
								long walk, swim
							</p>
						</div>
						<hr className="mt-8" />
						<div className="flex p-4">
							<div className="w-1/2 text-center">
								<span className="font-bold">1.8 k</span>{' '}
								Followers
							</div>
							<div className="w-0 border border-gray-300"></div>
							<div className="w-1/2 text-center">
								<span className="font-bold">2.0 k</span>{' '}
								Following
							</div>
						</div>
					</div>
					{/* *Cart End */}

					{/* *Cart End */}
				</div>
			</div>
		</div>
	);
};

export default Cards;
