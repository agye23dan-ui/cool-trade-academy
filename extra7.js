(function(){
Z.marks={
flames:['Three flames drawn and named','Neutral: sharp inner cone, used for brazing','Carburizing: feathery, excess acetylene','Oxidizing: short, hissing, excess oxygen'],
comp:['Sealed dome shown','C, S and R terminals labelled','Suction and discharge lines labelled','Process tube shown'],
cycle:['Eight parts drawn in the right order','Arrows show flow direction','High side and low side marked','Expansion valve is the change from hot to cold side'],
manifold:['Low (compound) and high gauges labelled','Two valves shown','Blue, yellow and red hoses','Yellow hose goes to pump or cylinder'],
symbols:['Resistor and capacitor correct','Switch, thermostat and overload correct','Motor and compressor correct','Capillary, drier and earth correct'],
fridgeckt:['L, N and earth shown','Thermostat and overload in series with the compressor','Compressor terminals C, S, R','Start relay and capacitor added'],
evap:['Bare tube serpentine','Plate surface','Finned coil with fins','Each type labelled'],
cond:['Air-cooled with fan','Water-cooled with water in and out','Evaporative with spray','Each type labelled'],
flow:['Capillary tube drawn as a thin coil','TEV with bulb on suction line','AEV drawn and labelled','Flow direction shown'],
tower:['Fan at the top','Hot water in at the top and cool water out at the bottom','Air in at the sides and warm moist air out at the top','Fill or spray shown'],
ph:['Dome with critical point','Points 1 to 4 in the right places','Evaporation, compression, condensation, expansion lines','Refrigeration effect and compression heat marked'],
psy:['Dry-bulb on the horizontal axis and humidity ratio on the vertical','Saturation curve','State point with dew point (horizontal) and wet-bulb line','RH curve labelled'],
elsym:['Diode and LED correct','Transistor with base, collector, emitter','Transformer with two coils','IC with pins'],
chill:['Chiller with evaporator','Cold water supply to the AHU','Warm water return with pump','Heat leaving through the condenser'],
splitinst:['Indoor and outdoor units','Wall hole sloping outward','Drain falling downhill all the way','Pipes insulated separately'],
splitwire:['Indoor and outdoor units','Terminals 1, 2, 3 and earth matched one to one','Supply entry labelled','Note to follow the unit diagram'],
threeph:['Three phases to the contactor','Overload after the contactor','Motor connected to the three outputs','Control circuit order: stop, start with hold-in, coil, overload contact']
};
const J=(t,tools,steps)=>({t:'C2 Job: '+t,tools,steps});
Y.jobs.push(
J('Test and repair an electric defrost circuit','Multimeter, clamp meter, timer, heaters, thermostat',['Isolate power and lock out','Test the heater element with an ohmmeter','Test the defrost thermostat for continuity at cold and warm','Test the defrost timer contacts','Restore power and force a defrost','Confirm the heater runs and stops at termination','Record readings']),
J('Install a split air conditioner','Mounting plate, drill, flaring set, torque wrench, vacuum pump, gauges',['Mark and fix the mounting plate level','Drill the wall hole sloping slightly outward','Route pipes, cable and drain with a continuous fall','Flare and connect pipes to torque; insulate separately','Pressure test with nitrogen and evacuate','Open service valves and wire up','Test run, check pressures and current','Clean up and instruct the customer']),
J('Wire and test a split unit','Multimeter, clamp meter, wiring diagram',['Read the unit’s own wiring diagram','Match terminals 1 to 1, 2 to 2, 3 to 3 and earth','Check all connections are tight','Measure supply voltage','Run the unit and measure current','Confirm fan, swing and compressor operate']),
J('Wire a three-phase motor starter','Contactor, overload, start and stop buttons, meter',['Isolate power and prove dead','Connect L1, L2, L3 to the contactor','Connect the overload and the motor','Wire the control circuit: stop, start, hold-in, coil','Set the overload to the nameplate current','Test with power on and check rotation']),
J('Recover refrigerant','Recovery machine, cylinder, scale, hoses, gauges',['Check the cylinder is approved and not overfilled','Connect hoses and purge','Start the recovery machine','Watch gauges until the system reaches a vacuum','Close valves and disconnect','Record the amount recovered']),
J('Retrofit a system to another refrigerant','Recovery set, new drier, correct oil, scale, vacuum pump',['Record the original refrigerant and condition','Recover the refrigerant','Change the oil and filter drier as required','Evacuate and leak test','Charge the correct weight of the new refrigerant','Relabel the system and record the change']),
J('Replace a circuit board or remote','Screwdrivers, anti-static strap, camera, multimeter',['Isolate power','Photograph all wiring and connectors','Discharge static','Match the part number and fit the new board','Reconnect exactly as photographed','Test all functions']),
J('Insulate pipes and fit a condensate drain','Foam sleeves, tape, adhesive, drain hose',['Slide slit foam over suction and liquid pipes','Seal seams and joints with tape or adhesive','Protect outdoor runs from sunlight','Run the drain with a continuous fall','Pour water through the drain to test it','Check there are no gaps or drips'])
);
})();
