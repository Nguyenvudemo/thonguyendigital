/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  ShoppingBag, 
  Sparkles, 
  TrendingUp, 
  PenTool, 
  Code, 
  Zap, 
  Heart, 
  Cpu, 
  Check, 
  Phone, 
  ArrowRight, 
  MapPin, 
  Mail, 
  MessageSquare, 
  Calendar, 
  Users, 
  Award, 
  ChevronDown, 
  Copy, 
  Plus, 
  Menu, 
  X, 
  ExternalLink, 
  ShieldCheck, 
  Database, 
  Trash2, 
  CheckCircle2,
  Clock
} from 'lucide-react';

// Import ảnh đại diện đã được tạo bởi AI
// @ts-ignore
import avatarImage from './assets/images/tho_nguyen_avatar_1783039011260.jpg';

/**
 * =========================================================================
 * BẢN HƯỚNG DẪN TÙY CHỈNH CHO NGƯỜI SỬ DỤNG (VIETNAMESE CUSTOMIZATION GUIDE)
 * =========================================================================
 * 
 * Thân gửi anh Thọ Nguyễn, anh có thể dễ dàng thay đổi toàn bộ nội dung của trang
 * Ladipage này bằng cách chỉnh sửa đối tượng `CONFIG` dưới đây.
 * 
 * 1. THAY ẢNH ĐẠI DIỆN:
 *    Anh có thể đổi đường dẫn 'avatar' trong CONFIG.images thành link ảnh của anh 
 *    (ví dụ: từ Facebook, Drive công khai hoặc link ảnh CDN bất kỳ).
 * 
 * 2. THAY ĐỔI MÀU SẮC CHỦ ĐẠO:
 *    Mặc định trang web sử dụng tông màu Slate tối giản kết hợp với dải màu Neon Cyan & Indigo 
 *    mang đậm chất "Digital AI". Anh có thể thay đổi các mã màu CSS/Tailwind trong CONFIG.theme.
 * 
 * 3. LIÊN KẾT GOOGLE FORM:
 *    Nếu anh có link Google Form, hãy điền vào `CONFIG.googleFormLink`. Khi đó, khi khách hàng
 *    nhấn Đăng ký, trang web sẽ lưu lại tại hệ thống nội bộ đồng thời dẫn khách đến form của anh.
 * 
 * 4. SỐ ĐIỆN THOẠI & ZALO:
 *    Thay số điện thoại của anh trong `CONFIG.hotline`. Số này sẽ tự động liên kết với nút gọi điện
 *    và link nhắn tin Zalo nhanh.
 * =========================================================================
 */

