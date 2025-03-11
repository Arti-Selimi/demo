import Button from "../button/button";

export default function Navbar() {
  return (
    <div className="flex items-center mx-10 py-3 border-b-2 border-gray-basic text-xs font-bold">
        <div className="flex flex-row flex-1/2">
            <div className="flex flex-row items-center mr-10">
                <div className="h-6 w-6 rounded-full bg-[#D8DAD3] mr-2"></div>
                <h1 className="text-black font-extrabold text-l">Delyxa</h1>
            </div>
            <div className="flex flex-row items-center gap-5">
                <p className="opacity-60">Services</p>
                <p className="opacity-60">Recent Work</p>
                <p className="opacity-60">FAQ</p>
                <p className="opacity-60">Our Process</p>
                <p className="opacity-60">Case Studies</p>
            </div>
        </div>
        <div className="flex flex-row flex-1/2 items-center justify-end gap-5 ">
            <p className="opacity-60">Contact Us</p>
            <Button text="Book Call" background="bg-accent" color="text-white" paddingx="px-3" paddingy="py-1"/>
        </div>
    </div>
  )
}