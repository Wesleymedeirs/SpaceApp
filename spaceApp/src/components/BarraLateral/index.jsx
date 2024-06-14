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
                        inconeAtivo='/icones/mais-curtidas-ativo.png'
                        iconeInativo='/icones/mais-curtidas-inativo.png'
                        ativo={false}
                    >
                        Mais Curtidas
                    </ItenNavegacao>

                    <ItenNavegacao
                        inconeAtivo='/icones/novas-ativo.png'
                        iconeInativo='/icones/novas-inativo.png'
                        ativo={false}
                    >
                        Novas
                    </ItenNavegacao>

                    <ItenNavegacao
                        inconeAtivo='/icones/surpreenda-me-ativo.png'
                        iconeInativo='/icones/surpreenda-me-inativo.png'
                        ativo={false}
                    >
                        Surpreenda-me
                    </ItenNavegacao>

                </ListaEstilizada>
                
            </nav>
        </aside>
    )
}

export default BarraLateral