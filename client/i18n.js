var i18n = (function () {
  var messagesEN_PT = {
    "An easy navigation through Facebook events": "Seus eventos do Facebook em um só lugar",
    "Sign in and see all Facebook events you and your friends were invited. An easy and quick way to get social information about events relevant for you.": "Entre e veja os eventos do Facebook que você e seus amigos foram convidados. Uma visualização fácil e rápida de todos eventos relevantes para você.",
    "Step 1: sign in": "Passo 1: entre",
    "Step 2: choose a date": "Passo 2: escolha uma data",
    "Step 3: check the events": "Passo 3: confira os eventos",
    "Loading events...": "Carregando eventos...",
    "No events found at this date :(": "Nenhum evento nesta data :(",
    "Sign in with your Facebook to see events": "Entre com seu Facebook para ver eventos"
  };
  var messagesKeys = _.keys(messagesEN_PT);
  var messagesEN_EN = _.object(messagesKeys, messagesKeys);
  var languages = {
    "EN": messagesEN_EN,
    "PT": messagesEN_PT
  };

  var translate = function (message) {
    var language = Session.get("language", language) || "EN";
    return languages[language][message];
  };

  var setLanguage = function (language) {
    return Session.set("language", language);
  }

  return {
    translate: translate,
    setLanguage: setLanguage
  };
})();