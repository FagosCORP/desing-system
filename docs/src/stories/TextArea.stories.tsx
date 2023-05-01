import { StoryObj, Meta } from '@storybook/react'
import {Box, Text, TextArea, TextAreaProps} from '@pacote-curso-ui/react'

export default {
    title: 'Form/Text Area',
    component: TextArea,
    agrs:{},
    decorators:[
        (Story)=>{
            return(
                <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
                    <Text size="sm">Observations : </Text>
                    {Story()}
                </Box>
           )
        }
    ],
    
} as  Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
    args:{
        placeholder: 'Type your observations'
    }
}
export const Disabled: StoryObj<TextAreaProps> = {
    args:{
        disabled: true
    }
}
