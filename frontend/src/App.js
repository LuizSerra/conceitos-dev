import React from 'react';

import Header from './components/Header';

function App() {
   return  (
   <>
   <Header title="Homepage">
       <ul>
           <li>
               Homepage
           </li>
           <li>
               Cards
           </li>
           <li>
               Sair
           </li>
       </ul>
   </Header>
   <Header title="Projects">
   <ul>
           <li>
               Homepage
           </li>
           <li>
               Cards
           </li>
           <li>
               Portfolio
           </li>
           <li>
               Sair
           </li>
       </ul>
   </Header>
   </>
   );
}

export default App;