import React from 'react'
import col1 from '../../assets/spon1.jpg'
import col2 from '../../assets/spon2.png'
import './colab.css'

const Colab = () => {
  return (
    <div>
      <div className="container">
        <div className="headico">
            <hr />
            <h1 className="headspa">
               <b>Our Collaborations</b> 
            </h1>
            <hr />
        </div>
        <div className="row">
            <div className="col">
                <img src={col2} alt="" className="colab" />
            </div>
            <div className="col">
                <img src={col1} alt="" className="colab" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Colab
