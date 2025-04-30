import { IoCalendarClearOutline, IoHelp, IoHomeOutline, IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
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
		{
			name: "Scheduled Views",
			path: "/dashboard/scheduled-views",
			icon: IoCalendarClearOutline

		},
		{
			name: "Help center",
			path: "/dashboard/help-center",
			icon: IoHelp
		},
		{
			name: "Account settings",
			path: "/dashboard/account-settings",
			icon: IoSettingsOutline
		},
		{
			name: "Logout",
			path: "/login",
			icon: IoLogOutOutline
		}
	],
};
