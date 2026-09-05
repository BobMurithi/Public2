/* =====================================================
   Bobsave Dark Mode Toggle â€” bobsave-darkmode.js
   Handles toggle button, persistence via localStorage
   ===================================================== */

(function () {
  const STORAGE_KEY = 'bobsave_dark_mode';
  const DARK_CLASS  = 'dark-mode';

  // Apply saved preference immediately (before paint)
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'true') document.documentElement.classList.add(DARK_CLASS);

  function applyTheme(isDark) {
    document.body.classList.toggle(DARK_CLASS, isDark);
    document.documentElement.classList.toggle(DARK_CLASS, isDark);
    localStorage.setItem(STORAGE_KEY, isDark);
    // Update all toggle buttons on page
    document.querySelectorAll('.dm-toggle').forEach(btn => {
      btn.innerHTML      = isDark ? 'â˜€ï¸' : 'ðŸŒ™';
      btn.title          = isDark ? 'Switch to light mode' : 'Switch to dark mode';
      btn.setAttribute('aria-pressed', isDark);
    });
  }

  function createToggleBtn() {
    const btn = document.createElement('button');
    btn.className   = 'dm-toggle';
    btn.title       = 'Toggle dark mode';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    btn.setAttribute('aria-pressed', 'false');
    btn.innerHTML   = 'ðŸŒ™';
    btn.style.cssText = `
      position: fixed;
      bottom: 1.5rem;
      right: 1.5rem;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: none;
      background: #3a341c;
      color: #ffea64;
      font-size: 1.2rem;
      cursor: pointer;
      z-index: 9999;
      box-shadow: 0 4px 16px rgba(0,0,0,0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s, transform 0.15s;
    `;
    btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.1)');
    btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
    btn.addEventListener('click', () => {
      const isDark = localStorage.getItem(STORAGE_KEY) === 'true';
      applyTheme(isDark);
    });
    document.body.appendChild(btn);
    return btn;
  }

  // Init on DOM ready
  document.addEventListener('DOMContentLoaded', function () {
    const btn    = createToggleBtn();
    const isDark = localStorage.getItem(STORAGE_KEY) === 'true';
    applyTheme(isDark);
  });
})();
