import {useState} from 'react'

function ItemCount() {
  const [quantity, setQuantity] = useState(1);

  const handleAddQuantity = ()=>{
    let stock = 10;
    if(quantity < stock){
      setQuantity(quantity + 1)
    }
  }

  const handleRemoveQuantity = ()=>{
    if(quantity > 1){
        setQuantity(quantity - 1)
    }
    }

  const handleShopProduct = ()=>{
console.log("esta funcion viene del context")
  }

  return (
    <div className='flex flex-row space-x-3 mt-8'>
            <div className="flex w-auto bg-gray-100 border border-gray-300 rounded">
                <button onClick={handleAddQuantity} className="flex items-center justify-center text-center mx-auto  ">
                    <span className="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_207_14)">  <path d="M11 20C11 20.2652 11.1054 20.5196 11.2929 20.7071C11.4804 20.8946 11.7348 21 12 21C12.2652 21 12.5196 20.8946 12.7071 20.7071C12.8946 20.5196 13 20.2652 13 20V13H20C20.2652 13 20.5196 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11H13V4C13 3.73478 12.8946 3.48043 12.7071 3.29289C12.5196 3.10536 12.2652 3 12 3C11.7348 3 11.4804 3.10536 11.2929 3.29289C11.1054 3.48043 11 3.73478 11 4V11H4C3.73478 11 3.48043 11.1054 3.29289 11.2929C3.10536 11.4804 3 11.7348 3 12C3 12.2652 3.10536 12.5196 3.29289 12.7071C3.48043 12.8946 3.73478 13 4 13H11V20Z" fill="#98DA9B"/>
                        </g> <defs>  <clipPath id="clip0_207_14"> <rect width="24" height="24" fill="white"/>  </clipPath>  </defs>
                      </svg>
                    </span>
                </button>
                <p className='px-3 items-center flex bg-white'>{quantity}</p>
                <button onClick={handleRemoveQuantity} className="flex items-center justify-center text-center mx-auto  ">
                    <span className="block px-1 py-1 group-hover:bg-indigo-100 rounded-full group-hover:flex-grow">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.5312 12.5H5.46875" stroke="#98DA9B" strokeWidth="1.5625" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </span>
                </button>
            </div>
            <button onClick={handleShopProduct} type="submit" className="btn__primary flex w-full items-center justify-center  px-8 py-3">Add to bag</button>
          </div>
  )
}

export default ItemCount
