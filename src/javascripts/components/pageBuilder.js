const pageBuilder = () => {
  document.querySelector('#bio').innerHTML = ` <!-- Navigation -->
  <nav class="navbar bg-light">
    <div class="container-fluid">
    <a class="navbar-brand">Katy Fry</a>
    <ul id="navLinks" class="nav me-auto mb-2 mb-lg-0">
      <li class="nav-item"><a id="navToBio" class="nav-link">Bio</a></li>
      <li class="nav-item"><a id="navToTechnologies" class="nav-link">Technologies</a></li>
      <li class="nav-item"><a id="navToProjects" class="nav-link">Projects</a></li>
    </ul>
  </div>  
  </nav>
  <!-- End Navigation -->

  <!-- Primary View -->
  <div class="fullPage" id="bioPage">
    <p>Hi there! I'm Katy Fry. I'm a photographer, designer, artist, and aspiring web developer who calls Nashville, TN home.</p>

    <p>I grew up in a tiny town in the Ozark hills of Southwest Missouri. I spent my time drawing, writing, pretending, and--once we were finally able to afford a computer--playing games and surfing the web over a shakey dial-up connection.</p> 
    
    <p>Not sure where life would take me, I moved to Nashville in 2010 to pursue a degree in Piano Performance and English. I graduated in 2015 with a double major in Theology and English (three credits shy of a music minor) and began working as an Editoral Assistant for a nonprofit. I quickly gained the title of Editor and worked hard to put out content that was both creative as well as precise and accurate.</p>

    <p>Needing a change from the publishing world, I accepted a position as Communications Director for another nonprofit in 2019. This is where I rediscovered my love of graphic design and developed a love for the web. I started looking into what it would take to be a Web Developer, and came across Nashville Software School.</p>

    <p>It took me about a year to work up the courage to apply to NSS. I loved design and what little web development I had done. I decided to take a Jumpstart class with NSS to see if this could be a good fit for me. I ended up falling in love with the world of code. It satisfied my need to be both creative and analytical, and engaged both the right and left sides of my brain. I was hooked. I immediately applied for the part-time year-long full-stack web development program at NSS.</p>

    <p>I'll make a great web development because I love to learn. I'll never not be learning or looking for new and better ways to do things. I am very creative and innovative, as well as analytical and precise. I want to build applications that are both beautiful and wonderfully functional.</p>

    <p>Let me make your dream (and mine!) come to life.</p>
    
  </div>
  <div class="fullPage" id="technologiesPage">
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>Figma</li>
    <li>Bootstrap</li>

  </ul>
  </div>
  <div class="fullPage" id="projectsPage"></div>
  <!-- End Primary View -->

  <!-- Footer -->
  <footer class="page-footer">
    <!-- TODO: Fill in contact info here: Include things like email, LinkedIn, Twitter and GitHub links. -->
    <h5>Katy Fry</h5>
    <a href="mailto:katyvfry@gmail.com">Email</a>
    <a href="https://www.linkedin.com/in/katherine-fry-3105ba140/">Linked In</a>
    <a href="https://github.com/katherinevfry">GitHub</a>
    <a href="https://www.instagram.com/katherinevfry/">Instagram</a>
  </footer>
  <!-- End Footer -->`;
};

export default pageBuilder;