import * as IconSolid from '@fortawesome/free-solid-svg-icons';
import * as IconRegular from '@fortawesome/free-regular-svg-icons';

export const rootPath = '/';

export const Navs = [
    {
        id: 1,
        path: '/',
        label: 'Dashboard',
        icon: IconSolid.faHome,
    },
    {
        id: 2,
        path: '/user',
        label: 'Utilisateurs',
        icon: IconSolid.faUser,
    },
    {
        id: 3,
        path: '/slider',
        label: 'Medias',
        icon: IconSolid.faImages,
    },
    {
        id: 4,
        path: '/news',
        label: 'News',
        icon: IconRegular.faNewspaper,
    },
];

export const isRoot = path => (path === rootPath);

export const isRootPath = (props) => {
    const { match, location } = props;

    if (!location) return false;
    const { pathname } = location;
    return (pathname === rootPath) && (location.pathname === match.url);
};
