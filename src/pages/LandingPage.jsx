import React from "react";
import HeroSection from "../components/landing/HeroSection";
import PagesLayout from "../layouts/PagesLayout";
import PopularHomes from "../components/landing/PopularHomes";
import Services from "../components/landing/Services";
import CallToAction from "../components/landing/CallToAction";

const LandingPage = () => {
	return (
		<div>
			<PagesLayout>
				<HeroSection />
				<PopularHomes />
				<Services />
				<CallToAction />
			</PagesLayout>
		</div>
	);
};

export default LandingPage;
