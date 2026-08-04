<template>
  <main class="site-shell">
    <!-- <header class="nav-shell">
      <a class="brand" href="#home" aria-label="回到首页">
        <span class="brand-mark">CZ</span>
        <span>
          <strong>陈泽欣</strong>
          <small>Robot Vision / ROS2</small>
        </span>
      </a>

     <nav class="nav-links" aria-label="主导航">
        <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>
      
      <a class="nav-contact" href="mailto:AcmeX@foxmail.com">联系我</a>
    </header> -->

    <NavBar />
    
    <section id="home" class="hero section-block">
      <video
        class="hero-video"
        autoplay
        muted
        loop
        playsinline
      >
        <source
          :src="`${BASE}media/neural-grid-mobile.mp4`"
          type="video/mp4"
          media="(hover: none) and (pointer: coarse)"
        />
        <source :src="`${BASE}media/neural-grid.mp4`" type="video/mp4" />
      </video>
      <div class="page-frame hero-stage">
        <div class="hero-copy">
          <!-- <p class="eyebrow">ROBOTICS VISION ENGINEER</p> -->
          <div class="hero-badge" ><span class="badge-line" ></span><span class="badge-text" >ROBOTICS VISION · ROS2 SYSTEM</span><span class="badge-line" ></span></div>
          <h1>
            <span>Robot</span>
            <span class="hero-title-secondary">Embodied</span>
            <!-- <span>Vision</span> -->
          </h1>
          <div class="hero-lead">
            <p class="hero-content">我是陈泽欣，专注于机器人视觉感知与 ROS2 系统架构开发</p>
            <p class="hero-content">从算法到部署，为具身智能注入感知与决策能力</p>
          </div>
            
          <div class="hero-actions">
            <a class="primary-action" href="#timeline">查看经历</a>
            <a class="ghost-action" href="#projects">精选项目</a>
          </div>
        </div>

        <div class="hero-orbit" aria-label="个人优势">
          <article
            v-for="strength in heroStrengths"
            :key="strength.title"
            class="floating-card orbit-card hover-react"
            :style="strength.style"
          >
            <span class="orbit-index">{{ strength.code }}</span>
            <div>
              <strong>{{ strength.title }}</strong>
              <p>{{ strength.summary }}</p>
            </div>
          </article>
        </div>
      </div>

      <div class="bottom-accent" ><div class="bottom-accent-inner" ></div></div>

      <div class="scroll-indicator" ><div class="scroll-track" ><div class="scroll-bar" ></div></div></div>
    </section>

    <section id="profile" class="profile-section section-block">
      <div class="page-frame">
        <div class="profile-title">
          <!-- <h2>PERSONAL PROFILE</h2> -->
          <!-- <span aria-hidden="true">↘</span> -->
          <!-- <p>个人简介</p> -->
        </div>

        
        <div class="profile-layout">

          <div class="profile-card">
            <div class="profile-ring"></div>
            <figure class="portrait-card hover-react">
              <picture>
                <source
                  :srcset="`${BASE}mobile/portrait.webp`"
                  type="image/webp"
                  media="(hover: none) and (pointer: coarse)"
                />
                <img :src="`${BASE}media/portrait.png`" alt="头像" decoding="async" />
              </picture>
            </figure>
            <div class="profile-contact-stack" aria-label="微信与地点">
              <article class="profile-contact-chip hover-react" style="--accent: #ffe27a;">
                <span>WECHAT</span>
                <strong>AcmeX_</strong>
              </article>
              <article class="profile-contact-chip hover-react" style="--accent: #67d9ff;">
                <span>LOCATION</span>
                <strong>广东 深圳</strong>
              </article>
            </div>
          </div>

          <div class="about-panel">
            <div class="profile-copy">
              <p class="eyebrow">ABOUT ME</p>
              <h3>Hi, I am 陈泽欣</h3>
              <p>
                我是机器人视觉算法与 ROS2 系统开发方向的工程型选手，长期投入 RoboMaster
                真实机器人系统，关注目标检测、6DoF 位姿估计、多传感器融合跟踪和弹道解算。
              </p>
            </div>

            <div class="profile-facts">
              <div class="fact-row">
                <span>当前身份</span>
                <strong>机器人视觉算法 / ROS2 系统开发</strong>
              </div>
              <div class="fact-row">
                <span>研究方向</span>
                <strong>Robot Vision / Embodied AI</strong>
              </div>
              <div class="fact-row">
                <span>手机</span>
                <a href="tel:14750303805">14750303805</a>
              </div>
              <div class="fact-row">
                <span>邮箱</span>
                <a href="mailto:AcmeX@foxmail.com">AcmeX@foxmail.com</a>
              </div>
            </div>

            <div class="metric-cloud">
              <article
                v-for="metric in metrics"
                :key="metric.label"
                class="metric-card hover-react"
                :style="metric.style"
              >
                <strong>{{ metric.value }}</strong>
                <span>{{ metric.label }}</span>
              </article>
            </div>

            <div class="now-building">
              <p>NOW BUILDING</p>
              <div>
                <span v-for="item in nowBuilding" :key="item">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="timeline" class="timeline-section section-block">
      <div class="page-frame">
        <div class="section-heading">
          <p class="eyebrow">EXPERIENCE TIMELINE</p>
          <h2>经历时间轴</h2>
        </div>

        <div class="timeline-track" aria-label="个人经历时间轴">
          <article
            v-for="event in timeline"
            :key="event.title"
            class="timeline-card hover-react"
            :class="event.align"
          >
            <span class="timeline-dot" aria-hidden="true"></span>
            <p>{{ event.period }}</p>
            <h3>{{ event.title }}</h3>
            <strong>{{ event.role }}</strong>
            <span>{{ event.desc }}</span>
          </article>
        </div>
      </div>
    </section>

    <section id="projects" class="projects-section section-block">
      <div class="page-frame">
        <div class="section-heading wide">
          <div>
            <p class="eyebrow">SELECTED PROJECTS</p>
            <h2>项目工程</h2>
          </div>
          <p>
            以机器人跟踪系统为主线，串联识别、姿态、调度、仿真、数据与部署观测等工程能力。
          </p>
        </div>

        <div class="project-system">
          <div class="project-orbit-stage">
            <button
              class="project-card project-card-main hover-react"
              type="button"
              :style="featuredProject.style"
              @click="openProject(featuredProject)"
            >
              <div class="project-image">
                <picture>
                  <source
                    :srcset="mobileProjectImage(featuredProject.image)"
                    type="image/webp"
                    media="(hover: none) and (pointer: coarse)"
                  />
                  <img
                    :src="featuredProject.image"
                    :alt="featuredProject.title"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <span>{{ featuredProject.period }}</span>
              </div>
              <div class="project-body">
                <p>{{ featuredProject.role }}</p>
                <h3>{{ featuredProject.title }}</h3>
                <div class="tag-row">
                  <span v-for="tag in featuredProject.tags" :key="tag">{{ tag }}</span>
                </div>
                <span class="project-open">进入项目详情</span>
              </div>
            </button>

            <div class="project-orbit" aria-label="围绕核心项目的子项目">
              <button
                v-for="project in sideProjects"
                :key="project.title"
                class="project-card project-card-side hover-react"
                :class="project.size"
                type="button"
                :style="project.style"
                @click="openProject(project)"
              >
                <div class="project-image">
                  <picture>
                    <source
                      :srcset="mobileProjectImage(project.image)"
                      type="image/webp"
                      media="(hover: none) and (pointer: coarse)"
                    />
                    <img
                      :src="project.image"
                      :alt="project.title"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <span>{{ project.period }}</span>
                </div>
                <div class="project-body">
                  <p>{{ project.role }}</p>
                  <h3>{{ project.title }}</h3>
                  <div class="tag-row">
                    <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
                  </div>
                  <span class="project-open">进入项目详情</span>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>

    <Teleport to="body">
      <template v-if="detailActive">
        <div
          class="project-detail-backdrop active"
          aria-hidden="true"
          @click="closeProject"
        ></div>
        <div ref="projectModalViewport" class="project-modal-viewport" @click.self="closeProject">
          <section
            class="project-inline-detail active"
            :style="selectedProject?.style"
            aria-modal="true"
            role="dialog"
          >
            <div class="detail-transition" :class="{ active: detailTransition }" aria-hidden="true">
              <span>{{ selectedProject?.title }}</span>
            </div>
            <div class="inline-detail-head">
              <div>
                <p class="eyebrow">PROJECT PAGE</p>
                <h3>{{ selectedProject?.title || '项目详情' }}</h3>
                <span>{{ selectedProject?.role || '点击项目矩阵中的卡片，进入独立项目页面。' }}</span>
              </div>
              <button
                type="button"
                class="detail-close"
                aria-label="关闭项目详情"
                title="关闭项目详情"
                @click="closeProject"
              >×</button>
            </div>
            <iframe
              ref="projectDetailFrame"
              class="project-detail-frame"
              :src="selectedProject ? `${BASE}project-detail.html?id=${selectedProject.id}` : 'about:blank'"
              :title="selectedProject ? `${selectedProject.title} 详情页` : '项目详情页'"
            ></iframe>
          </section>
          <div class="detail-float-tools" :style="selectedProject?.style">
            <button
              type="button"
              class="detail-jump"
              aria-label="快速回到项目页顶部"
              title="回到顶部"
              @click.stop="scrollProjectDetail('top')"
            >↑</button>
            <button
              type="button"
              class="detail-close detail-close-floating"
              aria-label="关闭项目详情"
              title="关闭项目详情"
              @click.stop="closeProject"
            >
              <span class="detail-close-icon" aria-hidden="true">×</span>
            </button>
            <button
              type="button"
              class="detail-jump"
              aria-label="快速前往项目页底部"
              title="前往底部"
              @click.stop="scrollProjectDetail('bottom')"
            >↓</button>
          </div>
        </div>
      </template>
    </Teleport>

    <section id="strengths" class="strengths-section section-block">
      <div class="page-frame">
        <div class="section-heading">
          <p class="eyebrow">CAPABILITY MATRIX</p>
          <h2>个人优势</h2>
        </div>

        <div class="strength-showcase">
          <div class="strength-grid">
            <article
              v-for="strength in strengths"
              :key="strength.title"
              class="strength-card hover-react"
              :style="strength.style"
            >
              <div class="strength-index">{{ strength.code }}</div>
              <div>
                <span class="strength-metric">{{ strength.metric }}</span>
                <h3>{{ strength.title }}</h3>
                <p>{{ strength.desc }}</p>
              </div>
              <div class="mini-tags">
                <span v-for="tag in strength.tags" :key="tag">{{ tag }}</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact-section section-block">
      <div class="page-frame contact-layout">
        <div class="contact-heading">
          <p class="eyebrow">联系方式</p>
          <h2>期待与您<span>合作</span></h2>
          <p>
            如果您有机器人视觉或 ROS2 系统相关的项目需求，欢迎随时联系，
            一起探索机器人技术的可能性。
          </p>
        </div>

        <div class="contact-grid" aria-label="联系方式列表">
          <a class="contact-card hover-react" href="mailto:AcmeX@foxmail.com" style="--accent: #82ffd2;">
            <span class="contact-icon" aria-hidden="true">✉</span>
            <span class="contact-label">邮箱</span>
            <strong>AcmeX@foxmail.com</strong>
          </a>

          <a class="contact-card hover-react" href="tel:14750303805" style="--accent: #67d9ff;">
            <span class="contact-icon" aria-hidden="true">▦</span>
            <span class="contact-label">电话</span>
            <strong>+86 147-5030-3805</strong>
          </a>
          <article class="contact-card hover-react" style="--accent: #ffe27a;">
            <span class="contact-icon" aria-hidden="true">◇</span>
            <span class="contact-label">WECHAT</span>
            <strong>AcmeX_</strong>
          </article>
          <article class="contact-card hover-react" style="--accent: #ff7a90;">
            <span class="contact-icon" aria-hidden="true">📍</span>
            <span class="contact-label">位置</span>
            <strong>广东 · 深圳</strong>
          </article>
        </div>

        <a class="contact-cta" href="mailto:AcmeX@foxmail.com">
          发送邮件
          <span aria-hidden="true">→</span>
        </a>
      </div>
      <footer class="contact-footer">
        <p>© 2026 陈泽欣. All rights reserved.</p>
      </footer>
    </section>
  </main>
