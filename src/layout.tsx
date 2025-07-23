import { Outlet } from "react-router-dom";
import HeadNav from "./Header";


function LayoutHeader (){return(<>
<HeadNav/>
<main>
<Outlet/>
</main>
<footer> {new Date().getFullYear()}</footer>
</>);} export default LayoutHeader;