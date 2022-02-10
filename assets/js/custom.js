var a = document.querySelectorAll(".list li");
for (var i = 0, length = a.length; i < length; i++) {
    a[i].onclick = function() {
    var b = document.querySelector(".list a.active2");
    if (b) b.classList.remove("active2");
    this.parentNode.classList.add('active2');
    };
}
//=========
let openMenu=()=>{
    document.getElementById('menulist').classList.add('slide');
    document.getElementById('menumask').classList.add('slide');
    document.body.style.overflow="hidden";
}
let closeMenu=()=>{
    document.getElementById('menulist').classList.remove('slide');
    document.getElementById('menumask').classList.remove('slide');
    document.body.style.overflow="scroll";
}


