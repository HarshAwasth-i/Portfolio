import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

<nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-lg border-b border-slate-800">

<div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

<h1 className="text-3xl font-bold">

<span className="text-cyan-400">
Harsh
</span>

<span className="text-white">
.
</span>

</h1>

<div className="hidden md:flex gap-10">

<a href="#about" className="hover:text-cyan-400">
About
</a>

<a href="#skills" className="hover:text-cyan-400">
Skills
</a>

<a href="#projects" className="hover:text-cyan-400">
Projects
</a>

<a href="#experience" className="hover:text-cyan-400">
Experience
</a>

<a href="#contact" className="hover:text-cyan-400">
Contact
</a>

</div>

<button
className="md:hidden"
onClick={()=>setMenuOpen(!menuOpen)}
>

{
menuOpen ?

<FaTimes size={25}/>

:

<FaBars size={25}/>

}

</button>

</div>

{
menuOpen &&

<div className="md:hidden bg-slate-900">

<a href="#about" className="block p-5">
About
</a>

<a href="#skills" className="block p-5">
Skills
</a>

<a href="#projects" className="block p-5">
Projects
</a>

<a href="#experience" className="block p-5">
Experience
</a>

<a href="#contact" className="block p-5">
Contact
</a>

</div>

}

</nav>

  );

}

export default Navbar;