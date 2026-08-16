import { ref } from 'vue'

// ডিফল্টভাবে ডার্ক মোড সেট করার জন্য: localStorage এ যদি 'light' না থাকে, তবে সবসময় true (dark) হবে
const isDark = ref(
  localStorage.getItem('theme') ? localStorage.getItem('theme') === 'dark' : true
)

// ইনিশিয়ালি অ্যাপ লোড হওয়ার সময় ক্লাস সেট করা
if (isDark.value) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

export function useDark() {
  const toggleDark = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return { isDark, toggleDark }
}