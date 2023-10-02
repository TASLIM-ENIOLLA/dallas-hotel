import Link from "next/link";

import RoomFeatures from "../RoomFeatures";

export default function Component({ id, image }: RoomCardType) {
	return (
		<div className="overflow-hidden rounded-3xl hover:shadow-lg cursor-pointer transition ease-in-out duration-500">
			<div className="h-[250px] md:h-[350px] bg-gray-200 relative">
				<div className="relative h-full w-full">
					<img
						src={image.src}
						alt="Room image"
						className="w-full h-full block"
						style={{ objectFit: "cover", objectPosition: "center" }}
					/>
				</div>
				<div className="absolute top-0 left-0 h-full w-full flex justify-between flex-col">
					<div className="flex justify-end p-3">
						<div className="bg-gray-900 rounded-3xl p-3 bg-opacity-50 text-white font-semibold text-sm uppercase">
							standard
						</div>
					</div>
					<div className="flex justify-end p-3">
						<Link href={`./rooms/${id}`} className="bg-gray-900 rounded-3xl text-center bg-opacity-50 text-white font-semibold uppercase w-[60px]">
							<span className="material-icons">arrow_right_alt</span>
						</Link>
					</div>
				</div>
			</div>
			<div className="p-5 space-y-3">
				<div className="font-semibold text-black capitalize text-lg md:text-xl">single contrast room</div>
				<div>
					<RoomFeatures />
				</div>
				<div>
					<span className="font-semibold capitalize text-lg md:text-xl">$89</span>
					<span className="text-gray-600 font-medium"> / night</span>
				</div>
			</div>
		</div>
	);
}

type RoomCardType = {
	id: number | string,
	image: any,
}