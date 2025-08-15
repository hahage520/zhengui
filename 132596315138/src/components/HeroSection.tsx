import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Chinese%20style%20sashimi%20platter%20with%20traditional%20Chinese%20aesthetics%20red%20and%20blue%20colors&sign=29ef765bb195e92e54defc58bb1f6ad0" 
          alt="稹鲑中式刺身" 
          className="w-full h-full object-cover transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D4263]90 via-[#2D4263]50 to-transparent"></div>
      </div>
      
      {/* 装饰性云纹 */}
      <div className="absolute top-0 left-0 w-full h-8 bg-repeat-x z-10" style={{
        backgroundColor: "#9E2A2B",
        backgroundImage: "url('https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Chinese%20traditional%20wave%20pattern%20white&sign=6cb18b250f10438ffc7202c423da7615')",
        backgroundSize: "80px 100%"
      }}></div>
      
      {/* 主要内容 */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          {/* 装饰性标题前缀 */}
          <div className="flex items-center mb-6 opacity-0 animate-in fade-in slide-in-from-left duration-700 delay-150" style={{animationFillMode: 'forwards'}}>
            <div className="w-12 h-0.5 bg-[#9E2A2B] mr-4"></div>
            <span className="text-white/90 text-lg tracking-wider">中式美学 · 刺身新境</span>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              稹鲑<br />
              <span className="text-[#9E2A2B]">以中国风美学</span><br />
              重塑刺身体验
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-gray-100 mb-10 max-w-xl leading-relaxed"
          >
            融合传统中式韵味与现代刺身技艺，每一道菜品都是对食材的尊重与文化的传承，为您带来新鲜、健康、文化交融的中式刺身新食尚。
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button className="bg-[#9E2A2B] hover:bg-[#7a2021] text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg font-medium group">
              <i className="fa-solid fa-utensils mr-2 group-hover:scale-110 transition-transform"></i>
              探索菜单
            </button>
            <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full transition-all duration-300 text-lg font-medium flex items-center justify-center transform hover:-translate-y-1">
              <i className="fa-solid fa-play-circle mr-2"></i>
              品牌故事
            </button>
          </motion.div>
          
          {/* 特色标签 */}
          <div className="mt-16 flex flex-wrap gap-4 opacity-0 animate-in fade-in slide-in-from-left duration-700 delay-500" style={{animationFillMode: 'forwards'}}>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm flex items-center">
              <i className="fa-solid fa-star text-[#9E2A2B] mr-2"></i>
              每日鲜运
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm flex items-center">
              <i className="fa-solid fa-certificate text-[#9E2A2B] mr-2"></i>
              匠心制作
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm flex items-center">
              <i className="fa-solid fa-leaf text-[#9E2A2B] mr-2"></i>
              健康低脂
            </div>
          </div>
        </div>
      </div>
      
      {/* 底部装饰元素 */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
      
      {/* 右侧装饰性元素 */}
      <div className="hidden lg:block absolute top-1/4 right-0 w-1/3 h-full opacity-20 pointer-events-none">
        <img 
          src="https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=Chinese%20traditional%20folding%20fan%20white&sign=dd41ffbebcbbbc17ca915ed3513e09b8" 
          alt="中式折扇" 
          className="w-full h-full object-contain transform translate-x-1/4 rotate-12"
        />
      </div>
      
      {/* 左侧装饰性元素 */}
      <div className="hidden lg:block absolute bottom-20 left-10 w-32 h-32 opacity-30 pointer-events-none">
        <img 
          src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Chinese%20traditional%20circular%20pattern%20white&sign=1a81db81b1b1d80c5bfaf7b13d598c19" 
          alt="中式圆形纹样" 
          className="w-full h-full object-contain animate-spin-slow"
          style={{animationDuration: '30s', animationTimingFunction: 'linear', animationIterationCount: 'infinite'}}
        />
      </div>
      
      {/* 向下滚动指示器 */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a href="#content" className="text-white/80 hover:text-white">
          <i className="fa-solid fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
}