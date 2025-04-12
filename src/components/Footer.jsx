import React from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { href } from "react-router";

const Footer = () => {
	const footData = [
		{
			title: "Explore More",
			links: ["About Us", "Our Projects", "Inquiry"],
		},
		{
			title: "Helpful Links",
			links: ["Privacy Policy", "Cookie Policy"],
		},
	];

	const contactInfo = {
		email: "Kingsleysomuah123@gmail.com",
		phone: "(+233) 59 7361178",
		address: ["No. 4 Drake Avenue", "Airport Residential Area Accra, Ghana", "GPS: GA-084-999"],
	};

	const socialLinks = [
		{
			icon: <IoLogoFacebook />,
			href: "",
		},
		{
			icon: <IoLogoInstagram />,
			href: "",
		},
		{
			icon: <IoLogoLinkedin />,
			href: "",
		},
	];
	return (
		<footer className="bg-black text-gray-300 px-[2%] py-[2%]">
			<div className="flex items-center justify-around">
				{footData.map((section, idx) => {
					return (
						<div key={idx}>
							<h4 className="font-semibold text-lg mb-3">{section.title}</h4>
							<ul className="">
								{section.links.map((link, i) => {
									return (
										<li key={i} className="flex items-center gap-2 hover:underline cursor-pointer">
											<span>{link}</span>
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}

				{/* contact Info */}
				<div className="">
					<h4 className="font-semibold text-lg mb-5">Contact Information</h4>
					<ul>
						<li>{contactInfo.email}</li>
						<li>{contactInfo.phone}</li>
						{contactInfo.address.map((line, i) => {
							<li key={i}>{line}</li>;
						})}
					</ul>
					<div className="flex items-center gap-3">
						{socialLinks.map((socialLink, index) => {
							return (
								<a href={socialLink.href} key={index}>
									{socialLink.icon}
								</a>
							);
						})}
					</div>
				</div>

				<div>
					<h4 className="font-semibold text-lg mb-3">Newsletter</h4>
					<p className="mb-3">Sign up for our newsletter and receive the latest updates</p>
					<form className="space-y-3">
						<label className="block text-sm font-medium">Email</label>
						<div className="flex gap-2">
							<input
								type="email"
								placeholder="Enter email address"
								className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none"
							/>
							<button
								type="submit"
								className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-900"
							>
								Subscribe
							</button>
						</div>
					</form>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
