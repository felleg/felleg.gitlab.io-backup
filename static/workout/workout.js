var greetings = [
   "Hey bon matin Félix!",
   "Tourlou Félix!",
   "Yo yo yo Félix!",
   "What up Félix!",
   "Whaaat's uuup! Félix!",
   "Yo Gee, Félix!",
   "Sunshine, Félix!",
   "Oui, allo? Félix, le training t'appel!",
   "Oh boy, it's time Félix!",
   "Il était une fois... Un félix qui s'entrainait!",
   "Salut Fel!",
   "Un beau matin qui commence, Fel.",
   "Lâche pas Felou!",
   "The show must go on Fel!",
   "Oooh shit Félix!",
   "Oh shit! Oh yeah! Oh shit Félix!",
   "Geez wizz Félix!",
   "On se lève du bon pied today, Fel. ",
   "Quoi, déjà?! Allo Félix!",
   "Hallo Felix!",
   "Guten Morgen Félix!",
   "Buenos días Félix!",
   "Damn chill yo Fél!",
]

// Category 1
var abdos = [
   "Deadbugs 10-12 reps",
   "Lève jambes pieds-collés 10-12 reps",
   "Battre des pieds 10secs (5 sets)",
   "Planche 10sec (5 sets)",
   "Planche-côté 10sec (5 sets)",
]

// Category 2
var musculation = [
   "Push-ups 25",
   "Bicept Arnold 1 reps (max reps, 1 set)",
   "Tricept 10 reps (3 sets)",
   "Deplacement horizontaux (devant soi) 8-10 reps (3 sets)",
   "Deplacement en croix (éloignant de soi) 8-10 (3 reps)",
]

// Category 3
var warmup = [
   "Élastique 10 reps (circuit complet)",
   "Kick de jambes 10 reps (circuit complet, genoux haut, côté-côté, devant)",
   "Kick aérobique 10 reps (au sol, on retient la jambe en descendant)",
   "Circuit des Bras 10 reps (circuit complet habituel)",
   "Superman 10rep (5 sets) (sur le ventre)",
]

// Category 4
var stretch = [
   "Salutation soleil 10 reps",
   "Esquio-jambier 15 reps (assis au sol, 1 sec, on essaie de toucher les pieds)",
   "Étirements des jambes en lunges 15 reps environ (on déplace me genoux au besoin)",
]

// Category 5
var meditation = [
   "Ouverture et fermeture du torse 15 reps (on inspire vers le plafond, on forme une boule en expirant)",
   "Respiration profonde assis au sol, position zen 15 reps (les épaules vers l'arrière)",
   "Respiration profonde assis au sol, position en croix 15 reps (les main sur la cuisse devant nous)",
]

// Get today's date for random seed
var today = new Date();
var strDate = 'ymd'
  .replace('y', today.getFullYear())
  .replace('m', today.getMonth()+1)
  .replace('d', today.getDate());

Math.seedrandom(strDate);

// The law is : Pick 1 Greeting every morning + Pick 2 exercises at random between cat 1,2 and 3. + Pick 1 of
// Cat 4 + pick 1 of Cat 5"
var greet = greetings[Math.floor(Math.random() * greetings.length)];
var cat123 = abdos.concat(musculation.concat(warmup));
var ex1 = cat123[Math.floor(Math.random() * cat123.length)];
// We want to make sure ex2 is an exercise selected at random that is different than ex1
var ex2 = ex1;
while (ex2 == ex1) {
   ex2 = cat123[Math.floor(Math.random() * cat123.length)];
}

var ex3 = null;

while (ex3 == null || (ex3 == ex2 || ex3 == ex1)) {
   ex3 = cat123[Math.floor(Math.random() * cat123.length)];
}

var ex4 = stretch[Math.floor(Math.random() * stretch.length)];
var ex5 = meditation[Math.floor(Math.random() * meditation.length)];

// Show selected values on screen
document.getElementById("greeting").innerHTML = greet;
document.getElementById("ex1").innerHTML = ex1;
document.getElementById("ex2").innerHTML = ex2;
document.getElementById("ex3").innerHTML = ex3;
document.getElementById("ex4").innerHTML = ex4;
document.getElementById("ex5").innerHTML = ex5;

// Progress bar
(function(){
   var reverse_counter = 1200;
   var downloadTimer = setInterval(function(){
      document.getElementById("pbar").value = 1200 - --reverse_counter;
      if(reverse_counter <= 0)
         clearInterval(downloadTimer);
      document.getElementById("counting").innerHTML= Math.floor(reverse_counter / 60) +":"+ String(reverse_counter%60).padStart(2,'0');

      // Slowly reveal exercices
      for (let i=0; i<5; i++) {
         if (reverse_counter < 1200-60*i) {
            document.getElementById("e"+(i+1).toString()).style = "display:block;"
         }
      }

   },1000);
})();
