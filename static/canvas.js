const _Date = document.getElementById("date");
const _Time = document.getElementById("time");
const SideMenuBs = document.querySelectorAll('.sidemenu div');



window.addEventListener("load" , (e) => {

    function display_ct() {
            var dt = new Date();
            _Time.innerHTML = dt.toLocaleTimeString();
            _Date.innerHTML = dt.toLocaleDateString();
        }
    display_ct()
    setInterval(function(){  display_ct() }, 1000);

    function myFunction(e) {
        SideMenuBs.forEach((btn) => {btn.removeAttribute('id')})
        e.currentTarget.setAttribute('id','selected')
      }

    SideMenuBs.forEach((btn) => {btn.addEventListener("mousedown",myFunction)});
    
    
});