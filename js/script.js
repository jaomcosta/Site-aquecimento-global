// Alterar as rotas para apontar para a nova estrutura
app.get('/solucoes', (req, res) => {
    res.render('pages/solucoes');
});

// Configuração do gráfico
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('temperaturaChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1900', '1950', '2000', '2023'],
            datasets: [{
                label: 'Aumento da Temperatura (°C)',
                data: [-0.2, 0.1, 0.6, 1.45],
                borderColor: 'rgb(231, 76, 60)',
                tension: 0.1
            }]
        }
    });
});