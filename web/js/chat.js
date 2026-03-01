// Chat component para Democracia Real
// Conecta con el agente de Foundry a través de la Azure Function

(function() {
    'use strict';

    const API_ENDPOINT = 'https://democracia-chat-function.azurewebsites.net/api/chat';
    let conversationId = null;
    let isOpen = false;
    let isExpanded = false;

    // Crear el HTML del chat
    function createChatWidget() {
        const widget = document.createElement('div');
        widget.id = 'chat-widget';
        widget.innerHTML = `
            <button id="chat-toggle" aria-label="Abrir chat de ayuda">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            </button>
            <div id="chat-container" class="chat-hidden">
                <div id="chat-header">
                    <span>Asistente Democracia Real</span>
                    <div class="chat-header-buttons">
                        <button id="chat-expand" aria-label="Expandir chat" title="Pantalla completa">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <polyline points="9 21 3 21 3 15"></polyline>
                                <line x1="21" y1="3" x2="14" y2="10"></line>
                                <line x1="3" y1="21" x2="10" y2="14"></line>
                            </svg>
                        </button>
                        <button id="chat-close" aria-label="Cerrar chat">&times;</button>
                    </div>
                </div>
                <div id="chat-messages">
                    <div class="chat-message bot">
                        <p>Hola! Soy el asistente del Proyecto Democracia Real. Puedo responder preguntas sobre nuestras propuestas de reforma politica, transparencia y lucha contra la corrupcion.</p>
                    </div>
                    <div class="chat-suggestions">
                        <button class="suggestion" data-question="Que propone el proyecto para combatir la corrupcion?">Combatir corrupcion</button>
                        <button class="suggestion" data-question="Cuales son los pilares tecnologicos del proyecto?">Pilares tecnologicos</button>
                        <button class="suggestion" data-question="Que reformas propone para el sistema electoral?">Reforma electoral</button>
                    </div>
                </div>
                <div id="chat-input-container">
                    <input type="text" id="chat-input" placeholder="Escribe tu pregunta..." autocomplete="off">
                    <button id="chat-send" aria-label="Enviar mensaje">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(widget);
    }

    // Agregar mensaje al chat
    function addMessage(text, isUser = false) {
        const messagesContainer = document.getElementById('chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${isUser ? 'user' : 'bot'}`;
        
        // Convertir markdown basico a HTML y limpiar citas de fuentes
        let formattedText = text
            .replace(/【\d+:\d+†source】/g, '') // Limpiar citas tipo 【4:2†source】
            .replace(/\[\d+:\d+†source\]/g, '') // Limpiar citas tipo [4:2†source]
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
        
        messageDiv.innerHTML = `<p>${formattedText}</p>`;
        
        // Ocultar sugerencias despues del primer mensaje del usuario
        const suggestions = messagesContainer.querySelector('.chat-suggestions');
        if (suggestions && isUser) {
            suggestions.style.display = 'none';
        }
        
        messagesContainer.appendChild(messageDiv);
        
        // Para mensajes del usuario, scroll al final
        // Para mensajes del bot, scroll al inicio del mensaje nuevo
        if (isUser) {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        } else {
            // Scroll suave al inicio del nuevo mensaje
            messageDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Mostrar indicador de carga
    function showLoading() {
        const messagesContainer = document.getElementById('chat-messages');
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'chat-message bot loading';
        loadingDiv.id = 'chat-loading';
        loadingDiv.innerHTML = '<p><span class="dot"></span><span class="dot"></span><span class="dot"></span></p>';
        messagesContainer.appendChild(loadingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Ocultar indicador de carga
    function hideLoading() {
        const loading = document.getElementById('chat-loading');
        if (loading) {
            loading.remove();
        }
    }

    // Enviar mensaje al agente
    async function sendMessage(message) {
        if (!message.trim()) return;

        addMessage(message, true);
        showLoading();

        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: message,
                    conversationId: conversationId
                })
            });

            hideLoading();

            if (!response.ok) {
                throw new Error('Error en la respuesta');
            }

            const data = await response.json();
            conversationId = data.conversationId;
            addMessage(data.response || 'No he podido procesar tu pregunta.');

        } catch (error) {
            hideLoading();
            console.error('Error:', error);
            addMessage('Lo siento, ha ocurrido un error. Por favor, intentalo de nuevo mas tarde.');
        }
    }

    // Toggle del chat
    function toggleChat() {
        const container = document.getElementById('chat-container');
        const toggle = document.getElementById('chat-toggle');
        isOpen = !isOpen;
        
        if (isOpen) {
            container.classList.remove('chat-hidden');
            container.classList.add('chat-visible');
            toggle.classList.add('chat-open');
            document.getElementById('chat-input').focus();
        } else {
            container.classList.remove('chat-visible');
            container.classList.add('chat-hidden');
            toggle.classList.remove('chat-open');
            // Si está expandido, contraerlo al cerrar
            if (isExpanded) {
                toggleExpand();
            }
        }
    }

    // Expandir/contraer a pantalla completa
    function toggleExpand() {
        const container = document.getElementById('chat-container');
        const expandBtn = document.getElementById('chat-expand');
        isExpanded = !isExpanded;
        
        if (isExpanded) {
            container.classList.add('chat-expanded');
            expandBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="4 14 10 14 10 20"></polyline>
                    <polyline points="20 10 14 10 14 4"></polyline>
                    <line x1="14" y1="10" x2="21" y2="3"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
            `;
            expandBtn.title = 'Reducir';
        } else {
            container.classList.remove('chat-expanded');
            expandBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <polyline points="9 21 3 21 3 15"></polyline>
                    <line x1="21" y1="3" x2="14" y2="10"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
            `;
            expandBtn.title = 'Pantalla completa';
        }
    }

    // Inicializar eventos
    function initEvents() {
        // Toggle chat
        document.getElementById('chat-toggle').addEventListener('click', toggleChat);
        document.getElementById('chat-close').addEventListener('click', toggleChat);
        document.getElementById('chat-expand').addEventListener('click', toggleExpand);

        // Enviar mensaje
        const input = document.getElementById('chat-input');
        const sendBtn = document.getElementById('chat-send');

        sendBtn.addEventListener('click', () => {
            sendMessage(input.value);
            input.value = '';
        });

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage(input.value);
                input.value = '';
            }
        });

        // Sugerencias
        document.querySelectorAll('.suggestion').forEach(btn => {
            btn.addEventListener('click', () => {
                sendMessage(btn.dataset.question);
            });
        });

        // Cerrar con Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isOpen) {
                toggleChat();
            }
        });
    }

    // Inicializar cuando el DOM este listo
    function init() {
        createChatWidget();
        initEvents();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
