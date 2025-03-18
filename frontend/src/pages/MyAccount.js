import React, { useContext } from 'react'
import { OrderContext } from '../context/OrderContext';

const MyAccount = () => {
  const { orders, message } = useContext(OrderContext);

  return (
    <div className='flex h-full'>
      {orders.length !== 0 ? orders.map((order, ind) => {
        return <OrderCard order={order} key={ind} />
      })
        :<div className='w-full h-full flex justify-center items-center bg-lime-100'>
          <p className='text-6xl font-bold'>{message}</p>
        </div>}
    </div>
  )
}

const OrderCard = ({ order }) => {
  return (
    <>
      <div className='max-h-max max-w-max p-3 border-solid border-3 border-blue-600 rounded-md m-3 shadow-md shadow-black hover:scale-105 duration-500'>
        <h1 className='font-bold text-xl mb-1 border-b-2 border-black pb-1'> {order.title}</h1>
        <p className='text-lg'><b>No. of Product -</b> {order.countProduct}</p>
        <p className='text-lg'><b>Totalprice -</b> ₹ {order.price} /-</p>
        <p className='text-lg'><b>Time of Order -</b> {order.date} /-</p>
      </div>
    </>
  )
}
export default MyAccount