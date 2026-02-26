function charFreq(message) {
  var freq = {};
    for (var i = 0; i < message.length; i++) {
        var char = message[i];
        if (freq[char]) {
            freq[char]++;
        }
        return freq;
    }
    console.log(charFreq("hello world"));