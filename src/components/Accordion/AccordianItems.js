import React from "react";
import { tw } from "@twind/react";

const AccordionItem = ({
  item,
  index,
  isOpen,
  onToggle,
  headerBgColor,
  headerBgColorStrength,
  accordionTitleColor,
  accordionTitleColorStrength,
  contentBgColor,
  contentBgColorStrength,
  contentColor,
  contentColorStrength,
  headerSize,
  contentSize,
  imageHeight,
  toggleDown,
  toggleUp,
  multiToggleOpen,
}) => {
  const { title, content, imageUrl } = item;

  const accordionStyle = {
    headerBgColor:
      tw`bg-${headerBgColor}-${headerBgColorStrength}` || "bg-blue-500",
    accordionTitleColor:
      tw`text-${accordionTitleColor}-${accordionTitleColorStrength}` ||
      "text-white",
    contentBgColor:
      tw`bg-${contentBgColor}-${contentBgColorStrength}` || "bg-gray-300",
    contentColor:
      tw`text-${contentColor}-${contentColorStrength}` || "text-red-600",
    contentSize: tw`text-[${contentSize}px]` || "text-md",
    headerSize: tw`text-[${headerSize}px]` || "text-xl",
    imageHeight: tw`h-[${imageHeight}px]` || "h-20",
  };

  return (
    <div className={`mb-2 border rounded overflow-hidden`}>
      <div
        className={`flex justify-between p-2 cursor-pointer ${accordionStyle.headerBgColor} ${accordionStyle.accordionTitleColor}`}
        onClick={() => onToggle(index)}
      >
        <div className={`${accordionStyle.headerSize} font-semibold`}>
          {title}
        </div>
        {multiToggleOpen ? (
          isOpen ? (
            <span className={`${accordionStyle.accordionTitleColor}`}>
              {toggleUp}
            </span>
          ) : (
            <span className={`${accordionStyle.accordionTitleColor}`}>
              {toggleDown}
            </span>
          )
        ) : (
          isOpen ? (
            <span className={`${accordionStyle.accordionTitleColor}`}>
              {toggleUp}
            </span>
          ) : (
            <span className={`${accordionStyle.accordionTitleColor}`}>
              {toggleDown}
            </span>
          )
        )}
      </div>
        {isOpen && (
          <div className={`p-2 ${accordionStyle.contentBgColor}`}>
            {imageUrl && (
              <img
                src={imageUrl}
                alt={title}
                className={`mb-2 rounded-xl w-full ${accordionStyle.imageHeight}`}
              />
            )}
            <p
              className={`${accordionStyle.contentColor} ${accordionStyle.contentSize} text-justify`}
            >
              {content}
            </p>
          </div>
        )
      }
    </div>
  );
};

export default AccordionItem;