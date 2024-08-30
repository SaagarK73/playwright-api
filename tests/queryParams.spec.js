const { test, expect } = require("@playwright/test");
const APIUtils = require("../utils/apiUtils");


test.describe('api tests with query params', () => {
    let api;

    test.beforeEach(async ({request}) => {
        api = new APIUtils(request);
    })

    test("Create GET api request with query paramters in playwright", async () => {
        // create GET api request using playwright
        const getAPIResponse = await api.getReq("/booking/", {
            params: {
                'firstname': 'Mary',
                'lastname': 'Wilson',
            }
        });
    
        // validate status code
        console.log(await getAPIResponse.json());
        console.log(await getAPIResponse.url());
    
        expect(getAPIResponse.ok()).toBeTruthy();
        expect(getAPIResponse.status()).toBe(200);
    });
    
})