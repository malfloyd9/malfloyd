/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        /* Named `void` in Tailwind to avoid clashing with `text-base` font-size utility */
        void: 'var(--color-base)',
        'surface-1': 'var(--color-surface-1)',
        'surface-2': 'var(--color-surface-2)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        thyme: {
          DEFAULT: 'var(--color-accent-green)',
          dark: 'var(--color-accent-green-dark)',
          light: 'var(--color-accent-green-light)',
        },
        oak: {
          DEFAULT: 'var(--color-oak)',
          dark: 'var(--color-oak-dark)',
          light: 'var(--color-oak-light)',
        },
        bronze: {
          DEFAULT: 'var(--color-bronze)',
          dark: 'var(--color-bronze-dark)',
          light: 'var(--color-bronze-light)',
        },
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        elevated: 'var(--shadow-elevated)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      transitionDuration: {
        fast: '150ms',
        DEFAULT: '250ms',
      },
    },
  },
  plugins: [],
}
