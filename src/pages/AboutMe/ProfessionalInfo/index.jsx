import { useState } from "react";
import ItemContainer from "../../../components/ItemContainer";
import Experience from "./Experience";
import Item from "../../../components/Item";
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";

const ProfessionalInfo = () => {
  const [activeItem, setActiveItem] = useState('')
  const toggleActiveItem = (itemName) => {
    setActiveItem(activeItem === itemName ? '' : itemName)
  }

  return (
    <ItemContainer title='professional-info'>
      <Item name='experience' fillColor="fill-rose-400"
        hideContent={activeItem !== 'experience'} handleHideContent={() => toggleActiveItem('experience')} >
        <Experience />
      </Item>
    
      <Item name='hard-skills' fillColor="fill-teal-400"
        hideContent={activeItem !== 'hard-skills'} handleHideContent={() => toggleActiveItem('hard-skills')} >
        <HardSkills />
      </Item>
    
      <Item name='soft-skills' fillColor="fill-indigo-500"
        hideContent={activeItem !== 'soft-skills'} handleHideContent={() => toggleActiveItem('soft-skills')} >
        <SoftSkills />
      </Item>    
    </ItemContainer>
  );
};

export default ProfessionalInfo;