export interface HeaderModel {
    logo: string;
    menuItems: { label: string; href: string; }[];
    userMenu: { label: string; action: string; }[];
}
