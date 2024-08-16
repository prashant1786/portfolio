let isScrolling;
const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
    // Hide the sidebar whenever scrolling occurs
    navbar.classList.add('hide');

    // Clear any previous timeout
    clearTimeout(isScrolling);

    // Set a timeout to show the sidebar after scrolling stops
    isScrolling = setTimeout(() => {
        navbar.classList.remove('hide');
    }, 200); // Adjust the time delay as needed
});

let svg = document.getElementsByClassName("icon")
console.log(svg);
// document.querySelectorAll(".icon").setAttribute('fill', 'black');



// function changeTheme(checkboxElem) {
//     if (checkboxElem.checked) {
//         // If checkbox is checked, set theme to dark
//         document.body.classList.add('dark-theme');
//         document.getElementsByClassName("icon").forEach(element => {
//             element.setAttribute('fill', 'black')
//         });
//         document.body.classList.remove('light-theme');
//     } else {
//         // If checkbox is unchecked, set theme to light
//         document.body.classList.add('light-theme');
//         document.getElementsByClassName("icon").forEach(element => {
//             element.setAttribute('fill', 'black')
//         });
//         document.body.classList.remove('dark-theme');
//     }
// }
let logo = document.querySelector("#logo");
let link = document.getElementById('favicon');
let themeBtn = document.querySelector("#change");
function changeTheme(checkboxElem) {
    // Check the state of the checkbox and toggle themes
    if (checkboxElem.checked) {
        // If checkbox is checked, set theme to dark
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        themeBtn.textContent = "Light Theme";
        logo.src = 'assets/logo-light.png';
        link.setAttribute('href', 'assets/logo-light.png')

        navbar.classList.add('dark-theme')

        // Change SVG icon color to match dark theme
        Array.from(document.getElementsByClassName("icon")).forEach(element => {
            element.setAttribute('fill', 'white'); // Adjust color for dark theme
        });
    } else {
        // If checkbox is unchecked, set theme to light
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        navbar.classList.remove('dark-theme')
        themeBtn.textContent = "Dark Theme";
        logo.src = 'assets/logo-dark.png';
        link.setAttribute('href', 'assets/logo-dark.png')


        // Change SVG icon color to match light theme
        Array.from(document.getElementsByClassName("icon")).forEach(element => {
            element.setAttribute('fill', 'black'); // Adjust color for light theme
        });
    }
}
let certificateImg = document.querySelector("#internship-certificate");
// console.log(certificateImg);

let showing = false;

function certificate() {
    document.querySelector(".fullImg").classList.add("previewCerti");
    certificateImg.src = 'assets/certi.webp';
    showing = true;


}
function certificate1() {
    document.querySelector(".fullImg").classList.add("previewCerti");
    certificateImg.src = 'assets/edunet.jpg';
    showing = true;



}
function cancalCerti() {
    document.querySelector(".fullImg").classList.remove("previewCerti");
    showing = false;
}


document.addEventListener('keydown', function (event) {
    if ((event.key === 'Escape' || event.key === 'Esc') && showing == true) {
        cancalCerti();
        // Your code to handle the Escape key press
    }
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((en) => {
            console.log(en)
            if (en.isIntersecting) {
                const pageTitle = en.target.querySelector('.page-title').textContent;
                document.title = `${pageTitle} || Portfolio `;


            }
            else {
                // document.querySelector(".nav").classList.remove("show")
                // en.target.classList.remove("show");

            }
        })
    }
)

const hiddenItems = document.querySelectorAll(".pages");
// hiddenItems.forEach((el) => observer.observe(el))
document.addEventListener("scroll", () => {
    hiddenItems.forEach((el) => observer.observe(el))

})

