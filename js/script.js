(function () {
  "use strict";

  angular
    .module("loveApp", [])
    .controller("LoveController", ["$interval", function ($interval) {
      var vm = this;

      // Modal State
      vm.isModalOpen = false;

      // Contador de Tempo Juntos
      var startDate = new Date("2024-05-20T00:00:00");
      
      var updateTime = function() {
        var now = new Date();
        var diff = now - startDate;

        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        var minutes = Math.floor((diff / 1000 / 60) % 60);
        var seconds = Math.floor((diff / 1000) % 60);

        vm.timeTogether = {
          days: days,
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0')
        };
      };

      // Atualiza a cada segundo
      updateTime();
      $interval(updateTime, 1000);

      // Galeria estilo Polaroid
      vm.polaroids = [
        {
          url: "image/Natal.jpg",
          src: "image/Natal.jpg",
          caption: "Nosso primeiro natal",
          style: { "transform": "rotate(-5deg)", "z-index": 1, "margin-top": "20px" }
        },
        {
          url: "image/PistaKart.jpg",
          src: "image/PistaKart.jpg",
          caption: "Nosso primeiro role juntos",
          style: { "transform": "rotate(3deg)", "z-index": 2, "margin-top": "-10px" }
        },
        {
          url: "image/PedidoNamoro.jpg",
          src: "image/PedidoNamoro.jpg",
          caption: "Para sempre nós",
          style: { "transform": "rotate(-2deg)", "z-index": 3, "margin-top": "15px" }
        },
        {
          url: "image/PorDoSol.jpg",
          src: "image/PorDoSol.jpg",
          caption: "Um dos nossos momentos mais divertidos",
          style: { "transform": "rotate(-2deg)", "z-index": 3, "margin-top": "15px" }
        },
        {
          url: "image/PedidoCavalo.jpg",
          src: "image/PedidoCavalo.jpg",
          caption: "Pedido mais que especial\n(Cavalo)",
          style: { "transform": "rotate(-5deg)", "z-index": 1, "margin-top": "20px" }
        },
  
      ];

      // Ações do Modal
      vm.openSurpriseModal = function() {
        vm.isModalOpen = true;
      };

      vm.closeSurpriseModal = function() {
        vm.isModalOpen = false;
      };

    }]);
})();
