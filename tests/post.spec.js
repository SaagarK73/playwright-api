const { test, expect } = require('@playwright/test')
const { bookingPostData }  = require(".././data/post-data");
const APIUtils = require("../utils/apiUtils");

test.describe('api tests with POST', () => {
    let api;

    test.beforeEach(async ({request}) => {
        api = new APIUtils(request);
    })

    test('post api using static json', async ({ request }) => {
        const response = await api.postReq(`/booking`, bookingPostData);
    
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
    
        const postAPIResponseBody = await response.json();
    
        expect(postAPIResponseBody.booking).toHaveProperty(
            "firstname",
            "Sagar"
        );
    
        expect(postAPIResponseBody.booking.bookingdates).toHaveProperty(
            "checkin",
            "2018-01-01"
        );
    })
    
});