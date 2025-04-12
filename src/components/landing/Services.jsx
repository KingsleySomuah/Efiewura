import React from "react";
import family from "../../assets/images/family.png"

const Services = () => {
	return (
		<main className="grid grid-cols-2 gap-[5%] p-[5%]">
			<div className="">
                <img src={family} alt="" />
            </div>
			<div className="flex flex-col items-start justify-center space-y-5">
				<div className="flex items-center">
					<div className="bg-green-900 w-10 h-[3px] mr-4"></div>
					<small className="font-semibold text-base uppercase text-green-900">Our services</small>
				</div>
				<h1 className="font-semibold text-2xl">The new way to Rent</h1>
				<p>Efiewura offers complete end to end service on your journey as a tenant</p>

				<div className="flex items-center justify-center space-x-15">
					<li>Vetted Listing</li>
					<li>Monthly payment</li>
				</div>
				<div className="flex items-center justify-center space-x-10">
					<li>Fraud Protection</li>
					<li>Credit Profiling</li>
				</div>
                <button className="bg-green-900 px-5 py-2 text-white">Learn More</button>
			</div>
		</main>
	);
};

export default Services;
