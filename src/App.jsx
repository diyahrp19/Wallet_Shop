import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CategorySection from './components/CategorySection'
import FeaturedProducts from './components/FeaturedProducts'
import SpecialOffer from './components/SpecialOffer'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="min-h-screen bg-secondary">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <main>
                <Hero />
                <CategorySection />
                <FeaturedProducts />
                <SpecialOffer />
                <Testimonials />
                <Newsletter />
            </main>
            <Footer />
        </div>
    )
}

export default App

