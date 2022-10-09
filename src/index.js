import React from 'react';
import ReactDOM from 'react-dom';
import css from './images/css.png'
import html from './images/html.png'
import js from './images/js.png'
import react from './images/react.png'
import boy from './images/boy.jpg'


import { TiTick } from 'react-icons/ti';
import { TbClock } from 'react-icons/tb';


const icon = (
  <TiTick style={{backgroundColor:'rgb(107,204,205', color:'#fff', borderRadius:'50%', fontSize:'1.3rem'}}/>
)

const title = 'Front end  Technologies' ; 
const toolStyles = {
  width:'200px',
  margin:'3rem',
}

const csss ={
  width:'150px'
}


const tool = (
<div style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
    <img style={csss} src={css} alt="" />
    <img style={toolStyles} src={html} alt="" />
    <img style={toolStyles} src={js} alt="" />
    <img style={toolStyles} src={react} alt="" />
 
    </div>
)

const secondStyles = {
  backgroundColor:'lightBlue',
  borderRadius:"1rem",
  padding:'1rem'
}
const input = {
  display:'flex',
   justifyContent:'center', 
   alignItems:'center', 
   gap:'1rem', 
   padding:'2rem'
}



const third = (
  <div style={{marginTop:'3rem'}}>
    <img style={{width:'250px', height:'250px', borderRadius:'50%'}} src={boy} alt="" />
    <h1>Kerim GURBAZ {icon}</h1> 
    <p>Senior developer, Switzerland</p>
    <h3>SKILLS</h3>
    
  </div>
  )

  const skillStyle ={
    listStyleType: "none",
    backgroundColor:'rgb(107,204,205)',
    padding:'0.5rem',
    color:'#fff',
    borderRadius:'0.3rem'
  }

  const skills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis', 'MYSQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git']
  const mySkills = 
    (
      <div style={{display:'flex',  flexWrap:'wrap', justifyContent:'start', alignItems:'center', gap:'0.5rem', padding:'1rem'}}>
        {skills.map((skill) => <li style={skillStyle}>{skill}</li> )}
      </div>
    )
    

    



const second = (
  <section style={secondStyles}>

  <h1 style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>SUBSCRIBE</h1>
  <p style={{ display:'flex', justifyContent:'space-between', alignItems:'center'}}>Sign up with your email address to receive news and updated.</p>
<div  className='input' style={input}>
  <input style={{borderRadius:'0.5rem', padding:'0.5rem', border:'none'}} type="text" placeholder='First name' />
  <input style={{borderRadius:'0.5rem', padding:'0.5rem',border:'none'}} type="text" placeholder='Last name' />
  <input style={{borderRadius:'0.5rem', padding:'0.5rem', border:'none'}} type="email" placeholder='Email name' />
</div>
  {/* <button style={{display:'flex', justifyContent:'center', alignContent:'center', color:'#fff', borderRadius:'0.5rem', backgroundColor:"tomato",padding:'0.5rem 6rem', border:'none', marginLeft:'43%'}}>Subscribe</button> */}

<div className="btn" style={{display:'flex', justifyContent:'center', alignItems:'center', color:'#fff'}}>
    <button style={{backgroundColor:'tomato', color:'#fff', padding:'0.5rem 5rem', border:'none', borderRadius:'0.3rem'}}>Subscribe</button>
</div>


  </section>
)

const footer =(
  <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
  <TbClock/>
  <p>Joined on Aug 30, 2020</p>

  </div>

)





const header = (

  <header style={{margin:'1rem'}}>
    <h1 style={{display:"flex", justifyContent:'center', alignItems:'center'}}>{title}</h1>
    {tool}
    {second}
    {third}
    {mySkills}
    {footer}

 

  </header>


)

const rootElement = document.getElementById('root')
ReactDOM.render(header, rootElement)