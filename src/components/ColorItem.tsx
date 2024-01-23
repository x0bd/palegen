"use client";

import { Copy } from "lucide-react";
import React, { useState } from "react";

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
		<div className={`bg-[${rgb}]`}>
			<span
				onClick={(e: React.MouseEvent<HTMLInputElement>) => {
					copyToClipboard(e);
					setCopied(true);
					setTimeout(() => {
						setCopied(false);
					}, 1234);
				}}
			>
				{copied ? "Copied" : hex} <Copy />
			</span>
		</div>
	);
};

export default ColorItem;
