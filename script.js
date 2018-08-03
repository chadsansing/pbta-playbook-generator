function Playbook() {
  
  //Value arrays
  
  var playbookNames = [];
  var names = [];
  var looks = [];
  var coolStats = ["-3", "-2", "-1", "0", "+1", "+2", "+3"];
  var hardStats = ["-3", "-2", "-1", "0", "+1", "+2", "+3"];
  var hotStats = ["-3", "-2", "-1", "0", "+1", "+2", "+3"];
  var sharpStats = ["-3", "-2", "-1", "0", "+1", "+2", "+3"];
  var weirdStats = ["-3", "-2", "-1", "0", "+1", "+2", "+3"];
  var hxValues = ["-3", "-2", "-1", "0", "+1", "+2", "+3"];
  var hxCharacters = ["the coolest", "the least cool", "the hardest", "the least hard", "the hottest", "the least hot", "the sharpest", "the least sharp", "the weirdest", "the least weird"];
  
  //Playbook
  
  var myPlaybook = playbookNames[Math.floor(Math.random()*playbookNames.length)];
  this.myPlaybook = myPlaybook;
  
  document.getElementById("playbook-name").innerHTML = "<div><h2>" + this.myPlaybook + "</h2></div>";
  
  // Name
  
  var myName = names[Math.floor(Math.random()*names.length)];
  this.myName= myName;
  
  document.getElementById("character-name").innerHTML = "<div><h3>Name: " + this.myName + "</h3></div>"; 
  
  // Looks
  
  // Stats
  
  var coolStat = coolStats[Math.floor(Math.random()*coolStats.length)];
  this.coolStat = coolStat;
  
  document.getElementById("cool-stat").innerHTML = "<div><strong>Cool</strong>: " + this.coolStat + "<div>";
  
  var hardStat = hardStats[Math.floor(Math.random()*hardStats.length)];
  this.hardStat = hardStat;
  
  document.getElementById("hard-stat").innerHTML = "<div><strong>Hard</strong>: " + this.hardStat + "<div>";
  
  var hotStat = hotStats[Math.floor(Math.random()*hotStats.length)];
  this.hotStat = hotStat;
  
  document.getElementById("hot-stat").innerHTML = "<div><strong>Hot</strong>: " + this.hotStat + "<div>";
  
  var sharpStat = sharpStats[Math.floor(Math.random()*sharpStats.length)];
  this.sharpStat = sharpStat;
  
  document.getElementById("sharp-stat").innerHTML = "<div><strong>Sharp</strong>: " + this.sharpStat + "<div>";
  
  var weirdStat = weirdStats[Math.floor(Math.random()*weirdStats.length)];
  this.weirdStat = weirdStat;
  
  document.getElementById("weird-stat").innerHTML = "<div><strong>Weird</strong>: " + this.weirdStat + "<div>";
  
  // Hx values
  
  var hxValueOne = hxValues[Math.floor(Math.random()*hxValues.length)];
  this.hxValueOne = hxValueOne;
  
  document.getElementById("hx-value-one").innerHTML = "<span>" + this.hxValueOne + "</span>";
  
  var hxValueTwo = hxValues[Math.floor(Math.random()*hxValues.length)];
  this.hxValueTwo = hxValueTwo;
  
  document.getElementById("hx-value-two").innerHTML = "<span>" + this.hxValueTwo + "</span>";
  
  var hxValueThree = hxValues[Math.floor(Math.random()*hxValues.length)];
  this.hxValueThree = hxValueThree;
  
  document.getElementById("hx-value-three").innerHTML = "<span>" + this.hxValueThree + "</span>";
  
  var hxValueFour = hxValues[Math.floor(Math.random()*hxValues.length)];
  this.hxValueFour = hxValueFour;
  
  document.getElementById("hx-value-four").innerHTML = "<span>" + this.hxValueFour + "</span>";
  
  var hxValueFive = hxValues[Math.floor(Math.random()*hxValues.length)];
  this.hxValueFive = hxValueFive;
  
  document.getElementById("hx-value-five").innerHTML = "<span>" + this.hxValueFive + "</span>";
  
  // Special moves
  
  var bonus = Math.floor(Math.random()*2+1);
  this.bonus = bonus;
  
  var specialMoves = ["discover a secret", "survive an attack", "complete a mission", "steal something", "fix something"];
  
  var specialMove = specialMoves[Math.floor(Math.random()*specialMoves.length)];
  this.specialMove = specialMove;
  
  document.getElementById("special-move").innerHTML = "<div>Gain +" + this.bonus + " Hx with a character whenever you " + this.specialMove + " with them and no one else.</div>";
  
  //Hx characters
  
  var hxCharacterOne = hxCharacters[Math.floor(Math.random()*hxCharacters.length)];
  this.hxCharacterOne = hxCharacterOne;
  
  document.getElementById("hx-character-one").innerHTML = "<span> " + this.hxCharacterOne + "</span>";
  
  var hxCharacterTwo = hxCharacters[Math.floor(Math.random()*hxCharacters.length)];
  this.hxCharacterTwo = hxCharacterTwo;
  
  document.getElementById("hx-character-two").innerHTML = "<span> " + this.hxCharacterTwo + "</span>";
  
  var hxCharacterThree = hxCharacters[Math.floor(Math.random()*hxCharacters.length)];
  this.hxCharacterThree = hxCharacterThree;
  
  document.getElementById("hx-character-three").innerHTML = "<span>" + this.hxCharacterThree + "</span>";
  
  var hxCharacterFour = hxCharacters[Math.floor(Math.random()*hxCharacters.length)];
  this.hxCharacterFour = hxCharacterFour;
  
  document.getElementById("hx-character-four").innerHTML = "<span>" + this.hxCharacterFour + "</span>";
  
  var hxCharacterFive = hxCharacters[Math.floor(Math.random()*hxCharacters.length)];
  this.hxCharacterFive = hxCharacterFive;
  
  document.getElementById("hx-character-five").innerHTML = "<span>" + this.hxCharacterFive + "</span>";
  
  // Descriptions
  
  var worldQualities = ["alive", "ancient", "arid", "barren", "beautiful", "beckoning", "bleak", "boiling", "bountiful", "broken", "collapsing", "confusing", "cooling", "dead", "desolate", "ending", "empty", "frozen", "full of mysteries", "full of promise", "full of terror", "healed", "healthy", "infested", "lost", "malfunctioning", "new", "old", "opaque", "poisoned", "puzzling", "reborn", "resurgent", "safe", "sick", "solved", "spent", "teeming with abundance", "thriving", "warming", "welcoming", "ugly", "unknowable", "young"];
  var dependencies = ["alturisum", "chance", "chaos", "charity", "clues from the past", "destiny", "evil", "fate", "goodness", "greed", "immorality", "insanity", "logic", "magic", "morality", "nature", "probability", "randomness", "technoloy", "the gods", "yourself", "your family", "your friends", "your wits", "your smarts", "your strength", "your wisdom", "your body", "your sense of right and wrong", "your street smarts", "your gear", "your keen understanding of others"]; 
  var goals = ["answers", "avenging your love", "clearing your name", "completeness", "crushing your enemies", "death", "fame", "finding your family", "fixing what's broken", "healing others", "healing the world", "justice", "knowledge", "love", "oblivion", "peace", "punishing evil", "putting the wrong things right", "recognition", "recovering your memory", "recovering the past", "redemption", "rewarding good", "revenge", "relics of the old world", "restoring order", "riches", "serving your god", "sowing chaos", "thanks", "Wealth", "wholeness"];
  var firstTraits= ["aloofness", "anger", "anxiety", "defensiveness", "depression", "dreams", "greed", "hunger", "isolation", "loneliness", "manic personality", "pain", "past", "rage", "sadness", "selfishness", "worry"];
  var secondTraits = ["beauty", "calm demeanor", "care", "compassion", "curiosity", "experience", "expertise", "generosity", "humor", "luck", "power", "skill", "smarts", "strength", "talent", "wisdom", "wits"];
  var titles = ["bringer", "champion", "defender", "destroyer", "guardian", "harbinger", "healer", "hunter", "keeper", "lord", "master", "minion", "oracle", "prisoner", "prophet", "protector", "seer", "servant", "victim", "warden"];
  var principles = ["change", "the past", "the future", "the weak", "the strong", "the sick", "the poor", "the rich", "order", "decay", "tradition", "the old ways", "hope", "despair", "the gates between worlds", "the mind", "the body", "the spirit", "the soul"];
  
  var worldQuality = worldQualities[Math.floor(Math.random()*worldQualities.length)];
  this.worldQuality = worldQuality;
  
  var dependency = dependencies[Math.floor(Math.random()*dependencies.length)];
  this.dependency = dependency;
  
  var goal = goals[Math.floor(Math.random()*goals.length)];
  this.goal = goal;
  
  var firstTrait = firstTraits[Math.floor(Math.random()*firstTraits.length)];
  this.firstTrait = firstTrait;
  
  var secondTrait = secondTraits[Math.floor(Math.random()*secondTraits.length)];
  this.secondTrait = secondTrait;
  
  var title = titles[Math.floor(Math.random()*titles.length)];
  this.title = title;
  
  var principle = principles[Math.floor(Math.random()*principles.length)];
  this.principle = principle;
  
  document.getElementById("description-copy").innerHTML = "<div>The world is " + this.worldQuality + ". You can only depend on " + this.dependency + ". All you care about is " + this.goal + ". The others don't understand your " + this.firstTrait + ", but appreciate your " + this.secondTrait + ". You are the " + this.title + " of " + this.principle + ".</div>";

  // Playbook moves

  var playbookMoveNames = ["1"];
  var playbookRolls = ["cool", "hard", "hot", "sharp", "weird"];
  var playbookMoveEffects = ["1"]; 

  var myMoveOne = playbookMoveNames[Math.floor(Math.random()*playbookMoveNames.length)];
  var myRollOne = playbookRolls[Math.floor(Math.random()*playbookRolls.length)];
  var myEffectOne = playbookMoveEffects[Math.floor(Math.random()*playbookMoveEffects.length)];

  var myMoveTwo = playbookMoveNames[Math.floor(Math.random()*playbookMoveNames.length)];
  var myRollTwo = playbookRolls[Math.floor(Math.random()*playbookRolls.length)];
  var myEffectTwo = playbookMoveEffects[Math.floor(Math.random()*playbookMoveEffects.length)];

  var myMoveThree = playbookMoveNames[Math.floor(Math.random()*playbookMoveNames.length)];
  var myRollThree = playbookRolls[Math.floor(Math.random()*playbookRolls.length)];
  var myEffectThree = playbookMoveEffects[Math.floor(Math.random()*playbookMoveEffects.length)];

  var myMoveFour = playbookMoveNames[Math.floor(Math.random()*playbookMoveNames.length)];
  var myRollFour = playbookRolls[Math.floor(Math.random()*playbookRolls.length)];
  var myEffectFour = playbookMoveEffects[Math.floor(Math.random()*playbookMoveEffects.length)];

  var myMoveFive = playbookMoveNames[Math.floor(Math.random()*playbookMoveNames.length)];
  var myRollFive = playbookRolls[Math.floor(Math.random()*playbookRolls.length)];
  var myEffectFive = playbookMoveEffects[Math.floor(Math.random()*playbookMoveEffects.length)];

  this.myMoveOne = myMoveOne;
  this.myRollOne = myRollOne;
  this.myEffectOne = myEffectOne;

  this.myMoveTwo = myMoveTwo;
  this.myRollTwo = myRollTwo;
  this.myEffectTwo = myEffectTwo;

  this.myMoveThree = myMoveThree;
  this.myRollThree = myRollThree;
  this.myEffectThree = myEffectThree;

  this.myMoveFour = myMoveFour;
  this.myRollFour = myRollFour;
  this.myEffectFour = myEffectFour;

  this.myMoveFive = myMoveFive;
  this.myRollFive = myRollFive;
  this.myEffectFive = myEffectFive;
  
  document.getElementById("playbook-moves-list").innerHTML = "<div><ul><li>[ ] " + this.myMoveOne + ": roll "  + this.myRollOne + " to " + this.myEffectOne + ".</li><li>[ ] " + this.myMoveTwo + ": roll " + this.myRollTwo + " to " + this.myEffectTwo + ".</li><li>[ ] " + this.myMoveThree + ": roll " + this.myRollThree +" to " + this.myEffectThree + ".</li><li>[ ] " + this.myMoveFour+ ": roll " + this.myRollFour +" to " + this.myEffectFour + ".</li><li>[ ] " + this.myMoveFive + ": roll " + this.myRollFive +" to " + this.myEffectFive + ".</li></ul></div>";
  
  //Gear
  
  var gear = ["fashion worth 1-armor", "fashion worth 2-armor", "a knife", "a sword", "a dagger", "a dirk", "1-stock healing potion", "1 repair kit", "1-stock torch", "1-stock camping supplies", "1-stock first aid kit", "1-stock alchemy kit", "rope", "climbing gear", "a shield", "a hammer", "a spear", "a wand", "a staff", "a robe", "had gear", "2-stock rations", "a bow", "a crossbow", "a pistol", "a rifle", "a heavy weapon", "oddments woth 1-barter", "oddments worth 2-barter", "oddments worth 3-barter", "oddments worth 4-barter", "a treasure map", "1-stock stationery kit", "a disguise"];
  
  var myGearOne = gear[Math.floor(Math.random()*gear.length)];
  this.myGearOne = myGearOne;
  
  var myGearTwo = gear[Math.floor(Math.random()*gear.length)];
  this.myGearTwo = myGearTwo;
  
  var myGearThree = gear[Math.floor(Math.random()*gear.length)];
  this.myGearThree = myGearThree;
  
  var myGearFour = gear[Math.floor(Math.random()*gear.length)];
  this.myGearFour = myGearFour;
  
  var myGearFive = gear[Math.floor(Math.random()*gear.length)];
  this.myGearFive = myGearFive;
  
  document.getElementById("gear-list").innerHTML = "<div><ul><li>[ ] " + this.myGearOne + "</li><li> [ ] " + this.myGearTwo + "</li><li>[ ] "
  + this.myGearThree + "</li><li>[ ] " + this.myGearFour + "</li><li>[ ] " + this.myGearFive + "</li></ul></div>";  
  
  //Barter
  
  var barters = ["Pull guard duty", "Work at a clinic", "Serve as a bodyguard", "Steal something", "Recover a lost or stolen item", "Go on a raid", "Assassinate a target", "Murder for hire", "Escort a caravan", "Spy", "Kidnap", "Make something", "Hide something", "Hide someone", "Research something", "Teach something", "Perform something", "Plant evidence", "Read someone's mind", "Erase someone's mind", "Poison someone", "Escort someone", "Repair something", "Translate something", "Work an archaeological dig", "Work at a shop"];
  
  var myBarterOne = barters[Math.floor(Math.random()*barters.length)];
  this.myBarterOne = myBarterOne;
  
  var myBarterTwo = barters[Math.floor(Math.random()*barters.length)];
  this.myBarterTwo = myBarterTwo;
  
  var myBarterThree = barters[Math.floor(Math.random()*barters.length)];
  this.myBarterThree = myBarterThree;
  
  var myBarterFour = barters[Math.floor(Math.random()*barters.length)];
  this.myBarterFour = myBarterFour;
  
  var myBarterFive = barters[Math.floor(Math.random()*barters.length)];
  this.myBarterFive = myBarterFive;
  
  var loot = ["1-barter", "2-barter", "3-barter", "4-barter"];
  
  var myLootOne= loot[Math.floor(Math.random()*loot.length)];
  this.myLootOne = myLootOne;
  
  var loot = ["1-barter", "2-barter", "3-barter"];
  
  var myLootOne= loot[Math.floor(Math.random()*loot.length)];
  this.myLootOne = myLootOne;
  
  var myLootTwo= loot[Math.floor(Math.random()*loot.length)];
  this.myLootTwo = myLootTwo;
  
  var myLootThree= loot[Math.floor(Math.random()*loot.length)];
  this.myLootThree = myLootThree;
  
  var myLootFour= loot[Math.floor(Math.random()*loot.length)];
  this.myLootFour = myLootFour;
  
  var myLootFive= loot[Math.floor(Math.random()*loot.length)];
  this.myLootFive = myLootFive;
  
  document.getElementById("barter-list").innerHTML = "<div><ul><li>[ ] " + this.myBarterOne + " for " + this.myLootOne + "</li><li> [ ] " + this.myBarterTwo + " for " + this.myLootTwo + "</li><li>[ ] " + this.myBarterThree + " for " + this.myLootThree + "</li><li>[ ] " + this.myBarterFour + " for " + this.myLootFour + "</li><li>[ ] " + this.myBarterFive + " for " + this.myLootFive + "</li></ul></div>";  
  
  //console.log("The void has found your form.")
  
}

