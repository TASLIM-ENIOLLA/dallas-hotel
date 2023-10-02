import DatePicker from "./DatePicker";
import RatePicker from "./RatePicker";

export default function Component() {
	return (
		<section className="py-20">
			<div className="container">
				<div className="space-y-10">
					<div className="max-w-[600px] mx-auto">
						<div className="text-4xl text-center leading-normal font-bold capitalize">
							make reservation
						</div>
					</div>
					<div className="px-10 py-5 border flex flex-wrap items-center gap-5 shadow rounded-md">
						<div className="flex flex-1 w-full gap-5 flex-wrap items-center justify-between">
							<div className="w-full md:flex-1 space-y-2 py-3">
								<div className="font-semibold uppercase text-gray-600">Check in</div>
								<DatePicker type="check-in" date="" onDateChange={() => null} />
							</div>
							<div className="w-full md:flex-1 space-y-2 py-3">
								<div className="font-semibold uppercase text-gray-600">Check out</div>
								<DatePicker type="check-out" date="" onDateChange={() => null} />
							</div>
							<div className="w-full md:flex-1 space-y-2 py-3">
								<div className="font-semibold uppercase text-gray-600">stay duration</div>
								<div className="capitalize font-medium text-lg">2 nights</div>
							</div>
							<div className="w-full md:flex-1 space-y-2 py-3">
								<div className="font-semibold uppercase text-gray-600">special rates</div>
								<RatePicker value="" onRateChange={() => null} />
							</div>
						</div>
						<div className="w-full lg:w-auto">
							<div className="flex-1 space-y-2 py-3">
								<button className="p-5 block w-full rounded-full bg-yellow-300 uppercase font-bold">view rates</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

// DELUXE 20, EXECUTIVE DELUXE 21, EXECUTIVE SUITE 5