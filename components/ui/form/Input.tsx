'use client';

import {
  ChangeEventHandler,
  FC,
  InputHTMLAttributes,
  Ref,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  forwardRef
} from 'react';
import { v4 as uuidv4 } from 'uuid';


import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import InputCheckbox from './input/input-checkbox';
import InputRadio from './input/input-radio';
import InputSearch from './input/input-search';
import Select from './input/input-select';
import InputText from './input/input-text';
import InputTextArea from './input/input-textarea';
import Label from './label';
import P from '../text/P';

const inputVariants = cva('', {
  variants: {
    intent: {
      primary:
        'bg-primary5 placeholder:text-primary90/[.4] text-primary90 border-primary90/[.2] outline-primary90/[.2] dark:bg-primary90 dark:text-primary1 dark:placeholder:text-primary10/[.4] dark:border-primary10/[.2] dark:outline-primary10/[.2]',

      secondary:
        'bg-secondary5 placeholder:text-secondary90/[.4] text-secondary90 border-secondary90/[.2] outline-secondary90/[.2]',
      tertiary:
        'bg-tertiary5 placeholder:text-tertiary90/[.4] text-tertiary90 border-tertiary90/[.2] outline-tertiary90/[.2]',
      success:
        '  bg-success5 placeholder:text-success90/[.4] text-success90 border-success90/[.2] outline-success90/[.2]',
      error:
        'bg-error5 placeholder:text-error90/[.4] text-error90 border-error90/[.2] outline-error90/[.2]',
      warning:
        ' bg-warning5 placeholder:text-warning90/[.4] text-warning90 border-warning90/[.2] outline-warning90/[.2]',
      info: 'bg-info5 placeholder:text-info90/[.4] text-info90 border-info90/[.2] outline-info90/[.2]',
      neutral:
        'bg-${color}5 placeholder:text-${color}90/[.4] text-${color}90 border-${color}90/[.2] outline-${color}90/[.2]'
    }
  }
});

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    VariantProps<typeof inputVariants> {
  children?: React.ReactNode;
  hiddenLabel?: boolean;
  choices?: string[];
  customText?: string[];
  loader?: JSX.Element;
  onChange?:
    | SelectHTMLAttributes<HTMLSelectElement>['onChange']
    | InputHTMLAttributes<HTMLInputElement>['onChange']
    | TextareaHTMLAttributes<HTMLTextAreaElement>['onChange'];
  ref?: Ref<HTMLInputElement>;
  rows?: number;
  cols?: number;
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      intent,

      choices = [''],
      customText = [''],
      loader,
      children,
      onChange,

      ...props
    },
    ref
  ) => {
    const renderInput = () => {
      switch (type) {
        case 'select':
          return (
            <Select
              className={cn(
                inputVariants({
                  className,
                  intent
                })
              )}
              ref={ref}
              loader={loader}
              choices={choices}
              onChange={onChange as ChangeEventHandler<HTMLSelectElement>}
              {...props}
            />
          );
        case 'text':
        case 'email':
        case 'password':
          return (
            <InputText
              className={cn(
                inputVariants({
                  className,
                  intent
                })
              )}
              onChange={onChange as ChangeEventHandler<HTMLInputElement>}
              {...props}
            ></InputText>
          );
        case 'radio':
          return (
            <fieldset className="flex flex-col gap-small">
              {choices.map((choice, index) => {
                return (
                  <div key={uuidv4()} className="flex items-end gap-extra-small">
                    <InputRadio
                      className={cn(
                        inputVariants({
                          className,
                          intent
                        })
                      )}
                      choice={choice}
                      name={props.id}
                      value={props.value}
                      onChange={onChange as ChangeEventHandler<HTMLInputElement>}
                    />
                    {customText[index] && (
                      <P className={`text-${intent}30 caption`}>{customText[index]}</P>
                    )}
                  </div>
                );
              })}
            </fieldset>
          );
        case 'textarea':
          return (
            <InputTextArea
              className={cn(
                inputVariants({
                  className,
                  intent
                })
              )}
              onChange={onChange as ChangeEventHandler<HTMLTextAreaElement>}
              {...props}
            ></InputTextArea>
          );
        case 'checkbox':
          return (
            <InputCheckbox
              onChange={onChange as ChangeEventHandler<HTMLInputElement>}
              {...props}
            ></InputCheckbox>
          );
        case 'search':
          return (
            <InputSearch
              onChange={onChange as ChangeEventHandler<HTMLInputElement>}
              className={cn(
                inputVariants({
                  className,
                  intent
                })
              )}
              ref={ref}
              {...props}
            ></InputSearch>
          );
      }
    };

    return (
      <>
        {renderInput()}
        {type !== 'radio' ? (
          <Label className="text-90 body font-medium" isHidden={true} htmlFor={props.id}></Label>
        ) : null}{' '}
      </>
    );
  }
);

Input.displayName = 'Button';

export { inputVariants };
export default Input;

