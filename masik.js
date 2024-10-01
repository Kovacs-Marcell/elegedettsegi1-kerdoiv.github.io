document.addEventListener("DOMContentLoaded", function() {
    // Adatok a kérdőívről
    var labelsUgyintezes = ["Nagyon", "Inkább igen", "Inkább nem", "Egyáltalán nem"];
    var dataUgyintezes = [1, 1, 1, 1];
    var labelsMegoldas = ["Nagyon", "Inkább igen", "Inkább nem", "Egyáltalán nem"];
    var dataMegoldas = [1, 1, 1, 1];
    var labelsHozzaallas = ["Nagyon", "Inkább igen", "Inkább nem", "Egyáltalán nem"];
    var dataHozzaallas = [1, 1, 1, 1];

    // Elégedettség az ügyintézéssel
    new Chart("satisfaction-ugyintezes", {
        type: "pie",
        data: {
            labels: labelsUgyintezes,
            datasets: [{
                backgroundColor: ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9"],
                data: dataUgyintezes
            }]
        },
        options: {
            title: {
                display: true,
                text: "Elégedettség az ügyintézéssel"
            }
        }
    });

    // Megoldás Adekvátsága
    new Chart("satisfaction-megoldas", {
        type: "pie",
        data: {
            labels: labelsMegoldas,
            datasets: [{
                backgroundColor: ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9"],
                data: dataMegoldas
            }]
        },
        options: {
            title: {
                display: true,
                text: "Bejelentésre adott válaszok"
            }
        }
    });

    // Ügyintéző Segítőkészsége
    new Chart("satisfaction-hozzaallas", {
        type: "pie",
        data: {
            labels: labelsHozzaallas,
            datasets: [{
                backgroundColor: ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9"],
                data: dataHozzaallas
            }]
        },
        options: {
            title: {
                display: true,
                text: "Ügyintéző Segítőkészsége"
            }
        }
    });
});