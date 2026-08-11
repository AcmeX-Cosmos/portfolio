<!-- Copyright (c) 2026 AcmeX. All rights reserved.
     Licensed under the MIT License. See LICENSE file in the project root. -->

<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container nav-inner">
      <div class="nav-logo">
        <!-- <span class="logo-bracket">&lt;</span> -->
        <span class="logo-text">陈泽欣</span>
        <!-- <span class="logo-bracket"> /&gt;</span> -->
      </div>
      <div class="nav-links">
        <a href="#home" class="nav-link">首页</a>
        <a href="#profile" class="nav-link">简介</a>
        <a href="#strengths" class="nav-link">优势</a>
        <a href="#projects" class="nav-link">项目</a>
        <a href="#timeline" class="nav-link">经历</a>
        <!-- <a href="#contact" class="nav-link">联系</a> -->
      </div>
      <a href="#contact" class="nav-cta">联系我</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 80
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--nav-height);
  transition: all 0.35s ease;

}

.navbar.scrolled {
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.nav-logo {
  font-family: 'Inter', monospace;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: 10%;

}

.logo-bracket {
  color: var(--text-muted);
  font-weight: 300;
}

.logo-text {
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  -webkit-background-clip: text;
  /* -webkit-text-fill-color: transparent; */
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 36px;
  align-items: center;
}

.nav-link {
  font-size: 14px;
  font-weight: 400;
  color: var(--text-secondary);
  transition: color 0.25s;
  letter-spacing: 0.5px;
}

.nav-link:hover {
  color: #fff;
}

.nav-cta {
  padding: 5px 24px;
  border: 1px solid var(--accent);
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  color: var(--accent);
  letter-spacing: 0.5px;
  transition: all 0.3s;
  margin-right: 10%;
}

.nav-cta:hover {
  background: var(--accent);
  color: #000;
}

@media (max-width: 768px) {
  .navbar {
    height: 58px;
    background: rgba(10, 10, 15, 0.78);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border-bottom: 1px solid var(--border);
  }

  .nav-inner {
    padding: 0 16px;
  }

  .nav-logo {
    margin-left: 0;
    font-size: 18px;
  }

  .nav-links {
    display: none;
  }

  .nav-cta {
    min-height: 36px;
    margin-right: 0;
    padding: 0 14px;
    border-radius: 6px;
  }
}
</style>
