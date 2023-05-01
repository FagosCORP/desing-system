import { StoryObj, Meta } from '@storybook/react'
import {Text, TextProps} from '@pacote-curso-ui/react'

export default {
    title: 'Thypography/Text',
    component: Text,
    args:{
        children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt minima vel ad culpa quo similique aperiam. Temporibus dolores repellendus nesciunt possimus quos, dicta officia maxime quis asperiores itaque quaerat laborum.'
    },
   argTypes:{
    size: {
        options: [
          'xxs',
          'xs',
          'sm',
          'md',
          'lg',
          'xl',
          '2xl',
          '4xl',
          '5xl',
          '6xl',
          '7xl',
          '8xl',
          '9xl',
        ],
        control: {
          type: 'inline-radio',
        },
      },
   }
    
} as  Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
    args:{
       children: 'Strong text'
    },
}