import { Link } from "react-scroll";
import { SectionId } from "@/types/type";

type Props = {
  section: SectionId;
  children: React.ReactNode;
  onClick: (SectionId: SectionId) => void;
  activeSection: SectionId | null;
};

const CustomLink = ({ section, children, onClick, activeSection }: Props) => {
  const isActive = activeSection === section;

  return (
    <Link
      to={section}
      onClick={() => onClick(section)}
      className={`animete hover:text-primary-300 cursor-pointer capitalize ${
        isActive ? "text-primary-500" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