</template>

<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import NavBar from './components/NavBar.vue'

const BASE = import.meta.env.BASE_URL
const assetPath = (path) => `${BASE}${path.replace(/^\//, '')}`

const navItems = [
  { label: '首页', href: '#home' },
  { label: '经历', href: '#timeline' },
  { label: '项目', href: '#projects' },
  { label: '优势', href: '#strengths' },
]

const heroStrengths = [
  { code: '01', title: 'ROS2 系统工程', summary: '通信架构 · TF2 · 模块部署', style: '--accent: #d8ff3f;' },
  { code: '02', title: '具身智能跨域', summary: '视觉 · 语言模型 · 机器人', style: '--accent: #67d9ff;' },
  { code: '03', title: '机器人视觉闭环', summary: '感知 · 跟踪 · 控制输出', style: '--accent: #ff7a90;' },
  { code: '04', title: '跨域工具链整合', summary: '仿真 · 训练 · 可视化', style: '--accent: #ffe27a;' },
  { code: '05', title: '高压交付攻坚', summary: '实时调试 · 定位 · 部署', style: '--accent: #82ffd2;' },
]

const metrics = [
  { value: '98%+', label: '装甲板数字识别测试准确率', style: '--accent: #c7fe2b;' },
  { value: '<1ms', label: '轻量网络单次推理耗时', style: '--accent: #6ce7ff;' },
  { value: '±1.5°', label: 'BA 优化后重投影角度误差', style: '--accent: #ffe27a;' },
  { value: '80%', label: '赛事调度系统效率提升', style: '--accent: #ff7a90;' },
]

