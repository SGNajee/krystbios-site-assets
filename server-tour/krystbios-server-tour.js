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
html body #pitch-intro#pitch-intro .kt-thesis-statement{max-width:920px;margin:22px auto 0;color:#e8edf0!important;font-size:clamp(24px,3vw,42px)!important;font-weight:650;line-height:1.15;text-align:center;text-wrap:balance}
html body #what#what.kt-tour-section{padding-top:72px!important;padding-bottom:76px!important}
html body :is(#why-now#why-now,#why#why,#the-ask#the-ask).kt-tour-section :is(h2,h3,h4,strong){color:#f3f6f8!important;text-shadow:0 2px 22px rgba(0,0,0,.52)}
html body :is(#why-now#why-now,#why#why,#the-ask#the-ask).kt-tour-section :is(p,li,.kb-lead,.kb-quote,.kb-list-row span){color:#d2dae0!important}
html body :is(#why-now#why-now,#why#why,#the-ask#the-ask).kt-tour-section a:not(.kp-button){color:#dec7ef!important;text-decoration-color:rgba(222,199,239,.64)!important}
html body #why-now#why-now .kb-grid{gap:22px!important}
html body #why-now#why-now .kb-card{background:linear-gradient(145deg,rgba(13,25,34,.92),rgba(5,12,18,.94))!important;border:1px solid rgba(166,207,218,.2)!important;border-radius:16px!important;padding:30px!important;box-shadow:0 24px 60px rgba(0,0,0,.2)!important}
html body #the-difference#the-difference .kb-inner{display:block!important}
html body #the-difference#the-difference .kb-grid{gap:18px!important;border:0!important}
html body #the-difference#the-difference .kb-inner>h2{width:100%!important;max-width:none!important;margin:0 auto 36px!important;text-align:center!important}
html body #the-difference#the-difference .kt-difference-summary{width:100%!important;max-width:900px!important;margin:38px auto 0!important;color:#b8c2ca!important;font-size:18px!important;line-height:1.75!important;text-align:center!important;text-wrap:balance!important}
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
html body #architecture .tier-content{display:grid!important;grid-template-columns:minmax(0,1.3fr) minmax(250px,.7fr);grid-template-areas:'kicker visual' 'title visual' 'purpose visual' 'facts visual' 'position position';align-content:center;column-gap:clamp(28px,3.2vw,52px);min-height:580px!important}
html body #architecture .tier-meta{display:none!important}
html body #architecture .kt-tier-kicker{grid-area:kicker;align-self:end;margin:0 0 16px;color:var(--kt-violet)!important;font:600 12px/1.2 ui-monospace,SFMono-Regular,Consolas,monospace;letter-spacing:.16em;text-transform:uppercase}
html body #architecture .tier-visual{grid-area:visual;align-self:stretch;min-height:360px;height:auto!important;margin:0!important}
html body #architecture .tier-content>h3{grid-area:title;align-self:end;max-width:100%!important;margin:0!important;color:var(--kt-ink)!important;font-size:clamp(30px,2.35vw,38px)!important;line-height:1.08!important;text-wrap:balance!important}
html body #architecture .tier-purpose{grid-area:purpose;max-width:100%!important;margin:22px 0 0!important;color:#e8edf0!important;font-size:clamp(18px,1.3vw,20px)!important;line-height:1.5!important;text-wrap:balance!important}
html body #architecture .tier-description{display:none!important}
html body #architecture .kt-tier-facts{grid-area:facts;display:grid;gap:18px;margin-top:28px}
html body #architecture .kt-tier-fact{padding-top:16px;border-top:1px solid rgba(177,215,225,.22)}
html body #architecture .kt-tier-label{display:block;margin-bottom:8px;color:var(--kt-violet)!important;font:600 11px/1.2 ui-monospace,SFMono-Regular,Consolas,monospace;letter-spacing:.14em;text-transform:uppercase}
html body #architecture .kt-tier-fact p,html body #architecture .kt-tier-fact strong{display:block;margin:0;color:var(--kt-muted)!important;font-size:16px!important;line-height:1.55!important}
html body #architecture .kt-tier-fact strong{color:var(--kt-ink)!important;font-weight:650!important}
html body #architecture .kt-tier-concerns{display:grid;gap:5px;margin:0;padding:0;list-style:none}
html body #architecture .kt-tier-concerns li{position:relative;margin:0;padding-left:15px;color:var(--kt-ink)!important;font-size:14px!important;line-height:1.4!important}
html body #architecture .kt-tier-concerns li::before{content:'';position:absolute;left:0;top:.58em;width:5px;height:5px;border-radius:50%;background:var(--kt-violet);box-shadow:0 0 9px rgba(198,169,223,.38)}
html body #architecture .tier-position{grid-area:position;margin-top:32px!important}
html body #architecture .wf-panel-08 .memory-film-scene video{object-fit:contain!important;object-position:72% center!important;transform:scale(.72)!important;transform-origin:72% 50%!important}
html body #architecture .wf-panel-01 .dragon-film{transform:scale(.9)!important;transform-origin:right center!important}
html body #architecture .wf-panel-04 .dragon-film{filter:brightness(1.4)!important}
html body #architecture .wf-panel-04 .dragon-film-shade{display:none!important}
html body #architecture .kt-architecture-outro{position:relative;z-index:2;margin-top:0;padding:clamp(44px,6vw,82px) clamp(24px,5vw,72px);background:#071018!important;border-radius:0 0 18px 18px;box-shadow:0 30px 80px rgba(0,0,0,.38)}
html body #architecture .kt-architecture-outro .architecture-closing{margin-top:0!important}
html body #architecture .kt-architecture-outro .architecture-summary{margin-bottom:0!important}
html body #evidence .alignment-heading{position:relative;padding:36px!important;background:linear-gradient(145deg,rgba(18,31,40,.94),rgba(7,14,21,.97))!important;border:1px solid rgba(151,194,207,.42)!important;border-radius:18px!important;box-shadow:0 22px 70px rgba(0,0,0,.34)!important;backdrop-filter:blur(10px)}
html body #evidence .alignment-heading h3{max-width:900px;margin-left:auto!important;margin-right:auto!important;color:var(--kt-ink)!important;text-shadow:0 2px 20px rgba(0,0,0,.5)}
html body #evidence .alignment-heading .muted{max-width:900px;margin-left:auto!important;margin-right:auto!important;color:#d2dae0!important}
html body .kt-reveal{opacity:var(--kt-reveal,0)!important;transform:translate3d(0,var(--kt-reveal-y,34px),0)!important;will-change:transform,opacity}
html body .kt-reveal.kt-readable{will-change:auto}
html body #soul .kb-grid{perspective:1200px}
html body #soul .kb-card.kt-reveal{transform:translate3d(0,var(--kt-reveal-y,34px),0) rotateX(var(--kt-tilt,5deg))!important;transform-origin:50% 100%}
html body #soul .kb-card::before{content:'';position:absolute;left:24px;right:24px;top:0;height:1px;background:linear-gradient(90deg,transparent,var(--kt-teal),var(--kt-violet),transparent);opacity:var(--kt-card-light,.3);box-shadow:0 0 18px rgba(141,226,232,.28)}
@keyframes kt-grain{0%{transform:translate3d(-3%,-2%,0)}50%{transform:translate3d(3%,2%,0)}100%{transform:translate3d(-3%,-2%,0)}}
@media(max-width:767px){.kt-machine-scene{inset:0;transform:scale(1.12)!important;background-position:center;will-change:opacity}.kt-machine-scene[data-scene="2"]{background-position:64% center}.kt-machine-scene[data-scene="3"]{background-position:66% center}.kt-machine-vignette{background:linear-gradient(180deg,rgba(4,10,16,.94),rgba(4,10,16,.58) 35%,rgba(4,10,16,.9))}.kt-machine-jamb,.kt-machine-rail,.kt-machine-status,.kt-machine-scan{display:none}html body .kt-tour-section::before{background:rgba(5,12,18,.79)!important}html body .kt-tour-section::after{height:78px}html body #what#what.kt-tour-section{padding-top:54px!important;padding-bottom:58px!important}html body .kt-tour-section :is(.kb-card,.receipt-card,.mapping-row,.receipt-scope,.kp-demo,.kp-path){backdrop-filter:none}html body #evidence#evidence .receipt-heading>div{padding:26px 22px!important;background:rgba(3,10,15,.7);backdrop-filter:none}html body #architecture .tier-content{display:flex!important;min-height:0!important}html body #architecture .tier-visual{display:none!important}html body #architecture .kt-tier-kicker{margin-bottom:12px}html body #architecture .tier-content>h3{font-size:34px!important}html body #architecture .tier-purpose{margin-top:16px!important}html body #architecture .kt-tier-facts{margin-top:24px}html body #architecture .tier-position{margin-top:28px!important}html body #architecture .kt-architecture-outro{padding:38px 22px}html body #evidence .alignment-heading{padding:26px 22px!important;backdrop-filter:none}}
@media(prefers-reduced-motion:reduce){.kt-machine-grain{animation:none!important}.kt-machine-scene{transform:scale(1.06)!important;will-change:auto}.kt-machine-scan,.kt-machine-jamb{transform:none!important}.kt-machine-rail span{transition:none!important}html body .kt-reveal,html body #soul .kb-card.kt-reveal{opacity:1!important;transform:none!important;will-change:auto}}
@media print{.kt-machine-env{display:none!important}html body .kt-tour-section{background:#fff!important;color:#111!important}html body .kt-reveal{opacity:1!important;transform:none!important}}
`;document.head.append(style)})();

(()=>{
  function init(){
    if(document.querySelector('.kt-machine-env'))return true;
    if(!document.documentElement.dataset.kpPremium||!document.querySelector('#what .kp-demo')||!document.querySelector('#evidence .receipt-grid'))return false;
    const tierDetails=[
      ['Verifies identity, configuration, components, and governing policies before execution.',['Unverified identity or components','Unsigned or altered governing policy','Incomplete or unsafe startup sequences']],
      ['Detects conflicting, repetitive, or unstable input patterns.',['Conflicting input signals','Repetitive or unstable language patterns','Lost symbolic or contextual continuity']],
      ['Keeps timing and system processes coordinated.',['Timing and phase drift','Unbounded recursive cycles','Operating-state threshold breaches']],
      ['Unifies context, goals, reasoning, and decision-making.',['Fragmented context and goals','Contradictory reasoning signals','Uncoordinated decisions across tiers']],
      ['Keeps movement within approved permissions and constraints.',['Unauthorized state transitions','Constraint-breaking routes','Untraceable goal execution']],
      ['Detects contradictions and interrupts runaway reasoning loops.',['Runaway reasoning loops','Contradictory interpretations','Lost reasoning provenance']],
      ['Maintains consistent identity, behavior, and response governance.',['Persona and identity drift','Inconsistent behavioral policy','Uncontrolled adaptation across interactions']],
      ['Connects detection to controlled intervention and recovery.',['Undetected hostile or unsafe input','Disconnected risk signals','Failures without explainable repair paths']],
      ['Preserves context, provenance, and governed memory continuity.',['Unsupported memory becoming authoritative','Lost provenance or context','Retrieval outside retention policy']],
      ['Evaluates decisions against defined rules before authorization.',['Policy violations before execution','Unsigned or outdated rule sets','Decisions without traceable verdicts']],
      ['Enforces restrictions, containment, and evidence-based release.',['Governance verdicts not enforced','Unsafe states escaping containment','Release without evidence or renewed authority']],
      ['Locks down unsafe states and coordinates trusted restoration.',['Compromised runtime integrity','Drift from a trusted baseline','Unsafe restoration or reopening']]
    ];
    const bridge=document.getElementById('why');
    if(bridge){const band=bridge.parentElement;bridge.remove();if(band?.classList.contains('section-band')&&!band.children.length)band.remove()}
    document.querySelectorAll('#architecture .tier-panel').forEach((panel,index)=>{
      if(panel.querySelector('.kt-tier-facts')||!tierDetails[index])return;
      const content=panel.querySelector('.tier-content');
      const title=content?.querySelector('h3');
      const purpose=content?.querySelector('.tier-purpose');
      if(!content||!title||!purpose)return;
      if(index===4)purpose.textContent='Gives intelligence a map and an authorized way to move through it.';
      const kicker=document.createElement('p');
      kicker.className='kt-tier-kicker';
      kicker.textContent=`Tier ${String(index).padStart(2,'0')}`;
      title.before(kicker);
      const facts=document.createElement('div');
      facts.className='kt-tier-facts';
      facts.innerHTML=`<div class="kt-tier-fact"><span class="kt-tier-label">What it does</span><p>${tierDetails[index][0]}</p></div><div class="kt-tier-fact"><span class="kt-tier-label">Key concerns addressed</span><ul class="kt-tier-concerns">${tierDetails[index][1].map(concern=>`<li>${concern}</li>`).join('')}</ul></div>`;
      purpose.after(facts);
      [...panel.querySelectorAll('*')].filter(element=>element.textContent.trim()==='One governed intelligence').forEach(element=>element.remove());
    });
    const architectureClosing=document.querySelector('#architecture .architecture-closing');
    const architectureSummary=document.querySelector('#architecture .architecture-summary');
    if(architectureClosing&&architectureSummary&&!architectureClosing.parentElement?.classList.contains('kt-architecture-outro')){
      const outro=document.createElement('div');
      outro.className='kt-architecture-outro';
      architectureClosing.before(outro);
      outro.append(architectureClosing,architectureSummary);
    }
    ['strategic-licensing','the-ask'].forEach(id=>{
      const section=document.getElementById(id);
      if(!section)return;
      const band=section.parentElement;
      section.remove();
      if(band?.classList.contains('section-band')&&!band.children.length)band.remove();
    });
    document.querySelectorAll('a[href="#strategic-licensing"],a[href="#the-ask"]').forEach(link=>link.remove());
    const sectionIds=['pitch-intro','what','soul','why-it-matters','why-now','the-difference','evidence','kb-contact'];
    const sections=sectionIds.map(id=>document.getElementById(id)).filter(Boolean);
    const thesisSection=document.getElementById('pitch-intro');
    const thesisTitle=thesisSection?.querySelector('h2');
    thesisSection?.querySelector('.kb-label')?.remove();
    if(thesisTitle){
      thesisTitle.textContent='The KrystBios Thesis';
      const statement=document.createElement('p');
      statement.className='kt-thesis-statement';
      statement.textContent='The next generation of intelligence needs governance.';
      thesisTitle.after(statement);
    }
    const thesisCopy=document.querySelector('#pitch-intro .kb-lead');
    if(thesisCopy)thesisCopy.textContent='As AI gains greater capability, autonomy, memory, tool access, and institutional responsibility, the infrastructure governing its execution must become equally capable. KrystBios brings permissions, memory, identity, oversight, and recovery into one runtime governance architecture.';
    const soulTitle=document.querySelector('#soul h2');
    if(soulTitle)soulTitle.textContent='What is the S.O.U.L of AI?';
    const architectureLabel=[...document.querySelectorAll('#architecture .section-label')].find(label=>label.textContent.trim()==='Architecture');
    if(architectureLabel)architectureLabel.remove();
    const alignment=document.querySelector('#evidence .alignment');
    const alignmentHeading=alignment?.querySelector('.alignment-heading');
    if(alignmentHeading){
      alignmentHeading.querySelector('.section-label')?.remove();
      const alignmentCopy=alignmentHeading.querySelector('.muted');
      if(alignmentCopy)alignmentCopy.textContent='Documented evidence connects governance, risk assessment, testing, and response to technical implementation. This alignment shows how the architecture addresses AI risks already recognized by serious organizations. This gives organizations a familiar framework for evaluating how KrystBios governs AI risk.';
      [...alignment.children].forEach(child=>{if(child!==alignmentHeading&&!child.classList.contains('mapping'))child.remove()});
    }
    const difference=document.getElementById('the-difference');
    if(difference){
      const inner=difference.querySelector('.kb-inner');
      const title=inner?.querySelector('h2');
      const grid=inner?.querySelector('.kb-grid');
      if(inner&&title&&grid){
        [...inner.children].forEach(child=>{if(child!==title&&child!==grid)child.remove()});
        title.textContent='Critical Control AI Infrastructure.';
        const summary=document.createElement('p');
        summary.className='kt-difference-summary';
        summary.textContent='KrystBios is a Runtime Governance Layer, positioned as Critical Control AI Infrastructure. SaaS describes how software is delivered. KrystBios’s positioning describes its role: governing AI while it operates. Most AI controls inspect one moment. KrystBios governs the full operating lifecycle, from startup verification and runtime decisions to enforcement, recovery, and evidence.';
        title.style.cssText='width:100%;max-width:none;margin:0 auto 36px;text-align:center';
        summary.style.cssText='width:100%;max-width:900px;margin:38px auto 0;color:#b8c2ca;font-size:18px;line-height:1.75;text-align:center;text-wrap:balance';
        grid.after(summary);
      }
    }
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
