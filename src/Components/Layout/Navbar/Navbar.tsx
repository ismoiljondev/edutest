import React from "react";
import style from "./style.module.scss";
import Link from "next/link";
import Container from "@/Components/Container/Container";
const Navbar = () => {
	return (
		<div className={style.navbar}>
			<Container>
				<div className={style.nav}>
					<p>logo</p>

					<ul>
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
