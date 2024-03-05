import React from "react";
import style from "./style.module.scss";
import Container from "../Container/Container";
const UserForm: React.FC = () => {
	return (
		<div className={style.form}>
			<Container>
				<div className={style.form__box}>
					<div className={style.form__left}>
						<div className={style.form__left__text}>
							<h2>Register Now</h2>
							<p>
								There is a moment in the life of any aspiring
								astronomer that it is time to buy that first
								telescope. It’s exciting to think about setting
								up your own viewing station.
							</p>
						</div>
						<div className={style.form__left__cards}>
							<div className={style.form__left__cards__card}>
								<h2>150</h2>
								<p>Days</p>
							</div>
							<div className={style.form__left__cards__card}>
								<h2>23</h2>
								<p>Hours</p>
							</div>
							<div className={style.form__left__cards__card}>
								<h2>47</h2>
								<p>Mins</p>
							</div>
							<div
								className={
									style.form__left__cards__card || style.last
								}
							>
								<h2>59</h2>
								<p>Seconds</p>
							</div>
						</div>
					</div>
					<div className={style.form__right}>
						<form action="#">
							<h3>Courses for Free</h3>
							<p>It is high time for learning</p>
							<div className={style.form__card}>
								<div>
									<input
										type="text"
										placeholder="Your Name"
									/>
									<input
										type="tel"
										placeholder="Your Phone Number"
									/>
									<input
										type="email"
										placeholder="Your Email Address"
									/>
								</div>
								<div className={style.form__btn}>
									<button type="submit">SUBMIT</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default UserForm;
