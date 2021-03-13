const pageBuilder = () => {
  document.querySelector('#bio').innerHTML = ` <!-- Navigation -->
  <nav class="navbar" id="navbar">
    <div class="container-fluid">
    <a class="navbar-left"><h1>katy fry</h1>
    <ul id="navLinks" class="nav me-auto mb-2 mb-lg-0">
      <li class="nav-item text-my-own-color"><a href="#bioPage" id="navToBio" class="nav-link">about</a></li>
      <li class="nav-item"><a href="#technologiesPage" id="navToTechnologies" class="nav-link">technologies</a></li>
      <li class="nav-item"><a href="#projectsPage" id="navToProjects" class="nav-link">projects</a></li>
    </ul>
  </div>  
  </nav>
  <!-- End Navigation -->

  <!-- Primary View -->

  <div class="card mb-3" id="bioPage">
  <div class="row g-0">
    <div class="col-md-4">
      <img id="katyPic" src="https://github.com/katherinevfry/photo-area/blob/main/katy-pic2.png?raw=true" alt="bioImage">
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <div id="bioText"></div>
      </div>
    </div>
  </div>
</div>
    
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
  
  <nav class="navbar" id="footer">
    <div class="container-fluid">
    <ul id="footerLinks" class="nav me-auto mb-2 mb-lg-0">
      <li class="nav-item"><a href="mailto:katyvfry@gmail.com" id="email" class="nav-link">email</a></li>
      <li class="nav-item"><a href="https://www.linkedin.com/in/katherine-fry-3105ba140/" id="linkedin" class="nav-link">linked in</a></li>
      <li class="nav-item"><a href="https://github.com/katherinevfry" id="github" class="nav-link">github</a></li>
      <li class="nav-item"><a href="https://www.instagram.com/katherinevfry/" id="insta" class="nav-link">instagram</a></li>
    </ul>
  </div>  
  </nav>`;
};

export default pageBuilder;
