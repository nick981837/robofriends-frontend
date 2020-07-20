import React from 'react'

const InputBox=({nameInputChange, emailInputChange,nationInputChange,titleInputChange,linkedinInputChange, githubInputChange, onButtonSubmit})=>{
	return(
	<div>
     <p className='f3'>
       {'Fill in your information, and create your own robofriends!!!'}
     </p>
  
     <div className='pa4 br3 shadow-5'>
      <input className='f4 pa2 w-70 center' type='text' placeholder='Enter your name'  onChange={nameInputChange}/>
      <input className='f4 pa2 w-70 center' type='text' placeholder='Enter your nation'  onChange={nationInputChange}/>
      <input className='f4 pa2 w-70 center' type='text' placeholder='Enter your email'   onChange={emailInputChange}/>
      <input className='f4 pa2 w-70 center' type='text' placeholder='Enter your title(option)'    onChange={titleInputChange}/>
      <input className='f4 pa2 w-70 center' type='text' placeholder='Enter your linkedIn(option)' onChange={linkedinInputChange}/>
      <input className='f4 pa2 w-70 center' type='text' placeholder='Enter your github(option) '  onChange={githubInputChange}/>
     </div>
      <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-blue'
              onClick={onButtonSubmit}
      >Create</button>
	
	</div>

	)
}
export default InputBox;