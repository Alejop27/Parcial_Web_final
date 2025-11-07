export interface FooterModel {
    links: FooterLink[];
    contact: ContactInfo;
}

interface FooterLink {
    label: string;
    href: string;
}

interface ContactInfo {
    address: string;
    phone: string;
    email: string;
}