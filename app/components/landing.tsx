import { url } from 'inspector'
import React from 'react'

const Landing = () => {
  return (
    <div className='min-h-screen bg-cover bg-center grid place-content-center border border-dotted border-red-500' style={{ backgroundImage: `url('https://subverted.io/wp-content/uploads/2024/10/Mountain_Scape.png')` }}>
        <section className='border border-teal-500 flex flex-col items-center gap-5'>
            <p className='text-[#6B6B6B]'>Strive-succeed-sustain</p>
            <h2 className='text-5xl font-medium leading-10 shadow'>Rebel for a safer future!</h2>
            <p className='text-lg font-normal leading-6'>Learn, evaluate and secure by challenging the norms.</p>
            <div className='flex mt-5'>
                <div className='border bg-[#77F8C624] border-[#77F8C6] rounded-md py-2 px-5'>./Empower_yourself</div>
                <div className='rounded-md py-2 px-5'>./Empower_yourself</div>
            </div>
        </section>
</div>
  )
}

export default Landing