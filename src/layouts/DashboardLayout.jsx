import React from "react";
import SideBar from "../components/SideBar";
import Dashbar from "../components/Dashbar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
	return (
		<div>
			<SideBar />
			<div className="flex ml-40 flex-col gap-y-4">
				<Dashbar />
				<Outlet />
			</div>
		</div>
	);
};

export default DashboardLayout;
