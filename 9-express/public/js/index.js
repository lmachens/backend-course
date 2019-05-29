function handleShowMenuClick() {
  console.log('handleShowMenuClick');
  fetch('api/menu')
    .then(response => response.json())
    .then(menuItems => {
      const menuElement = document.getElementById('menu');
      if (menuElement) {
        menuElement.innerHTML = menuItems
          .map(menuItem => `<div class="menuItem">${menuItem} <button>Order</button></div>`)
          .join('\n');
      }
    });
}
