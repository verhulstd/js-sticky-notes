import StickyNotes from '../../dist/index';
var allPostitInstances = {};
var quotes = [
    "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "Fate is in your hands and no one elses",
    "Nothing happens unless first we dream.",
    "Life is change. Growth is optional. Choose wisely.",
    "Never mistake activity for achievement.",
    "Who sows virtue reaps honour.",
    "What worries you masters you.",
    "Wisdom begins in wonder.",
    "What you fear is that which requires action to overcome.",
    "Courage is going from failure to failure without losing enthusiasm."
];
var arr = []
while (arr.length < 5) {
    var randomnumber = Math.floor(Math.random() * 9) + 1;
    if (arr.indexOf(randomnumber) > -1) continue;
    arr[arr.length] = randomnumber;
}
for (var i = 0; i < 5; i++) {
    allPostitInstances['element-' + i] = new StickyNotes(quotes[arr[i]]);
}