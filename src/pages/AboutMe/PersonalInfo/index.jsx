import { useState } from "react";
import SectionArrow from "../../../components/SectionArrow";
import Item from "../../../components/Item";
import Bio from "./Bio";
import Interests from "./Interests";
import Education from "./Education";
import ItemContainer from "../../../components/ItemContainer";

const PersonalInfo = () => (
  <ItemContainer title='personal-info'>
    <Item name='bio' fillColor="fill-rose-400" >
      <Bio />
    </Item>

    <Item name='interests' fillColor="fill-teal-400" >
      <Interests />
    </Item>

    <Item name='education' fillColor="fill-indigo-500" >
      <Education />
    </Item>
  </ItemContainer>
)

export default PersonalInfo;