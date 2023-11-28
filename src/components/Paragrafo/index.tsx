import { P as StyledP } from './styles'

export type Props = {
  children: React.ReactNode
  tipo?: 'principal' | 'secundario'
  fontSize?: number
  a?: string
}

const P = ({ children, tipo = 'principal', fontSize, a }: Props) => (
  <StyledP fontSize={fontSize} tipo={tipo}>
    {a ? <a href={a}>{children}</a> : children}
  </StyledP>
)

export default P
