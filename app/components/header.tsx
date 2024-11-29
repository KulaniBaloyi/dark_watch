
const Header = () => {
  return (
   <header className="w-4/5 flex justify-between items-center border border-[#808080] rounded-md min-h-16 m-auto  p-4 mt-10">
    <h1>Heading</h1>
    <ul className="flex justify-center">
        
        <li className="py-2 px-5 font-semibold text-base uppercase">Home</li>
        <li className="py-2 px-5 font-semibold text-base uppercase">Education</li>
        <li className="py-2 px-5 font-semibold text-base uppercase">Services</li>
        <li className="py-2 px-5 font-semibold text-base uppercase">About</li>
        <li className="border bg-[#77F8C624] border-[#77F8C6] rounded-md py-2 px-5 font-semibold text-base uppercase">Lets talk</li>
    </ul>
   </header>
  )
}

export default Header