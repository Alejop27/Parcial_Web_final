export class HeaderModelImpl {
    logo = "/assets/images/generated-image.png";
    menuItems = [
        { label: "Inicio", href: "/" },
        { label: "Categorías", href: "/categorias" },
        { label: "Favoritos", href: "/favoritos" },
        { label: "Pauta con Nosotros", href: "/pauta" }
    ];
    userMenu = [
        { label: "Iniciar Sesión", action: "login" },
        { label: "Registrarse", action: "register" }
    ];
}
