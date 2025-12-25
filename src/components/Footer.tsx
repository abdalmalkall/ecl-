import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Heart,
  Shield,
  Award,
  GraduationCap,
  BookOpen,
  Users,
  Home,
  Info,
  Target,
  Contact,
  Sparkles,
  ArrowUp,
  Globe,
  MessageCircle,
  Calendar,
  Linkedin,
  MessageSquare,
  Download,
  FileText,
  HelpCircle,
  Code,
  Rss,
  Star,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  const quickLinks = [
    { icon: <Home className="w-4 h-4" />, label: "الصفحة الرئيسية", href: "/" },
    { icon: <Info className="w-4 h-4" />, label: "من نحن", href: "/about" },
    { icon: <BookOpen className="w-4 h-4" />, label: "الدورات", href: "/courses" },
    { icon: <GraduationCap className="w-4 h-4" />, label: "التعلم", href: "/learn" },
    { icon: <Target className="w-4 h-4" />, label: "المسارات", href: "/paths" },
    { icon: <Users className="w-4 h-4" />, label: "المجتمع", href: "/community" },
    { icon: <HelpCircle className="w-4 h-4" />, label: "المساعدة", href: "/help" },
  ];

  const resources = [
    { icon: <Download className="w-4 h-4" />, label: "التطبيقات", href: "/apps" },
    { icon: <FileText className="w-4 h-4" />, label: "المستندات", href: "/docs" },
    { icon: <Code className="w-4 h-4" />, label: "واجهة API", href: "/api" },
    { icon: <Rss className="w-4 h-4" />, label: "المدونة", href: "/blog" },
    { icon: <Star className="w-4 h-4" />, label: "الإنجازات", href: "/achievements" },
    { icon: <MessageSquare className="w-4 h-4" />, label: "المنتدى", href: "/forum" },
    { icon: <Calendar className="w-4 h-4" />, label: "الأحداث", href: "/events" },
  ];

  const contactInfo = [
    { icon: <MapPin className="w-4 h-4" />, text: "الدعم متاح حول العالم" },
    { icon: <Phone className="w-4 h-4" />, text: "+1 234 567 8900" },
    { icon: <Mail className="w-4 h-4" />, text: "support@edplatform.com" },
    { icon: <Clock className="w-4 h-4" />, text: "الدعم متاح 24/7" },
  ];

  const socialMedia = [
    { icon: <Facebook className="w-5 h-5" />, label: "فيسبوك", href: "https://facebook.com" },
    { icon: <Instagram className="w-5 h-5" />, label: "إنستجرام", href: "https://instagram.com" },
    { icon: <Twitter className="w-5 h-5" />, label: "تويتر", href: "https://twitter.com" },
    { icon: <Youtube className="w-5 h-5" />, label: "يوتيوب", href: "https://youtube.com" },
    { icon: <Linkedin className="w-5 h-5" />, label: "لينكدإن", href: "https://linkedin.com" },
    { icon: <MessageCircle className="w-5 h-5" />, label: "واتساب", href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 overflow-hidden">
      {/* خلفيات زخرفية */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-indigo-500/5 to-transparent rounded-full blur-2xl"></div>
        
        {/* خطوط زخرفية */}
        <div className="absolute top-20 left-20 w-px h-40 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"></div>
        <div className="absolute bottom-20 right-20 w-px h-40 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"></div>
        
        {/* نقاط متناثرة */}
        <div className="absolute top-40 right-1/4 w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-60 left-1/3 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* شريط العودة للأعلى */}
      <div className="relative z-20">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
          
          {/* معلومات المنصة */}
          <div className="text-center lg:text-right lg:col-span-2">
            <div className="relative inline-block mb-6 md:mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-30"></div>
              
              {/* استبدال الصورة بعنصر SVG أو أيقونة */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto lg:mx-0 object-contain floating-animation rounded-2xl shadow-2xl border-4 border-white/10 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                <div className="text-white text-4xl md:text-5xl font-bold">
                  E
                </div>
                <Sparkles className="absolute -top-2 -right-2 w-5 h-5 md:w-6 md:h-6 text-blue-400 animate-pulse" />
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                المنصة التعليمية الذكية
              </span>
            </h3>
            
            <div className="space-y-3 md:space-y-4 text-slate-400 text-sm md:text-base">
              <div className="flex items-center justify-center lg:justify-end gap-2">
                <Zap className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                <p className="font-medium">تعليم ذكي لمستقبل أفضل</p>
              </div>
              <div className="flex items-center justify-center lg:justify-end gap-2">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                <p>تعلم آمن وموثوق</p>
              </div>
              <div className="flex items-center justify-center lg:justify-end gap-2">
                <Globe className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                <p>متاح حول العالم</p>
              </div>
            </div>
          </div>
          
          {/* الروابط السريعة */}
          <div className="text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-end gap-3 mb-6 md:mb-8">
              <div className="p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-white">الروابط الرئيسية</h4>
            </div>
            
            <div className="space-y-2 md:space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group flex items-center justify-center lg:justify-end gap-3 text-sm md:text-base p-2 md:p-3 rounded-lg hover:bg-white/5 transition-all duration-300 hover:translate-x-1"
                >
                  <span className="text-slate-300 group-hover:text-blue-300 transition-colors duration-300">
                    {link.label}
                  </span>
                  <div className="p-1.5 md:p-2 bg-white/5 rounded group-hover:bg-blue-500/20 transition-colors duration-300">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* المصادر */}
          <div className="text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-end gap-3 mb-6 md:mb-8">
              <div className="p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-white">المصادر</h4>
            </div>
            
            <div className="space-y-2 md:space-y-3">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.href}
                  className="group flex items-center justify-center lg:justify-end gap-3 text-sm md:text-base p-2 md:p-3 rounded-lg hover:bg-white/5 transition-all duration-300 hover:translate-x-1"
                >
                  <span className="text-slate-300 group-hover:text-purple-300 transition-colors duration-300">
                    {resource.label}
                  </span>
                  <div className="p-1.5 md:p-2 bg-white/5 rounded group-hover:bg-purple-500/20 transition-colors duration-300">
                    {resource.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* التواصل الاجتماعي والاشتراك */}
          <div className="text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-end gap-3 mb-6 md:mb-8">
              <div className="p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg">
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-white">ابقَ على اتصال</h4>
            </div>
            
            {/* النشرة البريدية */}
            <form onSubmit={handleSubscribe} className="mb-6 md:mb-8">
              <div className="relative mb-4">
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="بريدك الإلكتروني"
                  className="w-full pr-10 pl-4 py-2.5 md:py-3 text-sm md:text-base bg-white/10 backdrop-blur-sm rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full py-2.5 md:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg hover:shadow-lg transform transition-all duration-300 hover:scale-[1.02] text-sm md:text-base"
              >
                <span className="flex items-center justify-center gap-2">
                  اشترك في النشرة
                  <Heart className="w-4 h-4" />
                </span>
              </Button>
            </form>
            
            {/* وسائل التواصل الاجتماعي */}
            <div className="mb-6 md:mb-8">
              <p className="text-slate-400 text-sm mb-3 md:mb-4">تابعنا على:</p>
              <div className="flex flex-wrap justify-center lg:justify-end gap-2 md:gap-3">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-2.5 md:p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-md"
                  >
                    <div className="relative">
                      {social.icon}
                      <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* معلومات الاتصال */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center lg:justify-end gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <span className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">
                    {info.text}
                  </span>
                  <div className="p-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded">
                    {info.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* حقوق النشر */}
        <div className="border-t border-slate-700 pt-8 md:pt-12 mt-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between">
            {/* معلومات حقوق النشر */}
            <div className="text-center md:text-right order-2 md:order-1">
              <p className="text-slate-400 text-sm md:text-base">
                جميع الحقوق محفوظة © 
                <span className="font-semibold text-blue-300 mx-1 md:mx-2">
                  المنصة التعليمية الذكية
                </span>
                {new Date().getFullYear()}
              </p>
            </div>
            
            {/* الشعارات */}
            <div className="flex justify-center items-center gap-4 md:gap-6 order-1 md:order-2">
              <div className="p-2 md:p-3 bg-white/5 backdrop-blur-sm rounded-lg">
                <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
              </div>
              <div className="p-2 md:p-3 bg-white/5 backdrop-blur-sm rounded-lg">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
              </div>
              <div className="p-2 md:p-3 bg-white/5 backdrop-blur-sm rounded-lg">
                <Award className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
              </div>
            </div>
            
            {/* الروابط الإضافية */}
            <div className="text-center md:text-left order-3">
              <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                <a href="#" className="text-slate-400 hover:text-blue-300 transition-colors text-xs md:text-sm">
                  سياسة الخصوصية
                </a>
                <span className="text-slate-600 hidden md:inline">•</span>
                <a href="#" className="text-slate-400 hover:text-blue-300 transition-colors text-xs md:text-sm">
                  شروط الاستخدام
                </a>
                <span className="text-slate-600 hidden md:inline">•</span>
                <a href="#" className="text-slate-400 hover:text-blue-300 transition-colors text-xs md:text-sm">
                  ملفات تعريف الارتباط
                </a>
                <span className="text-slate-600 hidden md:inline">•</span>
                <a href="#" className="text-slate-400 hover:text-blue-300 transition-colors text-xs md:text-sm">
                  الأسئلة الشائعة
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* أنيميشنات CSS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .floating-animation {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        /* تحسينات للجوال */
        @media (max-width: 768px) {
          .container { padding-left: 1rem; padding-right: 1rem; }
        }
        
        /* تحسينات للتابلت */
        @media (min-width: 769px) and (max-width: 1024px) {
          .grid-cols-5 { grid-template-columns: repeat(3, 1fr); }
          .lg\\:col-span-2 { grid-column: span 2; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;