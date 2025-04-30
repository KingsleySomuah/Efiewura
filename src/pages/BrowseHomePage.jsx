import React, { useState } from "react";
import BrowseHomes from "../components/landing/BrowseHomes";
import PagesLayout from "../layouts/PagesLayout";

const BrowseHomePage = () => {
	const [activeFilters, setActiveFilters] = useState({
		location: "",
		propertytype: "",
		price: "",
	});

	return (
		<PagesLayout>
			<BrowseHomes initialFilters={activeFilters} />
		</PagesLayout>
	);
};

export default BrowseHomePage;
