import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loadingspin from "./lodinsp";
import LayoutHeader from "./layout";
const Apppage = lazy(()=>import('./App'));
const Hookpage = lazy(()=>import('./assets/test'));

function Routing(){
    return(<>
    <Routes>
<Route path="/" element={<LayoutHeader/>}>
<Route index element={<Suspense fallback={<Loadingspin/>}> <Apppage/> </Suspense>}></Route>
<Route path="/Hook" element={<Suspense fallback={<Loadingspin/>}><Hookpage/></Suspense>}></Route>
</Route>
    </Routes>


    </>);} export default Routing;