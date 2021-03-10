var Gender;
(function(Gender) {
    Gender["male"] = "\u7537";
    Gender["female"] = "\u5973";
})(Gender || (Gender = {}));
var level;
(function(level) {
    level[level["level1"] = 1] = "level1";
    level[level["level2"] = 2] = "level2";
})(level || (level = {}));
console.log(level);
let gender;
gender = Gender.male;
console.log(gender);