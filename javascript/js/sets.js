let mySets = new Set(["a","b",7,8,"a","b",8,"Devanshu"])

mySets.add("Aman")
mySets.add("aman")
mySets.add("aman")

mySets.delete("a")

let hasValue = mySets.has("amanfghj")

console .log(mySets)
console .log(hasValue)