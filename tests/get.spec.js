const { test, expect } = require("@playwright/test");
const APIUtils = require("../utils/apiUtils");
const { myCustomFixture } = require("../utils/custom-fixture");

// test.describe('api tests with GET', () => {
//     // let api;

//     // test.beforeEach(async ({ api, request}) => {
//         //     api = new APIUtils(request);
//         // })


myCustomFixture("Create GET api request in playwright", async ({ apiUtil }) => {
    // create GET api request using playwright
    const getAPIResponse = await apiUtil.getReq("/booking/1", {});

    // validate status code
    console.log(await getAPIResponse.json());
    console.log(await getAPIResponse.url());

    expect(getAPIResponse.ok()).toBeTruthy();
    expect(getAPIResponse.status()).toBe(200);
});

// });