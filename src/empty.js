// "static" mechanism - has no state
var empty = {
   get isMech() { return true; },
   get isEmpty() { return true; },   
   get goStr() { return "00000000-0000-0000-0000-000000000000"; },
   get go() { return "00000000-0000-0000-0000-000000000000"; }
};
m.guid.empty = empty;