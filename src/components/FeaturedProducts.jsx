import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const products = [
    {
        id: 1,
        name: 'Classic Leather Bifold',
        price: 89.99,
        originalPrice: 129.99,
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop',
        rating: 4.8,
        reviews: 124,
        tag: 'Best Seller',
    },
    {
        id: 2,
        name: 'Slim Minimalist Wallet',
        price: 59.99,
        originalPrice: 79.99,
        image: 'https://source.unsplash.com/400x400/?leather,purse',
        rating: 4.9,
        reviews: 89,
        tag: 'New',
    },
    {
        id: 3,
        name: 'Premium Carbon Fiber',
        price: 149.99,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
        rating: 4.7,
        reviews: 56,
        tag: null,
    },
    {
        id: 4,
        name: 'Vintage Leather Trifold',
        price: 119.99,
        originalPrice: 159.99,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
        rating: 4.6,
        reviews: 78,
        tag: 'Sale',
    },
    {
        id: 5,
        name: 'Executive Card Holder',
        price: 49.99,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400&h=400&fit=crop',
        rating: 4.8,
        reviews: 145,
        tag: null,
    },
    {
        id: 6,
        name: 'RFID Blocking Wallet',
        price: 79.99,
        originalPrice: 99.99,
        image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=400&fit=crop',
        rating: 4.5,
        reviews: 92,
        tag: 'Popular',
    },
    {
        id: 7,
        name: 'Hand-Stitched Billfold',
        price: 189.99,
        originalPrice: null,
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop',
        rating: 5.0,
        reviews: 34,
        tag: 'Premium',
    },
    {
        id: 8,
        name: 'Compact Front Pocket',
        price: 44.99,
        originalPrice: 59.99,
        image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop',
        rating: 4.7,
        reviews: 167,
        tag: 'Sale',
    },
]

const FeaturedProducts = () => {
    const [hoveredProduct, setHoveredProduct] = useState(null)
    const [wishlist, setWishlist] = useState([])

    const toggleWishlist = (productId, e) => {
        e.preventDefault()
        setWishlist(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        )
    }

    return (
        <section className="py-20 bg-secondary">
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
                        Our Products
                    </motion.span>
                    <h2 className="text-4xl font-bold text-primary mb-4">
                        Featured Products
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Browse our most popular wallets, handpicked for their quality
                        and design excellence.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                            whileHover={{ y: -5 }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <motion.img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover"
                                    onError={(e) => {
                                        e.currentTarget.onerror = null
                                        e.currentTarget.src = 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop'
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                />
                                {product.tag && (
                                    <motion.span
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="absolute top-4 left-4 bg-accent text-white text-xs font-medium px-3 py-1"
                                    >
                                        {product.tag}
                                    </motion.span>
                                )}
                                {/* Quick Actions */}
                                <motion.div
                                    className={`absolute top-4 right-4 flex flex-col gap-2`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{
                                        opacity: hoveredProduct === product.id ? 1 : 0,
                                        x: hoveredProduct === product.id ? 0 : 20
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={(e) => toggleWishlist(product.id, e)}
                                        className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md transition-colors ${wishlist.includes(product.id) ? 'text-red-500' : 'hover:bg-accent hover:text-white'}`}
                                    >
                                        <motion.svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill={wishlist.includes(product.id) ? "currentColor" : "none"}
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            whileTap={{ scale: 1.3 }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </motion.svg>
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-accent hover:text-white transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                        </svg>
                                    </motion.button>
                                </motion.div>
                                {/* Add to Cart Button */}
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: hoveredProduct === product.id ? 1 : 0,
                                        y: hoveredProduct === product.id ? 0 : 20
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="absolute bottom-4 left-4 right-4 bg-primary text-white py-3 px-4 font-medium"
                                >
                                    Add to Cart
                                </motion.button>
                            </div>

                            {/* Info */}
                            <div className="p-4">
                                <div className="flex items-center gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.1 * i }}
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </motion.svg>
                                    ))}
                                    <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                                </div>
                                <motion.h3
                                    className="text-lg font-semibold text-primary mb-2"
                                    whileHover={{ color: '#c9a86c' }}
                                >
                                    {product.name}
                                </motion.h3>
                                <div className="flex items-center gap-2">
                                    <motion.span
                                        className="text-xl font-bold text-primary"
                                        key={product.price}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        ${product.price.toFixed(2)}
                                    </motion.span>
                                    {product.originalPrice && (
                                        <motion.span
                                            className="text-sm text-gray-500 line-through"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        >
                                            ${product.originalPrice.toFixed(2)}
                                        </motion.span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300"
                    >
                        View All Products
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default FeaturedProducts

