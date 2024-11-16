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
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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




