import 'bootstrap'; // import bootstrap elements and js

import '../styles/main.scss';
import pageBuilder from './components/pageBuilder';
import createProjectCards from './components/projectBuilder';
import projects from './helpers/data/projectData';

const init = () => {
  pageBuilder();
  createProjectCards(projects);
};

init();
