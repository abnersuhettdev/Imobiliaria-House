$("#botao").click(function () {
  if ($("#user").val() === "" || $("#senha").val() === "") {
    alert("Preencha os dados");
  } else if ($("#user").val() !== "admin" || $("#senha").val() !== "admin") {
    alert("Usuário ou Senha Inválido!");
  } else {
    window.location.assign("../Dashboard/dashboard.html")
  }
});
