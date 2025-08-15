import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Locations() {
  // 模拟门店数据
  const locations = [
    {
      id: 1,
      name: "北京国贸店",
      address: "北京市朝阳区建国路88号国贸商城三期L501",
      phone: "010-88887777",
      hours: "11:00 - 22:00",
      imageUrl: "https://lf-code-agent.coze.cn/obj/x-ai-cn/132596315138/attachment/a0e2855ce29826b6a9808eaa40459d54_20250815133524.jpg"
    },
    {
      id: 2,
      name: "上海外滩店",
      address: "上海市黄浦区中山东一路3号外滩金融中心N301",
      phone: "021-66668888",
      hours: "11:00 - 23:00",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Traditional%20Chinese%20restaurant%20facade%20with%20modern%20elements&sign=f9264d80fad3484e6fa6d9c58fa4fd7b"
    },
    {
      id: 3,
      name: "广州天河店",
      address: "广州市天河区天河路385号太古汇商场L302",
      phone: "020-99996666",
      hours: "11:00 - 22:00",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Chinese%20style%20dining%20area%20with%20traditional%20decorations&sign=774cdd025aad87d922e52fef34b679ab"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-[#2D4263] mb-4">门店信息</h1>
            <div className="w-24 h-1 bg-[#9E2A2B] mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">探索我们的门店，体验独特的中式刺身文化</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <div key={location.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={location.imageUrl} 
                    alt={location.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D4263]90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">上海总店</h3>
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