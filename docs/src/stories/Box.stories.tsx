import { StoryObj, Meta } from '@storybook/react'
import {Box, BoxProps} from '@pacote-curso-ui/react'

export default {
    title: 'Surfaces/Box',
    component: Box,
    
} as  Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
    args:{
        children: (

                <Text>Elemento Box</Text>
        ),
    }
}