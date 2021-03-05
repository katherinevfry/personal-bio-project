const pageBuilder = () => {
  document.querySelector('#bio').innerHTML = ` <!-- Navigation -->
  <nav class="navbar" id="navbar">
    <div class="container-fluid">
    <a class="navbar-left"><h1>katherine fry</h1>
    <ul id="navLinks" class="nav me-auto mb-2 mb-lg-0">
      <li class="nav-item text-my-own-color"><a href="#bioPage" id="navToBio" class="nav-link">about</a></li>
      <li class="nav-item"><a href="#technologiesPage" id="navToTechnologies" class="nav-link">technologies</a></li>
      <li class="nav-item"><a href="#projectsPage" id="navToProjects" class="nav-link">projects</a></li>
    </ul>
  </div>  
  </nav>
  <!-- End Navigation -->

  <!-- Primary View -->
  <div class="d-flex flex-row justify-content-center" id="bioPage">
    <div id="bioImage">
    <img id="katyPic" src="src/images/katypic.jpg">
    </div>
    <div id="bioText"></div>
    
  </div>
  <div class="fullPage" id="technologiesPage">
  <h2 id="techHeader">technologies</h2>
  <ul class="d-flex flex-row flex-wrap justify-content-center align-items-center">
    <li class="techList">HTML</li>
    <li class="techList">CSS</li>
    <li class="techList">Javascript</li>
    <li class="techList">Figma</li>
    <li class="techList">Bootstrap</li>
    <li class="techList">FireBase</li>
    <li class="techList">Postman</li>
    <li class="techList">Github</li>

  </ul>
  </div>
  <div class="fullPage" id="projectsPage">
  <h2 id="projectsTitle">projects</h2>
  <div class="d-flex flex-row flex-wrap justify-content-center" id="projectsDisplay"></div>
  </div>
  
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
