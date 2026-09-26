const couleurs = {
  reset: "\x1b[0m",
  rouge: "\x1b[31m",
  vert: "\x1b[32m",
  jaune: "\x1b[33m",
  bleu: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  gras: "\x1b[1m",
};

function colorer(texte, code) {
  return code + texte + couleurs.reset;
}

const prompt = require('prompt-sync')();
const candidats = [
  { cin: "AB123456", nom: "Boushaba", prenom: "Soufiane", partiPolitique: "Indépendant", age: 40, electeurs: ["EL001"] },
  { cin: "CD234567", nom: "Alaoui", prenom: "Salma", partiPolitique: "Parti de la Justice", age: 35, electeurs: ["EL002", "EL003", "EL004", "EL005", "EL006", "EL007", "EL008", "EL009", "EL010", "EL011", "EL012", "EL013", "EL014", "EL015", "EL016", "EL017"] },
  { cin: "EF345678", nom: "El Amrani", prenom: "Youssef", partiPolitique: "Parti de l'Istiqlal", age: 48, electeurs: ["EL018", "EL019", "EL020", "EL021", "EL022", "EL023", "EL024", "EL025", "EL026", "EL027", "EL028", "EL029", "EL030"] },
  { cin: "GH456789", nom: "Bennani", prenom: "Nadia", partiPolitique: "Parti du Progrès", age: 42, electeurs: ["EL031", "EL032", "EL033", "EL034", "EL035", "EL036", "EL037", "EL038", "EL039", "EL040", "EL041", "EL042", "EL043", "EL044", "EL045", "EL046", "EL047", "EL048", "EL049", "EL050"] },
  { cin: "JK567890", nom: "Tazi", prenom: "Omar", partiPolitique: "Indépendant", age: 51, electeurs: ["EL051", "EL052", "EL053", "EL054", "EL055", "EL056", "EL057", "EL058", "EL059", "EL060", "EL061", "EL062", "EL063", "EL064", "EL065", "EL066", "EL067"] },
  { cin: "LM678901", nom: "Chraibi", prenom: "Imane", partiPolitique: "Parti de la Justice", age: 38, electeurs: ["EL068", "EL069", "EL070", "EL071", "EL072", "EL073", "EL074", "EL075", "EL076", "EL077", "EL078", "EL079", "EL080", "EL081", "EL082", "EL083", "EL084", "EL085", "EL086"] },
  { cin: "NP789012", nom: "Fassi", prenom: "Karim", partiPolitique: "Parti de l'Istiqlal", age: 46, electeurs: ["EL087", "EL088", "EL089", "EL090", "EL091", "EL092", "EL093", "EL094", "EL095", "EL096", "EL097", "EL098"] },
  { cin: "QR890123", nom: "Idrissi", prenom: "Hajar", partiPolitique: "Parti du Progrès", age: 33, electeurs: ["EL099", "EL100", "EL101", "EL102", "EL103", "EL104", "EL105", "EL106", "EL107", "EL108", "EL109", "EL110", "EL111", "EL112", "EL113"] },
  { cin: "ST901234", nom: "Mansouri", prenom: "Rachid", partiPolitique: "Indépendant", age: 55, electeurs: ["EL114", "EL115", "EL116", "EL117", "EL118", "EL119", "EL120", "EL121", "EL122", "EL123", "EL124", "EL125", "EL126", "EL127"] },
  { cin: "UV012345", nom: "Benali", prenom: "Meryem", partiPolitique: "Parti de la Justice", age: 29, electeurs: ["EL128", "EL129", "EL130", "EL131", "EL132", "EL133", "EL134", "EL135", "EL136", "EL137", "EL138", "EL139", "EL140", "EL141", "EL142", "EL143", "EL144", "EL145", "EL146", "EL147"] }
];
 console.log(colorer("======================", couleurs.jaune));
