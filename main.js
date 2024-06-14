function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
};

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
};

// jQuery(
function links() {
    let linksss = document.getElementsByClassName('sidebar');
    linksss.classList.toggle('menu-button');
};


// HERE IS WHERE I'VE BEEN TRYING TO FIX THE ERROR
// 1). I want the button written as Table booked to alert('table book') and also
//      clear all the input field once clicked
// 2). Then the button to show links to different pages is only working on index.html


// const btnEl = document.getElementById('reservation-btn');

let booked = document.getElementById('reservation-btn');

function book() {
    // alert('Table booked');
};

btnEl.addEventListener('onclick', movedown);