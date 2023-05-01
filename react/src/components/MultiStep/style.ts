
import { styled, keyframes } from "../../styles";
import { Text } from "../Text";

export const MultiStepContainer = styled('div',{
    // all:'unset',
    // width:'$6',
    // height:'$6',
    // backgroundColor: '$gray900',
    // borderRadius: '$xs',
    // lineHeight: 0,
    // cursor:'pointer',
    // overflow:'hidden',
    // boxSizing:'border-box',
    // display:'flex',
    // justifyContent:'center',
    // alignItems:'center',

    // '&[data-state ="checked" ]':{
    //     backgroundColor: '$ignite300'
    // },
    // '&:focus':{
    //     border:'2px solid $ignite300'
    // }
})

export const Label = styled(Text,{
    
    color:'$gray200',
    defaultVariants:{
        size:'$xs',
    }

})

export const Steps = styled('div',{
    display:"grid",
    gridTemplateColumns:'repeat(var(--steps-size), 1fr)',

    gap: "$2",
    marginTop:"$1",
});

export const Step = styled('div',{
   height: '$1',
   borderRadius: '$px',
   backgroundColor: '$gray600',

   variants: {
        active:{
            true:{
                backgroundColor: '$gray100'
            }
        }
   }

});


