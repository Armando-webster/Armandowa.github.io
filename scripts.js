// Inicialização do carrossel Bootstrap
document.addEventListener('DOMContentLoaded', function () {
    // Verifica se o carrossel está presente na página e o inicializa
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        wrap = true
        new bootstrap.Carousel(carousel, {
            interval: 2000, // Tempo entre slides em milissegundos
            wrap: true // Permite o looping do carrossel
        });
    });

    // Adiciona comportamento para o botão de envio do formulário de agendamento
    const agendamentoForm = document.querySelector('form');
    if (agendamentoForm) {
        agendamentoForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Previne o envio padrão do formulário
            alert('Agendamento realizado com sucesso!');
            agendamentoForm.reset(); // Reseta o formulário após o envio
        });
    }
    
    // Comportamento do botão de envio do formulário de cadastro
    const cadastroForm = document.querySelector('form');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Previne o envio padrão do formulário
            alert('Cadastro realizado com sucesso!');
            cadastroForm.reset(); // Reseta o formulário após o envio
        });
    }
    
   

    const cadastroFormElement = document.querySelector('form');
    if (cadastroFormElement) {
        cadastroFormElement.addEventListener('submit', function (event) {
            if (!validarForm()) {
                event.preventDefault(); // Previne o envio do formulário se a validação falhar
            }
        });
    }



    const agendamentoFormElement = document.querySelector('form');
    if (agendamentoFormElement) {
        agendamentoFormElement.addEventListener('submit', function (event) {
            if (!validarAgendamentoForm()) {
                event.preventDefault(); // Previne o envio do formulário se a validação falhar
            }
        });
    }
});
