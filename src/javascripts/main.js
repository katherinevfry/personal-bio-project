import 'bootstrap'; // import bootstrap elements and js

import '../styles/main.scss';
import bioBuilder from './components/bioCaro';
import pageBuilder from './components/pageBuilder';
import createProjectCards from './components/projectBuilder';
import getProjects from './helpers/data/projectData';

const init = () => {
  pageBuilder();
  bioBuilder();
  getProjects().then((projects) => createProjectCards(projects));
};

init();
