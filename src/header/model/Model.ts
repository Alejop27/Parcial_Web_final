import { HeaderModel } from '../types/Types';

export class HeaderModelImpl implements HeaderModel {
    logo = '/assets/images/logo-upb.svg';
    menuItems = [
        { label: 'Inicio', href: '/' },
        { label: 'Categorías', href: '/categorias' },
        { label: 'Favoritos', href: '/favoritos' },
        { label: 'Pauta con Nosotros', href: '/pauta' }
    ];
    userMenu = [
        { label: 'Iniciar Sesión', action: 'login' },
        { label: 'Registrarse', action: 'register' }
    ];
}