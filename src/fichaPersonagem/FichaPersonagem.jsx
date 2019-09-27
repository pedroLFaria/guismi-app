import React from 'react'
import queryString from 'query-string';

class FichaPersonagem extends React.Component{
    constructor(props){
        super(props);
        console.log(window.location.hash)
        console.log(queryString.parse(window.location.href.split("?")[1]))
    }
    render() {
        return<div><h1>{window.location.hash}</h1></div>

    }
}
export {FichaPersonagem}