const nowBuilding = ['多兵种视觉系统', 'ROS2 模块化架构', '具身智能方向', '赛事调度工具']

const timeline = [
  {
    period: '2022.09 - 2026.06',
    title: '深圳职业技术大学',
    role: '人工智能技术应用',
    desc: '主修计算机视觉、深度学习、C++ / Python、Linux、高等数学和线性代数。',
    align: 'top',
  },
  {
    period: '2025.04 - 2025.06',
    title: '骰子识别与姿态估计系统',
    role: '独立完成',
    desc: '融合 YOLOv10、PnP、BA、PoseNet 与 PyQt5 GUI，完成多模型姿态估计与实时展示。',
    align: 'bottom',
  },
  {
    period: '2025.08',
    title: '深圳大疆创新 RoboMaster 全国赛',
    role: '备场组组长 / 独立开发',
    desc: '负责 10 人团队与 30+ 队伍备场协调，开发 Vue3 调度系统，将排班耗时从 15 分钟降至 3 分钟。',
    align: 'top',
  },
  {
    period: '2025.09 - 2025.10',
    title: 'CycleGAN 艺术风格迁移及 3D 纹理渲染',
    role: '独立完成',
    desc: '自建风景与梵高数据集，训练 CycleGAN，并用 Blender 脚本实现纹理映射和批量渲染。',
    align: 'bottom',
  },
    {
    period: '2023.09 - 至今',
    title: 'RoboMaster 机器人跟踪射击系统',
    role: '核心算法负责人',
    desc: '负责装甲板检测、PnP/BA 位姿优化、9 维 EKF 跟踪、弹道解算与 UE5 虚实仿真闭环。',
    align: 'top',
  },
]

