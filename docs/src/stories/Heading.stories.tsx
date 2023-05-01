import { StoryObj, Meta } from '@storybook/react'
import {Heading, HeadingProps} from '@pacote-curso-ui/react'

export default {
    title: 'Thypography/Heading',
    component: Heading,
    args:{
        children: 'Custom Heading'
    }
    
} as  Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
    args:{
       children: 'Strong Heading'
    }
}

export const CustomTag: StoryObj<HeadingProps> = {
    args:{
       children: 'H1  Heading',
       as:'h1'
    },
    parameters:{
        description:{
            story: 'Por padrao o Heading sempre sera um `H2` mas podemos alterar pela propiedade `as`'
        }
    }
}