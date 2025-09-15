"use client";

import React from "react";

const features = [
	{
		icon: "⚡",
		title: "8000Hz Polling",
		description: "Industry-leading response time with 0.125ms report rate",
	},
	{
		icon: "🎯",
		title: "PMW-3950 Sensor",
		description: "Flagship sensor with 30,000 DPI and zero smoothing",
	},
	{
		icon: "🪶",
		title: "46g Weight",
		description: "Ultralight design without compromising durability",
	},
	{
		icon: "🔋",
		title: "Wireless Freedom",
		description: "2.4GHz connection with 300mAh battery",
	},
	{
		icon: "🛡️",
		title: "Omron Switches",
		description: "Optical switches rated for 100 million clicks",
	},
	{
		icon: "🎨",
		title: "Unique Design",
		description: "Ergonomic egg-shaped form factor for ultimate comfort",
	},
];

export default function Features() {
	return (
		<section id="features" className="py-20 px-6 md:px-10">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
					Engineered for Excellence
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="group bg-zinc-900 p-8 rounded-xl border border-zinc-800 text-center hover:-translate-y-2 hover:border-zinc-700 transition-all duration-300"
						>
							<div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
								{feature.icon}
							</div>

							<h3 className="text-xl font-semibold mb-3 text-white">
								{feature.title}
							</h3>

							<p className="text-zinc-400 text-sm leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
