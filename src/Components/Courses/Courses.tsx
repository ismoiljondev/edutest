import React from "react";
import Title from "../Title/Title";
import { CourseElement } from "@/data/CourseData";
import SwiperCard from "../Swiper/Swiper";
import { SwiperSlide } from "swiper/react";
import CourseCard from "../CourseCard/CourseCard";
import Container from "../Container/Container";

const Courses: React.FC = () => {
	return (
		<Container>
			<Title
				desc="Replenish man have thing gathering lights yielding shall you"
				title="Our Popular Courses"
			/>
			<SwiperCard type={3}>
				{CourseElement.map((e, i) => (
					<SwiperSlide key={i}>
						<CourseCard {...e} />
					</SwiperSlide>
				))}
			</SwiperCard>
		</Container>
	);
};

export default Courses;
