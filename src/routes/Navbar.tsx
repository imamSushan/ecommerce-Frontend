import {Link} from "react-router-dom"

export default function Navbar({onClick}:{onClick:()=>void}) {
  return (
    <>
      <style>
        {`
          a{
            display: block;
            transition: all 150ms ease;
            font-size:12px;
            margin-top:10px;
          }

        a:hover{
                text-decoration:underline;
            
          }

         h3{
             font-size:0.9rem;
        
            margin-top:10px;
       }
            
          li{
              list-style:none;
              padding-inline:15px;
            }
        `}
      </style>

      <li>
        <h3>SHIRT</h3>
        <Link to="/collections/denim-shirt" onClick={onClick}>Denim Shirt</Link>
        <Link to="/collections/solid-shirt" onClick={onClick}>Solid Shirt</Link>
        <Link to="/collections/checked-shirt" onClick={onClick}>Checked Shirt</Link>
        <Link to="/collections/cuban-shirt" onClick={onClick}>Cuban Shirt</Link>
      </li>
      <li>
        <h3>PANJABI</h3>
        <Link to="">Kabli</Link>
        <Link to="/collections/luxury-panjabi" onClick={onClick}>Luxury Panjabi</Link>
      </li>
      <li>
        <h3>PANT</h3>
        <Link to="">Formanl Fant</Link>
        <Link to="">Denim Pant</Link>
        <Link to="">Pajama</Link>
        <Link to="">Bootcut Pant</Link>
      </li>
    </>
  )
}
