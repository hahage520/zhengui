import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#2D4263] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* 品牌信息 */}
          <div className="transform transition-transform duration-500 hover:-translate-y-2">
            <div className="flex items-center mb-6">
               <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-3 shadow-lg">
                 <img src="https://lf-code-agent.coze.cn/obj/x-ai-cn/132596315138/attachment/c676dec34a9ffa741f8a7e45c7ed3bcb_20250815124423.png" alt="稹鲑logo" className="w-full h-full object-cover" />
               </div>
              <span className="font-bold text-2xl">稹鲑</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              以严谨态度打造高品质的中式刺身品牌，融合传统与现代，为您带来独特的美食文化体验。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#9E2A2B] transition-all duration-300 transform hover:scale-110">
                <i className="fa-brands fa-weixin"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#9E2A2B] transition-all duration-300 transform hover:scale-110">
                <i className="fa-brands fa-weibo"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#9E2A2B] transition-all duration-300 transform hover:scale-110">
                <i className="fa-brands fa-douyin"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#9E2A2B] transition-all duration-300 transform hover:scale-110">
                <i className="fa-brands fa-xing"></i>
              </a>
            </div>
          </div>
          
          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-8 h-0.5 bg-[#9E2A2B] mr-2"></span>
              快速链接
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <i className="fa-solid fa-angle-right mr-2 text-[#9E2A2B] group-hover:translate-x-1 transition-transform duration-300"></i>
                  首页
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <i className="fa-solid fa-angle-right mr-2 text-[#9E2A2B] group-hover:translate-x-1 transition-transform duration-300"></i>
                  特色菜品
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <i className="fa-solid fa-angle-right mr-2 text-[#9E2A2B] group-hover:translate-x-1 transition-transform duration-300"></i>
                  品牌故事
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <i className="fa-solid fa-angle-right mr-2 text-[#9E2A2B] group-hover:translate-x-1 transition-transform duration-300"></i>
                  门店信息
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                  <i className="fa-solid fa-angle-right mr-2 text-[#9E2A2B] group-hover:translate-x-1 transition-transform duration-300"></i>
                  联系我们
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 联系信息 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-8 h-0.5 bg-[#9E2A2B] mr-2"></span>
              联系我们
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                  <i className="fa-solid fa-map-marker text-[#9E2A2B]"></i>
                </div>
                  <span className="text-gray-300">上海市宝山区联谊路智慧湾62幢103</span>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fa-solid fa-phone text-[#9E2A2B]"></i>
                </div>
                 <span className="text-gray-300">17601206753</span>
              </li>
               <li className="flex items-center">
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                   <i className="fa-brands fa-weixin text-[#9E2A2B]"></i>
                 </div>
                 <div className="flex flex-col items-start">
                   <span className="text-gray-300">微信扫码关注</span>
                   <div className="mt-2 w-24 h-24 bg-white p-1 rounded-md">
                       <img src="https://lf-code-agent.coze.cn/obj/x-ai-cn/132596315138/attachment/微信图片_20250815130952_7_20250815131005.jpg" alt="微信二维码" className="w-full h-full object-contain" />
                   </div>
                 </div>
               </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fa-solid fa-clock text-[#9E2A2B]"></i>
                </div>
                <span className="text-gray-300">11:00 - 22:00 (周一至周日)</span>
              </li>
            </ul>
          </div>
          
          {/* 订阅区域 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-8 h-0.5 bg-[#9E2A2B] mr-2"></span>
              订阅最新资讯
            </h3>
            <p className="text-gray-300 mb-6">订阅我们的 newsletter，获取最新活动和优惠信息</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="您的邮箱地址" 
                className="px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#9E2A2B] text-gray-800 bg-white/5 border border-white/10"
              />
              <button className="bg-[#9E2A2B] hover:bg-[#7a2021] text-white px-5 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center whitespace-nowrap">
                <i className="fa-solid fa-paper-plane mr-2"></i>
                订阅
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">我们尊重您的隐私，不会向第三方分享您的信息</p>
          </div>
        </div>
        
        {/* 版权信息 */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">© 2025 稹鲑中式刺身. 保留所有权利.</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-white transition-colors duration-300 relative group">
                隐私政策
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9E2A2B] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300 relative group">
                使用条款
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9E2A2B] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300 relative group">
                网站地图
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9E2A2B] group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}