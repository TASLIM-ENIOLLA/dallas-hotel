import Link from "next/link";
// import Image from "next/image";

import { routes, RouteType } from "./_props/routes";

export default function Component() {
	return (
		<section className="min-h-screen flex flex-col">
			<header className="py-5 shadow">
				<div className="container">
					<div className="flex items-center justify-between">
						<div>
							<Link href="/">
								<img
									width="35"
									height="35"
									alt="Site logo"
									src="/favicon.ico"
								/>
							</Link>
						</div>
						<div className="sm:hidden">
							<button className="px-3">
								<span className="material-icons text-3xl text-white">menu</span>
							</button>
						</div>
						<div className="hidden sm:flex gap-10 items-center">
							{routes.map(({ name, href }: RouteType, index: number) => (
								<Link key={index} href={href} className="text-normal tracking-wide text-white capitalize font-medium">
									{name}
								</Link>
							))}
						</div>
					</div>
				</div>
			</header>
			<main className="container flex-1 flex flex-col">
				<div className="flex-1 flex flex-col justify-center">
					<div className="max-w-[900px] sm:border-l-4 p-10 space-y-10">
						<div className="text-4xl md:text-5xl font-bold tracking-wide leading-normal text-white capitalize">
							Discover the perfect blend of luxury, comfort, and convenience at Dallas Grand Beach Hotel and Resort.
						</div>
						<div>
							<button className="py-5 px-20 font-bold uppercase bg-yellow-400 rounded-lg text-black">
								make a reservation
							</button>
						</div>
					</div>
				</div>
			</main>
			<style jsx>{`
				section {
					background: linear-gradient(rgba(0,0,0,.7) 3%, rgba(0,0,0,.5)),
											url(/images/rooms/DSC_5312.jpg);
					background-position: center;
					background-size: cover;
				}
				header {
					backdrop-filter: blur(5px);
				}
			`}</style>
		</section>
	);
}     