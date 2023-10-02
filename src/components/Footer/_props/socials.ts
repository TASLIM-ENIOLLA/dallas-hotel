import Facebook from "../_icons/facebook.svg";
import Instagram from "../_icons/instagram.svg";
import TwitterX from "../_icons/twitterx.svg";
import Youtube from "../_icons/youtube.svg";

export const socials: SocialType [] = [
	{
		name: "facebook",
		icon: Facebook
	},
	{
		name: "instagram",
		icon: Instagram
	},
	{
		name: "X (Twitter)",
		icon: TwitterX
	},
	{
		name: "youtube",
		icon: Youtube
	},
]

export type SocialType = {
	name: string,
	icon: any
}