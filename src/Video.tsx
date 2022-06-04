import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import './index.css';
import {Master} from './Master';
import {Triangle} from './Stinger';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Empty"
				component={Master}
				durationInFrames={34 * 30}
				fps={30}
				width={1080}
				height={1080}
			/>
			<Composition
				id="Stinger"
				component={Triangle}
				durationInFrames={5 * 30}
				fps={30}
				width={1080}
				height={1080}
			/>
		</>
	);
};
