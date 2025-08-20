document.addEventListener('DOMContentLoaded', () => {
    const chevronIconUrl = document.getElementById('data-urls').dataset.chevronIconUrl;

    const fetchDocuments = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/documents/');
            const documents = await response.json();
            const documentsList = document.querySelector('.documents-list');
            
            if (documents.length === 0) {
                documentsList.innerHTML = '<p>Nenhum documento encontrado.</p>';
                return;
            }

            documents.forEach(item => {
                const documentItem = document.createElement('div');
                documentItem.classList.add('document-item');
                documentItem.innerHTML = `
                    <div class="document-header">
                        <h3>${item.title}</h3>
                        <img src="${chevronIconUrl}" alt="Expandir" class="chevron-icon">
                    </div>
                    <div class="document-details">
                        <p>${item.description}</p>
                        <span class="publication-date">Publicado em: ${new Date(item.publication_date).toLocaleDateString('pt-BR')}</span>
                        <a href="${item.file}" class="download-button" download>Baixar</a>
                    </div>
                `;
                documentsList.appendChild(documentItem);

                // Adiciona a funcionalidade de sanfona
                documentItem.querySelector('.document-header').addEventListener('click', () => {
                    const details = documentItem.querySelector('.document-details');
                    const icon = documentItem.querySelector('.chevron-icon');
                    details.style.display = details.style.display === 'block' ? 'none' : 'block';
                    icon.classList.toggle('expanded');
                });
            });

        } catch (error) {
            console.error('Erro ao buscar documentos:', error);
        }
    };
    
    fetchDocuments();
});