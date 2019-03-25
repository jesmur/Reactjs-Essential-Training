import React, { Component } from 'react'
import { render } from 'react-dom'
import Library from './Library'

let bookList = [
    {"title":"Hunger", "author":"Roxane Gay","pages":320},
    {"title":"The Sun Also Rises", "author":"Ernest Hemingway", "pages": 260},
    {"title":"White Teeth", "author":"Zadie Smith", "pages": 480},
    {"title":"Cat's Cradle", "author":"Kurt Vonnegut", "pages": 304}
]

render(
    <Library books={bookList}/>,
    document.getElementById('root')
)

// class FavoriteColorForm extends React.Component{
//     state = { value: '' }

//     newColor = e =>
//         this.setState({ value: e.target.value })

//     submit = e => {
//         console.log(`New Color: ${this.state.value}`)
//         e.preventDefault();
//     }

//     render(){
//         return (
//             <form onSubmit={this.submit}>
//                 <label>Favorite Color: 
//                     <input 
//                         type="color"
//                         onChange={this.newColor}>
//                     </input>
//                     <button>Submit</button>
//                 </label>
//             </form>
//         )
//     }
// }

// render(
//     <FavoriteColorForm />,
//     document.getElementById('root')
// )