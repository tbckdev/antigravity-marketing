import { Composition } from 'remotion';
import { JupViecVideo } from './JupViecVideo';
import { JupViecTetVideo } from './JupViecTetVideo';
import { JupViecTetVideo916 } from './JupViecTetVideo916';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="JupViecTetAd"
				component={JupViecTetVideo}
				durationInFrames={600} // 20 seconds * 30 fps
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="JupViecTetAd916"
				component={JupViecTetVideo916}
				durationInFrames={600}
				fps={30}
				width={1080}
				height={1920}
			/>
			<Composition
				id="JupViecTikTokAd"
				component={JupViecVideo}
				durationInFrames={450} // 15 seconds * 30 fps
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
