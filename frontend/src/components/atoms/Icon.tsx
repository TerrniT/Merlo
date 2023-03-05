interface IconProps {
  className?: string
  imgUrl: string
  isActive?: string
  name?: string
  disabled?: boolean
  handleClick?: () => void
}

const Icon: React.FC<IconProps> = ({
  className,
  imgUrl,
  name,
  isActive,
  disabled,
  handleClick,
}: IconProps) => {
  return (
    <div
      className={`rounded-[10px] ${
        isActive && isActive === name && "bg-primary/30"
      } flex justify-center items-center ${!disabled && "cursor-pointer"} ${className} ${
        !className && "w-[48px] h-[48px]"
      } `}
      onClick={handleClick}
    >
      {!isActive ? (
        <img src={imgUrl} alt='fund_logo' className='w-1/2 h-1/2 cursor-pointer hover:grayscale' />
      ) : (
        <img
          src={imgUrl}
          alt='fund_logo'
          className={`w-1/2 h-1/2  ${
            isActive !== name && "grayscale"
          } cursor-pointer hover:grayscale-0 transition-all duration-300`}
        />
      )}
    </div>
  )
}
export default Icon
