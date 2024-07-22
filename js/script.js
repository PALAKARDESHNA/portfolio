//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar Links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
           //active sessions for animation on scroll 
           sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });

//sticky header
let header = document.querySelector('header');

header.classList.toggle('sticky',window.scrollY > 100);

// remove toggle icon and navbar when click navbar Links(scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
//animation footer on scroll
     let footer = document.querySelector('footer');

     footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >=
         document.scrollingElement.scrollHeight);

}

function showSidebar(){
    const sidebar=document.querySelector(".sidebar")
    sidebar.style.display="flex";
    const menu =document.querySelector(".menu-div")
    menu.style.display="none"
}
function hideSidebar(){
    const sidebar=document.querySelector(".sidebar")
    sidebar.style.display="none"
    const menu =document.querySelector(".menu-div")
    menu.style.display="block"
}

document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.getElementById('readMoreBtn');
    const aboutText = document.getElementById('aboutText');

    // Define the content
    const briefContent = `
        Hello! I’m Palak Ardeshna, full-stack developer with diverse experience and a passion for creating engaging digital experiences.
        <br>
        
    `;

    const fullContent = `
        Hello! I’m Palak Ardeshna, a full-stack developer with diverse experience and a passion for creating engaging digital experiences. My journey includes four impactful internships:
        <ul>
            <li><strong>UI/UX Design:</strong> Focused on user-centered design and enhancing visual aesthetics.</li>
            <li><strong>Python Junior Developer:</strong> Worked on backend development and data manipulation.</li>
            <li><strong>Data Science:</strong> Analyzed data to derive actionable insights.</li>
            <li><strong>Web Development:</strong> Specialized in HTML, CSS, and JavaScript for interactive web applications.</li>
        </ul>
        <strong>Skills:</strong> Enthusiastic about the MERN stack and proficient in HTML, CSS, and JavaScript.
        <br>
        <strong>Achievements:</strong> Proud winner of the first prize in a state-level essay competition, earning 21,000 for outstanding content writing.
        <br>
        <strong>Passions:</strong> Beyond coding, I enjoy painting, writing, singing, and traveling. I’m driven by curiosity and a desire to tackle new challenges.
        <br>
        <strong>Let’s Connect:</strong> I’d love to discuss potential collaborations or new ideas. Feel free to reach out!
        <br>
        
    `;

    // Set initial content
    aboutText.innerHTML = briefContent;

    // Event listener for toggling content
    document.body.addEventListener('click', function(event) {
        if (event.target && event.target.id === 'readMoreBtn') {
            event.preventDefault(); // Prevent default link behavior

            // Toggle content visibility
            if (aboutText.innerHTML.trim() === briefContent.trim()) {
                aboutText.innerHTML = fullContent;
            } else {
                aboutText.innerHTML = briefContent;
            }
        }
    });
});
window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.animate');
    let windowHeight = window.innerHeight;
    
    elements.forEach(function(element) {
      let position = element.getBoundingClientRect().top;
      if (position < windowHeight) {
        element.classList.add('scroll');
      }
    });
  });
  
