import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalCarousel = () => {
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
      const wrapperHeight = wrapper.offsetHeight;
      const scrollDistance = wrapperHeight * 5; // adjust factor for scroll speed

      const totalScrollWidth = wrapper.scrollWidth - container.offsetWidth;

      gsap.to(wrapper, {
        x: -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 0.3,
          pin: true,
          anticipatePin: 1,
        },
      });
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
          x: e.clientX - 25,
          y: e.clientY - 25,
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const images = [
    {
      src: "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-2-2x.webp",
      width: "220px",
      height: "444px"
    },
    {
      src: "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5-2x.webp",
      width: "727px",
      height: "444px"
    },
    {
      src: "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-1-2x.webp",
      width: "727px",
      height: "444px"
    },
    {
      src: "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-4-2x.webp",
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
    <div
      ref={containerRef}
      className="w-full h-screen overflow-hidden relative cursor-none"
    >
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-12 h-12 bg-blue-500 rounded-full pointer-events-none z-50 opacity-0 scale-0"
        style={{ transform: "translate(-50%, -50%)", mixBlendMode: "difference" }}
      />

      {/* Horizontal row of images */}
      <div
        ref={wrapperRef}
        className="flex items-center gap-8"
        style={{
          width: "max-content",
          height: "auto",
          cursor: "grab",
          padding: "2rem",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index + 1}`}
            className="flex-shrink-0 object-cover rounded-lg shadow-lg"
            style={{
              width: image.width,
              height: image.height
            }}
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

export default HorizontalCarousel;