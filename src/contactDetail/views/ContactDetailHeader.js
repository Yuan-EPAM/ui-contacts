import { TableHeader, HeaderEnhancer } from "../../common";

const ContactDetailHeader = () => {
  const headers = [
    { key: 1, val: "Type" },
    { key: 2, val: "Content" },
  ];

  const styleClassName = "contactDetailHeader";

  return HeaderEnhancer(headers, styleClassName)(TableHeader);
};

export default ContactDetailHeader;
