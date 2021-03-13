import * as IconSolid from '@fortawesome/free-solid-svg-icons';
import * as IconRegular from '@fortawesome/free-regular-svg-icons';

export const rootPath = '/';

export const Navs = [
    {
        path : '/',
        label : 'Dashboard',
        icon : IconSolid.faHome
    },
    {
        path : '/user',
        label : 'Utilisateurs',
        icon : IconSolid.faUser
    },
    {
        path : '/slider',
        label : 'Medias',
        icon : IconSolid.faImages
    },
    {
        path : '/news',
        label : 'Utilisateurs',
        icon : IconRegular.faNewspaper
    }
];

export const isRoot = (path) => ( path === rootPath);

export const isRootPath = (props) => {
    const { match, location } = props;

    if(!location) return false;
    const {pathname} = location;
    return (pathname === rootPath) && (location.pathname === match.url);
}