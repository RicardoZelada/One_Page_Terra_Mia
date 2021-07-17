//---------------------- Header
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
    });

    $(document).ready(function(){
        $('.toggle').click(function(){
            $('ul').toggleClass('active');
        })
        })

//-----------------------