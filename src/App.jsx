import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import DashboardLayout from "./layouts/DashboardLayout";
import DashHome from "./components/dashboards/landlord/DashHome";
import AddListing from "./components/dashboards/landlord/AddListing";
import Login from "./components/authpages/Login";
import BrowseHomePage from "./pages/BrowseHomePage";
import Calculator from "./components/landing/Calculator";
import SignUp from "./components/authpages/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleListing from "./components/landing/SingleListing";
import ScheduledViews from "./components/dashboards/landlord/ScheduledViews";
import Update from "./components/dashboards/landlord/Update";

function App() {
	return (
		<>
			<BrowserRouter>
				<ToastContainer position="top-right" autoClose={3000} />

				{/* pages approach user or landing page */}
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/browse-homes" element={<BrowseHomePage />} />
					<Route path="/rent-calculator" element={<Calculator />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/listings/:id" element={<SingleListing />} />

					{/* Outlet approach for dashboard */}
					<Route path="/dashboard" element={<DashboardLayout />}>
						<Route index={true} element={<DashHome />} />
						<Route path="add-listing" element={<AddListing />} />
						<Route path="scheduled-views" element={<ScheduledViews />} />
						<Route path="update/:id" element={<Update />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
