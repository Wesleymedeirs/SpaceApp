import { styled } from 'styled-components'

import ItenNavegacao from './ItenNavegacao'


//imagens
import inconeAtivo from '.'

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px; 
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItenNavegacao
                     inconeAtivo='/icones/home-ativo.png' 
                     iconeInativo='/icones/home-inativo.png'
                     ativo={true}
                     >
                        Início
                    </ItenNavegacao>

                    <ItenNavegacao
                     inconeAtivo='/icones/mais-vistas-ativo.png' 
                     iconeInativo='/icones/mais-vistas-inativo.png'
                     ativo={false}
                     >
                        Mais Vistas
                    </ItenNavegacao>

                    <ItenNavegacao
                     inconeAtivo='/icones/home-ativo.png' 
                     iconeInativo='/icones/home-inativo.png'
                     ativo={false}
                     >
                        Início
                    </ItenNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral