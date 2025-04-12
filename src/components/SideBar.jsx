import React from "react";
import { NavLink } from "react-router";
import NavItems from "../constants/index"

const SideBar = () => {
	return (
		<section className="bg-green-900 text-white font-semibold w-40 h-screen fixed left-0 px-2 py-2">
			<div className="flex flex-col gap-y-5 mt-12">
				{NavItems.navLink.map((link) => {
					return (
						<NavLink to={link.path} key={link.id} className='flex items-center gap-2'>
							<link.icon />
							{link.name}
						</NavLink>
					);
				})}
			</div>
		</section>
	);
};

export default SideBar;
