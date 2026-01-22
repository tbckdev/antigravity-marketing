import { AbsoluteFill, Sequence, spring, useCurrentFrame, useVideoConfig, interpolate, Easing } from 'remotion';
import React from 'react';

// UI/UX Pro Max Design Tokens
const Tokens = {
	bg: '#050505',
	cyan: '#00f2ff',
	pink: '#ff00e5',
	glass: 'rgba(255, 255, 255, 0.03)',
	glassBorder: 'rgba(255, 255, 255, 0.1)',
	textMain: '#ffffff',
	textMuted: 'rgba(255, 255, 255, 0.6)',
};

// Background Component with moving neon glow
const PremiumBackground: React.FC = () => {
	const frame = useCurrentFrame();
	const moveX = interpolate(frame, [0, 450], [0, 100]);
	return (
		<AbsoluteFill style={{ backgroundColor: Tokens.bg, overflow: 'hidden' }}>
			<div style={{
				position: 'absolute',
				width: '150%',
				height: '150%',
				background: `radial-gradient(circle at ${50 + Math.sin(frame/50)*20}% ${50 + Math.cos(frame/50)*20}%, ${Tokens.cyan}15, transparent 50%),
							 radial-gradient(circle at ${20 + Math.cos(frame/40)*15}% ${80 + Math.sin(frame/40)*15}%, ${Tokens.pink}10, transparent 40%)`,
				filter: 'blur(80px)',
			}} />
		</AbsoluteFill>
	);
};

const PremiumTitle: React.FC<{ text: string; subtext?: string; color?: string; delay?: number }> = ({ text, subtext, color = Tokens.cyan, delay = 0 }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	
	const opacity = interpolate(frame - delay, [0, 20], [0, 1], { extrapolateRight: 'clamp' });
	const y = interpolate(frame - delay, [0, 20], [50, 0], { easing: Easing.out(Easing.quad), extrapolateRight: 'clamp' });
	const scale = spring({ frame: frame - delay, fps, config: { damping: 12, stiffness: 100 } });

	return (
		<div style={{ textAlign: 'center', opacity, transform: `translateY(${y}px) scale(${scale})` }}>
			<div style={{
				fontSize: 100,
				fontWeight: 900,
				letterSpacing: '-2px',
				color,
				textShadow: `0 0 30px ${color}60`,
				fontFamily: 'Be Vietnam Pro, sans-serif',
				lineHeight: 1,
			}}>
				{text.toUpperCase()}
			</div>
			{subtext && (
				<div style={{
					fontSize: 40,
					marginTop: 20,
					color: Tokens.textMuted,
					letterSpacing: '4px',
					fontWeight: 400,
				}}>
					{subtext.toUpperCase()}
				</div>
			)}
		</div>
	);
};

