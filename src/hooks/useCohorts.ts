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
  {
    cohortId: "DR-2",
    label: "January/February Class",
    classDates: [
      {
        month: "January",
        day: "11",
        year: "2025",
      },
      {
        month: "January",
        day: "18",
        year: "2025",
      },
      {
        month: "January",
        day: "25",
        year: "2025",
      },
      {
        month: "February",
        day: "1",
        year: "2025",
      },
    ],
  },
  {
    cohortId: "DR-3",
    label: "February/March Class",
    classDates: [
      {
        month: "February",
        day: "22",
        year: "2025",
      },
      {
        month: "March",
        day: "1",
        year: "2025",
      },
      {
        month: "March",
        day: "8",
        year: "2025",
      },
      {
        month: "March",
        day: "15",
        year: "2025",
      },
    ],
  },
];

const useCohorts = () => cohorts;

export default useCohorts;
