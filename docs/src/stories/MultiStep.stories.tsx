import { StoryObj, Meta } from '@storybook/react'
import {Box, Text, MultiStep, MultiStepProps} from '@pacote-curso-ui/react'

export default {
    title: 'Form/Multi Step',
    component: MultiStep,
    args: {
        size: 4,
        currentStep: 1,

    },
    decorators:[
        (Story)=>{
            return(
                <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
                    <Text size="sm">Username: </Text>
                    {Story()}
                </Box>
           )
        }
    ],
} as  Meta<MultiStepProps>


export const Full: StoryObj<MultiStepProps> = {
    args:{      
        size: 4,
        currentStep: 4,
    }
}
