import { HiHome } from 'react-icons/hi';

const rootPath = '/';

const Navs = (models) => {
    const items = Object.keys(models).filter(key => !!models[key].name).map(model => models[model]);

    let id = 1;

    return [
        {
            id: 1,
            path: rootPath,
            label: 'dashboard',
            icon: HiHome,
        },
        ...items.map((item) => {
            const { name, menuLabel, menuIcon } = item;
            id += 1;
            return {
                id,
                path: name,
                label: menuLabel,
                icon: menuIcon,
            };
        }),
    ];
};

/**
 *
 * @param path
 * @returns {boolean}
 */
const isRoot = path => (path === rootPath);

/**
 *
 * @param props
 * @returns {boolean}
 */
const isRootPath = (props) => {
    const { match, location } = props;

    if (!location) return false;
    const { pathname } = location;
    return (pathname === rootPath) && (location.pathname === match.url);
};

export default {
    Navs,
    isRoot,
    isRootPath,
};
