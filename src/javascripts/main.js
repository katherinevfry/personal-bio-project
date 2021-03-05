import 'bootstrap'; // import bootstrap elements and js

import '../styles/main.scss';
import bioBuilder from './components/bioCaro';
import pageBuilder from './components/pageBuilder';
import createProjectCards from './components/projectBuilder';
import projects from './helpers/data/projectData';

const init = () => {
  pageBuilder();
  bioBuilder();
  createProjectCards(projects);
};

init();