const CONFIG = {
  // === THÔNG TIN THƯƠNG HIỆU & LIÊN HỆ ===
  brandName: "Thọ Nguyễn Digital AI",
  tagline: "Đột phá doanh số bán hàng bằng sức mạnh AI & Landing Page tối ưu",
  hotline: "098.6467.014",
  zaloLink: "https://zalo.me/0986467014", // Đường dẫn Zalo cá nhân (tự động mở cửa sổ chat)
  email: "contact@thonguyendigital.vn",
  address: "Hà Nội, Việt Nam",
  googleFormLink: "", // Điền link Google Form của anh vào đây nếu có (ví dụ: "https://docs.google.com/forms/d/e/.../viewform")

  // === MÀU SẮC CHỦ ĐẠO ===
  theme: {
    primaryGrad: "from-cyan-400 via-indigo-500 to-purple-600",
    textGradient: "bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent",
    primaryBg: "bg-indigo-600",
    primaryBorder: "border-indigo-500/30",
  },

  // === THƯ VIỆN HÌNH ẢNH ===
  images: {
    avatar: avatarImage, // Sử dụng ảnh chân dung chuyên nghiệp được tạo bởi AI
    heroBg: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1920&auto=format&fit=crop", // Ảnh nghệ thuật AI công nghệ
    aboutPic: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop", // Ảnh làm việc đội nhóm marketing
    services: {
      ladipage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop", // Thiết kế web/ladipage
      ads: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop", // Quảng cáo Ads
      content: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop" // Viết lách/content sáng tạo
    }
  },

  // === NỘI DUNG HERO SECTION ===
  hero: {
    badge: "⚡ THỜI ĐẠI MARKETING BẰNG AI",
    greeting: "Xin chào, tôi là Thọ Nguyễn Digital AI",
    headline: "GIÚP BẠN ĐỘT PHÁ KHÁCH HÀNG CHỦ ĐỘNG MỖI NGÀY",
    subheadline: "Tôi chuyên sâu thiết kế Ladipage chuẩn AI chỉ trong 30 phút, viết content thu hút và tối ưu quảng cáo đa kênh dành riêng cho chiến thần bán căn hộ (BĐS) & cá nhân kinh doanh online.",
    ctaMain: "Nhận Bản Tư Vấn Ladipage AI Miễn Phí",
    ctaSub: "Trò chuyện qua Zalo",
  },

  // === NỘI DUNG PHẦN "TÔI GIÚP AI" (Target Audience) ===
  whoIHelp: {
    title: "Đối Tượng Khách Hàng Tôi Giúp Đỡ",
    subtitle: "Tôi thấu hiểu sâu sắc nỗi đau của bạn và mang tới giải pháp thay đổi cục diện bán hàng",
    audiences: [
      {
        id: "target-1",
        title: "Chiến Thần Sale Bán Căn Hộ (Bất Động Sản)",
        painPoints: [
          "Quảng cáo tốn kém chi phí nhưng nhận toàn số rác, số không liên lạc được.",
          "Gọi điện lạnh (Telesale) cả ngày mệt mỏi nhưng liên tục bị khách cúp máy.",
          "Thiếu một trang giới thiệu dự án trực quan, đầy đủ hình ảnh căn hộ mẫu và mặt bằng để thuyết phục khách hàng đẳng cấp."
        ],
        solutions: [
          "Thiết kế Ladipage dự án chuyên nghiệp bám sát từng phân khu, hiển thị bảng giá & tiến độ.",
          "Tích hợp form đăng ký nhận tài liệu VIP, giúp khách có nhu cầu thực sự chủ động để lại thông tin.",
          "Cài đặt hệ thống gửi email/Zalo báo giá tự động cho khách đăng ký."
        ],
        badge: "Dành cho Sale BĐS",
        icon: "Home",
        colorClass: "from-cyan-500/10 to-indigo-500/10 border-cyan-500/30"
      },
      {
        id: "target-2",
        title: "Cá Nhân Kinh Doanh Online (Bán Lẻ)",
        painPoints: [
          "Phụ thuộc quá nhiều vào inbox/chat tay, phản hồi muộn dẫn đến mất đơn.",
          "Nội dung quảng cáo cũ kỹ, nhàm chán, tỷ lệ chuyển đổi đơn hàng dưới 1%.",
          "Khách vào trang rồi đi mất mà không để lại bất kỳ dấu vết nào để bám đuổi."
        ],
        solutions: [
          "Tạo trang Ladipage bán hàng độc lập (Single Product), làm bật tính năng, feedback và nút Mua ngay.",
          "Gắn các pixel đo lường thông minh (Facebook, TikTok, Google) để chạy quảng cáo bám đuổi (Retargeting).",
          "Tối ưu quy trình điền form đặt hàng siêu nhanh trên thiết bị di động chỉ với 2 lần chạm."
        ],
        badge: "Dành cho Kinh Doanh Online",
        icon: "ShoppingBag",
        colorClass: "from-purple-500/10 to-pink-500/10 border-purple-500/30"
      }
    ]
  },

  // === NỘI DUNG PHẦN "DỊCH VỤ CHÍNH" ===
  services: {
    title: "Dịch Vụ Chính Chuyên Sâu",
    subtitle: "Sự kết hợp hoàn hảo giữa công nghệ lập trình tối ưu và tư duy marketing thời đại AI",
    list: [
      {
        id: "service-1",
        title: "Tạo Ladipage Bằng AI Tốc Độ",
        description: "Ứng dụng trí tuệ nhân tạo để thiết kế giao diện chuẩn UX/UX, bố cục thuyết phục và tối ưu tốc độ load chỉ dưới 1.5 giây. Tương thích tuyệt đối trên di động, tăng ngay 30% tỷ lệ chuyển đổi.",
        badge: "30 Phút Hoàn Thành",
        icon: "Sparkles",
        imageKey: "ladipage",
        points: ["Chuẩn SEO 100%", "Tích hợp vòng quay may mắn/pop-up", "Mã hóa bảo mật cao"]
      },
      {
        id: "service-2",
        title: "Quảng Cáo Ladipage Thực Chiến",
        description: "Không chỉ làm trang đẹp, tôi đồng hành setup chiến dịch Ads (Facebook, TikTok, Google) hướng thẳng tệp khách có tiền vào Ladipage của bạn. Tối ưu chi phí CPL (Cost per Lead) tốt nhất thị trường.",
        badge: "Ra Số Đều Đặn",
        icon: "TrendingUp",
        imageKey: "ads",
        points: ["Setup pixel theo dõi chuẩn xác", "Phân nhóm tệp khách hàng tiềm năng", "Báo cáo số liệu minh bạch hàng tuần"]
      },
      {
        id: "service-3",
        title: "Viết Content Thôi Miên Đánh Trúng Tâm Lý",
        description: "Sản xuất tiêu đề giật gân, bài viết giới thiệu kích thích nhu cầu mua sắm. Khám phá đúng 'nỗi đau' và đưa ra 'liều thuốc' khiến khách hàng không thể từ chối điền form.",
        badge: "Chạm Đúng Insight",
        icon: "PenTool",
        imageKey: "content",
        points: ["Content độc quyền không sao chép", "Tối ưu hóa từ khóa AI tìm kiếm", "Kêu gọi hành động tự nhiên, thu hút"]
      }
    ]
  },

  // === CÂU CHUYỆN CÁ NHÂN ===
  about: {
    title: "Về Tôi - Thọ Nguyễn Digital AI",
    subtitle: "Chân dung người đồng hành kỹ sư công nghệ chuyển mình sang Marketing thực chiến",
    strengthsTitle: "Sự Khác Biệt Làm Nên Thương Hiệu Thọ Nguyễn",
    paragraphs: [
      "Xin chào bạn, tôi là Thọ Nguyễn. Xuất thân là một kỹ sư lập trình website lâu năm, tôi sở hữu kỹ năng lập trình tối ưu hiệu suất, làm chủ mã nguồn và am hiểu sâu sắc về công nghệ phần mềm. Tuy nhiên, tôi sớm nhận ra một sự thật phũ phàng: Một website dù có đẹp hay đắt tiền đến đâu, nếu không mang lại khách hàng và doanh thu thực tế cho chủ nhân thì chỉ là một trang web chết.",
      "Đó là lý do tôi chuyển mình mạnh mẽ sang Digital Marketing, học hỏi những tư duy bán hàng thực chiến nhất và ứng dụng triệt để cuộc cách mạng AI. Tôi đúc kết mọi kinh nghiệm lập trình của mình để tạo ra những trang Ladipage có tốc độ tải nhanh như chớp, giao diện gọn gàng bám sát hành vi mua hàng của người Việt.",
      "Với phong cách thiết kế tự nhiên, nội dung mộc mạc chạm đúng nỗi đau và quy trình làm việc được tăng tốc bằng AI chỉ trong vòng 30 phút, tôi đã đồng hành và hỗ trợ hàng trăm sale bất động sản, chủ shop online xây dựng hệ thống thu thập lead tự động, tối ưu chi phí quảng cáo và nhân đôi doanh số."
    ],
    strengths: [
      {
        title: "Kinh nghiệm lập trình",
        desc: "Làm chủ mã nguồn website, thiết kế Ladipage mượt mà, không giật lag.",
        icon: "Code"
      },
      {
        title: "Tối ưu hiệu suất cao",
        desc: "PageSpeed di động luôn đạt 90+, giữ chân 99% khách hàng truy cập.",
        icon: "Zap"
      },
      {
        title: "Phong cách tự nhiên",
        desc: "Viết lách mộc mạc, gần gũi, tạo cảm giác tin tưởng tuyệt đối cho người đọc.",
        icon: "Heart"
      },
      {
        title: "Tốc độ hoàn thiện 30 phút",
        desc: "Nhờ quy trình kết hợp AI độc quyền, bàn giao nhanh chóng cho chiến dịch của bạn.",
        icon: "Cpu"
      }
    ]
  },

  // === QUY TRÌNH LÀM VIỆC ===
  workflow: {
    title: "Quy Trình Triển Khai Chuyên Nghiệp",
    subtitle: "4 bước nhanh gọn, khoa học để biến ý tưởng thành cỗ máy ra đơn",
    steps: [
      {
        num: "01",
        title: "Thấu hiểu mục tiêu",
        desc: "Bạn thuộc ngành hàng nào? Đối thủ là ai? Tôi sẽ cùng bạn phân tích chuyên sâu về tệp khách hàng tiềm năng và xác định mục tiêu của Ladipage."
      },
      {
        num: "02",
        title: "Thiết lập cấu trúc AI",
        desc: "Sử dụng AI kết hợp kinh nghiệm thực chiến để dựng nhanh khung Ladipage (Wireframe) chuẩn chuyển đổi với đầy đủ các section cuốn hút."
      },
      {
        num: "03",
        title: "Viết content & Thiết kế mỹ thuật",
        desc: "Sáng tạo nội dung thôi miên chạm đúng nỗi đau khách hàng, lựa chọn phối màu kích thích thị giác, tối ưu hóa hiển thị di động hoàn hảo."
      },
      {
        num: "04",
        title: "Đo lường & Bàn giao",
        desc: "Kết nối tên miền riêng của bạn, cài đặt mã pixel Facebook/TikTok, thiết lập hệ thống lưu thông tin đăng ký về Gmail/Google Sheet."
      }
    ]
  },

  // === BẰNG CHỨNG HẬU THUẪN (Proof & Case studies) ===
  proofs: {
    title: "Những Con Số Nói Lên Năng Lực",
    subtitle: "Sự tin tưởng của khách hàng là thước đo giá trị chính xác nhất của Thọ Nguyễn Digital AI",
    stats: [
      { value: "30 Phút", label: "Thời gian thiết kế trung bình" },
      { value: "320+", label: "Dự án Ladipage đã bàn giao" },
      { value: "14.500+", label: "Khách hàng đăng ký (Lead) thu về" },
      { value: "98,6%", label: "Khách hàng hài lòng & giới thiệu thêm" }
    ],
    cases: [
      {
        name: "Anh Hoàng Minh",
        role: "Trưởng phòng kinh doanh BĐS cao cấp",
        project: "Dự án Căn hộ cao cấp Eaton Park",
        achievement: "128 lượt đăng ký nhận bảng giá căn hộ trong 10 ngày đầu. Chi phí mỗi số điện thoại giảm 35% so với chạy trực tiếp.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop",
        quote: "Thọ thiết kế Ladipage quá nhanh, tối ưu di động cực đẹp. Khách vào đăng ký nhận catalog đều khen giao diện sang trọng. Tỷ lệ hẹn gặp thực tế tăng hẳn."
      },
      {
        name: "Chị Ngọc Mai",
        role: "Chủ shop Thời Trang Thiết Kế Mai Boutique",
        project: "Ladipage ra mắt Bộ sưu tập Hè 2026",
        achievement: "Tăng trưởng doanh thu 150%, thu gom trung bình 55 đơn hàng tự động mỗi ngày mà không cần tư vấn thủ công qua inbox.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop",
        quote: "Cứ nghĩ làm Ladipage rất phức tạp nhưng Thọ bàn giao trọn gói chỉ sau chưa đầy một buổi. Nội dung viết rất tự nhiên, khách vào tự chốt đơn mà mình rảnh tay hẳn."
      }
    ]
  },

  // === ĐĂNG KÝ TƯ VẤN FORM ===
  form: {
    title: "Đăng Ký Tư Vấn Miễn Phí",
    subtitle: "Hãy để tôi giúp bạn sở hữu cỗ máy tìm kiếm khách hàng tự động và chuyên nghiệp nhất ngay hôm nay!",
    fields: {
      name: "Họ và tên của bạn",
      phone: "Số điện thoại (Có Zalo)",
      niche: "Lĩnh vực kinh doanh",
      nicheOptions: [
        "Môi giới Bán Căn Hộ / Bất Động Sản",
        "Chủ Shop Kinh Doanh Online (Thời trang, Mỹ phẩm...)",
        "Đào tạo / Khóa học / Dịch vụ tư vấn",
        "Khác (Vui lòng ghi rõ ở ghi chú)"
      ],
      note: "Mong muốn hoặc yêu cầu cụ thể của bạn",
      submit: "Tôi Muốn Đăng Ký Nhận Tư Vấn Ngay!"
    }
  },

  // === FOOTER & CTA CUỐI TRANG ===
  footer: {
    ctaTitle: "Đừng Để Đối Thủ Cướp Mất Khách Hàng Trên Internet",
    ctaDesc: "Một trang Ladipage chuẩn AI, load mượt và nội dung đánh trúng tâm lý sẽ là nhân viên bán hàng xuất sắc hoạt động 24/7 cho bạn.",
    ctaButton: "Liên hệ trực tiếp qua Zalo ngay",
    copyright: "© 2026 Thọ Nguyễn Digital AI. All rights reserved. Designed with AI Power."
  }
};

