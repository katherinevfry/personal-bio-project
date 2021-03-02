const createProjectCards = (taco) => {
  let domString = '';
  taco.forEach((element, i) => {
    if (element.available === true) {
      domString += `<div class="card text-center" style="width: 18rem;" id= ${i}>
        <img src="${element.screenshot}" class="card-img-top" alt="project screenshot">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text"> ${element.description}</p>
          <p class="card-text"> ${element.technologiesUsed}</p>
          <a href="${element.url}" class="btn btn-primary">Project</a>
          <a href="${element.githubUrl}" class="btn btn-primary">GitHub</a>
        </div>
      </div>`;
    }
  });
  document.querySelector('#projectsPage').innerHTML = domString;
};

export default createProjectCards;
