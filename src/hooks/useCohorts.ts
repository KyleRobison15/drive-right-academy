export interface ClassDate {
  month: string;
  day: string;
  year: string;
}

export interface Cohort {
  cohortId: string;
  label: string;
  classDates: ClassDate[];
}

const cohorts: Cohort[] = [
  {
    cohortId: "DR-1",
    label: "September Class",
    classDates: [
      {
        month: "September",
        day: "7",
        year: "2024",
      },
      {
        month: "September",
        day: "14",
        year: "2024",
      },
      {
        month: "September",
        day: "21",
        year: "2024",
      },
      {
        month: "September",
        day: "28",
        year: "2024",
      },
    ],
  },
  {
    cohortId: "DR-2",
    label: "October/November Class",
    classDates: [
      {
        month: "October",
        day: "19",
        year: "2024",
      },
      {
        month: "October",
        day: "26",
        year: "2024",
      },
      {
        month: "November",
        day: "2",
        year: "2024",
      },
      {
        month: "November",
        day: "9",
        year: "2024",
      },
    ],
  },
  {
    cohortId: "DR-3",
    label: "November/December Class",
    classDates: [
      {
        month: "November",
        day: "30",
        year: "2024",
      },
      {
        month: "December",
        day: "7",
        year: "2024",
      },
      {
        month: "December",
        day: "14",
        year: "2024",
      },
      {
        month: "December",
        day: "21",
        year: "2024",
      },
    ],
  },
];

const useCohorts = () => cohorts;

export default useCohorts;
