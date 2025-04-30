import React, { useState } from "react";
import PagesLayout from "../../layouts/PagesLayout";
import pic1 from "../../assets/images/pic1.png";
import pic2 from "../../assets/images/pic2.png";
import { IoBedOutline } from "react-icons/io5";
import { GiTap } from "react-icons/gi";
import { BsLightningChargeFill } from "react-icons/bs";
import { PiToilet } from "react-icons/pi";
import { LuBath } from "react-icons/lu";
import { apiBookListing } from "../../services/crud";
import { toast } from "react-toastify";
// import { useParams } from "react-router";

const SingleListing = () => {
	// const { id } = useParams;
	const [loading, setLoading] = useState(false);

	const handleBooking = async (event) => {
		// event.preventDefault();
		setLoading(true); //start loading
		const formData = new FormData(event.target);
		try {
			const response = await apiBookListing(formData);
			console.log(response);

			toast.success("Your request has been sent");
		} catch (error) {
			console.error(error);
			// toast.error("Request Failed");
		} finally {
			setLoading(false);
		}
	};
	return (
		<PagesLayout>
			<section className="pt-[5%] px-5">
				<div className="flex space-x-10">
					<div className="w-3/5">
						<img src={pic1} alt="" />
					</div>
					<div className="w-2/5 space-y-5">
						<div className="">
							<img src={pic1} alt="" className="rounded-2xl" />
						</div>
						<div>
							<img src={pic2} alt="" className="rounded-2xl" />
						</div>
					</div>
				</div>

				<div className="flex mt-[10%] space-x-10 relative mb-10">
					<div className="w-3/5  ">
						<p className="text-gray-600 leading-loose tracking-wide  border-t border-gray-200 pt-5 border-b pb-5">
							In the serene residential neighborhood of West Lands, This lovely one-bedroom
							apartment boasts a spacious living room that is perfect for relaxing and entertaining
							guests. The apartment also features a modern kitchen with all the essential appliances
							and a clean and well-maintained washroom. Located in a prime location with good road
						</p>

						<div className="h-[50vh] pt-4 border-b border-gray-300">
							<p className="font-semibold text-2xl ">What this place offers ?</p>
							<div className="flex space-x-[25%] items-center mt-5">
								<div className="space-y-3">
									<div className="flex items-center gap-2">
										<GiTap />
										<p>Water</p>
									</div>
									<div className="flex items-center gap-2">
										<BsLightningChargeFill />
										<p>Electricity</p>
									</div>
									<div className="flex items-center gap-2">
										<IoBedOutline />
										<p>Bedroom</p>
									</div>
								</div>
								<div className="space-y-3">
									<div className="flex items-center gap-2">
										<PiToilet />
										<p>Toilet</p>
									</div>
									<div className="flex items-center gap-2">
										<LuBath />
										<p>Bathroom</p>
									</div>
									<div className="flex items-center gap-2">
										<IoBedOutline />
										<p>Bedroom</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-2/5 border-2 p-5 border-gray-200 rounded-3xl sticky top-0 right-0 h-screen">
						<div className="p-5 border-b border-gray-300">
							<h1 className="font-bold text-2xl text-right text-[#2e8284]">GHc 3000</h1>
							<p className="font-semibold text-gray-400 text-right">per month</p>
						</div>

						<form onSubmit={handleBooking}>
							<div className="flex flex-col p-3 space-y-3">
								<label htmlFor="" className="text-xl text-gray-600">
									Full Name
								</label>
								<input
									type="text"
									name="name"
									className="border border-gray-400 p-2 rounded-md outline-none"
								/>
							</div>
							<div className="flex flex-col p-3 space-y-3">
								<label htmlFor="" className="text-xl text-gray-600">
									Contact
								</label>
								<input
									type="text"
									name="contact"
									className="border border-gray-400 p-2 rounded-md outline-none"
								/>
							</div>

							<div className="flex flex-col p-3 space-y-3">
								<label htmlFor="" className="text-xl text-gray-600">
									Date
								</label>
								<input
									name="preferredDate"
									type="date"
									className="border border-gray-400 p-2 rounded-md  outline-none"
								/>
							</div>

							{/* <div className="flex flex-col p-3 space-y-3">
								<label htmlFor="" className="text-xl text-gray-600">
									Time
								</label>
								<select
									name=""
									id=""
									className="border border-gray-400 p-2 rounded-md  outline-none "
								>
									<option value="10:00 am">10:00am</option>
									<option value="12:00 pm">12:00pm</option>
									<option value="3:00 pm">3:00pm</option>
								</select>
							</div> */}
							<div className="mt-5">
								<button
									type="submit"
									disabled={loading}
									className={`flex items-center justify-center gap-2 px-10 py-2 text-white rounded transition duration-300 ${
										loading
											? "bg-[#2e8284] opacity-60 cursor-not-allowed"
											: "bg-[#2e8284] hover:bg-[#2e8384d3]"
									}`}
								>
									{loading && (
										<svg
											className="animate-spin h-5 w-5 text-white" // 🟢 Added animate-spin + sizing
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24" // 🟢 Ensures proper sizing and alignment
										>
											<circle
												className="text-gray-100" // 🟢 Backdrop ring
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												strokeWidth="4"
												fill="none"
											/>
											<path
												className="text-white" // 🟢 Spinner arc
												fill="currentColor"
												d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" // 🟢 This arc spins around the gray circle
											/>
										</svg>
									)}
									<span>{loading ? "Booking" : "Schedule viewing"}</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</PagesLayout>
	);
};

export default SingleListing;
