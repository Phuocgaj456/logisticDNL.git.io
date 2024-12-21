document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.submenu li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
    document.addEventListener('click', function(event) {
        const isClickInsideList = document.querySelector('.list').contains(event.target);
        const submenu = document.querySelector('.submenu');

        if (!isClickInsideList && submenu.classList.contains('show')) {
            submenu.classList.remove('show');
        }
    });
    
    const navToggle = document.getElementById('navToggle');
    const sideNav = document.querySelector('.side-nav');
    const contentArea = document.querySelector('.content-area');

    // Toggle nav khi click button
    navToggle.addEventListener('click', function() {
        sideNav.classList.toggle('show');
        // Thay đổi icon
        const icon = this.querySelector('i');
        if (sideNav.classList.contains('show')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Đóng nav khi click bên ngoài
    document.addEventListener('click', function(e) {
        if (!sideNav.contains(e.target) && 
            !navToggle.contains(e.target) && 
            sideNav.classList.contains('show')) {
            sideNav.classList.remove('show');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Đóng nav sau khi chọn link
    const navLinks = document.querySelectorAll('.side-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                sideNav.classList.remove('show');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
});
function searchFunction(event) {
    event.preventDefault();
    const keyword = document.getElementById("keyword").value;
    if (keyword) {
        console.log("Searching for:", keyword);
    } else {
        alert("Bạn chưa nhập từ khóa cần tìm!");
    }
}

window.onscroll = function() {
    const scrollTopButton = document.getElementById("scrollTopButton");
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
};
document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById('btn-srch');
    const searchModal = document.getElementById('search-modal');
    const closeModal = document.querySelector('.close-modal');

    searchButton.addEventListener('click', () => {
        searchModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        searchModal.style.display = 'none';
    });

    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');
    const headerHeight = 60;
    const scrollOffset = 80;

    // Smooth scroll với offset
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - 
                                 (headerHeight + scrollOffset);

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Cập nhật active section với offset
    function updateActiveSection() {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const isInView = (
                rect.top <= (headerHeight + scrollOffset) && 
                rect.bottom >= (headerHeight + scrollOffset)
            );

            if (isInView) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLinks[index].classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection();
});
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const headerOffset = 80;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Update active state on scroll
    function updateActiveSection() {
        const headerOffset = 60;

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const isInView = (
                rect.top <= headerOffset &&
                rect.bottom >= headerOffset
            );

            if (isInView) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLinks[index].classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection(); // Initialize
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('#hamburger-btn');
    const mainMenu = document.querySelector('#main-menu');
    const serviceMenu = document.querySelector('#service-menu');
    const serviceLink = document.querySelector('.service-link');
    const backBtn = document.querySelector('.back-btn');

    if (window.innerWidth <= 768) {
        // Toggle hamburger menu
        hamburger?.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mainMenu.classList.toggle('active');
            // Reset service menu
            serviceMenu.classList.remove('active');
        });

        // Show service menu
        serviceLink?.addEventListener('click', (e) => {
            e.preventDefault();
            serviceMenu.classList.add('active');
        });

        // Back to main menu
        backBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            serviceMenu.classList.remove('active');
        });

        // Close menus when clicking outside
        document.addEventListener('click', (e) => {
            if (!mainMenu.contains(e.target) && 
                !serviceMenu.contains(e.target) && 
                !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                mainMenu.classList.remove('active');
                serviceMenu.classList.remove('active');
            }
        });
    }
});

// Search functionality
function openSearch() {
    document.getElementById('search-overlay').classList.add('active');
    document.querySelector('.search-input').focus();
}

function closeSearch() {
    document.getElementById('search-overlay').classList.remove('active');
}

function searchFunction(event) {
    event.preventDefault();
    const keyword = document.getElementById('keyword').value;
    // Implement search logic here
    console.log('Searching for:', keyword);
}

// Close search when clicking outside
document.addEventListener('click', (e) => {
    const overlay = document.getElementById('search-overlay');
    const searchContainer = document.querySelector('.search-container');
    
    if (e.target === overlay && !searchContainer.contains(e.target)) {
        closeSearch();
    }
});

// Close search with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSearch();
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.side-nav a');
    
    // Add click event to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all content sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected content section
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
        });
    });
});

// FAQ Toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Toggle active class on answer
            const answer = this.nextElementSibling;
            answer.classList.toggle('active');
            
            // Change icon
            const icon = this.querySelector('.toggle-icon');
            if (answer.classList.contains('active')) {
                icon.textContent = '−';  // Minus sign
            } else {
                icon.textContent = '+';  // Plus sign
            }
            
            // Optional: Close other open answers
            const otherAnswers = document.querySelectorAll('.faq-answer.active');
            const otherIcons = document.querySelectorAll('.toggle-icon');
            
            otherAnswers.forEach(otherAnswer => {
                if (otherAnswer !== answer) {
                    otherAnswer.classList.remove('active');
                    const questionParent = otherAnswer.previousElementSibling;
                    const otherIcon = questionParent.querySelector('.toggle-icon');
                    otherIcon.textContent = '+';
                }
            });
        });
    });
});

// Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Lấy các elements
    const navToggle = document.getElementById('navToggle');
    const sideNav = document.querySelector('.side-nav');
    
    if (!navToggle || !sideNav) {
        console.error('Navigation elements not found');
        return;
    }

    // Toggle navigation
    function toggleNav() {
        sideNav.classList.toggle('show');
        const icon = navToggle.querySelector('i');
        
        if (sideNav.classList.contains('show')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    // Add click event to toggle button
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleNav();
    });

    // Close nav when clicking outside
    document.addEventListener('click', function(e) {
        if (!sideNav.contains(e.target) && 
            !navToggle.contains(e.target) && 
            sideNav.classList.contains('show')) {
            toggleNav();
        }
    });

    // Close nav when clicking links
    const navLinks = document.querySelectorAll('.side-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && sideNav.classList.contains('show')) {
                toggleNav();
            }
        });
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && sideNav.classList.contains('show')) {
            sideNav.classList.remove('show');
            const icon = navToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Scroll to Top functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('scrollTopButton');
    
    if (!scrollButton) return;

    // Hiện/ẩn button khi scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) { // Hiện button sau khi scroll 300px
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    });

    // Xử lý click event
    scrollButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Side Navigation Toggle Function
function initSideNavToggle(pageType) {
    const sideNavToggle = document.createElement('button');
    sideNavToggle.id = 'sideNavToggle';
    sideNavToggle.className = 'nav-toggle';
    sideNavToggle.innerHTML = '<i class="fas fa-bars"></i>';

    const container = document.querySelector(`.${pageType}-container`);
    container.insertBefore(sideNavToggle, container.firstChild);

    const sideNav = container.querySelector('.side-nav');
    const overlay = document.createElement('div');
    overlay.className = 'side-nav-overlay';
    document.body.appendChild(overlay);

    function toggleNav() {
        sideNav.classList.toggle('active');
        overlay.classList.toggle('active');
        sideNavToggle.classList.toggle('active');
    }

    sideNavToggle.addEventListener('click', toggleNav);
    overlay.addEventListener('click', toggleNav);

    // Close nav on link click
    const navLinks = sideNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleNav();
            }
        });
    });

    // Handle resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sideNav.classList.remove('active');
            overlay.classList.remove('active');
            sideNavToggle.classList.remove('active');
        }
    });
}

// Initialize based on page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = document.body.dataset.page;
    if (currentPage === 'transport') {
        initSideNavToggle('transport');
    } else if (currentPage === 'industry') {
        initSideNavToggle('industry');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('.side-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        const headerOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
