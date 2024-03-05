import style from "./style.module.scss";

type ContainerProps = {
	children: any;
	additionalStyle?: string;
};

function Container(props: ContainerProps) {
	const { children } = props;

	return <div className={style.container}>{children}</div>;
}

export default Container;
