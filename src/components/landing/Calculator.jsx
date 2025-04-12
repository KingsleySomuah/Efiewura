import React from "react";
import calculate from "../../assets/images/calculate.png";
import PagesLayout from "../../layouts/PagesLayout";

const Calculator = () => {
	return (
		<PagesLayout>
			<section
				className="h-[70vh] bg-cover bg-center "
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${calculate})`,
				}}
			>
				<div className="h-[70vh] flex items-center px-10 leading-relaxed">
					<h1 className="text-3xl font-semibold text-gray-100 text-left w-full max-w-sm">
						Calculate Your Monthly Rent with Ease
					</h1>
				</div>
			</section>
			<section className="p-[5%] flex gap-10">
				<form action="" className="w-3/5">
					<div className="flex flex-col space-y-4">
						<label htmlFor="" className=" text-2xl text-gray-800">
							Net Monthly Salary
						</label>
						<input
							type="text"
							className="p-3 focus:outline-none border border-gray-400 rounded-md"
							placeholder="GHS 1500.00"
						/>
					</div>
					<div className="flex flex-col space-y-4">
						<label className=" text-2xl text-gray-800 mt-4" htmlFor="">
							Rent Amount Charged by Landlord per Month
						</label>
						<input
							type="text"
							className="p-3 focus:outline-none border border-gray-400 rounded-md"
                            placeholder="GHS 200.00"
						/>
					</div>
					<div className="flex flex-col space-y-4">
						<label htmlFor="" className=" text-2xl text-gray-800 mt-4">
							Number of years Renting
						</label>
						<select
							name=""
							id=""
							className="p-3 focus:outline-none border border-gray-400 mb-4 rounded-md"
						>
							<option value="1 Year">1 Year</option>
							<option value="2 Years">2 Years</option>
						</select>
					</div>
					<button type="submit" className="bg-green-900 px-5 py-2 text-white">
						Check Eligibility
					</button>
				</form>
				<div className="shadow-md shadow-gray-800 p-4 space-y-2 w-2/5 h-[50vh] text-left max-w-sm">
					<h1 className="text-2xl font-semibold text-green-900">Summary</h1>
					<div className="space-y-4">
						<p>Rent Period:</p>
						<p>Expected Monthly Rent :</p>
						<p>Refundable Security Deposit: </p>
						<p>Amount Due Before Move In :</p>
					</div>
				</div>
			</section>
		</PagesLayout>
	);
};

export default Calculator;
