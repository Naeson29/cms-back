import {
    HiHome, HiUser, HiPhotograph, HiNewspaper
} from 'react-icons/hi';

export const rootPath = '/';

export const Navs = [
    {
        id: 1,
        path: '/',
        label: 'Dashboard',
        icon: HiHome,
    },
    {
        id: 2,
        path: '/user',
        label: 'Utilisateurs',
        icon: HiUser,
    },
    {
        id: 3,
        path: '/slider',
        label: 'Medias',
        icon: HiPhotograph,
    },
    {
        id: 4,
        path: '/news',
        label: 'News',
        icon: HiNewspaper,
    },
];

export const isRoot = path => (path === rootPath);

export const isRootPath = (props) => {
    const { match, location } = props;

    if (!location) return false;
    const { pathname } = location;
    return (pathname === rootPath) && (location.pathname === match.url);
};
