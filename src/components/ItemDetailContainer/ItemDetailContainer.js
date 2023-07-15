import React, { useState, useEffect } from 'react' 
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {
  const [product, setProduct] = useState([]);   
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then(res=>res.json());
      setProduct(data);
    }
   
   fetchData();
  }, [params]);

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
  
  return ( 
    <section className='grid grid-cols-1 lg:grid-cols-12'>
      {/* imagen */}
      <div className='p-4 bg-white lg:col-span-4 lg:col-start-2 lg:pb-16 lg:p-8'>
        <img src={product.image}  />
      </div>

      {/* descripcion */} 
      <div className="p-4 border-t lg:border-t-0 lg:border-l lg:border-gray-200 lg:p-8 col-span-5 lg:col-start-7">
        <div className="mt-4 lg:row-span-3 lg:mt-0">
            <p className="text-3xl tracking-tight text-gray-900">$192</p>

            <div className="my-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  
                  <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                  <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                  <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                  <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                  <svg className="text-gray-200 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="sr-only">4 out of 5 stars</p>
                <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
              </div>
            </div>
        </div>

          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                <li className="text-gray-400"><span className="text-gray-600">Hand cut and sewn locally</span></li>
                <li className="text-gray-400"><span className="text-gray-600">Dyed with our proprietary colors</span></li>
                <li className="text-gray-400"><span className="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>
                <li className="text-gray-400"><span className="text-gray-600">Ultra-soft 100% cotton</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-medium text-gray-900">Details</h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
            </div>
          </div>

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
            <button type="submit" className="btn__primary flex w-full items-center justify-center  px-8 py-3">Add to bag</button>
          </div>
          
      </div>
      
    </section> 
  )
}

export default ItemDetailContainer

