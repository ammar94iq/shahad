// الحصول على الزر والقائمة
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

// عند الضغط على الزر، يتم إظهار وإخفاء القائمة
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
