import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LoginSection from "@/components/LoginSection";
import Footer from "@/components/Footer";
import { ArrowLeft, Calculator, Users, Fingerprint, Sparkles, Target, Zap, Brain, Rocket, TrendingUp } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);
  
  const featuredServices = [
    {
      id: 1,
      title: "من نحن",
      description: "تعرف على رؤيتنا ورسالتنا وفريق العمل",
      icon: <Users className="ml-2" size={24} />,
      onClick: () => navigate("/about"),
      gradient: "from-blue-500 to-indigo-600",
      hoverGradient: "hover:from-blue-600 hover:to-indigo-700",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      title: "حاسبة التقدم",
      description: "احسب معدل تقدمك وتتبع مسار تعلمك",
      icon: <Calculator className="ml-2" size={24} />,
      onClick: () => window.open("https://ecl-btec.netlify.app/", "_blank", "noopener,noreferrer"),
      gradient: "from-emerald-500 to-cyan-600",
      hoverGradient: "hover:from-emerald-600 hover:to-cyan-700",
      bgColor: "bg-gradient-to-br from-emerald-50 to-cyan-50",
      iconColor: "text-emerald-600"
    },
    {
      id: 3,
      title: "مدقق الذكاء الاصطناعي",
      description: "تحقق من أصالة المحتوى باستخدام الذكاء الاصطناعي",
      icon: <Fingerprint className="ml-2" size={24} />,
      onClick: () => window.open("https://ai-plagiarism-checkerai.netlify.app/", "_blank", "noopener,noreferrer"),
      gradient: "from-purple-500 to-pink-600",
      hoverGradient: "hover:from-purple-600 hover:to-pink-700",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      iconColor: "text-purple-600"
    },
    {
      id: 4,
      title: "المسار الذكي",
      description: "اختر مسار تعلمك بناءً على مهاراتك",
      icon: <Target className="ml-2" size={24} />,
      onClick: () => navigate("/learning-path"),
      gradient: "from-amber-500 to-orange-600",
      hoverGradient: "hover:from-amber-600 hover:to-orange-700",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      iconColor: "text-amber-600"
    },
    {
      id: 5,
      title: "التعلم السريع",
      description: "دورات مكثفة لتعلم المهارات بسرعة",
      icon: <Zap className="ml-2" size={24} />,
      onClick: () => navigate("/fast-track"),
      gradient: "from-red-500 to-rose-600",
      hoverGradient: "hover:from-red-600 hover:to-rose-700",
      bgColor: "bg-gradient-to-br from-red-50 to-rose-50",
      iconColor: "text-red-600"
    },
    {
      id: 6,
      title: "الذكاء الاصطناعي",
      description: "استخدم الذكاء الاصطناعي لتحسين تعلمك",
      icon: <Brain className="ml-2" size={24} />,
      onClick: () => navigate("/ai-tools"),
      gradient: "from-violet-500 to-purple-600",
      hoverGradient: "hover:from-violet-600 hover:to-purple-700",
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
      iconColor: "text-violet-600"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      {/* الهيدر */}
      <Header />
      
      {/* المحتوى الرئيسي */}
      <main className="flex-1">
        {/* قسم البطل */}
        <HeroSection />
        
        {/* قسم تسجيل الدخول */}
        <LoginSection />
        
        {/* قسم الخدمات المميزة */}
        <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">خدمات حصرية</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              أدوات وخدمات ذكية
              <span className="block text-blue-600 mt-2">لتحسين تجربتك التعليمية</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              اكتشف مجموعة من الأدوات الذكية والخدمات المتطورة المصممة لتحويل تجربة التعلم إلى رحلة ملهمة وفعالة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="group relative"
              >
                {/* البطاقة */}
                <button
                  onClick={service.onClick}
                  className={`
                    relative w-full h-full
                    ${service.bgColor}
                    border border-slate-200
                    rounded-2xl p-6
                    shadow-lg hover:shadow-2xl
                    transform transition-all duration-300
                    hover:scale-[1.02]
                    overflow-hidden
                    flex flex-col items-start text-right
                    min-h-[180px]
                  `}
                >
                  {/* خلفية متحركة */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.gradient.replace('from', 'from').replace('to', 'to')} opacity-5`}></div>
                  
                  {/* الزوايا الزخرفية */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-slate-200/50 rounded-tr-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-slate-200/50 rounded-bl-2xl"></div>
                  
                  {/* المحتوى */}
                  <div className="relative z-10 w-full">
                    {/* الأيقونة */}
                    <div className={`mb-4 p-3 ${service.bgColor} rounded-xl inline-flex items-center justify-center border border-slate-200`}>
                      <div className={service.iconColor}>
                        {service.icon}
                      </div>
                    </div>
                    
                    {/* العنوان */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2 text-right">
                      {service.title}
                    </h3>
                    
                    {/* الوصف */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 text-right">
                      {service.description}
                    </p>
                    
                    {/* زر التفاعل */}
                    <div className={`
                      mt-auto inline-flex items-center gap-2 px-4 py-2
                      bg-gradient-to-r ${service.gradient} ${service.hoverGradient}
                      text-white text-sm font-medium
                      rounded-lg
                      transform transition-all duration-300
                      group-hover:translate-x-1
                    `}>
                      <span>ابدأ الآن</span>
                      <ArrowLeft size={16} className="rotate-180" />
                    </div>
                  </div>
                  
                  {/* خط متحرك عند التحويم */}
                  <div className={`absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>
                </button>
              </div>
            ))}
          </div>
          
          {/* إحصائيات سريعة */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Rocket className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-900">+50%</div>
                  <div className="text-sm text-slate-600">سرعة التعلم</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-100 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-900">95%</div>
                  <div className="text-sm text-slate-600">رضا المستخدمين</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-purple-100 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-900">100K+</div>
                  <div className="text-sm text-slate-600">متعلم نشط</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* زر رجوع إلى الأعلى */}
          <div className="mt-12 text-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-50 to-white text-slate-700 font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-white border border-slate-200 hover:border-blue-200"
            >
              <ArrowLeft size={20} className="rotate-90 text-blue-600" />
              <span>العودة إلى الأعلى</span>
            </button>
          </div>
        </section>
      </main>
      
      {/* الفوتر */}
      <Footer />
    </div>
  );
};

export default Index;