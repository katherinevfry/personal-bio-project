const createProjectCards = (taco) => {
  let domString = '';
  taco.forEach((element) => {
    domString += `<div class="card mb-3" style="width: 60rem">
    <div class="row g-0">
      <div class="col-md-4">
        <img class="card-img" src="${element.screenshot}" alt="project screenshot">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text description"> ${element.description}</p>
            <p class="card-text techs"> ${element.technologiesUsed}</p>
            <a href="${element.url}" class="btn btn-outline-light">Project</a>
            <a href="${element.githubUrl}" class="btn btn-outline-light">GitHub</a>
        </div>
      </div>
    </div>
  </div>`;
  });
  document.querySelector('#projectsDisplay').innerHTML = domString;
};

export default createProjectCards;
