import {
	Audio,
	interpolate,
	interpolateColors,
	Sequence,
	useCurrentFrame,
} from 'remotion';
import {AbsoluteFill, staticFile} from 'remotion';
import {Memory} from './Mem';
import {Triangle} from './Stinger';

export const MyComposition = () => {
	const frame = useCurrentFrame();
	const color1 = interpolateColors(
		frame,
		[10, 40],
		['rgba(255, 255, 255, 0)', '#ddd']
	);
	const color2 = interpolateColors(
		frame,
		[10, 40],
		['rgba(255, 255, 255, 0)', '#fff']
	);
	return (
		<AbsoluteFill
			style={{
				backgroundImage: 'radial-gradient(' + color1 + ', ' + color2 + ')',
			}}
		>
			<Sequence from={30 * 30} durationInFrames={10 * 30}>
				<AbsoluteFill style={{transform: `scale(1.75)`, opacity: 0.1}}>
					<Triangle delay={4} />
				</AbsoluteFill>
				<AbsoluteFill style={{transform: `scale(1.4)`, opacity: 0.3}}>
					<Triangle delay={2} />
				</AbsoluteFill>
				<AbsoluteFill>
					<Triangle delay={0} />
				</AbsoluteFill>
			</Sequence>

			<Sequence from={24 * 30} durationInFrames={6 * 30}>
				<AbsoluteFill
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<h1
						style={{
							fontFamily: 'SF Pro',
							fontSize: 50,
							lineHeight: 1,
							marginBottom: 12,
						}}
					>
						Building my ideas since 10 years.
					</h1>
					<h1
						style={{
							fontFamily: 'SF Pro',
							fontSize: 50,
							opacity: interpolate(frame, [0, 27 * 30, 28 * 30], [0, 0, 1]),
							lineHeight: 1,
							marginTop: 12,
						}}
					>
						And only getting started now.
					</h1>
				</AbsoluteFill>
			</Sequence>
			<Memory
				item={{
					src: staticFile('2022.jpg'),
					type: 'image',
					year: '2022',
					delay: 25,
					enter: 22,
					startFrom: 13 * 30,
				}}
			/>
			<Memory
				item={{
					src: staticFile('2021.mp4'),
					type: 'video',
					year: '2021',
					delay: 22,
					enter: 20,
					startFrom: 19 * 30,
				}}
			/>
			<Memory
				item={{
					src: staticFile('2020.jpg'),
					type: 'image',
					year: '2020',
					delay: 20,
					enter: 18,
					startFrom: 13 * 30,
				}}
			/>
			<Memory
				item={{
					src: staticFile('talk.mp4'),
					type: 'video',
					year: '',
					delay: 18,
					enter: 16,
					startFrom: 13 * 30,
				}}
			/>
			<Memory
				item={{
					src: staticFile('2019.jpg'),
					type: 'image',
					year: '2019',
					delay: 16,
					enter: 14,
					startFrom: 12 * 30,
				}}
			/>
			<Memory
				item={{
					src: staticFile('2018.mp4'),
					type: 'video',
					year: '2018',
					delay: 14,
					enter: 12,
					startFrom: 12 * 30,
				}}
			/>
			<Memory
				item={{
					src: staticFile('2017.jpg'),
					type: 'image',
					year: '2017',
					delay: 12,
					enter: 10,
					startFrom: 0,
				}}
			/>
			<Memory
				item={{
					src: staticFile('2016.jpg'),
					type: 'image',
					year: '2016',
					delay: 10,
					enter: 9,
					startFrom: 0,
				}}
			/>
			<Memory
				item={{
					src: staticFile('2014-onetune.mp4'),
					type: 'video',
					year: '2015',
					delay: 9,
					enter: 7,
					startFrom: 3 * 30,
				}}
			/>
			<Memory
				item={{
					src: staticFile('2015.jpg'),
					type: 'image',
					year: '2014',
					delay: 7,
					enter: 6,
					startFrom: 0,
				}}
			/>
			<Memory
				item={{
					src: staticFile('2013.jpg'),
					type: 'image',
					year: '2013',
					delay: 6,
					enter: 4,
					startFrom: 0,
				}}
			/>
			<Memory
				item={{
					src: staticFile('2011.mp4'),
					type: 'video',
					year: '2011',
					delay: 4,
					enter: 2,
					startFrom: 2.5 * 30,
				}}
			/>
			<Memory
				item={{
					src: staticFile('2000.jpeg'),
					type: 'image',
					year: '',
					delay: 2,
					enter: 0,
					startFrom: 0,
				}}
			/>
		</AbsoluteFill>
	);
};
