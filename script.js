document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // Clone the upper navbar menu for mobile
    const upperMenu = document.querySelector('.menu1 ul');
    if (upperMenu && !mobileMenu) {
        const mobileMenuDiv = document.createElement('div');
        mobileMenuDiv.className = 'mobile-menu';
        mobileMenuDiv.innerHTML = upperMenu.outerHTML;
        document.querySelector('.upper_navbar').appendChild(mobileMenuDiv);
    }
    
    // Toggle mobile menu
    menuIcon.addEventListener('click', function() {
        const mobileMenu = document.querySelector('.mobile-menu');
        mobileMenu.classList.toggle('active');
    });
}); 