import React from "react";
import {ComponentProps} from 'react'
import { Check } from "phosphor-react";
import {CheckboxContainer, CheckboxIndicator  } from "./style";

export interface CheckboxProps extends ComponentProps<typeof  CheckboxContainer>{
    prefix?: string
}
export function Checkbox({ props }: { props: CheckboxProps; }): JSX.Element{
    return(
        <CheckboxContainer {...props}>
            <CheckboxIndicator asChild>
                <Check weight="bold" />
            </CheckboxIndicator>
        </CheckboxContainer>
    );
}

CheckboxContainer.displayName = 'CheckboxContainer'