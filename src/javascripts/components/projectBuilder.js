const createProjectCards = (taco) => {
  let domString = '';
  taco.forEach((element, i) => {
    if (element.available === true) {
      domString += `<div class="card text-center" style="width: 30rem;" id= ${i}>
        <img src="${element.screenshot}" class="card-img-top" alt="project screenshot">
        <div class="card-body">
          <h3 class="card-title">${element.title}</h3>
          <p class="card-text description"> ${element.description}</p>
          <p class="card-text techs"> ${element.technologiesUsed}</p>
          <a href="${element.url}" class="btn btn-outline-light">Project</a>
          <a href="${element.githubUrl}" class="btn btn-outline-light">GitHub</a>
        </div>
      </div>`;
    }
  });
  document.querySelector('#projectsDisplay').innerHTML = domString;
};

export default createProjectCards;
