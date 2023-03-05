import { jsNumberForAddress } from "react-jazzicon"
import Jazzicon from "react-jazzicon/dist/Jazzicon"

type Props = {
  owner: string
}

const ProfileIcon = ({ owner }: Props) => {
	return (
		<div className='object-contain flex items-center justify-center relative'>
			<Jazzicon diameter={38} seed={jsNumberForAddress(owner)} />
		</div>
	)
}

export default ProfileIcon
