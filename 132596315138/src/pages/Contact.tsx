import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#2D4263] mb-4">联系我们</h1>
            <div className="w-24 h-1 bg-[#9E2A2B] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#2D4263] mb-6">欢迎联系稹鲑</h2>
              <p className="text-lg text-gray-600 mb-8">
                无论您有任何问题、建议或需要预订，我们都将竭诚为您服务。请通过以下方式与我们联系，我们将尽快回复您。
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <i className="fa-solid fa-map-marker mt-1 mr-3 text-[#9E2A2B] text-xl"></i>
                  <div>
                     <h3 className="font-semibold text-[#2D4263]">总部地址</h3>
                     <p className="text-gray-600">上海市宝山区联谊路智慧湾62幢103</p>
                   </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-phone mt-1 mr-3 text-[#9E2A2B] text-xl"></i>
                  <div>
                    <h3 className="font-semibold text-[#2D4263]">联系电话</h3>
      <p className="text-gray-600">17601206753</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-envelope mt-1 mr-3 text-[#9E2A2B] text-xl"></i>
                  <div>
                    <h3 className="font-semibold text-[#2D4263]">电子邮箱</h3>
                     <p className="text-gray-600">449730556@qq.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-clock mt-1 mr-3 text-[#9E2A2B] text-xl"></i>
                  <div>
                    <h3 className="font-semibold text-[#2D4263]">工作时间</h3>
                    <p className="text-gray-600">11:00 - 22:00 (周一至周日)</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#2D4263] mb-6">发送消息</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1" htmlFor="name">姓名</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9E2A2B]"
                      placeholder="您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1" htmlFor="email">邮箱</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9E2A2B]"
                      placeholder="您的邮箱"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="subject">主题</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9E2A2B]"
                    placeholder="消息主题"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="message">消息内容</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9E2A2B]"
                    placeholder="请输入您的消息内容"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-[#9E2A2B] hover:bg-[#7a2021] text-white px-6 py-3 rounded-full transition-colors duration-200 w-full md:w-auto"
                >
                  <i className="fa-solid fa-paper-plane mr-2"></i>发送消息
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}