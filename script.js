/* ===== i18n Dictionary ===== */
const i18n = {
  zh: {
    "app.title": "学习通学生门户",
    "meta.title": "学习通学生门户",
    "meta.description": "集中展示学生常用的学习通入口，支持浅色、深色模式与中英文切换。",
    "hero.eyebrow": "学习通学生门户",
    "hero.title": "学习通学生门户",
    "hero.lead":
      "把学生常用的学习通入口汇总在一个页面中，方便日常快速访问。你可以从这里进入作业、考试、消息、课表、课程、笔记本、云盘和学习资源等常用功能。",
    "hero.install": "安装应用",
    "portal.heading": "常用入口",
    "portal.chip": "面向学生",
    "portal.desc":
      "点击下方卡片即可在新标签页打开对应页面。如果当前还没有登录相关学习通服务，打开后会先跳转到登录页。",
    "card.exams.title": "考试列表",
    "card.inbox.title": "收件箱",
    "card.homework.title": "我的作业",
    "card.courses.title": "我的课程",
    "card.notebooks.title": "笔记本",
    "card.drive.title": "云盘",
    "card.schedule.title": "课表",
    "card.reading.title": "微读书",
    "card.video.title": "知视频",
    "card.academic.title": "大雅论文相似度检测",
    "compliance.heading": "使用提示",
    "compliance.1": "本页面不会绕过登录，也不会获取或保存你的账号信息。",
    "compliance.2":
      "请在你自己的账号已登录后使用对应入口访问相关页面。",
    "compliance.3":
      "本 PWA 只缓存门户本身的静态资源，不会缓存学习通内的个人页面内容。",
    "footer.text": "MIT License",
    "footer.repo": "GitHub 仓库",
    "aria.github": "GitHub 仓库",
    "aria.langToggle": "切换语言",
    "aria.themeToggle": "切换主题",
  },
  en: {
    "app.title": "Chaoxing Student Portal",
    "meta.title": "Chaoxing Student Portal",
    "meta.description":
      "A student portal for common Chaoxing entry points, with light and dark modes plus bilingual support.",
    "hero.eyebrow": "Chaoxing Student Portal",
    "hero.title": "Chaoxing Student Portal",
    "hero.lead":
      "A student portal that gathers common Chaoxing entry points in one place for quicker daily access. From here, you can open homework, exams, messages, schedule, courses, notebooks, cloud drive, and other learning resources.",
    "hero.install": "Install App",
    "portal.heading": "Quick Links",
    "portal.chip": "Student-facing",
    "portal.desc":
      "Tap a card below to open the corresponding page in a new tab. If you are not signed in to the related Chaoxing service, you will be redirected to the login page first.",
    "card.exams.title": "Exam List",
    "card.inbox.title": "Inbox",
    "card.homework.title": "My Homework",
    "card.courses.title": "My Courses",
    "card.notebooks.title": "Notebooks",
    "card.drive.title": "Cloud Drive",
    "card.schedule.title": "Schedule",
    "card.reading.title": "Micro Reading",
    "card.video.title": "Video Knowledge",
    "card.academic.title": "Daya Paper Similarity Check",
    "compliance.heading": "Helpful Notes",
    "compliance.1":
      "This page does not bypass login or collect and store your account information.",
    "compliance.2":
      "Please use these links only after signing in with your own account.",
    "compliance.3":
      "This PWA only caches the portal's own static assets, not personal Chaoxing pages or content.",
    "footer.text": "MIT License",
    "footer.repo": "GitHub Repository",
    "aria.github": "GitHub repository",
    "aria.langToggle": "Switch language",
    "aria.themeToggle": "Toggle theme",
  },
};

/* ===== Storage Helpers ===== */
function safeStorageGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (_) {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch (_) {
    return false;
  }
}

