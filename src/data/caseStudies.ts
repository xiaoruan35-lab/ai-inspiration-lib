export interface CaseStudy {
  id: string;
  title: string;
  highlight: string;
  description: string;
  category: '设计工作流' | '软件与应用' | '交互范式' | '智能硬件';
  tags: string[];
  sourceUrl: string;
  coverUrl: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'Google Stitch',
    highlight: '文本/语音/草图秒变高保真界面与生产级代码',
    description: '依托 Gemini 模型，支持多模态输入，生成可编辑 UI 设计稿及 React 代码，无缝对接 Figma 与开发工作流。',
    category: '设计工作流',
    tags: ['多模态交互', 'AI生成代码', '快速原型', 'Figma集成'],
    sourceUrl: 'https://stitch.withgoogle.com',
    coverUrl: '/image/cases/case-1.png'
  },
  {
    id: '2',
    title: 'Lovart',
    highlight: '全球首个专业 AI 设计智能体，新增 Move Object 功能',
    description: '全链路设计智能体，支持多模型集成。其"移动对象"功能可自由拖拽元素并自动修复背景，将半小时操作缩短至30秒。',
    category: '设计工作流',
    tags: ['AI图像编辑', '自动背景修复', '多模型集成'],
    sourceUrl: 'https://www.lovart.ai',
    coverUrl: '/image/cases/case-2.png'
  },
  {
    id: '3',
    title: 'CapCut 国际版 Video Studio',
    highlight: '无限画布 + Seedance 2.0 打造 AI 视频创作空间',
    description: '抛弃传统时间轴，以图块形式自由排布素材，AI 自动匹配转场与 BGM，实现精准镜头控制与角色一致性。',
    category: '设计工作流',
    tags: ['AI视频生成', '非线性编辑', '画布式创作'],
    sourceUrl: 'https://capcut.com/ai-creator-home',
    coverUrl: '/image/cases/case-3.png'
  },
  {
    id: '4',
    title: 'PalsGO（咕咕）',
    highlight: '专为球类爱好者打造的轻量化找球搭子社交 APP',
    description: '聚焦找球搭子核心需求，以轻量化设计打造专属社交场景，解决约球难、搭子风格不匹配的痛点。',
    category: '软件与应用',
    tags: ['社交型App', '球类社交', '搭子匹配'],
    sourceUrl: 'https://www.xiaohongshu.com/discovery/item/6937e523000000001d03c6a1',
    coverUrl: '/image/cases/case-4.png'
  },
  {
    id: '5',
    title: '智行旅行 APP',
    highlight: '一站式智能出行预订平台，年轻化情感设计',
    description: '依托 AI 实现价格预测与个性化推荐。10.0 版本通过轻量化界面与 3D 可视化，打造高效且有温度的体验。',
    category: '软件与应用',
    tags: ['出行服务', '年轻化UI', 'AI智能推荐'],
    sourceUrl: 'https://www.xiaohongshu.com/discovery/item/67da685f000000001201cc95',
    coverUrl: '/image/cases/case-5.png'
  },
  {
    id: '6',
    title: '久坐人群健康改善交互设计',
    highlight: '聚焦久坐痛点打造专属创新交互方案',
    description: 'NYU ITP 留学作品集项目，融合专业 UX 设计与创新交互理念，为解决久坐健康问题提供前瞻性思路。',
    category: '交互范式',
    tags: ['健康设计', '交互方案', '作品集'],
    sourceUrl: 'https://www.xiaohongshu.com/discovery/item/64c78719000000001201afca',
    coverUrl: '/image/cases/case-6.png'
  },
  {
    id: '7',
    title: '百度优选商家后台 AI 交互',
    highlight: '三大 AI 交互范式，实现商家经营效率提升',
    description: '创新设计嵌入式、伴随式、托管式三大交互范式，统一 B 端智能化感知体系，满意度提升 25%。',
    category: '交互范式',
    tags: ['B端设计', '交互范式', '经营提效'],
    sourceUrl: 'https://mp.weixin.qq.com/s/QlQwv174AXtkim8EckacYA',
    coverUrl: '/image/cases/case-7.png'
  },
  {
    id: '8',
    title: '百度 APP 跨屏幕多端适配',
    highlight: '响应式架构打破设备边界，实现跨屏一致性',
    description: '建立以屏宽为判定的适配标准，升级 Token 化设计系统，让适配从单端定制变为弹性响应。',
    category: '交互范式',
    tags: ['多端适配', '响应式设计', 'Token化'],
    sourceUrl: 'https://mp.weixin.qq.com/s/GEpk3Wz0OLzAgfseOqxbDQ',
    coverUrl: '/image/cases/case-8.png'
  },
  {
    id: '9',
    title: 'Ant Design RICH AI 设计范式',
    highlight: '构建 AGI 时代系统化、可落地的 AI 界面设计标准',
    description: '提炼意图、角色、对话、混合界面四大核心要素，系统化解决 AI 产品交互设计的各类疑难场景。',
    category: '交互范式',
    tags: ['AI界面设计', '人机交互', '设计原则'],
    sourceUrl: 'https://mp.weixin.qq.com/s/6dCtMxIGd2dqmL8XrLyG5g',
    coverUrl: '/image/cases/case-9.png'
  },
  {
    id: '10',
    title: 'Figma 2026 设计师行业报告',
    highlight: '深度剖析 AGI 时代设计行业转型趋势',
    description: '揭示生成式 AI 已成为核心工作流，强调 AI 无法取代创意决策，为设计师提供适配时代的职业建议。',
    category: '设计工作流',
    tags: ['行业趋势', '报告调研', '人机协作'],
    sourceUrl: 'https://mp.weixin.qq.com/s/8mLLsHh2RfnolEOxtUIunw',
    coverUrl: '/image/cases/case-10.png'
  },
  {
    id: '11',
    title: 'Looki L1 AI 生活记录相机',
    highlight: '全天拍摄并以人类视角感知、理解生活瞬间',
    description: '全球首款集成 AI 助手的记录相机，通过 AI 识别情绪与意义，将日常视听信息整理为有意义的时间线。',
    category: '智能硬件',
    tags: ['可穿戴', '多感知', '记忆记录'],
    sourceUrl: 'https://www.looki.ai/',
    coverUrl: '/image/cases/case-11.png'
  },
  {
    id: '12',
    title: 'Naro AI 智能穿戴助理',
    highlight: '隐私原生的主动式 AI 个人助理穿戴设备',
    description: '实时捕捉多维信息并主动推进任务，轻量 20g，无缝同步 100+ 应用，隐私保护融入设计全流程。',
    category: '智能硬件',
    tags: ['主动式AI', '数据同步', '隐私设计'],
    sourceUrl: 'https://naroai.co/',
    coverUrl: '/image/cases/case-12.png'
  },
  {
    id: '13',
    title: 'Lovot 情感陪伴机器人',
    highlight: '具备体温与情感 AI，用拟人化交互提供治愈',
    description: '搭载情感交互引擎，拥有仿生体温与柔软机身，通过感知互动做出撒娇行为，强化情感连接。',
    category: '智能硬件',
    tags: ['情感机器人', '仿生设计', '陪伴型'],
    sourceUrl: 'https://lovot.life/en/',
    coverUrl: '/image/cases/case-13.png'
  },
  {
    id: '14',
    title: 'Ling! 儿童随身 AI 学伴',
    highlight: '搭载 4D 空间智能交互，重构儿童探索世界方式',
    description: '依托 4D 时空交互系统，内置多角色 AI 学伴。融合多模态交互与主动情绪感知，保障儿童学习安全。',
    category: '智能硬件',
    tags: ['儿童教育', '空间交互', '情感陪伴'],
    sourceUrl: 'https://news.sina.com.cn/sx/2025-01-08/detail-ineefuwc4083401.shtml',
    coverUrl: '/image/cases/case-14.png'
  }
];