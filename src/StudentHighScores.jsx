import React from 'react'



function StudentHighScores(prop) {
 return (
   <div>
      {prop.allScores.map((score) => {
         return (
           <div>
             <h1>HIGH SCORES: {score.name} </h1>
             {score.scores.map((x) => {
               return (
                 <p>
                   {x.n} {x.s}
                 </p>
               );
             })}
           </div>
         );
      })}
   </div>
 )
}

export default StudentHighScores
