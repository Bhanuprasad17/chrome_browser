# COMPLETED: Add Scroll Animation to Header (Navbar)

## Steps:
- [x] Import motion from framer-motion, useScrollAnimation, scrollVariants in Header.jsx
- [x] Add const [ref, isVisible] = useScrollAnimation(); in Header component
- [x] Change <header> to <motion.header ref={ref} initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={scrollVariants.staggerContainer}>
- [x] Add variants={scrollVariants.staggerItem} to the logo div
- [x] Add variants={scrollVariants.staggerItem} to each navigation link (a tags)
- [x] Add variants={scrollVariants.staggerItem} to the download button
- [x] Remove the unused headerRef
- [x] Remove the CSS animations since replaced by Framer Motion
- [ ] Test the animation on page load
