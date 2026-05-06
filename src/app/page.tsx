"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QRCode from "qrcode";
import { CASE_STUDIES, CaseStudy } from "@/data/caseStudies";

const CATEGORIES = ["全部", "设计工作流", "软件与应用", "交互范式", "智能硬件"] as const;

const FEATURED_IDS = ["10", "9", "8"]; // Figma 2026报告, Ant Design RICH, 百度跨屏适配

function getFeaturedStudies() {
  return CASE_STUDIES.filter((study) => FEATURED_IDS.includes(study.id));
}

// 生成二维码 SVG
async function generateQRCode(url: string): Promise<string> {
  try {
    const svg = await QRCode.toString(url, {
      type: "svg",
      width: 80,
      margin: 1,
      color: {
        dark: "#333333",
        light: "#ffffff",
      },
    });
    return svg;
  } catch (err) {
    console.error("QR Code generation failed:", err);
    return "";
  }
}

interface ShareMenuProps {
  url: string;
  onClose: () => void;
}

function ShareMenu({ url, onClose }: ShareMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    // 生成二维码
    generateQRCode(url).then(setQrCode);

    // 点击外部关闭菜单
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [url, onClose]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <motion.div
      ref={menuRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="absolute top-12 right-0 z-[100] bg-white rounded-xl shadow-xl p-3 w-56"
    >
      <div className="text-sm font-medium text-gray-700 mb-2">分享</div>

      {/* 一键复制网址 */}
      <button
        onClick={handleCopy}
        className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
      >
        <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
          <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-700">{copied ? '已复制' : '复制链接'}</p>
        </div>
      </button>

      {/* 扫码分享 */}
      <div className="mt-2 pt-2 border-t border-gray-100">
        <p className="text-xs text-gray-400 mb-2">扫码分享</p>
        <div className="flex justify-center">
          <div
            className="bg-white p-1.5 rounded-lg"
            dangerouslySetInnerHTML={{ __html: qrCode }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function Card({ study }: { study: CaseStudy }) {
  const [showShare, setShowShare] = useState(false);

  const categoryColors: Record<string, string> = {
    "设计工作流": "bg-purple-400",
    "软件与应用": "bg-pink-400",
    "交互范式": "bg-blue-400",
    "智能硬件": "bg-green-400",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="glass-card rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform h-full flex flex-col"
    >
      {/* Image Section - z-20 to stay above content */}
      <div className="relative w-full aspect-[16/10] z-20">
        <img
          src={study.coverUrl}
          alt={study.title}
          className="w-full h-full object-cover rounded-t-3xl"
        />
        {/* Category Badge on Image */}
        <span
          className={`absolute top-3 left-3 ${categoryColors[study.category]} text-white text-xs font-medium px-3 py-1 rounded-full shadow-md`}
        >
          {study.category}
        </span>
        {/* Share Icon */}
        <div className="absolute top-3 right-3 z-30">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowShare(!showShare);
            }}
            className="p-1.5 rounded-lg bg-white/80 hover:bg-white transition-colors cursor-pointer shadow-md"
          >
            <svg
              className="w-4 h-4 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </button>
          <AnimatePresence>
            {showShare && (
              <ShareMenu url={study.sourceUrl} onClose={() => setShowShare(false)} />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Content Section - z-10 to stay below image/share */}
      <div className="relative z-10 p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{study.title}</h3>
        <p className="text-sm text-purple-600 font-medium mb-2">{study.highlight}</p>
        <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">{study.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {study.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          {/* URL as clickable link */}
          <a
            href={study.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 truncate max-w-[180px] hover:text-purple-500 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {study.sourceUrl}
          </a>
          {/* View Details Link */}
          <a
            href={study.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-purple-500 font-medium hover:text-purple-700 hover:underline cursor-pointer transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            查看详情 →
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function Sidebar() {
  const featuredStudies = getFeaturedStudies();

  return (
    <aside className="w-72 flex-shrink-0">
      <div className="glass-card rounded-3xl p-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">精选资源</h2>
        <div className="space-y-3">
          {featuredStudies.map((study) => (
            <a
              key={study.id}
              href={study.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 rounded-xl bg-white/50 hover:bg-white/80 transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-medium">{study.id}</span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-700 truncate">{study.title}</p>
                <p className="text-xs text-gray-400">{study.category}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 pt-5 border-t border-gray-100">
          <p className="text-xs text-gray-400 leading-relaxed">
            这里收录了 {CASE_STUDIES.length} 个 AI 交互设计领域的最新案例，涵盖设计工作流、软件应用、交互范式和智能硬件四大方向。
          </p>
        </div>
      </div>
    </aside>
  );
}

function Header() {
  return (
    <header className="mb-10">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center shadow-lg shadow-purple-200">
          <span className="text-white text-3xl">✨</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-800 tracking-tight">AI 灵感库</h1>
      </div>
      <p className="text-lg text-gray-500 text-center">探索 AI 交互设计的最新案例与创新灵感</p>
    </header>
  );
}

function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <svg
        className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="搜索案例名称、标签..."
        className="w-full pl-14 pr-14 py-4 rounded-2xl bg-white/80 border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-700 placeholder:text-gray-400 text-base shadow-lg shadow-purple-100/50"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
        >
          <span className="text-gray-500 text-sm">×</span>
        </button>
      )}
    </div>
  );
}

function TabBar({
  activeTab,
  onTabChange,
  counts,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
  counts: Record<string, number>;
}) {
  return (
    <div className="flex gap-2 mb-0 flex-wrap justify-center">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onTabChange(category)}
          className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
            activeTab === category
              ? "bg-purple-500 text-white shadow-lg shadow-purple-200"
              : "bg-white/70 text-gray-600 hover:bg-white hover:text-gray-800"
          }`}
        >
          {category}
          <span
            className={`ml-1.5 text-xs ${
              activeTab === category ? "text-purple-200" : "text-gray-400"
            }`}
          >
            {counts[category] || 0}
          </span>
        </button>
      ))}
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("全部");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudies = useMemo(() => {
    return CASE_STUDIES.filter((study) => {
      const matchesTab =
        activeTab === "全部" || study.category === activeTab;
      const matchesSearch =
        searchQuery === "" ||
        study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        study.highlight.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const counts = useMemo(() => {
    const result: Record<string, number> = { 全部: CASE_STUDIES.length };
    CATEGORIES.slice(1).forEach((cat) => {
      result[cat] = CASE_STUDIES.filter((s) => s.category === cat).length;
    });
    return result;
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Centered */}
      <div className="relative w-full hero-gradient py-20 px-6">
        {/* Decorative blur glows */}
        <div className="hero-blur-glow bg-purple-300 top-0 left-1/4 -translate-x-1/2" />
        <div className="hero-blur-glow bg-pink-300 top-20 right-1/4 translate-x-1/2" />

        <div className="relative max-w-4xl mx-auto text-center">
          <Header />

          <div className="mb-10">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>

          <TabBar
            activeTab={activeTab}
            onTabChange={setActiveTab}
            counts={counts}
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex gap-8 items-start">
          {/* Left: Case Cards Grid - 3 columns */}
          <main className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {filteredStudies.length > 0 ? (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredStudies.map((study) => (
                    <Card key={study.id} study={study} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <span className="text-5xl mb-4">🔍</span>
                  <p className="text-gray-500">没有找到匹配的案例</p>
                  <p className="text-sm text-gray-400 mt-1">
                    尝试调整搜索条件或切换分类
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          {/* Right: Sidebar */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
}