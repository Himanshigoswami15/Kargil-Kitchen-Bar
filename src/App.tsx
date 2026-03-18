import { motion } from 'motion/react';
import { Utensils, Flame, MapPin, Info, Coffee, Beer, Instagram } from 'lucide-react';
import { RESTAURANT_MENU } from './constants';

export default function App() {
  return (
    <div className="min-h-screen bg-rich-black relative overflow-hidden selection:bg-olive-leaf/30">
      {/* Rich Background Layers */}
      <div className="fixed inset-0 rich-gradient pointer-events-none" />
      <div className="fixed inset-0 grainy-overlay pointer-events-none z-50" />
      
      {/* Dynamic Lighting */}
      <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-gradient-to-b from-olive-leaf/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-moss/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Section */}
      <header className="relative pt-16 pb-8 px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col items-center"
        >
          {/* Logo Section */}
          <div className="relative mb-8 group">
            {/* Animated Decorative Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-dashed border-olive-leaf/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-dotted border-moss/10 rounded-full"
            />
            
            {/* Shimmering Glow */}
            <div className="absolute inset-0 bg-olive-leaf/10 blur-3xl rounded-full animate-pulse group-hover:bg-olive-leaf/20 transition-colors duration-700" />
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center"
            >
              <img 
                src="https://ik.imagekit.io/j1fgksdwx/ChatGPT%20Image%20Feb%2016,%202026,%2006_12_08%20PM.png?updatedAt=1771245805784" 
                alt="Kargil Kitchen Logo" 
                className="w-full h-full object-contain mix-blend-multiply filter grayscale brightness-90 sepia hue-rotate-[65deg] saturate-[2.5] contrast-125 drop-shadow-[0_0_25px_rgba(96,108,56,0.4)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-12">
            <div className="h-[0.5px] w-8 bg-gradient-to-r from-transparent via-olive-leaf/30 to-transparent" />
            <p className="font-serif italic text-stone-400 tracking-[0.2em] text-sm md:text-base">
              "Where Tradition Meets the Art of Taste"
            </p>
            <div className="h-[0.5px] w-8 bg-gradient-to-r from-transparent via-olive-leaf/30 to-transparent" />
          </div>
        </motion.div>
      </header>

      {/* Main Menu Content */}
      <main className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
        <div className="flex flex-col gap-32">
          {RESTAURANT_MENU.map((section, sectionIdx) => (
            <div key={section.title} className="space-y-8">
              {/* Section Header */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center justify-between gap-6 px-4"
              >
                <div className="space-y-1 text-center md:text-left">
                  <span className="font-mono text-[10px] text-olive-leaf/60 uppercase tracking-[0.4em]">Premium Selection</span>
                  <h2 className="font-serif text-5xl md:text-6xl font-medium text-stone-100">
                    {section.title}
                  </h2>
                </div>
                <div className="flex items-center gap-8">
                  <div className="w-14 h-14 rounded-full bg-white/[0.03] border border-white/5 flex items-center justify-center">
                    {section.title === "Beer Selection" ? (
                      <Beer className="w-6 h-6 text-olive-leaf/70" />
                    ) : (
                      <Utensils className="w-6 h-6 text-olive-leaf/70" />
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Menu Items as Individual Cards - Responsive Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
                {section.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: itemIdx * 0.1, duration: 0.8 }}
                    className="glass-panel rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group/item cursor-default hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between"
                  >
                    {/* Subtle Item Highlight */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-olive-leaf/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-700" />

                    <div className="space-y-6">
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-start gap-4">
                          <h3 className="font-serif text-2xl md:text-3xl font-medium text-stone-100 group-hover/item:text-olive-leaf transition-colors duration-500 leading-tight">
                            {item.name}
                          </h3>
                          <div className="hidden sm:flex items-center gap-4 shrink-0">
                            <div className="text-center">
                              <span className="font-mono text-olive-leaf text-2xl font-medium tracking-tighter">
                                ₹{item.singlePrice}
                              </span>
                            </div>
                            {item.towerPrice && (
                              <div className="text-center">
                                <span className="font-mono text-stone-100 text-2xl font-medium tracking-tighter">
                                  ₹{item.towerPrice}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] uppercase tracking-widest text-olive-leaf font-bold">
                            {item.category}
                          </span>
                          <div className="w-[1px] h-2 bg-white/10" />
                          <span className="text-[10px] uppercase tracking-widest text-stone-500">
                            {item.type}
                          </span>
                        </div>
                      </div>
                      
                      <p className="font-sans text-sm text-stone-500 leading-relaxed font-light group-hover/item:text-stone-300 transition-colors duration-500 italic">
                        "{item.description}"
                      </p>
                    </div>

                    {/* Mobile/Small Screen Pricing Row */}
                    <div className="sm:hidden mt-8 flex items-center justify-between w-full bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                      <div className="flex flex-col">
                        <span className="text-[8px] uppercase tracking-widest text-stone-600 mb-1">Single</span>
                        <span className="font-mono text-olive-leaf text-2xl font-medium tracking-tighter">
                          ₹{item.singlePrice}
                        </span>
                      </div>
                      {item.towerPrice && (
                        <div className="flex flex-col text-right">
                          <span className="text-[8px] uppercase tracking-widest text-stone-600 mb-1">Tower</span>
                          <span className="font-mono text-stone-100 text-2xl font-medium tracking-tighter">
                            ₹{item.towerPrice}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="flex flex-col items-center gap-16">
            <div className="flex flex-wrap justify-center gap-12 text-stone-600">
              <div className="flex items-center gap-3">
                <Utensils className="w-4 h-4 opacity-20" />
                <span className="text-[9px] uppercase tracking-[0.5em] font-semibold">Dine with Passion</span>
              </div>
            </div>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="space-y-4">
              <p className="font-serif italic text-stone-500 text-lg">
                "A Symphony of Spice and Soul."
              </p>
              <div className="flex items-center justify-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Instagram className="w-3 h-3 text-stone-500" />
                <p className="font-sans text-[9px] text-stone-700 uppercase tracking-[0.4em]">
                  kargilkitchenrestro
                </p>
              </div>
              <div className="pt-4 flex flex-col items-center gap-2 opacity-40 hover:opacity-80 transition-opacity duration-300">
                <p className="font-sans text-[8px] text-stone-700 uppercase tracking-[0.3em]">
                  Design by
                </p>
                <div className="flex items-center gap-1.5">
                  <Instagram className="w-2.5 h-2.5 text-stone-500" />
                  <p className="font-sans text-[8px] text-stone-700 uppercase tracking-[0.2em]">
                    qreativemenus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.footer>
      </main>

      {/* Rich Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[10%] -left-[10%] w-[40rem] h-[40rem] border border-olive-leaf/[0.03] rounded-full blur-sm" />
        <div className="absolute bottom-[10%] -right-[10%] w-[50rem] h-[50rem] border border-moss/[0.03] rounded-full blur-sm" />
      </div>
    </div>
  );
}