const projects = [
  {
    id: 'tracking-design-system',
    title: 'RoboMaster 机器人跟踪设计系统',
    role: '核心算法负责人',
    period: '2023.09 - 至今',
    image: `${BASE}projects/robomaster-system.png`,
    size: 'main',
    style: '--accent: #d8ff3f;',
    tags: ['ROS2', 'TF2', 'PnP', 'Ceres BA', 'EKF', 'UE5'],
    pages: [
      {
        label: '系统',
        kicker: 'SYSTEM ARCHITECTURE',
        title: '跟踪设计系统作为整站项目核心',
        body: '围绕赛场机器人构建从图像输入、目标检测、位姿估计、滤波跟踪到云台控制的完整闭环。',
        bullets: [
          'ROS2 与 DDS 组织去中心化节点网络，统一参数、生命周期和调试入口。',
          'TF2 坐标树串联相机、云台、车体与世界系，保证模块边界清晰可追踪。',
        ],
      },
      {
        label: '算法',
        kicker: 'VISION AND TRACKING',
        title: '检测、位姿、跟踪和弹道补偿协同',
        body: '装甲板识别后进入 SolvePnP 与 Ceres BA 位姿优化，再由 9 维 EKF 融合运动先验输出预测状态。',
        bullets: [
          '灯条几何筛选与 LeNet-5 数字识别组合，提高装甲板 ID 稳定性。',
          'EKF 状态量覆盖位置、速度和旋转，接入弹道补偿输出云台瞄准指令。',
        ],
      },
      {
        label: '交付',
        kicker: 'FIELD DELIVERY',
        title: '面向赛场高压环境的可调试交付',
        body: '通过日志、可视化和仿真联调减少现场排障时间，让算法改动能快速回到真实机器人验证。',
        bullets: [
          'UE5 虚实仿真闭环复现目标运动，提前验证跟踪和预测策略。',
          'Foxglove 与 rosbag 辅助回放定位，形成可复盘的工程调试流程。',
        ],
      },
    ],
  },
  {
    id: 'dice-pose',
    title: '骰子识别与姿态估计系统',
    role: '识别与姿态',
    period: '2025.04 - 2025.06',
    image: `${BASE}projects/dice-pose.png`,
    size: 'lifted',
    style: '--accent: #67d9ff;',
    tags: ['YOLOv10', 'PnP', 'BA', 'PoseNet', 'PyQt5'],
    pages: [
      {
        label: '识别',
        kicker: 'DETECTION',
        title: '从多光照数据集中稳定检测骰子面',
        body: '自建数据集并生成检测框与旋转向量标签，让小目标检测结果可以直接进入姿态链路。',
        bullets: ['YOLOv10 负责目标框与类别判断。', 'PyTorch 训练过程记录 Loss、MAE 和样例预测。'],
      },
      {
        label: '姿态',
        kicker: 'POSE ESTIMATION',
        title: 'PnP、BA 与 PoseNet 的多模型融合',
        body: '用几何解算提供强约束，用神经网络补充复杂视角下的鲁棒性，降低单一路径失效风险。',
        bullets: ['SolvePnP 输出初始 6DoF 位姿。', 'Ceres BA 优化重投影误差，PoseNet 提供备选估计。'],
      },
      {
        label: '界面',
        kicker: 'INTERACTION',
        title: '可切换图像、视频和屏幕检测的 GUI',
        body: 'PyQt5 GUI 让训练结果能被快速演示、复查和调参，适合模型对比与现场展示。',
        bullets: ['支持实时帧检测与结果叠加。', '训练指标、预测姿态和可视化窗口集中展示。'],
      },
    ],
  },
  {
    id: 'schedule-dashboard',
    title: 'RoboMaster 全国赛备场调度系统',
    role: '流程工具',
    period: '2025.08',
    image: `${BASE}projects/schedule-dashboard.png`,
    size: 'compact',
    style: '--accent: #ff7a90;',
    tags: ['Vue3', 'Schedule', 'Workflow', 'Automation'],
    pages: [
      {
        label: '流程',
        kicker: 'EVENT WORKFLOW',
        title: '把备场调度拆成可执行的时间节点',
        body: '围绕 10 人团队和 30+ 队伍协调，把人、场地、A/B 组轮换与提醒统一到一个工作台。',
        bullets: ['队伍状态、备场窗口和人员安排同步更新。', '人数限制与轮换规则内置，减少人工检查。'],
      },
      {
        label: '规则',
        kicker: 'RULE ENGINE',
        title: '用前端规则降低冲突和遗漏',
        body: '将调度经验沉淀为校验条件，关键节点自动提示，避免靠口头同步维持秩序。',
        bullets: ['高校赛程节点预警。', '人员冲突、空岗和超员状态即时反馈。'],
      },
      {
        label: '结果',
        kicker: 'RESULT',
        title: '排班从 15 分钟压缩到 3 分钟',
        body: '现场重复排班和信息追问显著减少，备场节奏更容易稳定复制。',
        bullets: ['调度效率提升约 80%。', '关键场次冲突与遗漏清零。'],
      },
    ],
  },
  {
    id: 'cyclegan-render',
    title: 'CycleGAN 艺术风格迁移与 3D 纹理渲染',
    role: '数据与渲染',
    period: '2025.09 - 2025.10',
    image: `${BASE}projects/artStyleGan-render.png`,
    size: 'wide',
    style: '--accent: #ffe27a;',
    tags: ['CycleGAN', 'U-Net', 'PatchGAN', 'Blender', 'WandB'],
    pages: [
      {
        label: '训练',
        kicker: 'GAN TRAINING',
        title: '自建数据集训练风格迁移模型',
        body: '使用约 2700 张风景与梵高风格数据，搭建 CycleGAN 训练流程并通过 WandB 监控。',
        bullets: ['U-Net 生成器与 PatchGAN 判别器组合。', 'LSGAN、循环一致性和身份一致性损失共同约束。'],
      },
      {
        label: '渲染',
        kicker: '3D RENDER',
        title: '把二维风格结果映射到 3D 纹理',
        body: '通过 Blender Python 自动加载纹理、设置材质和批量渲染，形成从模型输出到视觉资产的流水线。',
        bullets: ['脚本化完成纹理映射。', '批量生成对比图，方便筛选可用风格。'],
      },
      {
        label: '价值',
        kicker: 'PIPELINE VALUE',
        title: '补充机器人项目中的仿真视觉资产能力',
        body: '该项目强化了数据生成、脚本自动化和视觉呈现能力，可迁移到仿真数据与场景资产制作。',
        bullets: ['熟悉训练监控与结果评估。', '能把模型产物接入可视化生产流程。'],
      },
    ],
  },
  {
    id: 'armor-dataset-lab',
    title: '装甲板数据集与标注实验室',
    role: '数据链路',
    period: '2024.03 - 2024.08',
    image: `${BASE}projects/armor-dataset.png`,
    size: 'data',
    style: '--accent: #82ffd2;',
    tags: ['Dataset', 'Labeling', 'Augment', 'OpenCV'],
    pages: [
      {
        label: '采集',
        kicker: 'DATA CAPTURE',
        title: '覆盖场地、曝光和运动模糊的数据采集',
        body: '围绕主项目的装甲板识别需求，按场景拆分数据来源，提升模型对复杂光照的适应性。',
        bullets: ['整理静态、移动、远距和近距样本。', '保留原始帧与推理失败帧用于回归测试。'],
      },
      {
        label: '增强',
        kicker: 'AUGMENTATION',
        title: '把赛场扰动转成可控增强策略',
        body: '针对反光、过曝、遮挡和运动模糊构建增强组合，让识别模型更贴近真实机器人输入。',
        bullets: ['亮度、噪声、模糊和透视扰动组合。', '按 ID 分布检查样本均衡。'],
      },
      {
        label: '回归',
        kicker: 'REGRESSION',
        title: '用失败样本持续更新测试集',
        body: '把现场误检、漏检和 ID 混淆样本纳入回归集，保证后续模型优化不破坏已有表现。',
        bullets: ['维护困难样本分组。', '对比不同模型版本的准确率和耗时。'],
      },
    ],
  },
  {
    id: 'ue5-sim-loop',
    title: 'UE5 虚实仿真跟踪验证',
    role: '仿真测试',
    period: '2024.09 - 2025.01',
    image: `${BASE}projects/ue5-simulation.png`,
    size: 'sim',
    style: '--accent: #9f8cff;',
    tags: ['UE5', 'Simulation', 'Trajectory', 'Replay'],
    pages: [
      {
        label: '场景',
        kicker: 'SIMULATION',
        title: '用仿真复现赛场目标运动',
        body: '构建目标运动、相机视角和遮挡变化，用可重复输入验证主系统的跟踪与预测策略。',
        bullets: ['生成不同速度和转向模式的目标轨迹。', '模拟视角变化和短时丢失。'],
      },
      {
        label: '联调',
        kicker: 'ROS2 BRIDGE',
        title: '让仿真输出进入 ROS2 调试链路',
        body: '将仿真数据按真实系统接口组织，减少算法只在离线环境可用的问题。',
        bullets: ['对齐图像、位姿和时间戳。', '验证 TF2 坐标变换和追踪输出。'],
      },
      {
        label: '评估',
        kicker: 'EVALUATION',
        title: '在可控条件下比较预测策略',
        body: '通过轨迹误差、丢失恢复时间和控制延迟评估不同策略，为真实机器人上场前筛掉不稳定方案。',
        bullets: ['回放同一轨迹比较参数组。', '记录跟踪抖动和恢复时间。'],
      },
    ],
  },
  {
    id: 'foxglove-observability',
    title: 'ROS2 可视化与部署观测台',
    role: '工程化',
    period: '2025.02 - 2025.05',
    image: `${BASE}projects/ros2-visualization.png`,
    size: 'ops',
    style: '--accent: #ff9f45;',
    tags: ['Foxglove', 'rosbag', 'Docker', 'Logs'],
    pages: [
      {
        label: '观测',
        kicker: 'OBSERVABILITY',
        title: '把黑箱调试变成可回放的系统面板',
        body: '围绕主跟踪系统整理关键话题、坐标、状态量和日志，让现场问题能快速定位。',
        bullets: ['Foxglove 面板展示检测框、位姿和预测轨迹。', 'rosbag 回放复现偶发问题。'],
      },
      {
        label: '部署',
        kicker: 'DEPLOYMENT',
        title: '统一环境和启动流程',
        body: '将依赖、参数和启动脚本收束，降低不同机器之间的部署差异。',
        bullets: ['Docker 管理训练与推理依赖。', '启动文件组织节点组合和参数切换。'],
      },
      {
        label: '排障',
        kicker: 'DEBUG LOOP',
        title: '缩短现场排障闭环',
        body: '将日志、话题和回放数据绑定到问题处理流程，帮助团队快速判断是算法、通信还是硬件问题。',
        bullets: ['保留关键帧与异常日志。', '建立参数调整后的回归验证步骤。'],
      },
    ],
  },
]

