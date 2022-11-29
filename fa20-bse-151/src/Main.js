import LeftSide from './LeftSide';
import Menu from './Menu';
import Footer from './Footer';
import Mid from './Mid';
import Result from './Result';
import RightBar from './RightBar';
import Qea from './Qea';
import {Routes,Route} from "react-router-dom";
function Main() {
    return (
        <div>
        <div>
                <Menu/>
                { <Routes>
                <Route path="/Results" element={<Result/>}/>
                </Routes>}
                </div>
                
                <div style={{width:"300px",height:"1000px",border:"none",marginLeft:'10px'}}>

       <LeftSide/>
       </div>
       <div style={{width:"500px",height:"900px",border:"2px solid black",marginLeft:'250px',marginTop:'-900px',border:'none'}} >
        <Mid/>
        </div> 
        <div style={{width:"300px",height:"1000px",border:"none",marginLeft:'1200px',marginTop:'-1010px'}}>
                <RightBar/>
        </div>
        <div >
<Footer/>
{ <Routes>
                <Route path="/Qea" element={<Qea/>}/>
                </Routes>}
</div>
        </div>
      );
}

export default Main;