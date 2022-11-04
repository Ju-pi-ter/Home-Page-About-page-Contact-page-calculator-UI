const goal = ["over-head", "penalty", "tap-in", "free-kick", "shot", "header"]

 const goalType = function (arr) {
  const num = Math.trunc(Math.random() * arr.length -1) 


   console.log(arr[num], num)
   
  return num
 }



const player = {
  1 : "Messi",
  2 : "Ronaldo",
  3 : "Foden",
  4 : "Lewandoski",
  5 : "haaland",
  who: "",
  whoScored: function () {
   const num = Math.trunc(Math.random() * 5 + 1 ) 
    player.who = player["num"]
    console.log(num)
    return 
 }    
  
}

console.log(player)

 

//whoScored(player)


console.log(goalType(goal), player.whoScored())
//console.log(`player ${player.whoScored()}`)