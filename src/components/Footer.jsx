import { motion } from 'framer-motion'

const Footer = () => {
    const footerLinks = {
        shop: [
            { name: 'Leather Wallets', href: '#' },
            { name: 'Card Holders', href: '#' },
            { name: 'Money Clips', href: '#' },
            { name: 'Accessories', href: '#' },
            { name: 'New Arrivals', href: '#' },
        ],
        company: [
            { name: 'About Us', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Press', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Contact', href: '#' },
        ],
        support: [
            { name: 'FAQs', href: '#' },
            { name: 'Shipping', href: '#' },
            { name: 'Returns', href: '#' },
            { name: 'Order Status', href: '#' },
            { name: 'Payment Options', href: '#' },
        ],
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    }

    return (
        <footer id="contact" className="bg-primary text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Brand */}
                    <motion.div className="lg:col-span-2" variants={itemVariants}>
                        <motion.a 
                            href="#" 
                            className="inline-block mb-6"
                            whileHover={{ scale: 1.02 }}
                        >
                            <span className="text-2xl font-bold font-serif text-white">
                                WALLET<span className="text-accent">SHOP</span>
                            </span>
                        </motion.a>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Discover premium handcrafted wallets designed for those who appreciate
                            quality, elegance, and timeless style.
                        </p>
                        {/* Contact Info */}
                        <div className="space-y-3">
                            {[
                                { 
                                    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
                                    text: '123 Fashion Street, New York, NY 10001'
                                },
                                { 
                                    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                                    text: 'support@walletshop.com'
                                },
                                { 
                                    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                                    text: '+1 (555) 123-4567'
                                },
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    className="flex items-center gap-3 text-gray-400"
                                    whileHover={{ x: 5, color: '#c9a86c' }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <motion.svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-5 w-5 text-accent" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                    </motion.svg>
                                    <span>{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Shop Links */}
                    <motion.div variants={itemVariants}>
                        <motion.h4 
                            className="text-lg font-semibold mb-6"
                            whileHover={{ color: '#c9a86c' }}
                        >
                            Shop
                        </motion.h4>
                        <ul className="space-y-3">
                            {footerLinks.shop.map((link, index) => (
                                <motion.li 
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <motion.a 
                                        href={link.href} 
                                        className="text-gray-400"
                                        whileHover={{ 
                                            color: '#c9a86c',
                                            x: 5
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {link.name}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div variants={itemVariants}>
                        <motion.h4 
                            className="text-lg font-semibold mb-6"
                            whileHover={{ color: '#c9a86c' }}
                        >
                            Company
                        </motion.h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <motion.li 
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <motion.a 
                                        href={link.href} 
                                        className="text-gray-400"
                                        whileHover={{ 
                                            color: '#c9a86c',
                                            x: 5
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {link.name}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Support Links */}
                    <motion.div variants={itemVariants}>
                        <motion.h4 
                            className="text-lg font-semibold mb-6"
                            whileHover={{ color: '#c9a86c' }}
                        >
                            Support
                        </motion.h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link, index) => (
                                <motion.li 
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <motion.a 
                                        href={link.href} 
                                        className="text-gray-400"
                                        whileHover={{ 
                                            color: '#c9a86c',
                                            x: 5
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {link.name}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Bottom Footer */}
                <motion.div 
                    className="pt-8 border-t border-gray-800"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <motion.p 
                            className="text-gray-400 text-sm"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            © 2024 WalletShop. All rights reserved.
                        </motion.p>

                        {/* Payment Methods */}
                        <motion.div 
                            className="flex items-center gap-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="text-gray-400 text-sm">We accept:</span>
                            <div className="flex gap-2">
                                {['VISA', 'MC', 'AMEX', 'PP'].map((card, index) => (
                                    <motion.div
                                        key={card}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center text-xs font-bold"
                                    >
                                        {card}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Legal Links */}
                        <motion.div 
                            className="flex gap-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            {['Privacy Policy', 'Terms of Service'].map((link) => (
                                <motion.a
                                    key={link}
                                    href="#"
                                    className="text-gray-400 text-sm"
                                    whileHover={{ 
                                        color: '#c9a86c',
                                        textDecoration: 'underline'
                                    }}
                                >
                                    {link}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer

