(function(){
// New quiz questions. Q(question, correct answer, three wrong answers, explanation). Options are shuffled when the quiz is shown.
const Q=(q,c,w,y)=>[q,[c,...w],0,y];
const X=window.QX=window.QX||{};

X.heat=[
Q("1 kW is about…","3,412 BTU/h",["341 BTU/h","12,000 BTU/h","1,055 BTU/h"],"1 kW = 3,600 kJ per hour. 3,600 ÷ 1.055 (kJ per BTU) = 3,412 BTU/h."),
Q("One BTU is the heat needed to warm…","1 lb of water by 1°F",["1 kg of water by 1°C","1 lb of ice by 1 K","1 kg of air by 1°F"],"BTU = British Thermal Unit: 1 lb of water through 1°F (about 1.055 kJ)."),
Q("The ton of refrigeration was based on melting 1 ton of ice in…","24 hours",["1 hour","12 hours","1 minute"],"2,000 lb × 144 BTU/lb = 288,000 BTU. 288,000 ÷ 24 h = 12,000 BTU/h."),
Q("18,000 BTU/h is about…","5.3 kW",["1.5 kW","18 kW","61 kW"],"18,000 ÷ 3,412 = 5.28 kW."),
Q("Water at 100°C keeps absorbing heat while boiling, with no temperature rise. That heat is…","latent heat",["sensible heat","radiant heat","specific heat"],"Latent heat changes the state of a substance without changing its temperature."),
Q("Boiling 2 kg of water at 100°C (L = 2,260 kJ/kg) needs…","4,520 kJ",["2,260 kJ","1,130 kJ","9,040 kJ"],"Q = m × L = 2 × 2,260 = 4,520 kJ."),
Q("Cooling 100 kg of water by 10 K (c = 4.18 kJ/kg·K) removes…","4,180 kJ",["418 kJ","41.8 kJ","41,800 kJ"],"Q = m × c × ΔT = 100 × 4.18 × 10 = 4,180 kJ."),
Q("Heat travelling along a copper pipe from the hot end to the cool end is…","conduction",["convection","radiation","evaporation"],"Conduction is heat movement through a solid."),
Q("Which unit measures an amount of heat energy?","kilojoule (kJ)",["degree Celsius (°C)","psi","hertz (Hz)"],"Heat is energy, measured in joules or kilojoules. °C measures temperature."),
];

X.cycle=[
Q("Between the compressor outlet and the condenser, the refrigerant is…","hot, high-pressure vapor",["cold, low-pressure liquid","warm, high-pressure liquid","cool, low-pressure vapor"],"The compressor discharge is the hottest point, and is still vapor until it condenses."),
Q("In the evaporator the refrigerant…","boils at low pressure and absorbs heat",["condenses and gives up heat","is compressed","is dried and filtered"],"Boiling needs heat, which is taken from the room air."),
Q("Heat rejected at the condenser equals…","heat absorbed plus compressor work",["heat absorbed only","compressor work only","heat absorbed minus compressor work"],"The compressor adds energy, so the condenser must reject more than the evaporator absorbed."),
Q("A unit gives 3.5 kW of cooling for 1.1 kW of electricity. Its COP is about…","3.2",["0.3","4.6","38"],"COP = 3.5 ÷ 1.1 = 3.18."),
Q("A subcooled liquid is…","cooler than its saturation temperature for the pressure",["hotter than its saturation temperature","a mixture of liquid and vapor","a dry vapor"],"Subcooled means below the boiling or condensing point, so it is fully liquid."),
Q("The refrigerant becomes cold after the metering device because…","some liquid flashes to vapor and takes heat from the rest",["it has been compressed","heat is added by the fan","the filter drier cools it"],"The pressure drop lets part of the liquid boil, which takes heat from the remaining liquid."),
Q("On a healthy split AC the suction line feels…","cool, and it is the larger pipe",["very hot and the smaller pipe","hot and the larger pipe","cold and the smaller pipe"],"Low-density suction vapor needs the bigger pipe, and it is cool."),
Q("A dirty condenser makes the compressor…","work harder and give less cooling",["work less and give more cooling","use the same power","run backward"],"Higher condensing pressure means more compression work and lower capacity."),
Q("The line that carries warm high-pressure liquid is the…","liquid line",["suction line","discharge line","drain line"],"The condenser outlet liquid travels through the liquid line to the metering device."),
];

X.ref=[
Q("The suction line reads 12°C and the evaporating saturation temperature is 4°C. Superheat is…","8 K",["16 K","3 K","48 K"],"Superheat = 12 − 4 = 8 K."),
Q("Condensing temperature is 45°C and the liquid line is 38°C. Subcooling is…","7 K",["83 K","45 K","6.5 K"],"Subcooling = 45 − 38 = 7 K."),
Q("An undercharged system typically shows…","high superheat and low subcooling",["low superheat and high subcooling","high head pressure","normal readings"],"Too little refrigerant leaves the evaporator starved (high superheat) and the condenser short of liquid (low subcooling)."),
Q("An overcharged TXV system typically shows…","high subcooling and high head pressure",["low subcooling","low head pressure","high superheat only"],"Extra liquid backs up in the condenser."),
Q("Which of these has the lowest boiling point at atmospheric pressure?","R410A (about −52°C)",["R134a (about −26°C)","R600a (about −12°C)","R717 (about −33°C)"],"R410A boils at about −52°C."),
Q("A settled system of R134a at 25°C sits at about…","82 psig",["36 psig","137 psig","225 psig"],"At 25°C R134a saturation pressure is about 5.6 bar gauge, 82 psig."),
Q("Low airflow across the evaporator usually gives…","low suction pressure and low superheat",["high suction pressure","high superheat","high head pressure"],"Less heat reaches the coil, so the refrigerant boils less and the coil gets too cold."),
Q("A weak compressor typically shows…","high suction pressure and low head pressure",["low suction and high head","low suction and low head","no pressure change"],"It cannot build a pressure difference."),
Q("A restriction in the liquid line typically gives…","low suction pressure and high superheat",["high head pressure and low superheat","high suction pressure","low subcooling"],"The evaporator is starved of refrigerant."),
];

X.elec=[
Q("A heater draws current from 230 V across 46 Ω. The current is…","5 A",["10,580 A","0.2 A","276 A"],"I = V ÷ R = 230 ÷ 46 = 5 A."),
Q("12 V across a coil that draws 0.5 A means a resistance of…","24 Ω",["6 Ω","0.04 Ω","12.5 Ω"],"R = V ÷ I = 12 ÷ 0.5 = 24 Ω."),
Q("A motor on 230 V draws 4 A at a power factor of 0.8. Its power is…","736 W",["920 W","1,150 W","184 W"],"P = 230 × 4 × 0.8 = 736 W."),
Q("On a compressor C–S reads 12 Ω and C–R reads 4 Ω. S–R should read about…","16 Ω",["8 Ω","48 Ω","3 Ω"],"S–R = C–S + C–R = 12 + 4 = 16 Ω."),
Q("A 1.2 kW compressor runs 8 hours. Energy used is…","9.6 kWh",["0.15 kWh","96 kWh","9.6 kW"],"kWh = 1.2 × 8 = 9.6 kWh."),
Q("Safety switches such as the overload and pressure switches are wired…","in series with the control circuit",["in parallel with the compressor","across the supply","only to earth"],"Any one opening breaks the circuit and stops the compressor."),
Q("A clamp meter closed around both the live and neutral together reads…","about zero",["double the current","the voltage","the resistance"],"The magnetic fields from equal and opposite currents cancel."),
Q("The live–dead–live test is used to…","prove the meter works before and after testing",["measure insulation","find the live wire colour","discharge a capacitor"],"You test a known live source, test the circuit, then test the known live source again."),
Q("On a nameplate, RLA means…","rated load amps",["resistance load ampere","running line accuracy","reverse load amplitude"],"RLA is the normal running current the compressor is rated to draw."),
Q("A compressor running 25% above its RLA suggests…","a fault such as a dirty condenser, low voltage or a failing capacitor",["everything is normal","a refrigerant overfill only","a missing filter"],"Current well over rated shows abnormal load or supply."),
];

X.inst=[
Q("Why not purge the pipes with refrigerant instead of evacuating?","it leaves air and moisture inside and wastes refrigerant",["it is faster and safer","it removes nitrogen only","it is required by the manual"],"Only a deep vacuum removes air and moisture properly."),
Q("For a 12,000 BTU/h split, the liquid pipe is typically…","1/4 inch",["1/2 inch","3/4 inch","1 inch"],"Typical small splits use 1/4 inch liquid and 3/8 inch suction."),
Q("A 3 m × 4 m sunny room at 600 BTU/h per m² needs about…","7,200 BTU/h",["720 BTU/h","3,600 BTU/h","14,400 BTU/h"],"Area = 12 m². 12 × 600 = 7,200 BTU/h, so choose the next size up, 9,000."),
Q("Installed pipe is 3 m longer than standard and the maker allows 15 g per metre. Add…","45 g",["5 g","18 g","450 g"],"3 × 15 = 45 g."),
Q("A typical flare nut torque for 3/8 inch pipe is about…","33 to 40 N·m",["14 to 18 N·m","50 to 60 N·m","97 to 118 N·m"],"Typical values: 1/4 about 14–18, 3/8 about 33–40, 1/2 about 50–60 N·m. Always check the manual."),
Q("Pouring water on the evaporator tray at handover checks that…","the drain flows freely",["the pipes are insulated","the compressor starts","the refrigerant charge is right"],"It proves the condensate drain is clear and sloped."),
Q("A leak at a flare joint is most often caused by…","a poor flare or wrong torque",["a clean filter","a long cable","too much insulation"],"An uneven or cracked flare, or a nut that is too loose or too tight, leaks."),
Q("An outdoor unit that blows its hot air back into itself causes…","high head pressure and poor cooling",["low head pressure","a frozen coil","low current"],"Warmer inlet air raises the condensing temperature."),
Q("Service valves on a split are opened with…","a hex (Allen) key",["a pipe wrench","a flare nut spanner","a screwdriver only"],"Most small units have hex-key operated valve stems."),
Q("The indoor unit mounting plate must be…","level and fixed firmly to the wall",["slightly tilted up","loose to allow movement","fixed to the ceiling"],"A tilted plate causes drain problems and a poor fit."),
];

X.fault=[
Q("The fans run but the compressor does not. Check first…","contactor, capacitor and overload",["the filter","the drain","the remote batteries"],"The fans prove power is present, so look at the compressor start components."),
Q("A hissing noise from the unit points to…","a refrigerant leak or normal expansion noise",["a worn fan bearing","a loose panel","a blocked drain"],"Hissing is gas escaping or flowing through a restriction."),
Q("A compressor starts then stops quickly. Check…","voltage, capacitor and condenser",["the filter only","the drain only","the remote"],"Low voltage, a weak capacitor or high head pressure can trip the overload."),
Q("A musty smell from the indoor unit suggests…","a wet coil or blocked drain needing cleaning",["an electrical fault","low refrigerant","a bad compressor"],"Damp coils and drains grow mould."),
Q("A squealing noise from the outdoor unit points to…","a fan bearing or belt",["low charge","a dirty filter","a bad thermostat"],"Squeal is a dry or worn rotating part."),
Q("In the fault-finding method, the refrigerant circuit is checked…","last, after power, controls and airflow",["first","before airflow","only after replacing parts"],"Most faults are simple, so check the easy things first."),
Q("A frozen evaporator should first be treated by…","switching off, letting it melt and checking airflow",["adding refrigerant","scraping the ice with a knife","raising the thermostat only"],"Melt the ice, then find the cause, usually airflow."),
Q("A burning smell from a unit means…","switch off and inspect for electrical overheating",["ignore it if the unit still cools","add refrigerant","clean the filter only"],"Burning smells are a fire risk."),
Q("Keeping readings from each visit helps because…","slow changes such as rising current show a fault coming",["it is required for every unit","it replaces a service","it lowers power use"],"Trends warn of faults before a breakdown."),
];

X.tools=[
Q("The blue manifold hose connects to…","the suction (low-side) service port",["the discharge port","the recovery cylinder only","the vacuum pump only"],"Blue is the low side, red the high side, yellow the service hose."),
Q("A recovery cylinder is usually coloured…","grey body with a yellow top",["red all over","blue with a white top","green all over"],"Grey with yellow top is the common recovery cylinder colour."),
Q("Brazing filler metals melt above…","450°C",["100°C","250°C","350°C"],"Above 450°C is brazing. Below is soft soldering."),
Q("Soft solder melts below…","450°C",["650°C","900°C","1,200°C"],"Soft soldering is below 450°C."),
Q("A good brazed joint has a gap of about…","0.05 to 0.2 mm",["2 to 3 mm","5 mm","1 cm"],"A very small gap lets capillary action pull the filler in."),
Q("When brazing, you heat the…","pipe and fitting, not the rod",["rod only","flux only","outside of the flame"],"The pipe must be hot enough to melt the rod on contact."),
Q("The bend radius of copper tube should be at least about…","3 to 4 times the pipe diameter",["half the diameter","equal to the diameter","the length of the pipe"],"Tighter bends kink the tube."),
Q("The flare nut must be slid on…","before flaring the pipe end",["after flaring","after brazing","at the end of the job"],"The nut cannot pass over a finished flare."),
Q("Copper to steel brazing needs…","silver-bearing rod with flux",["no flux and phosphorus-copper rod","soft solder only","aluminium rod"],"Phosphorus-copper rod without flux is only for copper to copper."),
Q("Why wrap a wet cloth around a valve or sight glass while brazing?","to protect heat-sensitive parts",["to cool the flame","to hold the rod","to clean the pipe"],"Heat damages seals and glass."),
Q("A full oxygen cylinder is at about…","150 bar",["1.5 bar","15 bar","1,500 bar"],"High-pressure cylinders hold about 150 bar (2,200 psi)."),
Q("Flux residue should be wiped off after brazing because…","it can hide leaks and cause corrosion",["it improves cooling","it is edible","it seals the joint"],"Residue attracts moisture and can corrode."),
];

X.dom=[
Q("A fridge compartment is normally kept at about…","3°C to 5°C",["−18°C","10°C to 15°C","20°C to 25°C"],"The freezer is about −18°C and the fridge is about 3–5°C."),
Q("A PTC starter needs how long to cool before a restart?","about 3 to 5 minutes",["a few seconds","one hour","none"],"A quick restart means the compressor will not start."),
Q("A domestic R600a fridge holds a charge of about…","30 to 150 g",["1 to 2 kg","5 to 10 kg","500 g to 1 kg"],"R600a is flammable, so charges are very small."),
Q("In a frost-free fridge the freezer is cold but the fridge is warm. Suspect…","the evaporator fan or a blocked air duct",["a bad door light","a low supply voltage only","too much insulation"],"Cold air from the freezer is not being circulated."),
Q("A capillary tube blocked by moisture gives…","intermittent cooling and low suction pressure",["very high suction pressure","normal frost","a hot evaporator"],"Moisture freezes at the tube end, then the ice melts and cooling returns."),
Q("An overcharged capillary-tube fridge shows…","frost on the suction line and a hot compressor",["no frost at all","a cold condenser","a quiet fridge"],"Excess liquid floods back."),
Q("The correct refrigerant charge for a fridge is found…","on the nameplate, in grams",["by guessing","from the fridge colour","by feel on the pipes"],"Charge by weight to the nameplate value."),
Q("After a power cut you should wait a few minutes before restarting because…","pressures need to equalise and the starter must cool",["the light will blow","the door seal needs time","the thermostat resets"],"Starting against high head pressure can trip the overload."),
Q("Water pooling at the bottom of a frost-free fridge suggests…","a blocked defrost drain",["a faulty compressor","a leaking door light","low refrigerant"],"Melt water cannot drain to the tray."),
Q("A defrost termination thermostat or fuse…","stops the defrost heater when the evaporator is warm",["starts the compressor","controls the light","measures door opening"],"It prevents overheating."),
];

X.psy=[
Q("At 100% relative humidity the dry-bulb, wet-bulb and dew point are…","all equal",["all different","dry-bulb lowest","wet-bulb highest"],"Saturated air cannot evaporate any more water."),
Q("On a sling psychrometer you read first the…","wet-bulb",["dry-bulb","humidity ratio","dew point"],"The wet-bulb reading changes fastest."),
Q("Cooling and dehumidifying moves the state point…","down and to the left",["up and to the right","straight up","horizontally right"],"Temperature falls and moisture is removed."),
Q("250 L/s of air loses 4 g/kg of moisture. Latent cooling (3.0 × L/s × Δg/kg) is…","3,000 W",["1,000 W","750 W","12,000 W"],"3.0 × 250 × 4 = 3,000 W."),
Q("Sensible heat is 2,400 W and latent is 800 W. The SHR is…","0.75",["0.33","3.0","1.33"],"SHR = 2,400 ÷ (2,400 + 800) = 0.75."),
Q("A seated person gives off roughly…","70 to 80 W of sensible heat",["7 W","700 W","5 kW"],"About 70–80 W sensible plus 40–60 W latent."),
Q("An oversized AC leaves a room clammy because…","it switches off before removing enough moisture",["it runs too long","it has no coil","it uses less power"],"Short cycling does little dehumidifying."),
Q("Mould grows readily above about…","70% relative humidity",["10% relative humidity","30% relative humidity","50% relative humidity"],"High humidity supports mould growth."),
Q("Sensible heating moves the state point…","to the right, and the RH falls",["to the left","straight down","straight up"],"Temperature rises with the same moisture, so RH falls."),
Q("Evaporative cooling follows…","a constant wet-bulb line",["a constant dry-bulb line","a vertical line","the saturation curve to the right"],"Adiabatic cooling by evaporation keeps wet-bulb constant."),
];

X.c1a=[
Q("A water extinguisher is suitable only for…","class A fires (solids such as wood and paper)",["electrical fires","oil fires","gas fires"],"Water conducts electricity and spreads oil fires."),
Q("Acetylene must not be drawn at a pressure above about…","1 bar (15 psi)",["5 bar","10 bar","100 bar"],"Above this it can become unstable."),
Q("Acetylene in a cylinder is dissolved in…","acetone",["water","oil","alcohol only"],"A porous filling holds the acetone, which holds the gas."),
Q("The acetylene cylinder valve should be opened no more than about…","1 to 1.5 turns",["5 turns","fully open and locked","a quarter turn only"],"So it can be shut quickly in an emergency."),
Q("An oxy-acetylene torch should be lit with…","a spark lighter",["a match","a cigarette lighter","a hot rod"],"A spark lighter is safe and keeps hands away from the flame."),
Q("A small pop and the flame going out is a…","backfire",["flashback","neutral flame","carburizing flame"],"A backfire is brief, a flashback burns back into the hose."),
Q("CPR (if trained) uses compressions and breaths in the ratio…","30 compressions to 2 breaths",["2 to 30","10 to 10","5 to 1"],"The standard adult ratio."),
Q("Before helping a casualty the first step is to…","check for danger to yourself and others",["move them at once","give them water","leave them"],"Make the area safe first."),
Q("A fire needs…","fuel, heat and oxygen",["fuel only","water and fuel","oil and nitrogen"],"Remove any one to put it out."),
Q("A yellow triangular sign means…","warning",["mandatory action","prohibition","safe condition"],"Yellow warns of danger."),
Q("A chemical splash in the eye should be flushed for at least…","15 minutes",["15 seconds","1 minute","2 minutes"],"Long flushing removes the chemical."),
];

X.c1b=[
Q("The compression ratio is…","absolute discharge pressure ÷ absolute suction pressure",["gauge discharge − gauge suction","suction ÷ discharge","discharge × suction"],"Use absolute pressures, adding atmospheric to each gauge reading."),
Q("Discharge 250 psig and suction 60 psig give a compression ratio of about…","3.5",["4.2","0.24","190"],"(250 + 14.7) ÷ (60 + 14.7) = 264.7 ÷ 74.7 = 3.54."),
Q("POE oil is used with…","HFC refrigerants such as R134a and R410A",["ammonia only","CFC refrigerants only","water"],"POE suits HFCs but absorbs moisture quickly."),
Q("Heat rejected by a condenser rating 3.5 kW cooling and 1.0 kW compressor input is…","4.5 kW",["2.5 kW","3.5 kW","35 kW"],"Heat rejected = cooling + compressor input = 4.5 kW."),
Q("Broken compressor valves cause…","poor pumping and low head pressure",["high head pressure","a frozen condenser","high superheat only"],"The compressor cannot build pressure."),
Q("Pressures equalise in a capillary tube system during the off cycle so that…","a simple motor can restart easily",["the oil is cleaned","the receiver fills","the filter dries"],"Equalised pressures mean low starting load."),
Q("An accumulator is fitted on the…","suction side",["discharge side","liquid line","drain"],"It catches liquid before the compressor."),
Q("On a horizontal suction line, the TXV bulb sits at about…","the 10 or 2 o’clock position",["the very bottom","the very top","any loose position"],"It avoids oil lying under the bulb and gives good contact."),
Q("A back-seated service valve means the stem is…","fully out, for normal running",["fully in","half open","removed"],"Back-seated opens the line to the system and closes the gauge port."),
Q("A moisture indicator in a sight glass changes colour when…","the system contains moisture",["the oil is low","the compressor starts","the filter is clean"],"The indicator reacts to water."),
Q("An air-cooled condensing temperature is typically how far above outside air?","about 10 to 20 K",["0 K","about 100 K","about 1 K"],"Heat only flows if there is a temperature difference."),
];

X.c1c=[
Q("Using the R-number rule (add 90), R22 contains…","1 carbon, 1 hydrogen, 2 fluorine and 1 chlorine",["2 carbon and 4 fluorine","3 carbon and 1 chlorine","only hydrogen"],"22 + 90 = 112: C1 H1 F2, and the remaining space holds chlorine."),
Q("The 400 series refrigerants are…","zeotropic blends",["azeotropic blends","organic compounds","inorganic compounds"],"R407C, R404A and R410A are in the 400 series."),
Q("R717 is…","ammonia",["carbon dioxide","isobutane","propane"],"700 + molecular mass 17 = R717."),
Q("A settled R410A system at 25°C is at about…","225 psig",["36 psig","82 psig","137 psig"],"R410A has a much higher pressure than R22 or R134a."),
Q("A vacuum removes moisture because it…","lowers the boiling point of water",["raises the pressure","freezes the water","dissolves the water"],"At very low pressure water boils at room temperature and is pumped out."),
Q("An electronic leak detector should be moved…","slowly, below the pipe",["quickly above the pipe","only at the end","with the unit running fast"],"Refrigerant is heavier than air and sinks."),
Q("Refrigerant vapor collects in…","low spaces such as pits",["the roof","open air","above the ceiling"],"It is heavier than air and can displace oxygen."),
Q("Charging by superheat is used for…","fixed metering devices such as capillary tubes",["systems with a TXV only","water chillers only","evaporative condensers"],"TXV systems use subcooling."),
Q("Why charge a refrigerant blend as liquid?","so the mix stays the same",["it is quicker","it is cheaper","it avoids oil"],"Vapor leaves the lighter parts first and changes the blend."),
];

X.c1d=[
Q("In a series circuit…","the same current flows through every part",["each part has the full supply voltage","the currents add","resistance is lower"],"There is only one path."),
Q("In a parallel circuit each branch has…","the full supply voltage",["the same current","half the voltage","zero voltage"],"Each branch is connected across the supply."),
Q("A 230 V supply feeds a 46 Ω and a 23 Ω heater in parallel. The total current is…","15 A",["5 A","10 A","3.3 A"],"5 A + 10 A = 15 A."),
Q("An RCD typically trips at about…","30 mA of leakage",["30 A","3 A","300 A"],"About 30 mA through the body can be dangerous."),
Q("A CSIR motor uses…","a start capacitor and a relay",["no capacitor","a permanent run capacitor only","a shaded pole"],"The start capacitor is switched out after starting."),
Q("To reverse a three-phase motor…","swap any two phases",["swap earth and neutral","change the capacitor","reverse the fuse"],"Swapping two phases reverses the rotating field."),
Q("A relay or contactor works by…","electromagnetism",["friction","heat expansion","chemical reaction"],"The coil makes a magnet that closes the contacts."),
Q("An RSIR (split-phase) motor has…","no capacitor",["two capacitors","a three-phase supply","a PTC and two capacitors"],"It uses a relay and the split winding only."),
Q("A bimetal strip in an overload protector…","bends as it heats and opens the circuit",["stores charge","measures voltage","filters noise"],"Two metals expand by different amounts."),
Q("A PTC in a fridge starter…","heats up and blocks the start winding",["cools the compressor","raises voltage","measures flow"],"It has low resistance cold and high resistance hot."),
];

X.c1e=[
Q("In heating 1 kg of ice at −10°C to steam at 110°C, the biggest share of heat is for…","boiling the water",["warming the ice","melting the ice","warming the steam"],"Latent heat of vaporization is 2,260 kJ/kg."),
Q("Warming 1 kg of ice by 10 K (c = 2.1 kJ/kg·K) needs…","21 kJ",["2.1 kJ","210 kJ","4.2 kJ"],"Q = 1 × 2.1 × 10 = 21 kJ."),
Q("A gauge reads 500 kPa. The absolute pressure is about…","601 kPa",["399 kPa","500 kPa","101 kPa"],"500 + 101.3 = 601.3 kPa."),
Q("1 bar is about…","100 kPa",["10 kPa","1,000 kPa","1 kPa"],"1 bar = 100 kPa (about 14.5 psi)."),
Q("A gas has P₁ = 100 kPa, V₁ = 3 m³, T₁ = 300 K and goes to 300 kPa at 360 K. V₂ is…","1.2 m³",["3 m³","0.5 m³","10 m³"],"V₂ = 100 × 3 × 360 ÷ (300 × 300) = 108,000 ÷ 90,000 = 1.2 m³."),
Q("Radiation differs from conduction and convection because it…","needs no medium",["needs a solid","needs a pump","needs a liquid"],"Radiation travels as rays even through space."),
Q("Heating a sealed rigid cylinder raises its pressure. This is…","Gay-Lussac’s law",["Boyle’s law","Charles’s law","Dalton’s law"],"Pressure rises in proportion to absolute temperature at constant volume."),
Q("In natural convection, warm air…","rises",["falls","stays still","turns to liquid"],"Warm air is less dense."),
Q("The specific heat of air is about…","1.0 kJ/kg·K",["4.2 kJ/kg·K","0.1 kJ/kg·K","10 kJ/kg·K"],"Air is about 1.0, water is 4.2."),
];

X.c1f=[
Q("Refrigeration pipe is copper because it is…","ductile, conducts heat well and brazes easily",["magnetic","brittle","rust-prone"],"These properties suit coils and joints."),
Q("Brass is an alloy of…","copper and zinc",["copper and tin","iron and carbon","lead and tin"],"Brass is copper + zinc. Bronze is copper + tin."),
Q("Corrosion between copper and aluminium in moisture is…","galvanic (bimetallic) corrosion",["rust","fatigue","creep"],"The more reactive metal, aluminium, corrodes."),
Q("Heating copper to dull red and cooling it makes it…","soft (annealed)",["harder","brittle","magnetic"],"Annealing relieves work hardening."),
Q("Good thermal insulation works by…","trapping still air in tiny cells",["conducting heat quickly","reflecting current","being very dense"],"Still air conducts heat poorly."),
Q("A vapor barrier on insulation stops…","water vapor reaching the cold surface",["heat leaving","noise","pests only"],"Moisture ruins the insulation and causes corrosion."),
Q("Stainless steel is used for cabinets because it…","resists rust",["is cheap","is magnetic","melts easily"],"It stays clean and does not corrode."),
Q("Aluminium is used for coil fins because it is…","light and a good heat conductor",["heavy","brittle","magnetic"],"Fins need to conduct heat."),
];

X.c1g=[
Q("A resistor with bands brown, black, red, gold is…","1,000 Ω ±5%",["102 Ω ±10%","10 Ω ±5%","1,002 Ω"],"10 × 100 = 1,000 Ω, and gold is ±5%."),
Q("In a bridge rectifier, four diodes…","change AC into DC",["change DC into AC","step up voltage","store charge"],"They pass current one way, whichever way the AC flows."),
Q("An LED needs a series resistor to…","limit the current",["raise the voltage","store charge","cool the LED"],"Without it the LED burns out."),
Q("Normal chilled water supply and return temperatures are about…","7°C and 12°C",["0°C and 5°C","20°C and 25°C","30°C and 35°C"],"A 5 K range is typical."),
Q("A chiller flow switch…","stops the chiller if water flow fails",["starts the pump","measures temperature","dries refrigerant"],"This protects the evaporator from freezing."),
Q("2 L/s of water cooled by 5 K gives a chiller load of about…","41.8 kW",["10 kW","4.2 kW","84 kW"],"2 × 4.18 × 5 = 41.8 kW."),
Q("A dry solder joint looks…","dull, cracked or balled up",["smooth and shiny","cone-shaped","clean and bright"],"It gives an intermittent fault."),
Q("An electrolytic capacitor fitted backward may…","burst",["work better","heat the board gently","do nothing"],"It has polarity."),
Q("An NTC thermistor is used as a…","temperature sensor",["voltage regulator","rectifier","switch"],"Its resistance changes with temperature."),
];

X.gp=[
Q("A tank 2 m × 1.5 m × 1 m holds about…","3,000 litres",["300 litres","30 litres","3 litres"],"Volume = 3 m³ and 1 m³ = 1,000 litres."),
Q("A GH₵ 2,000 AC with 15% off costs…","GH₵ 1,700",["GH₵ 300","GH₵ 1,985","GH₵ 1,500"],"2,000 × 85 ÷ 100 = 1,700."),
Q("On a 1:50 drawing, 8 cm is really…","4 m",["40 cm","0.16 m","8 m"],"8 × 50 = 400 cm = 4 m."),
Q("The average of 4, 6, 8 and 10 is…","7",["28","8","6"],"(4 + 6 + 8 + 10) ÷ 4 = 7."),
Q("1 m³ equals…","1,000 litres",["100 litres","10 litres","10,000 litres"],"A cube 1 m on a side holds 1,000 litres."),
Q("A red safety sign means…","prohibition or fire equipment",["warning","mandatory action","safe condition"],"Red is for prohibition and fire."),
Q("The volume of a cylinder is…","π × r² × height",["π × r × height","2π × r","r × height"],"Base area times height."),
Q("1 hour equals…","3,600 seconds",["360 seconds","60 seconds","86,400 seconds"],"60 × 60 = 3,600 s."),
Q("A price rises from 80 to 100. The increase is…","25%",["20%","80%","125%"],"(100 − 80) ÷ 80 × 100 = 25%."),
Q("A job report should include…","the fault found, work done and parts used",["only the price","the weather","nothing"],"It records what was done for the customer."),
];
})();
