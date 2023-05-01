import { StoryObj, Meta } from '@storybook/react'
import {Button, ButtonProps} from '@pacote-curso-ui/react'
import { ArrowArcRight  } from 'phosphor-react'

export default {
    title: 'Form/Button',
    component: Button,
    args:{
        children:'Send',
        disabled: false
    },
    argTypes: {
        variant:{
            options: ['primary',  'secondary', 'tertiary'],
            control:{
                type: 'inline-radio'
            }
        },

        onClick: {
            actions:'click'
        }
    }
    
} as  Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
    args:{
        variant:'primary'
    }
}

export const Secundary: StoryObj<ButtonProps> = {
    args:{
        variant:'secundary'
    }
}

export const Small: StoryObj<ButtonProps> = {
    args:{
        size:'sm',
    }
}

export const tertirary: StoryObj<ButtonProps> = {
    args:{
        variant:'tertiary',
        children:'cancel'
    },    
}

export const IconButton: StoryObj<ButtonProps> = {
    args:{
        children:(
            <>
                <ArrowArcRight />
                Proximo passo!
            </>
        )
    },    
}

export const Disabled: StoryObj<ButtonProps> = {
    args:{
        disabled:true
    },    
}