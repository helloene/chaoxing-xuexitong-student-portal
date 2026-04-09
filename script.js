/* ===== i18n Dictionary / 国际化字典 ===== */
const i18n = {
  zh: {
    "app.title": "学习通门户",
    "app.shortTitle": "学习通门户",
    "meta.title": "学习通学生门户",
    "meta.description": "集中展示学生常用的学习通入口，支持浅色、深色模式与中英文切换。",
    "faq.meta.title": "学习通门户 FAQ",
    "faq.meta.description": "查看学习通门户常见问题，以及首页与各个内置入口的实际跳转链接。",
    "hero.eyebrow": "学生常用入口",
    "hero.title": "学习通常用功能，一页直达",
    "hero.lead":
      "把学生常用的学习通入口汇总在一个页面中，方便日常快速访问。你可以从这里进入作业、考试、消息、课表、课程、笔记本、云盘和学习资源等常用功能。",
    "hero.install": "安装应用",
    "hero.faq": "查看 FAQ 与实际链接",
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
    "footer.faq": "FAQ 页面",
    "aria.github": "GitHub 仓库",
    "aria.langToggle": "切换语言",
    "aria.themeToggle": "切换主题",
  },
  en: {
    "app.title": "Chaoxing Portal",
    "app.shortTitle": "Chaoxing Portal",
    "meta.title": "Chaoxing Student Portal",
    "meta.description":
      "A student portal for common Chaoxing entry points, with light and dark modes plus bilingual support.",
    "faq.meta.title": "Chaoxing Portal FAQ",
    "faq.meta.description":
      "Read common questions about the portal and see the direct URLs for each built-in destination.",
    "hero.eyebrow": "Student Quick Access",
    "hero.title": "Your Everyday Chaoxing Links In One Place",
    "hero.lead":
      "A student portal that gathers common Chaoxing entry points in one place for quicker daily access. From here, you can open homework, exams, messages, schedule, courses, notebooks, cloud drive, and other learning resources.",
    "hero.install": "Install App",
    "hero.faq": "FAQ & Direct URLs",
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
    "footer.faq": "FAQ Page",
    "aria.github": "GitHub repository",
    "aria.langToggle": "Switch language",
    "aria.themeToggle": "Toggle theme",
  },
};

// Safari install guidance is grouped by platform because iPhone/iPad and Mac use different menu paths.
// Safari 的安装引导按平台分组，因为 iPhone/iPad 与 Mac 的菜单路径不同。
const installGuideCopy = {
  zh: {
    "ios-safari": {
      hint: "Safari 需要通过“分享”菜单手动安装；如果没看到“添加到主屏幕”，先查看“更多”或“编辑操作”。",
      eyebrow: "Safari / iPhone / iPad",
      title: "在 Safari 中安装到主屏幕",
      body: "Safari 不支持网页直接弹出安装框。iPhone 和 iPad 的菜单布局可能不同，但都可以通过分享菜单把这个站点添加成主屏幕应用。",
      steps: [
        "点击 Safari 工具栏中的“分享”按钮；如果当前界面先显示“更多”，先进入“更多”再继续。",
        "在菜单中找到“添加到主屏幕”；如果暂时没有看到，先打开“编辑操作”并把它加入可见操作列表。",
        "如果看到了“作为网页 App 打开”或类似开关，保持开启；确认名称后点击“添加”。"
      ],
      note: "添加后会像独立应用一样从主屏幕打开。如果仍然没有看到该选项，请确认页面正在 Safari 中打开，并且站点是通过 HTTPS 访问的。"
    },
    "mac-safari": {
      hint: "Safari 需要通过工具栏“共享”菜单手动添加到 Dock。",
      eyebrow: "Safari / Mac",
      title: "在 Safari 中安装到 Dock",
      body: "Safari on macOS 不会提供网页内安装弹窗，但支持把网站添加为 Dock Web App。",
      steps: [
        "点击 Safari 工具栏中的“共享”按钮。",
        "选择“Add to Dock”。",
        "确认名称后点击“Add”，之后就可以从 Dock 或启动台像应用一样打开。"
      ],
      note: "如果当前没有出现“Add to Dock”，请确认你正在使用较新的 macOS Safari 版本。"
    },
    generic: {
      hint: "",
      eyebrow: "浏览器安装说明",
      title: "当前浏览器没有提供网页安装弹窗",
      body: "这个站点已经具备 PWA 基础能力，但不同浏览器暴露安装入口的方式并不一样。",
      steps: [
        "先确认页面通过 HTTPS 访问，而不是本地 file:// 地址。",
        "查看浏览器菜单中是否有“安装应用”或“添加到主屏幕”之类的选项。",
        "如果菜单里也没有，说明当前浏览器可能暂时不支持这类安装入口。"
      ],
      note: "在支持 `beforeinstallprompt` 的浏览器中，页面会优先弹出原生安装提示。"
    }
  },
  en: {
    "ios-safari": {
      hint: "Safari requires a manual Share flow. If Add to Home Screen is missing, check More or Edit Actions.",
      eyebrow: "Safari / iPhone / iPad",
      title: "Install From Safari To The Home Screen",
      body: "Safari does not expose a page-triggered install prompt. iPhone and iPad layouts can differ, but both can add this site from the Share flow.",
      steps: [
        "Tap the Share button in Safari. If your layout shows “More” first, open that before continuing.",
        "Look for “Add to Home Screen”. If it is missing, open “Edit Actions” and add it to the visible actions list.",
        "If you see an “Open as Web App” style option, leave it enabled, then confirm the name and tap “Add”."
      ],
      note: "After that, launch it from the Home Screen like an app. If the option still does not appear, make sure the page is open in Safari and served over HTTPS."
    },
    "mac-safari": {
      hint: "Safari requires a manual Share > Add to Dock flow.",
      eyebrow: "Safari / Mac",
      title: "Install From Safari To The Dock",
      body: "Safari on macOS does not expose an in-page install prompt, but it can turn this site into a Dock web app.",
      steps: [
        "Click the Share button in the Safari toolbar.",
        "Choose “Add to Dock”.",
        "Confirm the name and click “Add”, then open it from the Dock or Launchpad like an app."
      ],
      note: "If you do not see “Add to Dock”, update to a newer macOS Safari release."
    },
    generic: {
      hint: "",
      eyebrow: "Browser Install Help",
      title: "This browser did not provide an install prompt",
      body: "The site is already installable as a PWA, but browsers expose the install entry point differently.",
      steps: [
        "Make sure the page is served over HTTPS instead of a local file URL.",
        "Check the browser menu for options such as “Install App” or “Add to Home Screen”.",
        "If the menu does not include one, this browser likely does not expose installation for this site."
      ],
      note: "Browsers that support `beforeinstallprompt` will still show the native prompt first."
    }
  }
};

