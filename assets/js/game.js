// This creates a function named "Fight"

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

      if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you was to quit?");
  
        if (confirmSkip) {
          window.alert(playerName + " has choosen to skip the fight!");
          playerMoney = playerMoney - 2;
          console.log("playerMoney", playerMoney);
          break;
        } else {
          // fight()
          break;
        }
      }

      if (promptFight === "q") {
        app.quit();
      }

    if (promptFight === "fight" || promptFight === "FIGHT") {
      //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
      enemyHealth = enemyHealth - playerAttack;
      // Log a resulting message to the console so we know that it worked.
      console.log(
        playerName +
          " attacked " +
          enemyName +
          " for " +
          playerAttack +
          " points. " +
          enemyName +
          " now has " +
          enemyHealth +
          " health remaining."
      );

      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! You WIN!!!");
        break;
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }

      // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
      playerHealth = playerHealth - enemyAttack;
      // Log a resulting message to the console so we know that it worked.
      console.log(
        enemyName +
          " attacked " +
          playerName +
          " for " +
          enemyAttack +
          ". " +
          playerName +
          " now has " +
          playerHealth +
          " health remaining."
      );

      if (playerHealth <= 0) {
        window.alert(playerName + " has died! You LOSE!!!");
        break;
      } else {
        window.alert(
          playerName + " still has " + playerHealth + " health left."
        );
      }
    }  else {
      window.alert(
        "You need to choose a valid option. Please enter 'SKIP' or 'FIGHT'."
      );
    }
  }
};

var startGame = function () {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney - 10;
for (var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50
    //debugger;
    fight(pickedEnemyName);

    if (playerHealth > 0 && i < enemyNames.length - 1) {
      var storeConfirm = window.confirm("The fight is over. Visit the store before the next round?")
      if (storeConfirm) {
      shop();
      }
    }
} else {
  window.alert("You have lost your robot in battle. Game Over!");
  break;
}
}
endGame();
};

var endGame = function() {
  if (playerHealth > 0) {
    window.alert("Great job! You've survived the game! You now have a score of " + playerMoney + ".");
  } else {
    window.alert("You've lost your robot in battle.");
  }
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing Robot Galdiators. Come back soon.");
  }

};

var shop = function() {
  var shopOptionPrompt = window.prompt ("Would you like to REFILL your health, UPGRADE your attacks or LEAVE the shop? Please enter REFILL, UPGRADE or LEAVE.");
  switch (shopOptionPrompt) {
    case "REFILL":
    case "refill":
      if (playerMoney >= 7) {
      window.alert("Refilling " + playerName + "'s health by 20 points for 7 dollars.");

      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;
      console.log("You now have " + playerMoney + " dollars and " + playerHealth + " health.");
      }
      else {
        window.alert("You don't have enough money.");
      }
      break;
    case "UPGRADE":
    case "upgrade":
      if (playerMoney >= 7) {
      window.alert("Upgrading your attack by 6 for 7 dollars.");
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
      console.log("You now have " + playerMoney + " dollars and " + playerAttack + " attack.");
      }
      else {
        window.alert("You don't have enough money.");
      }
      break;
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");
      break;

    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }

};

startGame();