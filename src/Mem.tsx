import {
	AbsoluteFill,
	Freeze,
	interpolate,
	OffthreadVideo,
	random,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
	Video,
} from 'remotion';
import {Img} from 'remotion';
import React from 'react';
import {Card} from './Card';
import {TMemory} from './memory-type';

export const Memory: React.FC<{
	item: TMemory;
}> = ({item}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const rotation = interpolate(
		random(item.year + item.src),
		[0, 1],
		[-0.05, 0.05]
	);

	const direction = interpolate(
		random(item.src + item.src),
		[0, 1],
		[0, Math.PI * 2]
	);

	const initial = spring({
		fps,
		frame,
		config: {
			damping: 200,
		},
	});

	const enter = spring({
		fps,
		frame: frame - item.enter * fps,
		config: {
			mass: 0.75,
			damping: 200,
		},
	});

	const constant = interpolate(
		frame - item.enter * fps - 20,
		[-20, 120],
		[0.95, 1.1],
		{
			extrapolateRight: 'clamp',
		}
	);

	const moveOut = spring({
		fps,
		frame: frame - item.delay * fps,
		config: {
			mass: 4,
			damping: 200,
		},
	});

	const translateX = Math.sin(direction) * moveOut * 1500;
	const translateY = Math.cos(direction) * moveOut * 1500;

	return (
		<AbsoluteFill
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${
					interpolate(enter, [0, 1], [0.7, 1]) * constant * initial
				})`,
			}}
		>
			<Card rotation={rotation + 'rad'} label={item.year}>
				{item.type === 'image' ? (
					<Img
						src={item.src}
						style={{
							width: 900,
						}}
					/>
				) : frame < item.startFrom ? (
					<Freeze frame={0}>
						<OffthreadVideo
							muted
							src={item.src}
							style={{
								width: 900,
							}}
						/>
					</Freeze>
				) : (
					<Sequence from={item.startFrom} layout="none">
						<OffthreadVideo
							muted
							src={item.src}
							style={{
								width: 900,
							}}
						/>
					</Sequence>
				)}
			</Card>
		</AbsoluteFill>
	);
};
