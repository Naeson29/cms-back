/**
 *
 * @param lock
 */
const scrollBody = lock => (lock ? document.body.classList.add('lock') : document.body.classList.remove('lock'));

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

export {
    scrollBody,
    getImage,
    getSlideImages,
};
