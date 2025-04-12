import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import DashboardLayout from "./layouts/DashboardLayout";
import DashHome from "./components/dashboards/landlord/DashHome";
import AddListing from "./components/dashboards/landlord/AddListing";
import Login from "./components/authpages/Login";
import BrowseHomePage from "./pages/BrowseHomePage";
import Calculator from "./components/landing/Calculator";

function App() {
	return (
		<>
			<BrowserRouter>
				{/* pages approach user or landing page */}
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path='/login' element={<Login />} />
					<Route path="/browse-homes" element={<BrowseHomePage />} />
					<Route path='/rent-calculator' element={<Calculator />} />


					{/* Outlet approach for dashboard */}
					<Route path="/dashboard" element={<DashboardLayout />}>
						<Route index={true} element={<DashHome />} />
						<Route path="add-listing" element={<AddListing />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
