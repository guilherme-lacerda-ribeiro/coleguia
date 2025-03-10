import { useState } from "react";
import SectionArrow from "../../../components/SectionArrow";
import Item from "../../../components/Item";
import Bio from "../Bio";
import Interests from "../Interests";
import Education from "../Education";
import ItemContainer from "../../../components/ItemContainer";

const PersonalInfo = () => {
  const [activeItem, setActiveItem] = useState('')
  const toggleActiveItem = (itemName) => {
    setActiveItem(activeItem === itemName ? '' : itemName)
  }

  return (
    <ItemContainer title='personal-info'>
      <Item name='bio' fillColor="fill-rose-400"
        hideContent={activeItem !== 'bio'} handleHideContent={() => toggleActiveItem('bio')} >
        <Bio />
      </Item>

      <Item name='interests' fillColor="fill-teal-400"
        hideContent={activeItem !== 'interests'} handleHideContent={() => toggleActiveItem('interests')} >
        <Interests />
      </Item>

      <Item name='education' fillColor="fill-indigo-500"
        hideContent={activeItem !== 'education'} handleHideContent={() => toggleActiveItem('education')} >
        <Education />
      </Item>
    </ItemContainer>
  )
}

export default PersonalInfo;