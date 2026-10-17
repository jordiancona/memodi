/**
 * Memodi - Frontend Interactive Logic
 * Handles dark mode toggle, mobile menu navigation, copy-to-clipboard, and channel filtering
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initCopyButtons();
  initFilterTabs();
});

/**
 * Initialize theme detection and toggle functionality
 */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('memodi-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;

  applyTheme(isDark);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const willBeDark = !document.documentElement.classList.contains('dark');
      applyTheme(willBeDark);
      localStorage.setItem('memodi-theme', willBeDark ? 'dark' : 'light');
    });
  }

  // Listen to system theme changes if no explicit user override
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('memodi-theme')) {
      applyTheme(e.matches);
    }
  });

  function applyTheme(dark) {
    if (dark) {
      document.documentElement.classList.add('dark');
      if (sunIcon) sunIcon.classList.remove('hidden');
      if (moonIcon) moonIcon.classList.add('hidden');
    } else {
      document.documentElement.classList.remove('dark');
      if (sunIcon) sunIcon.classList.add('hidden');
      if (moonIcon) moonIcon.classList.remove('hidden');
    }
  }
}

/**
 * Mobile navigation menu open/close handler
 */
function initMobileMenu() {
  const openBtn = document.getElementById('mobile-menu-open-btn');
  const closeBtn = document.getElementById('mobile-menu-close-btn');
  const mobileMenu = document.getElementById('mobile-menu-drawer');
  const mobileBackdrop = document.getElementById('mobile-menu-backdrop');

  function openMenu() {
    if (mobileMenu) {
      mobileMenu.classList.remove('translate-x-full');
      mobileMenu.setAttribute('aria-hidden', 'false');
    }
    if (mobileBackdrop) {
      mobileBackdrop.classList.remove('hidden');
      setTimeout(() => mobileBackdrop.classList.remove('opacity-0'), 10);
    }
    document.body.classList.add('overflow-hidden');
  }

  function closeMenu() {
    if (mobileMenu) {
      mobileMenu.classList.add('translate-x-full');
      mobileMenu.setAttribute('aria-hidden', 'true');
    }
    if (mobileBackdrop) {
      mobileBackdrop.classList.add('opacity-0');
      setTimeout(() => mobileBackdrop.classList.add('hidden'), 200);
    }
    document.body.classList.remove('overflow-hidden');
  }

  if (openBtn) openBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMenu);

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('translate-x-full')) {
      closeMenu();
    }
  });
}

/**
 * Copy to clipboard for contact handles (phone, email)
 */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('[data-copy-text]');
  const toast = document.getElementById('copy-toast');
  const toastText = document.getElementById('copy-toast-message');
  let toastTimeout;

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const text = btn.getAttribute('data-copy-text');
      const label = btn.getAttribute('data-copy-label') || text;

      try {
        await navigator.clipboard.writeText(text);
        showToast(`Copiado: "${label}"`);
      } catch (err) {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copiado: "${label}"`);
      }
    });
  });

  function showToast(message) {
    if (!toast) return;
    if (toastText) toastText.textContent = message;
    
    toast.classList.remove('translate-y-8', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.add('translate-y-8', 'opacity-0', 'pointer-events-none');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 2500);
  }
}

/**
 * Filter social channels by category tabs
 */
function initFilterTabs() {
  const tabs = document.querySelectorAll('[data-channel-filter]');
  const cards = document.querySelectorAll('[data-channel-category]');

  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-channel-filter');

      // Update active tab styles
      tabs.forEach(t => {
        t.classList.remove('bg-blue-600', 'text-white', 'shadow-md');
        t.classList.add('bg-white', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300', 'border', 'border-gray-200', 'dark:border-gray-700');
      });
      tab.classList.remove('bg-white', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300', 'border', 'border-gray-200', 'dark:border-gray-700');
      tab.classList.add('bg-blue-600', 'text-white', 'shadow-md');

      // Show / hide cards with animation
      cards.forEach(card => {
        const category = card.getAttribute('data-channel-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          setTimeout(() => {
            card.classList.remove('opacity-0', 'scale-95');
            card.classList.add('opacity-100', 'scale-100');
          }, 20);
        } else {
          card.classList.add('opacity-0', 'scale-95');
          setTimeout(() => {
            card.classList.add('hidden');
          }, 150);
        }
      });
    });
  });
}
