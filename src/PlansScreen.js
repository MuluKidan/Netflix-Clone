import React, { useState } from 'react'
import './PlansScreen.css'
import db from './Firebase';

function PlansScreen() {
    const [products, setProducts]=useState([])

    db.collection("products").where("active", "==", true)
    .get()
    .then((querySnapshot)=>{
        const products ={};
        querySnapshot.forEach(async productDoc=>{
            products[productDoc.id]=productDoc.data();
            const priceSnap=await productDoc.ref.collection("prices").get();

        })
    })
  return (
    <div className='plansScreen'>
      
    </div>
  )
}

export default PlansScreen
