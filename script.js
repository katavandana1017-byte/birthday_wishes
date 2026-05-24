
    // Different Birthday Wishes
    const wishes = [
      "May your life be filled with joy and success!",
      "Wishing you endless happiness and beautiful memories!",
      "Have a fantastic birthday full of surprises!",
      "May all your dreams come true this year!",
      "Enjoy every moment of your special day!"
    ];

    // Change Birthday Wish
    function changeWish(){
      const randomWish =
        wishes[Math.floor(Math.random() * wishes.length)];

      document.getElementById("message").innerText = randomWish;

      showPopup("💖 New birthday wish generated!");
    }

    // Celebration Effect
    function celebrate(){
      createConfetti();

      showPopup("🎊 Let the celebration begin!");

      document.body.style.background =
        `linear-gradient(
          ${Math.random()*360}deg,
          #ff9a9e,
          #fad0c4,
          #fbc2eb,
          #a18cd1
        )`;
    }

    // Cake Click Animation
    function cakeClick(){
      createConfetti();

      const cake = document.querySelector(".cake");

      cake.style.transform = "scale(1.3) rotate(15deg)";

      setTimeout(()=>{
        cake.style.transform = "";
      },500);

      showPopup("🎂 Make a birthday wish!");
    }

    // Popup Function
    function showPopup(text){
      const popup = document.getElementById("popup");

      popup.innerText = text;
      popup.classList.add("show");

      setTimeout(()=>{
        popup.classList.remove("show");
      },3000);
    }

    // Confetti Generator
    function createConfetti(){

      for(let i=0; i<100; i++){

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        document.body.appendChild(confetti);

        confetti.style.left = Math.random()*100 + "vw";

        confetti.style.backgroundColor =
          `hsl(${Math.random()*360},100%,50%)`;

        confetti.style.width =
          confetti.style.height =
          Math.random()*10 + 5 + "px";

        confetti.style.animationDuration =
          Math.random()*3 + 2 + "s";

        setTimeout(()=>{
          confetti.remove();
        },5000);
      }
    }

    // Music Toggle
    let isPlaying = false;

    function toggleMusic(){

      const music =
        document.getElementById("birthdaySong");

      if(!isPlaying){
        music.play();
        isPlaying = true;
        showPopup("🎵 Music Started");
      }
      else{
        music.pause();
        isPlaying = false;
        showPopup("🔇 Music Stopped");
      }
    }

    // Auto Popup on Load
    window.onload = () => {
      setTimeout(()=>{
        showPopup("🎁 Welcome to the Birthday Celebration!");
      },1000);
    }