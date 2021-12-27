/**
 *
 * @param lock
 */
const scrollBody = lock => (lock ? document.body.classList.add('lock') : document.body.classList.remove('lock'));

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
const getImage = (obj, conversion) => {
    const { disk, id, fileName } = obj;
    return `${process.env.API_URL}/storage/images/${disk}/${id}/conversions/${conversion}/${fileName}`;
};

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

export {
    scrollBody,
    hasMorePage,
    parseJson,
    getImage,
    getSlideImages,
    truncate,
};
