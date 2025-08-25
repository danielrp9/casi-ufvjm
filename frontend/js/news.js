document.addEventListener('DOMContentLoaded', () => {
    const fetchAllNews = async () => {
        try {
            // A linha abaixo foi corrigida para usar API_BASE_URL
            const response = await fetch(`${API_BASE_URL}/news/`);
            const news = await response.json();
            const newsList = document.querySelector('.news-full-list');
            
            if (news.length === 0) {
                newsList.innerHTML = '<p>Nenhuma notícia encontrada.</p>';
                return;
            }

            news.forEach(item => {
                const publicationDate = new Date(item.publication_date);
                const formattedDate = `${publicationDate.toLocaleDateString('pt-BR')} ${publicationDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;

                const newsItem = document.createElement('div');
                newsItem.classList.add('news-list-item');
                newsItem.innerHTML = `
                    <a href="/noticias/${item.id}/" class="news-link">
                        <h3>${item.title}</h3>
                        <span class="publication-date">${formattedDate}</span>
                    </a>
                `;

                newsList.appendChild(newsItem);
            });

        } catch (error) {
            console.error('Erro ao buscar notícias:', error);
        }
    };
    
    fetchAllNews();
});