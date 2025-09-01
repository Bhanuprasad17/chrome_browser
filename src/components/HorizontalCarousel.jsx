import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalCarousel = () => {
  const [imageSize, setImageSize] = useState("w-[20vw] h-[20vh]");
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    const cursor = cursorRef.current;

    if (!container || !wrapper) return;

    const imageElements = wrapper.querySelectorAll("img");
    let loadedImages = 0;

    const setupScrollTrigger = () => {
      const totalScrollWidth = wrapper.scrollWidth - container.offsetWidth;

      gsap.to(wrapper, {
        x: -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${container.offsetWidth + totalScrollWidth}`,
          scrub: 0.3, // ✅ Faster scroll response
          pin: true,
          anticipatePin: 1,
        },
      });
    };

    const checkImagesLoaded = () => {
      loadedImages++;
      if (loadedImages === imageElements.length) {
        setTimeout(setupScrollTrigger, 100);
      }
    };

    imageElements.forEach((img) => {
      if (img.complete) {
        checkImagesLoaded();
      } else {
        img.addEventListener("load", checkImagesLoaded);
        img.addEventListener("error", checkImagesLoaded);
      }
    });

    if (imageElements.length === 0) {
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
    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-2-2x.webp",
    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5-2x.webp",
    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-1-2x.webp",
    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-4-2x.webp",
    "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3-2x.webp",
  ];

  return (
    <div
      ref={containerRef}
      className="w-full h-screen overflow-hidden relative cursor-none"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-12 h-12 bg-blue-500 rounded-full pointer-events-none z-50 opacity-0 scale-0"
        style={{
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
        }}
      />

      {/* Horizontal row of images */}
      <div
        ref={wrapperRef}
        className="flex flex-nowrap items-center gap-8"
        style={{
          width: "max-content",
          height: "100%",
          cursor: "grab",
          padding: "0 2rem",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-[20vw] h-[20vh] flex-shrink-0 object-cover rounded-lg shadow-lg"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/400x500?text=Image+Not+Found";
            }}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalCarousel;
