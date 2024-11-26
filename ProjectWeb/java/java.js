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

    document.getElementById("send").addEventListener("click", function(event) {
        event.preventDefault();
    
        const email = document.getElementById("Email").value.trim();
        const subject = document.getElementById("Subject").value.trim();
    
        if (!email || !subject) {
            alert("Vui lòng điền tất cả các ô bắt buộc!");
        } else {
            alert("Đã gửi thành công!");
        }
    });
    
    
    document.getElementById("delete").addEventListener("click", function(event) {
        event.preventDefault(); 
    
        document.getElementById("CompanyName").value = "";
        document.getElementById("Name").value = "";
        document.getElementById("Address").value = "";
        document.getElementById("PhoneNum").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Subject").value = "";
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

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
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
            const headerOffset = 80; // Điều chỉnh theo chiều cao header
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
        const headerOffset = 100; // Điều chỉnh theo nhu cầu

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
