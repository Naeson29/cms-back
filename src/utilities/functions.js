/**
 *
 * @param lock
 */
const scrollBody = lock => (lock ? document.body.classList.add('lock') : document.body.classList.remove('lock'));

/**
 *
 */
const scrollTop = () => window.scrollTo(0, 0);

/**
 *
 * @param pagination
 * @returns {boolean}
 */
const hasMorePage = pagination => (pagination.current_page < pagination.last_page);

/**
 *
 * @param json
 * @returns {any}
 */
const parseJson = json => (JSON.parse(json));

/**
 *
 * @param obj
 * @param conversion
 * @returns {string}
 */
const getImage = (obj, conversion) => (!obj ? '' : `${process.env.API_URL}/storage/images/${obj.disk}/${obj.id}/conversions/${conversion}/${obj.fileName}`);

/**
 *
 * @param count
 * @param string
 * @returns {string}
 */
const plurial = (count, string) => (string + (count > 1 ? 's' : ''));

const isArray = variable => Array.isArray(variable);

/**
 *
 * @param images
 * @returns {[]}
 */
const getSlideImages = images => JSON.parse(images).map((key, index) => ({
    key: `${index}`,
    image: getImage(key, 'medium'),
}));

const truncate = (str, length) => (str.length > length ? `${str.substring(0, length)}...` : str);

const initials = str => str.substring(0, 1);

export {
    scrollBody,
    scrollTop,
    hasMorePage,
    parseJson,
    getImage,
    getSlideImages,
    truncate,
    initials,
    plurial,
    isArray,
};
