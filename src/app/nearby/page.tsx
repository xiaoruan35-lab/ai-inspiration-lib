"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Asset URLs from Figma design
const ASSETS = {
  ovalDecor: "http://localhost:3845/assets/f634685472c3b1dbc11160d9d3255f1cdca071e8.svg",
  location: "http://localhost:3845/assets/4f58f4352abea0bb03a26d9b0bf0274de68ea59c.svg",
  battery: "http://localhost:3845/assets/ce1bdff688c3ba296be232687c23e84863d42416.svg",
  wifi: "http://localhost:3845/assets/d654f3ae525b71b83c6b243dc2c9cb5e83bdb354.svg",
  cellular: "http://localhost:3845/assets/e6aab96de629c52673e62d9cc72b39d19977bf2c.svg",
  versionToggle: "http://localhost:3845/assets/f3471adf4ff0d2ada0800214f963e12608847be5.svg",
  tabRecommend: "http://localhost:3845/assets/207d14ffef105e6d5c86c9d2fc866b3f71f9e2f9.svg",
  tabQuanZi: "http://localhost:3845/assets/7b54cf5666ef4df9924dfe8a0e55c3e8fc215dcb.svg",
  tabQuanZiDefault: "http://localhost:3845/assets/737d5726ddee63755b161d74aa98dc1461d33a10.svg",
  tabRecommendDefault: "http://localhost:3845/assets/8368a310af15cbba92dac800d349f7841cd052c1.svg",
  tabMessageDefault: "http://localhost:3845/assets/b9097d5f4c1de7989d488f4c72adfa3e8c06bd92.svg",
  tabMineDefault: "http://localhost:3845/assets/3fa445969d50863eeb482fa7366f65f0afe0b749.svg",
  cardBg1: "http://localhost:3845/assets/e9955cc026f2ccc1ecb52ff5ceb496e33e5c21db.png",
  cardBg2: "http://localhost:3845/assets/90d0654f0da6cd1fa5a35ef3317868cbf882164b.png",
  avatar1: "http://localhost:3845/assets/de14f697cd5833890e2aea974a7354b6e7bf655d.png",
  avatar2: "http://localhost:3845/assets/3d8dcf57594b8531d380c15ca7a740d9951c109a.png",
  likeIcon: "http://localhost:3845/assets/ffdce19658cf4ddb9d15562f898885bd6ae6011e.svg",
  union: "http://localhost:3845/assets/07047b27564977a320606c872c675c99987e382a.svg",
  centerBtn: "http://localhost:3845/assets/d3ecf9888170e229fd54cb98d64db8d0b72ba370.svg",
  image1: "http://localhost:3845/assets/8a8f5bfb4cd7105d159590d0e9144fb13529b8c2.png",
  image2: "http://localhost:3845/assets/670e997329eca4ee9e7d7d59cdbca49aef5a5e45.png",
  image3: "http://localhost:3845/assets/101d7d2424a09cbb8c079dcfc344447af64833a7.png",
  noticeBg: "http://localhost:3845/assets/bc3ac7bf62e7ada5d1f4f2ad606134fd43236ac1.svg",
  exchangeBg: "http://localhost:3845/assets/7a80af2f9cf3fcb1161b08efb6613380c46b6faa.svg",
  groupBg: "http://localhost:3845/assets/e9955cc026f2ccc1ecb52ff5ceb496e33e5c21db.png",
};

const TABS = ["推荐", "兴趣", "怀旧", "老友记"] as const;
const BOTTOM_TABS = [
  { name: "圈子", icon: ASSETS.tabQuanZiDefault, activeIcon: ASSETS.tabQuanZi },
  { name: "推荐", icon: ASSETS.tabRecommendDefault, activeIcon: ASSETS.tabRecommend },
  { name: "消息", icon: ASSETS.tabMessageDefault },
  { name: "我的", icon: ASSETS.tabMineDefault },
];

const HOT_TOPICS = [
  { rank: "1", text: "消费陷阱！小区门口「免费送鸡蛋」推销理疗仪", color: "text-red-500" },
  { rank: "2", text: "求助：湘雅的心血管内科太难挂号了", color: "text-orange-400" },
  { rank: "3", text: "2026年退休「养老金资格认证」详细大字版步骤", color: "text-yellow-400" },
  { rank: "4", text: "晚饭后跳广场舞到底几点结束合适？", color: "text-lime-300" },
];

