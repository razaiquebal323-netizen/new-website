/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Twitter, 
  ArrowRight, 
  Star, 
  Mail, 
  Phone, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Gem,
  Award
} from 'lucide-react';
import { useState, useEffect } from 'react';

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=2000",
  men: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
  women: "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&q=80&w=800",
  unisex: "https://images.unsplash.com/photo-1616948055600-8f94cb9d1163?auto=format&fit=crop&q=80&w=800",
  story: "https://images.unsplash.com/photo-1563170351-be82bc888bb4?auto=format&fit=crop&q=80&w=1200",
  bestSeller1: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=600",
  bestSeller2: "https://images.unsplash.com/photo-1512777576244-b846ac3d816f?auto=format&fit=crop&q=80&w=600",
  bestSeller3: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80&w=600",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'glass-nav py-6 border-white/5 shadow-2xl' : 'bg-transparent py-10 border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-12 flex justify-between items-center text-luxury-white">
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-serif font-light tracking-[0.4em] uppercase">Shah Habib</h1>
        </div>

        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-medium opacity-60">
          <a href="#collections" className="hover:opacity-100 transition-opacity">Collections</a>
          <a href="#story" className="hover:opacity-100 transition-opacity">Our Story</a>
          <a href="#shop" className="hover:opacity-100 transition-opacity">Bestsellers</a>
          <a href="#shop" className="hover:opacity-100 transition-opacity text-gold">Shop Now</a>
        </div>

        <div className="flex items-center gap-8">
          <button className="hover:opacity-50 transition-opacity opacity-60">
            <ShoppingBag size={18} strokeWidth={1.5} />
          </button>
          <button className="md:hidden opacity-60" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-luxury-black border-t border-white/5 p-12 flex flex-col gap-8 text-center uppercase tracking-widest text-xs"
        >
          <a href="#collections" onClick={() => setIsOpen(false)} className="opacity-60 hover:opacity-100">Collections</a>
          <a href="#story" onClick={() => setIsOpen(false)} className="opacity-60 hover:opacity-100">Our Story</a>
          <a href="#shop" onClick={() => setIsOpen(false)} className="opacity-60 hover:opacity-100 text-gold font-bold">Shop Now</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="opacity-60 hover:opacity-100">Contact</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen bg-[#0A0A0A] overflow-hidden flex items-center px-12">
      {/* Background Accent Texture */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#1C1C1C] to-transparent opacity-30 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center z-10 pt-20">
        <div className="flex flex-col justify-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold uppercase tracking-[0.3em] text-[12px] mb-6 font-semibold"
          >
            The Art of Fragrance
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[72px] md:text-[100px] leading-[0.85] font-serif font-light mb-10 italic"
          >
            Essence of <br />
            <span className="md:pl-20">Luxury</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg leading-relaxed text-white/50 mb-12 max-w-md font-light"
          >
            Discover fragrances that define elegance, confidence, and timeless charm. Crafted for those who leave a lasting impression wherever they go.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <button className="bg-gold text-black px-12 py-5 text-xs uppercase tracking-widest font-bold hover:bg-[#D4AF37] transition-all duration-300">
              Shop the Collection
            </button>
            <button className="border border-white/20 px-12 py-5 text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all duration-300">
              Our Story
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="aspect-[4/5] bg-card-bg border border-white/5 p-4 rounded-sm">
            <img 
              src={IMAGES.hero} 
              alt="Luxury" 
              className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-1000" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-white/5 -z-10 bg-luxury-black"></div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-12 transform -rotate-90 origin-left hidden md:block">
        <a href="#collections" className="text-[10px] uppercase tracking-[0.4em] font-medium text-white/20 hover:text-gold transition-colors">Experience — Scroll</a>
      </div>
    </section>
  );
};

