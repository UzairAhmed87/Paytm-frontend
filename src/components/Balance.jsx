export const Balance = ({value})=>{
    return <div className="flex mt-4">
<div className=" pl-4 font-bold text-lg">
Your balance
</div>
<div className="font-semibold ml-4 text-lg">
Rs {value}
</div>
    </div>
}