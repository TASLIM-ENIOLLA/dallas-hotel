export default function Component() {
	return (
		<div className="flex rounded-full shadow-lg overflow-hidden">
			<div className="flex-1">
				<input
					type="email"
					placeholder="Enter your email address..."
					className="p-5 font-medium outline-none text-sm md:text-base border-none block w-full"
				/>
			</div>
			<div className="">
				<button className="text-sm md:text-base py-5 px-5 md:px-10 bg-yellow-300 capitalize font-medium tracking-loose text-black">
					subscribe
				</button>
			</div>
		</div>
	);
}