import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-[#2D4263] bg-opacity-95 backdrop-blur-md absolute top-0 left-0 w-full z-50 transition-all duration-300 text-lg" id="main-header">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
                <div className="w-12 h-12 flex items-center justify-center mr-3 bg-white rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                   <img src="https://lf-code-agent.coze.cn/obj/x-ai-cn/132596315138/attachment/c676dec34a9ffa741f8a7e45c7ed3bcb_20250815122331.png" alt="稹鲑logo" className="w-full h-full object-cover" />
               </div>
              <span className="text-white font-bold text-2xl drop-shadow-md">稹鲑</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-[#9E2A2B] font-medium transition-colors duration-200 relative group py-2"
            >
              首页
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9E2A2B] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/products" 
              className="text-white hover:text-[#9E2A2B] font-medium transition-colors duration-200 relative group py-2"
            >
              特色菜品
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9E2A2B] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-[#9E2A2B] font-medium transition-colors duration-200 relative group py-2"
            >
              品牌故事
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9E2A2B] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/locations" 
              className="text-white hover:text-[#9E2A2B] font-medium transition-colors duration-200 relative group py-2"
            >
              门店信息
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9E2A2B] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>
          
          {/* Reservation Button */}
          <div className="hidden md:block">
            <button className="bg-[#9E2A2B] hover:bg-[#7a2021] text-white px-6 py-2.5 rounded-full transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <i className="fa-solid fa-calendar-check mr-2"></i>
              立即预订
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#9E2A2B] bg-white/10 backdrop-blur-sm p-2 rounded-full"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-xl rounded-b-2xl mx-4 mt-2 overflow-hidden animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-4 space-y-1">
            <Link 
              to="/" 
              className="block text-[#2D4263] hover:text-[#9E2A2B] font-medium py-3 px-4 rounded-lg hover:bg-[#f8f9fa] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              首页
            </Link>
            <Link 
              to="/products" 
              className="block text-[#2D4263] hover:text-[#9E2A2B] font-medium py-3 px-4 rounded-lg hover:bg-[#f8f9fa] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              特色菜品
            </Link>
            <Link 
              to="/about" 
              className="block text-[#2D4263] hover:text-[#9E2A2B] font-medium py-3 px-4 rounded-lg hover:bg-[#f8f9fa] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              品牌故事
            </Link>
            <Link 
              to="/locations" 
              className="block text-[#2D4263] hover:text-[#9E2A2B] font-medium py-3 px-4 rounded-lg hover:bg-[#f8f9fa] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              门店信息
            </Link>
            <button className="w-full bg-[#9E2A2B] hover:bg-[#7a2021] text-white px-4 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center mt-2 shadow-md">
              <i className="fa-solid fa-calendar-check mr-2"></i>
              立即预订
            </button>
          </div>
        </div>
      )}
    </header>
  );
}