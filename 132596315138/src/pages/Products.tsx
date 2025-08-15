import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Products() {
  // 模拟产品数据
  const products = [
    {
      id: 1,
      name: "如意三文鱼卷",
      description: "以三文鱼为主料，卷入黄瓜丝、胡萝卜丝、紫苏叶等食材，搭配中式特制甜面酱",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Chinese%20style%20salmon%20roll%20with%20traditional%20pattern&sign=672e1333fece211978a3cb6bbbba44e6",
      price: "88元"
    },
    {
      id: 2,
      name: "山水刺身拼盘",
      description: "以中国山水画为灵感设计的刺身拼盘，包含三文鱼、金枪鱼、北极贝等",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Chinese%20landscape%20style%20sashimi%20platter&sign=78be7510dc3a1f20905baf0d6606e4aa",
      price: "168元"
    },
    {
      id: 3,
      name: "中式熏制鳗鱼",
      description: "运用中式熏制手法，选取优质鳗鱼用果木熏制，搭配特制酱汁",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Chinese%20style%20smoked%20eel%20dish&sign=37bf71eb740ec3c7d6a5e4655f39fa5b",
      price: "128元"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#2D4263] mb-4">特色菜品</h1>
            <div className="w-24 h-1 bg-[#9E2A2B] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#2D4263] mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#9E2A2B] font-bold text-xl">{product.price}</span>
                    <button className="bg-[#2D4263] hover:bg-[#1a2940] text-white px-4 py-2 rounded-full transition-colors duration-200 text-sm">
                      <i className="fa-solid fa-cart-plus mr-1"></i> 加入购物车
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}