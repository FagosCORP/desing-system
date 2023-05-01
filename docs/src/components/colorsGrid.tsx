import { colors } from "@pacote-curso-ui/tokens"
import { getContrast } from "polished"


export function ColorsGrid() {
    // retorna o array com varios array e chave e valor
    return Object.entries(colors).map( ([key, color]) =>{
        return (
            <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
                <div style={
                { display: 'flex', 
                    justifyContent: 'space-between', 
                    fontFamily: 
                    'monospace', 
                    color:getContrast(color,'#FFF') < 3.5 ? '#000' : '#FFF'
                }
                }>
                    <strong>${key}</strong>
                    <span>{color}</span>
                </div>
            </div>
        )
    })        
}