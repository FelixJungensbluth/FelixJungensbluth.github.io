const login = document.querySelector('.login');
const close = document.querySelector('.close');
const close1 = document.querySelector('.close1');
const login1 = document.querySelector('.login');
const close3 = document.querySelector('.close3');
const cart = document.querySelector('.warenkorb');
const leeren = document.getElementById('leer');

//Funktion um den Preis und die Anzahl der Produkte an den Warenkorb zu schreiben
function numOf() {
  document.getElementById("preisAnzeige").innerHTML = 'Gesamt: ' + localStorage.getItem("preis") + ' $';
  document.getElementById("anzahl").innerHTML = 'Artikel im Warenkorb: ' + localStorage.getItem("vOneLocalStorage");
}


/*
Der Warenkorb wird geleert
Durch click Event ausgelöst
*/
function leer() {
  leeren.addEventListener('click', () => {
    anzahl = 0;

    //lokaler Speicher wird gelöscht
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
    $(".loginWrapper1").css("visibility", "visible");
    $(".loginWrapper1").addClass("aniTop");
    $(".layerForm").css("visibility", "visible");

  });

  //schließen
  close1.addEventListener('click', () => {
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
Bildslider
*/
var slideIndex = 1;
showDivs(slideIndex);

/*
Bestimmt die Variable für das anzuzeigende Bild
*/
function plusDivs(n) {
  showDivs(slideIndex += n);
}

/*
Besimmt welches Bild angezeigt werden muss
*/
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}


//Parallax Effekt
const container = document.getElementById('para');


/*
Funktionen um mit den PageIndicatoren zu den einzelene Punken auf den Websiten zu springen
*/
function scrollIndicatorTop() {
  container.scrollTop = 0;
}

function scrollIndicatorMid2() {
  var scrollMid2 = $(document).height() * 3;
  container.scrollTop = scrollMid2;
}

function scrollIndicatorBot() {
  var scrollBot = ($(document).height() * 2) * 0.75;
  container.scrollTop = scrollBot;
}

function scrollIndicatorMid() {
  var scrollMid = ($(document).height() * 2) * 0.48;
  container.scrollTop = scrollMid;
}



//Breite des Fensters
const docWidth = $(document).width() / 2;

/*
Funktion, welche bei jedem Scrolltick ausgeführt wird
Zeigt die Elemente zur passenden Position an
*/
$(container).scroll(function() {
  var docHeight = $(document).height();
  var scrollTop = $(container).scrollTop();
  var scrollPercent = (scrollTop) / (docHeight);


  //passed die Prozent berechnung der Fenstergröße an
  if (docWidth <= 768) {
    var scrollPercentRounded = Math.round(scrollPercent * 100);
  } else {
    var scrollPercentRounded = Math.round(scrollPercent * 50);
  }

  var div = $("#section1");
  var div1 = $("#section2");
  var div2 = $("#section4");
  var div3 = $("#section5");
  var button2 = $("button2");
  console.log(scrollPercentRounded);

  //Bewegung der Kamera von links nach rechts
  $("#kamera").css("left", Math.round((-scrollPercentRounded + 120) * 0.55) + "%");
  if (scrollPercentRounded > 100) {
    $("#para").css("overflow-y", "scroll");
  }

  if (scrollPercentRounded < 25) {
    $("#indecator10").css("background", "#fff");
    $("#indecator2").css("background", "none");
    $("#kamera").attr("src", "images/kamera5.png");

  }

  if (scrollPercentRounded > 35 && scrollPercentRounded < 40) {
    $("#indecator2").css("background", "#fff");
    $("#indecator3").css("background", "none");
    $("#indecator10").css("background", "none");
    $("#indecator4").css("background", "none");
    $("#kamera").attr("src", "images/kamera4.png");
    div2.addClass("featurewerwre");
    $("#feature").css("visibility", "visible");

    div3.addClass("featureText");
    $("#featureText").css("visibility", "visible");
  }

  if (scrollPercentRounded > 65) {
    $("#indecator2").css("background", "none");
    $("#indecator4").css("background", "#fff");
    $("#indecator3").css("background", "none");
    $("#kamera").attr("src", "images/kamera5.png");

  }

  if (scrollPercentRounded > 60) {
    div.addClass("beschreibung");
    div1.addClass("beschreibungText");
    $("#beschreibung").css("visibility", "visible");
    $("#beschreibungText").css("visibility", "visible");
    $("#button2").css("visibility", "visible");
  }


  if (scrollPercentRounded > 85) {
    $("#indecator2").css("background", "none");
    $("#indecator4").css("background", "none");
    $("#indecator3").css("background", "#fff");
    $("#kamera").attr("src", "images/kamera5.png");
  }
});

/*
Halten und drücken
*/
var item = document.querySelector("#button");
var indecator = document.querySelector("#indecator1");
var timerID;
var counter = 0;
var pressHoldEvent = new CustomEvent("pressHold");
var pressHoldDuration = 100;
var elem1 = document.getElementById("test");
var width = elem1.offsetWidth;

item.addEventListener("mousedown", pressingDown, false);
item.addEventListener("mouseup", notPressingDown, false);
item.addEventListener("mouseleave", notPressingDown, false);
item.addEventListener("touchstart", pressingDown, false);
item.addEventListener("touchend", notPressingDown, false);
item.addEventListener("pressHold", doSomething, false);

function pressingDown(e) {
  requestAnimationFrame(timer);
  e.preventDefault();
}

function notPressingDown(e) {
  cancelAnimationFrame(timerID);
  counter = 0;

  //setzt die Breite des Balkens zurück
  elem1.style.width = counter + "px";
}

function timer() {
  if (counter < pressHoldDuration) {
    timerID = requestAnimationFrame(timer);
    counter++;
    elem1.style.width = counter * 13 + "px";
  } else {

    //man startet immer oben auf der Website
    container.scrollTop = 0;
    $("#para").css("overflow-y", "scroll");
    document.getElementById("button3").innerHTML = '<div id="center3" class="center3"><a href="artikel1.html"><button name="one" class="btn3"><svg width="180px" height="60px" viewBox="0 0 180 60" class="border"><polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" style="stroke-width:7px"/><polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" style="stroke-width:7px"/></svg><span>MEHR ERFAHREN</span></button></a></div>';
    //PageIndicatoren sind in der mobil Verison nicht sichtbar
    if (docWidth > 768) {
      $("#indecator10").css("visibility", "visible");
      $("#indecator2").css("visibility", "visible");
      $("#indecator3").css("visibility", "visible");
      $("#indecator4").css("visibility", "visible");
    }

    elem1.style.width = "0px";
  }
}