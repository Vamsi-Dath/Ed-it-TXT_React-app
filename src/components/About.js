import React, {useState} from 'react'

export default function About() {
    const [style, setStyle] = useState({
        color:'rgb(8, 37, 51)',
        backgroundColor:'white',
        borderColor:'red'
    })
    const [btnText, setBtnText]  = useState('Enable Dark Mode')

    const toggleMode = ()=>{
        if(style.color === 'rgb(8, 37, 51)'){
            setStyle({
                color:'white',
                backgroundColor:'rgb(8, 37, 51)',
                borderColor:'yellow'
            })
            document.body.style.backgroundColor='rgb(8, 30, 50)'
            setBtnText('Enable Light Mode')
        }else{
            setStyle({
                color:'rgb(8, 37, 51)',
                backgroundColor:'white',
                borderColor:'red'
            })
            document.body.style.backgroundColor='white'
            setBtnText('Enable Dark Mode')
        }
    }
  return (
    <div className="container">
        <h2 style={style}>About page</h2>
        <div class="para" style={style}>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto recusandae dicta in eius exercitationem veritatis repudiandae ex, error, adipisci dolore iure delectus facere ad quisquam sapiente tempora! Harum ducimus quae eos maiores illum assumenda perferendis amet velit beatae voluptatibus iure, fuga nam saepe quia soluta tenetur! Est recusandae reiciendis, aliquid assumenda consequuntur dicta in. Consequatur harum, obcaecati maiores consequuntur expedita maxime ratione perspiciatis incidunt sint, assumenda doloribus neque veniam, amet quo velit corporis. Facilis atque quia, laboriosam autem dicta qui? Facere fuga totam voluptates, eaque quam doloribus nobis excepturi voluptate beatae adipisci est iusto delectus velit debitis repellat officia repellendus?
        </p>
        <button style={style} onClick={toggleMode}>{btnText}</button>
        </div>
    </div>
  )
}
