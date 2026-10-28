(function(){
const S=(vb,b,l)=>`<svg class="sm" viewBox="${vb}" width="100%" role="img" aria-label="${l}">${b}</svg>`;
const T=(x,y,t,a)=>`<text x="${x}" y="${y}"${a?` text-anchor="${a}"`:''}>${t}</text>`;
const F={
evap:S('0 0 390 125',`<g transform="translate(5,0)"><path class="f c" d="M8 20H100Q112 20 112 33T100 46H20Q8 46 8 59T20 72H100"/>${T(60,100,'Bare tube','middle')}</g><g transform="translate(135,0)"><rect class="f w" x="5" y="12" width="110" height="68" rx="4"/><path class="f c" d="M15 25H105M15 25V45H105V65H15"/>${T(60,100,'Plate surface','middle')}</g><g transform="translate(265,0)"><path class="f" d="M20 12V82M40 12V82M60 12V82M80 12V82M100 12V82"/><path class="f c" d="M8 32H112M8 62H112"/>${T(60,100,'Finned','middle')}</g>`,'Evaporator types'),
cond:S('0 0 390 142',`<rect class="f w" x="8" y="20" width="60" height="64"/><path class="f" d="M22 20V84M36 20V84M50 20V84"/><circle class="f w" cx="100" cy="52" r="15"/><path class="f" d="M100 37V67M85 52H115"/>${T(60,126,'Air-cooled','middle')}<rect class="f w" x="150" y="32" width="100" height="40" rx="10"/><path class="f c" d="M160 42H240M160 52H240M160 62H240"/><path class="f c" d="M170 32V15M230 72V90"/>${T(200,10,'water in','middle')}${T(224,100,'water out','end')}${T(200,126,'Water-cooled','middle')}<rect class="f w" x="285" y="18" width="95" height="70"/><path class="f h" d="M298 60H368M298 72H368"/><path class="f c" stroke-dasharray="3 4" d="M305 24V52M325 24V52M345 24V52M365 24V52"/>${T(332,126,'Evaporative','middle')}`,'Condenser types'),
flow:S('0 0 390 130',`<path class="f" d="M8 40Q18 12 28 40T48 40T68 40T88 40T108 40"/>${T(58,76,'Capillary tube','middle')}${T(58,92,'fixed bore and length','middle')}<path class="f" d="M140 70H162M200 70H222"/><rect class="f w" x="162" y="52" width="38" height="36" rx="5"/><path class="f c" d="M140 108H260"/><circle class="f w" cx="238" cy="108" r="6"/><path class="f" d="M181 88Q181 118 232 110"/>${T(181,76,'TEV','middle')}${T(190,126,'bulb on suction line','middle')}<rect class="f w" x="300" y="52" width="40" height="36" rx="5"/><path class="f" d="M280 70H300M340 70H362M320 52V30M308 30H332"/><path class="f" d="M312 38l8 -4l-8 -4l8 -4"/>${T(320,106,'AEV','middle')}${T(320,122,'constant pressure','middle')}`,'Flow controls'),
tower:S('0 0 270 200',`<path class="f w" d="M65 178L85 62H185L205 178Z"/><path class="f c" stroke-dasharray="3 4" d="M100 78V160M135 78V160M170 78V160"/><ellipse class="f w" cx="135" cy="50" rx="38" ry="9"/><path class="f" d="M105 50H165"/><path class="f h" d="M5 30H60V78H100"/>${T(8,22,'Hot water in')}<path class="f c" d="M135 178V196"/>${T(145,194,'Cool water out')}<path class="f" d="M215 120H190M215 150H195M135 12V38"/>${T(205,115,'Air in')}${T(145,12,'Warm moist air out')}`,'Cooling tower'),
ph:S('0 0 470 295',`<path class="f" d="M30 20V225H450"/><path class="f" d="M70 210Q90 60 200 45Q290 70 340 200"/><path class="f c" d="M112 178H330"/><path class="f" d="M330 178L372 94"/><path class="f h" d="M372 94H112"/><path class="f" d="M112 94V178"/><circle cx="330" cy="178" r="3" class="t"/><circle cx="372" cy="94" r="3" class="t"/><circle cx="112" cy="94" r="3" class="t"/><circle cx="112" cy="178" r="3" class="t"/>${T(314,196,'1')}${T(378,90,'2')}${T(96,88,'3')}${T(96,194,'4')}${T(150,168,'Evaporation (4–1)')}${T(130,88,'Condensation (2–3)')}${T(368,150,'Compression')}${T(118,138,'Expansion')}<path class="f" d="M112 242H330M112 238V246M330 238V246M330 268H372M330 264V272M372 264V272"/>${T(221,260,'Refrigeration effect h1 − h4','middle')}${T(351,286,'Compression heat h2 − h1','middle')}${T(4,12,'Pressure')}${T(380,216,'Enthalpy →')}${T(180,38,'Critical point')}`,'Pressure-enthalpy (Mollier) chart with the cycle'),
psy:S('0 0 425 245',`<path class="f" d="M40 20V205H355"/><path class="f" d="M40 195Q220 185 350 45"/><path class="f" stroke-dasharray="4 4" d="M40 198Q220 196 350 112"/><circle class="t" cx="260" cy="150" r="3.5"/><path class="f c" d="M260 150V205"/><path class="f h" d="M260 150H207"/><path class="f" d="M260 150L232 140"/>${T(255,222,'Dry-bulb','middle')}${T(48,40,'Humidity ratio')}${T(140,140,'Dew point')}${T(170,118,'Wet-bulb')}${T(272,182,'State point')}${T(356,48,'100% RH')}${T(356,116,'50% RH')}${T(40,236,'Sketch, not to scale',)}`,'Psychrometric chart sketch')
};
const N={evap:'Evaporator types',cond:'Condenser types',flow:'Flow controls',tower:'Cooling tower',ph:'Mollier chart and the cycle',psy:'Psychrometric chart'};
const K={evap:'Sketch the three evaporator styles and label each.',cond:'Draw the three condenser types and mark water or air flow.',flow:'Draw the capillary tube, TEV with bulb, and AEV.',tower:'Draw the tower, label water and air flows and the fan.',ph:'Draw the dome and the four points 1–4, then mark refrigeration effect and compression heat.',psy:'Sketch the chart, plot a state point, and show dry-bulb, wet-bulb and dew point.'};
Object.assign(Z.figs,F);Object.assign(Z.names,N);Object.assign(Z.tasks,K);
const Q=(a,o,i,w)=>[a,o,i,w],m=id=>Z.mods.find(x=>x.id==id);
m('c1b').f.push('evap','cond','flow','tower');m('c1e').f.push('ph','psy');
m('c1a').q.push(
Q('Acetylene hose is usually…',['red','white','yellow','pink'],0,'Red marks the fuel gas hose.'),
Q('When shutting down a torch, close first the…',['oxygen valve','acetylene valve','regulator spring','check valve'],1,'Closing fuel first stops the flame feeding.'),
Q('An oxidizing flame has excess…',['acetylene','oxygen','nitrogen','air only'],1,'It is short, pointed and hissing.'),
Q('A burn is cooled with…',['ice','oil','running water','toothpaste'],2,'Cool under running water for 10 minutes or more.'),
Q('The tool that removes the inside burr is a…',['reamer','file only','hammer','swage'],0,'Ream with the tube end facing down.'),
Q('A swaging tool…',['cuts tube','expands a tube end to take another tube','measures pressure','bends tube'],1,'It makes a socket for a joint.'),
Q('A fin comb is used to…',['straighten coil fins','cut tube','weld','test leaks'],0,'It combs bent fins back into line.'),
Q('Frostbite from refrigerant is treated with…',['hot water','lukewarm water and medical help','rubbing','snow'],1,'Warm gently; never rub.'));
m('c1b').q.push(
Q('A compressor sealed in a welded dome is…',['open type','hermetic','semi-hermetic','belt-driven'],1,'The dome cannot be opened for service.'),
Q('A semi-hermetic compressor has…',['a welded shell','a bolted serviceable housing','no motor','no oil'],1,'Its head and covers can be removed.'),
Q('An AEV keeps constant…',['evaporator pressure','superheat','head pressure','flow only'],0,'It reacts to evaporator pressure.'),
Q('A TEV controls…',['superheat','room humidity','oil level','voltage'],0,'The bulb senses suction line temperature.'),
Q('A muffler reduces…',['discharge gas noise','suction pressure','oil','moisture'],0,'It smooths pulsations in the discharge line.'),
Q('Bubbles in a sight glass often mean…',['low charge or flash gas','perfect charge','too much oil','dry air'],0,'Vapor is mixing with the liquid.'),
Q('A cooling tower cools…',['condenser water','the oil','the room air only','the compressor shell'],0,'Water gives up heat to air by evaporation.'),
Q('Fins on an evaporator…',['increase surface area','add oil','cut noise','store liquid'],0,'More surface moves more heat.'),
Q('A receiver…',['stores liquid refrigerant','dries air','measures flow','heats the line'],0,'It holds a reserve of liquid.'));
m('c1c').q.push(
Q('A hydrocarbon refrigerant is…',['R600a','R134a','R22','R410A'],0,'R600a is isobutane.'),
Q('An azeotropic mixture behaves like…',['a single fluid','two layers','a solid','water'],0,'It boils at one temperature.'),
Q('Moisture held on the surface of a drier is…',['adsorption','absorption','evaporation','dilution'],0,'Adsorption is a surface effect.'),
Q('Compressor oil should be stored in…',['a clean, dry, sealed container','an open tin','a bucket','a plastic bag'],0,'Oil absorbs moisture quickly.'),
Q('Litmus paper is used to detect…',['ammonia leaks','R134a leaks','oil','voltage'],0,'Ammonia changes its colour.'),
Q('Evacuation removes…',['air and moisture','all refrigerant oil','dust only','heat'],0,'It leaves a clean, dry system.'),
Q('Venting refrigerant to air is…',['prohibited','recommended','harmless','free'],0,'It harms the environment and breaks regulations.'),
Q('R22 boils at about…',['−41°C','+41°C','0°C','100°C'],0,'At atmospheric pressure.'));
m('c1d').q.push(
Q('A 10 Ω and a 20 Ω resistor in series give…',['30 Ω','6.7 Ω','200 Ω','10 Ω'],0,'Series: add.'),
Q('The unit of current is the…',['ampere','volt','ohm','watt'],0,'Amperes measure current.'),
Q('Direct current flows…',['one way only','back and forth','in circles','not at all'],0,'AC reverses; DC does not.'),
Q('A capacitor stores…',['electric charge','heat','oil','gas'],0,'Measured in farads.'),
Q('Two 10 µF capacitors in series give…',['5 µF','20 µF','100 µF','10 µF'],0,'Series: reciprocals add.'),
Q('A good conductor is…',['copper','rubber','glass','wood'],0,'Copper carries current easily.'),
Q('An insulator is…',['rubber','copper','silver','brass'],0,'Insulators block current.'),
Q('A fuse protects by…',['melting on excess current','storing charge','cooling','measuring'],0,'The element melts and opens the circuit.'));
m('c1e').q.push(
Q('Specific heat is measured in…',['kJ/kg·K','kW','kPa','m³'],0,'Energy per kilogram per kelvin.'),
Q('25°C in Fahrenheit is…',['77°F','45°F','57°F','98°F'],0,'(9/5 × 25) + 32 = 77.'),
Q('Melting 2 kg of ice (L = 334 kJ/kg) needs…',['668 kJ','167 kJ','334 kJ','2 kJ'],0,'Q = m × L.'),
Q('Above its critical temperature a gas…',['cannot be liquefied by pressure alone','freezes','explodes','turns to oil'],0,'No pressure alone will liquefy it.'),
Q('Charles’s law needs temperature in…',['kelvin','Fahrenheit','Celsius','any scale'],0,'Use absolute temperature.'),
Q('Dalton’s law concerns…',['partial pressures','heat','electric power','flow'],0,'Total pressure is the sum of partial pressures.'),
Q('Dew point on a psychrometric chart: from the state point move…',['horizontally to the saturation curve','vertically up','diagonally down','nowhere'],0,'Constant moisture content.'),
Q('Frozen food is usually stored at about…',['−18°C','+10°C','+5°C','0°C only'],0,'Freezing storage temperature.'));
})();
