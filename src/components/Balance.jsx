export const Balance = ({value})=>{
    return <div className="flex mt-4 text-xl">
<div className=" pl-4   text font-bold text-2xl">
Your balance
</div>
<div className="font-semibold ml-4 text-2xl bg-white text-black px-2 rounded-lg">
Rs {value}
</div>
    </div>
}