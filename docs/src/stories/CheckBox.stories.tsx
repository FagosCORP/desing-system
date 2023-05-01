import { StoryObj, Meta } from '@storybook/react'
import {Box, Text, Checkbox, CheckboxProps} from '@pacote-curso-ui/react'

export default {
    title: 'Form/Checkbox',
    component: Checkbox,
    agrs: {},
    decorators: [
        (Story) => {
            return (
                <Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
                    <Text size="sm">Accept terms of use: </Text>
                    {Story()}
                </Box>
            )
        }
    ],
} as   Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
    args:{
        placeholder: 'Type your name'
    }
}
export const Disabled: StoryObj<CheckboxProps> = {
    args:{
        disabled: true
    }
}