/* ===== Storage Helpers / 存储工具 ===== */
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

/* ===== Language / 语言 ===== */
let currentLang = (function () {
  const pageLang = document.documentElement.lang || "";
  return /^zh\b/i.test(pageLang) ? "zh" : "en";
})();

function getCurrentPageType() {
  if (document.body && document.body.dataset.page === "faq") return "faq";
  return "home";
}

function getManifestHref(lang) {
  return lang === "en" ? "./app.en.webmanifest" : "./app.webmanifest";
}

function getPageHref(lang) {
  if (getCurrentPageType() === "faq") {
    return lang === "en" ? "./faq.en.html" : "./faq.html";
  }
  return lang === "en" ? "./en.html" : "./index.html";
}

function getMetaTitleKey(pageType) {
  return pageType === "faq" ? "faq.meta.title" : "meta.title";
}

function getMetaDescriptionKey(pageType) {
  return pageType === "faq" ? "faq.meta.description" : "meta.description";
}

function rememberLangPreference(lang) {
  if (lang === "zh" || lang === "en") safeStorageSet("lang", lang);
}

function applyLang(lang) {
  const pageType = getCurrentPageType();
  const titleKey = getMetaTitleKey(pageType);
  const descriptionKey = getMetaDescriptionKey(pageType);

  currentLang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = i18n[lang][titleKey];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = i18n[lang][descriptionKey];
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = i18n[lang][titleKey];
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.content = i18n[lang][descriptionKey];
  const applicationName = document.querySelector('meta[name="application-name"]');
  if (applicationName) applicationName.content = i18n[lang]["app.shortTitle"];
  const appleTitle = document.getElementById("apple-mobile-web-app-title");
  // Keep Safari/PWA metadata aligned with the active language instead of only updating visible text.
  // 保持 Safari/PWA 元信息与当前语言一致，而不是只更新页面可见文案。
  if (appleTitle) appleTitle.content = i18n[lang]["app.shortTitle"];

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

  updateInstallGuideCopy();
  updateInstallHint();
}

/* ===== Theme / 主题 ===== */
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

/* ===== PWA Install / PWA 安装 ===== */
let deferredInstallPrompt = null;
let currentInstallGuideType = null;

function isStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

function getInstallContext() {
  const ua = navigator.userAgent;
  const platform = navigator.platform || "";
  const maxTouchPoints = navigator.maxTouchPoints || 0;
  // Safari does not expose a unified install API, so we infer which manual guide to show.
  // Safari 没有统一的安装 API，所以这里根据设备环境推断应展示哪套手动安装说明。
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (platform === "MacIntel" && maxTouchPoints > 1);
  const isSafari =
    /Safari/i.test(ua) &&
    !/Chrome|CriOS|EdgiOS|Edg|OPR|OPiOS|Firefox|FxiOS|DuckDuckGo|SamsungBrowser/i.test(ua);
  const isMac = !isIOS && /Mac/i.test(platform);

  return {
    isIOS: isIOS,
    isMac: isMac,
    isSafari: isSafari,
  };
}

