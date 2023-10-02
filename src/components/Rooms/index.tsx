import Link from "next/link";

import room_101 from "./_images/room-101.jpg";
import room_102 from "./_images/room-101.jpg";
import room_103 from "./_images/room-101.jpg";

import RoomCard from "./RoomCard";

export default function Component() {
	const rooms: object [] = [room_101, room_102, room_103];

	return (
		<section className="py-20">
			<div className="container space-y-10 md:space-y-20">
				<div className="flex flex-wrap items-center justify-between">
					<div className="w-full md:w-2/5">
						<div className="text-2xl md:text-4xl font-bold leading-normal capitalize">
							rooms we recommend to our customers
						</div>
					</div>
					<div className="w-full md:w-auto my-7">
						<Link href="/rooms" className="py-4 px-5 capitalize font-bold text-lg rounded-full text-black bg-yellow-300">
							view all rooms
						</Link>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 sm:gap-20">
					{rooms.map((image: object, index: number) => (
						<RoomCard key={index} id={index} image={image} />
					))}
				</div>
			</div>
		</section>
	);
}