import { colors } from "@pacote-curso-ui/tokens"
import { getContrast } from "polished"
import  '../styles/tokens-grid.css'
interface TokensGridProps{
    tokens:  Record<string, string>
    hasRemValue: boolean
}
export function TokensGrid({tokens, hasRemValue = false} : TokensGridProps) {
    // retorna o array com varios array e chave e valor
   return( 
        <table className="tokens-grid">
                <thead>

                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                        {hasRemValue && <th>Pixels</th>}
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(tokens).map(([key, value]) =>{
                      return(  
                        <tr key={key}>
                            <td>
                                {key}
                            </td>
                            <td>
                                {value}
                            </td>
                            <td>
                                {hasRemValue && (
                                   <td>{Number(value.replace('rem', '')) * 16}px</td>

                                )}
                            </td>
                        </tr>
                      )
                    })}
                </tbody>
        </table>
   )      
}