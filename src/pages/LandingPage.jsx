import React, { useState } from "react";
import HeroSection from "../components/landing/HeroSection";
import PagesLayout from "../layouts/PagesLayout";
import PopularHomes from "../components/landing/PopularHomes";
import Services from "../components/landing/Services";
import CallToAction from "../components/landing/CallToAction";

const LandingPage = () => {
	const [searchInput, setSearchInput] = useState({
		location: "",
		propertytype: "",
		price: "",
	});

	const [activeFilters, setActiveFilters] = useState({
		location: "",
		propertytype: "",
		price: "",
	});

	const applyFilters = () => {
		setActiveFilters({ ...searchInput });
	};
	return (
		<div>
			<PagesLayout>
				<HeroSection
					searchInput={searchInput}
					setSearchInput={setSearchInput}
					onSearch={applyFilters}
				/>

				<PopularHomes activeFilters={activeFilters} />
				<Services />
				<CallToAction />
			</PagesLayout>
		</div>
	);
};

export default LandingPage;
