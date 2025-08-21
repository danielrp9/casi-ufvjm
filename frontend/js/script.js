document.addEventListener('DOMContentLoaded', () => {
    const arrowIconUrl = document.getElementById('data-urls').dataset.arrowIconUrl;
    const chevronIconUrl = document.getElementById('data-urls').dataset.chevronIconUrl;

    const fetchBanner = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/banners/');
            const banners = await response.json();
            const bannerContainer = document.getElementById('banner-image-container');

            if (banners.length > 0) {
                const latestBanner = banners[banners.length - 1]; // Pega o último banner
                bannerContainer.innerHTML = `<img src="${latestBanner.image}" alt="Banner do CASI" class="hero-image">`;
            }

        } catch (error) {
            console.error('Erro ao buscar banner:', error);
        }
    };

    const fetchNews = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/news/');
            const news = await response.json();
            const newsList = document.querySelector('.news-list');
            
            const latestNews = news.slice(0, 3);

            latestNews.forEach(item => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');
                newsItem.innerHTML = `
                    <div class="news-image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="news-content">
                        <h3>${item.title}</h3>
                        <div>${item.content.substring(0, 200)}...</div>
                    </div>
                    <a href="/noticias/${item.id}/" class="read-more">
                        <img src="${arrowIconUrl}" alt="Ler mais">
                    </a>
                `;
                newsList.appendChild(newsItem);
            });
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    const renderFaqs = () => {
        const faqs = [
            {
                question: 'O que é um Centro Acadêmico?',
                answer: 'Um Centro Acadêmico (CA) é a entidade que representa os estudantes de um determinado curso, defendendo seus direitos e interesses estudantis, além de promover atividades acadêmicas e culturais.'
            },
            {
                question: 'O que o Centro Acadêmico pode fazer?',
                answer: 'O CA pode organizar eventos, workshops, palestras, festas, e atuar na defesa de direitos dos estudantes junto à coordenação do curso e reitoria.'
            },
            {
                question: 'Como fazer parte do Centro Acadêmico?',
                answer: 'A participação se dá através de eleição anual, onde os estudantes se candidatam em chapas para os cargos de diretoria.'
            },
            {
                question: 'Quais os requisitos para fazer parte do Centro Acadêmico?',
                answer: `<ul>
                    <li>Estar matriculado no curso de Sistemas de Informação;</li>
                    <li>Se interessar pelo coletivo estudantil;</li>
                    <li>Ser proativo.</li>
                </ul>`
            }
        ];

        const faqList = document.querySelector('.faq-list');

        faqs.forEach((item, index) => {
            const faqItem = document.createElement('div');
            faqItem.classList.add('faq-item');
            
            faqItem.innerHTML = `
                <button class="faq-question">
                    <span>${item.question}</span>
                    <img src="${chevronIconUrl}" alt="Expandir" class="chevron-icon">
                </button>
                <div class="faq-answer">
                    ${item.answer}
                </div>
            `;
            faqList.appendChild(faqItem);
        });

        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const answer = button.nextElementSibling;
                const icon = button.querySelector('.chevron-icon');
                
                answer.classList.toggle('expanded');
                icon.classList.toggle('expanded');
            });
        });
    };
    
    const fetchEntities = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/entities/');
            const entities = await response.json();
            const entitiesList = document.querySelector('.entities-list');
            
            entities.forEach(item => {
                const entityItem = document.createElement('div');
                entityItem.classList.add('entity-item');
                entityItem.innerHTML = `
                    <div class="logo-wrapper">
                        <img src="${item.logo}" alt="${item.name}">
                    </div>
                    <p>${item.name}</p>
                `;
                entitiesList.appendChild(entityItem);
            });
        } catch (error) {
            console.error('Error fetching entities:', error);
        }
    };

    fetchBanner();
    fetchNews();
    renderFaqs();
    fetchEntities();
});