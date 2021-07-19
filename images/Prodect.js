import React from 'react';
import scirt from './scirt.jpg';
import batla from './batla.jpg';
import jenes from './jenes.jpg';
import './Prodect.css';
class Works extends React.Component{


    render(){

  const {prodects}=this.props;
const drawprodect=prodects.map((prodect)=>{
return(<div  className="single-prodect"key={prodect.id}>
    <img src={prodect.src} className="img-prodect" /> 
    <h2 className="name-prodect">{prodect.nameprodect}</h2>
    <p className="salary-prodect">{prodect.salary}</p>
    <button className="btn-detailsprodect">Read mor!</button>
    </div>);

})




     return(<section   className="prodects">{drawprodect}</section>);   
    }
}
export default  Works;