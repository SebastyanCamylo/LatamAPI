let myChart

async function getCoins() {
    try {
        const endpoint = "https://api.gael.cloud/general/public/monedas";
        /* const endpoint = "https://pokeapi.co/api/v2/pokemon/lapras;*" */
        const res = await fetch(endpoint);
        const data = await res.json()

        let CoinsSelector = `
        <option selected id="selected">Seleccione moneda</option>
        <option value="${data[34].Valor}">${data[34].Nombre}</option>
        <option value="${data[29].Valor}">${data[29].Nombre}</option>
        <option value="${data[17].Valor}">${data[17].Nombre}</option>
        <option value="${data[22].Valor}">${data[22].Nombre}</option>
        <option value="${data[1].Valor}">${data[1].Nombre}</option>
        `
        const selectCoins =
            document.querySelector(".CoinsSelector")

            console.log(selectCoins)
        selectCoins.innerHTML = CoinsSelector
    } catch (e) {
        alert("Error en el ingreso");
    }
}

getCoins()
function Calcular() {
    var inputNumber = document.getElementById("inputNumber").value
    var selectedItem = document.getElementById("Coins").value
    var selectedItemName = document.getElementById("selected").innerText
    console.log(inputNumber)
    console.log(selectedItem)
    console.log(selectedItemName)

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green',],
            datasets: [{
                label: 'Numeración',
                data: [50, 43, 35, 21, 14],
                /*  */
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    console.log(inputNumber/selectedItem)
    let total = inputNumber/selectedItem

    console.log(inputNumber,selectedItem,total)

    let CoinResult = ''
    CoinResult += `
        <h5 class="card-text m-3">Resultado: $ ${total} ${selectedItemName}</h5>
        
        `
    const CoinOP =
        document.querySelector(".CoinResult")
    CoinOP.innerHTML = CoinResult
}

