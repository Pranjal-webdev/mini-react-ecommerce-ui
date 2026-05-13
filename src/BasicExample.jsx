import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function BasicExample({ item,cartCount,setCartCount,theme,setTheme,cartItems,setCartItems}) {
  
  const [added,setAdded]=useState(false);
  return (
    <>
      <Card className="cardbody" style={{border:"solid 2px",borderColor:theme==="light"?"black":"yellow",}}>
        <Card.Img variant="top" src={item?.images?.[0]} style={{height: "180px",objectFit:"contain",width:"100%"}} />
        <Card.Body className='p-2'>
          <Card.Title style={{fontSize:"0.9rem", height:"40px", overflow:"hidden"}}>{item?.title}</Card.Title>
          <Card.Text className='fw-bold'>${item?.price}</Card.Text>
          <button className = "w-100 btn-sm" onClick={()=>{
            if (added){
              setCartCount(cartCount-1);
              setCartItems(
                cartItems.filter(
                  (product)=>
                    product.id !==item.id
                )
              );
            }
            else{
              setCartCount(cartCount+1);
              setCartItems([
                ...cartItems,
                item
              ]);
            }
            setAdded(!added)
          }}>
            {added?"Go to cart":"Add to cart"}
          </button>
        </Card.Body>
      </Card>
    </>
  );
}
export default BasicExample;