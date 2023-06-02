function urnaeletronica() {
    let candidato1 = 0, candidato2 = 0, candidato3 = 0, votoNulo = 0, votoBranco = 0;
    let numeroCandidato, numeroTotalVotos, votoInvalido;

    let nomeCandidato1, nomeCandidato2, nomeCandidato3;

    let soma;
    let percentualC1, percentualC2, percentualC3, percentualVotoB;
    let encerraVotacao = false, confirmaVotacao = false;

    const confirmaEncerramento = "N", confirmaVoto = "N";

    console.log("Coloque o nome do Candidato 1 : ");
    nomeCandidato1 = prompt (" Digite o numero do candidato");

    console.log("Coloque o nome do Candidato 2 : ");
    prompt(nomeCandidato2);

    console.log("Coloque o nome do Candidato 3 : ");
    prompt(nomeCandidato3);
    console.clear();

    do {
        console.log("***ELEIÇÕES 2023 SEJAM BEM-VINDOS *** \n")
        console.log("** Opções de Candidato ** \n");
        console.log(" 1 ", nomeCandidato1, "\n");
        console.log(" 2 ", nomeCandidato2, "\n");
        console.log(" 3 ", nomeCandidato3, "\n");

        console.log("Digite o número do candidato: ");
        prompt(numeroCandidato);

        switch (numeroCandidato) {
            case 1:
                candidato1++
                console.log("Candidato 1 recebeu um voto \n");
                console.log("Deseja confirmar a votação? \n");
                console.log("Digite 'S' para SIM ou 'N' para NÃO:  \n");
                prompt(confirmaVoto);

                if (confirmaVoto == 'S' || confirmaVoto == 's') {
                    confirmaVotacao = true
                    alert("VOTO CONFIRMADO \n");
                    audioConfirmacao;
                }
                    console.clear;
                    break;

           case 2:
                candidato2++
                console.log("Candidato 2 recebeu um voto \n");
                console.log("Deseja confirmar a votação? \n");
                console.log("Digite 'S' para SIM ou 'N' para NÃO:  \n");
                prompt(confirmaVoto);

                if (confirmaVoto == 'S' || confirmaVoto == 's') {
                    confirmaVotacao = true
                    alert("VOTO CONFIRMADO \n");
                    audioConfirmacao;
                }
                    console.clear;
                    break;

           case 3:
                candidato3++
                console.log("Candidato 3 recebeu um voto \n");
                console.log("Deseja confirmar a votação? \n");
                console.log("Digite 'S' para SIM ou 'N' para NÃO:  \n");
                prompt(confirmaVoto);

                if (confirmaVoto == 'S' || confirmaVoto == 's') {
                    confirmaVotacao = true
                    alert("VOTO CONFIRMADO \n");
                    audioConfirmacao;
                }
                    console.clear;
                    break;

           case 6:
                votoBranco++
                console.log("Voto Branco recebeu um voto \n");
                console.log("Deseja confirmar a votação? \n");
                console.log("Digite 'S' para SIM ou 'N' para NÃO:  \n");
                prompt(confirmaVoto);

                if (confirmaVoto == 'S' || confirmaVoto == 's') {
                    confirmaVotacao = true
                    alert("VOTO CONFIRMADO \n");
                    audioConfirmacao();
                }
                    console.clear;
                    break;
            case 9:
                votoNulo++
                console.log("Voto Nulo \n");
                console.log("Deseja confirmar a votação? \n");
                console.log("Digite 'S' para SIM ou 'N' para NÃO:  \n");
                prompt(confirmaVoto);

                if (confirmaVoto == 'S' || confirmaVoto == 's') {
                    confirmaVotacao = true
                    alert("VOTO CONFIRMADO \n");
                    audioConfirmacao();
                }
                    console.clear;
                    break;

            case 06162070:
                console.log("Deseja encerrar a votação? \n");
                console.log("Digite 'S' para SIM ou 'N' para NÃO:  \n");
                prompt(encerraVotacao);
                alert(" ** VOTAÇÃO ENCERRADA ** ");

                if (encerraVotacao == 'S' || encerraVotacao == 's') {
                    encerraVotacao = true
                    console.log("VOTAÇÃO ENCERRADA\n");
                    audioConfirmacao();
                }
                    console.clear;
                    break;

                default:
                    alert("** VOTO INVÁLIDO**");
                    break;

            }
            

    } while (!encerraVotacao)

        if (candidato1 > candidato2 && candidato1 > candidato3) {
            candidato1 = candidato1 + votoBranco
            console.log(" CANDIDATO 1 GANHOU COM " , candidato1, " ", "votos \n")
        }
       else if (candidato2 > candidato1  && candidato2 > candidato3) {
            candidato2 = candidato2 + votoBranco
            console.log(" CANDIDATO 2 GANHOU COM " , candidato1, " ", "votos \n")  
       }
        else if (candidato3 > candidato2 && candidato3 > candidato1) {
            candidato3 = candidato3 + votoBranco
            console.log(" CANDIDATO 3 GANHOU COM " , candidato1, " ", "votos \n")
        }
        else if (candidato1 == candidato2 && candidato1 == candidato3 && candidato2 == candidato3)  {
            console.log("Empate");
        }
            
        soma = candidato1+candidato2+candidato3+votoNulo+votoBranco
        percentualC1 = (candidato1/soma)*100
        percentualC2 = (candidato2/soma)*100
        percentualC3 = (candidato3/soma)*100
        percentualVotoB = (votoBranco/soma)*100

        candidato1 = percentualC1
        console.log (" CAndidato 1" , candidato1, "ficou com ", candidato1, " ", "%", "dos votos \n");

        candidato2 = percentualC2
        console.log (" CAndidato 2" , candidato2, "ficou com ", candidato2, " ", "%", "dos votos \n");

        candidato3 = percentualC3
        console.log (" CAndidato 3" , candidato3, "ficou com ", candidato3, " ", "%", "dos votos \n");

        votoBranco = percentualVotoB
        console.log (" Votos em branco" , votoBranco, "ficou com ", votoBranco, " ", "%", "dos votos \n");
        audioConfirmacao();
}//fim da função urna eletronica




function audioConfirmacao() {
    const audio = new audio("./confirmacao.mp3");
    audio.play();
}