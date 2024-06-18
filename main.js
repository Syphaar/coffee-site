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

let form = document.getElementById('form-sec');
let inputFields = document.getElementsByClassName('input-field');


function sub() {
    document.getElementById('email-address').value = '';
    alert('SUBSCRIBED');
}


//
//
//

// const cName = document.getElementById('name');
// const phoneNumber = document.getElementById('phone-number');
// const time = document.getElementById('time');
// const email = document.getElementById('eemail');
// const date = document.getElementById('date');
// const numberOfPple = document.getElementById('number');
// const reservationMsg = document.getElementById('reservationMsg');
// const errorElement = document.getElementById('')


// form.addEventListener('submit', (e) => {
//     let messages = []
//     if (cName.value === '' || cName.value == null) {
//         messages.push('Name is required');
//     }
//     e.preventDefault();
// });