//JavaScript-C24.2.0 (SpiderMonkey)

print("Hi Entelect!\n");




var Blackjack21 ={
    
    Player: function(name, cards){
        this.Name = name;
        this.Cards = cards;
        this.HandValue = 0;
    },

    WhoBeatDealer: function(playersArray, dealer){
    
        var dealerHandValue = Blackjack21.CalculateHandValue(dealer.Cards);
        var output = "" ;
        var handValue =0;
        for(var i in playersArray){ 
            // calculate hand value for each player
            playersArray[i].HandValue = Blackjack21.CalculateHandValue(playersArray[i].Cards); 
            
            if (( playersArray[i].Cards.length == 5 && playersArray[i].HandValue <= 21) || (playersArray[i].HandValue > dealerHandValue && playersArray[i].HandValue <= 21)){
            
                print(playersArray[i].Name +" Beats Dealer");
            }
        }
        
        
        //who beat dealer
        
        
        
        
    },


    CalculateHandValue: function(playerCardsArray){
    
    var handValue = 0;
    var acesArray = [];
    
    for(var i in playerCardsArray){
    
    var firstWord = playerCardsArray[i].split(" ")[0].toLowerCase();
    
    if(firstWord != "ace"){
    
        switch(firstWord){       
        case "one":
        handValue += 1; 
        break;
        case "two":
        handValue += 2; 
        break;
        case "three":
        handValue += 3; 
        break;
        case "four":
        handValue += 4; 
        break;
        case "five":
        handValue += 5; 
        break;
        case "six":
        handValue += 6; 
        break;
        case "seven":
        handValue += 7; 
        break;
        case "eight":
        handValue += 8; 
        break;
        case "nine":
        handValue += 9; 
        break;
        case "ten":
        handValue += 10; 
        break;
        case "jack":
        handValue += 10; 
        break;
        case "queen":
        handValue += 10; 
        break;
        case "king":
        handValue += 10; 
        break;
        default: 
        handValue += 0; 
        break;
        }
    } else{ // if == "ace"
    
        acesArray.push(playerCardsArray[i]); // this allows multi aces if it is supposed to
        
    }

    } // end of for loop
    
    
   
    //calculating ace value // I've assumed that player can have multiple aces
    if(acesArray.length > 0){ // if there is one ace at least
        
        for (var j in acesArray) {
            
            if (handValue <= 10 && acesArray.length == 1){handValue += 11;}
            else if (handValue < 10 && acesArray.length == 2){handValue += 11;}
            else if (handValue < 9 && acesArray.length == 3){handValue += 11;}
            else if (handValue < 8 && acesArray.length == 4){handValue += 11;}
            else if (acesArray.length > 4){console.warning("Player got more than 4 aces!!");}
            else{
                handValue += 1;
            }
            

        }// for end
        
    }// if end

    return handValue;
    
    
    }// function end

    
}

// Implementation

//players 
var dealer = new Blackjack21.Player("Dealer", ["Jack of Spades", "Seven of Diamonds"]);
var billy = new Blackjack21.Player("Billy", ["Two of Spades","Two of Diamonds", "Two of Hearts","Four of Diamonds", "Five of Clubs"]);
var andrew = new Blackjack21.Player("Andrew", ["King of Diamonds", "Four of Spades","Four of Clubs"]);
var carla = new Blackjack21.Player("Carla", ["Queen of Clubs", "Six of Spades","Nine of Diamonds"]);

var players = [billy, andrew, carla];
Blackjack21.WhoBeatDealer(players, dealer);
