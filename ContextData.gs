function getContextForFileName(testFileName) {

  return {registration: getTestRegistration(), turnus: getTestTurnus(), additionalContext: {paidValue: "200"}}

}


function getTestTurnus() {
  return {
        id: "KICZORY2024",
        name: "Rekolekcje Ewangelizacyjne - Kiczory 2024",
        formName: "Kiczory2024",
        email: {
              prefix: "[Kiczory 2024]",
              replyTo: "info@youngtree.org",
              signedBy: "Monika i Dominik",
              signedByFooter: {
                gFileHTMLUrl: "https://drive.google.com/file/d/1NX5Uz-WHXgzOAiEIMo2c70g9QeGjMp4O/view?usp=drive_link"
              },
              additionalMessage: "Już teraz prosimy Was o wytrwałą modlitwę (1) w intencji pokoju na świecie, a szczególnie na Ukrainie (2) w intencji wyjazdu i wszystkich uczestników."
            },
        date: {
          start: new Date("2024-02-12"),
          startHour: "17:00",
          end: new Date("2024-02-18"),
          endHour: "14:00"
        },
        organizer: {
          name: "Fundacja YoungTree",          
          formal: {            
            eventPolicyUrl: "https://docs.google.com/document/d/1SHNZqvFxwa7_-90zj0rPw4G69ADCY5NJItKQA-6CwRo/export?format=pdf"
          },
          finanse: {
            legalName:"Fundacja YoungTree",
            bankAccountNumber: "78 1140 2004 0000 3302 7786 2393",
            bankName: "mBank"
          },
          email : {
              organizationFooter: `<p><span style="font-size: 11px;">Fundacja YoungTree ul. Podedworze 41, 30-686 Krak&oacute;w.</span><br style="font-size: 11px;" />
                      <span style="font-size: 11px;">KRS: 0000741659, REGON: 380846248, NIP: 6793172206.</span></p>`
          }
        },
        subject: {
          name: "Rekolekcje Ewangelizacyjne",
          description: ""
        },
        host:  {
          name: "Ośrodek Rekolekcyjny - Trzy Jaskółki na Siarce",
          www: "http://www.trzyjaskolki.pl", 
          shortName: "Kiczory",
          address: "Kiczory 129, 34-483 Lipnica Wielka, Kiczory, gm. Lipnica Wielka",        
          rooms: [
            {id: 7878979789,
             building: "Budynek główny",
             flor: "Poddasze",
             roomNumber: "1",
             description: "",
             numberOfBeds: 2
             },
            {id: 7878979790,
             building: "Budynek główny",
             flor: "Poddasze",
             roomNumber: "2",
             description: "1-2 osoby, najmniejszy pokoj",
             numberOfBeds: 2
             },
          ]
         
        },
        finanse:  {
              expectedAdvancePayment: 1000,              
         }
      }

}

