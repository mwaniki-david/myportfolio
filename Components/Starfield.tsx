'use client';

import React, { useEffect } from 'react';

interface Props {
	speedFactor?: number;
	backgroundColor?: string;
	starColor?: [number, number, number];
	starCount?: number;
}

export default function Starfield(props: Props) {
	const { speedFactor = 0.01, backgroundColor = 'black', starColor = [255, 255, 255], starCount = 5000 } = props;

	useEffect(() => {
		const canvas = document.getElementById('starfield') as HTMLCanvasElement;

		if (canvas) {
			const c = canvas.getContext('2d');

			if (c) {
				let w = window.innerWidth;
				let h = window.innerHeight;

				const setCanvasExtents = () => {
					canvas.width = w;
					canvas.height = h;
				};

				setCanvasExtents();

				window.onresize = () => {
					setCanvasExtents();
				};

				const makeStars = (count: number) => {
					const out = [];
					for (let i = 0; i < count; i++) {
						const s = {
							x: Math.random() * 1600 - 800,
							y: Math.random() * 900 - 450,
							z: Math.random() * 1000,
						};
						out.push(s);
					}
					return out;
				};

				let stars = makeStars(starCount);

				const clear = () => {
					c.fillStyle = backgroundColor;
					c.fillRect(0, 0, canvas.width, canvas.height);
				};

				const putPixel = (x: number, y: number, brightness: number) => {
					const rgb =
						'rgba(' + starColor[0] + ',' + starColor[1] + ',' + starColor[2] + ',' + brightness + ')';
					c.fillStyle = rgb;
					c.fillRect(x, y, 1, 1);
				};

				const moveStars = (distance: number) => {
					const count = stars.length;
					for (var i = 0; i < count; i++) {
						const s = stars[i];
						s.z -= distance;
						while (s.z <= 1) {
							s.z += 1000;
						}
					}
				};

				let prevTime: number;
				const init = (time: number) => {
					prevTime = time;
					requestAnimationFrame(tick);
				};

				const tick = (time: number) => {
					let elapsed = time - prevTime;
					prevTime = time;

					moveStars(elapsed * speedFactor);

					clear();

					const cx = w / 2;
					const cy = h / 2;

					const count = stars.length;
					for (var i = 0; i < count; i++) {
						const star = stars[i];

						const x = cx + star.x / (star.z * 0.001);
						const y = cy + star.y / (star.z * 0.001);

						if (x < 0 || x >= w || y < 0 || y >= h) {
							continue;
						}

						const d = star.z / 1000.0;
						const b = 1 - d * d;

						putPixel(x, y, b);
					}

					requestAnimationFrame(tick);
				};

				requestAnimationFrame(init);

				// add window resize listener:
				window.addEventListener('resize', function () {
					w = window.innerWidth;
					h = window.innerHeight;
					setCanvasExtents();
				});
			} else {
				console.error('Could not get 2d context from canvas element');
			}
		} else {
			console.error('Could not find canvas element with id "starfield"');
		}

		return () => {
			window.onresize = null;
		};
	}, [starColor, backgroundColor, speedFactor, starCount]);

	return (
		<canvas
			id="starfield"
			style={{
				padding: 0,
				margin: 0,
				position: 'fixed',
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
				zIndex: 10,
				opacity: 1,
				pointerEvents: 'none',
				mixBlendMode: 'screen',
			}}
		></canvas>
	);
}
// "use client";

// import React, { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// // @ts-ignore
// import * as random from "maath/random/dist/maath-random.esm";

// const StarBackground = (props: any) => {
//   const ref: any = useRef();
//   const [sphere] = useState(() =>
//     random.inSphere(new Float32Array(5000), { radius: 1.2 })
//   );

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta/10;
//     ref.current.rotation.y -= delta/15;
//   })


//   return (
//     <group rotation={[0,0, Math.PI / 4]}>
//         <Points
//         ref={ref}
//         positions={sphere}
//         stride={3}
//         frustumCulled
//         {...props}
//         >
//             <PointMaterial
//                 transparent
//                 color="$fff"
//                 size={0.002}
//                 sizeAttenuation={true}
//                 dethWrite={false}
//             />
//         </Points>
//     </group>
//   )
// };

// const StarsCanvas = () => (
//     <div className="w-full h-auto fixed inset-0 z-[120px]">
//         <Canvas camera={{position: [0, 0, 1]}}>
//         <Suspense fallback={null}>
//             <StarBackground />
//         </Suspense>
//         </Canvas>
//     </div>
// )

// export default StarsCanvas;