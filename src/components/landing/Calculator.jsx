import React, { useState } from "react";
import calculate from "../../assets/images/calculate.png";
import PagesLayout from "../../layouts/PagesLayout";

const Calculator = () => {
	const [netSalary, setNetSalary] = useState();
	const [rentAmount, setRentAmount] = useState('');
	const [yearsRenting, setYearsRenting] = useState();
	const [isEligible, setIsEligible] = useState(null);

	const calculateEligibility = (event) => {
		event.preventDefault();
		const eligible = netSalary > rentAmount;
		setIsEligible(eligible);
	};

	const expectedMontlyRent = rentAmount * 1.1;
	const refundableSecurity = expectedMontlyRent;

	const amountDue = expectedMontlyRent + refundableSecurity;
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
				<form onSubmit={calculateEligibility} className="w-3/5">
					<div className="flex flex-col space-y-4">
						<label htmlFor="" className=" text-2xl text-gray-800">
							Net Monthly Salary
						</label>
						<input
							type="number"
							value={netSalary}
							onChange={(e) => setNetSalary(parseFloat(e.target.value) || 0)}
							className="p-3 focus:outline-none border border-gray-400 rounded-md"
							placeholder="GHS 1500.00"
						/>
					</div>
					<div className="flex flex-col space-y-4">
						<label className=" text-2xl text-gray-800 mt-4" htmlFor="">
							Rent Amount Charged by Landlord per Month
						</label>
						<input
							type="number"
							value={rentAmount}
							onChange={(e) => setRentAmount(parseFloat(e.target.value) || 0)}
							className="p-3 focus:outline-none border border-gray-400 rounded-md"
							placeholder="GHS 200.00"
						/>
					</div>
					<div className="flex flex-col space-y-4">
						<label htmlFor="" className=" text-2xl text-gray-800 mt-4">
							Number of years Renting
						</label>
						<select
							type="number"
							value={yearsRenting}
							onChange={(e) => setYearsRenting(parseInt(e.target.value) || 0)}
							id=""
							className="p-3 focus:outline-none border border-gray-400 mb-4 rounded-md"
						>
							<option value="1 Year">1 Year</option>
							<option value="2 Years">2 Years</option>
						</select>
					</div>
					<button
						// onClick={calculateEligibility}
						type="submit"
						className="bg-[#2e8284] px-5 py-2 text-white"
					>
						Check Eligibility
					</button>
				</form>
				<div className="shadow-md shadow-gray-800 p-4 space-y-2 w-2/5 h-[60vh] text-left max-w-sm">
					<h1 className="text-2xl font-semibold text-[#2e8284]">Summary</h1>
					<div className="space-y-4">
						<p>
							Rent Period: <span className="ml-3 font-semibold text-2xl">{yearsRenting}</span>
						</p>
						<p>
							Expected Monthly Rent:{" "}
							<span className="ml-3 font-semibold text-2xl">{expectedMontlyRent.toFixed(2)}</span>{" "}
						</p>
						<p>
							Refundable Security Deposit:{" "}
							<span className="ml-3 font-semibold text-2xl">{refundableSecurity.toFixed(2)}</span>
						</p>
						<p>
							Amount Due Before Move In :{" "}
							<span className="ml-3 font-semibold text-2xl">{amountDue.toFixed(2)}</span>
						</p>
						{isEligible !== null && (
							<p
								style={{
									color: isEligible ? "green" : "red",
									fontWeight: "bold",
									fontSize: "20px",
								}}
							>
								{isEligible
									? "You are Qualified"
									: "Disqualified-Net salary must be greater than rent amount"}
							</p>
						)}
					</div>
				</div>
			</section>
		</PagesLayout>
	);
};

export default Calculator;
