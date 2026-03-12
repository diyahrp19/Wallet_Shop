import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const SpecialOffer = () => {
    // Countdown timer
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        // Set end date to 7 days from now
        const endDate = new Date()
        endDate.setDate(endDate.getDate() + 7)

        const timer = setInterval(() => {
            const now = new Date()
            const difference = endDate.getTime() - now.getTime()

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                })
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const countdownItems = [
        { value: timeLeft.days, label: 'Days' },
        { value: timeLeft.hours, label: 'Hours' },
        { value: timeLeft.minutes, label: 'Minutes' },
        { value: timeLeft.seconds, label: 'Seconds' },
    ]

    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')]"
                    animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Floating Elements */}
            <motion.div
                className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full"
                animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full"
                animate={{
                    y: [0, 20, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="inline-block bg-accent text-white text-sm font-medium px-4 py-2 mb-6"
                        >
                            Limited Time Offer
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Get 30% Off
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="block text-accent"
                            >
                                Premium Collection
                            </motion.span>
                        </h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-300 text-lg mb-8"
                        >
                            Upgrade your style with our premium leather wallet collection.
                            Handcrafted with the finest materials for lasting quality.
                        </motion.p>

                        {/* Animated Countdown */}
                        <motion.div
                            className="flex gap-4 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            {countdownItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 min-w-[80px] text-center"
                                >
                                    <motion.span
                                        key={item.value}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="block text-3xl font-bold text-white"
                                    >
                                        {String(item.value).padStart(2, '0')}
                                    </motion.span>
                                    <span className="text-gray-400 text-sm">{item.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(201, 168, 108, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-accent text-white font-medium hover:bg-white hover:text-primary transition-all duration-300"
                        >
                            Shop Now
                        </motion.button>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative"
                    >
                        <motion.img
                            src="https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop"
                            alt="Special Offer Wallet"
                            className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />
                        {/* Animated Discount Badge */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 15,
                                delay: 0.4
                            }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="absolute -top-6 -right-6 bg-accent text-white w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-xl cursor-pointer"
                        >
                            <motion.span
                                className="text-3xl font-bold"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                30%
                            </motion.span>
                            <span className="text-xs">OFF</span>
                        </motion.div>

                        {/* Decorative elements */}
                        <motion.div
                            className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-white/30 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute top-1/2 -left-8 w-8 h-8 bg-white/20 rounded-full"
                            animate={{
                                y: [0, -10, 0],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default SpecialOffer