console.log(colorer("   MENU PRINCIPAL   ", couleurs.jaune));
console.log(colorer("======================", couleurs.jaune));
console.log(colorer("1. Ajouter un nouveau candidat", couleurs.jaune));
console.log(colorer("2. Ajouter plusieurs candidats à la fois", couleurs.jaune));
console.log(colorer("3. Afficher la liste des candidats", couleurs.jaune));
console.log(colorer("4. Voter pour un candidat", couleurs.jaune));
console.log(colorer("5. Modifier les informations d'un candidat", couleurs.jaune));
console.log(colorer("6. Supprimer un candidat", couleurs.jaune));
console.log(colorer("7. Rechercher des candidats", couleurs.jaune));
console.log(colorer("8. Statistiques de l'élection", couleurs.jaune));
console.log(colorer("0. Quitter", couleurs.jaune));

let choix = Number(prompt("Entrez votre Choix :"));

function Ajoutercandidat ()
{
    console.log(`=====================================
  Ajouter un nouveau candidat
====================================== `
,couleurs.vert)
    let cin = prompt("entrez votre cin : ")
    cin  = cin.toUpperCase();
        let  result= candidats.find(cand => cand.cin === cin)
                if (result)
                {
                    console.log("Ce candidat existe déjà !")
                }
                else 
                    {
                    let nom = prompt("entrez votre nome :")
                    let prenom = prompt("entrez votre prenom :")
                    let partiPolitique = prompt("Parti politique : ")
                    let age  = Number(prompt("entrez votre age :"))

                    let candidat = {
                        cin : cin,
                        nom : nom,
                        prenom : prenom,
                        partiPolitique : partiPolitique,
                        age : age,
                        electeurs : []
                    }
                    candidats.push(candidat)                    
                    console.log("condidat ajoutes"); 
                    }
}


function Ajouterplusieurscandidats()
{
    console.log(`==========================================
  Ajouter plusieurs candidats à la fois
========================================== `
,couleurs.vert)
    let x = Number(prompt("entrez le nomber de condida vous avez ajoute : "))
    for (let i = 1; i <= x;i++){
         let cin = prompt(`entrez le cin de condida n° ${i}: `)
         cin = cin.toUpperCase();
           let  result= candidats.find(cand => cand.cin === cin)
               if (result)
            {
                    console.log("Ce candidat existe déjà !")
                }
                else 
                {
                    let nom = prompt("entrez votre nome :")
                    let prenom = prompt("entrez votre prenom :")
                    let partiPolitique = prompt("Parti politique : ")
                    let age  = Number(prompt("entrez votre age :"))

                    let candidat = {
                        cin : cin,
                        nom : nom,
                        prenom : prenom,
                        partiPolitique : partiPolitique,
                        age : age,
                        electeurs : []
                    }
                    candidats.push(candidat)                    
                    console.log(`condidat n°${i} ajoutes`); 
                }
            }
}


