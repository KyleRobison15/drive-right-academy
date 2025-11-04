import { IconType } from "react-icons";
import { FaIdCard } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";

export interface CardLink {
  label: string;
  url: string;
}

export interface AccordionItemDetail {
  label: string;
  highlights: string[] | null;
  text: string | null;
}

export interface Highlight {
  text: string;
  badgeText: string | null;
}

export interface Program {
  name: string;
  label: string;
  price: string | null;
  image: string;
  description: string;
  highlights: Highlight[];
  links: CardLink[] | null;
  accordionItemDetails: AccordionItemDetail[] | null;
  footerText: string | null;
}

export interface AlaCarte {
  name: string;
  label: string;
  description: string;
  price: string;
  icon: IconType;
  aria: string;
}

const alaCarte: AlaCarte[] = [
  {
    name: "permit-test",
    label: "Permit Test",
    description: "8-Hour, hands-on driving class with Drive-Right instructors.",
    price: "$45",
    icon: FaClipboardList,
    aria: "Traffic Cone Icon",
  },
  {
    name: "driving-test",
    label: "Driving Test",
    price: "$70",
    description: "",
    icon: FaIdCard,
    aria: "Identification Card Icon",
  }
];

const programs: Program[] = [
  {
    name: "behind-the-wheel",
    label: "6-Hour Behind the Wheel",
    price: "$390",
    image: "",
    description:
      "The 6-Hour Behind the Wheel Program is for students who obtained their permit through an online class and are required to have professional instruction prior to applying for their License.",
    highlights: [
      {
        text: "Two 3-hour Behind the Wheel appointments",
        badgeText: null,
      },
      {
        text: "Drive-Right Academy vehicle",
        badgeText: null,
      },
      {
        text: "Pick-up and drop-off provided by Drive-Right",
        badgeText: null,
      },
    ],
    links: null,
    accordionItemDetails: [],
    footerText:
      "* A non-refundable, $50 deposit which counts toward your balance is required to enroll.",
  },
  {
    name: "adult-driving-program",
    label: "4-Hour Adult Driving Program",
    price: "$260",
    image: "",
    description:
      "You must have a permit to enroll in this program. Please call for more information on our Adult Driving Program.",
    highlights: [
      {
        text: "Two 2-hour, skills-based, private road lessons",
        badgeText: null,
      },
      {
        text: "Pick-up and drop-off provided by Drive-Right",
        badgeText: null,
      },
      {
        text: "Additional hours of driving instruction at $65 per hour",
        badgeText: null,
      },
      {
        text: "6 hours Behind-the-Wheel Training available. Please call for details.",
        badgeText: null,
      },
    ],
    links: null,
    accordionItemDetails: [],
    footerText:
      "* A non-refundable, $50 deposit which counts toward your balance is required to enroll.",
  },
  {
    name: "online-drivers-education",
    label: "Online Driver's Education",
    price: "$74",
    image: "",
    description:
      "The Colorado Teen On-line Program allows you to get the required 30 hour course completed on your own time.",
    highlights: [
      {
        text: "Online",
        badgeText: null,
      },
      {
        text: "Self-Paced",
        badgeText: null,
      },
      {
        text: "State Approved",
        badgeText: null,
      },
      {
        text: "Fulfills 30-Hour Course Requirement for Teens",
        badgeText: null,
      },
    ],
    links: [
      {
        label: "Sign Up",
        url: "https://driverightacademy.bedrivingus.com/affiliate/partner/index/enroll",
      },
      {
        label: "Log In",
        url: "https://driverightacademy.bedrivingus.com/affiliate/partner/index/login",
      },
    ],
    accordionItemDetails: [],
    footerText: null,
  },
];

export const useAlaCarte = () => alaCarte;

const usePrograms = () => programs;

export default usePrograms;
