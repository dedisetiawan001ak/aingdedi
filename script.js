// Tombol dark/light mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

// Animasi saat scroll
const cards = document.querySelectorAll('.project-card');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('animate-fadeInUp');
    }
  });
});

// Tambahkan animasi dengan Tailwind utilitas kustom
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeInUp {
  animation: fadeInUp 0.8s ease forwards;
}
`;
document.head.appendChild(style);
