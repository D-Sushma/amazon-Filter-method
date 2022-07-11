// USE FILTERATION=================================================================================================
//. task--> subheader.js me Shirt ko click krne pr only Shirt & Pant kO click krne pr only pant ana chahiye
//.----->>>so need to add "type" property, taki ham copmo ko filter kr paye------------------------
// 1. go Onbject.js & add type (ex- type:"shirt", pant:"pant")
// 2. need to import object.js In shirt & pant compo--> so that we get shirt/pant obj frm object.js
// 3. add filteration fun  with object.js in shirt.js & pant.js compo
// 4. filter lgane ke bad hme object render krna hai us filter var k sath

import './App.css';
import Header from './components/Header'
import Subheader from './components/Subheader';
import Card from './components/Card'
import Shirt from './components/subheaderOption/Shirt'
import Pant from './components/subheaderOption/Pant'

import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  let task = "i am best";
  let name ="sushma";
  
  return (
    <div className="App">

      {/*>>>. make router----------------- */}
      <BrowserRouter>
        {/*>>>. MAKE COMPO TO CONSTANT-------------------- */}
        <Header data={{task, name}}/>
        <Subheader />

        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/card" element={<Card />} />
          <Route path="/shirt" element={<Shirt />} />
          <Route path="/pant" element={<Pant />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}
export default App;