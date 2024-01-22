import Link from "next/link";
import { ThemeSwitch } from "./Switch";

const Header = () => {
	return (
		<nav className="flex w-full items-center justify-between">
			<div className="z-40 flex w-full flex-col xl:gap-8 md:gap-4 md:flex-row">
				<Link
					href="/"
					className="text-2xl font-mono font-semibold md:text-lg"
				>
					Palegen
				</Link>
			</div>
			<ThemeSwitch />
		</nav>
	);
};

export default Header;
