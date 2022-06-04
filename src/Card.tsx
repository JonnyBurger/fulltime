import React from 'react';
import {random} from 'remotion';

export const Card: React.FC<{
	children: React.ReactNode;
	rotation: string;
	label: string;
}> = ({children, rotation, label}) => {
	const fonts = ['Pacifico', 'Rock Salt', 'Permanent Marker'];

	return (
		<div
			style={{
				backgroundColor: '#ddd',
				boxShadow: `0 0 30px rgba(0, 0, 0, 0.3)`,
				padding: 20,
				transform: `rotate(${rotation})`,
			}}
		>
			{children}
			<div
				style={{
					textAlign: 'center',
					fontSize: 40,
					fontFamily: fonts[Math.floor(random(label) * fonts.length)],
					fontWeight: 'bold',
				}}
			>
				{label}
			</div>
		</div>
	);
};
