let contadorLouvores = 0;

document.getElementById('addButton').addEventListener('click', function() {
    const inputLO = document.getElementById('louvoreInput');
    const nomeLouvor = inputLO.value.trim();

    if (nomeLouvor) {
        const novoParagrafo = document.createElement('p');
        novoParagrafo.textContent = nomeLouvor;
        document.getElementById('playlistDiv').appendChild(novoParagrafo);

        contadorLouvores++;
        inputLO.value = '';
        inputLO.focus()
            } 
    else {
        alert('Por favor, digite um nome de louvor.');
        }
});

document.getElementById("contagemButton").addEventListener('click', function() {
    alert(`${contadorLouvores} linhas foram adicionadas`);
});
    