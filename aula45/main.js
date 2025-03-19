try {
    // executa quando até dar erro
} catch (error) {
    // executa ao dar erro no try
} finally {
    // sempre executa
};

function returnHour (date) {
    if (date && !(date instanceof Date)) {
        throw new TypeError('Date instance expected');
    };

    if (!date) {
        date = new Date();
    };

    return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        // força a ter 2 digitos na hora, minuto
        // e segundo (gerando zero à esquerda)
        hour12: true
        // manipula o sistema de horários entre
        // 24 horas e 12 horas (pm, am)
    });
};

try {
    const cecisBorn = new Date(2017, 5, 27, 2, 8);
    const hour = returnHour(cecisBorn);
    console.log(hour);

} catch {
    console.log('Erro desconhecido encontrado.');

} finally {
    console.log('Tenha um bom dia.');
};