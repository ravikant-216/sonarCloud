import { Pop ,PopProps} from "../ComponentsS/organism/popup";

export default{
    title:'Organism',
    component:Pop,
    tags:['autodocs'],
}
export const PopUp = (args: PopProps) => {
    return <Pop {...args} />;
  };