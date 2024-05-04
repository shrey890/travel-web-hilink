import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Camp from "@/components/Camp";

export default function Home() {
	return (
		<div className="">
			<Hero />
			<Camp />
			<Guide />
			<Features />
			<GetApp />
		</div>
	);
}
