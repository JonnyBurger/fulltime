import {Audio, OffthreadVideo} from 'remotion';
import React from 'react';
import {AbsoluteFill, Sequence, staticFile, Video} from 'remotion';
import {MyComposition} from './Composition';

export const Master: React.FC = () => {
	return (
		<AbsoluteFill style={{}}>
			<Audio startFrom={3 * 30} src={staticFile('keepmoving.wav')} />
			<Sequence from={0} durationInFrames={140}>
				<AbsoluteFill>
					<OffthreadVideo
						src={staticFile('career.mp4')}
						startFrom={30}
						style={{height: '100%', transform: 'scale(3)'}}
					/>
				</AbsoluteFill>
			</Sequence>
			<Sequence from={55}>
				<MyComposition />
			</Sequence>
		</AbsoluteFill>
	);
};
