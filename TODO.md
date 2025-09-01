# TODO: Add Scroll Animation to Header (Navbar)

## Steps:
- Import motion from framer-motion, useScrollAnimation, scrollVariants in Header.jsx
- Add const [ref, isVisible] = useScrollAnimation(); in Header component
- Change <header> to <motion.header ref={ref} initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={scrollVariants.staggerContainer}>
- Add variants={scrollVariants.staggerItem} to the logo div
- Add variants={scrollVariants.staggerItem} to each navigation link (a tags)
- Add variants={scrollVariants.staggerItem} to the download button
- Remove the unused headerRef
- Remove the CSS animations since replaced by Framer Motion
- Test the animation on page load
