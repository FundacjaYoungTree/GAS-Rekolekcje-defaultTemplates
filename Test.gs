function test() {

   const testFiles = [
     "email/internal/newRegistration",
     "email/Podziekowanie_za_wplate",
     "email/Podziekowanie_za_wplate_zaliczki_i_potwierdzenie_przyjecia",
     "email/Potwierdzenie_anulowania_uczestnictwa",
     "email/Potwierdzenie_przeniesienia_z_listy_rezerwowej_na podstawowa_i_prosba_o_zaliczke",
     "email/Potwierdzenie_przyjecia_i_prosba_o_zaliczke",
     "email/Potwierdzenie_przyjecia_na_liste_rezerwowa",
     "email/Potwierdzenie_rejestracji",
     "email/Przypomnienie_o_finalnej_wplacie",
     "email/Przypomnienie_o_wyjezdzie"
   ]


    const helpers = [
        [ "formatDate", text=> text?Utilities.formatDate(text, "CET", "yyyy-MM-dd"):text ]
    ]


    helpers.forEach(helper=> {
        const helperName = helper[0]
        const helperFunction = helper[1]
        CommunicationLib.Handlebars.registerHelper(helperName, function (text) {
              var result = helperFunction(text);
              return new CommunicationLib.Handlebars.SafeString(result);
      });
    })



   const testCtx =  {}

   const result = testFiles.map ( testFileName=> {        
        console.info(`Testing: ${testFileName}`)
        const bodyTemplate = HtmlService.createHtmlOutputFromFile(testFileName).getContent();
        return `<br><br><h2>----- ${testFileName} ----------</h2><br><br>` + CommunicationLib.Handlebars.compile(bodyTemplate)(testCtx);
   }).join("<br><br>------------------------------------------<br><br>")
   
  
    MailApp.sendEmail({
        to: Session.getActiveUser().getEmail(),
        subject: "[TEST] - email tempaltes",
        htmlBody: result
    })    

}
