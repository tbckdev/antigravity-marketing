import { AbsoluteFill, Sequence, spring, useCurrentFrame, useVideoConfig, interpolate, Easing, Img } from 'remotion';
import React from 'react';

const TetTheme = {
	bg: '#8B171D',
	gold: '#F8F0AB',
	white: '#ffffff',
	glass: 'rgba(255, 255, 255, 0.08)',
	glassWarm: 'rgba(139, 23, 29, 0.6)',
};

const Assets = {
	hero: 'https://w.ladicdn.com/s750x500/6170bff54f41c10014220d76/element-landing-page-tet-02-20260112075222-whqfo.jpg',
	services: [
		{ 
			label: 'TỔNG VỆ SINH', 
			img: 'https://w.ladicdn.com/s700x700/6170bff54f41c10014220d76/anh-minh-hoa-tvs-tet-05-20260116072424-orwuh.png',
			icon: 'https://w.ladicdn.com/s700x750/6170bff54f41c10014220d76/element-landing-page-tet_tvs-20260112081444-tsipq.png'
		},
		{ 
			label: 'VỆ SINH MÁY LẠNH', 
			img: 'https://w.ladicdn.com/s750x750/6170bff54f41c10014220d76/element-landing-page-tet_dien-may-20260116084952-gkykm.png',
			icon: 'https://w.ladicdn.com/s700x750/6170bff54f41c10014220d76/element-landing-page-tet_vs-dien-may-20260112081446-r56vy.png'
		},
		{ 
			label: 'NỆM - RÈM - SOFA', 
			img: 'https://w.ladicdn.com/s700x700/6170bff54f41c10014220d76/element-landing-page-tet_rem-tham-20260116080637-regng.png',
			icon: 'https://w.ladicdn.com/s700x750/6170bff54f41c10014220d76/element-landing-page-tet_vs-rem-tham-sofa-20260112081447-0v5qc.png'
		},
		{ 
			label: 'GIÚP VIỆC NGÀY TẾT', 
			img: 'https://w.ladicdn.com/s750x750/6170bff54f41c10014220d76/element-landing-page-tet_gv-tet-20260116091258-051ps.png',
			icon: 'https://w.ladicdn.com/s700x750/6170bff54f41c10014220d76/element-landing-page-tet_gv-ngay-tet-20260112081443-nh-hi.png'
		},
	],
	blossom: 'https://w.ladicdn.com/s400x400/6170bff54f41c10014220d76/hoa-mai-tet-08-20260112080106-hzlnk.png'
};

const Blossom: React.FC<{ x: number, y: number, size: number, delay: number }> = ({ x, y, size, delay }) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame - delay, [0, 20], [0, 0.8], { extrapolateRight: 'clamp' });
	const fall = interpolate(frame - delay, [0, 600], [0, 1920]);
	const drift = Math.sin(frame / 40 + delay) * 50;

	return (
		<div style={{
			position: 'absolute',
			left: x + drift,
			top: y + fall,
			width: size,
			height: size,
			opacity: opacity,
			transform: `rotate(${frame * 0.5 + delay}deg)`,
		}}>
			<Img src={Assets.blossom} style={{ width: '100%', height: '100%' }} />
		</div>
	);
};

const TetTitleVertical: React.FC<{ text: string, subtext?: string, delay?: number }> = ({ text, subtext, delay = 0 }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	
	const springVal = spring({ frame: frame - delay, fps, config: { damping: 12 } });
	const y = interpolate(frame - delay, [0, 20], [40, 0], { easing: Easing.out(Easing.quad), extrapolateRight: 'clamp' });

	return (
		<div style={{ textAlign: 'center', transform: `translateY(${y}px)`, opacity: springVal, width: '100%', padding: '0 40px' }}>
			<div style={{
				fontSize: 110,
				fontWeight: 900,
				color: TetTheme.gold,
				textShadow: '0 10px 40px rgba(0,0,0,0.6)',
				fontFamily: 'Montserrat, sans-serif',
				lineHeight: 1.1,
			}}>
				{text.toUpperCase()}
			</div>
			{subtext && (
				<div style={{
					fontSize: 40,
					marginTop: 30,
					color: '#fff',
					fontWeight: 600,
					letterSpacing: 2,
					textShadow: '0 5px 15px rgba(0,0,0,0.4)',
					lineHeight: 1.4,
				}}>
					{subtext}
				</div>
			)}
		</div>
	);
};

