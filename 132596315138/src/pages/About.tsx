import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#2D4263] mb-4">品牌故事</h1>
            <div className="w-24 h-1 bg-[#9E2A2B] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#2D4263] mb-6">稹鲑的诞生</h2>
              <p className="text-lg text-gray-600 mb-4">
                "稹"在汉语中有细密、严谨之意，代表着我们对食材品质的严格把控，每一个环节都精细入微。"鲑"明确了品牌主打三文鱼等刺身食材，让消费者一目了然。
              </p>
              <p className="text-lg text-gray-600 mb-4">
                稹鲑品牌秉持新鲜、健康、中国风的核心价值。坚持选用每日新鲜直供的优质食材，为消费者带来健康的饮食体验。同时融入丰富中国风元素，从文化内涵到呈现形式，都展现独特的中式魅力。
              </p>
              <p className="text-lg text-gray-600">
                致力于成为中国刺身市场的领军品牌，将中国风与刺身完美融合，不仅为消费者提供美味的刺身产品，更传播中国传统文化，让世界领略中式刺身的独特魅力。
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
               <img 
    src="https://lf-code-agent.coze.cn/obj/x-ai-cn/132596315138/attachment/微信图片_20250815132538_9_20250815132549.jpg" 
                alt="稹鲑品牌环境" 
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
          
          <div className="bg-[#f8f9fa] rounded-xl p-8 mb-20">
            <h2 className="text-3xl font-bold text-[#2D4263] mb-8 text-center">品牌理念</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#9E2A2B]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="fa-solid fa-palette text-[#9E2A2B] text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-[#2D4263]">中国风设计</h3>
                <p className="text-gray-600 text-center">
                  采用中国传统色彩中的朱砂红与黛青色，融入如意云纹等传统图案，打造独特的中式美学。
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#9E2A2B]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="fa-solid fa-fish text-[#9E2A2B] text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-[#2D4263]">新鲜食材</h3>
                <p className="text-gray-600 text-center">
                  严格把控食材品质，只选用来自挪威纯净海域的三文鱼，从捕捞到上桌严格控制在48小时内。
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#9E2A2B]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="fa-solid fa-utensils text-[#9E2A2B] text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-[#2D4263]">创新烹饪</h3>
                <p className="text-gray-600 text-center">
                  融合中式烹饪手法，创新推出中式酱料调味、低温慢煮融合和中式熏制等特色刺身产品。
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#9E2A2B] hover:bg-[#7a2021] text-white px-8 py-3 rounded-full transition-all duration-300 text-lg font-medium"
            >
              <i className="fa-solid fa-calendar-check mr-2"></i>
              立即预订体验
            </motion.button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}