module.exports = class APIUtils {
    constructor(request) {
        this.request = request;
    }

    async postReq(endpoint, reqBody) {
        const res = await this.request.post(endpoint, { data: reqBody })
        return res
    }

    async getReq(endpoint, params = {}) {
        const res = await this.request.get(endpoint, params)
        return res
    }

    async putReq(endpoint, reqBody, token) {
        const res = await this.request.put(endpoint, {
            data: reqBody, headers: {
                'Cookie': `token=${token}`
            }
        })
        return res
    }

    async patchReq(endpoint, reqBody, token) {
        const res = await this.request.patch(endpoint, {
            data: reqBody, headers: {
                'Cookie': `token=${token}`
            }
        })
        return res
    }

    async deleteReq(endpoint, token) {
        const res = await this.request.delete(endpoint, {
            headers: {
                'Cookie': `token=${token}`
            }
        })
        return res
    }
}