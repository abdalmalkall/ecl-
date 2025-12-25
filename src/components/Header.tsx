const Header = () => {
  return (
    <header className="bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg border-b border-gray-200 sticky top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          
          {/* الجزء الأول: الشعار والاسم */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* الشعار */}
            <div className="relative">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl md:text-3xl font-bold">E</span>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl blur-md"></div>
            </div>
            
            {/* النصوص */}
            <div className="text-center md:text-right">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
                المنصة التعليمية
              </h1>
              <p className="text-sm md:text-base text-gray-600 mt-1">
                للتعليم الإلكتروني والتطوير المهني
              </p>
            </div>
          </div>
          
          {/* الجزء الثاني: عناصر التنقل */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* روابط سريعة */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                الرئيسية
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                الدورات
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                المكتبة
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                التواصل
              </a>
            </div>
            
            {/* زر دخول / حساب */}
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg font-medium text-sm md:text-base">
                دخول المستخدم
              </button>
              
              {/* زر القائمة للموبايل */}
              <button className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* القائمة المنسدلة للموبايل */}
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-col gap-3">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 px-4 hover:bg-gray-50 rounded-lg">
              الرئيسية
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 px-4 hover:bg-gray-50 rounded-lg">
              الدورات
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 px-4 hover:bg-gray-50 rounded-lg">
              المكتبة
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 px-4 hover:bg-gray-50 rounded-lg">
              التواصل
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;