// Sistema de Overlays (Stack)
class OverlayManager {
    constructor() {
        this.container = document.getElementById('modalLayer');
        this.bindEvents();
    }

    bindEvents() {
        // Abrir noticias
        document.addEventListener('click', e => {
            const card = e.target.closest('.news-card');
            if (card) this.openNews(card.dataset.id);
        });

        // Cerrar modal
        this.container.addEventListener('click', e => {
            if (e.target.dataset.action === 'close' || e.target.classList.contains('modal-overlay')) {
                this.close();
            }
        });

        // Teclado
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') this.close();
        });
    }

    async openNews(id) {
        try {
            const res = await fetch(`/news/${id}`);
            const html = await res.text();
            this.container.innerHTML = html;
            document.body.style.overflow = 'hidden';
        } catch (error) {
            console.error('Error al cargar noticia:', error);
        }
    }

    close() {
        this.container.innerHTML = '';
        document.body.style.overflow = '';
    }
}

// Feed Controller
class FeedController {
    constructor() {
        this.searchBar = document.getElementById('searchBar');
        this.categoryFilter = document.getElementById('categoryFilter');
        this.newsGrid = document.getElementById('newsGrid');
        this.pagination = document.getElementById('pagination');
        this.bindEvents();
    }

    bindEvents() {
        [this.searchBar, this.categoryFilter].forEach(el => {
            el?.addEventListener('input', () => this.updateFeed());
        });

        // Paginación
        this.pagination?.addEventListener('click', e => {
            if (e.target.classList.contains('page-btn')) {
                this.goToPage(parseInt(e.target.dataset.page));
            }
        });
    }

    async updateFeed() {
        const params = new URLSearchParams({
            search: this.searchBar?.value || '',
            filter: this.categoryFilter?.value || 'all'
        });

        try {
            const res = await fetch(`/api/news?${params}`);
            const data = await res.json();
            this.newsGrid.innerHTML = data.html;
            this.pagination.innerHTML = this.renderPagination(data.totalPages);
        } catch (error) {
            console.error('Error al actualizar feed:', error);
        }
    }

    async goToPage(page) {
        const params = new URLSearchParams({
            page: page,
            search: this.searchBar?.value || '',
            filter: this.categoryFilter?.value || 'all'
        });

        try {
            const res = await fetch(`/api/news?${params}`);
            const data = await res.json();
            this.newsGrid.innerHTML = data.html;
            this.pagination.innerHTML = this.renderPagination(data.totalPages);
        } catch (error) {
            console.error('Error al cambiar página:', error);
        }
    }

    renderPagination(totalPages) {
        return Array.from({ length: totalPages }, (_, i) => i + 1)
            .map(n => `<button class="page-btn" data-page="${n}">${n}</button>`)
            .join('');
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    new OverlayManager();
    new FeedController();

    // Menú de usuario
    const userMenu = document.getElementById('userMenu');
    const dropdown = document.getElementById('userDropdown');

    userMenu?.addEventListener('click', () => {
        dropdown?.classList.toggle('active');
    });

    document.addEventListener('click', e => {
        if (!userMenu?.contains(e.target)) {
            dropdown?.classList.remove('active');
        }
    });
});