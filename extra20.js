// Realistic redraws of the equipment diagrams. Loaded after the earlier extra files, so each figure here replaces the plain line drawing of the same name.
(function(){
if(!window.Z||!Z.figs)return;
const HOT='#d9534f',COLD='#4a90d9',LIQ='#e8913a',CU='#c0703a';
const DEFS=`<defs>
<linearGradient id="ctMetal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f1f4f6"/><stop offset=".45" stop-color="#bcc3ca"/><stop offset="1" stop-color="#7c858e"/></linearGradient>
<linearGradient id="ctDark" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7a828a"/><stop offset=".5" stop-color="#4a5159"/><stop offset="1" stop-color="#2a2e33"/></linearGradient>
<linearGradient id="ctCyl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7c858e"/><stop offset=".3" stop-color="#f1f4f6"/><stop offset=".7" stop-color="#bcc3ca"/><stop offset="1" stop-color="#6b737c"/></linearGradient>
<linearGradient id="ctCu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e3a070"/><stop offset=".5" stop-color="#c0703a"/><stop offset="1" stop-color="#7d4220"/></linearGradient>
<linearGradient id="ctBrass" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8a6a22"/><stop offset=".4" stop-color="#e6c263"/><stop offset="1" stop-color="#8a6a22"/></linearGradient>
<linearGradient id="ctWhite" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#c8d2d8"/></linearGradient>
<linearGradient id="ctCoil" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a9b1b9"/><stop offset="1" stop-color="#6b747d"/></linearGradient>
<pattern id="ctFins" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="4" fill="#59626b"/><path d="M0 0V4" stroke="#d4dade" stroke-width="1.5"/></pattern>
<pattern id="ctBrick" width="22" height="12" patternUnits="userSpaceOnUse"><rect width="22" height="12" fill="#b88a6a"/><path d="M0 6H22M11 0V6M0 6V12M22 6V12" stroke="#8a6248" stroke-width="1"/></pattern>
<pattern id="ctFill" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="#3d6f8a"/><path d="M0 10L10 0M0 0L10 10" stroke="#9cc4d8" stroke-width="1.2"/></pattern>
<radialGradient id="ctFlameO" cx="0" cy=".5" r="1"><stop offset="0" stop-color="#8fd1ff"/><stop offset=".6" stop-color="#4a90d9" stop-opacity=".75"/><stop offset="1" stop-color="#4a90d9" stop-opacity="0"/></radialGradient>
<radialGradient id="ctFlameC" cx="0" cy=".5" r="1"><stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="#bfe6ff"/><stop offset="1" stop-color="#7fc4ff" stop-opacity="0"/></radialGradient>
<radialGradient id="ctFlameY" cx="0" cy=".5" r="1"><stop offset="0" stop-color="#fff6c4"/><stop offset=".5" stop-color="#ffc247"/><stop offset="1" stop-color="#e8913a" stop-opacity="0"/></radialGradient>
<radialGradient id="ctFlameP" cx="0" cy=".5" r="1"><stop offset="0" stop-color="#e8d8ff"/><stop offset=".6" stop-color="#8a6ad9" stop-opacity=".8"/><stop offset="1" stop-color="#8a6ad9" stop-opacity="0"/></radialGradient>
</defs>`;
const S=(vb,b,l)=>`<svg class="sm" viewBox="${vb}" width="100%" role="img" aria-label="${l}">${DEFS}${b}</svg>`;
const T=(x,y,t,a,st)=>`<text x="${x}" y="${y}"${a?` text-anchor="${a}"`:''}${st?` style="${st}"`:''}>${t}</text>`;
const R=(x,y,w,h,rx,f,s)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" style="fill:${f};stroke:${s||'#3b4148'};stroke-width:1.3"/>`;
const C=(x,y,r,f,s)=>`<circle cx="${x}" cy="${y}" r="${r}" style="fill:${f};stroke:${s||'#3b4148'};stroke-width:1.3"/>`;
const STEEL='url(#ctMetal)',DARK='url(#ctDark)';
const hose=(d,c,w)=>{w=w||6;return `<path d="${d}" fill="none" stroke="#1d2024" stroke-width="${w+3}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="${Math.max(1.3,w*.25)}" stroke-linecap="round" stroke-linejoin="round" transform="translate(0 ${-w*.18})"/>`};
const pill=(x,y,w,txt)=>`<rect x="${x-w/2}" y="${y-11}" width="${w}" height="16" rx="8" style="fill:#fff;fill-opacity:.9"/>${T(x,y+1,txt,'middle','fill:#12303f;font-size:10px')}`;
const fan=(cx,cy,r,n)=>{n=n||6;let s=C(cx,cy,r+3,'#202429','#0e1114');for(let i=0;i<n;i++)s+=`<path d="M0 ${-r*.18}C${r*.3} ${-r*.45} ${r*.62} ${-r*.9} ${r*.34} ${-r}C${r*.12} ${-r*.7} ${-r*.05} ${-r*.4} ${-r*.1} ${-r*.16}Z" transform="translate(${cx} ${cy}) rotate(${i*360/n})" style="fill:#3a4048;stroke:#101214;stroke-width:.8"/>`;return s+C(cx,cy,r*.22,STEEL)};
const coil=(x,y,w,h,tint)=>R(x,y,w,h,3,'url(#ctFins)','#2a2f35')+R(x,y,w,h,3,tint,'none').replace('style="','style="fill-opacity:.28;')+R(x-5,y+3,7,h-6,2,STEEL)+R(x+w-2,y+3,7,h-6,2,STEEL);
const dome=(cx,cy,rx,ry)=>`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" style="fill:url(#ctMetal);stroke:#3b4148;stroke-width:1.5"/><path d="M${cx-rx*.8} ${cy-ry*.5}Q${cx} ${cy-ry*1.05} ${cx+rx*.8} ${cy-ry*.5}" fill="none" stroke="#fff" stroke-width="3" opacity=".5" stroke-linecap="round"/>`;
const gauge=(cx,cy,r,col,val)=>{let s=C(cx,cy,r+4,'url(#ctMetal)')+C(cx,cy,r,'#f7f7f4','#3b4148')+`<path d="M${cx-r*.72} ${cy+r*.5}A${r*.9} ${r*.9} 0 1 1 ${cx+r*.72} ${cy+r*.5}" fill="none" stroke="${col}" stroke-width="4" opacity=".8"/>`;for(let i=0;i<=10;i++){const a=(-135+i*27)*Math.PI/180;s+=`<path d="M${cx+Math.sin(a)*r*.72} ${cy-Math.cos(a)*r*.72}L${cx+Math.sin(a)*r*.86} ${cy-Math.cos(a)*r*.86}" stroke="#12303f" stroke-width="${i%5?1:1.8}"/>`}const a=(-135+val*270)*Math.PI/180;return s+`<path d="M${cx} ${cy}L${cx+Math.sin(a)*r*.7} ${cy-Math.cos(a)*r*.7}" stroke="#c0392b" stroke-width="2.4" stroke-linecap="round"/>`+C(cx,cy,3.5,'#2a2f35')};
const F={};

// ---------- hermetic compressor, cut away ----------
F.comp=S('0 0 330 215',
 T(124,22,'S')+T(146,14,'C')+T(168,22,'R')+
 [130,150,170].map((x,i)=>`<rect x="${x-5}" y="${i==1?26:34}" width="10" height="18" rx="2" style="fill:#f1f0ea;stroke:#9aa2aa"/><rect x="${x-7}" y="${i==1?24:32}" width="14" height="5" rx="2" style="fill:url(#ctBrass);stroke:#6b5518"/>`).join('')+

 dome(150,115,105,62)+
 `<path d="M46 115Q150 134 254 115" fill="none" stroke="#59626b" stroke-width="1.6"/>`+
 `<ellipse cx="150" cy="112" rx="86" ry="46" style="fill:#23272c;stroke:#101214;stroke-width:1.5"/>`+
 R(112,84,24,50,4,'url(#ctCu)','#5a2e14')+R(164,84,24,50,4,'url(#ctCu)','#5a2e14')+
 `<path d="M116 92H132M116 100H132M116 108H132M116 116H132M168 92H184M168 100H184M168 108H184M168 116H184" stroke="#5a2e14" stroke-width="1.2" opacity=".7"/>`+
 R(136,90,28,38,3,STEEL)+R(147,70,6,70,2,'#cfd4da','#59626b')+
 R(120,134,60,16,4,DARK)+R(130,138,22,8,2,STEEL)+`<path d="M152 142H172" stroke="#cfd4da" stroke-width="3" stroke-linecap="round"/>`+
 T(262,184,'sealed steel dome','end','font-weight:400;font-size:11px')+
 hose('M54 105H8',COLD,7)+T(4,90,'Suction')+hose('M246 105H300',HOT,7)+T(258,90,'Discharge')+
 R(145,170,10,24,2,STEEL)+T(162,192,'Process tube')+
 T(4,36,'Motor windings')+T(4,50,'(stator, copper)',null,'font-weight:400'),
 'Hermetic compressor cut away with C S R terminals');

// ---------- evaporator types ----------
const serp=(x,y)=>{const p=`M${x} ${y}H${x+92}Q${x+104} ${y} ${x+104} ${y+13}T${x+92} ${y+26}H${x+12}Q${x} ${y+26} ${x} ${y+39}T${x+12} ${y+52}H${x+92}`;return hose(p,'url(#ctCu)',7).replace(/stroke="url\(#ctCu\)"/,'stroke="#c0703a"')};
F.evap=S('0 0 390 135',
 `<g transform="translate(5 6)">${serp(8,14)}${T(60,102,'Bare tube','middle')}</g>`+
 `<g transform="translate(135 6)">${R(5,8,110,76,6,'url(#ctMetal)','#59626b')}<path d="M17 24H103M17 24V44H103V64H17" fill="none" stroke="#1d2024" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/><path d="M17 24H103M17 24V44H103V64H17" fill="none" stroke="#7fb4e4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>${R(5,8,110,6,3,'#fff','none').replace('style="','style="fill-opacity:.55;')}${T(60,102,'Plate surface','middle')}</g>`+
 `<g transform="translate(265 6)">${[14,26,38,50,62,74,86,98].map(x=>`<rect x="${x}" y="6" width="7" height="80" rx="1.5" style="fill:url(#ctMetal);stroke:#59626b;stroke-width:.8"/>`).join('')}<path d="M10 30H108M10 64H108" stroke="#1d2024" stroke-width="9" stroke-linecap="round"/><path d="M10 30H108M10 64H108" stroke="#c0703a" stroke-width="6" stroke-linecap="round"/><path d="M10 30H108M10 64H108" stroke="#fff" stroke-opacity=".35" stroke-width="1.6" transform="translate(0 -2)"/><path d="M6 30Q-4 47 6 64" fill="none" stroke="#c0703a" stroke-width="6"/>${T(60,102,'Finned','middle')}</g>`,
 'Evaporator types');

// ---------- condenser types ----------
F.cond=S('0 0 390 150',
 `${coil(8,16,66,70,HOT)}${fan(104,52,17,5)}${T(60,128,'Air-cooled','middle')}`+
 `<g>${R(150,34,100,44,10,'url(#ctCyl)','#3b4148')}${R(142,38,12,36,3,DARK)}${R(246,38,12,36,3,DARK)}<path d="M162 48H238M162 56H238M162 64H238" stroke="#1d2024" stroke-width="5" stroke-linecap="round" opacity=".55"/><path d="M162 48H238M162 56H238M162 64H238" stroke="#c0703a" stroke-width="3" stroke-linecap="round"/><path d="M172 34V12" stroke="${COLD}" stroke-width="6"/><path d="M228 78V98" stroke="${HOT}" stroke-width="6"/>${T(200,8,'water in','middle')}${T(226,112,'water out','end')}${T(200,134,'Water-cooled','middle')}</g>`+
 `<g>${R(285,16,95,74,4,'url(#ctMetal)','#59626b')}${R(291,22,83,10,3,'#e9eef0','#59626b')}${fan(332,27,5,4)}<path d="M296 50H368M296 62H368M296 74H368" stroke="#1d2024" stroke-width="5" opacity=".5"/><path d="M296 50H368M296 62H368M296 74H368" stroke="${HOT}" stroke-width="3"/><path d="M305 36V48M325 36V48M345 36V48M365 36V48" stroke="${COLD}" stroke-width="2.4" stroke-dasharray="3 4"/>${T(332,134,'Evaporative','middle')}</g>`,
 'Condenser types');

// ---------- flow controls ----------
F.flow=S('0 0 390 140',
 `<path d="M8 40Q18 12 28 40T48 40T68 40T88 40T108 40" fill="none" stroke="#1d2024" stroke-width="6" stroke-linecap="round"/><path d="M8 40Q18 12 28 40T48 40T68 40T88 40T108 40" fill="none" stroke="#c0703a" stroke-width="3.6" stroke-linecap="round"/>${T(58,76,'Capillary tube','middle')}${T(58,92,'fixed bore and length','middle')}`+
 `${hose('M140 70H166',LIQ,6)}${hose('M196 70H222',COLD,6)}`+
 `${R(166,52,30,36,5,'url(#ctBrass)','#6b5518')}${C(181,46,12,'url(#ctMetal)','#59626b')}<path d="M181 34V24" stroke="#59626b" stroke-width="3"/>`+
 `${hose('M140 114H260',COLD,6)}${C(238,114,8,'url(#ctMetal)','#3b4148')}<path d="M181 88Q181 114 232 108" fill="none" stroke="#1d2024" stroke-width="3"/>`+
 `${T(181,16,'TEV','middle')}${T(190,132,'bulb on suction line','middle')}`+
 `${hose('M280 70H298',LIQ,6)}${hose('M342 70H362',COLD,6)}${R(298,52,44,36,5,'url(#ctBrass)','#6b5518')}${R(312,32,16,20,3,STEEL)}<path d="M316 40H324M316 36H324M316 44H324" stroke="#59626b" stroke-width="1.4"/>${R(310,28,20,5,2,DARK)}${T(320,106,'AEV','middle')}${T(320,122,'constant pressure','middle')}`,
 'Flow controls');

// ---------- cooling tower ----------
F.tower=S('0 0 270 215',
 `<path d="M60 186H210V196H60Z" style="fill:#59626b;stroke:#2a2f35"/>`+
 `<path d="M72 186L84 62H186L198 186Z" style="fill:#6b7f8a;stroke:#2a2f35;stroke-width:1.5"/>`+
 `<rect x="90" y="106" width="90" height="62" fill="url(#ctFill)" stroke="#2a2f35"/>`+
 [74,84,94].map(y=>`<path d="M${y==74?88:90} ${y}H${y==74?182:180}" stroke="#1d2024" stroke-width="5"/><path d="M${y==74?88:90} ${y}H${y==74?182:180}" stroke="${HOT}" stroke-width="3"/>`).join('')+
 [100,120,140,160].map(x=>`<path d="M${x} 94V104" stroke="#9cc4d8" stroke-width="1.6" stroke-dasharray="2 3"/>`).join('')+
 `<path d="M84 100H186M84 118H186M84 136H186M84 154H186" stroke="#2a2f35" stroke-width="1" opacity=".35"/>`+
 `<rect x="72" y="168" width="126" height="16" rx="3" style="fill:#4a90d9;fill-opacity:.55;stroke:#2a2f35"/>`+
 `<path d="M104 62V46H166V62" style="fill:#aeb5bc;stroke:#2a2f35;stroke-width:1.5"/><ellipse cx="135" cy="46" rx="31" ry="7" style="fill:#1d2024"/>`+
 fan(135,46,14,4).replace(/<circle[^>]*r="17"[^>]*\/>/,'')+
 hose('M5 30H60V78H88',HOT,6)+T(8,22,'Hot water in')+
 hose('M135 184V204',COLD,6)+T(147,205,'Cool water out')+
 `<path d="M222 120H198M222 150H198" stroke="#1d2024" stroke-width="2" marker-end="url(#ctA)"/><path d="M52 120H72M52 150H72" stroke="#1d2024" stroke-width="2"/>`+
 `<path d="M216 114l-8 6 8 6M216 144l-8 6 8 6" fill="none" stroke="#1d2024" stroke-width="2"/>`+
 T(262,112,'Air in','end')+T(135,10,'Warm moist air out','middle')+`<path d="M135 38V16M127 24l8-8 8 8" fill="none" stroke="#1d2024" stroke-width="2"/>`,
 'Cooling tower');

// ---------- chilled water system ----------
F.chill=S('0 0 400 195',
 `${R(10,48,112,84,8,'url(#ctDark)','#1f2327')}`+
 `${R(18,56,70,24,12,'url(#ctCyl)','#3b4148')}${R(18,84,70,24,12,'url(#ctCyl)','#3b4148')}`+
 `<path d="M26 68H80" stroke="${HOT}" stroke-width="3" opacity=".7"/><path d="M26 96H80" stroke="${COLD}" stroke-width="3" opacity=".7"/>`+
 `${R(92,60,24,44,6,STEEL)}${C(104,82,7,DARK)}`+
 `${R(20,114,50,12,2,'#e9eef0')}${T(22,125,'Chiller','start','fill:#12303f;font-size:10px')}`+
 `${T(14,150,'Heat leaves through')}${T(14,166,'the condenser')}`+
 hose('M122 72H250',COLD,7)+T(150,64,'Cold water')+
 `${R(250,36,130,56,6,'url(#ctWhite)','#59626b')}${coil(262,44,50,40,COLD)}${fan(346,64,15,5)}${T(262,108,'Air handling unit')}${T(262,122,'or fan coil')}`+
 hose('M370 92V146H206M174 146H140V112H122',HOT,7)+
 `${C(190,146,14,'url(#ctMetal)','#3b4148')}${R(180,134,20,24,4,'none','none')}<path d="M182 140L198 146L182 152Z" fill="#1d2024"/>${R(196,140,16,12,3,DARK)}`+
 T(190,176,'Pump','middle')+T(230,136,'Warm water return'),
 'Chilled water system');

// ---------- VRF ----------
const indoor=(x,y)=>`${R(x,y,100,36,10,'url(#ctWhite)','#9aa2aa')}<path d="M${x+10} ${y+26}H${x+90}" stroke="#7a828a" stroke-width="3" stroke-linecap="round"/><path d="M${x+10} ${y+14}H${x+60}" stroke="#cfd4da" stroke-width="1.4"/>${C(x+84,y+10,2.4,'#2fae5f','#2fae5f')}`;
F.vrf=S('0 0 410 215',
 `${R(110,4,190,42,6,'url(#ctMetal)','#59626b')}${fan(150,25,14,5)}<path d="M180 12H292M180 20H292M180 28H292M180 36H292" stroke="#59626b" stroke-width="1.5"/>${T(214,60,'Outdoor unit, inverter')}`+
 hose('M205 46V74',COLD,6)+`${R(180,74,50,20,5,'url(#ctBrass)','#6b5518')}${T(238,90,'Branch / Y-joint')}`+
 hose('M190 94L65 134M205 94V134M220 94L345 134',COLD,5)+
 `${indoor(15,134)}${T(65,190,'EEV','middle')}${indoor(155,134)}${T(205,190,'EEV','middle')}${indoor(295,134)}${T(345,190,'EEV','middle')}`+
 `${T(65,184,'Indoor unit 1','middle','font-size:10.5px')}`.replace('y="184"','y="206"')+`${T(205,206,'Indoor unit 2','middle','font-size:10.5px')}${T(345,206,'Indoor unit 3','middle','font-size:10.5px')}`+
 `<path d="M300 25H395V134" fill="none" stroke="#1d2024" stroke-width="2" stroke-dasharray="4 4"/>${T(305,17,'comm. wiring')}`,
 'VRF system schematic');

// ---------- cold room ----------
F.coldroom=S('0 0 410 220',
 T(5,14,'Strip curtain and safety release inside door')+
 `${R(15,24,252,150,3,'#dfe6ea','#59626b').replace('stroke-width:1.3','stroke-width:8')}${R(24,32,234,134,2,'#eef3f6','#9aa2aa')}`+
 `<path d="M70 32V166M130 32V166M190 32V166" stroke="#c4ccd2" stroke-width="1"/>`+
 `${R(60,34,130,20,4,'url(#ctMetal)','#59626b')}${fan(92,44,7,4)}${fan(158,44,7,4)}<path d="M96 54V66M150 54V66" stroke="#59626b" stroke-width="3"/>${T(125,86,'Evaporator (unit cooler)','middle','font-size:10px')}`+
 `${T(130,118,'Cold room','middle')}${T(130,134,'insulated panels','middle')}`+
 `<path d="M15 172H267" stroke="#8d96a0" stroke-width="6"/><rect x="15" y="176" width="252" height="6" fill="#b8bec4"/>${T(20,200,'Floor insulation (heater in freezers)')}`+
 `${R(224,92,34,82,2,'url(#ctMetal)','#3b4148')}${R(226,100,6,70,1,'#a9d0e8')}<path d="M228 100V170M232 100V170" stroke="#fff" stroke-width="1.4" opacity=".6"/>${C(252,134,3,'#2a2f35')}${T(241,86,'Door','middle')}`+
 `${R(300,66,98,56,5,'url(#ctMetal)','#59626b')}${fan(338,94,14,5)}<path d="M360 74H392M360 84H392M360 94H392M360 104H392" stroke="#59626b" stroke-width="1.4"/>${T(349,136,'Condensing unit','middle')}`+
 `${R(310,148,80,24,12,'url(#ctCyl)','#3b4148')}${T(350,190,'Receiver','middle')}`+
 hose('M267 85H300M267 100H300',HOT,4)+hose('M190 44H286V108H300',COLD,5),
 'Cold room layout');

// ---------- split installation ----------
F.splitinst=S('0 0 410 220',
 T(10,18,'Wall hole slopes slightly outward')+
 `<rect x="183" y="26" width="22" height="182" fill="url(#ctBrick)" stroke="#6b4a36" stroke-width="1.4"/>${T(194,20,'Wall','middle')}`+
 `${R(15,32,140,42,10,'url(#ctWhite)','#9aa2aa')}<path d="M28 62H142" stroke="#7a828a" stroke-width="3" stroke-linecap="round"/><path d="M28 48H100" stroke="#cfd4da" stroke-width="1.4"/>${C(134,46,2.6,'#2fae5f','#2fae5f')}${T(85,92,'Indoor unit','middle')}`+
 `${R(265,122,122,62,5,'url(#ctMetal)','#59626b')}${fan(320,153,20,5)}<path d="M352 130H380M352 142H380M352 154H380M352 166H380" stroke="#59626b" stroke-width="1.4"/>${R(272,184,16,10,2,DARK)}${R(364,184,16,10,2,DARK)}${T(326,208,'Level base, free air space','middle','font-size:10px')}${T(352,114,'Outdoor unit','middle')}`+
 hose('M155 58H183L205 72H300V122','#2a2a2a',9)+hose('M155 62H183L205 76H304V122',CU,3)+T(214,64,'Pipes + cable')+
 `<path d="M40 74V104L183 134L205 154H240" fill="none" stroke="#1d2024" stroke-width="5" stroke-dasharray="4 4"/><path d="M40 74V104L183 134L205 154H240" fill="none" stroke="${COLD}" stroke-width="3" stroke-dasharray="4 4"/>`+
 T(10,152,'Drain falls all the way')+T(10,186,'Insulate suction and')+T(10,201,'liquid pipes separately'),
 'Split air conditioner installation layout');

// ---------- heat pump modes ----------
const hpMode=(dx,cool)=>{const out=cool?HOT:COLD,ind=cool?COLD:HOT;return `<g transform="translate(${dx} 0)">`+
 `${dome(30,28,26,18)}${R(70,12,60,28,4,'url(#ctBrass)','#6b5518')}${T(100,30,'4-way','middle','fill:#1d2024;font-size:11px')}${hose('M56 26H70',HOT,4)}`+
 hose('M85 40L45 100',out,4)+hose('M115 40L145 100',ind,4)+
 `${coil(10,100,70,34,out)}${T(45,152,'Outdoor coil','middle','font-size:10.5px')}${coil(110,100,70,34,ind)}${T(145,152,'Indoor coil','middle','font-size:10.5px')}`+
 T(95,172,cool?'Cooling mode':'Heating mode','middle')+T(30,62,'Comp','middle','font-size:10px')+`</g>`};
F.hp=S('0 0 410 182',hpMode(5,true)+hpMode(215,false),'Heat pump modes');

// ---------- gauge manifold ----------
F.manifold=S('0 0 320 225',
 gauge(95,58,40,COLD,.3)+gauge(225,58,40,HOT,.45)+T(95,12,'Low (compound) gauge','middle')+T(225,12,'High gauge','middle')+
 R(60,100,200,40,6,'url(#ctDark)','#1f2327')+R(70,106,180,28,4,'url(#ctMetal)','#59626b')+
 C(110,86,13,'#2a60c0','#12307a')+C(210,86,13,'#c0392b','#5a1510')+T(110,90,'LO','middle','fill:#fff;font-size:10px')+T(210,90,'HI','middle','fill:#fff;font-size:10px')+
 R(94,132,32,10,2,STEEL)+R(144,132,32,10,2,STEEL)+R(194,132,32,10,2,STEEL)+
 hose('M110 142L55 195',COLD,7)+hose('M160 142V195','#e0b04a',7)+hose('M210 142L265 195',HOT,7)+
 T(8,212,'To suction')+T(118,212,'To pump/cylinder')+T(250,212,'To discharge'),
 'Gauge manifold');

// ---------- refrigeration cycle with accessories ----------
const cmp=(x,y)=>dome(x+40,y+14,38,14)+R(x+10,y+2,6,6,1,DARK);
F.cycle=S('0 0 380 240',
 hose('M320 34H50V204H80',HOT,5)+hose('M180 204H320V48',COLD,5)+
 cmp(280,20)+pill(320,52,70,'Compressor')+
 coil(180,20,80,28,HOT)+pill(220,60,64,'Condenser')+
 R(84,18,72,24,12,'url(#ctCyl)','#3b4148')+pill(120,56,56,'Receiver')+
 R(26,76,48,30,10,'url(#ctCyl)','#3b4148')+C(50,91,6,'#7fc4e8','#3b4148')+pill(50,120,44,'Drier')+
 C(50,150,14,'url(#ctMetal)','#3b4148')+C(50,150,8,'#a9d0e8','#3b4148')+pill(50,176,76,'Sight glass')+
 R(92,190,60,28,5,'url(#ctBrass)','#6b5518')+C(122,186,7,STEEL)+pill(122,230,94,'Expansion valve')+
 coil(190,190,80,28,COLD)+pill(230,230,66,'Evaporator')+
 R(284,186,52,34,12,'url(#ctCyl)','#3b4148')+pill(310,232,76,'Accumulator')+
 T(130,92,'High side (hot)','start','fill:var(--hot)')+T(190,160,'Low side (cold)','start','fill:var(--cold)'),
 'Refrigeration cycle with accessories');

// ---------- oxy-acetylene flames ----------
const torch=x=>`<g transform="translate(${x} 0)">${R(0,52,26,22,3,'url(#ctBrass)','#6b5518')}${R(26,57,16,12,2,STEEL)}${R(40,60,6,6,1,'#59626b')}</g>`;
const flame=(x,type)=>{
  const L=[78,118,52][type],fill=['url(#ctFlameO)','url(#ctFlameY)','url(#ctFlameP)'][type];
  const outer=`M${x+46} 63Q${x+46+L*.6} ${type==1?30:44} ${x+46+L} 63Q${x+46+L*.6} ${type==1?96:82} ${x+46} 63Z`;
  const inner=`M${x+46} 63Q${x+46+[34,30,18][type]*.6} 56 ${x+46+[34,30,18][type]} 63Q${x+46+[34,30,18][type]*.6} 70 ${x+46} 63Z`;
  let s=`<path d="${outer}" style="fill:${fill}"/>`;
  if(type==1)s+=`<path d="M${x+110} 63Q${x+130} 48 ${x+160} 56M${x+110} 63Q${x+132} 78 ${x+162} 70M${x+110} 63Q${x+138} 63 ${x+164} 63" fill="none" stroke="#ffc247" stroke-width="2" opacity=".8" stroke-linecap="round"/>`;
  return s+`<path d="${inner}" style="fill:url(#ctFlameC)"/>`;
};
F.flames=S('0 0 430 135',
 `<rect width="430" height="135" fill="#10161c" rx="6" opacity=".9"/>`+
 torch(2)+flame(2,0)+T(8,108,'Neutral','start','fill:#e6f2f7')+T(8,122,'sharp inner cone','start','fill:#b8d0dc;font-weight:400')+
 torch(147)+flame(147,1)+T(153,108,'Carburizing','start','fill:#e6f2f7')+T(153,122,'feathery, excess acetylene','start','fill:#b8d0dc;font-weight:400')+
 torch(292)+flame(292,2)+T(298,108,'Oxidizing','start','fill:#e6f2f7')+T(298,122,'short, hissing, excess O₂','start','fill:#b8d0dc;font-weight:400'),
 'Three oxy-acetylene flames');


// ---------- refrigerator wiring: a pictorial diagram that shows every wire and where it connects ----------
(function(){
const BR='#8a4b24',BL='#2a60c0',GY='#4cae4c';
const w=(d,c,n)=>`<path d="${d}" fill="none" stroke="#14171a" stroke-width="5.4" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${c}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>${n==='gy'?`<path d="${d}" fill="none" stroke="#e8d34a" stroke-width="3.2" stroke-dasharray="5 5" stroke-linecap="butt"/>`:''}`;
const dot=(x,y)=>`<circle cx="${x}" cy="${y}" r="3.6" style="fill:#14171a;stroke:#fff;stroke-width:1"/>`;
const bd=(x,y,n)=>`<circle cx="${x}" cy="${y}" r="8.5" style="fill:#b3261e;stroke:#fff;stroke-width:1.2"/><text x="${x}" y="${y+3.6}" text-anchor="middle" style="fill:#fff;font-size:10px;font-weight:700">${n}</text>`;
const term=(x,y)=>`<circle cx="${x}" cy="${y}" r="3.2" style="fill:#e6c263;stroke:#6b5518;stroke-width:1"/>`;
const tag=(x,y,t,a)=>`<text x="${x}" y="${y}"${a?` text-anchor="${a}"`:''} style="font-size:10px;font-weight:600">${t}</text>`;
const lab=(x,y,t)=>`<rect x="${x-9}" y="${y-8}" width="18" height="13" rx="6" style="fill:#fff;fill-opacity:.92"/><text x="${x}" y="${y+2}" text-anchor="middle" style="fill:#12303f;font-size:10.5px;font-weight:800">${t}</text>`;
let b='';
// wires first, so the parts sit on top of them
b+=w('M54 142H78',BR);
b+=w('M78 142V52H112',BR);
b+=w('M202 52H232V40H455V166H426',BR);
b+=w('M78 142H130',BR);
b+=w('M180 142H200',BR);
b+=w('M54 166H259',BL);
b+=w('M240 142V166',BL);
b+=w('M287 166H345',BL);
b+=w('M370 94V106H385V132',BR);
b+=w('M412 94V104H440V166',BR);
b+=w('M54 190H310V246H330',GY,'gy');
b+=w('M200 190V236',GY,'gy');
b+=dot(78,142)+dot(240,166)+dot(440,166)+dot(200,190);
// plug and cord
b+=R(6,126,48,86,8,'url(#ctWhite)','#9aa2aa')+[142,166,190].map(y=>`<rect x="0" y="${y-3}" width="9" height="6" rx="2" style="fill:url(#ctMetal);stroke:#59626b"/>`).join('');
b+=tag(30,120,'Mains plug','middle')+tag(32,146,'L','middle')+tag(32,170,'N','middle')+tag(32,194,'E','middle');
// thermostat
b+=R(112,26,90,52,8,'url(#ctWhite)','#9aa2aa')+C(142,52,14,'url(#ctMetal)','#59626b')+'<path d="M142 52L150 44" stroke="#c0392b" stroke-width="3" stroke-linecap="round"/>'+'<path d="M158 40H194M158 52H194M158 64H194" stroke="#c4ccd2" stroke-width="1.2"/>'+term(112,52)+term(202,52)+tag(157,22,'Thermostat','middle')+tag(106,40,'1','end')+tag(208,40,'2','start');
// door switch and lamp
b+=R(130,130,50,24,4,'url(#ctDark)','#1f2327')+'<path d="M140 142H162L170 134" stroke="#cfd4da" stroke-width="3" stroke-linecap="round"/>'+term(130,142)+term(180,142)+tag(155,124,'Door switch','middle');
b+=C(220,142,18,'#fff7d0','#b8a14a')+'<path d="M212 150V142L216 136L220 142L224 136L228 142V150" fill="none" stroke="#c0392b" stroke-width="1.8" stroke-linejoin="round"/>'+R(214,158,12,6,2,STEEL)+term(200,142)+term(240,142)+tag(220,116,'Lamp','middle');
// overload protector
b+=C(273,166,15,'url(#ctDark)','#101214')+'<path d="M264 166H282" stroke="#cfd4da" stroke-width="2.4"/>'+term(259,166)+term(287,166)+tag(273,210,'Overload (OLP)','middle');
// PTC start relay
b+=R(352,64,84,30,5,'#2a2f35','#101214')+'<text x="394" y="83" text-anchor="middle" style="fill:#fff;font-size:10px;font-weight:700">PTC start</text>'+term(370,94)+term(412,94);
// compressor: terminal plate on top of the dome
b+=`<ellipse cx="385" cy="262" rx="84" ry="50" style="fill:url(#ctMetal);stroke:#3b4148;stroke-width:1.5"/>`+R(326,118,108,78,8,'url(#ctDark)','#101214')+
 [[352,166,'C'],[385,138,'S'],[418,166,'R']].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="9" style="fill:url(#ctBrass);stroke:#6b5518;stroke-width:1.3"/><circle cx="${p[0]}" cy="${p[1]}" r="3.4" style="fill:#2a2f35"/>${lab(p[0]+(p[2]=='S'?22:0),p[1]+(p[2]=='S'?-2:22),p[2])}`).join('')+
 C(333,246,5,'#4cae4c','#2a6a2a')+tag(385,332,'Compressor (sealed dome)','middle')+'<text x="344" y="264" style="fill:#12303f;font-size:10px;font-weight:600">Earth stud</text>';
// fridge body earth
b+='<path d="M200 236V244M188 244H212M192 250H208M196 256H204" stroke="#14171a" stroke-width="2.4" stroke-linecap="round"/>'+tag(200,272,'Fridge body','middle')+tag(200,284,'(earth)','middle');
// wire number badges
b+=bd(66,134,1)+bd(96,96,2)+bd(300,34,3)+bd(106,134,4)+bd(158,176,5)+bd(250,152,6)+bd(316,178,7)+bd(374,108,8)+bd(130,200,9);
// legend
const L=[
 [1,BR,'Brown, live: plug L to the first junction'],
 [2,BR,'Brown: junction to thermostat terminal 1'],
 [3,BR,'Brown: thermostat terminal 2 to compressor R'],
 [4,BR,'Brown: junction to door switch, then to the lamp'],
 [5,BL,'Blue, neutral: plug N to the overload (OLP)'],
 [6,BL,'Blue: lamp back to the neutral junction'],
 [7,BL,'Blue: overload to compressor common C'],
 [8,BR,'Short links: PTC to S and PTC to R'],
 [9,GY,'Green/yellow, earth: plug E to dome and fridge body']
];
L.forEach((r,i)=>{const y=346+i*20;b+=bd(18,y,r[0])+`<rect x="34" y="${y-2}" width="22" height="5" rx="2" style="fill:${r[1]};stroke:#14171a;stroke-width:.8"/>`+(r[0]==9?`<rect x="34" y="${y-2}" width="22" height="5" rx="2" style="fill:none;stroke:#e8d34a;stroke-width:5;stroke-dasharray:4 4"/>`:'')+tag(64,y+3,r[2])});
b+=tag(8,536,'Typical layout. Wire colours and part positions vary by maker.')+tag(8,550,'Always follow the wiring label on the fridge.');
F.fridgewire=S('0 0 470 560',b,'Refrigerator wiring diagram showing every wire and its connection');
})();

Object.assign(Z.figs,F);

Z.names=Z.names||{};Z.tasks=Z.tasks||{};
Z.names.fridgewire='Refrigerator wiring: where every wire goes';
Z.tasks.fridgewire='Trace each wire from the plug to the compressor and say what it connects. Then colour the live, neutral and earth wires.';
if(Z.marks)Z.marks.fridgewire=['Live goes through the thermostat to compressor R','Neutral goes through the overload to common C','PTC start relay joins S and R','Door switch and lamp are on the live and neutral lines','Earth goes to the dome and the fridge body'];
// show it with the schematic, in every lesson that already shows the fridge circuit, and under the same headings
window.MF=window.MF||{};
['c1d','elec','fault','dom'].forEach(id=>{MF[id]=(MF[id]||[]).concat(['fridgewire'])});
window.FR=window.FR||[];
FR.push({m:/<h3>(?:Reading wiring diagrams|Refrigerator circuit|Domestic fridge cycle)/i,f:'fridgewire'});
})();
