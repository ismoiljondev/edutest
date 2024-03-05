"use client";
import Clients from "@/Components/Clients/Clients";
import Courses from "@/Components/Courses/Courses";
import Events from "@/Components/Events/Events";
import Feacture from "@/Components/FeatureClientCard";
import UserForm from "@/Components/Form/Form";
import Showcase from "@/Components/Showcase/Showcase";
import Trainers from "@/Components/Trainers/Trainers";

export default function Home() {
	return (
		<div className="all">
			<Showcase />
			<Feacture />
			<Courses />
			<UserForm />
			<Trainers />
			<Events />
			<Clients />
		</div>
	);
}
