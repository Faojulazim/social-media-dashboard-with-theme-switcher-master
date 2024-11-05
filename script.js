const flexDiv = document.getElementById("flexDiv");
const nav = document.querySelector("#nav");
const hone = document.querySelectorAll("#honecolorChange");
const card = document.querySelectorAll("#card");
const toggleParagraph = document.getElementById("toggleParagraph");
function changeElementColor(element, removeClass, toggleClass) {
  element.forEach((val) => {
    val.classList.toggle(`${removeClass}`);
    val.classList.toggle(`${toggleClass}`);
  });
}
flexDiv.addEventListener("click", (e) => {
  document.getElementById("circle").classList.toggle("translate-x-[33px]");
  document.getElementById("circle").classList.toggle("bg-VeryDarkBlueBG");
  document.getElementById("circle").classList.toggle("bg-white");
  flexDiv.classList.toggle("bg-Toggle");
  flexDiv.classList.toggle("bg-gradient-to-r");
  flexDiv.classList.toggle("from-ToggleBg1");
  flexDiv.classList.toggle("to-ToggleBg2");
  document.body.classList.toggle("bg-VeryDarkBlueBG");
  nav.classList.toggle("bg-VeryPaleBlueTopBGPattern");
  hone[0].classList.remove("text-VeryDarkBlueBG");
  toggleParagraph.classList.toggle("group-hover/isDark:text-white");
  changeElementColor(
    document.querySelectorAll("h1"),
    "text-VeryDarkBlueText",
    "text-white"
  );
  changeElementColor(
    document.querySelectorAll("p"),
    "text-DarkGrayishBlueText",
    "text-DesaturatedBlueText"
  );
  changeElementColor(
    card,
    "bg-LightGrayishBlueCardBG",
    "bg-DarkDesaturatedBlueCardBG"
  );
  changeElementColor(
    card,
    "hover:bg-[hsl(228_28%_25%/.8)]",
    "hover:bg-[hsl(230_22%_90%)]"
  );
});
console.log();
