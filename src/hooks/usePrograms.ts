import { IconType } from "react-icons";
import { BiSolidTrafficCone } from "react-icons/bi";
import { FaIdCard } from "react-icons/fa6";
import { TbManualGearbox } from "react-icons/tb";

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
    name: "skills-lab",
    label: "8-Hour Skills Based Driving Lab",
    description: "8-Hour, hands-on driving class with Drive-Right instructors.",
    price: "$149",
    icon: BiSolidTrafficCone,
    aria: "Traffic Cone Icon",
  },
  {
    name: "driving-test",
    label: "Driving Test",
    price: "$65",
    description: "",
    icon: FaIdCard,
    aria: "Identification Card Icon",
  },
  {
    name: "manual-transmission-training",
    label: "2-Hour Manual Transmission Training",
    description:
      "2-Hour Manual Transmission Training in a Drive-Right Academy Vehicle.",
    price: "$100/hr",
    icon: TbManualGearbox,
    aria: "Manual Gearbox Icon",
  },
];

const programs: Program[] = [
  {
    name: "teen-driving-program",
    label: "Teen Driving Program",
    price: "$479",
    image: "",
    description:
      "The 40-Hour Teen Program is a comprehensive Driver's Ed program that meets ALL the state requirements for students 14 years old and 11 months to obtain their learner's permit. It then meets ALL the state requirements of the 6 Hours Behind the Wheel for students to obtain their license. Also, most insurance companies require this program to receive any type of discounts on insurance premiums.",
    highlights: [
      {
        text: "Our most popular program",
        badgeText: null,
      },
      {
        text: "Three 8-hour classroom days",
        badgeText: null,
      },
      {
        text: "One day skills-based driving lab in Student's vehicle",
        badgeText: null,
      },
      {
        text: "Two 3-hour Behind the Wheel appointments in a Drive-Right Academy vehicle",
        badgeText: null,
      },
      {
        text: "The Colorado written permit test",
        badgeText: null,
      },
    ],
    links: null,
    accordionItemDetails: [
      {
        label: "Enrollment Details",
        highlights: [
          "Initial enrollment can be handled over the phone.",
          "Official Registration and Payment are handled the first day of class.",
          "Depending on availability, cars for the Driving Lab may be rented for an additional $50 if the student is unable to provide one.",
        ],
        text: null,
      },
      {
        label: "Manual Transmission Training",
        highlights: null,
        text: "Have a car with a manual transmission? For an additional $100/hr over our normal 40-Hour Teen Driving Program we'll teach you driving skills in a standard-shift car.",
      },
    ],
    footerText:
      "* A non refundable $50 deposit which counts toward your balance is required to enroll.",
  },
  {
    name: "behind-the-wheel",
    label: "Behind the Wheel",
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
      "* A non refundable $50 deposit which counts toward your balance is required to enroll.",
  },
  {
    name: "adult-driving-program",
    label: "Adult Driving Program",
    price: "$260",
    image: "",
    description:
      "Please call for more information on our Adult Driving Program.",
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
      "* A non refundable $50 deposit which counts toward your balance is required to enroll.",
  },
  {
    name: "online-drivers-education",
    label: "Online Driver's Education",
    price: null,
    image: "",
    description:
      "Is your schedule too hectic for an in person class? The Colorado Teen On-line Program allows you to get the required 30 hour course completed on your own time. Pricing is available when you sign up and create your account.",
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
