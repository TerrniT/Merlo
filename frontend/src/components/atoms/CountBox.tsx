
type Props = {
  title: string
  value: number
}

const CountBox = ({ title, value }: Props) => {
  return (
    <div className='flex flex-col items-center w-[150px]'>
      <h4 className='font-bold text-3xl text-white p-3  border border-zinc-600 rounded-t-lg w-full text-center truncate'>{value}</h4>
      <p className='font-normal text-lg text-gray-600 bg-zinc-800 px-3 py-2 w-full text-center rounded-b-lg'>{title}</p>
    </div>
  )
}

export default CountBox
