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
    id: 'auto-20260428-01',
    title: 'GeniLoop — AI 图片转视频生成器',
    highlight: '一张照片变动态视频，创意内容生产效率跃升10倍',
    description: 'GeniLoop 登上 TAAFT 今日推荐榜单，专注将静态照片智能转化为高质量动态视频。无需剪辑技能，上传图片即可一键生成流畅的动态影像，支持多种风格模板与节奏控制，特别适合内容创作者、社交媒体运营和电商场景。起步价 $7.99/月，全平台兼容输出。',
    category: '软件与应用',
    tags: ['图片转视频', 'AI生成', '内容创作', 'TAAFT'],
    sourceUrl: 'https://theresanaiforthat.com/ai/geniloop-ai-image-to-video-generator/',
    coverUrl: '/image/cases/auto-20260428-01.jpg'
  },
  {
    id: 'auto-20260428-02',
    title: 'Figma for Agents — AI 代理连接设计系统',
    highlight: 'AI 代理直接读取组件库，生成的界面终于符合品牌规范',
    description: 'Figma 推出 use_figma MCP 工具，荣获 Product Hunt 4月14日当日产品第一。核心突破是让 Claude Code、Cursor、Copilot 等 AI 代理能直接访问团队的真实 Figma 组件、变量和自动布局，彻底解决 AI 生成 UI “不符合设计系统”的痛点。支持从代码库生成组件、同步 design token 并检测漂移、自动生成无障碍规范等专业功能。',
    category: '设计工作流',
    tags: ['Figma', 'AI设计', '设计系统', 'MCP工具'],
    sourceUrl: 'https://www.figma.com/blog/figma-for-agents/',
    coverUrl: '/image/cases/auto-20260428-02.jpg'
  },
  {
    id: 'auto-20260428-03',
    title: 'OpenAI 发布 GPT-5.5：首个真正 Agentic AI 模型',
    highlight: '代理编码+计算机操控+科研推理三合一，Token成本大幅下降',
    description: 'OpenAI 于 4 月 23 日正式发布 GPT-5.5，定位为首个真正意义上的 Agentic AI：可自主理解意图、在工具间切换并完成复杂多步骤任务。核心升级包括：代理编码能力显著提升、可直接操控计算机软件、早期科学研究能力，同时 Codex 任务 Token 消耗大幅降低，延迟与 GPT-5.4 持平。已向 ChatGPT Plus/Pro/Business/Enterprise 用户推送，并开放 API。',
    category: '交互范式',
    tags: ['GPT-5.5', 'OpenAI', 'Agentic AI', '大模型发布'],
    sourceUrl: 'https://openai.com/index/gpt-5-5/',
    coverUrl: '/image/cases/auto-20260428-03.jpg'
  },
  {
    id: 'auto-20260417-01',
    title: 'ChatComparison AI v2.0',
    highlight: '在统一界面中对比顶级 AI 模型的输出质量',
    description: 'ChatComparison AI v2.0 发布一小时即登 TAAFT 趋势榜 #4，用户可在同一界面中并排对比 GPT、Claude、Gemini 等顶级模型对同一提示词的输出结果，支持实时评分、历史记录和批量测试，帮助用户快速选择最适合自己的 AI 模型。',
    category: '软件与应用',
    tags: ['AI对比', '模型评测', '效率工具', '多模型'],
    sourceUrl: 'https://www.chatcomparison.ai/',
    coverUrl: '/image/cases/auto-20260417-01.jpg'
  },
  {
    id: 'auto-20260417-02',
    title: 'Brila — AI 语音助手',
    highlight: '4 月 Product Hunt AI 类目票王，得票超 125 万',
    description: 'Brila 以 1,258,243 票登顶 Product Hunt 2026 年 4 月 AI 产品榜，成为当月最受关注的 AI 语音产品。该产品聚焦 AI 驱动的自然语音交互体验，代表了 AI 语音助手赛道的新趋势。',
    category: '软件与应用',
    tags: ['AI语音', 'ProductHunt', '热门产品', '语音交互'],
    sourceUrl: 'https://hunted.space/dashboard/brila-2',
    coverUrl: '/image/cases/auto-20260417-02.jpg'
  },
  {
    id: 'auto-20260417-03',
    title: 'Anthropic 发布 Claude Opus 4.7',
    highlight: '自我验证 + 视觉增强 3 倍，编程能力再创新高',
    description: 'Anthropic 发布 Claude Opus 4.7，核心升级包括：自我验证能力使多任务工作流解决率提升 3 倍；视觉分辨率提升至 2,576 像素长边（375 万像素），CV 基准从 54.5% 飙升至 98.5%；CursorBench 编程得分从 58% 提升至 70%，新增 /ultrareview 深度代码审查命令；API 新增 xhigh 推理档位，工具调用出错率降低约 1/3。',
    category: '交互范式',
    tags: ['Claude', 'Anthropic', '大模型发布', 'AI编程'],
    sourceUrl: 'https://www.anthropic.com/news/claude-4-7',
    coverUrl: '/image/cases/auto-20260417-03.jpg'
  },

  {
    id: 'auto-20260416-01',
    title: 'Canva AI 2.0',
    highlight: 'AI 助手自主调用工具链，一句话生成完整设计方案',
    description: 'Canva 发布 AI 助手 2.0，支持 AI 自主调用 Slack、Gmail、Google Drive、Zoom 等工具完成设计任务。用户只需文本描述，AI 自动执行并生成多个可编辑方案，同时集成网页搜索与任务定时调度功能。图像生成速度提升 5 倍、成本降低 30 倍；图转视频速度提升 7 倍。已进入研究预览阶段。',
    category: '设计工作流',
    tags: ['AI助手', '多工具调用', '设计自动化', '多模态生成'],
    sourceUrl: 'https://techcrunch.com/2026/04/16/canvas-ai-assistant-can-now-call-various-tools-to-make-designs-for-you/',
    coverUrl: '/image/cases/auto-20260416-01.jpg'
  },
  {
    id: 'auto-20260416-02',
    title: 'Antioch — 物理 AI 仿真平台',
    highlight: '做物理 AI 领域的 Cursor，让机器人在虚拟环境高效训练',
    description: 'Antioch 致力于构建高保真机器人仿真工具，帮助开发者缩小“仿真到现实”(sim-to-real) 的差距。平台允许用户在虚拟环境中部署机器人模型并连接模拟传感器，生成训练数据与测试边缘案例，已完成 850 万美元种子轮融资，估值 6000 万美元。MIT 已将其用于大模型设计机器人的测试评估。',
    category: '设计工作流',
    tags: ['物理AI', '机器人仿真', 'AI训练数据', 'Sim-to-Real'],
    sourceUrl: 'https://techcrunch.com/2026/04/16/this-simulation-startup-wants-to-be-the-cursor-for-physical-ai/',
    coverUrl: '/image/cases/auto-20260416-02.jpg'
  },
  {
    id: 'auto-20260415-01',
    title: 'nohow.ai',
    highlight: '将任意文档一键转换为可对话的 AI 助手',
    description: '上传 PDF、Word 等文档后，nohow.ai 自动提取知识结构并生成专属 AI 助手，实现精准问答与知识检索，大幅降低文档管理成本。',
    category: '软件与应用',
    tags: ['知识管理', 'RAG应用', '文档智能', 'AI助手'],
    sourceUrl: 'https://theresanaiforthat.com/ai/nohow-ai',
    coverUrl: '/image/cases/auto-20260415-01.jpg'
  },
  {
    id: 'auto-20260415-02',
    title: 'Articos v2.0',
    highlight: '30 分钟内完成用户研究，AI 秒级生成洞察报告',
    description: 'Articos 通过 AI 自动化用户访谈分析与主题提炼，将传统数周的定性研究压缩至半小时内，登上 TAAFT 趋势榜 #3，是设计师加速研究节奏的利器。',
    category: '设计工作流',
    tags: ['用户研究', 'AI自动化', '定性分析', '设计提效'],
    sourceUrl: 'https://theresanaiforthat.com/ai/articos',
    coverUrl: '/image/cases/auto-20260415-02.jpg'
  },
  {
    id: 'auto-20260415-03',
    title: '苹果选择 Google Gemini 驱动下一代 Siri',
    highlight: 'Apple × Google 联手，AI Siri 随 iOS 26 重磅亮相',
    description: '苹果宣布与 Google 签署多年合作协议，由 Gemini 模型为全新 AI Siri 提供底层支持，预计每年支付约 10 亿美元授权费。新版 Siri 将运行于苹果私有云以保障隐私，随 iOS 26 / macOS 26 Tahoe 发布，标志着 AI 助手竞争格局深刻重塑。',
    category: '交互范式',
    tags: ['行业动态', 'AI助手', 'Apple × Google', '大模型合作'],
    sourceUrl: 'https://arstechnica.com/apple/2026/01/apple-says-its-new-ai-powered-siri-will-use-googles-gemini-language-models/',
    coverUrl: '/image/cases/auto-20260415-03.jpg'
  },
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
    description: '全链路设计智能体，支持多模型集成。其“移动对象”功能可自由拖拽元素并自动修复背景，将半小时操作缩短至30秒。',
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

