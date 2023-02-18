interface IconProps {
  styles?: string
  imgUrl: string
  isActive?: string
  name?: string
  disabled?: boolean
  handleClick?: () => void
}

const Icon: React.FC<IconProps> = ({
  styles,
  imgUrl,
  name,
  isActive,
  disabled,
  handleClick,
}: IconProps) => {
  return (
    <div
      className={`rounded-[10px] ${
        isActive && isActive === name && "bg-secondary"
      } flex justify-center items-center ${!disabled && "cursor-pointer"} ${styles} ${
        !styles && "w-[48px] h-[48px]"
      } `}
      onClick={handleClick}
    >
      {!isActive ? (
        <img src={imgUrl} alt='fund_logo' className='w-1/2 h-1/2 ' />
      ) : (
        <img
          src={imgUrl}
          alt='fund_logo'
          className={`w-1/2 h-1/2  ${isActive !== name && "grayscale"} `}
        />
      )}
    </div>
  )
}
export default Icon
