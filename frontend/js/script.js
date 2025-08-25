document.addEventListener('DOMContentLoaded', () => {
    const renderFaqs = () => {
        const faqs = [
            {
                question: 'O que é um Centro Acadêmico?',
                answer: 'Um Centro Acadêmico (CA) é a entidade que representa os estudantes de um determinado curso, defendendo seus direitos e promovendo atividades acadêmicas e culturais.'
            },
            {
                question: 'O que o Centro Acadêmico pode fazer?',
                answer: 'O CA pode organizar eventos, workshops, palestras, festas, e atuar na defesa de direitos dos estudantes junto à coordenação do curso e reitoria.'
            },
            {
                question: 'Como fazer parte do Centro Acadêmico?',
                answer: 'Normalmente, a participação se dá através de eleição. Os estudantes se candidatam em chapas para os cargos de diretoria.'
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
        // A linha abaixo foi corrigida para usar o data-arrow-icon-url
        const chevronIconUrl = document.getElementById('data-urls').dataset.arrowIconUrl;

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
    
    renderFaqs();
});