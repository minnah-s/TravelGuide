
// Accordion Toggle Logic
document.addEventListener('DOMContentLoaded', function () {
    const buttons = [
        { buttonId: "button1", contentId: "content1" },
        { buttonId: "button2", contentId: "content2" },
        { buttonId: "button3", contentId: "content3" },
        { buttonId: "button4", contentId: "content4" },
        { buttonId: "button5", contentId: "content5" },
        { buttonId: "button6", contentId: "content6" }
    ];

    buttons.forEach((item, index) => {
        const btn = document.getElementById(item.buttonId);
        const content = document.getElementById(item.contentId);

        if (btn && content) {
            btn.addEventListener('click', function () {
                // Remove active state and collapse all other content
                buttons.forEach((other, i) => {
                    const otherBtn = document.getElementById(other.buttonId);
                    const otherContent = document.getElementById(other.contentId);
                    if (i !== index) {
                        otherBtn?.classList.remove('active');
                        if (otherContent) otherContent.style.maxHeight = null;
                    }
                });

                // Toggle current section
                this.classList.toggle('active');
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }
    });

    // Mobile Menu Logic
    const menuIcon = document.querySelector('.menu-icon');
    const upperMenu = document.querySelector('.menu1 ul');
    const upperNavbar = document.querySelector('.upper_navbar');

    if (menuIcon && upperMenu && upperNavbar) {
        // Create mobile menu if it doesn't exist
        if (!document.querySelector('.mobile-menu')) {
            const mobileMenu = document.createElement('div');
            mobileMenu.className = 'mobile-menu';
            mobileMenu.innerHTML = upperMenu.outerHTML;
            upperNavbar.appendChild(mobileMenu);
        }

        // Toggle mobile menu
        menuIcon.addEventListener('click', function () {
            const mobileMenu = document.querySelector('.mobile-menu');
            mobileMenu.classList.toggle('active');
        });
    } else {
        console.warn('Menu elements missing for mobile menu setup.');
    }
});
