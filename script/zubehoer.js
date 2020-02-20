const login = document.querySelector('.login');
const close = document.querySelector('.close');
const close1 = document.querySelector('.close1');
const login1 = document.querySelector('.login');
const close3 = document.querySelector('.close3');
const cart = document.querySelector('.warenkorb');
const one = document.getElementById('testbutton');
const leeren = document.getElementById('leer');


//Informationen werden in den Warenkorbbereich geschrieben
function numOf() {
  document.getElementById("preisAnzeige").innerHTML = 'Gesamt: ' + localStorage.getItem("preis") + ' $';
  document.getElementById("anzahl").innerHTML = 'Artikel im Warenkorb: ' + localStorage.getItem("vOneLocalStorage");
}

/*
Warenkorb wird geleert
*/
function leer() {
  leeren.addEventListener('click', () => {
    anzahl = 0;
    localStorage.clear();
    localStorage.setItem("vOneLocalStorage", 0);
    document.getElementById("anzahl").innerHTML = 'Artikel im Warenkorb: ' + localStorage.getItem("vOneLocalStorage");


    preis = 0;
    localStorage.setItem("preis", 0);
    document.getElementById("preisAnzeige").innerHTML = 'Gesamt: ' + localStorage.getItem("preis") + ' $';
  });
}

leer();





/*
Suche
*/
function search1() {

  //Value des Inputfeldes
  var x = document.getElementById("search").value;

  //Leerzeichen werden gelöscht
  var y = x.trim();

  //Schlagwörter
  var names = ['onex', 'one', 'hülle', 'tasche', 'kamera', 'app', 'impressum', 'case', 'bag', 'gimbal', 'two', 'Onex', 'One', 'Hülle', 'Tasche', 'Kamera', 'App', 'Impressum', 'Case', 'Bag', 'Gimbal', 'Two', 'Überuns', 'überuns', 'start', 'home', 'index', 'Start', 'Home', 'Index'];
  var html = ['artikel1.html', 'artikel2.html', 'artikel4.html', 'artikel5.html', 'kamera.html', 'app.html', 'impressum.html', 'artikel4.html', 'artikel5.html', 'artikel6.html', 'artikel3.html', 'artikel1.html', 'artikel2.html', 'artikel5.html', 'artikel5.html', 'kamera.html', 'app.html', 'impressum.html', 'artikel4.html', 'artikel5.html', 'artikel6.html', 'artikel3.html', 'überuns.html', 'überuns.html', 'index.html', 'index.html', 'index.html', 'index.html', 'index.html', 'index.html'];

  //Array wird durchlaufen um gleiche Strings zu finden
  for (var i = 0; i < names.length; i++) {
    var klein = y.localeCompare(names[i]);


    if (klein == 0) {
      var htmlIndex = names.indexOf(y)

      //Attribut action wird dem Imputfeld mit Typ submit zugeweisen
      $("#formSubmit").attr("action", html[htmlIndex]);
    }

  }

}







//Liste aller Cookies
var cookieList = (document.cookie) ? document.cookie.split(';') : [];


/*
Cookies werden in der Konsole angezeigt
Dient zur Überprüfung des Logins
*/
var cookieValues = {};
for (var i = 0, n = cookieList.length; i != n; ++i) {
  var cookie = cookieList[i];
  var f = cookie.indexOf('=');
  if (f >= 0) {
    var cookieName = cookie.substring(0, f);
    var cookieValue = cookie.substring(f + 1);

    console.log("cookieName + " + cookieName + " cookieValue " + cookieValue);

    if (!cookieValues.hasOwnProperty(cookieName)) {
      cookieValues[cookieName] = cookieValue;
    }
  }
}


/*
Gibt einen bestimmten Cookie zurück
*/
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


/*
Überprüft ob ein bestimmter Cookie existiert
*/
function checkCookie() {
  var user = getCookie("user");
  console.log(user);
  if (user != "") {
    document.getElementById("username").innerHTML = ' ANGEMLEDET ALS: ' + user;
    $(".loginWrapper").css("display", "none");
    $(".loginWrapper1").css("display", "block");
  } else {
    $(".loginWrapper").css("display", "block");
    $(".loginWrapper1").css("display", "none");
  }
}


/*
Löscht alle Cookies
*/
function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}



/*
Erzeugt das loginFeld zur Anmledung durch ein Click Event
*/
function loginFeld() {
  //öffnen
  login.addEventListener('click', () => {
    console.log("sfbjkskjf");
    $(".loginWrapper").css("visibility", "visible");
    $(".loginWrapper").addClass("aniTop");
    $(".layerForm").css("visibility", "visible");

  });

  //schließen
  close.addEventListener('click', () => {
    console.log("sfbjkskjf");
    $(".loginWrapper").css("visibility", "hidden");
    $(".layerForm").css("visibility", "hidden");
  });
}

loginFeld();

/*
Erzeugt das loginFeld zur Abmeldung durch ein Click Event
*/
function loginFeld1() {

  //öffnen
  login1.addEventListener('click', () => {
    console.log("sfbjkskjf");
    $(".loginWrapper1").css("visibility", "visible");
    $(".loginWrapper1").addClass("aniTop");
    $(".layerForm").css("visibility", "visible");

  });

  //schließen
  close1.addEventListener('click', () => {
    console.log("sfbjkskjf");
    $(".loginWrapper1").css("visibility", "hidden");
    $(".layerForm").css("visibility", "hidden");
  });
}

loginFeld1();

