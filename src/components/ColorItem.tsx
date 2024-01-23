"use client";

import { Copy } from "lucide-react";
import React, { useState } from "react";
import { Card } from "./ui/card";

interface Props {
	rgb: string | null;
	hex: string | null;
}

const ColorItem: React.FC<Props> = ({ rgb, hex }) => {
	const [copied, setCopied] = useState(false);
	const copyToClipboard = (e: React.MouseEvent<HTMLInputElement>) => {
		const color = e.currentTarget.value;
		navigator.clipboard.writeText(color);
	};

	return (
		<div
			style={{ backgroundColor: hex! }}
			className="flex text-sm items-center relative h-40 w-28 rounded-lg border-black dark:border-white border"
		>
			<div
				className="cursor-pointer absolute p-2 px-2 w-full bottom-0 border-t border-transparent rounded-br-sm rounded-bl-sm flex justify-between font-semibold"
				onClick={(e: React.MouseEvent<HTMLInputElement>) => {
					copyToClipboard(e);
					setCopied(true);
					setTimeout(() => {
						setCopied(false);
					}, 1234);
				}}
			>
				{copied ? "Copied" : hex} <Copy />
			</div>
		</div>
	);
};

export default ColorItem;
