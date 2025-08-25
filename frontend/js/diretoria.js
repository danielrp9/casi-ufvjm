document.addEventListener('DOMContentLoaded', () => {
    const arrowIconUrl = document.getElementById('data-urls').dataset.arrowIconUrl;

    const fetchDiretoria = async () => {
        try {
            // Removido o '/api' duplicado da URL
            const response = await fetch(`${API_BASE_URL}/diretoria-cargos/`);
            const diretorias = await response.json();
            const diretoriasList = document.querySelector('.diretoria-list');

            if (diretorias.length === 0) {
                diretoriasList.innerHTML = '<p>Nenhuma diretoria cadastrada.</p>';
                return;
            }

            diretorias.forEach(diretoria => {
                const diretoriaItem = document.createElement('div');
                diretoriaItem.classList.add('diretoria-item');
                
                let membersHtml = '';
                if (diretoria.members.length > 0) {
                    membersHtml = diretoria.members.map(member => `
                        <div class="member-card">
                            <img src="${member.photo}" alt="${member.name}">
                            <h4>${member.name}</h4>
                            <p>${member.role}</p>
                        </div>
                    `).join('');
                } else {
                    membersHtml = '<p>Nenhum membro cadastrado nesta diretoria.</p>';
                }
                
                diretoriaItem.innerHTML = `
                    <div class="diretoria-header">
                        <h3>${diretoria.name}</h3>
                        <img src="${arrowIconUrl}" alt="Expandir" class="chevron-icon">
                    </div>
                    <div class="diretoria-members" style="display: none;">
                        <div class="members-grid">${membersHtml}</div>
                    </div>
                `;
                diretoriasList.appendChild(diretoriaItem);

                // Adiciona a funcionalidade de sanfona
                const header = diretoriaItem.querySelector('.diretoria-header');
                const details = diretoriaItem.querySelector('.diretoria-members');
                const icon = diretoriaItem.querySelector('.chevron-icon');

                header.addEventListener('click', () => {
                    if (details.style.display === 'none' || details.style.display === '') {
                        details.style.display = 'flex';
                        icon.classList.add('expanded');
                    } else {
                        details.style.display = 'none';
                        icon.classList.remove('expanded');
                    }
                });
            });

        } catch (error) {
            console.error('Erro ao buscar diretorias:', error);
        }
    };
    
    fetchDiretoria();
});