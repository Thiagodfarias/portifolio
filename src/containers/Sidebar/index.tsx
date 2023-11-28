import Avatar from '../../Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import InstagramIcon from '../../RedeSociaisLogo/instagram_media_online_social_icon.png'
import XIcon from '../../RedeSociaisLogo/x_logo_twitter_new_brand_icon.png'
import LinkedinIcon from '../../RedeSociaisLogo/linkedin_logo_icon.png'
import GitHub from '../../RedeSociaisLogo/github_logo_social network_social_icon.png'

import { Descricao, BotaoTema, SidebarContainer, LogoSocial } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={18}>Thiago Monte</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        <a
          href="https://github.com/thiagodfarias"
          target="_blank"
          rel="noreferrer"
        >
          <LogoSocial className="logo_social" src={GitHub} alt="Instagram" />
        </a>
        Thiagodfarias
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Estudante Full Stack Java
      </Descricao>
      <Paragrafo tipo="secundario" fontSize={16}>
        <a
          href="https://www.linkedin.com/in/thiagodfarias/"
          target="_blank"
          rel="noreferrer"
        >
          <LogoSocial
            className="logo_social"
            src={LinkedinIcon}
            alt="Instagram"
          />
        </a>
        <a
          href="https://instagram.com/thiago__monte"
          target="_blank"
          rel="noreferrer"
        >
          <LogoSocial
            className="logo_social"
            src={InstagramIcon}
            alt="Instagram"
          />
        </a>
        <a href="https://x.com/thiago__07" target="_blank" rel="noreferrer">
          <LogoSocial className="logo_social" src={XIcon} alt="X.com" />
        </a>
      </Paragrafo>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
