// Start the game
alert("Welcome to the Mood Matcher Game!");

// Step 1: Ask for the user's name
const userName = prompt("What's your name?");
if (!userName) {
  alert("Alright, Mysterious Stranger! Let's play anyway.");
} else {
  alert(`Hi ${userName}! Let's find out how you're feeling today.`);
}

// Step 2: Ask how the user is feeling
const feeling = prompt(
  `How are you feeling right now? Choose one:
  1. Angry
  2. Happy
  3. Sad
  4. Horny
  5. All of the above`
);

// Step 3: Respond based on their choice
switch (feeling?.toLowerCase()) {
  case "1":
  case "angry":
    alert(`Angry, ${userName}? Take a deep breath. Count to ten. Or maybe go punch a pillow.`);
    alert("Remember, revenge is sweet, but so is chocolate.");
    break;
  case "2":
  case "happy":
    alert(`Happy? That's awesome, ${userName}! Spread those good vibes like peanut butter on toast.`);
    alert("Remember, laughter is contagious. Go infect someone with a giggle!");
    break;
  case "3":
  case "sad":
    alert(`Sad? It's okay to feel that way, ${userName}. Here's a virtual hug&kiss from Anton.`);
    alert("Remember, even the rainiest clouds eventually make way for sunshine.");
    break;
  case "4":
  case "horny":
    alert(`Horny? Oh my, ${userName}! Maybe send a sweet message to someone special back home? Hint: their name starts with A and ends with N.");
    alert("Remember, anticipation can make the heart grow fonder.`);
    break;
  case "5":
  case "all of the above":
    alert(`All of the above? You're a bouquet of different flavors of emotions, ${userName}, such complex and beautiful zaychonok`);
    alert("Remember, it's okay to feel everything all at once. Just be kind to yourself.");
    break;
  default:
    alert(`Hmm, I didn't quite get that, ${userName}. But hey, whatever you're feeling, you're awesome!`);
    break;
}

// Step 4: End the game
alert(`Have an amazing day and remember someone back in Weehawken is thinking of you!`);