/* ===== Language ===== */
let currentLang = (function () {
  const stored = safeStorageGet("lang");
  if (stored === "zh" || stored === "en") return stored;
  return /^zh\b/i.test(navigator.language) ? "zh" : "en";
})();

function getManifestHref(lang) {
  return lang === "en" ? "./app.en.webmanifest" : "./app.webmanifest";
}

function applyLang(lang) {
  currentLang = lang;
  window.__preferredLang = lang;
  safeStorageSet("lang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = i18n[lang]["meta.title"];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = i18n[lang]["meta.description"];

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang][key] != null) el.textContent = i18n[lang][key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
    const mappings = el.getAttribute("data-i18n-attr");
    if (!mappings) return;

    mappings.split(";").forEach(function (mapping) {
      const parts = mapping.split(":");
      if (parts.length !== 2) return;

      const attr = parts[0].trim();
      const key = parts[1].trim();
      if (attr && i18n[lang][key] != null) el.setAttribute(attr, i18n[lang][key]);
    });
  });

  const manifestLink = document.getElementById("app-manifest");
  if (manifestLink) manifestLink.setAttribute("href", getManifestHref(lang));

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) langBtn.textContent = lang === "zh" ? "EN" : "中文";
}

/* ===== Theme ===== */
function getEffectiveTheme() {
  const stored = document.documentElement.dataset.theme;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyThemeIcon() {
  const theme = getEffectiveTheme();
  const sun = document.getElementById("icon-sun");
  const moon = document.getElementById("icon-moon");
  if (sun && moon) {
    sun.style.display = theme === "dark" ? "block" : "none";
    moon.style.display = theme === "dark" ? "none" : "block";
  }
}

function toggleTheme() {
  const next = getEffectiveTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  safeStorageSet("theme", next);
  applyThemeIcon();
}

/* ===== PWA Install ===== */
let deferredInstallPrompt = null;

function isStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

function updateInstallButtonVisibility() {
  const btn = document.getElementById("install-app");
  if (!btn) return;
  btn.hidden = isStandalone();
}

window.addEventListener("beforeinstallprompt", function (e) {
  e.preventDefault();
  deferredInstallPrompt = e;
  updateInstallButtonVisibility();
});

window.addEventListener("appinstalled", function () {
  deferredInstallPrompt = null;
  updateInstallButtonVisibility();
});

function handleInstallClick() {
  if (!deferredInstallPrompt) {
    var msg =
      currentLang === "zh"
        ? '当前浏览器暂时没有提供安装提示，可以使用浏览器菜单里的"添加到主屏幕"或"安装应用"。'
        : 'Your browser did not offer an install prompt. Use "Add to Home Screen" or "Install App" from the browser menu.';
    window.alert(msg);
    return;
  }
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.then(function () {
    deferredInstallPrompt = null;
    updateInstallButtonVisibility();
  });
}

/* ===== Init ===== */
document.addEventListener("DOMContentLoaded", function () {
  applyLang(currentLang);
  applyThemeIcon();
  updateInstallButtonVisibility();

  var themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  var langBtn = document.getElementById("lang-toggle");
  if (langBtn)
    langBtn.addEventListener("click", function () {
      applyLang(currentLang === "zh" ? "en" : "zh");
    });

  var installBtn = document.getElementById("install-app");
  if (installBtn) installBtn.addEventListener("click", handleInstallClick);
});

/* ===== Service Worker ===== */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./sw.js").catch(function () {});
  });
}

/* ===== Listen for system theme changes ===== */
var colorSchemeMedia = window.matchMedia("(prefers-color-scheme: dark)");
var handleSystemThemeChange = function () {
  if (!safeStorageGet("theme")) applyThemeIcon();
};

if (typeof colorSchemeMedia.addEventListener === "function") {
  colorSchemeMedia.addEventListener("change", handleSystemThemeChange);
} else if (typeof colorSchemeMedia.addListener === "function") {
  colorSchemeMedia.addListener(handleSystemThemeChange);
}