export const JupViecVideo: React.FC = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	return (
		<AbsoluteFill style={{ fontFamily: 'Be Vietnam Pro, sans-serif' }}>
			<PremiumBackground />

			{/* Scene 1: The Hook (0-3s) */}
			<Sequence from={0} durationInFrames={90}>
				<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
					<PremiumTitle text="NHÀ BỪA BỘN?" subtext="QUÊN NÓ ĐI!" color={Tokens.cyan} />
				</AbsoluteFill>
			</Sequence>

			{/* Scene 2: The Solution (3-7s) */}
			<Sequence from={90} durationInFrames={120}>
				<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
					<div style={{
						width: 850,
						height: 1300,
						backgroundColor: Tokens.glass,
						backdropFilter: 'blur(30px)',
						borderRadius: 80,
						border: `1px solid ${Tokens.glassBorder}`,
						boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
						padding: 80,
						display: 'flex',
						flexDirection: 'column',
						transform: `scale(${interpolate(frame - 90, [0, 20], [0.8, 1], { extrapolateRight: 'clamp' })})`,
						opacity: interpolate(frame - 90, [0, 20], [0, 1], { extrapolateRight: 'clamp' }),
					}}>
						<div style={{ fontSize: 32, fontWeight: 600, color: Tokens.cyan, marginBottom: 10, letterSpacing: 2 }}>APP JUPVIEC</div>
						<div style={{ fontSize: 90, fontWeight: 900, lineHeight: 1, marginBottom: 60 }}>CHẠM LÀ<br/><span style={{ color: Tokens.cyan }}>SẠCH BONG</span></div>
						
						<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 30 }}>
							{['Chọn giờ', 'Chọn việc', 'Xong!'].map((item, i) => {
								const itemOpacity = interpolate(frame - 110 - (i * 10), [0, 10], [0, 1], { extrapolateRight: 'clamp' });
								return (
									<div key={i} style={{ display: 'flex', alignItems: 'center', gap: 30, opacity: itemOpacity }}>
										<div style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: Tokens.cyan }} />
										<div style={{ fontSize: 40, color: Tokens.textMuted }}>{item}</div>
									</div>
								);
							})}
						</div>

						<div style={{
							height: 140,
							background: `linear-gradient(90deg, ${Tokens.cyan}, #00a2ff)`,
							borderRadius: 40,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							color: '#000',
							fontSize: 48,
							fontWeight: 900,
							boxShadow: `0 0 50px ${Tokens.cyan}40`,
						}}>
							ĐẶT NGAY {'<'} 30S
						</div>
					</div>
				</AbsoluteFill>
			</Sequence>

			{/* Scene 3: Trust (7-11s) */}
			<Sequence from={210} durationInFrames={120}>
				<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
					<PremiumTitle text="CHUYÊN NGHIỆP" subtext="CHUẨN SINGAPORE" color={Tokens.pink} />
					
					{/* Modern Staggered Chart */}
					<div style={{ display: 'flex', gap: 30, marginTop: 120, alignItems: 'flex-end', height: 400 }}>
						{[0.6, 0.8, 0.9, 1].map((h, i) => {
							const val = spring({ frame: frame - 230 - (i * 8), fps, config: { damping: 15 } });
							return (
								<div key={i} style={{
									width: 100,
									height: h * 400 * val,
									background: `linear-gradient(to top, ${Tokens.pink}, transparent)`,
									borderTop: `4px solid ${Tokens.pink}`,
									borderRadius: '12px 12px 0 0',
									boxShadow: `0 0 30px ${Tokens.pink}20`,
								}} />
							);
						})}
					</div>
				</AbsoluteFill>
			</Sequence>

			{/* Scene 4: CTA (11-15s) */}
			<Sequence from={330} durationInFrames={120}>
				<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
					<div style={{
						fontSize: 180,
						fontWeight: 950,
						letterSpacing: '-8px',
						background: `linear-gradient(to bottom, #fff, ${Tokens.cyan})`,
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						filter: `drop-shadow(0 0 40px ${Tokens.cyan}40)`,
						marginBottom: 60,
					}}>
						JUPVIEC
					</div>
					<div style={{
						fontSize: 40,
						color: Tokens.textMuted,
						marginBottom: 100,
						letterSpacing: 8,
						fontWeight: 300,
					}}>
						TẢI NGAY TRÊN APPSTORE
					</div>
					
					{/* Pulsing CTA Button */}
					<div style={{
						padding: '45px 100px',
						borderRadius: 100,
						border: `2px solid ${Tokens.cyan}`,
						fontSize: 56,
						fontWeight: 800,
						color: Tokens.cyan,
						boxShadow: `0 0 ${20 + Math.sin(frame/10)*10}px ${Tokens.cyan}40`,
						transform: `scale(${1 + Math.sin(frame/15)*0.03})`,
					}}>
						DÙNG THỬ MIỄN PHÍ
					</div>
				</AbsoluteFill>
			</Sequence>
		</AbsoluteFill>
	);
};
