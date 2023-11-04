const PROJECT_LIST = 'projectList';
const PROJECTS_GLOBAL_SETTINGS = 'projectsGlobalSettings';

export const MainComponentsEnum = Object.freeze(
  {
    items: {
      [PROJECT_LIST]: {
        description: 'projects',
      },
      [PROJECTS_GLOBAL_SETTINGS]: {
        description: 'settings',
      },
    },
    default: PROJECT_LIST,
  },
);