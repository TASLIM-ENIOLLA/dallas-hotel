import Image from "next/image";

import TestimonialCard from "./TestimonialCard";

import { testimonials, TestimonialType } from "./_props/testimonials";

export default function Component() {
	return (
		<section className="py-20 max-w-full overflow-auto">
			<div className="container space-y-5 md:space-y-20">
				<div className="text-2xl md:text-4xl font-bold leading-normal capitalize">
					testimonials
				</div>
				<div className="overflow-hidden">
					<div className="flex gap-20 flex-no-wrap">
						{testimonials.map((props: TestimonialType, index: number) => (
							<TestimonialCard key={index} {...props} />
						))}
					</div>
				</div>
				<div className="flex flex-row gap-10 items-center">
					<div>
						<button className="flex items-center justify-center w-16 h-16 bg-black text-white rounded-full">
							<span className="material-icons text-5xl">arrow_left</span>
						</button>
					</div>
					<div>
						<button className="flex items-center justify-center w-16 h-16 bg-yellow-300 text-black rounded-full">
							<span className="material-icons text-5xl">arrow_right</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}