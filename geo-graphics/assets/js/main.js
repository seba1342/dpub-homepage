function fuckMeUp() {
  const background = document.getElementById('ip');
  const text = document.getElementById('ip__text');
  const button = document.getElementById('button');


  background.classList.toggle('animate');
  console.log(button.innerText);
  if(button.innerText == "☠️ Fuck me up 💀") {
    button.innerText = "🛑 stop  🛑";
  } else {
    button.innerText = "☠️ Fuck me up 💀";
  }
}
