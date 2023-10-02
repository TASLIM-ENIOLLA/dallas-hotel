import { Fragment } from "react";

import Banner from "@/components/Banner";
import Subscription from "@/components/Subscription";
import Footer from "@/components/Footer";

export default function Page() {
	return (
		<Fragment>
			<Banner />
			<section className="py-20">
				<div className="container space-y-10 md:space-y-20">
					<div className="text-2xl md:text-4xl text-center leading-normal font-bold capitalize">
						our facilities
					</div>
					<div className="space-y-20">
						{Array(6).fill("").map((_: string, index: number) => (
							<div key={index} className={`flex flex-wrap ${index % 2 ? "flex-row-reverse" : "flex-row"}`}>
								<div className="w-full md:w-2/5">
									<div className="h-full min-h-[250px]">
										<img
											src=""
											className="w-full h-full bg-gray-200 rounded-2xl"
											style={{ objectFit: "cover", objectPosition: "center" }}
										/>
									</div>
								</div>
								<div className="w-full md:w-3/5">
									<div className={`py-5 md:p-10 space-y-3 ${index % 2 ? "md:pl-0" : "md:pr-0"}`}>
										<div className="font-bold uppercase text-xl md:text-2xl">our pool</div>
										<div className="text-lg md:text-2xl tracking-loose font-normal text-black">
											Although the phrase is nonsense, it does have a long history. The phrase has been used for several centuries by typographers to show the most distinctive features of their fonts. It is used because the letters involved and the letter spacing in those combinations reveal, at their best, the weight, design, and other important features of the typeface.

										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<Subscription />
			<Footer />
		</Fragment>
	);
}