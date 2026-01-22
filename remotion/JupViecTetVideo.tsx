import { AbsoluteFill, Sequence, spring, useCurrentFrame, useVideoConfig, interpolate, Easing, Img } from 'remotion';
import React from 'react';

const TetTheme = {
	bg: '#8B171D', // Exact Maroon Red from LadiPage
	gold: '#F8F0AB', // Exact Golden Yellow from LadiPage
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
	const fall = interpolate(frame - delay, [0, 400], [0, 800]);
	const drift = Math.sin(frame / 40 + delay) * 30;

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

const TetTitle: React.FC<{ text: string, subtext?: string, delay?: number }> = ({ text, subtext, delay = 0 }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	
	const springVal = spring({ frame: frame - delay, fps, config: { damping: 12 } });
	const y = interpolate(frame - delay, [0, 20], [40, 0], { easing: Easing.out(Easing.quad), extrapolateRight: 'clamp' });

	return (
		<div style={{ textAlign: 'center', transform: `translateY(${y}px)`, opacity: springVal }}>
			<div style={{
				fontSize: 90,
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
					marginTop: 20,
					color: '#fff',
					fontWeight: 600,
					letterSpacing: 2,
					textShadow: '0 5px 15px rgba(0,0,0,0.4)',
				}}>
					{subtext}
				</div>
			)}
		</div>
	);
};

export const JupViecTetVideo: React.FC = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

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
				{[...Array(25)].map((_, i) => (
					<Blossom key={i} x={(i * 123) % 1920} y={(i * 59) % -800} size={30 + (i % 20)} delay={i * 8} />
				))}
			</AbsoluteFill>

			{/* Scene 1: Authentic Hero (0-5s) */}
			<Sequence from={0} durationInFrames={150}>
				<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
					<div style={{
						width: 1000,
						height: 600,
						border: `6px solid ${TetTheme.gold}`,
						borderRadius: 40,
						overflow: 'hidden',
						boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
						transform: `scale(${spring({ frame, fps, config: { damping: 15 } })}) rotate(${interpolate(frame, [0, 20], [-5, 0], { extrapolateRight: 'clamp' })}deg)`,
					}}>
						<Img src={Assets.hero} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
					</div>
					<div style={{ marginTop: 60 }}>
						<TetTitle text="TẾT NGỌ 2026" subtext="KHỞI ĐẦU TINH TƯƠM - ĐÓN LỘC ĐẦY NHÀ" delay={20} />
					</div>
				</AbsoluteFill>
			</Sequence>

			{/* Scene 2: Detailed Services (5-15s) */}
			<Sequence from={150} durationInFrames={300}>
				<AbsoluteFill style={{ padding: '80px 100px' }}>
					<div style={{ fontSize: 60, fontWeight: 900, color: TetTheme.gold, textAlign: 'center', marginBottom: 60 }}>
						DỊCH VỤ DÀNH CHO BẠN
					</div>
					<div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
						{Assets.services.map((service, i) => {
							const animFrame = frame - 160 - (i * 10);
							const springVal = spring({ frame: animFrame, fps });
							return (
								<div key={i} style={{
									width: 380,
									height: 520,
									backgroundColor: '#fff',
									borderRadius: 30,
									overflow: 'hidden',
									display: 'flex',
									flexDirection: 'column',
									transform: `translateY(${interpolate(springVal, [0, 1], [50, 0])}px)`,
									opacity: springVal,
									boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
								}}>
									<div style={{ height: 280, position: 'relative' }}>
										<Img src={service.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
										<div style={{
											position: 'absolute',
											top: 20,
											right: 20,
											width: 80,
											height: 80,
											backgroundColor: '#fff',
											borderRadius: 40,
											padding: 10,
											boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
										}}>
											<Img src={service.icon} style={{ width: '100%', height: '100%' }} />
										</div>
									</div>
									<div style={{ padding: 30, flex: 1, display: 'flex', flexDirection: 'column' }}>
										<div style={{ fontSize: 28, fontWeight: 900, color: TetTheme.bg, lineHeight: 1.2 }}>{service.label}</div>
										<div style={{ flex: 1 }} />
										<div style={{ fontSize: 22, color: '#666', fontWeight: 600 }}>GIÁ MINH BẠCH ⭐</div>
									</div>
								</div>
							);
						})}
					</div>
				</AbsoluteFill>
			</Sequence>

			{/* Scene 3: Trust & Action (15-20s) */}
			<Sequence from={450} durationInFrames={150}>
				<AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
					<div style={{
						width: 1200,
						padding: 80,
						backgroundColor: TetTheme.glassWarm,
						backdropFilter: 'blur(20px)',
						borderRadius: 60,
						border: `2px solid ${TetTheme.gold}40`,
					}}>
						<div style={{ fontSize: 140, fontWeight: 950, color: TetTheme.gold, lineHeight: 1 }}>JUPVIEC</div>
						<div style={{ fontSize: 45, color: '#fff', marginTop: 20, letterSpacing: 4, fontWeight: 700 }}>HƠN 13 NĂM TIN CẬY</div>
						
						<div style={{
							marginTop: 80,
							display: 'inline-block',
							padding: '40px 100px',
							backgroundColor: TetTheme.gold,
							borderRadius: 100,
							fontSize: 55,
							fontWeight: 900,
							color: TetTheme.bg,
							boxShadow: `0 0 50px ${TetTheme.gold}60`,
							transform: `scale(${1 + Math.sin(frame/12) * 0.04})`,
						}}>
							ĐẶT GIỮ LỊCH NGAY
						</div>
						<div style={{ fontSize: 32, color: '#fff', marginTop: 40, opacity: 0.8 }}>TRÁNH QUÁ TẢI NGÀY CẬN TẾT</div>
					</div>
				</AbsoluteFill>
			</Sequence>
		</AbsoluteFill>
	);
};
