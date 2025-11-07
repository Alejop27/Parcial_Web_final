export interface HeaderModel {
    logo: string;
    menuItems: MenuItem[];
    userMenu: UserMenuItem[];
}

interface MenuItem {
    label: string;
    href: string;
}

interface UserMenuItem {
    label: string;
    action: string;
}