export const STRAPI_URL = 'http://127.0.0.1:1337';

export function getServerUrl(withSlash) {
    return withSlash
        ? STRAPI_URL+'/'
        : STRAPI_URL
        ;
}
