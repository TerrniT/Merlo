export type SVG = React.FC<React.SVGProps<SVGElement>>

export interface Campaign {
  id?: number
  owner: string
  title: string
  description: string
  target: string
  deadline: number
  amountCollected: string
  image: string
  pId?: number
}
