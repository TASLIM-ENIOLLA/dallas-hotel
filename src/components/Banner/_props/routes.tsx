export type RouteType = {
	name: string,
	href: string
}

export const routes: RouteType [] = [
	{ name: "home", href: "/" },
	{ name: "rooms", href: "/rooms" },
	{ name: "facilities", href: "/facilities" },
	{ name: "reviews", href: "/reviews" },
	{ name: "contact & support", href: "/contact-us" },
];