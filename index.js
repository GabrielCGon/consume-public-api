$(() => {
  $("#icon-back").dxButton({
    icon: "print",
    onClick() {
      $.getJSON("https://api.kanye.rest", function (data) {
        DevExpress.ui.notify(data.quote, "success", 3000);
        console.log(data);
        console.log(data.quote);
      }).fail(function () {
        DevExpress.ui.notify("Não foi possível obter a frase", "error", 3000);
      });
    },
  });
});
