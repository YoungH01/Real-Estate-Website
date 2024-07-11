import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import value from "../../assets/image/value.png";
import data from '../../utils/accordion';
import "./Value.css";
const Value = () => {
  return (
    <div className="value">
      <div className="value-left">
        <div className="value-img">
          <img src={value} alt="" />
        </div>
      </div>
      <div className="value-right">
        <span className="orangeText">Our Value</span>
        <span className="primaryText">Value We Give to You</span>
        <span className="secondaryText">
          We always ready to help by providijng the best services for you.
          <br />
          We beleive a good blace to live can make your life better
        </span>
        <Accordion className="accordion" allowMultipleExpanded={false}
        preExpanded={[0]}>
            {data.map((item,index)=>{
                return <AccordionItem className={`accordionItem`} key={index}>
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordionButton">
                            <div className="icon">
                                {item.icon}
                            </div>
                            <span className="primaryText">{item.heading}</span>
                            <div className="icon">
                                <MdOutlineArrowDropDown size={20}/>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="secondaryText">
                            {item.detail}
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            })}
        </Accordion>
      </div>
    </div>
  );
};

export default Value;
