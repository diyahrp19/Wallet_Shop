import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue } from 'framer-motion'

// Counter component with animation
const AnimatedCounter = ({ end, suffix = '' }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 })

    if (isInView) {
        motionValue.set(end)
    }

    // Create a display value that interpolates
    const displayValue = useTransform(springValue, (latest) => Math.round(latest))

    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
        >
            {end}
            {suffix}
        </motion.span>
    )
}

const Hero = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

    // Parallax for background elements
    const bgY1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const bgY2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const bgY3 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])

    return (
        <section ref={ref} className="relative min-h-screen flex items-center bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden">
            {/* Parallax Background Pattern */}
            <motion.div
                style={{ y: bgY1, opacity }}
                className="absolute inset-0 opacity-5 pointer-events-none"
            >

            </motion.div>

            <motion.div
                style={{ y: bgY2, opacity }}
                className="absolute inset-0 opacity-5 pointer-events-none"
            >
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-20 right-20 w-96 h-96 border-2 border-gray-800 rounded-full"
                />
            </motion.div>

            <motion.div
                style={{ y: bgY3, opacity }}
                className="absolute inset-0 opacity-5 pointer-events-none"
            >
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 w-48 h-48 border-2 border-gray-800 transform -translate-x-1/2 -translate-y-1/2 rotate-45"
                />
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block text-accent font-medium text-sm tracking-wider uppercase mb-4"
                        >
                            Premium Collection 2024
                        </motion.span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
                            Elegant Wallets
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="block text-accent"
                            >
                                For Every Style
                            </motion.span>
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-lg text-gray-600 mb-8 max-w-lg"
                        >
                            Discover our handcrafted collection of premium leather wallets.
                            Designed for those who appreciate quality and timeless elegance.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-primary text-white font-medium rounded-sm hover:bg-gray-800 transition-all duration-300 shadow-lg"
                            >
                                Shop Now
                            </motion.button>
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "#1a1a1a",
                                    color: "#ffffff"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-primary text-primary font-medium rounded-sm hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                View Collection
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex gap-12 mt-12 pt-8 border-t border-gray-300"
                        >
                            {[
                                { value: '500+', label: 'Products' },
                                { value: '10k+', label: 'Happy Customers' },
                                { value: '50+', label: 'Collections' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                >
                                    <h3 className="text-3xl font-bold text-primary">
                                        {stat.value}
                                    </h3>
                                    <p className="text-gray-500 text-sm">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        style={{ scale }}
                        className="relative"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="relative z-10"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=700&fit=crop"
                                alt="Premium Leather Wallet"
                                className="w-full max-w-lg mx-auto object-cover shadow-2xl"
                            />
                        </motion.div>
                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.6,
                                type: "spring",
                                stiffness: 200
                            }}
                            whileHover={{
                                scale: 1.1,
                                rotate: 5
                            }}
                            className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl cursor-pointer"
                        >
                            <p className="text-3xl font-bold text-accent">50%</p>
                            <p className="text-sm text-gray-600">OFF</p>
                            <p className="text-xs text-gray-400">First Order</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2 cursor-pointer"
                    onClick={() => {
                        document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                >
                    <motion.div
                        animate={{ opacity: [1, 0.5, 1], y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-2 bg-gray-400 rounded-full"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero

