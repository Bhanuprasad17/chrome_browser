import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ScalingCarousel.module.scss";

gsap.registerPlugin(ScrollTrigger);

const ScalingCarousel = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    const cursor = cursorRef.current;

    if (!container || !wrapper) return;

    const images = wrapper.querySelectorAll("img");
    let loadedImages = 0;

    const setupScrollTrigger = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Make first image very large initially (95% of viewport)
      const largeWidth = Math.min(viewportWidth * 0.95, viewportHeight * 1.6);
      
      // Initial state: first image dominates the screen
      gsap.set(images[0], { 
        width: `${largeWidth}px`, 
        height: "auto",
        opacity: 1, 
        scale: 1,
        x: 0,
        zIndex: 2,
        position: "relative"
      });
      
      // Other images hidden and positioned far to the right
      gsap.set(images[1], { 
        opacity: 0, 
        x: viewportWidth + 300, 
        zIndex: 1,
        scale: 1
      });
      gsap.set(images[2], { 
        opacity: 0, 
        x: viewportWidth + 600, 
        zIndex: 0,
        scale: 1
      });

      gsap.set(wrapper, { 
        gap: "0rem", 
        padding: "2rem",
        justifyContent: "center",
        alignItems: "center"
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=2500",
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Scale down first image dramatically and move to left position
      tl.to(images[0], {
        width: "400px", // much smaller final size
        scale: 0.8,
        x: -200, // move to left side
        duration: 2,
        ease: "power2.out",
      })
      
      // Adjust wrapper to row layout with gaps
      .to(wrapper, {
        gap: "1.5rem",
        padding: "1rem",
        justifyContent: "flex-start",
        duration: 2,
        ease: "power2.out",
      }, "<")
      
      // Pause briefly
      .to({}, { duration: 0.3 })
      
      // Bring in second image from right
      .to(images[1], {
        x: 0,
        opacity: 1,
        scale: 0.8,
        duration: 1.2,
        ease: "power2.out",
      })
      
      // Bring in third image from right with slight overlap
      .to(images[2], {
        x: 0,
        opacity: 1,
        scale: 0.8,
        duration: 1.2,
        ease: "power2.out",
      }, "-=0.6");
    };

    const checkImagesLoaded = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        setTimeout(setupScrollTrigger, 50);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkImagesLoaded();
      } else {
        img.addEventListener("load", checkImagesLoaded);
        img.addEventListener("error", checkImagesLoaded);
      }
    });

    if (images.length === 0) {
      setupScrollTrigger();
    }

    // Custom cursor logic
    const handleMouseMove = (e) => {
      if (cursor) {
        gsap.to(cursor, {
          x: e.clientX - 24,
          y: e.clientY - 24,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Handle window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageData = [
    {
      src: "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-1-2x.webp",
      width: "727px",
      height: "444px"
    },
    {
      src: "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-2-2x.webp",
      width: "220px",
      height: "444px"
    },
    {
      src: "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3-2x.webp",
      width: "727px",
      height: "444px"
    },
  ];

  return (
    <div ref={containerRef} id="fast" className={styles.carouselContainer}>
      <div ref={cursorRef} className={styles.cursor} />
      <div ref={wrapperRef} className={styles.wrapper}>
        {imageData.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index + 1}`}
            className={styles.image}
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/${image.width.replace('px','')}x${image.height.replace('px','')}?text=Image+Not+Found`;
            }}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default ScalingCarousel;
