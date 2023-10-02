import piano from "./_images/piano.jpg";
import jaccuzzi from "./_images/jaccuzzi.jpg";
import pool from "./_images/pool.jpg";
import gym from "./_images/gym.jpg";

import FacilityCard, { FacilityCardPropType } from "./FacilityCard";

export default function Component() {
	const facilities: object [] = [piano, jaccuzzi, gym];

	return (
		<section className="py-20">
			<div className="container space-y-10 md:space-y-20">
				<div className="flex items-center justify-center">
					<div className="w-full md:w-2/5">
						<div className="text-2xl md:text-4xl md:text-center leading-normal font-bold capitalize">
							see the facilities we provide in real time
						</div>
					</div>
				</div>
				<div className="flex flex-col space-y-20">
					{facilities.map((image: object, index: number) => (
						<FacilityCard key={index} flip={index % 2} image={image} />
					))}
				</div>
			</div>
		</section>
	);
}