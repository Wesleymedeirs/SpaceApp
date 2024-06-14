import {styled} from 'styled-components'

const ItemListaEstilizado = styled.li`
    font-size: 20px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$ativo ? '#7b78e5': '#d9d9d9'};
    font-size: ${props => props.$ativo ? ' 26px': 'Open Sans'};
    display: flex;
    align-items: center;
    gap: 22px;
`

const ItenNavegacao = ({children, ativo = false, inconeAtivo, iconeInativo}) => {
  return (
    <ItemListaEstilizado $ativo={ativo}>       
                < img src={ ativo ? inconeAtivo : iconeInativo} alt="casa" />                 
                {children}         
    </ItemListaEstilizado>
  )
}

export default ItenNavegacao