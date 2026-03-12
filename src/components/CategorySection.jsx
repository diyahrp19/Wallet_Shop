import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const categories = [
    {
        id: 1,
        name: 'Leather Wallets',
        image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400&h=500&fit=crop',
        count: 120,
    },
    {
        id: 2,
        name: 'Card Holders',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
        count: 85,
    },
    {
        id: 3,
        name: 'Money Clips',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop',
        count: 45,
    },
    {
        id: 4,
        name: 'Accessories',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop',
        count: 60,
    },
]

// Card with 3D tilt effect
const TiltCard = ({ children, className }) => {
    const ref = useRef(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 })
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 })

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseXRel = e.clientX - rect.left
        const mouseYRel = e.clientY - rect.top
        const xPct = mouseXRel / width - 0.5
        const yPct = mouseYRel / height - 0.5
        setPosition({ x: xPct, y: yPct })
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 })
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

const CategorySection = () => {
    return (
        <section id="collections" className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-accent font-medium text-sm tracking-wider uppercase mb-2 block"
                    >
                        Browse Categories
                    </motion.span>
                    <h2 className="text-4xl font-bold text-primary mb-4">
                        Shop by Category
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our curated collection of premium wallet categories,
                        each crafted with the finest materials.
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                        >
                            <TiltCard className="group block">
                                <a
                                    href={`#${category.name.toLowerCase().replace(' ', '-')}`}
                                    className="block"
                                    style={{ transform: "translateZ(0)" }}
                                >
                                    <div
                                        className="relative overflow-hidden mb-4"
                                        style={{ transform: "translateZ(30px)" }}
                                    >
                                        <motion.img
                                            src={category.image}
                                            alt={category.name}
                                            className="w-full h-64 object-cover"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                        />
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
                                        />
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        >
                                            <span className="bg-white text-primary px-6 py-3 font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                Shop Now
                                            </span>
                                        </motion.div>
                                    </div>
                                    <motion.h3
                                        className="text-lg font-semibold text-primary group-hover:text-accent transition-colors"
                                        style={{ transform: "translateZ(20px)" }}
                                    >
                                        {category.name}
                                    </motion.h3>
                                    <p className="text-gray-500 text-sm">
                                        {category.count} Products
                                    </p>
                                </a>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CategorySection

