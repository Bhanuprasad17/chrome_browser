import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const CurtainScroll = ({
  images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&h=800&fit=crop'
  ],
  curtainHeight = '80vh'
}) => {
  const { scrollYProgress } = useScroll();

  // Smooth scroll progress with spring physics
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  // Curtain animation transforms
  const clipPath = useTransform(smoothProgress, [0, 0.8], ['inset(0% 0% 0% 0%)', 'inset(100% 0% 0% 0%)']);
  const curtainY = useTransform(smoothProgress, [0, 1], [0, -50]);
  const curtainScale = useTransform(smoothProgress, [0, 0.5], [1, 0.95]);
  const curtainOpacity = useTransform(smoothProgress, [0, 0.7], [1, 0]);

  // Wave effect for cloth-like movement
  const waveY = useTransform(smoothProgress, [0, 1], [0, -20]);
  const waveYSpring = useSpring(waveY, { stiffness: 50, damping: 15 });

  // Calculate image transitions
  const totalImages = images.length;
  const imageSegment = 1 / totalImages;
  const currentSegmentIndex = useTransform(smoothProgress, p => Math.floor(p / imageSegment));
  const currentImageIndex = useTransform(currentSegmentIndex, idx => Math.min(idx, totalImages - 1));

  const segmentProgress = useTransform(smoothProgress, p => (p % imageSegment) / imageSegment);
  const isCurrentImageComplete = useTransform(segmentProgress, sp => sp >= 0.99);
  const isTransitioning = useTransform([isCurrentImageComplete, currentImageIndex], ([complete, idx]) => complete && idx < totalImages - 1);

  // Transformed values for styles
  const backgroundImage1 = useTransform(currentImageIndex, idx => `url(${images[idx]})`);
  const backgroundImage2 = useTransform(currentImageIndex, idx => idx < totalImages - 1 ? `url(${images[idx + 1]})` : `url(${images[idx]})`);
  const opacity2 = useTransform(segmentProgress, sp => sp >= 0.99 ? (sp - 0.99) / 0.01 : 0);
  const y2 = useTransform(segmentProgress, sp => sp >= 0.99 ? (1 - ((sp - 0.99) / 0.01)) * 100 : 0);
  const ringScale = useTransform(smoothProgress, p => 0.8 + p * 0.2);
  const ringOpacity = useTransform(smoothProgress, p => Math.max(0.3, 1 - p * 0.7));
  const progressWidth = useTransform(smoothProgress, p => `${p * 100}%`);
  const particleOpacity = useTransform(smoothProgress, p => Math.max(0, 0.7 - p));

  // Positioning constants
  const curtainTop = '10vh';
  const curtainLeft = '10%';
  const curtainWidth = '80%';
  const rodTop = 'calc(10vh - 20px)';
  const rodLeft = '8%';
  const rodWidth = '84%';

  return (
    <div style={{ minHeight: `${200 + totalImages * 100}vh`, background: '#1a1a1a' }}>
      <div style={{
        height: `${200 + totalImages * 100}vh`,
        position: 'relative',
        background: '#000'
      }}>
        <div style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>

          {/* Curtain rod */}
          <div style={{
            position: 'absolute',
            top: rodTop,
            left: rodLeft,
            width: rodWidth,
            height: '8px',
            background: 'linear-gradient(135deg, #8B4513, #A0522D)',
            borderRadius: '4px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            zIndex: 4
          }}>
            <div style={{
              position: 'absolute',
              left: '-15px',
              top: '-6px',
              width: '20px',
              height: '20px',
              background: 'radial-gradient(circle, #A0522D, #8B4513)',
              borderRadius: '50%',
              boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }} />
            <div style={{
              position: 'absolute',
              right: '-15px',
              top: '-6px',
              width: '20px',
              height: '20px',
              background: 'radial-gradient(circle, #A0522D, #8B4513)',
              borderRadius: '50%',
              boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }} />
          </div>

          {/* Image container */}
          <div style={{
            position: 'absolute',
            top: curtainTop,
            left: curtainLeft,
            width: curtainWidth,
            height: curtainHeight,
            borderRadius: '12px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            overflow: 'hidden',
            zIndex: 1
          }}>
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: backgroundImage1,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 1
              }}
            />

            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: backgroundImage2,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: opacity2,
                y: y2
              }}
            />
          </div>

          {/* Curtain overlay */}
          <motion.div
            style={{
              position: 'absolute',
              top: curtainTop,
              left: curtainLeft,
              width: curtainWidth,
              height: curtainHeight,
              borderRadius: '12px',
              y: curtainY,
              scale: curtainScale,
              clipPath: clipPath,
              opacity: curtainOpacity,
              zIndex: 2,
              transformOrigin: 'top center',
              background: `
                linear-gradient(90deg,
                  rgba(139,69,19,0.3) 0%,
                  rgba(139,69,19,0.1) 2%,
                  rgba(139,69,19,0.1) 98%,
                  rgba(139,69,19,0.3) 100%
                ),
                linear-gradient(0deg,
                  rgba(139,69,19,0.2) 0%,
                  transparent 5%,
                  transparent 95%,
                  rgba(139,69,19,0.2) 100%
                ),
                linear-gradient(45deg,
                  rgba(160,82,45,0.8) 0%,
                  rgba(139,69,19,0.9) 50%,
                  rgba(160,82,45,0.8) 100%
                )
              `,
              backgroundSize: '100% 100%, 100% 100%, 20px 20px'
            }}
          />

          {/* Rings */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                top: 'calc(10vh - 32px)',
                left: `calc(${curtainLeft} + ${(i + 1) * (80 / 9)}%)`,
                width: '8px',
                height: '16px',
                background: 'linear-gradient(135deg, #CD7F32, #B8860B)',
                borderRadius: '4px 4px 50% 50%',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                zIndex: 3,
                x: '-50%',
                scale: ringScale,
                opacity: ringOpacity
              }}
            />
          ))}

          {/* Progress indicator */}
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '25px',
            fontSize: '1rem',
            fontWeight: 'bold',
            zIndex: 10,
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ marginBottom: '0.5rem' }}>
              Image {Math.round(currentImageIndex.get() + 1)} of {totalImages}
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              Segment Progress: {Math.round(segmentProgress.get() * 100)}%
            </div>
            <div style={{ marginBottom: '0.5rem', fontSize: '0.8rem' }}>
              {isTransitioning.get()
                ? `Transitioning to image ${Math.round(currentImageIndex.get() + 2)}...`
                : `Displaying image ${Math.round(currentImageIndex.get() + 1)}`}
            </div>
            <div style={{
              width: '200px',
              height: '4px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '2px',
              overflow: 'hidden'
            }}>
              <motion.div
                style={{
                  width: progressWidth,
                  height: '100%',
                  background: 'linear-gradient(90deg, #667eea, #764ba2)'
                }}
              />
            </div>
          </div>

          {/* Image dots */}
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            right: '2rem',
            display: 'flex',
            gap: '8px',
            zIndex: 10
          }}>
            {images.map((_, index) => (
              <motion.div
                key={index}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: currentImageIndex.get() >= index
                    ? 'linear-gradient(135deg, #667eea, #764ba2)'
                    : 'rgba(255,255,255,0.3)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
              />
            ))}
          </div>

          {/* Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                left: `calc(${curtainLeft} + ${10 + i * 12}%)`,
                top: `calc(${curtainTop} + ${20 + (i % 3) * 20}%)`,
                width: '4px',
                height: '4px',
                background: 'rgba(255,255,255,0.3)',
                borderRadius: '50%',
                y: useTransform(smoothProgress, p => Math.sin((p + i) * Math.PI * 4) * 20),
                opacity: particleOpacity,
                zIndex: 0
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurtainScroll;
