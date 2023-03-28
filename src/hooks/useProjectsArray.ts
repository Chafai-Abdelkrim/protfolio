import { useState } from 'react';
import { projectsArray } from '../data';

const useProjectsArray = () => {
  const [page, setPage] = useState(0);
  const currentProject = projectsArray[page];

  const pageNext = () => {
    setPage((prev) => (prev + 1) % projectsArray.length);
  };

  const pagePrev = () => {
    setPage((prev) => (prev - 1 < 0 ? projectsArray.length - 1 : prev - 1));
  };

  return {
    currentProject,
    pageNext,
    pagePrev,
  };
};

export default useProjectsArray;
