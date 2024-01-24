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

$(document).ready(function(){
      // Exemplo de JSON com 3 objetos
      var jsonData = [
        {
            slug: "acupuntura", 
            title: "Acupuntura", 
            description: "<img class=\"img-fluid mb-5\" src=\"http://www.espacomahna.com.br/img/em_img_acupuntura.jpg\" /><p>Consiste na aplicação de agulhas bem finas, em pontos específicos do corpo, para melhorar a imunidade e tratar problemas emocionais e doenças físicas.</p>"
        },
        {
            slug: "auriculoterapia", 
            title: "Auriculoterapia", 
            description: "Descrição <b>do</b> Exemplo 1"
        },
        {
            slug: "barras-de-access", 
            title: "Título Exemplo 1", 
            description: "Descrição <b>do</b> Exemplo 1"
        },
        {
            slug: "drenagem-linfatica", 
            title: "Título Exemplo 1", 
            description: "Descrição <b>do</b> Exemplo 1"
        },
        {
            slug: "florais-de-bach", 
            title: "Título Exemplo 1", 
            description: "Descrição <b>do</b> Exemplo 1"
        },
        {
            slug: "massagem-ayurvedica", 
            title: "Título Exemplo 1", 
            description: "Descrição <b>do</b> Exemplo 1"
        },
        {
            slug: "massagem-lomi-lomi", 
            title: "Título Exemplo 1", 
            description: "Descrição <b>do</b> Exemplo 1"
        },
        {
            slug: "massagem-modeladora", 
            title: "Título Exemplo 1", 
            description: "Descrição <b>do</b> Exemplo 1"
        },
        {
            slug: "massagem-relaxante", 
            title: "Título Exemplo 1", 
            description: "Descrição <b>do</b> Exemplo 1"
        },
        {
            slug: "moxaterapia", 
            title: "Título Exemplo 1", 
            description: "Descrição <b>do</b> Exemplo 1"
        },
        {
            slug: "reflexologia", 
            title: "Título Exemplo 1", 
            description: "Descrição <b>do</b> Exemplo 1"
        },
        {
            slug: "reiki", 
            title: "Título Exemplo 1", 
            description: "Descrição <b>do</b> Exemplo 1"
        },
        {
            slug: "shiatsu", 
            title: "Título Exemplo 1", 
            description: "Descrição <b>do</b> Exemplo 1"
        },
        {
            slug: "shiatsu-facial", 
            title: "Título Exemplo 1", 
            description: "Descrição <b>do</b> Exemplo 1"
        },
        {
            slug: "thai-massagem", 
            title: "Título Exemplo 1", 
            description: "Descrição <b>do</b> Exemplo 1"
        },
        {
            slug: "thetahealing", 
            title: "Título Exemplo 1", 
            description: "Descrição <b>do</b> Exemplo 1"
        },
        {
            slug: "ventosaterapia", 
            title: "Título Exemplo 1", 
            description: "Descrição <b>do</b> Exemplo 1"
        }
      ];

      // Atribui um evento de clique ao botão
      $(".openModal").click(function(){
        // Obtém o slug do botão clicado
        var slug = $(this).data("slug");

        // Obtém os dados correspondentes ao slug do JSON
        var data = findDataBySlug(slug);

        // Atualiza o conteúdo do modal com os dados
        $("#modalLabel").text(data.title);
        $("#modalDescription").html(data.description);

        // Exibe o modal
        $("#modal").modal("show");
      });

      // Atribui um evento de fechamento ao modal
      $("#modal").on("hidden.bs.modal", function () {
        // Limpa o conteúdo do modal ao fechar
        $("#modalLabel").text("");
        $("#modalDescription").html("");
      });

      $("#modal .close").click(function() {
        $("#modal").modal("hide");
      });

      // Atribui um evento de fechamento ao pressionar Esc
      $(document).keydown(function(event) {
        if (event.key === "Escape") {
          $("#modal").modal("hide");
        }
      });

      // Função para encontrar dados no JSON pelo slug
      function findDataBySlug(slug) {
        // Encontra os dados no JSON pelo slug
        return jsonData.find(item => item.slug === slug);
      }
});
