const cookieBtn = document.getElementById("cookieBtn");
const countLabel = document.getElementById("countlabel");
const cookieImg = cookieBtn.querySelector("img"); // hent billedet i knappen
let count = 0;

cookieBtn.onclick = function() {
  count++;
  countLabel.textContent = count;

  // Skift cookie til blå ved 250 klik
  if (count === 100) {
    cookieImg.src = "blueCookie.jpg";
    cookieImg.alt = "blue cookie";
  }

  if (count === 200) {
    cookieImg.src = "redCookie.jpg"
  }

  if(count === 300){
    cookieImg.src = "policyCookie.jpg"

  }
}
