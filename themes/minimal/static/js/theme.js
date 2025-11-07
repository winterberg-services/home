// Theme Switcher for Winterberg Services

const THEME_KEY = 'theme-preference';
const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto'
};

const ICONS = {
  light: '☀️',
  dark: '🌙',
  auto: '🌓'
};

const LABELS = {
  light: 'Hell',
  dark: 'Dunkel',
  auto: 'Auto'
};

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT;
}

function getThemePreference() {
  return localStorage.getItem(THEME_KEY) || THEMES.AUTO;
}

function setThemePreference(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

function applyTheme(theme) {
  const effectiveTheme = theme === THEMES.AUTO ? getSystemTheme() : theme;

  document.documentElement.setAttribute('data-theme', effectiveTheme);

  if (effectiveTheme === THEMES.DARK) {
    document.documentElement.style.colorScheme = 'dark';
  } else {
    document.documentElement.style.colorScheme = 'light';
  }
}

function updateIcon(theme) {
  const icon = document.querySelector('.theme-icon');
  const label = document.querySelector('.theme-label');

  if (icon) {
    icon.textContent = ICONS[theme];
  }

  if (label) {
    label.textContent = LABELS[theme];
  }
}

function cycleTheme() {
  const current = getThemePreference();
  let next;

  switch(current) {
    case THEMES.AUTO:
      next = THEMES.LIGHT;
      break;
    case THEMES.LIGHT:
      next = THEMES.DARK;
      break;
    case THEMES.DARK:
      next = THEMES.AUTO;
      break;
    default:
      next = THEMES.AUTO;
  }

  setThemePreference(next);
  applyTheme(next);
  updateIcon(next);
}

// Initialize on load
(function() {
  const theme = getThemePreference();
  applyTheme(theme);
  updateIcon(theme);

  // Listen for system theme changes when in auto mode
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (getThemePreference() === THEMES.AUTO) {
      applyTheme(THEMES.AUTO);
    }
  });

  // Add click handler
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', cycleTheme);
    }
  });
})();