function getTestRegistration() {
    return {"communication":
    {
        "email": "monikaradziszowska@gmail.com, radzisz@gmail.com",
        "nameVocative": "Moniko i Dominiku",
        "name": "Monika i Dominik"
    },
    "adults": [
    {
        "name": "Monika",
        "lastName": "Radziszowska",
        "phone": 606432363,
        "email": "monikaradziszowska@gmail.com",
        "birthDate": "1978-01-13T11:00:00.000Z",
        "familyRole": "żona",
        "occupation": "logopeda",
        "age": 46,
        "income":
        {
            "value": 550,
            "description": "osoby dorosłe, młodzież ponad 16 lat, kwota 1100 zł, zniżka 50% w roli 'moderator'"
        },
        "cost":
        {
            "value": 780,
            "description": "regularna stawka 130zl/dzien dla 10+"
        },
        "nameVocative": "Moniko",
        "nameGenitive": "Moniki"
    },
    {
        "name": "Dominik",
        "lastName": "Radziszowski",
        "phone": 505241433,
        "email": "radzisz@gmail.com",
        "birthDate": "1976-08-24T11:00:00.000Z",
        "familyRole": "mąż",
        "occupation": "programista, biznesmen, kochający mąż i tata",
        "age": 47,
        "income":
        {
            "value": 550,
            "description": "osoby dorosłe, młodzież ponad 16 lat, kwota 1100 zł, zniżka 50% w roli 'moderator'"
        },
        "cost":
        {
            "value": 780,
            "description": "regularna stawka 130zl/dzien dla 10+"
        },
        "nameVocative": "Dominiku",
        "nameGenitive": "Dominika"
    }],
    "children": [
    {
        "name": "Jan",
        "birthDate": "2013-02-06T11:00:00.000Z",
        "specialNeeds": "",
        "id": "2d3a8a84-045f-4467-95bb-63f0d5b0976c::1",
        "age": 11,
        "familyRole": "syn",
        "income":
        {
            "value": 900,
            "description": "dzieci ponad 10 lat, kwota 1000 zł"
        },
        "cost":
        {
            "value": 780,
            "description": "regularna stawka 130zl/dzien dla 10+"
        },
        "group":
        {
            "id": "group-3",
            "menuName": "Grupa D",
            "name": "mlodziez",
            "gender": "koedukacyjna",
            "maxAge": "16",
            "color": "#3d85d6",
            "active": true
        }
    },
    {
        "name": "Łucja",
        "birthDate": "2014-10-05T10:00:00.000Z",
        "specialNeeds": "",
        "id": "2d3a8a84-045f-4467-95bb-63f0d5b0976c::2",
        "age": 9,
        "familyRole": "córka",
        "income":
        {
            "value": 550,
            "description": "dziecko w wieku 2-10 lat, kwota 550 zł"
        },
        "cost":
        {
            "value": 390,
            "description": "regularna stawka 65zl/dzien dla wieku 2-10"
        },
        "group":
        {
            "id": "group-3",
            "menuName": "Grupa D",
            "name": "mlodziez",
            "gender": "koedukacyjna",
            "maxAge": "16",
            "color": "#3d85d6",
            "active": true
        }
    },
    {
        "name": "Piotr",
        "birthDate": "2018-06-14T10:00:00.000Z",
        "specialNeeds": "",
        "id": "2d3a8a84-045f-4467-95bb-63f0d5b0976c::3",
        "age": 5,
        "familyRole": "syn",
        "income":
        {
            "value": 550,
            "description": "dziecko w wieku 2-10 lat, kwota 550 zł"
        },
        "cost":
        {
            "value": 390,
            "description": "regularna stawka 65zl/dzien dla wieku 2-10"
        },
        "group":
        {
            "id": "group-1",
            "menuName": "Grupa B",
            "name": "Przedszkolaki",
            "gender": "koedukacyjna",
            "maxAge": "5",
            "color": "#fff2cc",
            "active": true
        }
    }],
    "registationDate": "2024-01-02T09:18:21.464Z",
    "turnusId": "KICZORY2024",
    "address": "Podedworze, 41 30-686 Kraków",
    "mariageDate": "2001-01-05T23:00:00.000Z",
    "experience": "I, II, III DK ORAR I, II, ORDR I inne",
    "numberOfChildrenDeclaredToParticipate": 3,
    "childrenExtraNotes": "",
    "community": "DK",
    "canHelpWith": "moderator",
    "notes": "moderator",
    "leadSource": "organizator",
    "statement1": "Tak",
    "statement2": "Wyrażam zgodę na przetwarzanie moich danych osobowych przez Fundacje YoungTree z Krakowa w związku z moim udziałem w rekolekcjach zgodnie z ROZPORZĄDZENIEM PARLAMENTU EUROPEJSKIEGO I RADY (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych); - USTAWA z dnia 10 maja 2018 r. o ochronie danych osobowych. Podanie danych jest dobrowolne ale niezbędne w procesie rekrutacji i uczestnictwa. Administratorem danych osobowych jest Fundacja YoungTree z siedziba w Krakowie. Zostałem poinformowany, że przysługuje mi prawo dostępu do moich danych, możliwości ich poprawiania, usunięcia, przeniesienia, ograniczenia oraz żądania zaprzestania ich przetwarzania. Przewidywanymi odbiorcami danych osobowych jest współorganizatora Ruch Domowego Kościoła Archidiecezji Krakowskiej oraz zespół organizujący rekolekcje i zarządca ośrodka, w którym rekolekcje się odbędą.",
    "familyImageConcent": "",
    "id": "2d3a8a84-045f-4467-95bb-63f0d5b0976c",
    "status": "lista podstawowa",
    "role": "moderator",
    "finanse":
    {
        "payments": [],
        "adultsCost": 1560,
        "childrenCost": 1560,
        "totalCost": 3120,
        "adultsTagIncome": 1100,
        "childrenTagIncome": 2000,
        "totalTagIncome": 3100,
        "specialIncomeAgreed":
        {},
        "totalExpectedIncome": 3100,
        "expectedAdvancePayment": 1000,
        "totalPaid": 0,
        "reminingToBePaid": 3100,
        "paymentTitle": "KICZORY2024: Monika Radziszowska i Dominik Radziszowski",
        "paymentLink": ""
    },
    "mailingHistory": [],
    "turnusName": "Rekolekcje Ewangelizacyjne - Kiczory 2024",
    "familyName": "Monika Radziszowska i Dominik Radziszowski",
    "name": "Monika Radziszowska i Dominik Radziszowski (+3, wiek: 11, 9, 5)",
    "rowId": 24,
    "group": null
}
  
}
