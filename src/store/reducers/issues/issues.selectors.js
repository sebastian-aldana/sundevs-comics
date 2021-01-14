export const getIsListView = (state) => state.issues.isListView;

export const getPageIssues = (page) => (state) => state.issues.page[page];

export const getCurrentPage = (state) => state.issues.currentPage;

export const getPagesNumber = (state) => state.issues.pagesNumber;
