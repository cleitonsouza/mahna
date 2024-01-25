/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2024 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

$(document).ready(function() {
    var jsonData = [
        {
            slug: "acupuntura", 
            title: "Acupuntura",
            image: "acupuntura.jpg",
            description: "<p>Consiste na aplicação de agulhas bem finas, em pontos específicos do corpo, para melhorar a imunidade e tratar problemas emocionais e doenças físicas.</p>"
        },
        {
            slug: "auriculoterapia", 
            title: "Auriculoterapia", 
            image: "auriculoterapia.jpeg",
            description: "<p>Amplamente utilizada na assistência à saúde, nos aspectos preventivos e curativos. Trabalha com a estimulação ou sedação de pontos na orelha para aliviar dores e/ou tratar problemas físicos e psíquicos.</p>"
        },
        {
            slug: "barras-de-access", 
            title: "Barras de Access", 
            image: "barras-de-access.jpg",
            description: "<p>Indicada para todas as idades e momentos da vida, é uma ferramenta terapêutica para facilitar as mudanças desejadas, destruindo os pontos de vista fixo e barreiras para que essas mudanças finalmente aconteçam e você viva a sua realidade desejada.</p>"
        },
        {
            slug: "drenagem-linfatica", 
            title: "Drenagem Linfática", 
            image: "drenagem-linfatica.jpeg",
            description: "<p>Técnica de massagem que estimula o sistema linfático a trabalhar em um ritmo mais acelerado, eliminando o excesso de líquido e toxinas do organismo.<br/><br/>Também estimula a regeneração dos tecidos, melhora o sistema imunológico, é relaxante e tranquilizante, combate a celulite e a gordura localizada e ainda melhora a ação anti-inflamatória do organismo.</p>"
        },
        {
            slug: "florais-de-bach", 
            title: "Florais de Bach", 
            image: "florais-de-bach.jpeg",
            description: "<p>Os florais de Bach é um sistema de terapia natural composto por 38 essências de flores. Durante a terapia, é trabalhado com uma escuta abrangente para entender o que está além da queixa que a pessoa traz e, para cada situação apresentada, é possível combinar diferentes essências do floral para ter um resultado mais adequado.</p>"
        },
        {
            slug: "massagem-ayurvedica", 
            title: "Massagem Ayurvédica", 
            image: "massagem-ayurvedica.jpeg",
            description: "<p>Massagem indiana que visa o reequilíbrio físico mental e energético, trazendo melhoras ao funcionamento do organismo, atuando principalmente nos sistemas nervoso, muscular, linfático e circulatório, além de induzir nosso organismo a um profundo relaxamento.</p>"
        },
        {
            slug: "massagem-lomi-lomi", 
            title: "Massagem Lomi-Lomi", 
            image: "massagem-lomi-lomi.jpeg",
            description: "<p>Massagem tradicional havaiana é uma massagem relaxante que trabalha o corpo sem usar os dedos. Diferentemente do método oriental, que se baseia em pontos de pressão, a técnica é chamada de circulatória, uma vez que move os fluidos corporais para deixar a energia circular e aliviar a tensão.</p>"
        },
        {
            slug: "massagem-modeladora", 
            title: "Massagem Modeladora", 
            image: "massagem-modeladora.jpeg",
            description: "<p>Técnica que é feita com movimentos mais fortes e profundos, com o intuito de atingir camadas mais profundas da pele e atuar também na circulação, melhorando o metabolismo da região, e sendo eficiente contra a celulite.</p>"
        },
        {
            slug: "massagem-relaxante", 
            title: "Massagem Relaxante", 
            image: "massagem-relaxante.jpeg",
            description: "<p>Usando-se de movimentos leves, é uma excelente alternativa para o tratamento de dores musculares, promovendo o bem-estar e aliviando o desconforto das regiões mais afetadas.</p>"
        },
        {
            slug: "moxaterapia", 
            title: "Moxaterapia", 
            image: "moxaterapia.jpg",
            description: "<p>Técnica que baseia-se nos mesmos princípios e conhecimentos dos meridianos de energia trabalhados na acupuntura, sendo um recurso valioso para tratamentos, principalmente da dor.</p>"
        },
        {
            slug: "reflexologia",
            title: "Reflexologia", 
            image: "reflexologia.jpeg",
            description: "<p>Técnica de massagem que utiliza a pressão em determinados pontos dos pés ou das mãos, os quais correspondem a regiões e órgãos do corpo humano.<br/><br/>É possível perceber quais partes do organismo registram algum desequilíbrio, e assim é possível reequilibrar as energias que circulam pelo corpo, reduzindo as tensões, provocando relaxamento e melhorando a circulação sanguínea.</p>"
        },
        {
            slug: "reiki", 
            title: "Reiki", 
            image: "reiki.jpeg",
            description: "<p>Técnica complementar criada no Japão que consiste na imposição de mãos para a canalização da energia universal (da Fonte) para a energia individual do Ser. Esse encontro promove equilíbrio energético, harmonização e bem-estar.</p>"
        },
        {
            slug: "shiatsu", 
            title: "Shiatsu", 
            image: "shiatsu.jpeg",
            description: "<p>Essa massagem mistura técnicas manuais de massagem japonesa com a teoria dos meridianos da MTC (Medicina Tradicional Chinesa) segundo a qual existem linhas longitudinais pelo corpo que se conectam com pontos sensíveis ao toque. Esses pontos, ao serem estimulados, proporcionam uma sensação de conforto, tranquilidade e bem-estar.<br/><br/>O objetivo do shiatsu é perceber em quais pontos do corpo há acúmulo (jitsu) ou carência (kyo) de energia e atuar balanceando este fluxo energético a fim de reestabelecer a saúde física, emocional e espiritual do paciente.</p>"
        },
        {
            slug: "thai-massagem", 
            title: "Thai Massagem", 
            image: "thai-massagem.jpeg",
            description: "<p>Massagem Ancestral Tailandesa, que traz um relaxamento profundo, pois opera diretamente sobre o sistema nervoso, acalmando a mente e colocando-a em alinhamento com a sabedoria interna que governa a vida.<br/><br/>Trabalha com alongamentos que aumentam a flexibilidade e melhoram a postura, estimulando a circulação sanguínea e reequilibrando o fluxo de energia.<br/><br/>É feita de roupa e é conduzida no solo, sob um tatame ou colchão fino.<br/><br/>A técnica é facilmente adaptada para todas as condições de saúde e é indicada para todos os tipos de pessoas.</p>"
        },
        {
            slug: "thetahealing", 
            title: "ThetaHealing", 
            image: "thetahealing.jpeg",
            description: "<p>Filosofia espiritual, que através das ondas cerebrais theta permite investigar o sistema de crenças, identificando crenças limitantes para que as mesmas possam ser reprogramadas por crenças fortalecedoras.<br/><br/>Com a técnica é possível trabalhar questões físicas, psicológicas e emocionais. Os assuntos a serem abordados vão desde o financeiro, passando pelos setores familiar, de relacionamentos, saúde, vícios, medos, ansiedade, depressão, insônia, insegurança, melhora no desempenho profissional e autoconfiança.</p>"
        },
        {
            slug: "ventosaterapia", 
            title: "Ventosaterapia",
            image: "ventosaterapia.jpg",
            description: "<p>Tratamento natural no qual são usadas ventosas para melhorar a circulação sanguínea em um local do corpo. Para isso, as ventosas criam um efeito de vácuo, que suga a pele, resultando em um aumento do diâmetro dos vasos sanguíneo no exato local. Como resultado, existe uma maior oxigenação destes tecidos, permitindo a liberação de toxinas do sangue e do músculo com mais facilidade.</p>"
        }
    ];

    $(".openModal").click(function() {
        var slug = $(this).data("slug");
        var data = findDataBySlug(slug);

        $("#modalLabel").text(data.title);
        $("#modalImage").attr("src", './assets/img/terapias/' + data.image);
        $("#modalImage").attr("alt", data.title);
        $("#modalImage").attr("title", data.title);
        $("#modalDescription").html(data.description);

        $("#modal").modal("show");
    });

    $("#modal").on("hidden.bs.modal", function () {
        $("#modalLabel").text("");
        $("#modalImage").attr("src", '');
        $("#modalImage").attr("alt", '');
        $("#modalImage").attr("title", '');
        $("#modalDescription").html("");
    });

    $("#modal .close").click(function() {
        $("#modal").modal("hide");
    });

    $(document).keydown(function(event) {
        if (event.key === "Escape") {
            $("#modal").modal("hide");
        }
    });

    function findDataBySlug(slug) {
        return jsonData.find(item => item.slug === slug);
    }
});