const $=s=>document.querySelector(s),app=$('#app');
let P={};try{P=JSON.parse(localStorage.getItem('cta')||'{}')}catch(e){}
const save=()=>{try{localStorage.setItem('cta',JSON.stringify(P))}catch(e){}};
const M=[
{id:'heat',t:'1. Heat, pressure and units',s:'The physics every technician needs',
n:`<h3>Heat vs temperature</h3><p><b>Heat</b> is energy. <b>Temperature</b> tells how hot something is. A bathtub of warm water holds far more heat than a cup of boiling water, even though the cup is hotter.</p>
<h3>How heat moves</h3><ul><li><b>Conduction</b>: through solids, such as heat travelling along a copper pipe.</li><li><b>Convection</b>: through moving fluid, such as a fan pushing air across a coil.</li><li><b>Radiation</b>: through space, such as the sun heating a room through a window.</li></ul>
<p class="note">Heat only flows from hot to cold by itself. A refrigeration system uses energy (the compressor) to push heat the other way.</p>
<h3>Sensible and latent heat</h3><p><b>Sensible heat</b> changes temperature. <b>Latent heat</b> changes state (liquid to vapor) with no temperature change, and it is huge: warming 1 kg of water by 1°C takes about 4.2 kJ, but boiling that kg takes about 2,260 kJ. Refrigerants work by boiling and condensing, so they move a lot of heat with a small amount of fluid. An AC also removes latent heat when it condenses moisture from room air (dehumidifying).</p>
<h3>Pressure and boiling point</h3><p>Gauges show <b>gauge pressure</b> (psig or bar), which is zero at normal air pressure. <b>Absolute pressure</b> = gauge + 14.7 psi (about 1 bar). Higher pressure raises the boiling point; lower pressure lowers it. This is the whole trick of the cycle.</p>
<h3>Capacity units: what BTU means</h3><p>A <b>BTU</b> (British Thermal Unit) is a small amount of heat: the heat needed to warm <b>1 lb of water by 1°F</b>. In SI units, 1 BTU ≈ 1.055 kJ. Cooling capacity is a <b>rate</b> (heat moved per hour), so it is written <b>BTU/h</b>. In kilowatts, 1 kW = 1 kJ every second.</p>
<h3>Where 3,412 comes from</h3><ol><li>1 kW = 1 kJ/s. In one hour (3,600 s) that is 3,600 kJ.</li><li>1 BTU = 1.055 kJ.</li><li>3,600 ÷ 1.055 ≈ <b>3,412 BTU/h</b>.</li></ol>
<h3>Where 1 ton of refrigeration comes from</h3><p>It was defined as the heat needed to melt <b>1 ton (2,000 lb) of ice in 24 hours</b>. Melting 1 lb of ice takes 144 BTU, so: 2,000 × 144 = 288,000 BTU, and 288,000 ÷ 24 h = <b>12,000 BTU/h</b>. Then 12,000 ÷ 3,412 ≈ <b>3.5 kW</b>.</p>
<h3>Converting: step by step</h3><ul><li><b>kW to BTU/h</b>: multiply by 3,412. Example: 2.5 kW × 3,412 = <b>8,530 BTU/h</b>.</li><li><b>BTU/h to kW</b>: divide by 3,412. Example: 18,000 ÷ 3,412 = <b>5.3 kW</b>.</li><li><b>BTU/h to tons</b>: divide by 12,000. Example: 24,000 ÷ 12,000 = <b>2 TR</b>.</li></ul>
<h3>Worked example 1: heat in water</h3><p>How much heat must be removed to cool 100 kg of water from 30°C to 20°C? Use <b>Q = m × c × ΔT</b>, with c = 4.18 kJ/kg·K for water. Q = 100 × 4.18 × 10 = 4,180 kJ. In BTU: 4,180 ÷ 1.055 ≈ <b>3,960 BTU</b>.</p>
<h3>Worked example 2: heat removed from air</h3><p>A fan moves 0.5 m³/s of air and the coil cools it by 10 K. Air has a density of about 1.2 kg/m³ and c ≈ 1.0 kJ/kg·K, so Q ≈ 1.2 × 0.5 × 1.0 × 10 = <b>6 kW</b>. In BTU/h: 6 × 3,412 ≈ 20,500 BTU/h, which is about <b>1.7 TR</b>.</p>
<h3>Worked example 3: choosing an AC for a room</h3><p>Room 5 m × 4 m = 20 m². Using about 550 BTU/h per m²: 20 × 550 = <b>11,000 BTU/h</b>. Pick the next standard size up, <b>12,000 BTU/h (1.5 HP split)</b>. In kW that is 12,000 ÷ 3,412 ≈ 3.5 kW of cooling.</p>
<h3>Typical split AC sizes</h3><ul><li>1 HP ≈ 9,000 BTU/h, 1.5 HP ≈ 12,000, 2 HP ≈ 18,000 (approximate; check the nameplate).</li><li>This HP is a size label used by sellers, not the compressor motor's mechanical horsepower.</li></ul>`,
q:[['Heat naturally flows from…',['cold to hot','hot to cold','high pressure to low only','low pressure to high'],1,'Heat always moves from the warmer body to the cooler one unless work is done.'],
['Latent heat causes a change in…',['temperature','colour','state, at constant temperature','voltage'],2,'Latent heat is absorbed or released while the substance changes state.'],
['A 2.5 kW cooling load is about…',['733 BTU/h','8,530 BTU/h','30,000 BTU/h','2,500 BTU/h'],1,'2.5 × 3,412 ≈ 8,530 BTU/h.'],
['A 24,000 BTU/h air conditioner is…',['1 TR','2 TR','3 TR','24 TR'],1,'24,000 ÷ 12,000 = 2 tons of refrigeration.'],
['A 15 m² room at 550 BTU/h per m² needs about…',['3,700 BTU/h','8,250 BTU/h','15,000 BTU/h','550 BTU/h'],1,'15 × 550 = 8,250 BTU/h, so choose the next standard size up (9,000).'],
['1 ton of refrigeration equals…',['1,200 BTU/h','12,000 BTU/h','120,000 BTU/h','3,412 BTU/h'],1,'1 TR = 12,000 BTU/h ≈ 3.5 kW.'],
['A fan blowing air over a coil is an example of…',['conduction','radiation','convection','evaporation'],2,'Heat carried by moving fluid is convection.'],
['A gauge reads 0 psig. The absolute pressure is about…',['0 psi','14.7 psi','100 psi','−14.7 psi'],1,'Absolute = gauge + atmospheric (≈14.7 psi).']]},
{id:'cycle',t:'2. The refrigeration cycle',s:'Four components, one loop',x:'cycle',
n:`<h3>The idea</h3><p>Refrigerant circulates in a sealed loop. Inside, at low pressure, it boils and absorbs heat. Outside, at high pressure, it condenses and releases heat. Tap each component in the diagram below.</p>
<h3>State at each point</h3><ul><li><b>Compressor inlet (suction)</b>: cool, low-pressure vapor.</li><li><b>Compressor outlet (discharge)</b>: hot, high-pressure vapor.</li><li><b>Condenser outlet</b>: warm, high-pressure liquid.</li><li><b>After the expansion device</b>: cold, low-pressure liquid and vapor mix.</li><li><b>Evaporator outlet</b>: low-pressure vapor, slightly superheated.</li></ul>
<h3>High side and low side</h3><p>The <b>high side</b> runs from the compressor outlet to the expansion device. The <b>low side</b> runs from the expansion device back to the compressor. Red on the diagram is high side, blue is low side.</p>
<h3>Other parts you will meet</h3><ul><li><b>Capillary tube</b> (fixed, small fridges and cheap ACs) or <b>thermostatic expansion valve (TXV)</b> (adjusts flow to load).</li><li><b>Filter drier</b>: traps moisture and dirt.</li><li><b>Accumulator</b>: stops liquid reaching the compressor.</li><li><b>Reversing valve</b>: swaps the roles of the two coils, making a heat pump that heats as well as cools.</li><li><b>Fans</b>: move air across both coils.</li></ul>`,
q:[['Which component raises the refrigerant pressure?',['Evaporator','Condenser','Compressor','Capillary tube'],2,'The compressor squeezes the vapor to high pressure.'],
['Where does refrigerant absorb heat from the room?',['Condenser','Evaporator','Compressor','Filter drier'],1,'The indoor coil is the evaporator.'],
['The expansion device…',['raises pressure','drops pressure and temperature','stores liquid','cleans refrigerant'],1,'Pressure drops suddenly, so the refrigerant turns cold.'],
['The condenser outlet is normally…',['low-pressure vapor','high-pressure liquid','low-pressure liquid','hot vapor'],1,'Heat is rejected and the vapor turns into liquid at high pressure.'],
['A reversing valve makes a unit able to…',['clean air','heat as well as cool','run without a compressor','store water'],1,'It swaps the coils\' roles: a heat pump.']]},
{id:'ref',t:'3. Refrigerants, superheat and subcooling',s:'Reading the system like a technician',x:'calc',
n:`<h3>Common refrigerants</h3><ul><li><b>R134a</b>: fridges, car AC.</li><li><b>R600a</b>: modern domestic fridges. <b>Flammable</b>, tiny charges.</li><li><b>R22</b>: older ACs, being phased out.</li><li><b>R410A</b>: newer ACs, runs at much higher pressure than R22, so use rated gauges and hoses.</li><li><b>R32</b>: newer ACs, mildly flammable.</li><li><b>R404A</b>: commercial refrigeration.</li></ul><p>Always read the nameplate. Never mix refrigerants.</p>
<h3>PT chart</h3><p>Each refrigerant has a fixed link between pressure and boiling (saturation) temperature. Read your gauge pressure, then look up the temperature on the PT chart for that refrigerant.</p>
<h3>Superheat</h3><p><b>Superheat = suction line temperature − evaporating saturation temperature.</b> It shows the vapor is dry before reaching the compressor. Typical target 5 to 12 K; follow the manufacturer.</p>
<h3>Subcooling</h3><p><b>Subcooling = condensing saturation temperature − liquid line temperature.</b> It shows the liquid is fully condensed. Typical target 5 to 10 K.</p>
<h3>Handling rules</h3><ul><li>Never vent refrigerant; recover it into a cylinder.</li><li>Wear gloves and eye protection: liquid refrigerant causes frostbite.</li><li>Do not overfill recovery cylinders.</li></ul>`,
q:[['Superheat is…',['liquid line temp − condensing temp','suction line temp − evaporating saturation temp','room temp − outdoor temp','discharge temp − suction temp'],1,'It is how far the vapor is above its boiling point.'],
['Which of these is flammable?',['R134a','R600a','R410A','R22'],1,'R600a is isobutane. Extra care with sparks.'],
['You should never…',['recover refrigerant','vent refrigerant to air','use a PT chart','wear gloves'],1,'Venting is harmful and illegal in most places.'],
['Subcooling is measured on the…',['suction line','discharge line','liquid line','drain hose'],2,'It compares the liquid line to the condensing saturation temperature.'],
['Raising the pressure of a refrigerant…',['lowers boiling point','raises boiling point','does nothing','makes it flammable'],1,'Boiling point rises with pressure.']]},
{id:'elec',t:'4. Electrical for AC and refrigeration',s:'Components, meters and safety',
n:`<h3>Basics</h3><p><b>Ohm's law: V = I × R</b> (volts = amps × ohms). <b>Power (W) = V × I</b> (times power factor for motors). Domestic units usually run on single-phase 220 to 240 V.</p>
<h3>Key components</h3><ul><li><b>Capacitor</b>: stores charge to help motors start and run. Rated in microfarads (µF) and volts.</li><li><b>Contactor</b>: a relay that switches the compressor using a small control coil.</li><li><b>Overload protector</b>: opens if the motor overheats or draws too much current.</li><li><b>Thermostat</b>: senses temperature and tells the system when to run.</li><li><b>Start relay / PTC</b>: used on fridge compressors.</li></ul>
<h3>Compressor windings</h3><p>A single-phase compressor has three terminals: <b>C (common)</b>, <b>S (start)</b>, <b>R (run)</b>. Resistance S to R equals C–S plus C–R, so it is always the highest of the three readings. Zero ohms means a shorted winding; infinite means open.</p>
<h3>Meters</h3><p>Multimeter for voltage, resistance and continuity (power off for resistance). Clamp meter for running current.</p>
<h3>Safety</h3><ul><li>Isolate power and lock out before opening panels.</li><li>Capacitors can hold a shock after power is off: discharge through a resistor, never by shorting with a screwdriver.</li><li>Test that a circuit is dead before touching it.</li></ul>`,
q:[['Ohm\'s law is…',['V = I × R','V = I / R','I = V × R','R = V × I'],0,'Voltage equals current times resistance.'],
['On a compressor, the highest resistance is between…',['C and S','C and R','S and R','all equal'],2,'S–R = C–S + C–R.'],
['Before handling a capacitor you should…',['touch both terminals','discharge it safely','heat it','ignore it'],1,'Stored charge can shock you even with power off.'],
['Capacitors are rated in…',['ohms','microfarads (µF)','watts','BTU'],1,'Capacitance is measured in farads; µF is typical.'],
['A contactor…',['stores charge','switches a heavy load using a small coil','measures temperature','filters air'],1,'It is a relay for high-current loads such as the compressor.']]},
{id:'inst',t:'5. Installation and practical skills',s:'From wall bracket to charged system',
n:`<h3>Sizing (rough)</h3><p>A quick estimate is 500 to 600 BTU/h per m² of floor for a typical room, more for sun-facing rooms, kitchens or many occupants. A proper load calculation is better.</p>
<h3>Placing the units</h3><ul><li>Indoor unit high on the wall, with free airflow, away from heat sources, with a clear route for piping and drain.</li><li>Outdoor unit on a level base with space around it; never block the air outlet.</li><li>Drain hose must <b>slope downward</b> all the way.</li></ul>
<h3>Piping steps</h3><ol><li>Cut copper <b>square</b> with a tube cutter.</li><li><b>Ream</b> the burr, tube facing down so no chips fall in.</li><li><b>Flare</b> (nut on first!) and tighten to the correct torque.</li><li>Insulate suction and liquid lines separately.</li><li><b>Pressure test</b> with dry nitrogen and watch the gauge for leaks.</li><li><b>Vacuum</b> with a vacuum pump to below 500 microns and confirm it holds. This removes air and moisture.</li><li>Open the service valves and check for leaks.</li><li>Charge by weight, adding for extra pipe length beyond the standard.</li></ol>
<h3>Brazing</h3><p>Flow nitrogen through the pipe while brazing to stop black oxide scale forming inside.</p>
<h3>Toolkit</h3><p>Manifold gauges, vacuum pump, tube cutter, reamer, flaring tool, torque wrench, nitrogen regulator, leak detector, refrigerant scale, clamp meter.</p>`,
q:[['The purpose of the vacuum step is to…',['add refrigerant','remove air and moisture','cool the pipe','test the fan'],1,'Air and moisture damage the system and oil.'],
['Why flow nitrogen when brazing?',['to cool the torch','to prevent oxide scale inside the pipe','to add pressure only','to clean the flux'],1,'Scale can block the metering device.'],
['A leak test is normally done with…',['oxygen','dry nitrogen','tap water','compressed air from a shop line'],1,'Dry nitrogen is inert and moisture-free. Never use oxygen.'],
['The drain hose should…',['slope upward','slope downward','be coiled','be blocked'],1,'Water must drain by gravity.'],
['Before flaring, you should cut the pipe…',['at an angle','square, then ream the burr','with a saw','and leave burrs'],1,'A square cut and clean edge give a good flare.']]},
{id:'fault',t:'6. Troubleshooting and maintenance',s:'Finding faults step by step',
n:`<h3>Method</h3><p>1) Ask the customer what happened. 2) Look and listen. 3) Check power and controls. 4) Check airflow. 5) Only then check the refrigerant circuit with gauges and temperatures. Most faults are simple.</p>
<h3>Common faults</h3><ul><li><b>Does not run</b>: no power, tripped breaker, wrong thermostat setting, failed capacitor or contactor.</li><li><b>Runs but weak cooling</b>: dirty filter or coils, low charge, failing compressor, indoor or outdoor fan problem.</li><li><b>Ice on evaporator</b>: poor airflow or low refrigerant.</li><li><b>High head pressure</b>: dirty condenser, outdoor fan failure, overcharge, or air in the system.</li><li><b>Low suction pressure</b>: low charge, restricted filter drier or metering device.</li><li><b>Water leaking indoors</b>: blocked drain or poorly sloped hose.</li><li><b>Noise</b>: loose panels, worn fan motor, compressor trouble.</li></ul>
<h3>Preventive maintenance</h3><ul><li>Wash filters about monthly in heavy use.</li><li>Clean coils at least yearly.</li><li>Clear the drain and check electrical connections.</li><li>Record readings for comparison next visit.</li></ul>`,
q:[['An AC does not cool at all. First check…',['compressor oil','power supply and thermostat setting','refrigerant weight','pipe length'],1,'Start with the simple checks.'],
['A frozen evaporator is often caused by…',['too much airflow','poor airflow or low charge','a clean filter','high voltage'],1,'Low airflow or low charge drops coil temperature below freezing.'],
['A dirty condenser usually causes…',['low head pressure','high head pressure','no pressure change','lower power use'],1,'Poor heat rejection raises condensing pressure.'],
['Water dripping from the indoor unit suggests…',['blocked or badly sloped drain','bad capacitor','too much charge','wrong plug'],0,'Condensate cannot drain.'],
['How often should filters be washed in heavy use?',['every 5 years','about monthly','never','only when broken'],1,'Clogged filters cut airflow and efficiency.']]}
];
if(window.Y)M.push(...Y.mods);
if(window.Z)M.push(...Z.mods);
if(window.X)M.forEach(m=>{const x=X[m.id];if(x){m.n+=x.n;m.q=m.q.concat(x.q)}});
if(window.EN)M.forEach(m=>{if(EN[m.id])m.n+=EN[m.id]});
if(window.QX){const nz=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim(),seen=new Set(M.flatMap(m=>m.q.map(q=>nz(q[0]))));M.forEach(m=>(QX[m.id]||[]).forEach(q=>{const k=nz(q[0]);if(!seen.has(k)){seen.add(k);m.q.push(q)}}))}
if(window.WK)M.forEach(m=>{if(WK.n[m.id])m.n+=WK.n[m.id];m.q.forEach(q=>{if(WK.q[q[0]])q[3]=WK.q[q[0]]});(m.w||[]).forEach(w=>{if(WK.w[w[0]])w[1]=WK.w[w[0]]})});
const M_FIGS={heat:['ph','psy'],cycle:['cycle','evap','cond','flow'],ref:['safety','manifold'],elec:['symbols','comp','fridgeckt','threeph'],inst:['splitinst','flames','splitwire'],fault:['manifold','fridgeckt'],tools:['flames','manifold'],dom:['fridgeckt','comp'],psy:['psy','tower'],intb:['manifold'],intc:['threeph','inv'],intd:['psy']};
M.forEach(m=>{if((!m.f||!m.f.length)&&M_FIGS[m.id])m.f=M_FIGS[m.id]});
const D=[['Compressor','Raises refrigerant pressure and temperature. Takes in cool low-pressure vapor and discharges hot high-pressure vapor. It is the pump of the system.','h'],
['Condenser','Outdoor coil. Hot vapor gives up heat to outside air and condenses into high-pressure liquid.','h'],
['Expansion device','Capillary tube or TXV. A restriction that drops pressure, so the refrigerant becomes cold.','c'],
['Evaporator','Indoor coil. Cold refrigerant boils and absorbs heat from the room air, which then feels cool.','c']];
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]};return a};
// best: module-level so home(), dash(), and quiz() all have access
const best=k=>P[k]??null;
// Category labels for grouping modules on home screen
const CAT=[{label:'Foundations',ids:['heat','cycle','ref']},{label:'Skills',ids:['elec','inst','fault']},{label:'Certificate One',ids:['c1a','c1b','c1c','c1d','c1e','c1f','c1g']},{label:'Certificate Two',ids:['c2a','c2b','c2c','c2d']},{label:'International & Advanced',ids:['inta','intb','intc','intd','advcold','advvrf','advhp','advinv']}];
function home(){
const done=M.filter(m=>(P[m.id]||0)>=70).length;
const catHTML=()=>{
const allIds=CAT.flatMap(c=>c.ids);const uncatIds=M.filter(m=>!allIds.includes(m.id)).map(m=>m.id);
const groups=uncatIds.length?[...CAT,{label:'Other',ids:uncatIds}]:CAT;
return groups.map(g=>{const mods=g.ids.map(id=>M.find(m=>m.id===id)).filter(Boolean);if(!mods.length)return '';return `<h3 style="color:var(--mut);font-size:.8rem;text-transform:uppercase;letter-spacing:.06em;margin:18px 0 4px">${g.label}</h3>`+mods.map(m=>`<a class="card mc" data-s="${(m.t+' '+m.s).toLowerCase()}" href="#/m/${m.id}"><div class="row"><div><b>${m.t}</b><br><span style="color:var(--mut)">${m.s}</span></div><span class="pill ${(best(m.id)||0)>=70?'ok':''}">${best(m.id)==null?'Not taken':best(m.id)+'%'}</span></div></a>`).join('')}).join('')};
app.innerHTML=`<h1>Modules</h1><p>Read each module's notes, try the practical, then take the module test. Compare each topic with your official NVTI syllabus and past questions, and add any gap you find.</p>
<div class="bar"><i style="width:${done/M.length*100}%"></i></div><p style="color:var(--mut)">${done} of ${M.length} modules passed (70% to pass)</p>`+
`<input type="search" id="srch" placeholder="Search modules…" aria-label="Search modules" style="width:100%;font:inherit;padding:10px;margin:8px 0;border:1px solid var(--line);border-radius:8px;background:var(--card);color:var(--ink)">`+
catHTML()+
`<h3 style="color:var(--mut);font-size:.8rem;text-transform:uppercase;letter-spacing:.06em;margin:18px 0 4px">Practicals & Exams</h3><a class="card" href="#/draw"><div class="row"><div><b>Drawing lab</b><br><span style="color:var(--mut)">Trade drawing: labelled diagrams and sketch tasks</span></div></div></a><a class="card" href="#/jobs"><div class="row"><div><b>Practical job sheets</b><br><span style="color:var(--mut)">Step-by-step workshop jobs with checklists</span></div><span class="pill">${jobPct()}%</span></div></a><a class="card" href="#/exam/adv"><div class="row"><div><b>Advanced systems practice exam</b><br><span style="color:var(--mut)">Cold rooms, VRF, heat pumps and inverters</span></div><span class="pill ${(best('examadv')||0)>=70?'ok':''}">${best('examadv')==null?'Not taken':best('examadv')+'%'}</span></div></a><a class="card" href="#/exam/int"><div class="row"><div><b>International standards practice exam</b><br><span style="color:var(--mut)">25 questions on regulation, safety, charging and controls</span></div><span class="pill ${(best('examint')||0)>=70?'ok':''}">${best('examint')==null?'Not taken':best('examint')+'%'}</span></div></a><a class="card" href="#/exam/c2"><div class="row"><div><b>NVTI Certificate Two mock exam</b><br><span style="color:var(--mut)">25 questions from the Certificate Two modules</span></div><span class="pill ${(best('examc2')||0)>=70?'ok':''}">${best('examc2')==null?'Not taken':best('examc2')+'%'}</span></div></a><a class="card" href="#/exam/c1"><div class="row"><div><b>NVTI Certificate One mock exam</b><br><span style="color:var(--mut)">25 questions from the Certificate One modules</span></div><span class="pill ${(best('examc1')||0)>=70?'ok':''}">${best('examc1')==null?'Not taken':best('examc1')+'%'}</span></div></a><a class="card" href="#/exam"><div class="row"><div><b>Final exam</b><br><span style="color:var(--mut)">25 random questions from all modules</span></div><span class="pill ${(best('exam')||0)>=70?'ok':''}">${best('exam')==null?'Not taken':best('exam')+'%'}</span></div></a><h3 style="color:var(--mut);font-size:.8rem;text-transform:uppercase;letter-spacing:.06em;margin:18px 0 4px">Progress</h3><div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center"><button id="exp">⬇ Export progress</button><label style="cursor:pointer;display:inline-block;background:var(--line);color:var(--ink);padding:10px 18px;border-radius:8px;font:inherit">⬆ Import progress<input type="file" id="imp" accept=".json" style="display:none"></label></div><p style="text-align:center;margin-top:14px"><button id="rst" style="background:none;color:var(--mut);text-decoration:underline;padding:4px">Reset all progress</button></p>`;
$('#srch').oninput=e=>{const v=e.target.value.toLowerCase().trim();document.querySelectorAll('.mc').forEach(c=>c.style.display=c.dataset.s.includes(v)?'':'none')};
$('#rst').onclick=()=>{if(confirm('Erase all scores, ticks and mistakes on this device?')){P={};save();home()}};
// Export progress
$('#exp').onclick=()=>{const blob=new Blob([JSON.stringify(P,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='cta-progress-'+new Date().toISOString().slice(0,10)+'.json';a.click()};
// Import progress
$('#imp').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=ev=>{try{const d=JSON.parse(ev.target.result);if(typeof d!=='object'||Array.isArray(d))throw new Error('Invalid');P=d;save();home();alert('Progress imported successfully!')}catch(er){alert('Could not read file: '+er.message)}};r.readAsText(f)}}
function diagram(){const pos=[[220,20],[20,20],[20,150],[220,150]];
return `<h3>Practical: the cycle diagram</h3><svg viewBox="0 0 360 230" width="100%" role="img" aria-label="Refrigeration cycle diagram">
<g fill="none" stroke-width="4"><path stroke="var(--hot)" d="M220 45H140" marker-end="url(#h)"/><path stroke="var(--hot)" d="M80 70V150" marker-end="url(#h)"/><path stroke="var(--cold)" d="M140 175H220" marker-end="url(#c)"/><path stroke="var(--cold)" d="M280 150V70" marker-end="url(#c)"/></g>
<defs><marker id="h" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="var(--hot)"/></marker><marker id="c" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="var(--cold)"/></marker></defs>
${D.map((d,i)=>`<g class="node" tabindex="0" role="button" data-i="${i}"><rect x="${pos[i][0]}" y="${pos[i][1]}" width="120" height="50" rx="8" stroke="var(--${d[2]=='h'?'hot':'cold'})"/><text x="${pos[i][0]+60}" y="${pos[i][1]+30}" text-anchor="middle">${d[0]}</text></g>`).join('')}
<text x="180" y="120" text-anchor="middle" style="fill:var(--mut);font-weight:400">Red = high side, blue = low side</text></svg><div class="card" id="info">Tap a component to learn what it does.</div>`}
function calc(){return `<h3>Practical: superheat and subcooling calculator</h3><div class="card"><p>Enter the saturation temperature from your PT chart and the measured line temperature (°C).</p>
<p>Evaporating sat. <input type="number" id="a"> Suction line <input type="number" id="b"> → <b id="sh">–</b></p>
<p>Condensing sat. <input type="number" id="c"> Liquid line <input type="number" id="d"> → <b id="sc">–</b></p>
<p id="hint" style="color:var(--mut)"></p></div>`}
function wire(x){if(x=='cycle')document.querySelectorAll('.node').forEach(n=>{const f=()=>{const d=D[n.dataset.i];$('#info').innerHTML=`<b>${d[0]}</b><br>${d[1]}`};n.onclick=f;n.onkeydown=e=>{if(e.key=='Enter'||e.key==' ')f()}});
if(x=='calc')document.querySelectorAll('.card input').forEach(i=>i.oninput=()=>{const v=k=>parseFloat($('#'+k).value),a=v('a'),b=v('b'),c=v('c'),d=v('d');
const sh=b-a,sc=c-d;$('#sh').textContent=isNaN(sh)?'–':'Superheat '+sh.toFixed(1)+' K';$('#sc').textContent=isNaN(sc)?'–':'Subcooling '+sc.toFixed(1)+' K';
$('#hint').textContent=(!isNaN(sh)&&sh<3?'Very low superheat: liquid may reach the compressor (overcharge or poor airflow). ':'')+(!isNaN(sh)&&sh>15?'High superheat: possible undercharge or restriction. ':'')+(!isNaN(sc)&&sc<3?'Low subcooling: possible undercharge. ':'')+(!isNaN(sc)&&sc>12?'High subcooling: possible overcharge. ':'')})}
const today=()=>new Date().toISOString().slice(0,10);
function touch(){const t=today(),s=P.st||{n:0,d:''};if(s.d!=t){s.n=s.d==new Date(Date.now()-864e5).toISOString().slice(0,10)?s.n+1:1;s.d=t;P.st=s}}
const label=k=>{const m=M.find(x=>x.id==k);return m?m.t:({exam:'Final exam',examc1:'Cert One mock',examc2:'Cert Two mock',examint:'International exam',examadv:'Advanced exam',review:'Mistake review'})[k]||k};
const missN=()=>Object.keys(P.miss||{}).length;
function quiz(el,qs,key){const orig=qs;qs=qs.map(q=>{const o=shuffle(q[1].map((t,i)=>[t,i==q[2]]));return [q[0],o.map(x=>x[0]),o.findIndex(x=>x[1]),q[3]]});el.innerHTML=qs.map((q,i)=>`<div class="q"><b>${i+1}. ${q[0]}</b>${q[1].map((o,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join('')}<div class="why" id="w${i}"></div></div>`).join('')+`<button id="chk">Submit answers</button><p id="res"></p>`;
$('#chk').onclick=()=>{const left=qs.filter((q,i)=>!document.querySelector(`input[name=q${i}]:checked`)).length;
if(left&&!(window.T&&$('#tm b').textContent.endsWith('0:00'))&&!confirm(left+' question(s) unanswered. Submit anyway?'))return;
P.miss=P.miss||{};let s=0;qs.forEach((q,i)=>{const sel=document.querySelector(`input[name=q${i}]:checked`),L=document.querySelectorAll(`input[name=q${i}]`);
L.forEach((r,j)=>{r.disabled=true;const lb=r.parentElement;if(j==q[2])lb.classList.add('good');else if(sel&&+sel.value==j)lb.classList.add('bad')});
const o=orig.find(x=>x[0]==q[0]);
if(sel&&+sel.value==q[2]){s++;delete P.miss[q[0]]}else if(o)P.miss[q[0]]=o;$('#w'+i).textContent=q[3]});
const p=Math.round(s/qs.length*100);if(key!='review'&&(best(key)==null||p>best(key)))P[key]=p;touch();P.h=(P.h||[]).concat([{k:key,p,t:Date.now()}]).slice(-30);save();
const href=key=='review'?'#/review':'#/'+(key.startsWith('exam')?'exam'+(key.length>4?'/'+key.slice(4):''):'m/'+key);
$('#res').innerHTML=`<b>Score: ${s}/${qs.length} (${p}%)</b> — ${p>=70?'Passed.':'Below 70%. Review the notes and try again.'} <a href="${href}" onclick="setTimeout(route)">Retake</a>`;$('#chk').remove()}}
function dash(){const tk=M.map(m=>[m.t,best(m.id)]),pass=tk.filter(x=>(x[1]||0)>=70).length,taken=tk.filter(x=>x[1]!=null),avg=taken.length?Math.round(taken.reduce((a,x)=>a+x[1],0)/taken.length):0,weak=taken.slice().sort((a,b)=>a[1]-b[1])[0];
let dm=0,dt=0;if(window.Z&&Z.marks)Object.keys(Z.marks).forEach(k=>{dt+=Z.marks[k].length;dm+=((P.d||{})[k]||[]).filter(Boolean).length});
const st=(n,l)=>`<div class="card" style="text-align:center;margin:0"><div style="font-size:1.6rem;font-weight:700;color:var(--cold)">${n}</div><div style="color:var(--mut);font-size:.85rem">${l}</div></div>`;
const cm=M.find(x=>x.id==P.last),cont=cm&&(best(cm.id)||0)<70?`<a class="card" href="#/m/${cm.id}"><div class="row"><div><b>Continue: ${cm.t}</b><br><span style="color:var(--mut)">Pick up where you left off</span></div><span class="pill ok">Resume</span></div></a>`:'';
app.innerHTML=`<h1>Dashboard</h1><p style="color:var(--mut)">Air conditioning and refrigeration. Pass each module test at 70%.</p>${cont}<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px">${st(pass+'/'+M.length,'Modules passed')}${st(taken.length?avg+'%':'–','Average score')}${st((P.st?P.st.n:0)+' 🔥','Day streak')}${st(jobPct()+'%','Job sheets')}${st(dt?Math.round(dm/dt*100)+'%':'–','Drawing self-marks')}${st(missN(),'Mistakes to review')}</div>
<h3>Score by module</h3>`+tk.map(x=>`<div style="margin:8px 0"><div class="row"><span>${x[0]}</span><span class="pill ${(x[1]||0)>=70?'ok':''}">${x[1]==null?'Not taken':x[1]+'%'}</span></div><div class="bar"><i style="width:${x[1]||0}%;${(x[1]||0)<70?'background:var(--hot)':''}"></i></div></div>`).join('')+
(weak&&weak[1]<70?`<p class="note">Weakest module: <b>${weak[0]}</b> (${weak[1]}%). Re-read the notes and retest.</p>`:'')+
`<h3>Recent attempts</h3>`+((P.h||[]).length?(P.h||[]).slice().reverse().slice(0,10).map(a=>`<div class="row" style="padding:4px 0;border-top:1px solid var(--line)"><span>${label(a.k)}<br><small style="color:var(--mut)">${new Date(a.t).toLocaleDateString()}</small></span><span class="pill ${a.p>=70?'ok':''}">${a.p}%</span></div>`).join(''):'<p style="color:var(--mut)">No attempts yet.</p>')}
function cards(){const pool=shuffle(M.flatMap(m=>m.q));let i=0;
const show=()=>{const q=pool[i%pool.length];app.innerHTML=`<p><a href="#/">← Home</a></p><h1>Flashcards</h1><p style="color:var(--mut)">Card ${i+1}. Think of the answer, then tap to reveal.</p><div class="card" id="fc" tabindex="0" style="min-height:140px;cursor:pointer"><b>${q[0]}</b><div id="fa" style="display:none;margin-top:12px"><span class="good" style="padding:4px 8px;border-radius:6px">${q[1][q[2]]}</span><div class="why">${q[3]}</div></div></div><button id="nx">Next card</button>`;
const r=()=>$('#fa').style.display='block';$('#fc').onclick=r;$('#fc').onkeydown=e=>{if(e.key=='Enter'||e.key==' '){e.preventDefault();r()}};$('#nx').onclick=()=>{i++;touch();save();show()}};show()}
const nf=x=>(+x.toFixed(2)).toLocaleString('en',{maximumFractionDigits:2});
function calcs(){
app.innerHTML=`<h1>Calculators with working</h1><p style="color:var(--mut)">Each calculator shows every step, so you can copy the method into your exam answers.</p>
<div class="card"><b>Capacity converter (kW, BTU/h, tons)</b><div class="cs"><input type="number" id="cv" placeholder="Value" aria-label="Value"><select id="cu" aria-label="Unit"><option>kW</option><option>BTU/h</option><option>TR</option></select></div><div class="wkout" id="co">Enter a value.</div></div>
<div class="card"><b>Ohm's law and power</b><p style="color:var(--mut);margin:.2em 0">Fill in any two values.</p><div class="cs"><label>V <input type="number" id="ov"></label><label>I (A) <input type="number" id="oi"></label><label>R (Ω) <input type="number" id="or"></label></div><div class="wkout" id="oo">Enter two values.</div></div>
<div class="card"><b>Sensible heat carried by air</b><div class="cs"><label>Airflow (L/s) <input type="number" id="al"></label><label>ΔT (K) <input type="number" id="at"></label></div><div class="wkout" id="ao">Enter airflow and temperature difference.</div></div>
<div class="card"><b>Room sizing</b><div class="cs"><label>Length (m) <input type="number" id="rl"></label><label>Width (m) <input type="number" id="rw"></label><label>BTU/h per m² <input type="number" id="rb" value="550"></label></div><div class="wkout" id="ro">Enter the room size.</div></div>`;
const v=k=>parseFloat($('#'+k).value),L=a=>'<ol>'+a.map(x=>`<li>${x}</li>`).join('')+'</ol>',ok=(...a)=>a.every(x=>!isNaN(x));
const err=(id,msg)=>{$('#'+id).innerHTML=`<span style="color:var(--hot)">${msg}</span>`};
const capc=()=>{const x=v('cv'),u=$('#cu').value;if(isNaN(x))return $('#co').textContent='Enter a value.';if(x<0)return err('co','Value cannot be negative.');if(x>999999)return err('co','Value seems too large — check units.');let b,s=[];
if(u=='kW'){b=x*3412;s.push(`${nf(x)} kW × 3,412 = ${nf(b)} BTU/h`)}else if(u=='TR'){b=x*12000;s.push(`${nf(x)} TR × 12,000 = ${nf(b)} BTU/h`)}else b=x;
if(u!='kW')s.push(`${nf(b)} BTU/h ÷ 3,412 = ${nf(b/3412)} kW`);
if(u!='TR')s.push(`${nf(b)} BTU/h ÷ 12,000 = ${nf(b/12000)} TR`);
$('#co').innerHTML=L(s)+`<b>${nf(b/3412)} kW = ${nf(b)} BTU/h = ${nf(b/12000)} TR</b>`};
const ohm=()=>{let V=v('ov'),I=v('oi'),R=v('or'),s=[];const n=[V,I,R].filter(x=>!isNaN(x)).length;if(n<2)return $('#oo').textContent='Enter two values.';
if(!isNaN(R)&&R<0)return err('oo','Resistance cannot be negative.');
if(!isNaN(R)&&R===0&&((!isNaN(V)&&V!==0)||(!isNaN(I)&&I!==0)))return err('oo','Resistance of 0 Ω would mean a short circuit (infinite current) — check values.');
if(isNaN(V)){V=I*R;s.push(`V = I × R = ${nf(I)} × ${nf(R)} = ${nf(V)} V`)}else if(isNaN(I)){if(R===0)return err('oo','Cannot divide by zero resistance.');I=V/R;s.push(`I = V ÷ R = ${nf(V)} ÷ ${nf(R)} = ${nf(I)} A`)}else if(isNaN(R)){if(I===0)return err('oo','Cannot divide by zero current.');R=V/I;s.push(`R = V ÷ I = ${nf(V)} ÷ ${nf(I)} = ${nf(R)} Ω`)}
s.push(`P = V × I = ${nf(V)} × ${nf(I)} = ${nf(V*I)} W`);$('#oo').innerHTML=L(s)+`<b>V = ${nf(V)} V, I = ${nf(I)} A, R = ${nf(R)} Ω, P = ${nf(V*I)} W</b>`};
const air=()=>{const f=v('al'),t=v('at');if(!ok(f,t))return $('#ao').textContent='Enter airflow and temperature difference.';
if(f<=0)return err('ao','Airflow must be greater than zero.');
if(Math.abs(t)>80)return err('ao','ΔT above 80 K is unusual — check units.');
const a=1.2*f,w=a*t;
$('#ao').innerHTML=L([`W = 1.2 × L/s × ΔT`,`1.2 × ${nf(f)} = ${nf(a)}`,`${nf(a)} × ${nf(t)} = ${nf(w)} W`,`${nf(w)} W × 3.412 = ${nf(w*3.412)} BTU/h`,`${nf(w*3.412)} ÷ 12,000 = ${nf(w*3.412/12000)} TR`])+`<b>${nf(w)} W (${nf(w*3.412)} BTU/h)</b>`};
const room=()=>{const l=v('rl'),w=v('rw'),b=v('rb');if(!ok(l,w,b))return $('#ro').textContent='Enter the room size.';
if(l<=0||w<=0)return err('ro','Room length and width must be greater than zero.');
if(l>500||w>500)return err('ro','Dimensions over 500 m are unusual — check units.');
if(b<100||b>1500)return err('ro','BTU/h per m² should be between 100 and 1,500 — typical value is 550.');
const a=l*w,t=a*b,sz=[9000,12000,18000,24000,36000,48000],p=sz.find(x=>x>=t)||sz[sz.length-1];
$('#ro').innerHTML=L([`Area = ${nf(l)} × ${nf(w)} = ${nf(a)} m²`,`BTU/h = ${nf(a)} × ${nf(b)} = ${nf(t)} BTU/h`,`Next standard size up: ${nf(p)} BTU/h`,`${nf(p)} ÷ 3,412 = ${nf(p/3412)} kW`])+`<b>Choose about ${nf(p)} BTU/h${({9000:' (1 HP split)',12000:' (1.5 HP split)',18000:' (2 HP split)'})[p]||''}</b>. A proper load calculation is better for sunny, crowded or kitchen rooms.`};
[['cv',capc],['cu',capc],['ov',ohm],['oi',ohm],['or',ohm],['al',air],['at',air],['rl',room],['rw',room],['rb',room]].forEach(([k,f])=>{$('#'+k).oninput=f;$('#'+k).onchange=f})}
function review(){const q=Object.values(P.miss||{});app.innerHTML=`<p><a href="#/">← Home</a></p><h1>Review mistakes</h1>`+(q.length?`<p>${q.length} question(s) you got wrong${q.length>20?' — showing 20 at a time':''}. Answer one correctly and it leaves this list.</p><div id="qz"></div>`:'<p>No mistakes to review. Take a module test first, and anything you miss will appear here.</p>');if(q.length)quiz($('#qz'),shuffle(q).slice(0,20),'review')}
const figHTML=k=>{if(!window.Z||!Z.figs||!Z.figs[k])return '';const n=(Z.names&&Z.names[k])||k,t=(Z.tasks&&Z.tasks[k])||'';return `<figure class="diag-card" data-fig="${k}"><div class="diag-header"><span class="diag-badge">📐 Trade Diagram</span><b class="diag-title">${n}</b></div><div class="diag-svg-wrap">${Z.figs[k]}</div>${t?`<figcaption class="diag-task"><b>Drawing task:</b> ${t} <a href="#/draw">Practice in Drawing Lab →</a></figcaption>`:''}</figure>`};
const FIG_RULES=[
{m:/<h3>(?:Oxy-acetylene|Brazing|Gas welding)/i,f:'flames'},
{m:/<h3>(?:Compressor windings|Compressors?)/i,f:'comp'},
{m:/<h3>(?:Accessories|Other parts you will meet)/i,f:'cycle'},
{m:/<h3>(?:Evaporators?)/i,f:'evap'},
{m:/<h3>(?:Condensers?)/i,f:'cond'},
{m:/<h3>(?:Flow controls?|Capillary tube vs TXV)/i,f:'flow'},
{m:/<h3>(?:Cooling towers?)/i,f:'tower'},
{m:/<h3>(?:PT chart|Service manifold|Manifold|Meters)/i,f:'manifold'},
{m:/<h3>(?:Key components|Symbols and circuits|Symbols)/i,f:'symbols'},
{m:/<h3>(?:Reading wiring diagrams|Refrigerator circuit|Domestic fridge cycle)/i,f:'fridgeckt'},
{m:/<h3>(?:Three-phase)/i,f:'threeph'},
{m:/<h3>(?:Placing the units|Installation layout|Drainage|Split air conditioner)/i,f:'splitinst'},
{m:/<h3>(?:Electrical connection|Interconnecting wiring|Split AC interconnecting)/i,f:'splitwire'},
{m:/<h3>(?:Common refrigerants|Refrigerant safety|Safety classes)/i,f:'safety'},
{m:/<h3>(?:Sensible and latent heat|Trade science|Pressure-enthalpy|Mollier)/i,f:'ph'},
{m:/<h3>(?:Humidity and comfort|Psychrometric)/i,f:'psy'},
{m:/<h3>(?:VRF)/i,f:'vrf'},
{m:/<h3>(?:Heat pumps?|Reversing valve)/i,f:'hp'},
{m:/<h3>(?:Inverters?)/i,f:'inv'},
{m:/<h3>(?:Cold rooms?)/i,f:'coldroom'},
{m:/<h3>(?:Chilled water|Chillers?)/i,f:'chill'},
{m:/<h3>(?:Electronic symbols)/i,f:'elsym'}
];
if(window.FR)FR.forEach(r=>FIG_RULES.push(r));
if(window.MF)Object.keys(MF).forEach(id=>{const m=M.find(x=>x.id===id);if(m){m.f=m.f||[];MF[id].forEach(k=>{if(!m.f.includes(k))m.f.push(k)})}});
function renderLesson(m){
const allowed=new Set(m.f||[]),used=new Set();
const parts=(m.n||'').split(/(?=<h3>)/i);
const out=parts.map(p=>{
let s=p;
for(const r of FIG_RULES){
if(allowed.has(r.f)&&!used.has(r.f)&&r.m.test(p)){used.add(r.f);s+=figHTML(r.f)}
}
if(m.x=='cycle'&&!used.has('__cycle')&&/<h3>(?:The idea|High side)/i.test(p)){used.add('__cycle');s+=diagram()}
if(m.x=='calc'&&!used.has('__calc')&&/<h3>(?:Superheat|Subcooling)/i.test(p)){used.add('__calc');s+=calc()}
return s});
let html=out.join('');
if(m.x=='cycle'&&!used.has('__cycle'))html+=diagram();
if(m.x=='calc'&&!used.has('__calc'))html+=calc();
const rest=(m.f||[]).filter(f=>!used.has(f));
if(rest.length)html+=rest.map(f=>figHTML(f)).join('');
return html}
function notfound(){app.innerHTML=`<h1>Page not found</h1><p>We could not find that page.</p><p><a href="#/">← Dashboard</a> · <a href="#/modules">All modules</a></p>`}
function mod(id){const m=M.find(x=>x.id==id);if(!m)return notfound();
app.innerHTML=`<p><a href="#/modules">← All modules</a></p><h1>${m.t}</h1>${renderLesson(m)}${m.w?'<h2>Written practice (self-mark)</h2>'+m.w.map(w=>`<details class="card"><summary><b>${w[0]}</b></summary><p>${w[1]}</p></details>`).join(''):''}<h2>Module test</h2>${m.q.length>20?`<p style="color:var(--mut)">20 random questions from a bank of ${m.q.length}. Retake for a new set.</p>`:''}<div id="qz"></div>`;wire(m.x);quiz($('#qz'),m.q.length>20?shuffle(m.q).slice(0,20):m.q,m.id)}
function exam(k){const all=M.filter(m=>!k||m.id.startsWith(k)).flatMap(m=>m.q);app.innerHTML=`<p><a href="#/modules">← All modules</a></p><h1>${k?(k=='c2'?'NVTI Certificate Two mock exam':k=='int'?'International standards practice exam':k=='adv'?'Advanced systems practice exam':'NVTI Certificate One mock exam'):'Final exam'}</h1><p>25 questions drawn at random from all modules. Pass mark 70%. Time allowed: 30 minutes.</p><p id="tm"><b></b></p><div id="qz"></div>`;quiz($('#qz'),shuffle(all).slice(0,25),'exam'+(k||''));let t=1800;const u=()=>{$('#tm b').textContent='Time left: '+Math.floor(t/60)+':'+String(t%60).padStart(2,'0')};u();window.T=setInterval(()=>{t--;u();if(t<=0){clearInterval(T);const b=$('#chk');b&&b.click()}},1000)}
const jobTotal=()=>Y.jobs.reduce((a,j)=>a+j.steps.length,0),jobDone=()=>Object.values(P.j||{}).reduce((a,x)=>a+x.filter(Boolean).length,0),jobPct=()=>Math.round(jobDone()/jobTotal()*100);
function jobs(){app.innerHTML=`<p><a href="#/">← Home</a></p><h1>Practical job sheets</h1><p>Do each job in the workshop under your instructor. Tick each step once it is done and checked. Practical exams reward safe working, correct sequence and neat finish.</p>`+Y.jobs.map((j,i)=>{const d=((P.j||{})[i]||[]).filter(Boolean).length;return `<a class="card" href="#/job/${i}"><div class="row"><b>${j.t}</b><span class="pill ${d==j.steps.length?'ok':''}">${d}/${j.steps.length}</span></div></a>`}).join('')}
function job(i){const j=Y.jobs[i];if(!j)return jobs();const st=(P.j||{})[i]||[];app.innerHTML=`<p><a href="#/jobs">← Job sheets</a></p><h1>${j.t}</h1><p><b>Tools and materials:</b> ${j.tools}</p><div class="card">`+j.steps.map((x,k)=>`<label style="display:block;padding:6px 0"><input type="checkbox" data-k="${k}" ${st[k]?'checked':''}> ${k+1}. ${x}</label>`).join('')+`</div><p class="note">Safety first: isolate power, wear PPE, and have your instructor sign off before moving on.</p>`;
document.querySelectorAll('input[data-k]').forEach(c=>c.onchange=()=>{P.j=P.j||{};const a=P.j[i]||[];a[+c.dataset.k]=c.checked;P.j[i]=a;save()})}
function draw(){app.innerHTML=`<p><a href="#/">← Home</a></p><h1>Drawing lab</h1><p>Trade Drawing is a full NVTI component. Study a diagram, tap Hide, sketch it on paper from memory, show it again and tick what you got right. Aim for at least 70%.</p>`+Object.keys(Z.figs).map(k=>{const mk=(Z.marks||{})[k]||[],st=((P.d||{})[k])||[];return `<div class="card"><b>${Z.names[k]}</b><div data-fig="${k}">${Z.figs[k]}</div><p><b>Task:</b> ${Z.tasks[k]}</p><button data-h="${k}">Hide diagram</button>${mk.length?`<p><b>Self-mark</b> <span class="pill" id="sc-${k}"></span></p>`+mk.map((x,i)=>`<label style="display:block"><input type="checkbox" data-d="${k}" data-i="${i}" ${st[i]?'checked':''}> ${x}</label>`).join(''):''}</div>`}).join('');
const sc=k=>{const m=(Z.marks||{})[k]||[],st=((P.d||{})[k])||[],n=m.filter((x,i)=>st[i]).length,e=$('#sc-'+k);if(e)e.textContent=n+'/'+m.length};
Object.keys(Z.figs).forEach(sc);
document.querySelectorAll('[data-h]').forEach(b=>b.onclick=()=>{const d=document.querySelector(`[data-fig="${b.dataset.h}"]`),h=d.style.display=='none';d.style.display=h?'':'none';b.textContent=h?'Hide diagram':'Show diagram'});
document.querySelectorAll('[data-d]').forEach(c=>c.onchange=()=>{P.d=P.d||{};const a=P.d[c.dataset.d]||[];a[+c.dataset.i]=c.checked;P.d[c.dataset.d]=a;save();sc(c.dataset.d)})}
const NAV=[['','#/','🏠','Dashboard'],['Study'],['mods','#/modules','📚','Modules'],['cards','#/cards','🃏','Flashcards'],['review','#/review','🔁','Review mistakes'],['Practical'],['calc','#/calc','🧮','Calculators'],['draw','#/draw','✏️','Drawing lab'],['jobs','#/jobs','🔧','Job sheets'],['Exams'],['exam/adv','#/exam/adv','⚙️','Advanced systems'],['exam/int','#/exam/int','🌍','International standards'],['exam/c2','#/exam/c2','📝','NVTI Cert Two mock'],['exam/c1','#/exam/c1','📝','NVTI Cert One mock'],['exam','#/exam','🎓','Final exam']];
function navKey(h){const r=h.slice(2);if(!r||r=='dash')return '';if(r.startsWith('m/')||r=='modules')return 'mods';if(r.startsWith('job'))return r.startsWith('jobs')?'jobs':'jobs';return r.replace(/\/$/,'')}
function nav(){const k=navKey(location.hash||'#/');$('#nav').innerHTML=NAV.map(n=>n.length==1?`<h4>${n[0]}</h4>`:`<a href="${n[1]}" class="${n[0]==k?'on':''}" ${n[0]==k?'aria-current="page"':''}><span>${n[2]} ${n[3]}</span>${n[0]=='review'&&missN()?`<span class="pill">${missN()}</span>`:''}</a>`).join('');$('#nav').classList.remove('open');$('#menu').setAttribute('aria-expanded','false')}
$('#menu').onclick=()=>{const o=$('#nav').classList.toggle('open');$('#menu').setAttribute('aria-expanded',o)};
let ZF=[];addEventListener('resize',()=>ZF.forEach(f=>f()));
function zoomify(){ZF=[];document.querySelectorAll('#app svg[viewBox]').forEach(sv=>{const vb=sv.getAttribute('viewBox').split(/[ ,]+/).map(Number),ar=vb[2]/vb[3];let z=1;
const w=document.createElement('div'),bar=document.createElement('div'),sc=document.createElement('div');bar.className='zb';sc.className='zs';
bar.innerHTML='<span>Zoom <b>100%</b></span><button type="button" aria-label="Zoom out">−</button><button type="button" aria-label="Zoom in">+</button><button type="button">Fit</button>';
sv.replaceWith(w);sc.append(sv);w.append(bar,sc);
const ap=()=>{const W=sc.clientWidth;if(!W)return;const H=Math.min(innerHeight*.6,W/ar);sv.style.width=H*ar*z+'px';sv.style.height=H*z+'px';bar.querySelector('b').textContent=Math.round(z*100)+'%'};
const[b1,b2,b3]=bar.querySelectorAll('button');b1.onclick=()=>{z=Math.max(.5,z-.25);ap()};b2.onclick=()=>{z=Math.min(4,z+.25);ap()};b3.onclick=()=>{z=1;ap()};
ZF.push(ap);ap()})}
function route(){clearInterval(window.T);const h=location.hash.split('/');window.scrollTo(0,0);if(h[1]=='m'){P.last=h[2];save();mod(h[2])}else if(h[1]=='modules')home();else if(h[1]=='exam')exam(h[2]);else if(h[1]=='jobs')jobs();else if(h[1]=='draw')draw();else if(h[1]=='review')review();else if(h[1]=='cards')cards();else if(h[1]=='calc')calcs();else if(h[1]=='job')job(+h[2]);else if(!h[1]||h[1]=='dash')dash();else notfound();nav();zoomify();app.classList.remove('page-enter');void app.offsetWidth;app.classList.add('page-enter')}
addEventListener('hashchange',route);route();
if('serviceWorker' in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
