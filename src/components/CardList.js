import React from 'react'
import Card from './Card'

const CardList = ({robots})=> {
	const cardComponent = robots.map((user, i )=>{
		return  (
		<Card 
		key={i} 
		name={robots[i].name} 
		email={robots[i].email} 
		nation={robots[i].nation}
        title={robots[i].title}
        linkedin={robots[i].linkedin}
        github={robots[i].github}
        />
	);

	})
	return (
		<div>
              {cardComponent}

	    </div>

		);
}

export default CardList;