import React, { useEffect, useState } from 'react';

// This function creates a simple SVG data URL for a fallback icon
// Fixed to properly encode the SVG and ensure display
const createFallbackIcon = (color, number) => {
  const svg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" fill="${color}" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
    <text x="24" y="30" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white">${number}</text>
  </svg>`;
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
};

const ChromeExtensionsShowcase = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = (e.clientX - centerX) / 20;
      const mouseY = (e.clientY - centerY) / 20;

      setMousePosition({ x: mouseX, y: mouseY });
    };

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = window.innerHeight;
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
    };

    const timer = setInterval(() => {
      setTime(prev => prev + 0.02);
    }, 16);

    const container = document.getElementById('showcase-container');
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Floating icons data with positions and animations
  const floatingIcons = [
    {
      id: 1,
      src: 'https://www.google.com/chrome/static/images/dev-components/extensions-paint-2x.png',
      baseX: -180,
      baseY: -120,
      edgeX: -90,
      edgeY: -60,
      amplitude: { x: 1, y: 9 },
      speed: { x: 1.2, y: 1.8 },
      // color: '#4285f4',
      bgColor: 'green', // stronger green background
      name: 'Productivity'
    },
    {
      id: 2,
      src: 'https://www.google.com/chrome/static/images/dev-components/extensions-person-2x.png',
      baseX: 210,
      baseY: -90,
      edgeX: 105,
      edgeY: -45,
      amplitude: { x: 15, y: 12 },
      speed: { x: 1.65, y: 1.35 },
      // color: '#34a853',
      bgColor: 'yellow-orange', // stronger yellow background
      name: 'Shopping'
    },
    {
      id: 3,
      src: 'https://www.google.com/chrome/static/images/dev-components/extensions-person-2x.png',
      baseX: -210,
      baseY: 120,
      edgeX: -105,
      edgeY: 60,
      amplitude: { x: 18, y: 7.5 },
      speed: { x: 1.05, y: 2.1 },
      // color: '#fbbc04',
      bgColor: '#f09802ff', // stronger amber background
      name: 'Entertainment'
    },
    {
      id: 4,
      src: 'https://www.google.com/chrome/static/images/dev-components/extensions-shop-2x.png',
      baseX: 180,
      baseY: 150,
      edgeX: 90,
      edgeY: 75,
      amplitude: { x: 10.5, y: 13.5 },
      speed: { x: 1.95, y: 1.2 },
      color: 'red',
      bgColor: '#f87171', // stronger red background
      name: 'Developer'
    },
    {
      id: 5,
      src: 'https://www.google.com/chrome/static/images/dev-components/extensions-icon-2x.png',
      baseX: 0,
      baseY: 210,
      edgeX: 0,
      edgeY: 105,
      amplitude: { x: 13.5, y: 16.5 },
      speed: { x: 1.35, y: 1.65 },
      color: '#9aa0a6',
      bgColor: 'blue', // stronger indigo background
      name: 'Utilities'
    }
  ];

  const calculateIconPosition = (icon) => {
    // Adjust floatX and floatY to move icons outward from original positions instead of inward
    const floatX = icon.baseX + (icon.baseX - icon.edgeX) * scrollProgress + 
                  Math.sin(time * icon.speed.x) * icon.amplitude.x * (1 - scrollProgress * 0.8) +
                  mousePosition.x * (icon.baseX > 0 ? 1.2 : -1.2) * (1 - scrollProgress);
    
    const floatY = icon.baseY + (icon.baseY - icon.edgeY) * scrollProgress + 
                  Math.cos(time * icon.speed.y) * icon.amplitude.y * (1 - scrollProgress * 0.8) +
                  mousePosition.y * (icon.baseY > 0 ? 1.0 : -1.0) * (1 - scrollProgress);

    const scale = 1 - scrollProgress * 0.3;
    const opacity = 1 - scrollProgress * 0.4;

    const translateZ = Math.sin(time * icon.speed.x + icon.id) * 5 + 20;

    return {
      left: `calc(50% + ${floatX}px)`,
      top: `calc(50% + ${floatY}px)`,
      transform: `translate(-50%, -50%) translateZ(${translateZ}px) scale(${scale})`,
      opacity: opacity,
    };
  };

  return (
    <div style={{
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '70rem',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px'
      }}>
        {/* Left Content */}
        <div style={{
          flex: 1,
          maxWidth: '38rem',
          minWidth: '300px'
        }}>
          <h1 style={{
            fontSize: '3.75rem',
            fontWeight: 700,
            lineHeight: 1.25,
            color: '#111827',
            margin: 0
          }}>
            Extend your
            <br />
            experience
          </h1>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.625,
            color: '#4b5563',
            marginTop: '1.5rem'
          }}>
            From shopping and entertainment to productivity, find extensions to improve your experience in the Chrome Web Store.
          </p>
          <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.375rem',
            fontWeight: 500,
            transition: 'all 0.2s ease-in-out',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            marginTop: '2rem',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#1d4ed8';
            e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#2563eb';
            e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
          }}>
            <span>Explore extensions</span>
            <svg 
              style={{ width: '1rem', height: '1rem', transition: 'transform 0.2s ease-in-out' }}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Right Visual */}
        <div
          id="showcase-container"
          style={{
            flex: 1,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // height: '37.5rem',
            // minWidth: '400px'
          }}
        >
          {/* Main Chrome Browser Window */}
          <div style={{
            position: 'relative',
            zIndex: 10,
            backgroundColor: 'white',
            borderRadius: '1.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            transition: 'transform 0.3s ease-in-out',
            width: '30rem',
            height: '20rem',
            overflow: 'hidden',
            transform: `perspective(1000px) rotateY(${mousePosition.x * 0.3}deg) rotateX(${mousePosition.y * -0.2}deg) translateZ(10px)`
          }}>
            {/* Browser Header */}
            <div style={{
              backgroundColor: '#f3f4f6',
              padding: '0.75rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', backgroundColor: '#f87171' }}></div>
                <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', backgroundColor: '#facc15' }}></div>
                <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', backgroundColor: '#4ade80' }}></div>
              </div>
              <div style={{ flex: 1, margin: '0 1.5rem' }}>
                <div style={{
                  backgroundColor: 'white',
                  border: '1px solid #d1d5db',
                  borderRadius: '9999px',
                  padding: '0.375rem 1rem',
                  fontSize: '0.875rem',
                  color: '#7f8da9ff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <svg style={{ width: '1rem', height: '1rem', color: '#9ca3af' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Search Google or type a URL</span>
                </div>
              </div>
            </div>

            {/* Browser Content */}
                <div style={{
                  height: 'calc(100% - 60px)',
                  // width : '100%',
                  background: `url('https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5-2x.webp') center/cover no-repeat`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}>
                  <div>
                    {/* Text removed as per user request */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 2fr)',
                      gap: '1rem'
                    }}>
                    </div>
                  </div>
                </div>
          </div>

          {/* Floating Extension Icons */}
          {floatingIcons.map((icon) => {
            const position = calculateIconPosition(icon);
            return (
              <div
                key={icon.id}
                style={{
                  position: 'absolute',
                  zIndex: 15,
                  transition: 'all 0.3s ease-in-out',
                  ...position
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = position.transform + ' scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = position.transform;
                }}
              >
                <div style={{
                  width: '5rem',
                  height: '5rem',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(6px)',
                  transition: 'all 0.3s ease-in-out',
                  backgroundColor: icon.bgColor,
                  border: `1px solid ${icon.color}60`,
                  position: 'relative'
                }}>
                  <img
                    src={icon.src}
                    alt={`${icon.name} Extension`}
                    style={{
                      width: '140%',
                      height: '160%',
                      objectFit: 'contain',
                      display: 'block'
                    }}
                    onError={(e) => {
                      // Use fallback SVG if main image fails
                      console.log(`Using fallback for icon ${icon.id}`);
                      e.target.src = icon.fallback;
                      e.target.onerror = (fallbackError) => {
                        // Final fallback to colored div
                        console.log(`Final fallback for icon ${icon.id}`);
                        e.target.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.style.cssText = `
                          width: 3rem;
                          height: 3rem;
                          background-color: ${icon.color};
                          border-radius: 0.5rem;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          color: white;
                          font-weight: bold;
                          font-size: 1.5rem;
                        `;
                        fallback.textContent = icon.id;
                        e.target.parentNode.appendChild(fallback);
                      };
                    }}
                  />
                </div>

                {/* Glow effect */}
                {/* <div style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '1rem',
                  filter: 'blur(2rem)',
                  backgroundColor: icon.color,
                  transform: 'scale(1.1)',
                  opacity: Math.max(0, (1 - scrollProgress * 0.6) * 0.2),
                  pointerEvents: 'none'
                }}></div> */}
              </div>
            );
          })}

          {/* Background Decorations */}
          <div style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-2.5rem',
              left: '-2.5rem',
              width: '10rem',
              height: '10rem',
              borderRadius: '50%',
              filter: 'blur(2rem)',
              opacity: 0.2,
              // backgroundColor: '#93c5fd',
              animation: 'pulse 4s infinite ease-in-out'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '-5rem',
              right: '-2.5rem',
              width: '8rem',
              height: '8rem',
              borderRadius: '50%',
              filter: 'blur(2rem)',
              opacity: 0.2,
              // backgroundColor: '#c4b5fd',
              animation: 'pulse 4s infinite ease-in-out',
              animationDelay: '1s'
            }}></div>
            <div style={{
              position: 'absolute',
              top: '33.333%',
              left: '-5rem',
              width: '7rem',
              height: '7rem',
              borderRadius: '50%',
              filter: 'blur(2rem)',
              opacity: 0.2,
              // backgroundColor: '#a7f3d0',
              animation: 'pulse 4s infinite ease-in-out',
              animationDelay: '2s'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '25%',
              right: '-4rem',
              width: '6rem',
              height: '6rem',
              borderRadius: '50%',
              filter: 'blur(2rem)',
              opacity: 0.2,
              // backgroundColor: '#fde68a',
              animation: 'pulse 4s infinite ease-in-out',
              animationDelay: '3s'
            }}></div>
          </div>
        </div>
        
      </div>
      
      {/* Add pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default ChromeExtensionsShowcase;
