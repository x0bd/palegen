"use client";
import { useState } from "react";
import ColorThief from "colorthief";

export default function Home() {
	const [uploadedImage, setUploadedImage] = useState<string | null>(null);
	const [colorPalette, setColorPalette] = useState<number[][] | null>(null);

	const uploadImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
		if (!e.target || !e.target.files || e.target.files.length === 0) {
			// Throw a PopUp Event
			console.log("No File Selected");
			return;
		}

		const file = e.target.files[0];
		const reader = new FileReader();

		reader.onload = async (event) => {
			if (!event.target) {
				console.error("Event target is null");
				return;
			}
			const img = new Image();

			img.onload = () => {
				const colorThief = new ColorThief();
				const colorPalette = colorThief.getPalette(img, 5);

				let result: string | null = event.target?.result as string;
				if (typeof result !== "string") {
					result = result ? result.toString() : null;
				}

				setUploadedImage(result);
				setColorPalette(colorPalette);
			};

			if (typeof event.target.result === "string") {
				img.src = event.target.result;
			} else {
				img.src = "";
			}
		};

		reader.readAsDataURL(file);
	};

	return (
		<h1 className="text-3xl text-center">
			Extract Beautiful Color Palettes from Images.
		</h1>
	);
}
