import Link from "next/link";
// import Image from "next/image";

import room_101 from "../../Rooms/_images/room-101.jpg";
import room_102 from "../../Rooms/_images/room-201.jpg";
import room_103 from "../../Rooms/_images/room-301.jpg";

import piano from "../_images/piano.jpg";

export default function Component({ image, flip }: FacilityCardPropType) {
	return (
		<div className={`flex flex-wrap ${flip ? "flex-row-reverse" : "flex-row"}`}>
			<div className="w-full sm:w-2/5">
				<div className="h-[200px] md:h-[300px] relative">
					<img
						src={image.src}
						alt="Facility image"
						className="w-full h-full block rounded-xl"
						style={{ objectFit: "cover", objectPosition: "center" }}
					/>
				</div>
			</div>
			<div className="w-full sm:w-3/5">
				<div className="md:p-5 md:pb-20 space-y-7 md:space-y-10">
					<div className="text-base md:text-xl pt-5 md:py-5 md:p-5 md:text-justify text-gray-600 font-medium md: leading-loose">
						It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English.
					</div>
					<div className="md:px-5">
						<Link href="/rooms" className="py-4 px-5 capitalize text-black font-bold text-lg rounded-full bg-yellow-300">
							read more
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export type FacilityCardPropType = {
	image: any,
	flip: number
}