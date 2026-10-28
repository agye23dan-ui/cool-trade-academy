(function(){
const Q=(q,c,w,y)=>[q,[c,...w],0,y];
const X=window.QX=window.QX||{};

X.c2a=[
Q("Off-cycle defrost suits rooms kept above about…","2°C",["−20°C","−5°C","−30°C"],"The warm room air melts the frost when the compressor stops."),
Q("A fan delay after defrost is used so that…","the last water freezes on the coil instead of blowing into the room",["the compressor cools down","the filter dries","the drain heats"],"It stops wet air and droplets entering the room."),
Q("A drain run of 8 m should fall at least…","8 cm",["80 cm","0.8 cm","8 mm"],"About 1 cm per metre of length."),
Q("An acid test kit after a burn-out checks…","the acidity of the compressor oil",["the voltage","the pipe size","the air flow"],"Burnt oil is acidic and dirty."),
Q("After a burn-out clean-up, the oil and driers are checked after about…","24 to 48 hours of running",["5 minutes","1 week","1 year"],"If the oil is still dirty, change the driers again."),
Q("A trap in a drain line stops…","air being sucked back into the unit through the drain",["water entering the room","the pipe freezing","the filter clogging"],"The trap holds a water seal."),
Q("The main drawback of hot-gas defrost is…","it needs extra valves and pipework",["it is slow","it uses water","it needs a heater"],"It is fast and efficient but more complex."),
Q("Moisture trapped in insulation causes…","corrosion under the insulation",["better insulation","lower pressure","lower current"],"Wet insulation holds water against the pipe."),
Q("Electric defrost is common on…","freezers and domestic frost-free fridges",["car AC only","chillers only","cooling towers"],"Heaters on a timer melt the frost."),
Q("When adding vapor to a running system, the manifold valve is throttled to…","stop liquid entering the compressor",["speed up charging","cool the cylinder","check the oil"],"Liquid slugging can wreck the compressor."),
];

X.c2b=[
Q("Too little air flow over a ducted evaporator causes…","an iced coil",["a hot coil","more cooling","high suction pressure"],"The coil gets too cold and freezes."),
Q("A retrofit from R12 to R134a is usually charged with about…","80 to 90% of the original R12 weight",["200% of the R12 weight","10% of the R12 weight","exactly 100%"],"R134a needs a smaller charge, adjusted by performance."),
Q("Typical R134a car AC low-side pressure is about…","25 to 35 psi",["250 to 350 psi","2.5 to 3.5 psi","500 psi"],"At about 27°C ambient, engine at fast idle."),
Q("An orifice tube system uses a…","accumulator",["receiver-drier","float valve","oil separator"],"A TXV system uses a receiver-drier."),
Q("Mineral oil is removed in a retrofit because…","it does not mix well with R134a",["it is expensive","it is blue","it freezes"],"POE or PAG oil is used instead."),
Q("New service fittings in a retrofit…","stop R12 and R134a equipment being mixed up",["lower pressure","improve flow","remove oil"],"Different fittings prevent cross-contamination."),
Q("A car AC clutch that cycles on and off quickly suggests…","low refrigerant charge",["a full charge","a good drain","a clean filter"],"Low pressure repeatedly trips the pressure switch."),
Q("An outdoor coil should be washed…","from the inside out with low-pressure water",["with a high-pressure jet from outside","with petrol","dry only"],"This pushes dirt out the way it came in and does not bend fins."),
Q("A receiver-drier or accumulator is replaced…","whenever the system has been opened",["every day","never","only if blue"],"It holds moisture that would damage the system."),
];

X.c2c=[
Q("A wall has layers with R = 0.15, 1.8 and 0.10 m²K/W. Its U-value is about…","0.49 W/m²K",["2.05 W/m²K","0.05 W/m²K","4.9 W/m²K"],"R total = 2.05. U = 1 ÷ 2.05 = 0.49."),
Q("500 kg of fruit (c = 3.6) cooled by 20 K in 10 hours is a product load of…","1.0 kW",["36 kW","0.1 kW","3.6 kW"],"Q = 500 × 3.6 × 20 = 36,000 kJ. 36,000 kJ ÷ 36,000 s = 1.0 kW."),
Q("A rigid vessel at 300 kPa and 300 K is heated to 360 K. The pressure becomes…","360 kPa",["250 kPa","300 kPa","450 kPa"],"P₂ = 300 × 360 ÷ 300 = 360 kPa."),
Q("On the Mollier chart, expansion in the metering device is at…","constant enthalpy, a vertical line",["constant pressure","constant temperature","constant entropy only"],"No heat or work is exchanged, so enthalpy is unchanged."),
Q("Heat rejected in the condenser per kg is…","h₂ − h₃",["h₁ − h₄","h₂ − h₁","h₃ − h₄"],"It is the enthalpy drop from discharge to condenser outlet."),
Q("Gas laws must use…","absolute pressure and kelvin",["gauge pressure and °C","gauge pressure and °F","any units"],"Gauge and Celsius give wrong answers."),
Q("A step-down transformer has 2,000 primary turns on 230 V. For 23 V the secondary has…","200 turns",["20 turns","2,000 turns","20,000 turns"],"Ns = 2,000 × 23 ÷ 230 = 200."),
Q("6 Ω in parallel with 3 Ω, in series with 4 Ω, on 12 V. The current is…","2 A",["1 A","3 A","12 A"],"Parallel part 2 Ω, total 6 Ω, I = 12 ÷ 6 = 2 A."),
Q("Long runs of copper pipe need…","a loop or bend to allow expansion",["rigid fixing at both ends","no support","extra solder"],"Pipe grows with heat and can strain joints."),
];

X.c2d=[
Q("One bacterium doubling every 20 minutes for 4 hours gives about…","4,096 bacteria",["12 bacteria","240 bacteria","80 bacteria"],"12 doublings: 2¹² = 4,096."),
Q("Pre-cooling produce is done to…","remove field heat quickly",["add moisture","kill all bacteria","wax the skin"],"It lets the cold room work less."),
Q("FIFO means…","first in, first out",["fast in, fast out","food in, food out","freeze in, freeze out"],"Use the oldest stock first."),
Q("Quick freezing is better than slow freezing because it…","makes small ice crystals that damage food less",["makes large ice crystals","uses less power","dries food"],"Large crystals break cells and the food leaks when thawed."),
Q("Pathogens can make food unsafe…","without changing its smell or look",["only if it smells","only if it is green","never"],"Never judge safety by smell."),
Q("Frozen food should be thawed…","in the fridge",["on the counter in warm air","in hot water","in the sun"],"The surface should not sit in the danger zone."),
Q("Raw meat should be stored…","on the lowest shelves",["on the top shelf","above cooked food","at room temperature"],"Drips cannot fall onto other food."),
Q("Fruit and vegetables keep best at about…","85 to 95% relative humidity",["10%","30%","100% with water on them"],"Too dry and they shrivel, too wet and mould grows."),
Q("Before starting a repair for a customer you should…","explain the fault and give the price",["start without telling them","fit extra parts","leave a note only"],"Good customer care includes a clear price first."),
Q("Bananas are best stored at about…","13°C, because cold damages them",["0°C","−18°C","−5°C"],"Some tropical fruit suffers chilling injury."),
];

X.inta=[
Q("3 kg of R410A (GWP about 2,100) is equal to about…","6.3 tonnes of CO₂",["0.0063 tonnes of CO₂","630 tonnes of CO₂","63 tonnes of CO₂"],"3 × 2,100 ÷ 1,000 = 6.3 tonnes."),
Q("Refrigerant vapor leaks tend to collect in…","low-lying spaces",["high ceilings","open air only","the compressor oil"],"It is heavier than air."),
Q("The lower flammable limit (LFL) is…","the lowest concentration that can burn",["the pressure rating","the boiling point","the oil content"],"Below this the mix cannot burn."),
Q("Before brazing on a flammable refrigerant system you must…","recover and purge it with nitrogen",["leave the charge in","add oxygen","turn the power on"],"Remove all refrigerant and confirm the system is safe."),
Q("Flames near refrigerant are dangerous because…","heat can break it into toxic and corrosive products",["it makes the gas colder","it reduces the pressure","it is harmless"],"Do not smoke or use flames in leaks."),
Q("Ammonia (R717) is…","lighter than air and has a sharp warning smell",["heavier than air and odourless","non-toxic","non-flammable only"],"It needs trained staff and breathing apparatus."),
Q("Chlorine in CFCs and HCFCs is the reason for…","ozone depletion",["global warming alone","flammability","high pressure"],"Chlorine destroys ozone."),
Q("Before scrapping an old fridge you must…","recover the refrigerant",["cut the pipes","burn the unit","bury it"],"Never release it to the air."),
Q("Reclaimed refrigerant is processed…","at an approved facility to new-product standard",["on site by the technician","by the customer","in a bucket"],"It is tested to purity standards."),
];

X.intb=[
Q("A unit gives 3.5 kW cooling for 1.0 kW input. Its EER is about…","11.9",["3.5","35","1.0"],"3.5 × 3,412 = 11,942 BTU/h ÷ 1,000 W = 11.9."),
Q("0.6 m³/s of air with a 12 kJ/kg enthalpy drop gives a cooling of about…","8.6 kW",["7.2 kW","72 kW","0.86 kW"],"1.2 × 0.6 × 12 = 8.64 kW."),
Q("Oil traps (U-bends) at the bottom of long suction risers help…","oil return to the compressor",["cool the refrigerant","dry the vapor","reduce noise only"],"They collect oil and sweep it up the riser."),
Q("Dew point at suction 3°C and line temperature 9°C gives a superheat of…","6 K",["12 K","3 K","27 K"],"9 − 3 = 6 K."),
Q("In a standing test, a pressure fall that is not due to temperature means…","a leak",["moisture","a full charge","a good seal"],"Compare with ambient temperature changes."),
Q("Horizontal suction lines should slope…","slightly towards the compressor",["away from the compressor","upwards at the end","randomly"],"Oil then drains back to the compressor."),
Q("Inverter units get a high SEER because…","they run slowly at part load",["they run at full speed all the time","they use less refrigerant only","they have no compressor"],"Part-load running is more efficient."),
Q("The total capacity check from air uses…","airflow and the enthalpy change across the coil",["only the filter pressure drop","only the room size","the noise level"],"Q = 1.2 × airflow × Δh."),
];

X.intc=[
Q("In a cooling sequence the contactor coil is energised after…","the thermostat closes and the safety switches are satisfied",["the compressor starts","the filter is cleaned","the remote is pressed twice"],"Safety switches are in the control circuit."),
Q("A megohmmeter test on a 230 V motor often uses…","500 V DC",["5 V DC","50,000 V DC","230 V AC"],"A DC test voltage reveals weak insulation."),
Q("The minimum insulation reading is often at least…","1 MΩ",["1 Ω","10 Ω","1 kΩ"],"Follow the maker’s figure."),
Q("Three line voltages should match each other within about…","2 to 3%",["20 to 30%","50%","none required"],"Unbalance overheats motors."),
Q("After isolating an inverter, you wait the label time and then…","measure the DC bus voltage",["touch the board","switch on again","remove the earth"],"Prove it is discharged."),
Q("Building control signals are often…","0 to 10 V or 4 to 20 mA",["400 V AC","0 to 1 kV","12 V AC only"],"Standard analogue signals."),
Q("After a megohmmeter test, the winding should be…","discharged by touching the lead to earth",["left charged","connected to live","painted"],"The test charges the winding."),
Q("A blown control transformer fuse can…","stop the whole unit",["speed up the fan","raise the voltage","do nothing"],"The control circuit loses power."),
];

X.intd=[
Q("A room has sensible gains of 2,160 W, latent 220 W, and a 10% margin. The load is about…","2.6 kW",["2.2 kW","3.2 kW","26 kW"],"(2,160 + 220) × 1.10 = 2,618 W."),
Q("A 5 m × 4 m × 3 m room with 150 L/s of supply air has about…","9 air changes per hour",["1 air change","3 air changes","90 air changes"],"150 L/s = 540 m³/h. 540 ÷ 60 = 9."),
Q("In the afternoon, glass facing which direction usually gains most solar heat?","west",["north","south","glass in full shade"],"The low afternoon sun shines in from the west."),
Q("Typical main duct velocity in comfort systems is roughly…","3 to 5 m/s",["30 to 50 m/s","0.3 to 0.5 m/s","300 m/s"],"Faster means noise and pressure loss."),
Q("1 L/s equals…","3.6 m³/h",["0.36 m³/h","36 m³/h","360 m³/h"],"1 L/s × 3,600 s ÷ 1,000 = 3.6 m³/h."),
Q("Supply air without a return path causes…","rooms to be pressurised and doors to whistle",["lower power use","quieter running","more cooling"],"Air needs a route back."),
Q("A load calculation usually adds a margin of about…","5 to 10%",["50%","100%","none"],"Enough to cover small errors."),
Q("4,320 W is about…","14,740 BTU/h",["1,266 BTU/h","4,320 BTU/h","43,200 BTU/h"],"4,320 × 3.412 = 14,740."),
];

X.advcold=[
Q("A daily load of 120 kWh and 18 hours of running needs about…","6.7 kW",["2.2 kW","120 kW","21.6 kW"],"120 ÷ 18 = 6.67 kW."),
Q("Cold room equipment is sized for 16 to 18 hours of running because…","defrost and pull-down need time",["it is cheaper","the compressor cannot run longer","the rules forbid it"],"24 hours of running leaves no margin."),
Q("A leaking solenoid valve causes…","short cycling on the low-pressure switch",["a very low suction","a quiet room","a full receiver"],"Refrigerant leaks into the evaporator."),
Q("R404A is being phased down mainly because of its…","high GWP",["low pressure","flammability","toxicity"],"Alternatives such as R448A, R449A, R290 and R744 are used."),
Q("Ice on the coil and fins often points to…","a failed defrost heater, timer or sensor",["too much refrigerant","a clean filter","a cold room door left shut"],"The defrost is not clearing the frost."),
Q("A failed crankcase heater can cause…","liquid refrigerant migrating to the compressor oil",["a high pressure trip","a hot condenser","an iced door"],"Oil gets diluted and the compressor starts with liquid."),
Q("Cold room temperatures should be…","logged daily, with alarms",["checked once a year","never recorded","guessed"],"Records show food safety."),
Q("In a pump-down sequence, the compressor stops when the…","low-pressure switch opens",["thermostat closes","door opens","fan starts"],"Pressure in the evaporator falls to the cut-out value."),
];

X.advvrf=[
Q("An outdoor unit of 28 kW with a 130% limit can connect up to…","36.4 kW of indoor units",["28 kW","21.5 kW","130 kW"],"28 × 1.30 = 36.4 kW."),
Q("Extra charge: 30 m at 26 g/m plus 20 m at 56 g/m is…","1,900 g",["820 g","1,120 g","780 g"],"780 + 1,120 = 1,900 g."),
Q("Smallest room 40 m³ and R410A limit 0.44 kg/m³ gives a maximum charge of…","17.6 kg",["0.011 kg","1.76 kg","176 kg"],"0.44 × 40 = 17.6 kg."),
Q("VRF communication wiring should be…","kept away from power cables, in the order shown",["twisted with the power cable","shared with earth","left unconnected"],"Interference and wrong order cause faults."),
Q("Before charging a VRF system you…","pressure test and evacuate below 500 microns",["open the valves only","switch on the compressor","charge directly"],"Air and moisture must be removed first."),
Q("Pipe sizes in a VRF branch system…","get smaller after each branch",["get larger after each branch","stay the same","are not important"],"The flow reduces after each branch."),
Q("Total connected indoor capacity can exceed the outdoor capacity because…","not all rooms need full cooling at once",["indoor units use less power","the compressor is bigger","it is a rule only"],"This is the diversity factor."),
Q("The refrigerant concentration limit protects people when…","a large leak goes into a small room",["the unit runs hot","the filter is dirty","the cable is long"],"Limits depend on the refrigerant and room volume."),
];

X.advhp=[
Q("A heat pump delivers 9 kW of heat with COP 3. Electrical input is…","3 kW",["27 kW","9 kW","0.33 kW"],"9 ÷ 3 = 3 kW."),
Q("In that case, the heat taken from the outdoors is…","6 kW",["9 kW","3 kW","12 kW"],"9 − 3 = 6 kW."),
Q("The heat pump costs less to run than a resistance heater giving 9 kW by…","one third",["half","the same","double"],"COP 3 means one third of the electricity."),
Q("A reversing valve stuck in mid-position shows…","both coils at similar temperatures and poor capacity",["very high capacity","no refrigerant","a cold compressor only"],"Refrigerant flows to both coils."),
Q("As the outdoor temperature falls, heat pump capacity…","falls",["rises","stays the same","doubles"],"The COP also falls as it gets colder."),
Q("A ground-source heat pump has a stable COP because…","ground temperature stays steady",["it is bigger","it has no compressor","it uses ice"],"A few metres down, temperature changes little."),
Q("The outdoor unit is raised in cold climates so that…","melt water drains and does not freeze below it",["it is quieter","it gets more sun","the pipes are shorter"],"Ice under the unit blocks the drain."),
Q("Inverter heat pumps work better in cold weather because…","they can speed up to meet the load",["they use more refrigerant","they have no defrost","they use water"],"Higher speed gives more capacity."),
];

X.advinv=[
Q("A 2-pole motor at 60 Hz turns at about…","3,600 rpm",["1,800 rpm","60 rpm","7,200 rpm"],"120 × 60 ÷ 2 = 3,600."),
Q("The same motor at 30 Hz turns at about…","1,800 rpm",["3,600 rpm","900 rpm","60 rpm"],"120 × 30 ÷ 2 = 1,800."),
Q("A typical NTC thermistor reads about…","10 kΩ at 25°C",["10 Ω at 25°C","1 MΩ at 25°C","0 Ω at 25°C"],"Always compare with the maker’s table."),
Q("A power module diode test…","gives similar readings across matching pairs",["gives infinite everywhere","reads the same as mains","needs power on"],"A big difference suggests a faulty module."),
Q("An inverter compressor’s starting current is…","only a little above its running current",["many times higher","zero","the same as a fixed-speed one"],"The drive ramps up slowly."),
Q("Before repairs on an inverter unit, you should first…","read the error code",["replace the board","replace the compressor","disconnect the earth"],"The code points to the sensor, module, communication or refrigerant side."),
Q("Communication cables on an inverter unit should be…","kept away from power cables",["bundled with them","left unconnected","used for earth"],"Drive noise causes communication faults."),
Q("Why weigh in the exact charge on an inverter system?","control sensors are sensitive to over- and under-charge",["it is a legal rule only","oil needs it","it saves time"],"Control logic assumes the correct charge."),
Q("The peak voltage of 230 V RMS AC is about…","325 V",["230 V","160 V","460 V"],"230 × 1.414 = 325 V, which charges the DC bus."),
];
})();
