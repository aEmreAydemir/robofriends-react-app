import React from 'react';
import Card from './Card';
const CardList = ({robots }) => {

   /*
   this function could be simply written inside the return inside the brackets as you can see below
   const cardComponent = robots.map((user,i)=> {
        return (
        <Card 
        key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email} 
        username={robots[i].username}/>)
        }
    ) */

    return(
        <div>
            {
            //cardComponent to call the function above
            robots.map((user,i)=> {
                return (
                <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} 
                username={robots[i].username}
                />
                )
                }
            ) 
            }
        </div>
    );
}

export default CardList;