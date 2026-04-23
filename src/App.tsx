import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Clock, MapPin, Instagram, Facebook, ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-mex-cream overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutUs />
      <MenuSection />
      <Reviews />
      <Location />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-mex-cream/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center pb-4 border-b border-mex-charcoal/10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <div className="w-10 h-10 bg-mex-forest rounded-full grid place-items-center text-white font-serif font-bold">M</div>
          <span className="text-2xl font-display font-bold text-mex-charcoal tracking-tight">CASA DE SABOR</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Home", "Our Story", "Menu", "Visit Us"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium tracking-widest uppercase hover:text-mex-red transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mex-red transition-all group-hover:w-full" />
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-mex-red text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-mex-charcoal transition-all hover:scale-105 active:scale-95"
          >
            Reservations
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-mex-charcoal">
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-mex-cream border-t border-mex-red/10 px-6 py-8 flex flex-col gap-6"
        >
          {["Home", "Our Story", "Menu", "Visit Us"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif font-medium">
              {item}
            </a>
          ))}
          <button className="bg-mex-red text-white py-4 rounded-xl font-bold uppercase tracking-widest">
            Reservations
          </button>
        </motion.div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <header id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Parallax effect */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2000&auto=format&fit=crop" 
            alt="Authentic Mexican Feast" 
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <div className="z-10 text-center px-6 max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-mex-terracotta font-serif italic text-2xl mb-4"
        >
          Desde 1984
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-8xl font-serif italic text-mex-red leading-[1.1] tracking-tight mb-8 text-balance"
        >
          AUTHENTIC MEXICAN FOOD MADE WITH TRADITION
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="w-full md:w-auto bg-mex-red text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-mex-charcoal transition-all shadow-lg group">
            Explore the Menu
            <ChevronRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full md:w-auto border border-white/30 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
            Order To Go
          </button>
        </motion.div>
      </div>

      {/* Decorative Traditional Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-[url('https://www.transparenttextures.com/patterns/mexican-blanket.png')] opacity-20 pointer-events-none" />
    </header>
  );
}

function ImageCarousel() {
  const images = [
    "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=1000&auto=format&fit=crop"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
  };

  return (
    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentIndex ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <section id="our-story" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <ImageCarousel />
          
          <div className="absolute -bottom-8 -right-8 w-64 aspect-square rounded-[2rem] overflow-hidden rotate-[4deg] shadow-2xl border-8 border-mex-cream hidden lg:block z-20">
            <img 
              src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=500&auto=format&fit=crop" 
              alt="Mexican Spices" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-2">
            <span className="text-mex-red font-display font-bold uppercase tracking-[0.3em] text-sm italic">Nuestra Historia</span>
            <h2 className="text-5xl md:text-6xl font-display font-black leading-tight text-mex-charcoal">A JOURNEY OF FLAVOR & HERITAGE.</h2>
          </div>
          
          <p className="text-lg text-mex-charcoal/80 leading-relaxed font-serif italic italic-small">
            "We don't just serve food; we serve memories. Every recipe in our kitchen has been passed down through four generations of the Ramirez family, from the vibrant markets of Oaxaca to your table."
          </p>

          <div className="space-y-6 text-mex-charcoal/70 leading-relaxed">
            <p>
              Growing up in Mexico, our grandmother used to say that the secret ingredient to any good mole isn't the spices, but the patience. That philosophy lives on in Casa de Sabor today. 
            </p>
            <p>
              We source our chilies directly from traditional farmers in Mexico, grind our own corn for tortillas every morning, and slow-cook our meats for over 12 hours to ensure that every bite tells the story of our heritage.
            </p>
          </div>

          <div className="pt-4">
            <button className="text-mex-red font-bold uppercase tracking-widest border-b-2 border-mex-red/30 pb-2 hover:border-mex-red transition-all flex items-center gap-2 group">
              Learn more about our roots
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface MenuCardProps {
  key?: string | number;
  item: {
    name: string;
    price: string;
    desc: string;
    image: string;
    tag?: string;
  };
  index: number;
}

function MenuCard({ item, index }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
      whileHover={{ y: -10 }}
      className="group relative bg-[#FDF8F1] rounded-[2.5rem] overflow-hidden border border-mex-charcoal/5 shadow-[0_10px_40px_-15px_rgba(45,29,26,0.1)] hover:shadow-[0_25px_60px_-15px_rgba(45,29,26,0.2)] transition-all duration-500 flex flex-col h-full"
    >
      {/* Visual Accents - Mexican pattern in corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[url('https://www.transparenttextures.com/patterns/mexican-blanket.png')] opacity-[0.03] pointer-events-none z-10" />

      {/* Tag */}
      {item.tag && (
        <div className="absolute top-6 left-6 z-20">
          <span className="bg-mex-red text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
            {item.tag}
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mex-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4 gap-4">
          <h3 className="text-2xl font-serif font-black text-mex-charcoal leading-tight">
            {item.name}
          </h3>
          <span className="text-mex-red font-display font-bold text-xl leading-none pt-1">
            {item.price}
          </span>
        </div>
        
        <p className="text-mex-charcoal/60 text-sm leading-relaxed mb-6 font-serif italic">
          {item.desc}
        </p>

        {/* Bottom Decorative Element */}
        <div className="mt-auto pt-6 border-t border-mex-charcoal/5 flex justify-between items-center">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-mex-terracotta/40" />
            ))}
          </div>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="text-[10px] uppercase font-black tracking-widest text-mex-charcoal hover:text-mex-red transition-colors"
          >
            Order Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Main Dishes");

  const categories = ["Breakfast", "Main Dishes", "Tacos & Plates", "Drinks"];
  
  const menuItems = {
    "Breakfast": [
      { name: "Chilaquiles Verdes", price: "$14", desc: "Crispy hand-press tortillas soaked in slow-simmered green salsa, topped with crema, queso fresco, and organic farm eggs.", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop", tag: "Traditional" },
      { name: "Huevos Rancheros", price: "$13", desc: "Two fried eggs on corn tortillas with roasted ranchero sauce, authentic refried beans and cactus salad.", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800&auto=format&fit=crop", tag: "Crowd Favorite" },
      { name: "Concha Toast", price: "$11", desc: "Traditional Mexican sweet bread french toast infused with cinnamon and served with seasonal local fruit.", image: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?q=80&w=800&auto=format&fit=crop" },
    ],
    "Main Dishes": [
      { name: "Mole Poblano", price: "$24", desc: "Chicken breast smothered in our signature 24-ingredient dark mole sauce, a recipe preserved for 40 years.", image: "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?q=80&w=800&auto=format&fit=crop", tag: "Artisanal" },
      { name: "Enchiladas Suizas", price: "$19", desc: "Fresh corn tortillas stuffed with shredded chicken, topped with creamy roasted tomatillo sauce and melted swiss cheese.", image: "https://images.unsplash.com/photo-1534352956271-962631593836?q=80&w=800&auto=format&fit=crop" },
      { name: "Chile en Nogada", price: "$22", desc: "Poblano chili stuffed with heritage picadillo, topped with artisanal walnut cream and fresh pomegranate.", image: "https://images.unsplash.com/photo-1619894991209-9f93902340eb?q=80&w=800&auto=format&fit=crop", tag: "Seasonal" },
      { name: "Tamal de Olla", price: "$21", desc: "Stone-ground masa tamale served in its traditional pot with slow-roasted pork and guajillo sauce.", image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=800&auto=format&fit=crop" },
    ],
    "Tacos & Plates": [
      { name: "Al Pastor Trio", price: "$16", desc: "Three heritage pork tacos marinated in adobo, paired with roasted pineapple and fresh habanero salsa.", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop", tag: "Signature" },
      { name: "Carne Asada", price: "$28", desc: "Premium high-plateau skirt steak served with charred cactus, grilled spring onions and fresh lime.", image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=800&auto=format&fit=crop" },
      { name: "Michoacán Carnitas", price: "$18", desc: "Slow-rendered heritage pork, tender inside and perfectly crispy outside. Served with handmade corn tortillas.", image: "https://images.unsplash.com/photo-1611250188496-e966043a062f?q=80&w=800&auto=format&fit=crop" },
    ],
    "Drinks": [
      { name: "Horchata de Arroz", price: "$5", desc: "Refreshing artisanal rice water infused with Mexican cinnamon and Madagascar vanilla.", image: "https://images.unsplash.com/photo-1626074212527-df2bc265c69b?q=80&w=800&auto=format&fit=crop" },
      { name: "Jamaica Hibiscus", price: "$5", desc: "Tart and floral chilled hibiscus tea, naturally sweetened with organic agave.", image: "https://images.unsplash.com/photo-1626074211153-61ba9a835b64?q=80&w=800&auto=format&fit=crop" },
      { name: "Artisanal Mezcal Paloma", price: "$14", desc: "Small-batch mezcal, fresh grapefruit juice, sparkling soda and a chili-salt rim.", image: "https://images.unsplash.com/photo-1587223081156-6159a960431d?q=80&w=800&auto=format&fit=crop", tag: "Premium" },
    ]
  };

  return (
    <section id="menu" className="py-32 bg-[#FDF8F1] relative overflow-hidden">
      {/* Traditional Decorative Flourishes */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-mex-terracotta/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-8 p-3 rounded-full border border-mex-red/10"
          >
            <div className="w-16 h-16 bg-mex-red rounded-full flex items-center justify-center text-white font-serif italic text-2xl font-bold">M</div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-display font-black text-mex-charcoal mb-6 tracking-tight">TRADITIONAL MENU</h2>
          <p className="max-w-2xl text-mex-charcoal/60 font-serif italic text-xl leading-relaxed">
            From the volcanic stone mills to your plate, experience the authentic heartbeat of traditional Mexican cuisine prepared with heritage techniques.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-24 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-10 py-4 rounded-full text-xs font-black uppercase tracking-[0.25em] transition-all whitespace-nowrap ${
                activeCategory === cat 
                ? "bg-mex-red text-white shadow-[0_10px_30px_-5px_rgba(188,84,75,0.4)] scale-105" 
                : "bg-white text-mex-charcoal/40 border border-mex-charcoal/5 hover:text-mex-charcoal hover:border-mex-charcoal/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid - Responsive Layout: Mobile 1, Tablet 2, Desktop 3-4 */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 lg:gap-12"
          >
            {menuItems[activeCategory].map((item, i) => (
              <MenuCard key={item.name} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Decorative Scroll Hint or Bottom Accent */}
        <div className="mt-32 flex justify-center opacity-20">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-px bg-mex-charcoal"></div>
            <div className="w-2 h-2 rounded-full border border-mex-charcoal"></div>
            <div className="w-12 h-px bg-mex-charcoal"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { name: "Isabella Martinez", rating: 5, text: "The most authentic mole I've had outside of Oaxaca. The handmade tortillas are a game changer!", location: "Food Critic" },
    { name: "Robert Wilson", rating: 5, text: "I've been coming here for 10 years and the quality never fails. It feels like eating at a warm Mexican home.", location: "Local Guide" },
    { name: "Sofia Hernandez", rating: 4, text: "Beautiful atmosphere and even better food. Try the Mezcal Paloma, it's perfectly balanced.", location: "Frequent Diner" }
  ];

  return (
    <section className="py-24 bg-mex-cream relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#F2EDE4] p-10 rounded-xl shadow-sm border-l-4 border-mex-gold relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(row.rating)].map((_, i) => (
                  <motion.span 
                    key={i} 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="text-mex-gold"
                  >★</motion.span>
                ))}
              </div>
              <p className="text-lg font-serif italic text-mex-charcoal mb-8 leading-relaxed">"{row.text}"</p>
              <div>
                <p className="font-bold uppercase tracking-widest text-xs">{row.name}</p>
                <p className="text-[10px] text-mex-charcoal/40 uppercase tracking-widest">{row.location}</p>
              </div>
              
              <div className="absolute top-8 right-10 text-mex-red/10 text-6xl font-serif">“</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="visit-us" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="bg-mex-charcoal rounded-[3rem] overflow-hidden grid lg:grid-cols-2 shadow-2xl">
        <div className="p-12 md:p-20 text-white flex flex-col justify-center gap-10">
          <div>
            <h2 className="text-5xl md:text-6xl font-display font-black mb-4">JOIN US FOR DINNER</h2>
            <p className="text-white/60 font-serif italic text-xl">Your table is waiting, Familia.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-mex-terracotta">
                <MapPin size={24} />
                <span className="font-bold uppercase tracking-widest text-sm">Location</span>
              </div>
              <p className="text-white/80 leading-relaxed font-serif">
                123 Avenida del Sol,<br />
                San Francisco, CA 94110
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-mex-terracotta">
                <Clock size={24} />
                <span className="font-bold uppercase tracking-widest text-sm">Hours</span>
              </div>
              <p className="text-white/80 leading-relaxed font-serif">
                Mon - Thu: 11am - 10pm<br />
                Fri - Sun: 10am - 11pm
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-mex-terracotta">
                <Phone size={24} />
                <span className="font-bold uppercase tracking-widest text-sm">Contact</span>
              </div>
              <p className="text-white/80 leading-relaxed font-serif">
                (415) 555-0123<br />
                hola@casadesabor.com
              </p>
            </div>
          </div>

          <div className="pt-4 flex gap-6">
             <button className="bg-mex-red text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-mex-charcoal transition-all">
                Get Directions
             </button>
             <button className="border border-white/20 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                Call Now
             </button>
          </div>
        </div>

        <div className="h-[400px] lg:h-full w-full relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.83543450937!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy"
            className="grayscale invert contrast-125 opacity-80"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-24 border-t border-mex-charcoal/10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-3xl font-serif font-bold text-mex-charcoal tracking-tight">CASA DE SABOR</span>
            <p className="mt-4 text-mex-charcoal/60 font-serif italic max-w-sm">Handcrafted recipes passed down through generations. Authentic Mexican flavors from the heart of our kitchen to your table.</p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-bold uppercase tracking-widest text-[10px] text-mex-red">Location</span>
            <p className="text-sm font-medium">123 Avenida del Sol,<br />San Francisco, CA 94110</p>
          </div>

          <div className="flex flex-col gap-4">
             <span className="font-bold uppercase tracking-widest text-[10px] text-mex-red">Hours</span>
             <p className="text-sm font-medium">Tue—Sun / 11am — 10pm</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-mex-charcoal/5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-mex-charcoal/40">© 2026 Casa de Sabor. All Rights Reserved.</p>
          <div className="flex gap-10">
             <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-mex-charcoal/40 hover:text-mex-red transition-colors">Privacy Policy</a>
             <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-mex-charcoal/40 hover:text-mex-red transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