export const JupViecTetVideo916: React.FC = () => {
	const frame = useCurrentFrame();
	const { fps, width, height } = useVideoConfig();

	return (
		<AbsoluteFill style={{ backgroundColor: TetTheme.bg, fontFamily: 'Montserrat, sans-serif' }}>
			{/* Animated Festive Background */}
			<AbsoluteFill>
				<div style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					background: `radial-gradient(circle at 50% 50%, ${TetTheme.bg}, #500e12)`,
				}} />
				{[...Array(30)].map((_, i) => (
					<Blossom key={i} x={(i * 37) % width} y={(i * 67) % - height} size={40 + (i % 30)} delay={i * 10} />
				))}
			</AbsoluteFill>

			{/* Scene 1: Authentic Hero (0-5s) */}
			<Sequence from={0} durationInFrames={150}>
				<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
					<div style={{
						width: 900,
						height: 700,
						border: `8px solid ${TetTheme.gold}`,
						borderRadius: 60,
						overflow: 'hidden',
						boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
						transform: `scale(${spring({ frame, fps, config: { damping: 15 } })})`,
						marginBottom: 80,
					}}>
						<Img src={Assets.hero} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
					</div>
					<TetTitleVertical text="TẾT NGỌ 2026" subtext="KHỞI ĐẦU TINH TƯƠM\nĐÓN LỘC ĐẦY NHÀ" delay={20} />
				</AbsoluteFill>
			</Sequence>

			{/* Scene 2: Detailed Services (5-15s) */}
			<Sequence from={150} durationInFrames={300}>
				<AbsoluteFill style={{ padding: '120px 40px', justifyContent: 'center' }}>
					<div style={{ fontSize: 75, fontWeight: 900, color: TetTheme.gold, textAlign: 'center', marginBottom: 100, lineHeight: 1.2 }}>
						DỊCH VỤ<br/>DÀNH CHO BẠN
					</div>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center' }}>
						{Assets.services.map((service, i) => {
							const animFrame = frame - 160 - (i * 12);
							const springVal = spring({ frame: animFrame, fps });
							return (
								<div key={i} style={{
									width: '100%',
									height: 250,
									backgroundColor: '#fff',
									borderRadius: 40,
									overflow: 'hidden',
									display: 'flex',
									flexDirection: 'row',
									transform: `translateX(${interpolate(springVal, [0, 1], [100, 0])}px)`,
									opacity: springVal,
									boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
								}}>
									<div style={{ width: 250, position: 'relative' }}>
										<Img src={service.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
									</div>
									<div style={{ padding: 40, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
										<div style={{ fontSize: 40, fontWeight: 900, color: TetTheme.bg, lineHeight: 1.1 }}>{service.label}</div>
										<div style={{ fontSize: 28, color: '#666', fontWeight: 600, marginTop: 15 }}>CHUẨN 5 SAO ⭐</div>
									</div>
									<div style={{ width: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: 20 }}>
										<Img src={service.icon} style={{ width: 80, height: 80 }} />
									</div>
								</div>
							);
						})}
					</div>
				</AbsoluteFill>
			</Sequence>

			{/* Scene 3: Trust & Action (15-20s) */}
			<Sequence from={450} durationInFrames={150}>
				<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 40px' }}>
					<div style={{
						width: '100%',
						padding: '120px 40px',
						backgroundColor: TetTheme.glassWarm,
						backdropFilter: 'blur(25px)',
						borderRadius: 80,
						border: `2px solid ${TetTheme.gold}40`,
					}}>
						<div style={{ fontSize: 160, fontWeight: 950, color: TetTheme.gold, lineHeight: 1 }}>JUPVIEC</div>
						<div style={{ fontSize: 50, color: '#fff', marginTop: 40, letterSpacing: 4, fontWeight: 700 }}>13 NĂM TIN CẬY</div>
						
						<div style={{
							marginTop: 120,
							display: 'inline-block',
							padding: '50px 80px',
							backgroundColor: TetTheme.gold,
							borderRadius: 100,
							fontSize: 60,
							fontWeight: 900,
							color: TetTheme.bg,
							boxShadow: `0 0 70px ${TetTheme.gold}60`,
							transform: `scale(${1 + Math.sin(frame/12) * 0.05})`,
						}}>
							ĐẶT GIỮ LỊCH NGAY
						</div>
						<div style={{ fontSize: 35, color: '#fff', marginTop: 60, opacity: 0.9 }}>GIẢM TẢI NGÀY TẾT</div>
					</div>
				</AbsoluteFill>
			</Sequence>
		</AbsoluteFill>
	);
};
