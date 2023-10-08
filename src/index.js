import React from 'react'
import * as ReactDOM from 'react-dom'

const App = () =>{
    return (
<div style={{margin: 'auto', width:1000, backgroundColor: '#EEE', padding: 18, borderRadius:10}}>
    <label htmlFor="Descarte" style={{ display:'block', marginBottom: 1, fontFamily:'Monospace', textAlign: 'center', fontSize:'30px'}}>
    Descarte de alimentos não fiscalizado!!!
    </label>



</div>


    )
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)