const featuredProject = computed(() => projects[0])
const sideProjects = computed(() => projects.slice(1))
const mobileProjectImage = (image) => image
  .replace(`${BASE}projects/`, `${BASE}mobile/`)
  .replace(/\.[^.]+$/, '.webp')
const selectedProject = ref(projects[0])
const detailActive = ref(false)
const detailTransition = ref(false)
const projectModalViewport = ref(null)
const projectDetailFrame = ref(null)

const openProject = async (project) => {
  selectedProject.value = project
  detailTransition.value = true

  await nextTick()

  detailActive.value = true

  window.setTimeout(() => {
    detailTransition.value = false
  }, 260)
}

const closeProject = () => {
  detailActive.value = false
  detailTransition.value = false
}

const scrollProjectDetail = (position) => {
  const viewport = projectModalViewport.value
  const frameWindow = projectDetailFrame.value?.contentWindow
  const scrollToTop = position === 'top'

  viewport?.scrollTo({
    top: scrollToTop ? 0 : viewport.scrollHeight,
    behavior: 'smooth',
  })

  try {
    frameWindow?.scrollTo({
      top: scrollToTop ? 0 : frameWindow.document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  } catch {
    // The outer A4 viewport still scrolls if iframe access is unavailable.
  }
}

watch(detailActive, (active) => {
  document.body.classList.toggle('detail-modal-open', active)
})

const handleProjectModalKeydown = (event) => {
  if (event.key === 'Escape' && detailActive.value) closeProject()
}

onMounted(() => window.addEventListener('keydown', handleProjectModalKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', handleProjectModalKeydown)
  document.body.classList.remove('detail-modal-open')
})

const strengths = [
  {
    code: '01',
    title: 'ROS2 系统工程',
    metric: 'Distributed Runtime',
    desc: '熟悉 ROS2 通信、Component 架构、TF2 坐标树、节点生命周期与多模块部署调试。',
    tags: ['DDS', 'TF2', 'Component', 'Lifecycle'],
    style: '--accent: #d8ff3f; --x: 50%; --y: 7%;',
  },
  {
    code: '02',
    title: '具身智能跨域潜力',
    metric: 'Embodied AI Bridge',
    desc: '人工智能专业背景让我能理解视觉、语言模型与机器人系统之间的连接，也有与电控联通、机器人调试和系统集成经验。',
    tags: ['AI Major', 'LLM Fine-tuning', 'Control Link', 'Embodied AI'],

    style: '--accent: #67d9ff; --x: 87%; --y: 31%;',
  },
  {
    code: '03',
    title: '机器人视觉闭环能力',
    metric: 'Perception to Control',
    desc: '能够从图像预处理、目标检测、位姿解算、滤波跟踪到控制指令输出串起完整链路。',
    tags: ['OpenCV', 'YOLO', 'PnP', 'Ceres', 'EKF'],
    style: '--accent: #ff7a90; --x: 75%; --y: 79%;',
  },
  {
    code: '04',
    title: '跨域工具链整合',
    metric: 'Toolchain Builder',
    desc: '能将仿真、训练、可视化、前后端工具整合进工程流程，提高调试效率与团队协作质量。',
    tags: ['UE5', 'Foxglove', 'Docker', 'Vue3'],
    style: '--accent: #ffe27a; --x: 25%; --y: 79%;',
  },
  {
    code: '05',
    title: '高压交付与问题攻坚',
    metric: 'Field Debugging',
    desc: '经历赛场级实时系统压力验证，能在硬件、通信、算法多因素耦合下定位并解决问题。',
    tags: ['Debug', 'Realtime', 'Deployment'],
    style: '--accent: #82ffd2; --x: 13%; --y: 31%;',
  },
]

onMounted(async () => {
  await nextTick()

  const scrollToHash = () => {
    const id = window.location.hash.slice(1)
    if (!id) return

    const target = document.getElementById(id)
    if (!target) return

    const navOffset = 0
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset

    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior

    root.style.scrollBehavior = 'auto'
    window.scrollTo(0, Math.max(0, top))
    root.style.scrollBehavior = previousScrollBehavior
  }

  requestAnimationFrame(scrollToHash)
  window.setTimeout(scrollToHash, 240)
  window.addEventListener('hashchange', scrollToHash)
})
</script>
