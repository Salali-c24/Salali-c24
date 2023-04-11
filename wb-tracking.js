// CHARACTER NAMES WITH BUFFS
const charName = ["Player1", "Player2", "Player3"];
// PLAYER WHO OWNS THE CHARACTER(S)
const charOwner = ["username1", "username2", "username3"];

// DS CONSISTS OF TWO VALUES, EITHER WILL MAKE TRUE,
// BUT MUST KNOW WHICH VALUE IS WHICH IN A 'BREAKDOWN'
// I.E. DS = A || B FOR TRUE, BUT VALUE OF A OR B MUST BE
// SAVED FOR REFERENCE LATER ON...
const ds = [0, 1, 2];
// THESE TWO MUST BE TRUE OR FALSE ONLY
const zg = "1";
const wcb = "1";
// MAYBE THIS SHOULD BE AN OBJECT? IT WILL EVENTUALLY BE AN
//ARRAY OF KEY-VALUE PAIRS
const buffs = [zg, ds, wcb];

console.log(buffs);