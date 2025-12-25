import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Crown, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Eye,
  Building,
  Sparkles,
  ArrowLeft,
  Shield,
  UserCheck,
  Target,
  Award,
  Zap,
  Star,
  Lock,
  Monitor,
  Briefcase,
  Globe,
  Headphones,
  BarChart,
  Users2,
  FileText,
  Presentation
} from "lucide-react";

const LoginSection = () => {
  const navigate = useNavigate();

  const userTypes = [
    { 
      id: "admin", 
      title: "المشرف العام", 
      icon: <Crown className="w-8 h-8" />, 
      description: "إدارة كاملة للمنصة والتقارير الإحصائية المتقدمة",
      gradient: "from-blue-600 to-purple-600",
      features: ["لوحة التحكم الشاملة", "التقارير التفصيلية", "إدارة المستخدمين", "متابعة الأداء"],
      color: "#3B82F6"
    },
    { 
      id: "instructor", 
      title: "المدرب / المحاضر", 
      icon: <GraduationCap className="w-8 h-8" />, 
      description: "إدارة المحتوى التعليمي وتقييم المتدربين والمتابعة",
      gradient: "from-emerald-500 to-cyan-500",
      features: ["إدارة الدورات", "تقييم المتدربين", "متابعة التقدم", "إنشاء المحتوى"],
      color: "#10B981"
    },
    { 
      id: "learner", 
      title: "المتعلم", 
      icon: <BookOpen className="w-8 h-8" />, 
      description: "الوصول للدورات التعليمية والموارد والاختبارات",
      gradient: "from-indigo-500 to-blue-500",
      features: ["الدورات المتاحة", "الواجبات والاختبارات", "تتبع التقدم", "الشهادات"],
      color: "#6366F1"
    },
    { 
      id: "corporate", 
      title: "الجهات / الشركات", 
      icon: <Briefcase className="w-8 h-8" />, 
      description: "إدارة متدربي الشركات وتقارير التدريب المؤسسي",
      gradient: "from-amber-500 to-orange-500",
      features: ["إدارة فرق العمل", "تقارير المؤسسة", "خطط التدريب", "المتابعة الجماعية"],
      color: "#F59E0B"
    },
    { 
      id: "content-creator", 
      title: "منشئ المحتوى", 
      icon: <Presentation className="w-8 h-8" />, 
      description: "إنشاء وتطوير المحتوى التعليمي للدورات المختلفة",
      gradient: "from-pink-500 to-rose-500",
      features: ["إنشاء المحتوى", "تحديث المواد", "التفاعل مع المتعلمين", "تحليل المحتوى"],
      color: "#EC4899"
    },
    { 
      id: "partner", 
      title: "الشريك الأكاديمي", 
      icon: <Globe className="w-8 h-8" />, 
      description: "المؤسسات التعليمية الشريكة وإدارة المحتوى المشترك",
      gradient: "from-violet-500 to-purple-500",
      features: ["المحتوى المشترك", "التقارير الأكاديمية", "التعاون المؤسسي", "الشراكات"],
      color: "#8B5CF6"
    },
  ];

  return (
    <section className="relative min-h-screen py-16 md:py-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* خلفيات زخرفية */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* دوائر زخرفية */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* خطوط زخرفية */}
        <div className="absolute top-1/4 left-10 w-px h-64 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent"></div>
        <div className="absolute bottom-1/4 right-10 w-px h-64 bg-gradient-to-b from-transparent via-purple-400/10 to-transparent"></div>
        
        {/* نقاط متناثرة */}
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-purple-400/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl mb-8 shadow-lg">
            <div className="p-4 bg-white rounded-xl shadow-inner">
              <Lock className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              بوابة الدخول الذكية
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            اختر نوع الحساب المناسب للوصول إلى خدمات منصتنا التعليمية المتكاملة
            <span className="block text-blue-500 mt-2 font-medium">كل دور يوفر تجربة وخيارات مخصصة حسب احتياجاتك</span>
          </p>
          
          {/* خط زخرفي */}
          <div className="relative w-48 h-1 mx-auto mt-8 md:mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rounded-full blur-sm"></div>
          </div>
        </div>

        {/* بطاقات أنواع المستخدمين */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {userTypes.map((userType, index) => (
            <div
              key={userType.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="relative overflow-hidden h-full border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-blue-200">
                {/* خلفية متدرجة */}
                <div className={`absolute inset-0 bg-gradient-to-br ${userType.gradient} opacity-3 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* تأثير عند التحويم */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-transparent to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <CardContent className="p-6 md:p-8 relative z-10">
                  {/* الأيقونة والدائرة الزخرفية */}
                  <div className="relative mb-6 md:mb-8">
                    <div className="absolute -inset-3 bg-gradient-to-br from-white/50 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className={`relative w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-br ${userType.gradient} rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:rotate-3 transition-all duration-500`}>
                      <div className="text-white transform group-hover:scale-105 transition-transform duration-500">
                        {userType.icon}
                      </div>
                    </div>
                    
                    {/* نجمة صغيرة */}
                    <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* العنوان والوصف */}
                  <div className="text-center space-y-3 md:space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                      {userType.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed min-h-[60px] md:min-h-[70px]">
                      {userType.description}
                    </p>

                    {/* الميزات */}
                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      {userType.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-slate-500">
                          <Star className="w-3 h-3 flex-shrink-0" style={{ color: userType.color }} />
                          <span className="text-right">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* زر الدخول */}
                  <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-100">
                    <Button
                      className={`w-full py-4 md:py-6 bg-gradient-to-r ${userType.gradient} text-white font-bold rounded-lg md:rounded-xl shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-[1.02]`}
                      onClick={() => navigate("/auth")}
                    >
                      <span className="flex items-center justify-center gap-2 text-sm md:text-base">
                        <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                        دخول الآن
                        <Zap className="w-3 h-3 md:w-4 md:h-4" />
                      </span>
                    </Button>
                    
                    {/* مؤشر نشط */}
                    <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </div>
                </CardContent>

                {/* زوايا زخرفية */}
                <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-blue-200/50 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-purple-200/50 rounded-bl-lg"></div>
              </Card>
            </div>
          ))}
        </div>

        {/* قسم الدخول كزائر */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-xl overflow-hidden">
            <div className="p-6 md:p-8 text-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-6">
                <div className="p-3 bg-white/80 rounded-xl shadow-inner">
                  <Eye className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">استكشاف المنصة كزائر</h3>
                  <p className="text-slate-600 text-sm md:text-base mt-1">تصفح المحتوى المتاح بدون تسجيل دخول</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="p-3 md:p-4 bg-white/80 rounded-xl shadow-sm">
                  <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mx-auto mb-2" />
                  <p className="text-xs md:text-sm text-slate-600">تصفح المكتبة الرقمية</p>
                </div>
                <div className="p-3 md:p-4 bg-white/80 rounded-xl shadow-sm">
                  <Monitor className="w-5 h-5 md:w-6 md:h-6 text-purple-500 mx-auto mb-2" />
                  <p className="text-xs md:text-sm text-slate-600">عرض العروض التوضيحية</p>
                </div>
                <div className="p-3 md:p-4 bg-white/80 rounded-xl shadow-sm">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-indigo-500 mx-auto mb-2" />
                  <p className="text-xs md:text-sm text-slate-600">اكتشاف الدورات المتاحة</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button
                  className="px-6 md:px-8 py-4 md:py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02]"
                  onClick={() => navigate("/smart-book")}
                >
                  <span className="flex items-center justify-center gap-2 text-sm md:text-base">
                    <Shield className="w-4 h-4 md:w-5 md:h-5" />
                    استكشاف المنصة
                  </span>
                </Button>
                
                <Button
                  variant="outline"
                  className="px-6 md:px-8 py-4 md:py-5 border-blue-200 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300"
                  onClick={() => navigate("/demo")}
                >
                  <span className="flex items-center justify-center gap-2 text-sm md:text-base">
                    <Headphones className="w-4 h-4 md:w-5 md:h-5" />
                    جولة استكشافية
                  </span>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* إحصائيات وأرقام */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
          <div className="p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg border border-blue-100">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">100K+</div>
            <div className="text-slate-600 font-medium text-sm md:text-base">مستخدم نشط</div>
          </div>
          <div className="p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg border border-purple-100">
            <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1 md:mb-2">98.5%</div>
            <div className="text-slate-600 font-medium text-sm md:text-base">رضا المستخدمين</div>
          </div>
          <div className="p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg border border-indigo-100">
            <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-1 md:mb-2">24/7</div>
            <div className="text-slate-600 font-medium text-sm md:text-base">دعم فني متاح</div>
          </div>
        </div>
      </div>

      {/* أنيميشنات CSS */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        
        /* تحسينات للجوال */
        @media (max-width: 640px) {
          .container { padding-left: 1rem; padding-right: 1rem; }
        }
        
        /* تحسينات للتابلت */
        @media (min-width: 641px) and (max-width: 1024px) {
          .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
};

export default LoginSection;