function getManualInstallGuideType() {
  const ctx = getInstallContext();
  if (ctx.isSafari && ctx.isIOS) return "ios-safari";
  if (ctx.isSafari && ctx.isMac) return "mac-safari";
  return "generic";
}

function hideInstallGuide() {
  const guide = document.getElementById("install-guide");
  const btn = document.getElementById("install-app");
  currentInstallGuideType = null;
  if (guide) guide.hidden = true;
  if (btn) btn.setAttribute("aria-expanded", "false");
}

function updateInstallGuideCopy() {
  if (!currentInstallGuideType) return;

  const copy = installGuideCopy[currentLang][currentInstallGuideType];
  const guide = document.getElementById("install-guide");
  const eyebrow = document.getElementById("install-guide-eyebrow");
  const title = document.getElementById("install-guide-title");
  const body = document.getElementById("install-guide-body");
  const steps = document.getElementById("install-guide-steps");
  const note = document.getElementById("install-guide-note");

  if (!copy || !guide || !eyebrow || !title || !body || !steps || !note) return;

  eyebrow.textContent = copy.eyebrow;
  title.textContent = copy.title;
  body.textContent = copy.body;
  steps.innerHTML = "";
  copy.steps.forEach(function (step) {
    const li = document.createElement("li");
    li.textContent = step;
    steps.appendChild(li);
  });
  note.textContent = copy.note;
}

function showInstallGuide(type) {
  const guide = document.getElementById("install-guide");
  const btn = document.getElementById("install-app");
  if (!guide) return;

  currentInstallGuideType = type;
  updateInstallGuideCopy();
  guide.hidden = false;
  if (btn) btn.setAttribute("aria-expanded", "true");
  if (typeof guide.focus === "function") guide.focus();
}

function updateInstallButtonVisibility() {
  const btn = document.getElementById("install-app");
  if (!btn) return;
  btn.hidden = isStandalone();
  if (isStandalone()) hideInstallGuide();
}

function updateInstallHint() {
  const hint = document.getElementById("install-hint");
  if (!hint) return;

  if (isStandalone() || deferredInstallPrompt) {
    hint.hidden = true;
    hint.textContent = "";
    return;
  }

  const type = getManualInstallGuideType();
  const copy = installGuideCopy[currentLang][type];
  if (!copy || !copy.hint) {
    hint.hidden = true;
    hint.textContent = "";
    return;
  }

  hint.textContent = copy.hint;
  hint.hidden = false;
}

window.addEventListener("beforeinstallprompt", function (e) {
  e.preventDefault();
  deferredInstallPrompt = e;
  hideInstallGuide();
  updateInstallButtonVisibility();
  updateInstallHint();
});

window.addEventListener("appinstalled", function () {
  deferredInstallPrompt = null;
  hideInstallGuide();
  updateInstallButtonVisibility();
  updateInstallHint();
});

function handleInstallClick() {
  if (!deferredInstallPrompt) {
    // Chromium browsers can show a native prompt; Safari falls back to step-by-step instructions.
    // Chromium 浏览器可以弹出原生安装框；Safari 则回退到分步骤引导。
    showInstallGuide(getManualInstallGuideType());
    return;
  }
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.then(function () {
    deferredInstallPrompt = null;
    updateInstallButtonVisibility();
    updateInstallHint();
  });
}

/* ===== Init / 初始化 ===== */
document.addEventListener("DOMContentLoaded", function () {
  applyLang(currentLang);
  applyThemeIcon();
  updateInstallButtonVisibility();
  updateInstallHint();

  var themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  var langBtn = document.getElementById("lang-toggle");
  if (langBtn)
    langBtn.addEventListener("click", function () {
      var nextLang = currentLang === "zh" ? "en" : "zh";
      rememberLangPreference(nextLang);
      window.location.href = getPageHref(nextLang);
    });

  var installBtn = document.getElementById("install-app");
  if (installBtn) {
    installBtn.addEventListener("click", handleInstallClick);
    installBtn.setAttribute("aria-expanded", "false");
    installBtn.setAttribute("aria-controls", "install-guide");
  }
});

/* ===== Service Worker / Service Worker 注册 ===== */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./sw.js").catch(function () {});
  });
}

/* ===== Listen for system theme changes / 监听系统主题变化 ===== */
var colorSchemeMedia = window.matchMedia("(prefers-color-scheme: dark)");
var handleSystemThemeChange = function () {
  if (!safeStorageGet("theme")) applyThemeIcon();
};

if (typeof colorSchemeMedia.addEventListener === "function") {
  colorSchemeMedia.addEventListener("change", handleSystemThemeChange);
} else if (typeof colorSchemeMedia.addListener === "function") {
  colorSchemeMedia.addListener(handleSystemThemeChange);
}
