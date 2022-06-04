import {AbsoluteFill, staticFile} from 'remotion';
import {Memory} from './Mem';

export const MyComposition = () => {
	return (
		<AbsoluteFill
			style={{
				backgroundImage: 'radial-gradient(#ddd, #fff)',
			}}
		>
			<Memory
				item={{
					src: staticFile('2022.jpg'),
					type: 'image',
					year: '2022',
					delay: 26,
					enter: 22,
					startFrom: 12 * 30,
				}}
			/>
			<Memory
				item={{
					src: staticFile('2021.mp4'),
					type: 'video',
					year: '2021',
					delay: 22,
					enter: 20,
					startFrom: 16 * 30,
				}}
			/>
			<Memory
				item={{
					src: staticFile('2020.jpg'),
					type: 'image',
					year: '2020',
					delay: 20,
					enter: 18,
					startFrom: 12 * 30,
				}}
			/>
			<Memory
				item={{
					src: staticFile('2019.jpg'),
					type: 'image',
					year: '2019',
					delay: 18,
					enter: 16,
					startFrom: 12 * 30,
				}}
			/>
			<Memory
				item={{
					src: staticFile('2018.mp4'),
					type: 'video',
					year: '2018',
					delay: 16,
					enter: 14,
					startFrom: 12 * 30,
				}}
			/>
			<Memory
				item={{
					src: staticFile('2017.jpg'),
					type: 'image',
					year: '2017',
					delay: 14,
					enter: 12,
					startFrom: 0,
				}}
			/>
			<Memory
				item={{
					src: staticFile('2016.jpg'),
					type: 'image',
					year: '2016',
					delay: 12,
					enter: 10,
					startFrom: 0,
				}}
			/>
			<Memory
				item={{
					src: staticFile('2015.jpg'),
					type: 'image',
					year: '2015',
					delay: 10,
					enter: 8,
					startFrom: 0,
				}}
			/>
			<Memory
				item={{
					src: staticFile('2014-onetune.mp4'),
					type: 'video',
					year: '2014',
					delay: 8,
					enter: 6,
					startFrom: 3 * 30,
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
					enter: -0.5,
					startFrom: 0,
				}}
			/>
		</AbsoluteFill>
	);
};
