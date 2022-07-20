
import { ExtractPropTypes, PropType } from 'vue'


export type ButtonType = 'primary'| 'ghost'| 'dashed'| 'link'| 'text'| 'default'

export type LegacyButtonType = ButtonType | 'danger';

export const buttonProps = {
  type: String as PropType<ButtonType>,
  ghost: { 
    type: Boolean, 
    default: undefined 
  },
  danger: { type: Boolean, default: undefined }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>


