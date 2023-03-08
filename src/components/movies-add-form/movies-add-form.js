import './movies-add-form.css'
import { useContext, useState } from 'react'
import { Context } from '../../context'
const MoviesAddForm = () =>{
  const [state, setState] = useState({name: '', views: ''})
  const {dispatch} = useContext(Context)
 const onChangeHandler = e =>{
  setState({...state, [e.target.name]: e.target.value})
 }
 const addFormHandler = e =>{
  e.preventDefault()
  if(state.name === '' || state.views === '') return
  const data = {name: state.name, viewers: state.views}
  dispatch({type: 'ADD_FORM', payload: data})
  setState({name: '', views: ''})
 } 
 return (
  <div className='movies-add-from'>
  <h3>Yangi kino qoshish</h3>
  <form className='add-form d-flex' onSubmit={addFormHandler}>
      <input className='form-control new-post-label'
       type='text' placeholder='Qanday kino?' 
       onChange={onChangeHandler}
       name='name'
       value={state.name}/>
      <input className='form-control new-post-label' 
      type='number'
      placeholder="Necha marta ko'rilgan?" 
      onChange={onChangeHandler}
      name='views'
      value={state.views} />
      <button className='btn btn-outline-dark' type='submit'>Submit</button>
  </form>
  </div>
   )
}

export default MoviesAddForm