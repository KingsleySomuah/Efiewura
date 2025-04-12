import { IoHomeOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

export default {
	navLink: [
		{
			name: "Dashboard",
			path: "/dashboard",
			icon: RxDashboard,
		},
		{
			name: "Add Listing",
			path: "/dashboard/add-listing",
			icon: IoHomeOutline,
		},
	],
};