function AfficherListeCandidats (){
     console.log(colorer(`===============================
Afficher la liste des candidats
===============================
`, couleurs.vert));
console.log(`1. Afichage Simple
2. Afichage par Parti Politique
3. Afichage par Nomber de votes 
`)
let choix = Number(prompt("Comment veux-tu afficher la liste des candidats ?"))

switch (choix) 
{
case 1: 
     console.log(`==========================================
        Afichage Simple
==========================================
`)
    for (let i = 0; i < candidats.length; i++)
    {
        console.log(`# le condidat : ${candidats[i+1]} :`)
        console.log(`CIN : ${candidats[i].cin}`)
        console.log(`Nom : ${candidats[i].nom}`)
    }
      break;




case 2: 
   console.log(`==========================================
         Afichage par Parti Politique
==========================================
`)
let parti = prompt("entrez le nom de la parti politique(Laisse vide pour les indépendants) :")
if(parti === "" || parti === null)
    {
        parti = "Indépendant"
    }
    const askpart  = candidats.filter(candidat => candidat.partiPolitique === parti)
     for (let i = 0; i < askpart.length; i++)
    {
        console.log(`# le condidat :${i + 1} :`)
        console.log(`CIN : ${askpart[i].cin}`)
        console.log(`Nom : ${askpart[i].nom}`)
        console.log(`partiPolitique : ${askpart[i].partiPolitique}`)
        console.log(`====================

            `)
    }
    break;


case 3:
    console.log(`==========================================
         Afichage par Nomber de votes 
==========================================
`)
for (let i = 0; i < candidats.length - 1; i++)
{
    for (let j = 0; j < candidats.length - 1; j++)
    {
        if(candidats[j].electeurs.length  < candidats[j + 1].electeurs.length )
            {
                let temp = candidats[j].electeurs.length;
                candidats[j].electeurs.length = candidats[j+1].electeurs.length;
                candidats[j+1].electeurs.length = temp
            }
            for(let i = 0; i < candidats.length;i++)
                {
                    console.log(`# candidat : ${i + 1} , nom : ${candidats[i].nom}, prenom : ${candidats[i].prenom} , partiPolitique : ${candidats[i].partiPolitique}, age : ${candidats[i].age} , Vote : ${candidats[i].electeurs.length}`)
                    console.log("")
                }
    }  
}
   break;

   default:
    console.log(colorer("Ce choix n’est pas disponible!!", couleurs.rouge));
}
}


/*function VoterpourunCandidat (){
    console.log(colorer(`===============================
Voter pour un candidat
===============================
`, couleurs.vert))
let  = prompt("entrez votre cin :")
if(electeur === "" || electeur === null){
    console.log("votre cin vide :", couleurs.rouge)
}
electeur = electeur.toUpperCase();
for(let i = 0;i < candidats.length;i++)
    {
    for (let j = 0; j < candidats.electeurs.length; j++)
        {
        if(electeurs === candidats[i].electeurs[j])
          {
            console.log("vous avez deja vote !!");
            break;
          }
        }
}
}*/
function Modification(){
    console.log(colorer(`========================================
Modifier les informations d'un candidat
=========================================
`, couleurs.vert))
let ask1 = prompt("votre cin S’il vous plaît :")
ask1 = ask1.toUpperCase()
let test = false;
for (let i = 0; i < candidats.length; i++)
{
    if(ask1 == candidats[i].cin)
    {
        test = true;
    }
}
const index = candidats.findIndex(candidat => candidat.cin === ask1)
if (test == true)
{
    let ask2 = prompt("Que souhaitez-vous modifier ((age ou partiPolitique))?")
    if (ask2 === "age")
    {
         var chnge = Number(prompt("Entrez la nouvelle valeur"))
    }
    else if(ask2 === "partiPolitique")
        {
            var chnge = prompt("Entrez la nouvelle valeur")
        }
    candidats[index][ask2] = chnge;
    console.log("La modification a été effectuée")
}
else
{
    console.log("Cette CIN ne figure pas dans la liste des candidats!!", couleurs.rouge)
}
}
     
function  SupprimerunCandidat(){
    console.log(colorer(`================================
   Supprimer un candidat
================================
`, couleurs.vert))

let ask1 = prompt("Entrez la CIN du candidat que vous souhaitez supprimer")
ask1 = ask1.toUpperCase() 
let test = false;
for(let i = 0; i < candidats.length;i++){
        if(ask1 == candidats[i].cin)
        
            {
                test = true;
            }
    }
    if (test == true)
    {
        let index  = candidats.findIndex(candidat => candidat.cin === ask1)
        candidats.splice(index, 1);
        console.log(candidats)
    }else{
         console.log("Cette CIN ne figure pas dans la liste des candidats!!", couleurs.rouge)
    }
}



switch (choix) {
  case 0:
    console.log("good by")
        break;
  case 1:
        Ajoutercandidat();
        break;
  case 2:
        Ajouterplusieurscandidats();
        break;
  case 3:
       AfficherListeCandidats ();
       break;
  case 4:
       //VoterpourunCandidat();
       break;
 case 5:
    Modification();
 case 6:
    SupprimerunCandidat();
}