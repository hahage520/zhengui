import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { Footer } from '@/components/Footer';

import { motion } from 'framer-motion';

export default function Home() {
  // 模拟特色菜品数据
  const featuredDishes = [
    {
      id: 1,
      name: "如意三文鱼卷",
      description: "以三文鱼为主料，卷入黄瓜丝、胡萝卜丝、紫苏叶等食材，搭配中式特制甜面酱",
      price: "88元",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Chinese%20style%20salmon%20roll%20with%20traditional%20pattern&sign=672e1333fece211978a3cb6bbbba44e6"
    },
    {
      id: 2,
      name: "山水刺身拼盘",
      description: "以中国山水画为灵感设计的刺身拼盘，包含三文鱼、金枪鱼、北极贝等",
      price: "168元",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Chinese%20landscape%20style%20sashimi%20platter&sign=78be7510dc3a1f20905baf0d6606e4aa"
    },
    {
      id: 3,
      name: "中式熏制鳗鱼",
      description: "运用中式熏制手法，选取优质鳗鱼用果木熏制，搭配特制酱汁",
      price: "128元",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Chinese%20style%20smoked%20eel%20dish&sign=37bf71eb740ec3c7d6a5e4655f39fa5b"
    }
  ];
  
  // 模拟顾客评价数据
  const testimonials = [
    {
      id: 1,
      name: "张先生",
      avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=middle-aged%20Chinese%20man%20avatar&sign=0317d5095f3ee6b60ffa3ea8c9510fd4",
      comment: "环境雅致，菜品精美，尤其是山水刺身拼盘，不仅味道鲜美，摆盘也极具中国风意境。",
      rating: 5
    },
    {
      id: 2,
      name: "李女士",
      avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=middle-aged%20Chinese%20woman%20avatar&sign=ae96e84ca2859d3ef1688dabdb3f2f44",
      comment: "作为刺身爱好者，这里的中式创新做法让我眼前一亮，尤其是熏制鳗鱼，风味独特。",
      rating: 5
    },
    {
      id: 3,
      name: "王先生",
      avatar: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=young%20Chinese%20man%20avatar&sign=4ac94ccebc05d68cf1bb4fc88d2b9e44",
      comment: "服务周到，食材新鲜，是我在上海吃过的最有特色的刺身店之一，强烈推荐！",
      rating: 4
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        {/* 主要内容区域 */}
        <div id="content" className="container mx-auto px-4 py-16">
          {/* 特色菜品区域 */}
          <section className="mb-24 scroll-mt-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2D4263] mb-4 inline-block relative">
                特色菜品
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#9E2A2B]"></span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-8">
                融合传统中式韵味与现代刺身技艺，每一道菜品都是对食材的尊重与文化的传承
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDishes.map((dish, index) => (
                <motion.div 
                  key={dish.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={dish.imageUrl} 
                      alt={dish.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-[#9E2A2B] text-white text-sm font-bold px-3 py-1 rounded-full">
                      {dish.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2D4263] mb-2 group-hover:text-[#9E2A2B] transition-colors duration-300">
                      {dish.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {dish.description}
                    </p>
                    <button className="w-full bg-[#f8f9fa] hover:bg-[#2D4263] text-[#2D4263] hover:text-white py-2 rounded-lg transition-colors duration-300 flex items-center justify-center">
                      <span>查看详情</span>
                      <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#2D4263] hover:bg-[#1a2940] transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                查看全部菜品
                <i className="fa-solid fa-long-arrow-right ml-2"></i>
              </button>
            </div>
          </section>
          
          {/* 品牌故事简介 */}
          <section className="mb-24 bg-[#f8f9fa] rounded-3xl overflow-hidden scroll-mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="text-[#9E2A2B] font-semibold tracking-wider">品牌故事</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#2D4263] mt-2 mb-6">
                    以匠心传承<br />中式刺身文化
                  </h2>
                  <div className="w-20 h-1 bg-[#9E2A2B] mb-8"></div>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  "稹"在汉语中有细密、严谨之意，代表着我们对食材品质的严格把控，每一个环节都精细入微。"鲑"明确了品牌主打三文鱼等刺身食材，让消费者一目了然。
                </p>
                
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  稹鲑品牌秉持新鲜、健康、中国风的核心价值。坚持选用每日新鲜直供的优质食材，为消费者带来健康的饮食体验。
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#9E2A2B]/10 flex items-center justify-center mr-4">
                      <i className="fa-solid fa-trophy text-[#9E2A2B] text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2D4263]">品质保证</h3>
                      <p className="text-gray-500 text-sm">精选全球优质食材</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#9E2A2B]/10 flex items-center justify-center mr-4">
                      <i className="fa-solid fa-award text-[#9E2A2B] text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2D4263]">匠心工艺</h3>
                      <p className="text-gray-500 text-sm">传承与创新结合</p>
                    </div>
                  </div>
                </div>
                
                <a href="/about" className="inline-flex items-center text-[#9E2A2B] font-medium hover:text-[#7a2021] transition-colors duration-300">
                  了解更多品牌故事
                  <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                </a>
              </div>
              
              <div className="relative h-80 lg:h-auto">
                 <img 
                  src="https://lf-code-agent.coze.cn/obj/x-ai-cn/132596315138/attachment/微信图片_2025-08-15_125926_909_20250815125942.jpg" 
                  alt="稹鲑品牌环境" 
                   className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </section>
          
          {/* 顾客评价 */}
          <section className="mb-24 scroll-mt-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#2D4263] mb-4 inline-block relative">
                顾客评价
                <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#9E2A2B]"></span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-8">
                来自我们尊贵顾客的真实评价，每一条都是对我们最大的鼓励
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-[#f8f9fa]"
                    />
                    <div>
                      <h4 className="font-bold text-[#2D4263] text-lg">{testimonial.name}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={`fa-solid fa-star ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 italic relative">
                    <i className="fa-solid fa-quote-left text-[#9E2A2B]/20 text-4xl absolute -top-4 -left-2"></i>
                    {testimonial.comment}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* 门店信息 */}
          <section className="mb-24 bg-[#2D4263] rounded-3xl overflow-hidden text-white scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  欢迎光临我们的门店
                </h2>
                
                <p className="text-white/80 mb-8 text-lg leading-relaxed">
                  我们在全国多个城市设有门店，每一家门店都融合了传统中式美学与现代设计元素，为您提供舒适雅致的用餐环境。
                </p>
                
                <div className="space-y-6 mb-8">

                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <i className="fa-solid fa-map-marker text-[#9E2A2B]"></i>
                    </div>
                    <div>
                       <h4 className="font-bold text-xl mb-1">上海总店</h4>
                      <p className="text-white/70">上海市宝山区联谊路智慧湾62幢N301</p>
                    </div>
                  </div>
                  

                </div>
                
                <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-[#2D4263] bg-white hover:bg-[#f1f1f1] transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-fit">
                  查看全部门店
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </div>
              
               <div className="relative h-80 md:h-auto overflow-hidden">
                 <img 
                   src="https://lf-code-agent.coze.cn/obj/x-ai-cn/132596315138/attachment/a0e2855ce29826b6a9808eaa40459d54_20250815125553.jpg" 
                   alt="稹鲑门店外观" 
                   className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </section>
          
          {/* 预约区域 */}
          <section className="text-center mb-16 scroll-mt-20">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#2D4263] to-[#1A6B8C] rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                立即预约，体验中式刺身新境界
              </h2>
              
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                提前预约可享优先入座权及专属菜品推荐服务，让您的用餐体验更加完美
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#9E2A2B] hover:bg-[#7a2021] text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg font-medium">
                  <i className="fa-solid fa-calendar-check mr-2"></i>
                  在线预约
                </button>
                 <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1 text-lg font-medium">
                  <i className="fa-solid fa-phone mr-2"></i>
                  电话预约：17601206753
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}