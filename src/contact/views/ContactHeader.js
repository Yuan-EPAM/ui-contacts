import { TableHeader, HeaderEnhancer } from "../../common";

const ContactHeader = () => {
  const headers = [
    { val: "Title", key: 0 },
    { val: "Name", key: 1 },
    { val: "Age", key: 2 },
    { val: "ContactTypeCount", key: 3 },
    { val: "Favorite", key: 4 },
  ];

  const styleClassName = "contact-header";

  return HeaderEnhancer(headers, styleClassName)(TableHeader);
};

export default ContactHeader;
