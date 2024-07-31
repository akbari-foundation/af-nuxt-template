export const useCustomAsyncFetch = async (url, options) => {
    const headers = useRequestHeaders(['cookie'])
    return await useAsyncData(url, () => $fetch(url, {baseURL:process.env.BASE_URL, headers, ...options}))
}

export const useCustomFetch = async (url, options) => {
    const headers = useRequestHeaders(['cookie'])
    return await $fetch(url, {baseURL:process.env.BASE_URL, ...options, headers})
}