import React from "react";
import Container from "@/Components/Container/Container";
import Title from "../Title/Title";
import SwiperCard from "@/Components/Swiper/Swiper";
import { ClientCardData } from "@/data/ClientCardData";
import { SwiperSlide } from "swiper/react";
import FeatureClientCard from "../FeatureClientCard/FeatureClientCard";

const Clients: React.FC = () => {
	return (
		<Container>
			<Title
				desc="Replenish man have thing gathering lights yielding shall you"
				title="Our Popular Courses"
			/>
			<SwiperCard type={2}>
				{ClientCardData.map((e, i) => (
					<SwiperSlide key={i}>
						<FeatureClientCard type="client" {...e} />
					</SwiperSlide>
				))}
			</SwiperCard>
		</Container>
	);
};

export default Clients;
