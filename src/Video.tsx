import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import './index.css';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Empty"
				component={MyComposition}
				durationInFrames={900}
				fps={30}
				width={1080}
				height={1080}
			/>
		</>
	);
};
