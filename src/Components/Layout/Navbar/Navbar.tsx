"use client";
import React, { useState } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import Container from "@/Components/Container/Container";
const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className={style.navbar}>
			<Container>
				<div className={style.nav}>
					<div className={style.mainnav}>
						<p>logo</p>
						<div
							style={{ width: "20px" }}
							className={style.bars}
							onClick={() => setOpen((prev) => !prev)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
							>
								<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
							</svg>
						</div>
					</div>
					<ul className={`${open ? style.menu : null}`}>
						<li>
							<Link href={"#feature"}>Feature</Link>
						</li>
						<li>
							<Link href={"#Courses"}>Courses</Link>
						</li>
						<li>
							<Link href={"#Register"}>Register</Link>
						</li>
						<li>
							<Link href={"#Trainers"}>Trainers</Link>
						</li>
						<li>
							<Link href={"#Events"}>Events</Link>
						</li>
						<li>
							<Link href={"#about "}>about </Link>
						</li>
					</ul>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
