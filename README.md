# Kamalcmd.github.io
My personal Online Portfolio website
This is the final project for Code louisville's January 2021 Front End Web Development Session.
For this project, I choose to create a responsive Mobile-First web-based Online personal website.
This website is created for showing all the personal details with Home, About, Portfolio, Resume, Contact pages.

Media Queries:-
1.  Screen Size (max-width:1200px) and (min-width:768px) 
2. Screen size (min-width:1200px).

CSS Feature #1
     Used combination of Flexbox and CSS Grid to Organized the content inside the web pages. The flex container properties like Flex-direction, flex-wrap, justify-content, align-items, align-content, order. and CSS Grid properties like grid-templet-columns/rows.

CSS Feature #2
    Navigation menu that expands and collapses properly at desktop and mobile sizes, and open and close by clicking the "Humburger" Icon designed custom and CSS transition  to the close button.

CSS Feature #3
    Use  :nth-child(odd) to style series of elements changing the background color veriying every odd child elements.

CSS Feature #4
    Use developer tools Lighthouse test and generate report for both mobile and Desktop views which results more than 80% in performance and Accessibility. Reports are included in this repositories.

JavaScript Feature #1
    Create a click Event listener function which trigger the burger menu and dynamically update HTML class with their CSS properties.

JavaScript Freature #2
    Create a modal which pop-ups when clicking the "Do you like my work" Button on index page. Which include Html form.

JavaScript Feature #3
    JavaScript validations are included in forms:-
    -Name should be at least 5 character,
    -subject should be at least 10 charecters,
    -Phone number should be of 10 digits,
    -Email should contain @ ,
    - Message should be at least 140 characters.



You can directly visit this website from github pages www.https://kamalcmd.github.io/index.html
                        OR
Following are to be considered while cloning this website:
1. You can start from index page.
2. Css, image, js are located on Assets directories making there corresponding folders.
3. This website is designed from mobile first approach.
4. There are 2 media queries of Screen Size (max-width:1200px) and (min-width:768px)  and Screen size (min-width:1200px).

5. Contain pages like About, Portfolio, Resume, contact.  
6.  landing page or index page contains nav bar, banner, introduction, CSS grid changing position from mobile view to desktop view, Family content picture and footer. Used nth child to change background color.
7. Banner contain Do you like my work button which pop-ups contact form modal with javascript validation.
8.  About page contains nav bar, Introduction, Hobbies grid and footer.
9.  Portfolio page contains nav bar, immage grid and footer.
10. Resume page contains Nav bar, profile, skills, My Experiences, My Education, Two button with download CV and Hire me and footer.
11. Contact page contains nav bar and a contact form with javaScript validation where error message are shown it top and form finally submited when all the varldation is complete.  