const PRODUCT_CARDS = [
  {
    id: 1,
    title: "服装厂干了三十年，有要换拉链、改裤脚的随时欢迎",
    author: "巧手张奶奶",
    likes: 156,
    avatar: ASSETS.avatar1,
    bg: ASSETS.cardBg1,
    location: "0.2 km",
    certified: true,
  },
  {
    id: 2,
    title: "求助！电视弄了一上午找不到怎么调出新闻联播...",
    author: "退休老赵",
    likes: 5,
    avatar: ASSETS.avatar2,
    bg: ASSETS.cardBg2,
    location: "<500m",
    certified: false,
  },
];

export default function NearbyPage() {
  const [activeTab, setActiveTab] = useState<"推荐" | "兴趣" | "怀旧" | "老友记">("推荐");
  const [activeBottomTab, setActiveBottomTab] = useState("推荐");

  return (
    <div className="min-h-screen bg-[#f5f5f5] relative w-[375px] mx-auto overflow-hidden">
      {/* Top Background Layer */}
      <div className="absolute top-0 left-0 right-0 h-[300px] pointer-events-none overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ffded3] to-[rgba(255,246,243,0)]" />

        {/* Decorative Oval - positioned at top center, partially visible */}
        <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[400px] h-[400px]">
          <img alt="" src={ASSETS.ovalDecor} className="w-full h-full object-contain opacity-60" />
        </div>
      </div>

      {/* Status Bar */}
      <div className="relative z-10 h-[44px] px-6 flex items-center justify-between">
        <p className="text-[17px] font-semibold text-black">23:24</p>
        <div className="flex items-center gap-1.5">
          <img src={ASSETS.cellular} alt="" className="w-[19px] h-[13px]" />
          <img src={ASSETS.wifi} alt="" className="w-[17px] h-[12px]" />
          <img src={ASSETS.battery} alt="" className="w-[27px] h-[13px]" />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="relative z-10 h-[44px] px-4 flex items-center">
        <h1 className="absolute left-[80px] top-[6px] text-[18px] font-semibold text-[#111]">附近</h1>

        {/* Tabs */}
        <div className="flex items-center gap-5 ml-[72px] relative">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[16px] font-medium transition-colors ${
                activeTab === tab ? "text-[#333]" : "text-[#999]"
              }`}
            >
              {tab}
            </button>
          ))}
          {/* Active Tab Indicator */}
          {activeTab === "推荐" && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 h-0 w-[32px] border-b-2 border-[#ff0059]"
              style={{ left: "0px" }}
            />
          )}
        </div>

        {/* Version Toggle */}
        <div className="absolute right-[18px] top-0 flex flex-col items-center">
          <img src={ASSETS.versionToggle} alt="" className="w-[28px] h-[28px]" />
          <span className="text-[10px] text-[#666] mt-[2px]">版本</span>
        </div>
      </div>

      {/* Main Content - positioned above background gradient */}
      <div className="relative z-10 px-4 pt-4">
        {/* Section 1: 邻里通知栏 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-4"
        >
          {/* Decorative Background Oval */}
          <div className="absolute -top-3 left-0 w-[210px] h-[74px] -z-10">
            <img alt="" src={ASSETS.noticeBg} className="w-full h-full object-contain" />
          </div>

          <div className="pt-4">
            <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-3">
              <div className="flex-1">
                <h2 className="text-[16px] font-bold text-[#171818] mb-1">邻里通知栏</h2>
                <p className="text-[12px] text-[#666] leading-4">最新居委与物业通知</p>
              </div>
              <div className="w-[67px] h-[61px] rounded-[14px] overflow-hidden flex-shrink-0 rotate-180">
                <img src={ASSETS.image1} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: 闲置换好物 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-4"
        >
          {/* Decorative Background Oval */}
          <div className="absolute -top-3 left-0 w-[210px] h-[74px] -z-10">
            <img alt="" src={ASSETS.exchangeBg} className="w-full h-full object-contain" />
          </div>

          <div className="pt-4">
            <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-3">
              <div className="flex-1">
                <h2 className="text-[16px] font-bold text-[#171818] mb-1">闲置换好物</h2>
                <p className="text-[12px] text-[#666] leading-4">旧物遇新主邻里更亲近</p>
              </div>
              <div className="w-[57px] h-[56px] rounded-[8px] overflow-hidden flex-shrink-0">
                <img src={ASSETS.image2} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3: 长沙同城热议 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mb-4"
        >
          {/* Hot Badge */}
          <div className="absolute right-4 top-6 z-20">
            <div className="bg-gradient-to-br from-[rgba(255,47,0,0.57)] to-[rgb(237,103,97)] rounded-[2px] px-1.5 py-0.5">
              <span className="text-[10px] text-white font-normal">热</span>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#3694ff] to-[#93b8ff] rounded-[10px] p-3 relative overflow-hidden">
            {/* Union decoration */}
            <div className="absolute right-2 top-2 opacity-30">
              <img src={ASSETS.union} alt="" className="w-full h-full" />
            </div>

            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <h2 className="text-[16px] font-bold text-white">长沙同城热议</h2>
                <span className="text-[12px] text-[#ffa352] font-normal">TOP</span>
              </div>
              <span className="text-[12px] text-white">更多</span>
            </div>

            <div className="space-y-2">
              {HOT_TOPICS.map((topic, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className={`text-[16px] font-bold ${topic.color}`}>{topic.rank}</span>
                  <p className="text-[14px] text-[#333] leading-5 flex-1">{topic.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 4: 组团找搭子 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative mb-4"
        >
          <div className="flex items-start gap-3 bg-white/60 backdrop-blur-sm rounded-xl p-3">
            <div className="flex-1">
              <h2 className="text-[16px] font-bold text-[#171818] mb-1">组团找搭子</h2>
              <p className="text-[12px] text-[#666] leading-4">下棋遛弯</p>
              <p className="text-[12px] text-[#666] leading-4">广场舞</p>
            </div>
            <div className="w-[78px] h-[71px] rounded-[8px] overflow-hidden flex-shrink-0">
              <img src={ASSETS.image3} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.section>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 gap-3 pb-32">
          {PRODUCT_CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              {/* Card Image */}
              <div className="relative h-[160px] overflow-hidden">
                <img src={card.bg} alt="" className="w-full h-full object-cover" />

                {/* Location Badge */}
                <div className="absolute top-2 left-2 flex items-center gap-1 bg-[rgba(73,73,73,0.51)] rounded-full px-2 py-1">
                  <img src={ASSETS.location} alt="" className="w-[11px] h-[11px]" />
                  <span className="text-[10px] text-white">{card.location}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-2">
                <p className="text-[12px] text-[#333] leading-4 mb-2 line-clamp-2">{card.title}</p>

                {/* Author Row */}
                <div className="flex items-center gap-2">
                  {/* Avatar */}
                  <div className="relative w-4 h-4">
                    <img src={card.avatar} alt="" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <span className="text-[9px] text-[#666] opacity-60">{card.author}</span>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Likes */}
                  <div className="flex items-center gap-1">
                    <img src={ASSETS.likeIcon} alt="" className="w-3 h-3" />
                    <span className="text-[9px] text-[#666]">{card.likes}</span>
                  </div>
                </div>

                {/* Certified Badge */}
                {card.certified && (
                  <div className="mt-1.5">
                    <span className="text-[6px] text-white bg-gradient-to-r from-[#ff9a39] to-[#ed9061] px-1.5 py-0.5 rounded">
                      已认证
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] bg-white rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.12)] z-50">
        {/* Tab Items */}
        <div className="flex items-center justify-around h-[49px] py-1">
          {BOTTOM_TABS.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveBottomTab(tab.name)}
              className={`flex flex-col items-center justify-center w-[75px] h-full transition-colors ${
                activeBottomTab === tab.name ? "opacity-100" : "opacity-60"
              }`}
            >
              <img
                src={activeBottomTab === tab.name && tab.activeIcon ? tab.activeIcon : tab.icon}
                alt={tab.name}
                className="w-[28px] h-[22px] object-contain"
              />
              <span className={`text-[11px] mt-1 ${activeBottomTab === tab.name ? "text-[#333] font-medium" : "text-[#999]"}`}>
                {tab.name}
              </span>
            </button>
          ))}
        </div>

        {/* Home Indicator */}
        <div className="flex justify-center pb-2">
          <div className="w-[134px] h-[5px] bg-[rgba(51,51,51,0.11)] rounded-full" />
        </div>

        {/* Center Publish Button */}
        <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[40px] h-[40px] rounded-[10px] overflow-hidden">
          <div className="w-full h-full bg-gradient-to-r from-[#ff0059] to-[#ffa239] flex items-center justify-center">
            <img src={ASSETS.centerBtn} alt="" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
