document.addEventListener('DOMContentLoaded', () => {
    const fetchEvents = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/events/');
            const events = await response.json();
            const eventsList = document.querySelector('.events-list');

            if (events.length === 0) {
                eventsList.innerHTML = '<p>Nenhum evento encontrado.</p>';
                return;
            }

            events.forEach(item => {
                const eventCard = document.createElement('div');
                eventCard.classList.add('event-card');
                
                const formattedDate = new Date(item.date).toLocaleDateString('pt-BR');

                let buyButtonHtml = '';
                if (item.event_link) {
                    buyButtonHtml = `<a href="${item.event_link}" class="buy-button" target="_blank">Comprar Ingresso</a>`;
                }

                eventCard.innerHTML = `
                    <div class="event-image-container">
                        <img src="${item.image}" alt="${item.title}" class="event-image">
                        <div class="event-overlay">
                            <h3>${item.title}</h3>
                        </div>
                    </div>
                    <div class="event-details" style="display: none;">
                        <p><strong>Descrição:</strong> ${item.description}</p>
                        <p><strong>Local:</strong> ${item.location}</p>
                        <p><strong>Data:</strong> ${formattedDate}</p>
                        <p><strong>Horário:</strong> ${item.time.substring(0, 5)}</p>
                        ${buyButtonHtml}
                    </div>
                `;
                eventsList.appendChild(eventCard);

                // Add accordion functionality on click
                const eventImageContainer = eventCard.querySelector('.event-image-container');
                const details = eventCard.querySelector('.event-details');
                
                eventImageContainer.addEventListener('click', () => {
                    details.style.display = details.style.display === 'block' ? 'none' : 'block';
                });
            });

        } catch (error) {
            console.error('Erro ao buscar eventos:', error);
        }
    };
    
    fetchEvents();
});