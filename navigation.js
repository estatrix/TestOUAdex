const injectNavigation = () => {
  const navStyles = `
    <style>
      .global-nav {
        display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;
        background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(10px);
        padding: 12px 24px; border-bottom: 1px solid #e2e8f0;
        position: sticky; top: 0; z-index: 9999; box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      }
      .global-nav a {
        text-decoration: none; color: #1a202c; font-weight: 600; font-size: 0.95rem;
        padding: 8px 16px; border-radius: 8px; transition: all 250ms ease;
      }
      .global-nav a:hover, .global-nav a.active {
        background: #3182ce; color: white;
      }
    </style>
  `;
  const pages = [
    { name: "Dex Dashboard", url: "index.html" },
    { name: "Table View", url: "tabla.html" },
    { name: "Battle Simulator", url: "battle.html" }
  ];
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = pages.map(page => 
    `<a href="${page.url}" class="${currentPath === page.url ? 'active' : ''}">${page.name}</a>`
  ).join('');
  const navHTML = `${navStyles}<nav class="global-nav">${navLinks}</nav>`;
  document.body.insertAdjacentHTML('afterbegin', navHTML);
};
document.addEventListener('DOMContentLoaded', injectNavigation);