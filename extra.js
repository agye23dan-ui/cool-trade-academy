window.X={
heat:{n:`<h3>Heat calculation</h3><p><b>Q = m × c × ΔT</b> (heat = mass × specific heat × temperature change). Water has c ≈ 4.2 kJ/kg·K. Example: warming 10 kg of water by 20 K needs 10 × 4.2 × 20 = 840 kJ.</p>
<h3>Humidity and comfort</h3><p><b>Relative humidity (RH)</b> is how much moisture the air holds compared with the most it could hold at that temperature. People feel comfortable at about 22 to 26°C and 40 to 60% RH. The <b>dew point</b> is the temperature at which air starts to drop water. When an evaporator coil is colder than the room’s dew point, water condenses on it and drains away, which is why ACs dry the air.</p>
<h3>Workshop safety</h3><p>Wear safety glasses and gloves, keep a fire extinguisher near brazing work, and work in ventilated spaces. Refrigerant vapor is heavier than air and can collect in low areas.</p>`,
q:[['Heat needed to warm 5 kg of water by 10 K (c = 4.2) is…',['21 kJ','210 kJ','2,100 kJ','42 kJ'],1,'5 × 4.2 × 10 = 210 kJ.'],
['A comfortable relative humidity range is about…',['10 to 20%','40 to 60%','80 to 100%','0%'],1,'40 to 60% RH feels comfortable and limits mould.'],
['Water forms on an evaporator coil when its surface is below the…',['boiling point of water','dew point of the air','freezing point of copper','flash point'],1,'Below the dew point, moisture condenses out of the air.'],
['3.5 kW of cooling is roughly…',['½ TR','1 TR','2 TR','5 TR'],1,'1 TR ≈ 3.5 kW.'],
['Which is NOT a way heat transfers?',['Conduction','Convection','Radiation','Compression'],3,'Compression changes pressure; it is not a heat-transfer mode.']]},
cycle:{n:`<h3>Domestic fridge cycle</h3><p>A household fridge uses the same loop: the compressor and the condenser coil sit at the back or base, a capillary tube meters the refrigerant, and the evaporator sits behind the freezer panel with a fan circulating cold air. A defrost heater melts frost from the evaporator on a timer.</p>
<h3>Capillary tube vs TXV</h3><p>A capillary tube is a fixed restriction: simple and cheap but only ideal at design conditions. A TXV opens and closes based on evaporator outlet superheat, so it copes better with changing loads.</p>
<h3>Why the lines feel different</h3><p>The <b>discharge line</b> is the hottest. The <b>liquid line</b> is warm. The <b>suction line</b> is cool and, on a healthy split AC, is the larger pipe because it carries low-density vapor.</p>`,
q:[['A domestic fridge usually meters refrigerant with a…',['TXV','capillary tube','reversing valve','accumulator'],1,'Capillary tubes are standard in small fridges.'],
['An accumulator mainly protects the…',['condenser','compressor from liquid','thermostat','drain'],1,'It catches liquid so only vapor reaches the compressor.'],
['The condenser fan helps by…',['heating the room','removing heat from the refrigerant','adding refrigerant','cooling the compressor oil only'],1,'Airflow carries the rejected heat away.'],
['A TXV adjusts flow based on…',['room humidity','evaporator outlet superheat','compressor noise','outdoor wind'],1,'Its sensing bulb reads suction line temperature.'],
['The hottest refrigerant line in the system is the…',['liquid line','suction line','discharge line','drain line'],2,'Compression heat leaves in the discharge vapor.']]},
ref:{n:`<h3>Oils</h3><p>Compressor oil circulates with the refrigerant. <b>Mineral oil</b> is used with R22. <b>POE (polyolester) oil</b> is used with HFC refrigerants such as R134a and R410A. POE absorbs moisture quickly, so keep containers capped and systems closed.</p>
<h3>Contaminants</h3><ul><li><b>Moisture</b>: forms acid with the oil and can freeze at the metering device.</li><li><b>Air (non-condensables)</b>: raises head pressure and wastes energy.</li><li><b>Dirt and scale</b>: block filters and metering devices.</li></ul>
<h3>Charging methods</h3><ul><li><b>By weight</b>: the most reliable; use the nameplate charge plus any extra for long pipe runs.</li><li><b>Superheat method</b>: for fixed-orifice or capillary systems.</li><li><b>Subcooling method</b>: for systems with a TXV.</li></ul>
<h3>Recovery</h3><p>Fill a recovery cylinder to no more than <b>80%</b> of its capacity, so liquid has room to expand.</p>`,
q:[['A capillary-tube system is best charged by…',['subcooling alone','superheat (and weight)','sound','guessing'],1,'Fixed metering devices are charged using superheat and the nameplate weight.'],
['A TXV system is commonly charged by…',['subcooling','room colour','door seal','fan speed'],0,'Subcooling shows the liquid line is full.'],
['R410A systems normally use…',['mineral oil','POE oil','vegetable oil','no oil'],1,'HFC refrigerants use POE.'],
['Moisture in a system can cause…',['acid formation and freezing at the metering device','lower pressure only','quieter running','less power use'],0,'Water reacts with oil and may block the restriction.'],
['A recovery cylinder should be filled to no more than…',['50%','80%','100%','120%'],1,'Never exceed 80% to allow liquid expansion.']]},
elec:{n:`<h3>Reading wiring diagrams</h3><p>Start at the power source and follow the path of current through switches and controls to the load, then back to neutral. Wire colours and symbols vary, so always read the unit’s own legend. Match terminal labels (C, S, R, L, N, earth) to the drawing before disconnecting anything, and take a photo first.</p>
<h3>Three-phase in brief</h3><p>Larger commercial units use three-phase supply. Check phase order and voltage balance; a compressor running backward may be noisy and not pump.</p>
<h3>Typical electrical faults</h3><ul><li><b>Hum, no start</b>: weak or failed capacitor, or a seized compressor.</li><li><b>Contactor chatter or burnt contacts</b>: low voltage or worn contactor.</li><li><b>Trips the breaker</b>: shorted winding, earth fault, or undersized circuit.</li></ul>
<h3>Earthing</h3><p>The earth wire gives fault current a safe path so the breaker trips instead of the casing becoming live.</p>`,
q:[['Hums but will not start. Most likely…',['failed capacitor','dirty filter','blocked drain','wrong refrigerant'],0,'A weak capacitor cannot give the motor its starting boost.'],
['Running current is measured with a…',['manifold gauge','clamp meter','vacuum gauge','torque wrench'],1,'A clamp meter reads amps without breaking the circuit.'],
['Resistance readings must be taken with…',['power on','power off','the unit running','the cover off only'],1,'Measuring resistance on a live circuit can damage the meter and injure you.'],
['An open overload protector shows…',['zero ohms','no continuity','10 amps','60 Hz'],1,'Open means the circuit is broken.'],
['The earth wire provides…',['more power','a safe path for fault current','cooling','extra torque'],1,'It lets the breaker trip during a fault.']]},
inst:{n:`<h3>Electrical connection</h3><p>Use a dedicated circuit with the correct breaker, cable size and earth, as specified on the nameplate. Make tight, clean terminations and use the manufacturer’s interconnecting cable layout.</p>
<h3>Flare nut tightening</h3><p>Use a torque wrench. Under-tightening leaks; over-tightening cracks the flare. A drop of refrigerant oil on the flare face helps it seat.</p>
<h3>Commissioning checklist</h3><ul><li>No leaks at joints (bubble solution or detector).</li><li>Drain flows freely.</li><li>Fans run smoothly with no rubbing.</li><li>Running current is within nameplate.</li><li>Supply air is clearly colder than return air.</li><li>Customer shown the remote, filter cleaning and basic care.</li></ul>`,
q:[['A split AC should be wired to…',['any socket','a dedicated circuit with proper breaker and earth','a phone charger','an extension reel'],1,'It draws high current and needs protection.'],
['In a split AC, the larger copper pipe is the…',['liquid line','suction line','discharge line','drain'],1,'Low-density suction vapor needs the bigger pipe.'],
['Why use a torque wrench on flare nuts?',['it is faster','to avoid leaks or cracking the flare','to cool the pipe','to measure pressure'],1,'Correct torque seals without damaging the flare.'],
['After install, you should check…',['only the remote','current, drain, fans, leaks and temperatures','nothing','just the colour'],1,'Commissioning confirms the system works properly.'],
['Suction and liquid lines should be insulated…',['together in one wrap touching','separately','not at all','only the liquid line'],1,'They are at different temperatures; keep them apart.']]},
fault:{n:`<h3>Temperature split</h3><p>The difference between return and supply air at the indoor unit is the <b>temperature split</b>, typically around 8 to 12°C on a healthy system. A small split suggests low charge, poor airflow or a weak compressor.</p>
<h3>Reading the symptoms</h3><ul><li><b>Low suction pressure and high superheat</b>: undercharge or restriction.</li><li><b>High suction pressure and low superheat</b>: overcharge or a weak compressor.</li><li><b>High head pressure and high subcooling</b>: overcharge. A dirty condenser also gives high head pressure, but subcooling stays normal or low.</li></ul>
<h3>Fridge-specific faults</h3><ul><li>Worn door seals let warm air in.</li><li>Dust on the condenser makes the compressor run constantly.</li><li>Failed defrost heater or timer lets frost block airflow.</li><li>A compressor that clicks on and off may have a faulty start relay or overload.</li></ul>
<h3>After finding a leak</h3><p>Repair it, then evacuate and recharge properly. Topping up without fixing the leak wastes refrigerant and returns the fault.</p>`,
q:[['A healthy temperature split is about…',['1 to 2°C','8 to 12°C','30 to 40°C','0°C'],1,'Return minus supply air is typically 8 to 12°C.'],
['A fridge runs constantly with a dusty rear coil. Best first fix…',['add refrigerant','clean the condenser','replace the compressor','change the plug'],1,'Dust blocks heat rejection.'],
['A fridge compressor clicks on and off repeatedly. Suspect…',['start relay or overload','drain hose','filter','remote battery'],0,'These parts help the compressor start and protect it.'],
['Low suction pressure with high superheat suggests…',['overcharge','undercharge or restriction','perfect charge','dirty indoor filter only'],1,'Too little refrigerant reaches the evaporator.'],
['After finding a leak you should…',['just top up','repair, evacuate and recharge','ignore it','add oil only'],1,'Fixing the leak is essential.']]}
};
