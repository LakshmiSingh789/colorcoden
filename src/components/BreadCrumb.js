import { tw } from "@twind/react";
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({
  items,
  separator = ">",
  onLinkClick,
  size = "22",
  linkedColor = "blue",
  linkedColorStrength = "500",
  openedColor = "black",
  openedColorStrength = "500",
}) => {
  const handleBreadcrumbClick = (index, link, label) => {
    if (onLinkClick) {
      onLinkClick(index, link, label);
    }
  };

  const breadCrumbStyle = {
    size: tw`text-[${size}px]` || "text-md",
    linkedColor:
      tw`text-${linkedColor}-${linkedColorStrength}` || "text-blue-500",
    openedColor: tw`text-${openedColor}-${openedColorStrength}` || "text-black",
  };

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex">
        {items.map((item, index) => (
          <li key={index} className={`${breadCrumbStyle.size}`}>
            {index < items.length - 1 ? (
              <Link
                to={item.link}
                className={`${breadCrumbStyle.linkedColor} hover:underline`}
                onClick={() =>
                  handleBreadcrumbClick(index, item.link, item.label)
                }
              >
                {item.label}
              </Link>
            ) : (
              <span className={`${breadCrumbStyle.openedColor}`}>
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <span className={`mx-2 ${breadCrumbStyle.openedColor}`}>
                {(separator)}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;