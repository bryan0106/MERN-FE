import { useCallback, useContext, useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react';
import '../App.css';
import { themcontext } from '../context';




const reduceme = ( state:{valme:string} ,action:{type:string})=>{
    switch(action.type)
    {
        case'1': return{valme:state.valme +"1"}
        case'2': return{valme:state.valme +"2"}
        case'3': return{valme:state.valme +"3"}
        case'4': return{valme:state.valme +"4"}
default:return{valme:state.valme +"0"}
    }
}


function Test(){
////////////////// usecontext
    const {modecolor , setmode} = useContext(themcontext);
function toogle (){
setmode(sss=>(sss === 'light'?'dark':'light'));
}


///////////////usereducer
const  [state , dispatch] = useReducer(reduceme ,{valme:"0"});


///////////////////useref
const inputref = useRef<HTMLInputElement>(null);
function userf(){
if(inputref.current)
{inputref.current.focus();
    inputref.current.value ="213";}
}

//////////////useeffect

const [psize , setpsize] = useState("");
const pref = useRef<HTMLParagraphElement>(null);
useEffect(()=>{
    if(pref.current)
    {
        pref.current.style.width='200px';
         pref.current.style.height='100px';
setpsize(pref.current.offsetWidth.toString()+"XX"+pref.current.offsetHeight.toString())
console.log('a');
    }
},[]);

//////////////uselayoueffect
  const targetRef = useRef<HTMLParagraphElement>(null);
  const tooltipRef = useRef<HTMLParagraphElement>(null);
    useLayoutEffect(() => {
 if (targetRef.current && tooltipRef.current) {
tooltipRef.current.style.display='none';
    }
  }, []);

  function toal(){
     if (targetRef.current && tooltipRef.current) {
tooltipRef.current.style.display='flex';
    }
  }
   function leac(){
     if (targetRef.current && tooltipRef.current) {
tooltipRef.current.style.display='none';
    }
  }

















//////////////////////// usecallback
  const [rend , setren]=useState('ad');
  const [cont , setcon] = useState(0);

  const callbac = useCallback(()=>{
    console.log(`Current captured rend: ${rend} ==== captured cont: ${cont}`);
    alert(`Current captured rend: ${rend} ==== captured cont: ${cont}`);
    setcon(prevCont => {
      const newCont = prevCont + 1;
      return newCont;
    });
  },[rend]); 








    return(
<main>
     <header>
        Usecontext<br/>
{modecolor}
<button onClick={toogle}>asd</button>
</header>

<section>
    <hr />
    UseReducer<br/>
{state.valme}
<button onClick={()=>{dispatch({type:'1'})}}>1</button>
<button onClick={()=>{dispatch({type:'2'})}}>2</button>
<button onClick={()=>{dispatch({type:'3'})}}>3</button>
<button onClick={()=>{dispatch({type:'4'})}}>4</button>
    </section>


<section>
    <hr />
useRef<br/>
<input type="text" ref={inputref} name="" id="" />
<button onClick={() => userf()}>useref</button>
</section>

<section>
    <hr />
  Usecallback <br/>

     <p>Rend: {rend}</p>
      <p>Cont: {cont}</p>
  <input type="text"
onChange={(e)=>setren(e.target.value)} name="" id="" />
<button onClick={callbac}>1</button>




</section>

<section>
 <hr />
UseEffect<br/>

<p className='pref' ref={pref}
>{psize}</p>


</section>


<section>
    <hr />
UselayoutEffect<br/>
      <p ref={targetRef}
      onMouseLeave={leac}
      onMouseEnter={toal}   
      style={{ position: 'relative', display: 'inline-block', border: '1px dashed blue', padding: '10px' }}>
        Hover over this target
    
      <p
        ref={tooltipRef}
        style={{
          position: 'absolute',
          background: 'lightyellow',
          border: '1px solid orange',
          padding: '5px',
       }}
      >
        I am a tooltip!
      </p>
  </p>

</section>


</main>

    );
}
export default Test;