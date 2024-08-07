import React from "react";
import { tw } from "@twind/react";

const AccordionItem = ({
  item,
  index,
  isOpen,
  onToggle,
  headerSize,
  contentSize,
  imageHeight,
  toggleDown,
  toggleUp,
  multiToggleOpen,
}) => {
  const { title, content, imageUrl } = item;

  const accordionStyle = {
    contentSize: tw`text-[${contentSize}px]` || "text-md",
    headerSize: tw`text-[${headerSize}px]` || "text-xl",
    imageHeight: tw`h-[${imageHeight}px]` || "h-20",
  };

  return (
    <div className={`mb-2 box-border rounded overflow-hidden`}>
      <div
        className={`flex justify-between p-2 cursor-pointer border-b-[3px] border-amber-900`}
        onClick={() => onToggle(index)}
      >
        <div className={`${accordionStyle.headerSize} font-extrabold`}>
          {title}
        </div>
        {multiToggleOpen ? (
          isOpen ? (
            <span>
              {toggleUp}
            </span>
          ) : (
            <span>
              {toggleDown}
            </span>
          )
        ) : (
          isOpen ? (
            <span>
              {toggleUp}
            </span>
          ) : (
            <span>
              {toggleDown}
            </span>
          )
        )}
      </div>
        {isOpen && (
          <div className={`p-2`}>
            {imageUrl && (
              <img
                src={imageUrl}
                alt={title}
                className={`mb-2 rounded-xl w-full ${accordionStyle.imageHeight}`}
              />
            )}
            <span
              className={`${accordionStyle.contentSize} text-justify leading-6 font-medium`}
            >
              {content}
            </span>
          </div>
        )
      }
    </div>
  );
};

export default AccordionItem;