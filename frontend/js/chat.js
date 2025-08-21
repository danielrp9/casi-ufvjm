document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos do DOM
    const chatIcon = document.getElementById('chatIcon');
    const chatContainer = document.getElementById('chatContainer');
    const closeChat = document.getElementById('closeChat');
    const chatBody = document.getElementById('chatBody');
    const userInput = document.getElementById('userInput');
    const sendMessage = document.getElementById('sendMessage');
    
    let userName = '';
    let currentStep = 0;
    const chatSteps = [
        {
            question: "Olá! 😄 Sou o Linus, assistente virtual do Centro Acadêmico. Antes de começarmos poderia me informar qual seu nome?",
            storeResponse: true,
            field: "name"
        },
        {
            question: "Deseja entrar em contato com um de nossos representantes?",
            options: ["Sim", "Não"]
        }
    ];
    
    // Funções de utilidade para mensagens e rolagem
    function addMessageAndScroll(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', `${sender}-message`);
        messageDiv.innerHTML = text;
        chatBody.appendChild(messageDiv);
        
        // Garante que o scroll vá para o final da conversa
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Abrir/fechar chat
    chatIcon.addEventListener('click', function() {
        chatContainer.classList.toggle('open');
        if (chatContainer.classList.contains('open')) {
            userInput.focus(); // Foca no input quando o chat abre
            if (currentStep === 0) {
                // Adiciona a primeira mensagem somente quando o chat é aberto pela primeira vez
                addMessageAndScroll(chatSteps[0].question, 'bot');
            }
            // Garante que a rolagem aconteça ao abrir o chat
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    });
    
    closeChat.addEventListener('click', function() {
        chatContainer.classList.remove('open');
    });
    
    // Enviar mensagem
    function sendUserMessage() {
        const message = userInput.value.trim();
        if (message === '') return;
        
        addMessageAndScroll(message, 'user');
        userInput.value = '';
        
        if (currentStep < chatSteps.length) {
            processUserResponse(message);
        }
    }
    
    sendMessage.addEventListener('click', sendUserMessage);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });
    
   // Processar resposta do usuário
    function processUserResponse(response) {
        if (currentStep === 0) {
            userName = response;
            currentStep++;
            setTimeout(() => {
                addMessageAndScroll(`Olá, ${userName}! ${chatSteps[1].question}`, 'bot');
            }, 800);
        } else if (currentStep === 1) {
            if (response.toLowerCase() === 'sim' || response.toLowerCase() === 's') {
                setTimeout(() => {
                    const whatsappLink = `https://chat.whatsapp.com/CGE821ng7PKJJXzu407muY`;
                    addMessageAndScroll(`
                        Ótimo! Clique no botão abaixo para entrar no nosso grupo com representantes do Centro Acadêmico:
                        <a href="${whatsappLink}" class="whatsapp-btn" target="_blank">
                            <i class="fab fa-whatsapp"></i> Abrir WhatsApp
                        </a>
                    `, 'bot');
                }, 800);
            } else {
                setTimeout(() => {
                    addMessageAndScroll("Entendido. Fique à vontade para nos contatar quando quiser. Estamos à disposição!", 'bot');
                }, 800);
            }
            currentStep++;
        }
    }
});
