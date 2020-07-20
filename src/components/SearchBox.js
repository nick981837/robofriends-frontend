import React from 'react';
import './SearchBox.css';

const  SearchBox = ({searchfield, searchChange}) =>{
	return(
	  <div className='pa2'>
		<input
		 className=' b--green bg-light-blue pa3 ba'
		 type='search'
		 placeholder='Search Robots' 
		 onChange = {searchChange}
		/>
	  </div>
	  );
}



export default SearchBox;