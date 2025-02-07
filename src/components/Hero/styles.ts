import styled from 'styled-components';
import { cores } from '../../styles';

export const ContentHero = styled.div`
  position: absolute;
  display: block;
  height: 280px;
  width: 100%;
  top: 185px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-top: 25px;
    padding-bottom: 32px;
    z-index: 1;


    p, h4 {
      font-size: 32px;
      font-weight: 100;
      color: ${cores.branco}
      }

    h4 {
      font-weight: 900;
    }
  }

  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`
