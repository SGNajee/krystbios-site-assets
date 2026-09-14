(()=>{const style=document.createElement('style');style.dataset.krystbiosServerTour='';style.textContent=String.raw`
:root{--kt-canvas:#071018;--kt-ink:#f3f6f8;--kt-muted:#b8c2ca;--kt-line:rgba(164,207,220,.24);--kt-teal:#8de2e8;--kt-violet:#c6a9df}
html,body{overflow-x:hidden;overflow-x:clip}
body.kt-tour-ready{background:var(--kt-canvas)}
.kt-machine-env{position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;background:var(--kt-canvas);opacity:1;contain:paint}
.kt-machine-scene{position:absolute;inset:-5%;background-position:center;background-repeat:no-repeat;background-size:cover;opacity:var(--kt-opacity,0);transform:translate3d(calc(var(--kt-look-x,0px) * var(--kt-depth,1)),calc(var(--kt-look-y,0px) * var(--kt-depth,1)),0) scale(var(--kt-scale,1.08));will-change:transform,opacity}
.kt-machine-scene[data-scene="1"]{background-image:url('https://raw.githubusercontent.com/SGNajee/krystbios-site-assets/main/server-tour/krystbios-entrance-room.jpg');--kt-depth:.35}
.kt-machine-scene[data-scene="2"]{background-image:url('https://raw.githubusercontent.com/SGNajee/krystbios-site-assets/main/server-tour/krystbios-runtime-room.jpg');background-position:58% center;--kt-depth:.55}
.kt-machine-scene[data-scene="3"]{background-image:url('https://raw.githubusercontent.com/SGNajee/krystbios-site-assets/main/server-tour/krystbios-control-room.jpg');background-position:62% center;--kt-depth:.75}
.kt-machine-scene[data-scene="4"]{background-image:url('https://raw.githubusercontent.com/SGNajee/krystbios-site-assets/main/server-tour/krystbios-soul-room.jpg');--kt-depth:.45}
.kt-machine-scene[data-scene="5"]{background-image:url('https://raw.githubusercontent.com/SGNajee/krystbios-site-assets/main/server-tour/krystbios-oversight-room.jpg');--kt-depth:.65}
.kt-machine-scene[data-scene="6"]{background-image:url('https://raw.githubusercontent.com/SGNajee/krystbios-site-assets/main/server-tour/krystbios-evidence-vault.jpg');--kt-depth:.5}
.kt-machine-vignette{position:absolute;inset:0;background:linear-gradient(180deg,rgba(3,9,14,.84),rgba(3,9,14,.2) 24%,rgba(3,9,14,.16) 72%,rgba(3,9,14,.88)),linear-gradient(90deg,rgba(3,9,14,.68),rgba(3,9,14,.04) 34%,rgba(3,9,14,.04) 66%,rgba(3,9,14,.68));opacity:.56}
.kt-machine-grain{position:absolute;inset:-40%;opacity:.055;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.82' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E");animation:kt-grain 72s steps(2,end) infinite;will-change:transform}
.kt-machine-scan{position:absolute;left:9%;right:9%;top:12%;height:1px;background:linear-gradient(90deg,transparent,rgba(156,231,237,.6),transparent);box-shadow:0 0 18px rgba(110,222,233,.35);opacity:var(--kt-scan-opacity,.36);transform:translate3d(0,var(--kt-scan-y,0px),0)}
.kt-machine-jamb{position:absolute;top:-8%;bottom:-8%;width:7%;border:1px solid rgba(141,226,232,.2);background:linear-gradient(90deg,rgba(2,8,13,.97),rgba(24,43,52,.72),rgba(2,8,13,.86));box-shadow:0 0 60px rgba(82,185,204,.12);will-change:transform}
.kt-machine-jamb-left{left:-4%;transform:translate3d(calc(var(--kt-door,0) * -1px),0,0)}
.kt-machine-jamb-right{right:-4%;transform:translate3d(calc(var(--kt-door,0) * 1px),0,0)}
.kt-machine-status{position:absolute;top:112px;right:26px;display:flex;align-items:center;gap:10px;color:rgba(224,238,241,.76);font:500 10px/1.4 ui-monospace,SFMono-Regular,Consolas,monospace;letter-spacing:.14em;text-transform:uppercase}
.kt-machine-status::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--kt-teal);box-shadow:0 0 14px var(--kt-teal)}
.kt-machine-rail{position:absolute;top:50%;right:28px;display:grid;gap:12px;transform:translateY(-50%)}
.kt-machine-rail span{display:block;width:5px;height:5px;border:1px solid rgba(216,235,239,.46);border-radius:50%;transform:scale(1);transition:transform .35s ease,background .35s ease,opacity .35s ease;opacity:.52}
.kt-machine-rail span.is-active{background:var(--kt-teal);border-color:var(--kt-teal);box-shadow:0 0 12px rgba(141,226,232,.7);transform:scale(1.7);opacity:1}
body.kt-tour-ready main,body.kt-tour-ready .w-embed.w-script:has(#kb-contact){position:relative;z-index:1}
html body .kt-tour-section:is(#pitch-intro,#what,#soul,#why-it-matters,#why-now,#the-difference,#why,#evidence,#strategic-licensing,#the-ask,#kb-contact){position:relative;isolation:isolate;color:var(--kt-ink)!important;border-color:var(--kt-line)!important}
html body #pitch-intro#pitch-intro.kt-tour-section,html body #what#what.kt-tour-section,html body #soul#soul.kt-tour-section,html body #why-it-matters#why-it-matters.kt-tour-section,html body #why-now#why-now.kt-tour-section,html body #the-difference#the-difference.kt-tour-section,html body #why#why.kt-tour-section,html body #evidence#evidence.kt-tour-section,html body #strategic-licensing#strategic-licensing.kt-tour-section,html body #the-ask#the-ask.kt-tour-section,html body #kb-contact#kb-contact.kt-tour-section{background:transparent!important}
html body .kt-tour-section::before{content:'';position:absolute;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(90deg,rgba(6,13,20,.72),rgba(6,13,20,.3) 48%,rgba(6,13,20,.64))}
html body .kt-tour-section::after{content:'';position:absolute;left:0;right:0;bottom:-1px;height:clamp(72px,9vw,132px);z-index:-1;pointer-events:none;background:linear-gradient(180deg,transparent,rgba(0,0,0,.78) 72%,#000)}
html body #pitch-intro.kt-tour-section::before{background:radial-gradient(ellipse at 50% 45%,rgba(7,16,24,.12),rgba(7,16,24,.7) 82%)}
html body #what.kt-tour-section::before{background:linear-gradient(90deg,rgba(5,12,19,.72),rgba(5,12,19,.22) 50%,rgba(5,12,19,.62))}
html body #soul.kt-tour-section::before{background:radial-gradient(circle at 50% 44%,rgba(5,12,19,.16),rgba(5,12,19,.72) 78%)}
html body :is(#why-it-matters,#why-now,#the-difference,#why).kt-tour-section::before{background:linear-gradient(90deg,rgba(5,11,18,.76),rgba(5,11,18,.34) 54%,rgba(5,11,18,.66))}
html body :is(#evidence,#strategic-licensing,#the-ask,#kb-contact).kt-tour-section::before{background:linear-gradient(180deg,rgba(5,11,17,.54),rgba(5,11,17,.72))}
html body .kt-tour-section :is(h1,h2,h3,h4,strong){color:var(--kt-ink)!important}
html body .kt-tour-section :is(p,li,.kb-lead,.kb-muted,.kb-note,.kb-quote,.kb-list-row span,.receipt-intro,.receipt-card p,.receipt-card li){color:var(--kt-muted)!important}
html body .kt-tour-section :is(.kb-label,.section-label,.kp-micro,.kb-pill,.kb-list-row strong){color:var(--kt-violet)!important}
html body .kt-tour-section :is(.kb-card,.receipt-card,.mapping-row,.receipt-scope,.kp-demo,.kp-path){background:linear-gradient(145deg,rgba(18,31,40,.9),rgba(7,14,21,.93))!important;border-color:rgba(151,194,207,.42)!important;box-shadow:0 22px 70px rgba(0,0,0,.28)!important;backdrop-filter:blur(8px)}
html body .kt-tour-section :is(.kb-card,.receipt-card,.mapping-row,.kp-demo,.kp-path)::after{border-color:rgba(186,224,232,.28)!important}
html body #why-now .kb-card,html body #the-difference .kb-card,html body #the-ask .kb-card{background:rgba(7,15,23,.54)!important;border-color:rgba(157,204,216,.36)!important}
html body #why .kb-list-row{border-color:var(--kt-line)!important}
html body #why .kb-list-row:hover{background:rgba(126,188,201,.08)!important}
html body #evidence .ev-ribbon,html body #soul .ev-ribbon,html body #soul .ks-sheen,html body .kt-tour-section .km-filament{display:none!important}
html body .kt-section-band{background:transparent!important;position:relative;z-index:1}
html body :is(#pitch-intro#pitch-intro,#what#what,#soul#soul,#why-it-matters#why-it-matters,#why-now#why-now,#the-difference#the-difference,#why#why,#evidence#evidence,#strategic-licensing#strategic-licensing,#the-ask#the-ask,#kb-contact#kb-contact).kt-tour-section{border:0!important;box-shadow:none!important}
html body .kt-machine-scan,html body #why-it-matters .kw-paths{display:none!important}
html body #pitch-intro#pitch-intro .kb-statement{border-top:0!important;padding-top:0!important;margin-top:32px!important}
html body #what#what.kt-tour-section{padding-top:72px!important;padding-bottom:76px!important}
html body :is(#why-now#why-now,#why#why,#the-ask#the-ask).kt-tour-section :is(h2,h3,h4,strong){color:#f3f6f8!important;text-shadow:0 2px 22px rgba(0,0,0,.52)}
html body :is(#why-now#why-now,#why#why,#the-ask#the-ask).kt-tour-section :is(p,li,.kb-lead,.kb-quote,.kb-list-row span){color:#d2dae0!important}
html body :is(#why-now#why-now,#why#why,#the-ask#the-ask).kt-tour-section a:not(.kp-button){color:#dec7ef!important;text-decoration-color:rgba(222,199,239,.64)!important}
html body #why-now#why-now .kb-grid{gap:22px!important}
html body #why-now#why-now .kb-card{background:linear-gradient(145deg,rgba(13,25,34,.92),rgba(5,12,18,.94))!important;border:1px solid rgba(166,207,218,.2)!important;border-radius:16px!important;padding:30px!important;box-shadow:0 24px 60px rgba(0,0,0,.2)!important}
html body #the-difference#the-difference .kb-grid{gap:18px!important;border:0!important}
html body #the-difference#the-difference .kb-card{background:linear-gradient(145deg,rgba(13,25,34,.9),rgba(5,12,18,.94))!important;border:1px solid rgba(166,207,218,.18)!important;border-radius:15px!important;padding:30px!important}
html body #the-difference#the-difference .kb-card:last-child{background:linear-gradient(145deg,rgba(28,34,46,.94),rgba(10,17,25,.96))!important;border-color:rgba(198,169,223,.3)!important}
html body #why#why .kb-list{display:grid!important;gap:10px!important}
html body #why#why .kb-list-row{background:linear-gradient(90deg,rgba(8,18,26,.9),rgba(8,18,26,.7))!important;border:0!important;border-radius:11px!important;padding:20px 24px!important;box-shadow:0 12px 36px rgba(0,0,0,.12)}
html body #why#why .kb-list-row:hover{background:linear-gradient(90deg,rgba(15,31,40,.94),rgba(9,20,28,.78))!important}
html body #the-ask#the-ask .kb-grid{gap:20px!important}
html body #the-ask#the-ask .kb-card{background:linear-gradient(145deg,rgba(13,25,34,.93),rgba(5,12,18,.95))!important;border:1px solid rgba(166,207,218,.2)!important;border-radius:16px!important;padding:30px!important;box-shadow:0 24px 60px rgba(0,0,0,.2)!important}
html body #evidence#evidence .receipt-heading>div{position:relative;padding:34px 36px!important;border-radius:18px;background:linear-gradient(100deg,rgba(3,10,15,.86),rgba(3,10,15,.5) 72%,rgba(3,10,15,.2));box-shadow:0 24px 70px rgba(0,0,0,.2);backdrop-filter:blur(4px)}
html body #evidence#evidence .receipt-heading :is(h2,.receipt-intro){text-shadow:0 2px 22px rgba(0,0,0,.72)}
html body #why#why{display:none!important}
html body #architecture .tier-content{display:grid!important;grid-template-columns:minmax(0,1.02fr) minmax(280px,.98fr);grid-template-areas:'kicker visual' 'title visual' 'purpose visual' 'facts visual' 'position position';align-content:center;column-gap:clamp(32px,4vw,68px);min-height:580px!important}
html body #architecture .tier-meta{display:none!important}
html body #architecture .kt-tier-kicker{grid-area:kicker;align-self:end;margin:0 0 16px;color:var(--kt-violet)!important;font:600 12px/1.2 ui-monospace,SFMono-Regular,Consolas,monospace;letter-spacing:.16em;text-transform:uppercase}
html body #architecture .tier-visual{grid-area:visual;align-self:stretch;min-height:360px;height:auto!important;margin:0!important}
html body #architecture .tier-content>h3{grid-area:title;align-self:end;margin:0!important;color:var(--kt-ink)!important;font-size:clamp(34px,3.2vw,54px)!important;line-height:1.02!important}
html body #architecture .tier-purpose{grid-area:purpose;margin:22px 0 0!important;color:#e8edf0!important;font-size:clamp(18px,1.55vw,24px)!important;line-height:1.45!important}
html body #architecture .tier-description{display:none!important}
html body #architecture .kt-tier-facts{grid-area:facts;display:grid;gap:18px;margin-top:28px}
html body #architecture .kt-tier-fact{padding-top:16px;border-top:1px solid rgba(177,215,225,.22)}
html body #architecture .kt-tier-label{display:block;margin-bottom:8px;color:var(--kt-violet)!important;font:600 11px/1.2 ui-monospace,SFMono-Regular,Consolas,monospace;letter-spacing:.14em;text-transform:uppercase}
html body #architecture .kt-tier-fact p,html body #architecture .kt-tier-fact strong{display:block;margin:0;color:var(--kt-muted)!important;font-size:16px!important;line-height:1.55!important}
html body #architecture .kt-tier-fact strong{color:var(--kt-ink)!important;font-weight:650!important}
html body #architecture .tier-position{grid-area:position;margin-top:32px!important}
html body .kt-reveal{opacity:var(--kt-reveal,0)!important;transform:translate3d(0,var(--kt-reveal-y,34px),0)!important;will-change:transform,opacity}
html body .kt-reveal.kt-readable{will-change:auto}
html body #soul .kb-grid{perspective:1200px}
html body #soul .kb-card.kt-reveal{transform:translate3d(0,var(--kt-reveal-y,34px),0) rotateX(var(--kt-tilt,5deg))!important;transform-origin:50% 100%}
html body #soul .kb-card::before{content:'';position:absolute;left:24px;right:24px;top:0;height:1px;background:linear-gradient(90deg,transparent,var(--kt-teal),var(--kt-violet),transparent);opacity:var(--kt-card-light,.3);box-shadow:0 0 18px rgba(141,226,232,.28)}
@keyframes kt-grain{0%{transform:translate3d(-3%,-2%,0)}50%{transform:translate3d(3%,2%,0)}100%{transform:translate3d(-3%,-2%,0)}}
@media(max-width:767px){.kt-machine-scene{inset:0;transform:scale(1.12)!important;background-position:center;will-change:opacity}.kt-machine-scene[data-scene="2"]{background-position:64% center}.kt-machine-scene[data-scene="3"]{background-position:66% center}.kt-machine-vignette{background:linear-gradient(180deg,rgba(4,10,16,.94),rgba(4,10,16,.58) 35%,rgba(4,10,16,.9))}.kt-machine-jamb,.kt-machine-rail,.kt-machine-status,.kt-machine-scan{display:none}html body .kt-tour-section::before{background:rgba(5,12,18,.79)!important}html body .kt-tour-section::after{height:78px}html body #what#what.kt-tour-section{padding-top:54px!important;padding-bottom:58px!important}html body .kt-tour-section :is(.kb-card,.receipt-card,.mapping-row,.receipt-scope,.kp-demo,.kp-path){backdrop-filter:none}html body #evidence#evidence .receipt-heading>div{padding:26px 22px!important;background:rgba(3,10,15,.7);backdrop-filter:none}html body #architecture .tier-content{display:flex!important;min-height:0!important}html body #architecture .tier-visual{display:none!important}html body #architecture .kt-tier-kicker{margin-bottom:12px}html body #architecture .tier-content>h3{font-size:34px!important}html body #architecture .tier-purpose{margin-top:16px!important}html body #architecture .kt-tier-facts{margin-top:24px}html body #architecture .tier-position{margin-top:28px!important}}
@media(prefers-reduced-motion:reduce){.kt-machine-grain{animation:none!important}.kt-machine-scene{transform:scale(1.06)!important;will-change:auto}.kt-machine-scan,.kt-machine-jamb{transform:none!important}.kt-machine-rail span{transition:none!important}html body .kt-reveal,html body #soul .kb-card.kt-reveal{opacity:1!important;transform:none!important;will-change:auto}}
@media print{.kt-machine-env{display:none!important}html body .kt-tour-section{background:#fff!important;color:#111!important}html body .kt-reveal{opacity:1!important;transform:none!important}}
`;document.head.append(style)})();

