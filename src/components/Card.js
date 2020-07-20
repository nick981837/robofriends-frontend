import React from 'react';
const Card = ({name, email,nation, title, linkedin, github})=>{
	
	return(
	  <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img alt='robots' src={`https://robohash.org/${name}?100x100`}/>
	    <div>
	      <h2>{name}</h2>
	      <p>{email}</p>
	      <p>{nation}</p>
	      <p>{title}</p>
	      <p><a href= {linkedin}>{linkedin}</a></p>
	      <p><a href= {github}>{github}</a></p>
	     
	   </div>
       </div>

      );

}
export default Card;