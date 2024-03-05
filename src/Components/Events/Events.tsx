import React from "react";
import style from "./style.module.scss";
import Container from "../Container/Container";
import { EventElement } from "@//data/EventData";
import EventsCard from "../EventCard/EventCard";
import Title from "../Title/Title";
const Events: React.FC = () => {
	return (
		<div className={style.card}>
			<Container>
				<Title
					desc="Replenish man have thing gathering lights yielding shall you"
					title="Upcoming Events"
					color
				/>
				<div className={style.content}>
					{EventElement.map((e, i) => (
						<EventsCard {...e} key={i} />
					))}
				</div>
			</Container>
		</div>
	);
};

export default Events;