(()=>{
  function init(){
    if(document.querySelector('.kt-machine-env'))return true;
    if(!document.documentElement.dataset.kpPremium||!document.querySelector('#what .kp-demo')||!document.querySelector('#evidence .receipt-grid'))return false;
    const tierDetails=[
      ['Untrusted startup','Verifies identity, configuration, components, and governing policies before execution.'],
      ['Signal drift','Detects conflicting, repetitive, or unstable input patterns.'],
      ['Execution instability','Keeps timing and system processes coordinated.'],
      ['Fragmented intelligence','Unifies context, goals, reasoning, and decision-making.'],
      ['Uncontrolled actions','Keeps workflows inside approved permissions and boundaries.'],
      ['Compounding errors','Detects contradictions and interrupts runaway reasoning loops.'],
      ['Identity drift','Maintains consistent identity, behavior, and response governance.'],
      ['Uncorrected failures','Connects detection to controlled intervention and recovery.'],
      ['Memory breakdown','Preserves context, provenance, and governed memory continuity.'],
      ['Policy violations','Evaluates decisions against defined rules before authorization.'],
      ['Unsafe behavior','Enforces restrictions, containment, and evidence-based release.'],
      ['Compromised operation','Locks down unsafe states and coordinates trusted restoration.']
    ];
    const bridge=document.getElementById('why');
    if(bridge){const band=bridge.parentElement;bridge.remove();if(band?.classList.contains('section-band')&&!band.children.length)band.remove()}
    document.querySelectorAll('#architecture .tier-panel').forEach((panel,index)=>{
      if(panel.querySelector('.kt-tier-facts')||!tierDetails[index])return;
      const content=panel.querySelector('.tier-content');
      const title=content?.querySelector('h3');
      const purpose=content?.querySelector('.tier-purpose');
      if(!content||!title||!purpose)return;
      const kicker=document.createElement('p');
      kicker.className='kt-tier-kicker';
      kicker.textContent=`Tier ${String(index).padStart(2,'0')}`;
      title.before(kicker);
      const facts=document.createElement('div');
      facts.className='kt-tier-facts';
      facts.innerHTML=`<div class="kt-tier-fact"><span class="kt-tier-label">What it does</span><p>${tierDetails[index][1]}</p></div><div class="kt-tier-fact"><span class="kt-tier-label">Problem it solves</span><strong>${tierDetails[index][0]}</strong></div>`;
      purpose.after(facts);
    });
    const sectionIds=['pitch-intro','what','soul','why-it-matters','why-now','the-difference','evidence','strategic-licensing','the-ask','kb-contact'];
    const sections=sectionIds.map(id=>document.getElementById(id)).filter(Boolean);
    const soulTitle=document.querySelector('#soul h2');
    if(soulTitle)soulTitle.textContent='What is the S.O.U.L of AI?';
    sections.forEach(section=>{section.classList.add('kt-tour-section');if(section.parentElement?.classList.contains('section-band'))section.parentElement.classList.add('kt-section-band')});
    const environment=document.createElement('div');
    environment.className='kt-machine-env';
    environment.setAttribute('aria-hidden','true');
    environment.innerHTML=`<div class="kt-machine-scene" data-scene="1"></div><div class="kt-machine-scene" data-scene="2"></div><div class="kt-machine-scene" data-scene="3"></div><div class="kt-machine-scene" data-scene="4"></div><div class="kt-machine-scene" data-scene="5"></div><div class="kt-machine-scene" data-scene="6"></div><div class="kt-machine-vignette"></div><div class="kt-machine-grain"></div><div class="kt-machine-scan"></div><div class="kt-machine-jamb kt-machine-jamb-left"></div><div class="kt-machine-jamb kt-machine-jamb-right"></div><div class="kt-machine-status">Room 01 / Entry</div><div class="kt-machine-rail">${'<span></span>'.repeat(6)}</div>`;
    document.body.prepend(environment);
    document.body.classList.add('kt-tour-ready');
    const sceneElements=[...environment.querySelectorAll('.kt-machine-scene')];
    const status=environment.querySelector('.kt-machine-status');
    const rail=[...environment.querySelectorAll('.kt-machine-rail span')];
    const labels=['Room 01 / Entry','Room 02 / Runtime','Room 03 / Control Plane','Room 04 / Connected Core','Room 05 / Oversight','Room 06 / Evidence Vault'];
    const beats=[
      {element:document.getElementById('pitch-intro'),scene:0},
      {element:document.getElementById('what'),scene:1},
      {element:document.querySelector('#what .kp-demo'),scene:2},
      {element:document.getElementById('soul'),scene:3},
      {element:document.getElementById('why-it-matters'),scene:4},
      {element:document.getElementById('architecture'),scene:-1},
      {element:document.getElementById('evidence'),scene:5}
    ].filter(beat=>beat.element);
    const revealTargets=[];
    sections.forEach(section=>{
      section.querySelectorAll('h2,.kb-label,.section-label,.kb-lead,.kb-statement,.kb-card,.receipt-card,.mapping-row,.kp-demo,.kp-path,.kp-diligence,.kp-business,.kp-distinction').forEach((element,index)=>{
        if(element.closest('.kb-card')&&element.closest('.kb-card')!==element)return;
        if(element.closest('.receipt-card')&&element.closest('.receipt-card')!==element)return;
        if(element.closest('.kp-demo')&&element.closest('.kp-demo')!==element)return;
        element.classList.add('kt-reveal');
        revealTargets.push({element,delay:index%4});
      });
    });
    const reduced=matchMedia('(prefers-reduced-motion: reduce)');
    const mobile=matchMedia('(max-width:767px)');
    const clamp=value=>Math.max(0,Math.min(1,value));
    const smooth=value=>value*value*(3-2*value);
    let frame=0,lookX=0,lookY=0,positions=[];
    function measure(){positions=beats.map(beat=>beat.element.getBoundingClientRect().top+scrollY)}
    function paint(){
      frame=0;
      if(document.hidden)return;
      const viewport=innerHeight;
      const probe=scrollY+viewport*.56;
      let beatIndex=0;
      for(let index=0;index<positions.length;index+=1){if(probe>=positions[index])beatIndex=index}
      const current=beats[beatIndex];
      const next=beats[beatIndex+1];
      let blend=0;
      if(next){const blendStart=positions[beatIndex+1]-viewport*.58;blend=smooth(clamp((probe-blendStart)/(viewport*.62)))}
      const weights=new Array(sceneElements.length).fill(0);
      if(current.scene>=0)weights[current.scene]+=1-blend;
      if(next?.scene>=0)weights[next.scene]+=blend;
      const activeScene=blend>.5&&next?next.scene:current.scene;
      sceneElements.forEach((scene,index)=>{scene.style.setProperty('--kt-opacity',weights[index].toFixed(4));scene.style.setProperty('--kt-scale',(1.075+weights[index]*.035+blend*.012).toFixed(4))});
      const visibleScene=activeScene>=0?activeScene:(next?.scene>=0?next.scene:current.scene);
      status.textContent=visibleScene>=0?labels[visibleScene]:'Architecture / Anatomy';
      rail.forEach((node,index)=>node.classList.toggle('is-active',index===visibleScene));
      environment.style.setProperty('--kt-look-x',(reduced.matches||mobile.matches?0:lookX).toFixed(2)+'px');
      environment.style.setProperty('--kt-look-y',(reduced.matches||mobile.matches?0:lookY).toFixed(2)+'px');
      const journeyStart=positions[0]||0;
      const journeyEnd=positions[positions.length-1]||journeyStart+1;
      const journey=clamp((probe-journeyStart)/Math.max(1,journeyEnd-journeyStart));
      environment.style.setProperty('--kt-door',(journey*82).toFixed(2));
      environment.style.setProperty('--kt-scan-y',(journey*viewport*.68).toFixed(2)+'px');
      environment.style.setProperty('--kt-scan-opacity',activeScene<0?'0':'.36');
      revealTargets.forEach(target=>{
        const box=target.element.getBoundingClientRect();
        const delay=mobile.matches?0:target.delay*viewport*.018;
        const raw=reduced.matches?1:clamp((viewport*.93-box.top-delay)/(viewport*.28));
        const eased=1-Math.pow(1-raw,3);
        target.element.style.setProperty('--kt-reveal',eased.toFixed(4));
        target.element.style.setProperty('--kt-reveal-y',((1-eased)*(mobile.matches?18:36)).toFixed(2)+'px');
        if(target.element.matches('#soul .kb-card')){target.element.style.setProperty('--kt-tilt',((1-eased)*6).toFixed(2)+'deg');target.element.style.setProperty('--kt-card-light',(0.2+eased*.55).toFixed(3))}
        target.element.classList.toggle('kt-readable',eased>.999);
      });
    }
    function schedule(){if(!frame&&!document.hidden)frame=requestAnimationFrame(paint)}
    function refresh(){measure();schedule()}
    window.addEventListener('scroll',schedule,{passive:true});
    window.addEventListener('resize',refresh,{passive:true});
    window.addEventListener('pointermove',event=>{if(mobile.matches||reduced.matches)return;lookX=((event.clientX/innerWidth)-.5)*-14;lookY=((event.clientY/innerHeight)-.5)*-10;schedule()},{passive:true});
    document.addEventListener('visibilitychange',schedule);
    reduced.addEventListener('change',refresh);
    mobile.addEventListener('change',refresh);
    document.fonts.ready.then(refresh);
    new ResizeObserver(refresh).observe(document.body);
    refresh();
    return true;
  }
  if(!init()){let attempts=0;const timer=setInterval(()=>{if(init()||++attempts>80)clearInterval(timer)},250)}
})();
