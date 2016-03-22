function BankAccount(name, alias, type, initial) {
  this.name = name;
  this.alias = alias;
  this.type = type;
  this.initial = initial;
}

$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault();

    var inputtedFullName = $("input#new-name").val();
    var inputtedAccountAlias = $("input#new-account-alias").val();
    var inputtedAccountType = $("input#new-account-type").val();
    var inputtedInitialDeposit = $("input#new-initial-deposit").val();

    var newAccount = new BankAccount (inputtedFullName, inputtedAccountAlias, inputtedAccountType, inputtedInitialDeposit);

    // $("ul#accounts").append("<li><span class='account'>" + newAccount.alias + " (" + newAccount.type + ")" + "</span></li>");

    // $(".account").last().click(function() {
    $("#show-account").show();
    $(".account-alias").text(newAccount.alias);
    $(".full-name").text(newAccount.name);
    $(".account-type").text(newAccount.type);
    $(".account-balance").text(newAccount.initial);
    // });
    $(".add-account").hide();
    // $("input#new-name").val("");
    // $("input#new-account-type").val("");
    // $("input#new-initial-deposit").val("");
    // $("input#new-account-alias").val("");

  });
});
