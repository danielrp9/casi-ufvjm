document.addEventListener('DOMContentLoaded', () => {
    const fetchHistorico = async () => {
        try {
            // A linha abaixo foi corrigida para usar API_BASE_URL
            const response = await fetch(`${API_BASE_URL}/gestoes-historicas/`);
            const gestoes = await response.json();
            const historicoList = document.querySelector('.historico-list');
            const chevronIconUrl = document.getElementById('data-urls').dataset.chevronIconUrl;

            if (gestoes.length === 0) {
                historicoList.innerHTML = '<p>Nenhuma gestão histórica encontrada.</p>';
                return;
            }

            gestoes.forEach(gestao => {
                const historicoItem = document.createElement('div');
                historicoItem.classList.add('historico-item');

                let membrosHtml = '';
                if (gestao.membros && gestao.membros.length > 0) {
                    membrosHtml = gestao.membros.map(membro => `
                        <div class="membro-card">
                            <img src="${membro.photo}" alt="${membro.name}">
                            <h4>${membro.name}</h4>
                            <p>${membro.role}</p>
                        </div>
                    `).join('');
                } else {
                    membrosHtml = '<p>Nenhum membro cadastrado nesta gestão.</p>';
                }

                historicoItem.innerHTML = `
                    <div class="historico-header">
                        <h3>${gestao.name} - ${gestao.mandato}</h3>
                        <img src="${chevronIconUrl}" alt="Expandir" class="chevron-icon">
                    </div>
                    <div class="historico-membros" style="display: none;">
                        <div class="membros-grid">${membrosHtml}</div>
                    </div>
                `;
                historicoList.appendChild(historicoItem);

                const header = historicoItem.querySelector('.historico-header');
                const details = historicoItem.querySelector('.historico-membros');
                const icon = historicoItem.querySelector('.chevron-icon');

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
            console.error('Erro ao buscar gestões históricas:', error);
        }
    };

    fetchHistorico();
});