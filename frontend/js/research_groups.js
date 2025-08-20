document.addEventListener('DOMContentLoaded', () => {
    const fetchResearchGroups = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/research-groups/');
            const groups = await response.json();
            const groupsList = document.querySelector('.research-groups-list');
            
            if (groups.length === 0) {
                groupsList.innerHTML = '<p>Nenhum grupo de pesquisa encontrado.</p>';
                return;
            }

            groups.forEach(item => {
                const groupItem = document.createElement('div');
                groupItem.classList.add('research-group-item');
                groupItem.innerHTML = `
                    <div class="group-logo">
                        <img src="${item.logo}" alt="Logo do Grupo ${item.name}">
                    </div>
                    <div class="group-details">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <p class="responsible-professors">Professor Responsável: ${item.responsible_professors}</p>
                    </div>
                `;
                groupsList.appendChild(groupItem);
            });

        } catch (error) {
            console.error('Erro ao buscar grupos de pesquisa:', error);
        }
    };
    
    fetchResearchGroups();
});