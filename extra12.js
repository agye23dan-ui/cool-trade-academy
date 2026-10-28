(function(){
// Step-by-step worked examples. Pattern: Formula, Given, Substitute, Calculate, Answer.
const W=(t,f,g,st,a)=>`<div class="wk"><b>Worked example: ${t}</b><ol><li><b>Formula:</b> ${f}</li><li><b>Given:</b> ${g}</li>${st.map(x=>`<li>${x}</li>`).join('')}</ol><p class="ans">✔ Answer: ${a}</p></div>`;
const H=t=>`<h3>${t}</h3>`;
const ST=(o,c)=>[`<b>Substitute:</b> ${o}`,`<b>Calculate:</b> ${c}`];
const n={},q={},w={};

n.heat=H('Calculation toolkit: every step shown')+
`<p>Method for every calculation: <b>1) write the formula, 2) list what you are given, 3) substitute the numbers, 4) calculate one step at a time, 5) state the answer with its unit.</b></p>`+
W('gauge to absolute pressure','absolute = gauge + atmospheric','gauge reading 100 psig, atmosphere ≈ 14.7 psi',ST('absolute = 100 + 14.7','100 + 14.7 = 114.7'),'114.7 psi absolute (psia). In bar: 7 bar gauge + 1 bar = 8 bar absolute.')+
W('sensible heat of water','Q = m × c × ΔT (kJ = kg × kJ/kg·K × K)','m = 10 kg, c = 4.2 kJ/kg·K, ΔT = 20 K',ST('Q = 10 × 4.2 × 20','10 × 4.2 = 42, then 42 × 20 = 840'),'840 kJ.')+
W('latent heat of boiling','Q = m × L','2 kg of water at 100°C, L = 2,260 kJ/kg',ST('Q = 2 × 2,260','2 × 2,260 = 4,520'),'4,520 kJ. For comparison, warming the same 2 kg from 20°C to 100°C needs 2 × 4.2 × 80 = 672 kJ, so boiling takes about 6.7 times more heat (4,520 ÷ 672).')+
W('tons of refrigeration to kW and BTU/h','BTU/h = TR × 12,000; kW = BTU/h ÷ 3,412','a 3 TR system',['<b>Step 1:</b> 3 × 12,000 = 36,000 BTU/h','<b>Step 2:</b> 36,000 ÷ 3,412 = 10.55'],'36,000 BTU/h, which is about 10.6 kW.');

q['A gauge reads 0 psig. The absolute pressure is about…']='Absolute = gauge + atmospheric = 0 + 14.7 = 14.7 psi.';
q['Heat needed to warm 5 kg of water by 10 K (c = 4.2) is…']='Q = m × c × ΔT = 5 × 4.2 × 10. 5 × 4.2 = 21, then 21 × 10 = 210 kJ.';
q['1 ton of refrigeration equals…']='1 TR = 12,000 BTU/h. In kW: 12,000 ÷ 3,412 = 3.5 kW.';
q['3.5 kW of cooling is roughly…']='3.5 × 3,412 = 11,942 BTU/h. Then 11,942 ÷ 12,000 = 0.995, so about 1 TR.';
q['A 2.5 kW cooling load is about…']='2.5 × 3,412: 2 × 3,412 = 6,824 and 0.5 × 3,412 = 1,706. Add them: 8,530 BTU/h.';
q['A 24,000 BTU/h air conditioner is…']='TR = BTU/h ÷ 12,000 = 24,000 ÷ 12,000 = 2 TR.';
q['A 15 m² room at 550 BTU/h per m² needs about…']='BTU/h = area × 550 = 15 × 550 = 8,250 BTU/h. Choose the next standard size up: 9,000 BTU/h (1 HP).';
q['Sensible heat for 250 L/s with an 8 K split is about…']='W = 1.2 × L/s × ΔT = 1.2 × 250 × 8. 1.2 × 250 = 300, then 300 × 8 = 2,400 W.';

n.ref=H('Superheat and subcooling: worked examples')+
W('superheat','superheat = suction line temperature − evaporating saturation temperature','gauge pressure converts on the PT chart to a saturation temperature of 5°C; the suction line reads 11°C',ST('superheat = 11 − 5','11 − 5 = 6'),'6 K of superheat, inside the 5 to 12 K target. The vapor is dry.')+
W('subcooling','subcooling = condensing saturation temperature − liquid line temperature','head pressure converts to 45°C; the liquid line reads 38°C',ST('subcooling = 45 − 38','45 − 38 = 7'),'7 K of subcooling, inside the 5 to 10 K target. The liquid is fully condensed.')+
`<p class="note">If the superheat came out at 2 K you would suspect overcharge or poor airflow. If it came out at 20 K you would suspect undercharge or a restriction.</p>`;

n.elec=H('Electrical calculations: worked examples')+
W('current from voltage and resistance','I = V ÷ R','V = 230 V, R = 46 Ω heater element',ST('I = 230 ÷ 46','230 ÷ 46 = 5'),'5 A.')+
W('resistance from voltage and current','R = V ÷ I','V = 12 V, I = 0.5 A',ST('R = 12 ÷ 0.5','12 ÷ 0.5 = 24'),'24 Ω.')+
W('voltage from current and resistance','V = I × R','I = 3 A, R = 10 Ω',ST('V = 3 × 10','3 × 10 = 30'),'30 V.')+
W('power of a motor with power factor','P = V × I × power factor','V = 230 V, I = 4 A, power factor = 0.8',ST('P = 230 × 4 × 0.8','230 × 4 = 920, then 920 × 0.8 = 736'),'736 W.')+
W('energy and running cost','kWh = kW × hours; cost = kWh × tariff','compressor 1.2 kW, runs 8 h per day, example tariff GH₵ 1.50 per kWh',['<b>Step 1:</b> energy = 1.2 × 8 = 9.6 kWh','<b>Step 2:</b> cost = 9.6 × 1.50 = 14.40'],'9.6 kWh per day, costing GH₵ 14.40 per day.')+
W('checking compressor windings','S–R = C–S + C–R','C–S reads 12 Ω and C–R reads 4 Ω',ST('S–R = 12 + 4','12 + 4 = 16'),'The S–R reading should be about 16 Ω. If it is not, a winding is faulty.');

n.inst=H('Installation calculations: worked examples')+
W('quick room sizing','BTU/h = floor area × 500 to 600','room 3 m × 4 m, use 600 BTU/h per m² (sunny room)',['<b>Step 1:</b> area = 3 × 4 = 12 m²','<b>Step 2:</b> 12 × 600 = 7,200 BTU/h','<b>Step 3:</b> next standard size up'],'7,200 BTU/h, so choose a 9,000 BTU/h (1 HP) unit.')+
W('extra refrigerant for long pipework','extra charge = extra length × grams per metre','standard pipe run 5 m, installed run 8 m, manufacturer allows 15 g per extra metre (use the figure in your manual)',['<b>Step 1:</b> extra length = 8 − 5 = 3 m','<b>Step 2:</b> extra charge = 3 × 15 = 45 g'],'Add 45 g to the factory charge.');

n.psy=H('Air heat and humidity: worked examples')+
W('sensible heat carried by air','W = 1.2 × airflow (L/s) × ΔT (K)','250 L/s, ΔT = 8 K',ST('W = 1.2 × 250 × 8','1.2 × 250 = 300, then 300 × 8 = 2,400'),'2,400 W (2.4 kW). In BTU/h: 2,400 × 3.412 ≈ 8,190.')+
W('sensible heat ratio','SHR = sensible ÷ (sensible + latent)','sensible 2,400 W, latent 800 W',['<b>Step 1:</b> total = 2,400 + 800 = 3,200 W','<b>Step 2:</b> SHR = 2,400 ÷ 3,200 = 0.75'],'SHR = 0.75. Three quarters of the cooling is for temperature and one quarter removes moisture.');

n.c1d=H('Series and parallel: worked examples')+
W('resistors in series','R = R₁ + R₂','10 Ω and 20 Ω',ST('R = 10 + 20','10 + 20 = 30'),'30 Ω.')+
W('two equal resistors in parallel','1/R = 1/R₁ + 1/R₂','6 Ω and 6 Ω',['<b>Substitute:</b> 1/R = 1/6 + 1/6','<b>Add the fractions:</b> 1/6 + 1/6 = 2/6','<b>Flip:</b> R = 6 ÷ 2 = 3'],'3 Ω (half of one resistor).')+
W('two different resistors in parallel','1/R = 1/R₁ + 1/R₂ (shortcut: R = R₁ × R₂ ÷ (R₁ + R₂))','6 Ω and 3 Ω',['<b>Substitute:</b> 1/R = 1/6 + 1/3','<b>Common denominator:</b> 1/3 = 2/6, so 1/6 + 2/6 = 3/6 = 1/2','<b>Flip:</b> R = 2','<b>Check with the shortcut:</b> (6 × 3) ÷ (6 + 3) = 18 ÷ 9 = 2'],'2 Ω.')+
W('capacitors in parallel','C = C₁ + C₂','20 µF and 20 µF',ST('C = 20 + 20','20 + 20 = 40'),'40 µF.')+
W('capacitors in series','1/C = 1/C₁ + 1/C₂','10 µF and 10 µF',['<b>Substitute:</b> 1/C = 1/10 + 1/10','<b>Add the fractions:</b> 2/10','<b>Flip:</b> C = 10 ÷ 2 = 5'],'5 µF.')+
W('power','P = V × I','230 V at 5 A',ST('P = 230 × 5','230 × 5 = 1,150'),'1,150 W.');
q['Two 6 Ω resistors in parallel give…']='1/R = 1/6 + 1/6 = 2/6, so R = 6 ÷ 2 = 3 Ω.';
q['Two 20 µF capacitors in parallel give…']='Parallel capacitances add: 20 + 20 = 40 µF.';
q['230 V at 5 A is…']='P = V × I = 230 × 5 = 1,150 W.';
q['A 10 Ω and a 20 Ω resistor in series give…']='Series resistances add: 10 + 20 = 30 Ω.';
q['Two 10 µF capacitors in series give…']='1/C = 1/10 + 1/10 = 2/10, so C = 10 ÷ 2 = 5 µF.';
w['A 230 V fridge draws 1.5 A. Find its power.']='<ol><li><b>Formula:</b> P = V × I</li><li><b>Given:</b> V = 230 V, I = 1.5 A</li><li><b>Substitute:</b> P = 230 × 1.5</li><li><b>Calculate:</b> 230 × 1.5 = 345</li></ol><p><b>Answer: 345 W</b> (a little less in practice if you include power factor).</p>';
w['Find the current through a 46 Ω element on 230 V.']='<ol><li><b>Formula:</b> I = V ÷ R</li><li><b>Given:</b> V = 230 V, R = 46 Ω</li><li><b>Substitute:</b> I = 230 ÷ 46</li><li><b>Calculate:</b> 230 ÷ 46 = 5</li></ol><p><b>Answer: 5 A</b></p>';

n.c1e=H('Science calculations: worked examples')+
W('°C to °F','°F = (9/5 × °C) + 32','25°C',['<b>Substitute:</b> (9/5 × 25) + 32','<b>Calculate:</b> 9/5 × 25 = 45, then 45 + 32 = 77'],'77°F.')+
W('°F to °C','°C = (°F − 32) × 5/9','77°F',['<b>Substitute:</b> (77 − 32) × 5/9','<b>Calculate:</b> 77 − 32 = 45; 45 × 5 = 225; 225 ÷ 9 = 25'],'25°C.')+
W('°C to kelvin','K = °C + 273','20°C',ST('K = 20 + 273','20 + 273 = 293'),'293 K.')+
W('Boyle’s law (constant temperature)','P₁ × V₁ = P₂ × V₂, so P₂ = P₁ × V₁ ÷ V₂','2 m³ at 100 kPa compressed to 1 m³',ST('P₂ = 100 × 2 ÷ 1','100 × 2 = 200, then 200 ÷ 1 = 200'),'200 kPa.')+
W('general gas law','P₁V₁ ÷ T₁ = P₂V₂ ÷ T₂, so V₂ = P₁ × V₁ × T₂ ÷ (T₁ × P₂) (absolute P and T)','P₁ = 100 kPa, V₁ = 3 m³, T₁ = 300 K, P₂ = 300 kPa, T₂ = 360 K',['<b>Substitute:</b> V₂ = 100 × 3 × 360 ÷ (300 × 300)','<b>Top line:</b> 100 × 3 = 300; 300 × 360 = 108,000','<b>Bottom line:</b> 300 × 300 = 90,000','<b>Divide:</b> 108,000 ÷ 90,000 = 1.2'],'1.2 m³.')+
W('latent heat of melting','Q = m × L','2 kg of ice, L = 334 kJ/kg',ST('Q = 2 × 334','2 × 334 = 668'),'668 kJ.')+
W('sensible heat with a temperature change','Q = m × c × ΔT, where ΔT = final − start','5 kg of water from 20°C to 60°C, c = 4.2 kJ/kg·K',['<b>Step 1:</b> ΔT = 60 − 20 = 40 K','<b>Substitute:</b> Q = 5 × 4.2 × 40','<b>Calculate:</b> 5 × 4.2 = 21, then 21 × 40 = 840'],'840 kJ.');
q['20°C in kelvin is…']='K = °C + 273 = 20 + 273 = 293 K.';
q['2 m³ at 100 kPa is compressed to 1 m³ at constant T. New pressure…']='Boyle: P₂ = P₁ × V₁ ÷ V₂ = 100 × 2 ÷ 1 = 200 kPa.';
q['25°C in Fahrenheit is…']='(9/5 × 25) + 32: 9/5 × 25 = 45, then 45 + 32 = 77°F.';
q['Melting 2 kg of ice (L = 334 kJ/kg) needs…']='Q = m × L = 2 × 334 = 668 kJ.';
q['77°F in Celsius is…']='°C = (°F − 32) × 5/9 = (77 − 32) × 5 ÷ 9 = 45 × 5 ÷ 9 = 225 ÷ 9 = 25°C.';
w['Find the heat needed to warm 5 kg of water from 20°C to 60°C.']='<ol><li><b>Formula:</b> Q = m × c × ΔT</li><li><b>Given:</b> m = 5 kg, c = 4.2 kJ/kg·K, start 20°C, end 60°C</li><li><b>Temperature change:</b> ΔT = 60 − 20 = 40 K</li><li><b>Substitute:</b> Q = 5 × 4.2 × 40</li><li><b>Calculate:</b> 5 × 4.2 = 21, then 21 × 40 = 840</li></ol><p><b>Answer: 840 kJ</b></p>';

n.gp=H('Numeracy: worked examples')+
W('percentage of a number','part = whole × percent ÷ 100','25% of 80',ST('80 × 25 ÷ 100','80 × 25 = 2,000, then 2,000 ÷ 100 = 20'),'20.')+
W('area of a room','area = length × width','4 m by 5 m',ST('4 × 5','4 × 5 = 20'),'20 m².')+
W('kilowatts to watts','W = kW × 1,000','2.5 kW',ST('2.5 × 1,000','2.5 × 1,000 = 2,500'),'2,500 W.')+
W('quotation with profit','selling price = total cost + profit; profit = percent × cost','materials GH₵ 850, labour GH₵ 200, transport GH₵ 50, profit 20%',['<b>Step 1:</b> total cost = 850 + 200 + 50 = 1,100','<b>Step 2:</b> profit = 1,100 × 20 ÷ 100 = 220','<b>Step 3:</b> quotation = 1,100 + 220 = 1,320'],'GH₵ 1,320.');
q['25% of 80 is…']='80 × 25 ÷ 100 = 2,000 ÷ 100 = 20.';
q['A room is 4 m by 5 m. Its area is…']='Area = length × width = 4 × 5 = 20 m².';
q['2.5 kW in watts is…']='1 kW = 1,000 W, so 2.5 × 1,000 = 2,500 W.';
q['Total cost GH₵ 500 with GH₵ 100 profit gives a selling price of…']='Selling price = total cost + profit = 500 + 100 = GH₵ 600.';
w['Materials cost GH₵ 850, labour GH₵ 200 and transport GH₵ 50. Add 20% profit and find the quotation.']='<ol><li><b>Total cost:</b> 850 + 200 + 50 = GH₵ 1,100</li><li><b>Profit:</b> 20% of 1,100 = 1,100 × 20 ÷ 100 = 22,000 ÷ 100 = GH₵ 220</li><li><b>Quotation:</b> 1,100 + 220 = GH₵ 1,320</li></ol><p><b>Answer: GH₵ 1,320</b></p>';

n.c2c=H('Worked examples: every step shown')+
W('Boyle’s law','P₂ = P₁ × V₁ ÷ V₂ (constant temperature)','4 m³ at 200 kPa expands to 8 m³',ST('P₂ = 200 × 4 ÷ 8','200 × 4 = 800, then 800 ÷ 8 = 100'),'100 kPa.')+
W('Charles’s law','V₂ = V₁ × T₂ ÷ T₁ (constant pressure, temperatures in kelvin)','3 m³ at 300 K heated to 450 K',ST('V₂ = 3 × 450 ÷ 300','3 × 450 = 1,350, then 1,350 ÷ 300 = 4.5'),'4.5 m³.')+
W('Gay-Lussac’s law','P₂ = P₁ × T₂ ÷ T₁ (constant volume, kelvin)','300 kPa at 300 K heated to 360 K',ST('P₂ = 300 × 360 ÷ 300','300 × 360 = 108,000, then 108,000 ÷ 300 = 360'),'360 kPa.')+
W('linear expansion of a copper pipe','ΔL = α × L × ΔT','α = 17 × 10⁻⁶ per K, L = 10 m, ΔT = 50 K',['<b>Substitute:</b> ΔL = 17 × 10⁻⁶ × 10 × 50','<b>Calculate:</b> 10 × 50 = 500; 17 × 10⁻⁶ × 500 = 0.0085 m','<b>Convert to mm:</b> 0.0085 × 1,000 = 8.5'],'8.5 mm.')+
W('heat gain through a wall','Q = U × A × ΔT','U = 0.3 W/m²K, A = 40 m², ΔT = 30 K',ST('Q = 0.3 × 40 × 30','0.3 × 40 = 12, then 12 × 30 = 360'),'360 W.')+
W('Mollier chart: effect, compression heat and COP','effect = h₁ − h₄; compression = h₂ − h₁; COP = effect ÷ compression','h₁ = 400, h₂ = 440, h₄ = 250 kJ/kg',['<b>Effect:</b> 400 − 250 = 150 kJ/kg','<b>Compression heat:</b> 440 − 400 = 40 kJ/kg','<b>COP:</b> 150 ÷ 40 = 3.75'],'effect 150 kJ/kg, compression 40 kJ/kg, COP 3.75.')+
W('refrigerant mass flow','mass flow = capacity ÷ refrigeration effect','capacity 3 kW (3 kJ/s), effect 150 kJ/kg',ST('mass flow = 3 ÷ 150','3 ÷ 150 = 0.02'),'0.02 kg/s.')+
W('transformer secondary voltage','Vs = Vp × Ns ÷ Np','Vp = 230 V, Np = 1,000 turns, Ns = 100 turns',ST('Vs = 230 × 100 ÷ 1,000','230 × 100 = 23,000, then 23,000 ÷ 1,000 = 23'),'23 V.')+
W('transformer turns needed','Ns = Np × Vs ÷ Vp','Np = 2,000, Vp = 230 V, Vs = 23 V',ST('Ns = 2,000 × 23 ÷ 230','2,000 × 23 = 46,000, then 46,000 ÷ 230 = 200'),'200 turns.')+
W('mixed series and parallel circuit','parallel first, then add the series resistor, then I = V ÷ R','6 Ω in parallel with 3 Ω, then 4 Ω in series, supply 12 V',['<b>Parallel part:</b> (6 × 3) ÷ (6 + 3) = 18 ÷ 9 = 2 Ω','<b>Total resistance:</b> 2 + 4 = 6 Ω','<b>Current:</b> I = 12 ÷ 6 = 2'],'2 A.')+
W('power from voltage and resistance','P = V² ÷ R','230 V across 52.9 Ω',['<b>Substitute:</b> P = 230² ÷ 52.9','<b>Calculate:</b> 230 × 230 = 52,900, then 52,900 ÷ 52.9 = 1,000'],'1,000 W.')+
W('energy used','energy (kWh) = kW × hours','2 kW running for 5 hours',ST('2 × 5','2 × 5 = 10'),'10 kWh.');
q['4 m³ at 200 kPa expands to 8 m³ (constant T). New pressure…']='Boyle: P₂ = P₁ × V₁ ÷ V₂ = 200 × 4 ÷ 8 = 800 ÷ 8 = 100 kPa.';
q['3 m³ at 300 K heated to 450 K at constant P becomes…']='Charles: V₂ = V₁ × T₂ ÷ T₁ = 3 × 450 ÷ 300 = 1,350 ÷ 300 = 4.5 m³.';
q['A transformer with 1,000 and 100 turns on 230 V gives…']='Vs = Vp × Ns ÷ Np = 230 × 100 ÷ 1,000 = 23,000 ÷ 1,000 = 23 V.';
q['10 m of copper pipe heated by 50 K grows by about…']='ΔL = α × L × ΔT = 17×10⁻⁶ × 10 × 50 = 17×10⁻⁶ × 500 = 0.0085 m = 8.5 mm.';
q['If h₁ = 380 and h₄ = 240 kJ/kg, the effect is…']='Effect = h₁ − h₄ = 380 − 240 = 140 kJ/kg.';
q['A COP of 4 means…']='COP = cooling ÷ work. 4 kW of cooling ÷ 1 kW of work = 4. So 2 kW of electricity would give 8 kW of cooling.';
q['230 V across 52.9 Ω gives about…']='P = V² ÷ R = 230 × 230 ÷ 52.9 = 52,900 ÷ 52.9 = 1,000 W.';
q['2 kW running for 5 hours uses…']='Energy = kW × hours = 2 × 5 = 10 kWh.';
q['3 kW of cooling with an effect of 150 kJ/kg needs a mass flow of…']='Mass flow = capacity ÷ effect = 3 kJ/s ÷ 150 kJ/kg = 0.02 kg/s.';
w['Calculate the refrigeration effect, compression heat and COP: h₁ 400, h₂ 440, h₄ 250 kJ/kg.']='<ol><li><b>Effect:</b> h₁ − h₄ = 400 − 250 = 150 kJ/kg</li><li><b>Compression heat:</b> h₂ − h₁ = 440 − 400 = 40 kJ/kg</li><li><b>COP:</b> effect ÷ compression = 150 ÷ 40 = 3.75</li></ol><p><b>Answer: 150 kJ/kg, 40 kJ/kg, COP 3.75</b></p>';
w['A step-down transformer has 2,000 primary turns on 230 V. Find the secondary turns for 23 V.']='<ol><li><b>Formula:</b> Ns = Np × Vs ÷ Vp</li><li><b>Given:</b> Np = 2,000, Vp = 230 V, Vs = 23 V</li><li><b>Substitute:</b> Ns = 2,000 × 23 ÷ 230</li><li><b>Calculate:</b> 2,000 × 23 = 46,000, then 46,000 ÷ 230 = 200</li></ol><p><b>Answer: 200 turns</b></p>';
w['Calculate the heat gained through a wall: U = 0.4 W/m²K, area 25 m², temperature difference 35 K.']='<ol><li><b>Formula:</b> Q = U × A × ΔT</li><li><b>Given:</b> U = 0.4, A = 25 m², ΔT = 35 K</li><li><b>Substitute:</b> Q = 0.4 × 25 × 35</li><li><b>Calculate:</b> 0.4 × 25 = 10, then 10 × 35 = 350</li></ol><p><b>Answer: 350 W</b></p>';

n.intb=H('Efficiency and charging: worked examples')+
W('COP and EER','COP = cooling kW ÷ electrical kW; EER = cooling BTU/h ÷ electrical watts','cooling 3.5 kW from 1.0 kW of electricity',['<b>COP:</b> 3.5 ÷ 1.0 = 3.5','<b>Cooling in BTU/h:</b> 3.5 × 3,412 = 11,942','<b>Input in watts:</b> 1.0 × 1,000 = 1,000','<b>EER:</b> 11,942 ÷ 1,000 = 11.9','<b>Check:</b> EER ≈ COP × 3.412 = 3.5 × 3.412 = 11.9'],'COP 3.5 and EER 11.9.')+
W('superheat with a refrigerant that has glide','superheat = suction line temperature − dew point temperature','dew point at suction pressure 3°C, suction line 9°C',ST('9 − 3','9 − 3 = 6'),'6 K.')+
W('subcooling with a refrigerant that has glide','subcooling = bubble point temperature − liquid line temperature','bubble point at head pressure 44°C, liquid line 38°C',ST('44 − 38','44 − 38 = 6'),'6 K.');
q['EER is approximately COP ×…']='EER = COP × 3.412 because 1 W = 3.412 BTU/h. Example: COP 3 × 3.412 = 10.2.';

n.intc=H('Three-phase and power factor: worked examples')+
W('line-to-neutral voltage','V(line-to-neutral) = V(line-to-line) ÷ 1.73','400 V three-phase',ST('400 ÷ 1.73','400 ÷ 1.73 = 231'),'about 230 V.')+
W('apparent power from power factor','kVA = kW ÷ power factor','5 kW load, power factor 0.8',ST('5 ÷ 0.8','5 ÷ 0.8 = 6.25'),'6.25 kVA.')+
W('three-phase power','P = 1.73 × V × I × power factor','400 V, 10 A, power factor 0.85',['<b>Substitute:</b> P = 1.73 × 400 × 10 × 0.85','<b>Calculate:</b> 1.73 × 400 = 692; 692 × 10 = 6,920; 6,920 × 0.85 = 5,882'],'5,882 W, about 5.9 kW.');
q['400 V line-to-line gives about…']='Line-to-neutral = 400 ÷ 1.73 = 231 V, so about 230 V.';

n.intd=H('Air heat: worked examples')+
W('sensible heat, SI units','W = 1.2 × L/s × ΔT (K)','400 L/s, ΔT = 9 K',ST('W = 1.2 × 400 × 9','1.2 × 400 = 480, then 480 × 9 = 4,320'),'4,320 W. In BTU/h: 4,320 × 3.412 = 14,740.')+
W('sensible heat, US units','BTU/h = 1.08 × cfm × ΔT (°F)','500 cfm, ΔT = 20°F',ST('BTU/h = 1.08 × 500 × 20','1.08 × 500 = 540, then 540 × 20 = 10,800'),'10,800 BTU/h (0.9 TR).');
q['500 cfm with ΔT = 20°F carries…']='BTU/h = 1.08 × cfm × ΔT = 1.08 × 500 × 20. 1.08 × 500 = 540, then 540 × 20 = 10,800 BTU/h.';
w['Calculate the sensible heat carried by 400 L/s with ΔT = 9 K.']='<ol><li><b>Formula:</b> W = 1.2 × L/s × ΔT</li><li><b>Given:</b> 400 L/s, ΔT = 9 K</li><li><b>Substitute:</b> W = 1.2 × 400 × 9</li><li><b>Calculate:</b> 1.2 × 400 = 480, then 480 × 9 = 4,320</li></ol><p><b>Answer: 4,320 W</b></p>';

n.advhp=H('Heat pump COP: worked example')+
W('heating COP and heat from outdoors','COP = heat delivered ÷ electrical input; heat absorbed = heat delivered − electrical input','a heat pump delivers 9 kW of heat using 3 kW of electricity',['<b>COP:</b> 9 ÷ 3 = 3','<b>Heat taken from outdoors:</b> 9 − 3 = 6 kW'],'COP 3. Two thirds of the heat (6 kW) comes free from outdoor air, which is why COP is above 1.');

n.advinv=H('DC bus voltage: worked example')+
W('DC bus on a 230 V supply','DC bus ≈ AC RMS voltage × 1.414 (the peak value)','230 V single-phase supply',ST('230 × 1.414','230 × 1.414 = 325'),'about 325 V DC, which is why the range is 310 to 330 V.');
q['The DC bus on a 230 V supply is about…']='DC bus ≈ AC RMS × 1.414 = 230 × 1.414 = 325 V, so 310 to 330 V DC.';

window.WK={n,q,w};window.W12=W;
})();
