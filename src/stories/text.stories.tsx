import TextAtom , {TextAtomProps} from "../ComponentsS/atom/text";

export default {
    title: 'Atom',
    component: TextAtom,
    tags : ['autodocs'],
    argTypes: {
        value: {
          control: { 
            type: 'text'
          },
          description: 'The value of the TextAtom',
          defaultValue: '123'
        },
        variant: {
          control: { 
            type: 'inline-radio', 
            options: ['h1', 'h2','h3','h4','h5','h6','body1'],
            defaultValue:'h4',
          },
          description: 'The variant of the TextAtom',
        },
      },
  };

  export const Text = (args: TextAtomProps) => {
    return <TextAtom {...args}/>;
  };
  
  