const Collections = () => {
  const collectionList = [
    { num: "01", name: "For Men", desc: "Bold & Captivating", img: IMAGES.men },
    { num: "02", name: "For Women", desc: "Elegant & Soft", img: IMAGES.women },
    { num: "03", name: "Unisex Collection", desc: "Balanced Perfection", img: IMAGES.unisex, span: true },
  ];

  return (
    <section id="collections" className="py-32 px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="max-w-xl">
          <p className="uppercase tracking-[0.3em] text-[12px] font-semibold text-gold mb-4">Archives</p>
          <h2 className="text-5xl md:text-7xl font-serif italic leading-tight font-light">The Master Collection</h2>
        </div>
        <p className="text-white/40 max-w-[280px] text-xs uppercase tracking-[0.2em] mb-3 leading-relaxed">Defining elegance through high-concentration extracts.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {collectionList.map((item, id) => (
          <motion.div 
            key={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: id * 0.1 }}
            className={`group bg-card-bg border border-white/5 p-12 flex flex-col justify-end relative overflow-hidden transition-all duration-500 hover:border-white/20 min-h-[400px] ${item.span ? 'md:col-span-2' : ''}`}
          >
            {/* Background Image on Hover */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000 grayscale group-hover:grayscale-0">
               <img src={item.img} alt="" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
            </div>
            
            <div className="absolute top-8 right-10 text-white/10 text-6xl md:text-8xl font-serif font-light">{item.num}</div>
            
            <div className="relative z-10">
              <h3 className="text-xl uppercase tracking-[0.2em] text-gold mb-2 font-medium">{item.name}</h3>
              <p className="text-xs text-white/40 uppercase tracking-widest font-light">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const StorySection = () => {
  return (
    <section id="story" className="py-40 bg-luxury-black relative overflow-hidden border-y border-white/5">
       {/* Background Accent */}
       <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#1C1C1C] to-transparent opacity-20 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-10"
        >
          <p className="uppercase tracking-[0.4em] text-[12px] font-bold text-gold opacity-60">Legacy & Story</p>
          <h2 className="text-6xl md:text-8xl font-serif italic leading-tight font-light">Elegance is an <br />understatement.</h2>
          <div className="space-y-8 max-w-lg">
            <p className="text-white/50 leading-relaxed font-light text-lg italic font-serif">
              "We don't create scents; we create memories. Each bottle is a chapter of a journey that began with a quest for the rarest oud and most delicate petals."
            </p>
            <p className="text-white/40 leading-relaxed font-light text-base uppercase tracking-widest">
              Rooted in heritage yet crafted for the modern visionary, Shah Habib invites you to tell your story through our art.
            </p>
          </div>
          <div className="pt-6">
            <div className="w-24 h-[1px] bg-gold opacity-30" />
            <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Habib Al-Mansour, Founder</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="aspect-[4/5] rounded-sm overflow-hidden border border-white/5 p-4 bg-card-bg">
            <img 
              src={IMAGES.story} 
              alt="Story" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000 grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-10 -right-10 w-full h-full border border-gold/10 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { label: "Longevity", value: "Long-lasting Formulas" },
    { label: "Quality", value: "Premium Ingredients" },
    { label: "Signature", value: "Unique Aroma Blends" },
  ];

  return (
    <div className="bg-white/5 backdrop-blur-md px-12 py-16 flex flex-col md:flex-row justify-between items-center border-b border-white/10">
      <div className="flex flex-wrap gap-12 lg:gap-24 mb-10 md:mb-0">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col gap-2">
            <span className="text-gold text-[11px] uppercase font-bold tracking-[0.3em]">{f.label}</span>
            <span className="text-white/50 text-[13px] uppercase tracking-[0.1em] font-light">{f.value}</span>
          </div>
        ))}
      </div>
      
      <div className="max-w-sm text-center md:text-right">
        <p className="italic text-white/60 text-lg font-serif leading-relaxed mb-3">
          "Absolutely amazing fragrance! Luxury at its best. Highly recommended!"
        </p>
        <span className="block text-[10px] uppercase tracking-widest font-bold opacity-30">— Verified Client</span>
      </div>
    </div>
  );
};

const BestSellers = () => {
  const products = [
    { name: "Oud Royale", price: "$180", img: IMAGES.bestSeller1, tag: "01 / Masterpiece" },
    { name: "Velvet Rose", price: "$145", img: IMAGES.bestSeller2, tag: "02 / Essential" },
    { name: "Arctic Mist", price: "$160", img: IMAGES.bestSeller3, tag: "03 / Edition" },
  ];

  return (
    <section id="shop" className="py-40 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-32">
          <p className="uppercase tracking-[0.5em] text-[12px] font-bold text-gold opacity-60 mb-6">Curation</p>
          <h2 className="text-6xl md:text-8xl font-serif italic font-light">The Bestsellers</h2>
          <div className="w-40 h-[1px] bg-white/10 mt-12" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-[#111111] border border-white/5 p-6 hover:border-white/20 transition-all duration-500"
            >
              <div className="absolute top-8 right-8 z-10 text-[10px] uppercase font-bold tracking-[0.2em] text-white/20">
                {p.tag}
              </div>
              <div className="aspect-[4/5] bg-[#0A0A0A] overflow-hidden mb-10">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-end border-b border-white/5 pb-6">
                  <div>
                    <h3 className="text-3xl font-serif italic mb-2 font-light">{p.name}</h3>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">Parfum Extract</p>
                  </div>
                  <p className="font-display font-light text-2xl opacity-60">{p.price}</p>
                </div>
                <button className="text-[10px] uppercase font-bold tracking-[0.4em] py-4 w-full transition-all duration-500 hover:bg-gold hover:text-black">Add To Collection —</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-40 bg-[#060606] text-white relative flex items-center justify-center text-center px-12 overflow-hidden border-t border-white/5">
      <div className="relative z-10 max-w-2xl w-full">
        <p className="uppercase tracking-[0.5em] text-[11px] font-bold text-gold mb-12 opacity-60">Stay Connected</p>
        <h2 className="text-6xl md:text-[100px] font-serif italic mb-16 font-light leading-none">The Inner Circle</h2>
        
        <form className="relative max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <input 
              type="email" 
              placeholder="JOURNAL ENTRANCE" 
              className="w-full bg-transparent border-white/10 border-b py-6 px-4 text-[11px] tracking-[0.5em] uppercase focus:outline-none focus:border-gold transition-colors text-center font-bold"
            />
          </div>
          <button className="mt-16 block mx-auto text-[11px] font-bold uppercase tracking-[0.4em] border border-white/10 px-16 py-6 rounded-none hover:bg-white hover:text-black transition-all duration-700">
            Join The Archives —
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-luxury-black text-white/30 pt-40 pb-20 px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-40">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-white text-3xl font-serif font-light tracking-[0.5em] uppercase mb-10">Shah Habib</h2>
            <p className="max-w-sm mb-16 text-xs leading-relaxed uppercase tracking-[0.3em] font-light italic">
              Crafting olfactory signatures for those who seek the extraordinary. Paris | Dubai | London
            </p>
            <div className="flex gap-10 text-white/40">
              <a href="#" className="hover:text-gold transition-colors"><Instagram size={18} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Facebook size={18} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white/60 text-[11px] uppercase tracking-[0.4em] font-bold mb-10">The House</h4>
            <ul className="flex flex-col gap-6 text-[10px] uppercase tracking-[0.2em]">
              <li><a href="#collections" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#shop" className="hover:text-white transition-colors">Bestsellers</a></li>
              <li><a href="#story" className="hover:text-white transition-colors">Master Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Concierge</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/60 text-[11px] uppercase tracking-[0.4em] font-bold mb-10">Legal</h4>
            <ul className="flex flex-col gap-6 text-[10px] uppercase tracking-[0.2em]">
              <li><a href="#" className="hover:text-white transition-colors">Authenticity</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li className="mt-4 text-white/60 hover:text-gold transition-colors opacity-40">
                <span className="text-[10px] tracking-widest">support@shahhabib.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] uppercase tracking-[0.5em] font-bold opacity-30">
          <p>&copy; {new Date().getFullYear()} Shah Habib Parfumier</p>
          <div className="flex gap-12">
            <span>Privatized Boutique</span>
            <span>Est. 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Collections />
        <StorySection />
        <BestSellers />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
