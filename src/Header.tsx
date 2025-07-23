import { NavLink } from "react-router-dom";


function HeadNav (){
  const Navlist = [
    {path:'/',lbl:'App'},
    {path:'/Hook',lbl:'Hooks'}
  ];
  return(<>
<nav><ul>
  {Navlist.map(listn=>(<>
  <li key={listn.path}>
<NavLink to={listn.path}>{listn.lbl}</NavLink>
  </li>
  </>))}
  
  </ul></nav>

</>);}export default HeadNav;