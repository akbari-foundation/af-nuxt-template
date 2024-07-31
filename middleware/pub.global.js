export default defineNuxtRouteMiddleware(async () => {
    const cookie = useCookie('token')
    const token = cookie.value
    if (token == undefined || token == '') {
        return
    }
    let payload = token.split('.')[1]
    let str = ''
    if (process.client) {
        str = decodeURIComponent(escape(window.atob(payload)))
    } else {
        str = new Buffer.from(payload, 'base64').toString('utf-8')
    }

    let obj = JSON.parse(str)
    // Remove extra double quotes
    obj.display_name = obj.display_name.replace(/^"(.*)"$/, '$1');

    useState('user', () => obj)
})