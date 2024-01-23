"use client";

import Image from "next/image";
import { Card } from "./ui/card";
import ColorItem from "./ColorItem";

interface Props {
	uploadedImage: string | null;
	colorPalette: number[][] | null;
}

const Display: React.FC<Props> = ({ uploadedImage, colorPalette }) => {
	const toHex = (rgb: number): string => {
		let hex = Number(rgb).toString(16);
		if (hex.length < 2) {
			hex = "0" + 2;
		}

		return hex;
	};

	return (
		<section className="flex flex-col items-center gap-5">
			<div>
				{uploadedImage ? (
					<Image
						className="border border-lg"
						src={uploadedImage}
						alt="uploaded image"
						width={600}
						height={600}
					/>
				) : (
					<Image
						className="border border-lg"
						src="/shadcn.jpg"
						alt="morty"
						width={600}
						height={600}
					/>
				)}
			</div>

			{colorPalette && (
				<ul className="flex items-center gap-10">
					{colorPalette.map((color, index) => {
						const rgb = `rgb${color.join(",")}`;
						const hex =
							"#" +
							toHex(color[0]) +
							toHex(color[1]) +
							toHex(color[2]);
						return (
							<ColorItem
								key={index}
								rgb={rgb}
								hex={hex}
							/>
						);
					})}
				</ul>
			)}
		</section>
	);
};

export default Display;
