document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'));
});
function totop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function openmrwr() {
 console.log("WORKS");
}