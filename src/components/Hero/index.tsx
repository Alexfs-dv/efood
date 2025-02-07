import backgorund_LaDolceVita from '../../assets/images/background_LaDolceVita.png'
import { Container } from '../../styles'
import { ContentHero } from './styles'

export const Hero = () => (
  <ContentHero style={{ backgroundImage: `url(${backgorund_LaDolceVita})` }}>
    <Container>
      <div>
        <p>Italiana</p>
        <h4>La Dolce Vita Trattoria</h4>
      </div>
    </Container>
  </ContentHero>
)