interface Lead {
  id: string;
  name: string;
  phone: string;
  niche: string;
  note: string;
  timestamp: string;
}

export default function App() {
  // Trạng thái cho form đăng ký
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [niche, setNiche] = useState(CONFIG.form.fields.nicheOptions[0]);
  const [note, setNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Trạng thái Admin Lead Board (để khách kiểm tra thử tính hoạt động thật 100%)
  const [leads, setLeads] = useState<Lead[]>([]);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [copiedLeadId, setCopiedLeadId] = useState<string | null>(null);

  // Mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Đọc danh sách lead cũ từ localStorage nếu có
  useEffect(() => {
    const savedLeads = localStorage.getItem('thonguyen_leads');
    if (savedLeads) {
      try {
        setLeads(JSON.parse(savedLeads));
      } catch (e) {
        console.error("Lỗi đọc danh sách lead:", e);
      }
    } else {
      // Khởi tạo một vài lead mẫu để trang web trông sinh động và đáng tin cậy
      const mockLeads: Lead[] = [
        {
          id: 'lead-1',
          name: 'Nguyễn Văn Nam',
          phone: '091.2xx.x345',
          niche: 'Môi giới Bán Căn Hộ / Bất Động Sản',
          note: 'Cần làm gấp Ladipage dự án mới tại Quận 2 để chạy ads tuần tới.',
          timestamp: 'Vừa xong'
        },
        {
          id: 'lead-2',
          name: 'Phạm Thị Thúy Vy',
          phone: '097.8xx.x892',
          niche: 'Chủ Shop Kinh Doanh Online (Thời trang, Mỹ phẩm...)',
          note: 'Muốn tối ưu lại trang bán hàng trị mụn cũ, tải trang quá chậm.',
          timestamp: '5 phút trước'
        }
      ];
      setLeads(mockLeads);
      localStorage.setItem('thonguyen_leads', JSON.stringify(mockLeads));
    }
  }, []);

  // Xử lý nộp form đăng ký
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    // Kiểm tra tính hợp lệ đơn giản
    if (!name.trim()) {
      setValidationError('Vui lòng nhập họ và tên của bạn.');
      return;
    }
    if (!phone.trim()) {
      setValidationError('Vui lòng nhập số điện thoại để tôi liên hệ.');
      return;
    }
    const phoneRegex = /^[0-9.]{9,12}$/;
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 9 || cleanPhone.length > 12) {
      setValidationError('Số điện thoại không hợp lệ. Vui lòng nhập từ 9 đến 12 chữ số.');
      return;
    }

    setIsSubmitting(true);

    // Giả lập gửi API trong 1 giây
    setTimeout(() => {
      const newLead: Lead = {
        id: 'lead-' + Date.now(),
        name: name.trim(),
        phone: phone.trim(),
        niche: niche,
        note: note.trim() || 'Không có ghi chú thêm',
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }) + ' - Hôm nay'
      };

      const updatedLeads = [newLead, ...leads];
      setLeads(updatedLeads);
      localStorage.setItem('thonguyen_leads', JSON.stringify(updatedLeads));

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Nếu có link Google Form, tự động mở ra ở tab mới sau khi hiển thị thành công
      if (CONFIG.googleFormLink) {
        window.open(CONFIG.googleFormLink, '_blank');
      }

      // Reset các trường
      setName('');
      setPhone('');
      setNote('');
    }, 1200);
  };

  // Sao chép số hotline nhanh
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Đã sao chép số điện thoại: ${text}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/20 selection:text-indigo-400 overflow-x-hidden">
      
      {/* 1. KHUNG HEADER CHUYÊN NGHIỆP (Glassmorphism) */}
      <header id="header" className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-900 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Tên Thương Hiệu */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/10 group-hover:scale-105 transition-transform">
              <Cpu className="w-5.5 h-5.5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                {CONFIG.brandName}
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider font-mono uppercase">
                Digital Marketing AI
              </span>
            </div>
          </a>

          {/* Navigation Links trên Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#who-i-help" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Tôi Giúp Ai</a>
            <a href="#services" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Dịch Vụ</a>
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Câu Chuyện</a>
            <a href="#workflow" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Quy Trình</a>
            <a href="#proofs" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Kết Quả</a>
          </nav>

          {/* Hotline & Zalo Call To Action */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href={`tel:${CONFIG.hotline.replace(/\./g, '')}`} 
              className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                <Phone className="w-4 h-4 text-cyan-400" />
              </div>
              <span>{CONFIG.hotline}</span>
            </a>
            <a 
              href={CONFIG.zaloLink} 
              target="_blank" 
              rel="noreferrer" 
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold text-sm shadow-md shadow-cyan-400/10 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Zalo Trực Tiếp</span>
            </a>
          </div>

          {/* Mobile Hamburguer Button */}
          <button 
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-950 border-b border-slate-900 px-4 py-6 flex flex-col gap-4 overflow-hidden"
            >
              <a 
                href="#who-i-help" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-300 py-2 border-b border-slate-900"
              >
                Tôi Giúp Ai
              </a>
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-300 py-2 border-b border-slate-900"
              >
                Dịch Vụ Chính
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-300 py-2 border-b border-slate-900"
              >
                Về Tôi (Câu chuyện)
              </a>
              <a 
                href="#workflow" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-300 py-2 border-b border-slate-900"
              >
                Quy Trình Làm Việc
              </a>
              <a 
                href="#proofs" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-300 py-2 border-b border-slate-900"
              >
                Kết Quả Thực Tế
              </a>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a 
                  href={`tel:${CONFIG.hotline.replace(/\./g, '')}`} 
                  className="w-full h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center gap-2 font-bold text-slate-200"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Gọi {CONFIG.hotline}</span>
                </a>
                <a 
                  href={CONFIG.zaloLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full h-12 rounded-xl bg-cyan-500 text-slate-950 flex items-center justify-center gap-2 font-bold"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Zalo</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. HERO SECTION - ĐỒNG BỘ HIỆU QUẢ TRỰC QUAN */}
      <section id="hero" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-16 sm:py-24 overflow-hidden">
        
        {/* Bản đồ nền & hiệu ứng lưới công nghệ chìm */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(2,6,23,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(2,6,23,0.3)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Cột trái: Nội dung giá trị cốt lõi */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold font-mono tracking-wider">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                {CONFIG.hero.badge}
              </div>

              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
                {CONFIG.hero.headline.split("BẰNG")[0]} 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 drop-shadow-sm">
                  BẰNG AI ĐỘT PHÁ
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans">
                {CONFIG.hero.subheadline}
              </p>

              {/* Cam kết / USP nhanh dưới Headline */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-2 w-full max-w-xl">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-semibold text-slate-300">Thiết kế 30 phút</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-semibold text-slate-300">Tối ưu di động</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-semibold text-slate-300">Tích hợp Ads Pixel</span>
                </div>
              </div>

              {/* Nút hành động nổi bật */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
                <a 
                  href="#register-form" 
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-bold text-base text-center shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all flex items-center justify-center gap-2.5 group"
                >
                  <span>{CONFIG.hero.ctaMain}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href={CONFIG.zaloLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-bold text-base text-center hover:bg-slate-800/80 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  <span>{CONFIG.hero.ctaSub}</span>
                </a>
              </div>

              {/* Social Proof nhanh */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-900 w-full max-w-md">
                <div className="flex -space-x-2">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces" alt="Client" className="w-8 h-8 rounded-full border border-slate-950" referrerPolicy="no-referrer" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" alt="Client" className="w-8 h-8 rounded-full border border-slate-950" referrerPolicy="no-referrer" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces" alt="Client" className="w-8 h-8 rounded-full border border-slate-950" referrerPolicy="no-referrer" />
                </div>
                <p className="text-xs text-slate-400">
                  Hơn <strong className="text-cyan-400">300+ đối tác</strong> đã nhận bàn giao và bứt phá doanh số thành công.
                </p>
              </div>

            </div>

            {/* Cột phải: Avatar sang trọng kèm khung trang trí và chỉ số */}
            <div className="lg:col-span-5 flex justify-center relative">
              
              {/* Hiệu ứng hào quang phát sáng sau ảnh chân dung */}
              <div className="absolute w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl -z-10 -top-5" />
              <div className="absolute w-60 h-60 bg-cyan-500/15 rounded-full blur-3xl -z-10 -bottom-5" />

              <div id="hero-avatar-card" className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-3xl p-3 bg-slate-900 border border-slate-800 shadow-2xl">
                
                {/* Viền neon chạy xung quanh */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-indigo-500/10 to-purple-500/20 -z-10" />

                {/* Khung chứa ảnh đại diện chính */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                  <img 
                    src={CONFIG.images.avatar} 
                    alt={CONFIG.brandName} 
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Nhãn phủ nhận diện AI */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-mono font-bold tracking-wider text-slate-300 uppercase">ĐANG TRỰC TUYẾN</span>
                    </div>
                    <a 
                      href={`tel:${CONFIG.hotline.replace(/\./g, '')}`}
                      className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <span>Gọi ngay</span>
                      <Phone className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Badge 1 nổi bên trái: Tốc độ thiết kế */}
                <motion.div 
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-6 top-1/4 bg-slate-950/90 border border-slate-800 shadow-xl p-3 rounded-2xl flex items-center gap-2.5 max-w-[150px] backdrop-blur-md"
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium">Hoàn thành</p>
                    <p className="text-xs font-extrabold text-white">30 Phút</p>
                  </div>
                </motion.div>

                {/* Badge 2 nổi bên phải dưới: Chỉ số chuyển đổi */}
                <motion.div 
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-6 bottom-16 bg-slate-950/90 border border-slate-800 shadow-xl p-3.5 rounded-2xl flex items-center gap-2.5 max-w-[160px] backdrop-blur-md"
                >
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium">PageSpeed</p>
                    <p className="text-xs font-extrabold text-white">Điểm 95+</p>
                  </div>
                </motion.div>

              </div>

            </div>

          </div>
        </div>

      </section>

      {/* 3. SECTION "TÔI GIÚP AI" (Who I Help) */}
      <section id="who-i-help" className="py-20 sm:py-28 bg-slate-950 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              {CONFIG.whoIHelp.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full" />
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {CONFIG.whoIHelp.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CONFIG.whoIHelp.audiences.map((aud, index) => {
              const isFirst = index === 0;
              return (
                <div 
                  key={aud.id}
                  id={aud.id}
                  className={`rounded-3xl border p-8 bg-gradient-to-b ${aud.colorClass} relative overflow-hidden flex flex-col justify-between group hover:scale-[1.01] transition-transform duration-300`}
                >
                  <div className="space-y-6 relative z-10">
                    
                    {/* Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                        {aud.badge}
                      </span>
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-950 border border-slate-800 ${isFirst ? 'text-cyan-400 shadow-cyan-500/10' : 'text-purple-400 shadow-purple-500/10'} shadow-md`}>
                        {isFirst ? <Home className="w-6 h-6" /> : <ShoppingBag className="w-6 h-6" />}
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                      {aud.title}
                    </h3>

                    {/* Vấn đề nan giải (Pain Points) */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-red-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        Khó Khăn Hiện Tại Của Bạn:
                      </h4>
                      <ul className="space-y-2">
                        {aud.painPoints.map((pain, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start gap-2.5 leading-relaxed">
                            <span className="text-red-400 shrink-0 mt-1">✕</span>
                            <span>{pain}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Giải pháp đột phá (Solutions) */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Cách Tôi Giúp Bạn Đột Phá:
                      </h4>
                      <ul className="space-y-2">
                        {aud.solutions.map((sol, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start gap-2.5 leading-relaxed">
                            <span className="text-emerald-400 shrink-0 mt-1">✓</span>
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  <div className="pt-8 border-t border-slate-900 mt-8 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">Bản tư vấn miễn phí 100%</span>
                    <a 
                      href="#register-form" 
                      className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 bg-slate-950 border border-slate-800 ${isFirst ? 'hover:border-cyan-400 text-cyan-400' : 'hover:border-purple-400 text-purple-400'}`}
                    >
                      <span>Đăng ký nhận giải pháp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. SECTION DỊCH VỤ CHÍNH (Core Services) */}
      <section id="services" className="py-20 sm:py-28 bg-slate-950 relative overflow-hidden">
        
        <div className="absolute w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10 -top-10 -left-10" />
        <div className="absolute w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl -z-10 -bottom-10 -right-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              {CONFIG.services.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full" />
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {CONFIG.services.subtitle}
            </p>
          </div>

          <div className="space-y-16">
            {CONFIG.services.list.map((serv, index) => {
              const isEven = index % 2 === 0;
              
              // Map icon string sang component thực tế
              const renderIcon = (iconName: string) => {
                switch(iconName) {
                  case 'Sparkles': return <Sparkles className="w-5 h-5 text-cyan-400" />;
                  case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-indigo-400" />;
                  case 'PenTool': return <PenTool className="w-5 h-5 text-purple-400" />;
                  default: return <Sparkles className="w-5 h-5" />;
                }
              };

              // Lấy đúng ảnh cho từng dịch vụ
              let serviceImg = CONFIG.images.services.ladipage;
              if (serv.imageKey === 'ads') serviceImg = CONFIG.images.services.ads;
              if (serv.imageKey === 'content') serviceImg = CONFIG.images.services.content;

              return (
                <div 
                  key={serv.id}
                  id={serv.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  
                  {/* Image Block */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'} relative group`}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="relative aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
                      <img 
                        src={serviceImg} 
                        alt={serv.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                      
                      {/* Badge trên ảnh */}
                      <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs font-bold text-cyan-400 px-3 py-1.5 rounded-xl">
                        {serv.badge}
                      </span>
                    </div>
                  </div>

                  {/* Text Block */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                        {renderIcon(serv.icon)}
                      </div>
                      <span className="text-xs font-bold font-mono tracking-widest text-slate-400 uppercase">DỊCH VỤ 0{index + 1}</span>
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                      {serv.title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {serv.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {serv.points.map((pt, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-md bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs sm:text-sm text-slate-300 font-medium">{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4">
                      <a 
                        href="#register-form"
                        className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-cyan-400 hover:text-white font-bold text-xs transition-all flex items-center gap-2"
                      >
                        <span>Đăng ký dịch vụ này</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. SECTION CÂU CHUYỆN CÁ NHÂN (Personal Story) */}
      <section id="about" className="py-20 sm:py-28 bg-slate-900/40 border-t border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Cột trái: Ảnh làm việc thực tế / Chân dung */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 rounded-3xl blur-lg -z-10" />
              
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-xl bg-slate-950 p-4">
                <img 
                  src={CONFIG.images.aboutPic} 
                  alt="Thọ Nguyễn làm việc cùng đội ngũ" 
                  className="rounded-2xl w-full h-auto object-cover aspect-[4/3] sm:aspect-square"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay thông tin nhanh */}
                <div className="mt-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center text-white shrink-0 font-display font-extrabold text-lg">
                    TN
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{CONFIG.brandName}</h4>
                    <p className="text-[11px] text-slate-400">Website Developer & Digital Marketer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cột phải: Câu chuyện chân thực */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-indigo-400">
                  CÂU CHUYỆN KHỞI NGHIỆP
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                  {CONFIG.about.title}
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {CONFIG.about.paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>

            </div>

          </div>

          {/* Khối các điểm mạnh thế mạnh */}
          <div className="mt-20">
            <h3 className="font-display font-bold text-2xl text-center text-white mb-10">
              {CONFIG.about.strengthsTitle || "Sự Khác Biệt Làm Nên Thương Hiệu Thọ Nguyễn"}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CONFIG.about.strengths.map((str, i) => {
                const renderIcon = (iconName: string) => {
                  switch(iconName) {
                    case 'Code': return <Code className="w-6 h-6 text-cyan-400" />;
                    case 'Zap': return <Zap className="w-6 h-6 text-indigo-400" />;
                    case 'Heart': return <Heart className="w-6 h-6 text-pink-400" />;
                    case 'Cpu': return <Cpu className="w-6 h-6 text-purple-400" />;
                    default: return <Check className="w-6 h-6" />;
                  }
                };
                return (
                  <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col items-start gap-4 hover:border-slate-700 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                      {renderIcon(str.icon)}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-white mb-2">{str.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{str.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 6. SECTION QUY TRÌNH LÀM VIỆC (Work Process) */}
      <section id="workflow" className="py-20 sm:py-28 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              {CONFIG.workflow.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full" />
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {CONFIG.workflow.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            
            {/* Đường kẻ nối ngang trên Desktop */}
            <div className="hidden lg:block absolute top-[68px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 -z-10" />

            {CONFIG.workflow.steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4 group">
                
                {/* Số thứ tự vòng tròn */}
                <div className="w-14 h-14 rounded-full bg-slate-900 border-2 border-indigo-500/20 group-hover:border-indigo-400 text-white flex items-center justify-center text-lg font-mono font-black shadow-lg shadow-indigo-500/5 transition-all relative">
                  <span className="text-indigo-400">{step.num}</span>
                  <div className="absolute inset-0 rounded-full bg-indigo-500/5 animate-ping -z-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-base text-white group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-xs leading-relaxed mx-auto">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. SECTION BẰNG CHỨNG HẬU THUẪN (Case Studies & Stats) */}
      <section id="proofs" className="py-20 sm:py-28 bg-slate-900/20 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              {CONFIG.proofs.title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full" />
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {CONFIG.proofs.subtitle}
            </p>
          </div>

          {/* Thẻ chỉ số to nổi bật (Stats Grid) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {CONFIG.proofs.stats.map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
                <p className="text-3xl sm:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                  {stat.value}
                </p>
                <p className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Grid Case Studies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CONFIG.proofs.cases.map((cs, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="space-y-4 relative z-10">
                  
                  {/* Nhãn dự án */}
                  <span className="text-[11px] font-mono font-bold tracking-widest text-indigo-400 uppercase">
                    CASE STUDY THỰC TẾ
                  </span>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {cs.project}
                  </h3>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 font-bold text-xs sm:text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Kết quả: {cs.achievement}</span>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                    "{cs.quote}"
                  </p>

                </div>

                {/* Chân dung & Thông tin khách hàng phản hồi */}
                <div className="pt-6 border-t border-slate-800 flex items-center gap-4 relative z-10">
                  <img 
                    src={cs.image} 
                    alt={cs.name} 
                    className="w-12 h-12 rounded-full object-cover border border-slate-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-white">{cs.name}</h4>
                    <p className="text-[11px] text-slate-400">{cs.role}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. SECTION ĐĂNG KÝ TƯ VẤN (Register Consultation Form) */}
      <section id="register-form" className="py-20 sm:py-28 bg-slate-950 relative overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl -z-10 -bottom-20 -left-20" />
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl -z-10 -top-20 -right-20" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              {CONFIG.form.title}
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
              {CONFIG.form.subtitle}
            </p>
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full" />
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 sm:p-10 rounded-3xl shadow-xl">
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form 
                  key="consultation-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  {validationError && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm font-semibold">
                      ✕ {validationError}
                    </div>
                  )}

                  {/* Trường Tên */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      {CONFIG.form.fields.name} <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nhập tên đầy đủ của bạn..."
                      className="w-full h-12 bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 rounded-xl px-4 text-sm text-white placeholder:text-slate-600 outline-none transition-all"
                    />
                  </div>

                  {/* Trường Số điện thoại */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      {CONFIG.form.fields.phone} <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Nhập số điện thoại (Có kết nối Zalo)..."
                      className="w-full h-12 bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 rounded-xl px-4 text-sm text-white placeholder:text-slate-600 outline-none transition-all"
                    />
                  </div>

                  {/* Trường Lĩnh vực kinh doanh */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      {CONFIG.form.fields.niche}
                    </label>
                    <div className="relative">
                      <select 
                        value={niche}
                        onChange={(e) => setNiche(e.target.value)}
                        className="w-full h-12 bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 rounded-xl px-4 text-sm text-white outline-none appearance-none cursor-pointer transition-all pr-10"
                      >
                        {CONFIG.form.fields.nicheOptions.map((opt, i) => (
                          <option key={i} value={opt} className="bg-slate-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Trường Ghi chú cụ thể */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                      {CONFIG.form.fields.note} (Không bắt buộc)
                    </label>
                    <textarea 
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      rows={4}
                      placeholder="Ví dụ: Tôi muốn làm Ladipage bán căn hộ Smart City, có chạy quảng cáo Facebook..."
                      className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 rounded-xl p-4 text-sm text-white placeholder:text-slate-600 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Nút Submit gửi */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-14 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white font-bold text-base shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Đang xử lý đăng ký...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5 text-cyan-200" />
                        <span>{CONFIG.form.fields.submit}</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-500">
                    Cam kết bảo mật thông tin tuyệt đối. Thọ Nguyễn sẽ liên hệ trực tiếp cho bạn qua cuộc gọi hoặc Zalo.
                  </p>

                </motion.form>
              ) : (
                <motion.div 
                  key="form-success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center space-y-6 py-8"
                >
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-2xl text-emerald-400">Đăng Ký Thành Công!</h3>
                    <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto">
                      Cảm ơn bạn đã tin tưởng <strong>Thọ Nguyễn Digital AI</strong>. Tôi đã nhận được yêu cầu của bạn và sẽ gọi điện hỗ trợ trực tiếp ngay trong vòng 15 phút tới.
                    </p>
                  </div>

                  {/* Thông tin đăng ký nhận nhanh */}
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl max-w-sm mx-auto text-left space-y-1 text-xs">
                    <p className="text-slate-400 font-bold uppercase tracking-wider mb-2 text-center text-[10px] border-b border-slate-900 pb-1">Chi tiết phiếu tư vấn</p>
                    <p className="text-slate-300"><span className="text-slate-500 font-medium">Họ & Tên:</span> {name || 'Khách hàng ẩn danh'}</p>
                    <p className="text-slate-300"><span className="text-slate-500 font-medium">Lĩnh vực:</span> {niche}</p>
                    <p className="text-slate-300"><span className="text-slate-500 font-medium">Điện thoại:</span> {phone}</p>
                  </div>

                  <div className="space-y-3 pt-4">
                    <p className="text-xs text-slate-400">Nếu bạn cần thiết kế gấp trong 30 phút, vui lòng kết nối ngay Zalo:</p>
                    <div className="flex flex-col sm:flex-row gap-3 items-center justify-center max-w-sm mx-auto">
                      <a 
                        href={CONFIG.zaloLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="w-full h-11 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Chat Zalo Ngay</span>
                      </a>
                      <button 
                        onClick={() => setSubmitSuccess(false)}
                        className="w-full h-11 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 font-bold text-xs flex items-center justify-center"
                      >
                        <span>Quay lại trang chính</span>
                      </button>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* 9. BẢN ĐỒ ADMIN LEAD CONSOLE (Subtle/Interactive Feature - Ghi điểm cực mạnh) */}
      <section className="py-8 bg-slate-950 border-t border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button 
            onClick={() => setShowAdminPanel(!showAdminPanel)}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all text-[11px] font-mono cursor-pointer"
          >
            <Database className="w-3.5 h-3.5" />
            <span>{showAdminPanel ? 'Ẩn Hộp Thư Đăng Ký Thử Nghiệm' : 'Xem Thử Hộp Thư Đăng Ký (Demo Realtime)'}</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${showAdminPanel ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {showAdminPanel && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-6 text-left"
              >
                <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
                  
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Lead Dashboard (Bảng Nhận Thông Tin Thử Nghiệm)</span>
                      </h4>
                      <p className="text-[10px] text-slate-400 mt-0.5">Dữ liệu được lưu trữ trực tiếp trên trình duyệt của bạn (Local Storage) để thử nghiệm tính năng đăng ký.</p>
                    </div>
                    <button 
                      onClick={() => {
                        if(confirm('Bạn có chắc chắn muốn xóa toàn bộ danh sách lead thử nghiệm?')) {
                          setLeads([]);
                          localStorage.removeItem('thonguyen_leads');
                        }
                      }}
                      className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors cursor-pointer"
                      title="Xóa danh sách"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                    {leads.length === 0 ? (
                      <p className="text-xs text-slate-500 text-center py-6">Chưa có thông tin đăng ký nào. Hãy điền form bên trên để thấy kết quả xuất hiện tại đây!</p>
                    ) : (
                      leads.map((l) => (
                        <div key={l.id} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700/80 transition-colors space-y-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-white text-sm">{l.name}</span>
                            <span className="text-[10px] text-slate-500 font-mono">{l.timestamp}</span>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                            <p><span className="text-slate-500 font-medium">Lĩnh vực:</span> {l.niche}</p>
                            <div className="flex items-center gap-1.5">
                              <span className="text-slate-500 font-medium">SĐT/Zalo:</span> 
                              <span className="font-mono text-cyan-400">{l.phone}</span>
                              <button 
                                onClick={() => {
                                  navigator.clipboard.writeText(l.phone);
                                  setCopiedLeadId(l.id);
                                  setTimeout(() => setCopiedLeadId(null), 2000);
                                }}
                                className="p-0.5 rounded bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white"
                                title="Copy SĐT"
                              >
                                {copiedLeadId === l.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                              </button>
                            </div>
                          </div>

                          <p className="text-slate-400 bg-slate-900/50 p-2 rounded border border-slate-900"><span className="text-slate-500 font-medium">Yêu cầu:</span> {l.note}</p>
                        </div>
                      ))
                    )}
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 10. CTA CUỐI TRANG & FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 relative">
        
        {/* Khối Banner Đóng Góp Cuối Trang */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center space-y-8">
          
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              {CONFIG.footer.ctaTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {CONFIG.footer.ctaDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <a 
              href={CONFIG.zaloLink} 
              target="_blank" 
              rel="noreferrer" 
              className="px-8 py-3.5 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-600 font-extrabold text-sm shadow-md transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{CONFIG.footer.ctaButton}</span>
            </a>

            <button 
              onClick={() => copyToClipboard(CONFIG.hotline)}
              className="px-8 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-bold text-sm transition-all flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer"
            >
              <Phone className="w-5 h-5 text-indigo-400 animate-pulse" />
              <span>Gọi {CONFIG.hotline}</span>
            </button>

          </div>

          {/* Dòng phân chia */}
          <div className="h-px bg-slate-900 w-full my-12" />

          {/* Bản quyền và thông tin liên hệ chân trang */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-xs sm:text-sm text-slate-400 pb-12">
            
            {/* Cột 1: Giới thiệu thương hiệu */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-sm text-white">{CONFIG.brandName}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{CONFIG.tagline}</p>
              <p className="text-[11px] text-slate-500">{CONFIG.footer.copyright}</p>
            </div>

            {/* Cột 2: Thông tin liên hệ */}
            <div className="space-y-2.5">
              <h4 className="font-display font-semibold text-xs text-slate-200 uppercase tracking-wider">Thông tin liên hệ</h4>
              <div className="space-y-1.5 text-xs">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-500" /> {CONFIG.address}</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-slate-500" /> {CONFIG.email}</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-slate-500" /> Hotline/Zalo: {CONFIG.hotline}</p>
              </div>
            </div>

            {/* Cột 3: Ghi chú bảo trì trang web */}
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2 text-xs">
              <h4 className="font-bold text-slate-200 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Mẹo chỉnh sửa trang</span>
              </h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Anh Thọ có thể thay đổi nhanh toàn bộ thông tin bằng cách sửa biến <code className="text-cyan-400 font-mono">CONFIG</code> ở đầu file nguồn bất cứ lúc nào!
              </p>
            </div>

          </div>

        </div>

      </footer>

    </div>
  );
}
