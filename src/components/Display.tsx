"use client";

import Image from "next/image";
import { Card } from "./ui/card";

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
		<section className="">
			<div>
				{uploadedImage ? (
					<Image
						src={uploadedImage}
						alt="uploaded image"
						width={400}
						height={400}
					/>
				) : (
					<Image
						src="/shadcn.jpg"
						alt="morty"
						width={400}
						height={400}
					/>
				)}
			</div>

			{colorPalette && (
				<ul className="">
					{colorPalette.map((color, index) => {
						const rgb = `rgb${color.join(",")}`;
						const hex =
							"#" +
							toHex(color[0]) +
							toHex(color[1]) +
							toHex(color[2]);
						return <li key={index}>{color}</li>;
					})}
				</ul>
			)}
		</section>
	);
};

export default Display;
