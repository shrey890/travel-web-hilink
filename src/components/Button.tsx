import Image from "next/image";

type ButtonProps = {
	type: "button" | "submit";
	title: string;
	icon?: string;
	variant: string;
	full?: boolean;
};
const Button = ({ type, variant, icon, title, full }: ButtonProps) => {
	return (
		<button
			type={type}
			className={`flexCenter rounded-full border ${variant} ${
				full && "w-full"
			}`}
		>
			{icon && <Image src={icon} alt={title} width={24} height={24} />}
			<label
				htmlFor={title}
				className="bold-16 cursor-pointer whitespace-nowrap"
			>
				{title}
			</label>
		</button>
	);
};

export default Button;
