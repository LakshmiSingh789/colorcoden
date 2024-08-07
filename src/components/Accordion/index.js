import React, { useState } from "react";
import AccordionItem from "./AccordianItems";
import { tw } from "@twind/react";
import { toggleDown, toggleUp } from "../../constants";

const Accordion = ({
  items,
  contentSize = "20",
  headerSize = "40",
  accordionWidth = "800",
  imageHeight = "400",
  multiToggleOpen = false,
  toggleDownIcon =toggleDown ,
  toggleUpIcon = toggleUp,
}) => {
  const [openIndex, setOpenIndex] = useState(multiToggleOpen ? [] : null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndices) => {
      if (multiToggleOpen) {
        return Array.isArray(prevIndices)
          ? prevIndices.includes(index)
            ? prevIndices.filter((i) => i !== index)
            : [...prevIndices, index]
          : [index];
      } else {
        return prevIndices === index ? null : index;
      }
    });
  };

  const accordionStyle = {
    accordionWidth: tw`w-[${accordionWidth}px]` || "w-7/12",
  };

  return (
    <div className={`${accordionStyle.accordionWidth}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          index={index}
          isOpen={
            multiToggleOpen === true
              ? Array.isArray(openIndex) && openIndex.includes(index)
              : openIndex === index
          }
          onToggle={handleToggle}
          contentSize={contentSize}
          headerSize={headerSize}
          imageHeight={imageHeight}
          toggleDown={toggleDownIcon}
          toggleUp={toggleUpIcon}
          multiToggleOpen={multiToggleOpen}
        />
      ))}
    </div>
  );
};

export default Accordion;