export default function Home() {
  return (
    <main style={{
      minHeight:'100vh',
      background:'#F6EEDC',
      color:'#111827',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      padding:'2rem',
      textAlign:'center',
      fontFamily:'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
    }}>
      <div style={{maxWidth:900}}>
        <h1 style={{fontSize:'clamp(32px,6vw,56px)',margin:'0 0 8px'}}>MIND VOYAGE SUPPLY CO.</h1>
        <div style={{letterSpacing:'.22em',fontSize:12,marginBottom:24}}>GET INOCK’D UP</div>
        <h2 style={{fontSize:'clamp(18px,3vw,28px)',margin:'0 0 16px'}}>
          Ready-to-use mushroom grow bags for easy home cultivation.
        </h2>
        <p style={{
          fontFamily:'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
          color:'#374151', margin:'0 0 20px'
        }}>
          We supply the bags and gear so you can inoculate and harvest with less guesswork.
        </p>
        <p>
          <a href="#shop" style={{display:'inline-block',padding:'12px 18px',borderRadius:12,
            background:'#111827',color:'#fff',textDecoration:'none',fontWeight:600,margin:'0 8px'}}>Shop Grow Bags</a>
          <a href="#how" style={{display:'inline-block',padding:'12px 18px',borderRadius:12,
            border:'1px solid rgba(0,0,0,.15)',textDecoration:'none',fontWeight:600,margin:'0 8px'}}>How It Works</a>
        </p>
        <small style={{color:'#6b7280'}}>© {new Date().getFullYear()} Mind Voyage Supply Co. • Supplies only</small>
      </div>
    </main>
  );
}
