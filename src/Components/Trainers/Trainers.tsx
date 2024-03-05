import React from "react";
import Container from "../Container/Container";
import Title from "../Title/Title";
import SwiperCard from "../Swiper/Swiper";
import { TrainerElement } from "@/data/TrainerCardData";
import TrainerCard from "../TrainerCard/TrainerCard";
import { SwiperSlide } from "swiper/react";

const Trainers: React.FC = () => {
	return (
		<Container>
			<Title
				desc="Replenish man have thing gathering lights yielding shall you"
				title="Our Popular Courses"
			/>
			<SwiperCard type={4}>
				{TrainerElement.map((e, i) => (
					<SwiperSlide key={i}>
						<TrainerCard icons="" {...e} />
					</SwiperSlide>
				))}
			</SwiperCard>
		</Container>
	);
};

export default Trainers;
