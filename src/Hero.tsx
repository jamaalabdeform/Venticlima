import {useEffect, useRef, useState} from 'react';

const scenes = [
  {image:'roof.jpg', label:'Climatisation', alt:'Équipements de ventilation sur un bâtiment industriel'},
  {image:'ventilation.jpg', label:'Ventilation', alt:'Réseau de gaines de ventilation en intérieur'},
  {image:'rooftop.jpg', label:'Maintenance', alt:'Installations techniques de climatisation en toiture'},
];
const duration = 7000;

export function Hero(){
  const root = useRef<HTMLElement>(null);
  const progress = useRef<HTMLSpanElement>(null);
  const elapsed = useRef(0);
  const [active,setActive] = useState(0);
  const [paused,setPaused] = useState(false);
  const [reduced,setReduced] = useState(true);
  const [visible,setVisible] = useState(true);
  const [foreground,setForeground] = useState(true);
  const running = !paused && !reduced && visible && foreground;

  useEffect(()=>{
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const preference = ()=>setReduced(media.matches);
    const visibility = ()=>setForeground(!document.hidden);
    preference(); visibility();
    media.addEventListener('change',preference);
    document.addEventListener('visibilitychange',visibility);
    const observer = new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting),{threshold:.05});
    if(root.current) observer.observe(root.current);
    return ()=>{media.removeEventListener('change',preference);document.removeEventListener('visibilitychange',visibility);observer.disconnect()};
  },[]);

  useEffect(()=>{
    if(!running) return;
    let frame:number;
    let previous = performance.now();
    const tick = (now:number)=>{
      elapsed.current += Math.min(now-previous,100);
      previous = now;
      if(elapsed.current >= duration){
        elapsed.current = 0;
        setActive(value=>(value+1)%scenes.length);
      }
      if(progress.current) progress.current.style.transform = 'scaleX('+elapsed.current/duration+')';
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return ()=>cancelAnimationFrame(frame);
  },[running]);

  const select = (index:number)=>{
    elapsed.current = 0;
    if(progress.current) progress.current.style.transform = 'scaleX(0)';
    setActive(index);
  };

  return <section ref={root} className="hero hero-dynamic" data-running={running} data-reduced={reduced} aria-label="Venticlima, maîtrise climatique">
    <div className="hero-scenes">
      {scenes.map((scene,index)=><div key={scene.image} className="hero-scene" data-active={active===index} aria-hidden={active!==index}>
        <img className="hero-frame" src={'/assets/'+scene.image} alt={scene.alt} fetchPriority={index===0?'high':'auto'} width="1920" height="1440"/>
      </div>)}
    </div>
    <div className="hero-shade"/>
    <svg className="hero-flow" viewBox="0 0 1000 500" fill="none" aria-hidden="true">
      <path className="flow-guide" d="M-80 440C280 440 310 110 690 110H1080M-80 480C300 480 340 170 720 170H1080"/>
      <path className="flow-current" d="M-80 440C280 440 310 110 690 110H1080M-80 480C300 480 340 170 720 170H1080"/>
    </svg>
    <div className="hero-content">
      <h1><span>Le climat maîtrisé.</span><span>Votre activité préservée.</span></h1>
      <p>Climatisation, ventilation, froid et maintenance.<br/>Votre partenaire technique à Agadir.</p>
      <a className="hero-cta" href="/contact">Étudier mon projet <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg></a>
    </div>
    <div className="hero-bottom">
      <div className="hero-controls" role="group" aria-label="Vues des installations">
        {scenes.map((scene,index)=><button type="button" className="hero-scene-button" key={scene.label} aria-pressed={active===index} onClick={()=>select(index)}><span className="scene-number">0{index+1}</span>{scene.label}<span className="scene-track">{active===index&&<span ref={progress}/>}</span></button>)}
        <button type="button" className="hero-pause" aria-label={paused?'Reprendre l’animation':'Mettre l’animation en pause'} aria-pressed={paused} onClick={()=>setPaused(value=>!value)} disabled={reduced}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">{paused?<path d="m6 3 11 7-11 7Z"/>:<path d="M5 3h3v14H5zm7 0h3v14h-3z"/>}</svg>
        </button>
      </div>
      <a className="hero-discover" href="#expertises">Découvrir nos expertises <span aria-hidden="true">↓</span></a>
    </div>
  </section>;
}
