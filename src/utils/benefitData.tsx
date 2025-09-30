import { BenefitsType } from "@/types/type";
import { HiHomeModern, HiMiniUserGroup, HiAcademicCap } from "react-icons/hi2";

export const benefits: Array<BenefitsType> = [
  {
    icon: <HiHomeModern className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
},
  {
    icon: <HiMiniUserGroup className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <HiAcademicCap className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce ipsum orci rhoncus aliporttitor integer platea placerat. Orci massa accumsan praesent elementum facilisis leo.",
  },
]

