document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.checkbox__input');
    const resultadoInput = document.getElementById('inputResultado');

    const unidadesCheckbox = document.getElementById('col1checkbox1');
    const dezenasCheckbox = document.getElementById('col2checkbox1');
    const centenasCheckbox = document.getElementById('col3checkbox1');
    const undmilharCheckbox = document.getElementById('col4checkbox1');
    const dezmilharCheckbox = document.getElementById('col5checkbox1');

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            let total_und=0;
            let total_dec=0;
            let total_cen=0;
            let total_mil=0;
            let total_decmil=0;
            let total = 0;

            checkboxes.forEach(function (checkbox, index) {
                if (checkbox.checked) {
                    const colValue = parseInt(checkbox.getAttribute('name'));
                    switch (colValue){
                        case 1:
                            const unidadesValue = parseInt(unidadesCheckbox.getAttribute('name'));
                            total_und += unidadesValue;
                            if (total_und > 9) {
                                // Desmarcar todas as unidades e marcar uma dezena
                                checkboxes.forEach(function (cb) {
                                    if (parseInt(cb.getAttribute('name')) === 1) {
                                        cb.checked = false;
                                    }
                                });
                                dezenasCheckbox.checked = true;
                            }
                            break;

                        case 10:
                            const dezenasValue = parseInt(dezenasCheckbox.getAttribute('name'));
                            total_dec += dezenasValue;
                            if (total_dec > 99) {
                                // Desmarcar todas as dezenas e marcar uma centena
                                checkboxes.forEach(function (cb) {
                                    if (parseInt(cb.getAttribute('name')) === 10) {
                                        cb.checked = false;
                                    }
                                });
                                centenasCheckbox.checked = true;
                            }
                            break;
                        case 100:
                            const centenasValue = parseInt(centenasCheckbox.getAttribute('name'));
                            total_cen += centenasValue;
                            if (total_cen > 999) {
                                // Desmarcar todas as centenas e marcar uma de milhar
                                checkboxes.forEach(function (cb) {
                                    if (parseInt(cb.getAttribute('name')) === 100) {
                                        cb.checked = false;
                                    }
                                });
                                undmilharCheckbox.checked = true;
                            }
                            break;
                        case 1000:
                            const undmilharValue = parseInt(undmilharCheckbox.getAttribute('name'));
                            total_mil += undmilharValue;
                            if (total_mil > 9999) {
                                // Desmarcar todas as undmilhar e marcar uma dezena de milhar
                                checkboxes.forEach(function (cb) {
                                    if (parseInt(cb.getAttribute('name')) === 1000) {
                                        cb.checked = false;
                                    }
                                });
                                dezmilharCheckbox.checked = true
                            }
                            break;
                        case 10000:
                            const dezmilharValue = parseInt(dezmilharCheckbox.getAttribute('name'));
                            total_decmil += dezmilharValue;
                            if (total_decmil > 99999) {
                                // Desmarcar todas as dezenas e marcar uma centena
                                checkboxes.forEach(function (cb) {
                                    if (parseInt(cb.getAttribute('name')) === 10000) {
                                        cb.checked = false;
                                    }
                                });
                                // Marque a centena de milhar aqui se necessário
                            }
                            break;
                    }
                    total += colValue;
                }
            });

            resultadoInput.value = total;
        });
    });

});