/*
Erzeugt den Warenkorb zur Abmeldung durch ein Click Event
*/
function cartFeld() {

  //öffnen
  cart.addEventListener('click', () => {
    $(".cartWrapper").css("visibility", "visible");
    $(".cartWrapper").addClass("aniTop");
    $(".layerForm").css("visibility", "visible");


  });

  //schließen
  close3.addEventListener('click', () => {
    console.log("open");
    $(".cartWrapper").css("visibility", "hidden");
    $(".layerForm").css("visibility", "hidden");
  });
}

cartFeld();


//Parallax Effekt
const container = document.getElementById('kategorie');

//Breite des Fensters
const docWidth = $(document).width() / 2;



/*
Funktionen um mit den PageIndicatoren zu den einzelene Punken auf den Websiten zu springen
*/
function scrollIndicatorTop() {
  container.scrollTop = 0;
}

function scrollIndicatorBot() {
  var scrollBot = ($(document).height() * 3);
  container.scrollTop = scrollBot;
}

function scrollIndicatorMid() {
  var scrollMid = ($(document).height() * 2) * 0.5;
  container.scrollTop = scrollMid;
}

/*
Funktion, welche bei jedem Scrolltick ausgeführt wird
Zeigt die Elemente zur passenden Position an
*/
$(container).scroll(function() {
  var docHeight = $(document).height();
  var scrollTop = $(container).scrollTop();
  var scrollPercent = (scrollTop) / (docHeight);

  if (docWidth <= 768) {
    var scrollPercentRounded = Math.round(scrollPercent * 100);
  } else {
    var scrollPercentRounded = Math.round(scrollPercent * 50);
  }

  if (scrollPercentRounded < 33) {
    $("#indecator10").css("background", "#fff");
    $("#indecator2").css("background", "none");

  }

  if (scrollPercentRounded > 33 && scrollPercentRounded < 82) {
    $("#indecator2").css("background", "#fff");
    $("#indecator10").css("background", "none");
    $("#indecator4").css("background", "none");
    $("#kamera2").attr("src", "images/bag.png");
    $("#kamera2").addClass("kamera2");
    $(".erklärung4").css("visibility", "visible");
    $("#erklärung4").addClass("testAni");
    $(".one").css("visibility", "visible");
    $("#one4").addClass("testAniShowUp");
    $("#button4").css("visibility", "visible");
    $("#button4").addClass("testAni");
  }

  if (scrollPercentRounded > 82) {
    $("#indecator2").css("background", "none");
    $("#indecator4").css("background", "#fff");
    $("#kamera3").attr("src", "images/gimbal.png");
    $("#kamera3").addClass("kamera4");
    $(".beschreibungText1").css("visibility", "visible");
    $("#beschreibungText1").addClass("aniSlideRight");
    $(".beschreibung1").css("visibility", "visible");
    $("#beschreibung1").addClass("testAniShowUp");
    $("#button5").css("visibility", "visible");
    $("#button5").addClass("aniSlideRight");
  }
});


/*
Änderung der Navigations Leiste für Mobilgeräte
*/
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li')

  burger.addEventListener('click', () => {
    //Nav
    nav.classList.toggle('nav-active');

    //Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';

      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.8}s`;
      }
    });
    burger.classList.toggle('toggle');
  });
}
navSlide();




/*
Alle Elemete der Startseite werden Hinzugefügt
*/
function indecatorVisibility() {
  document.getElementById("erklärung").innerHTML = '  <div class="erklärung"> <span>Mit dieser Case gehst du sicher,</span> <br><span>dass deine Kamera kratzfrei</span>  <br><span> ist und kein Wasser deine  </span>  <br><span>Daten nicht wegspült.</span> </div>';
  document.getElementById("one").innerHTML = ' <div class="onex"> CASE </div>';
  document.getElementById("button3").innerHTML = '<div id="center3" class="center3"><a href="artikel4.html"><button class="btn3"><svg width="180px" height="60px" viewBox="0 0 180 60" class="border"><polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" style="stroke-width:7px"/><polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" style="stroke-width:7px"/></svg><span>ZUM ARTIKEL</span></button></a></div>';
  document.getElementById("button4").innerHTML = '<div id="center3" class="center3"><a href="artikel5.html"><button class="btn3"><svg width="180px" height="60px" viewBox="0 0 180 60" class="border"><polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" style="stroke-width:7px"/><polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" style="stroke-width:7px"/></svg><span>ZUM ARTIKEL</span></button></a></div>';
  document.getElementById("button5").innerHTML = '<div id="center3" class="center3"><a href="artikel6.html"><button class="btn3"><svg width="180px" height="60px" viewBox="0 0 180 60" class="border"><polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" style="stroke-width:7px"/><polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" style="stroke-width:7px"/></svg><span>ZUM ARTIKEL</span></button></a></div>';
  document.getElementById("erklärung4").innerHTML = '  <div class="erklärung4"> <span>Simpel aber genial ist die</span> <br><span>Tasche mit der du deine</span><br><span> Kamera und Zubehör </span><br><span>angenehm transportieren kannst.</span> </div>';
  document.getElementById("one4").innerHTML = ' <div class="one"> BAG </div>';
  document.getElementById("beschreibung1").innerHTML = '  <div class="beschreibung1"> GIMBAL </div>';
  document.getElementById("beschreibungText1").innerHTML = ' <div class="beschreibungText1"><span>Mit dem Gimbal ist die stets ein</span> <br><span> ruhiges und stabiles Bild </span>  <br><span> gewährt,wenn es mal nicht so</span>  <br><span> hektisch hergehen soll.</span> </div>';
  $("#button4").css("visibility", "hidden");


  if (docWidth > 768) {
    $("#indecator10").css("visibility", "visible");
    $("#indecator2").css("visibility", "visible");
    $("#indecator4").css("visibility", "visible");
  }
}

indecatorVisibility();
