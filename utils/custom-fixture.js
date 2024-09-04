const { test } = require('@playwright/test');
const APIUtils = require('./apiUtils');

// Define your custom fixture
export const myCustomFixture = test.extend({
  apiUtil: async ({ request }, use) => {
    // Set up your fixture (e.g., navigate to a specific page)
    const apiUtil = await new APIUtils(request);
    await use(apiUtil); // Pass the fixture to the test

  },
});
// Helper function to create a TodoPage instance
async function createTodoPage(page) {
  // Your setup logic here (e.g., login, navigate, etc.)
  return new TodoPage(page);
}
