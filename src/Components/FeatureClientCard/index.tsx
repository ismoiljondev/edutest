import React from "react";
import { featureElement } from "@/data/FeatureCardData";
import Grid from "../Grid/Grid";
import FeatureClientCard from "./FeatureClientCard";
import Container from "../Container/Container";
import Title from "../Title/Title";
const Feacture: React.FC = () => {
	return (
		<div id="feature">
			<Container>
				<Title
					desc="Replenish man have thing gathering lights yielding shall you"
					title="Awesome Feature"
					key={151518}
				/>
				<Grid type="three">
					{featureElement.map((e, i) => (
						<FeatureClientCard type={"feature"} {...e} key={i} />
					))}
				</Grid>
			</Container>
		</div>
	);
};

export default Feacture;
