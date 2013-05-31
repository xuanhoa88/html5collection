<!DOCTYPE html>
<html>
<head></head>
<body>
<h1>Oscillator</h1>
<img src="../images/osc2.png"/>
<table>
<tr><td>Type</td><td><select id="type" onchange="Setup()"><option>Sine</option><option>Square</option><option>SawTooth</option><option>Triangle</option></select></td></tr>
<tr><td>Freq(Hz)</td><td><input type="range" min="50" max="5000" size="10" id="freq" value="440" onchange="Setup()"/></td></tr>
<tr><td>Level</td><td><input type="range" min="0" max="1" step="0.01" size="10" id="level" value="1" onchange="Setup()"/></td></tr>
</table>
<br/>
<button onclick="Setup()">Set</button><br/>
<script type="text/javascript" src="http://www.g200kg.com/docs/waapisim/waapisim.js"></script>
<script type="text/javascript">
 
var audioctx = null;
if(typeof(AudioContext)!=="undefined")
    audioctx = new AudioContext();
else if(typeof(webkitAudioContext)!=="undefined")
    audioctx = new webkitAudioContext();
 
var play=0;
var osc = audioctx.createOscillator();
var gain = audioctx.createGain();
osc.connect(gain);
gain.connect(audioctx.destination);
 
function Setup() {
    if(play == 0) {
        osc.start(0);
        play = 1;
    }
    var type = document.getElementById("type").selectedIndex;
    var freq = parseFloat(document.getElementById("freq").value);
    var level = parseFloat(document.getElementById("level").value);
 
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = level;
}
 
</script>
</body>
</html>
