import { Fragment } from "react";

import Banner from "@/components/Banner";
import Subscription from "@/components/Subscription";
import Footer from "@/components/Footer";

import RoomCard from "@/components/Rooms/RoomCard";

export default function Page() {
	return (
		<Fragment>
			<Banner />
			<section className="py-20">
				<div className="container space-y-10 md:space-y-20">
					<div className="text-2xl md:text-4xl text-center leading-normal font-bold capitalize">
						our room categories
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-20">
						{Array(5).fill("").map((image: object, index: number) => (
							<RoomCard key={index} id={index} image={image} />
						))}
					</div>
				</div>
			</section>
			<Subscription />
			<Footer />
		</Fragment>
	);
}