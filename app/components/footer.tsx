const Footer = () => {
  return (
    <footer className="border border-[#808080] rounded-md w-[90%] m-auto grid gap-5 grid-cols-4 p-5 mt-10 mb-5">
        <div className="border border-[#808080] rounded-md"></div>
        <ul>
            <h2>education</h2>
           
                <li>Instrutor-Led Training</li>
                <li>Academy Learning</li>
        </ul>
        <ul className="flex flex-col">
            <h2>services</h2>
                <li>Application Security</li>
                <li>Network Security</li>
                <li>Cloud Security</li>
                <li>Tsilored Condulting</li>
            </ul>
            <ul>
            <h2>subverted</h2>
           
                <li>about us</li>
                <li>contact us</li>
        </ul>
    </footer>
  )
}

export default Footer