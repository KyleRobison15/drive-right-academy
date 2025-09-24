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
  // {
  //   cohortId: "DR-1",
  //   label: "February/March Class",
  //   classDates: [
  //     {
  //       month: "February",
  //       day: "22",
  //       year: "2025",
  //     },
  //     {
  //       month: "March",
  //       day: "1",
  //       year: "2025",
  //     },
  //     {
  //       month: "March",
  //       day: "8",
  //       year: "2025",
  //     },
  //     {
  //       month: "March",
  //       day: "15",
  //       year: "2025",
  //     },
  //   ],
  // },
  // {
  //   cohortId: "DR-2",
  //   label: "April Class",
  //   classDates: [
  //     {
  //       month: "April",
  //       day: "5",
  //       year: "2025",
  //     },
  //     {
  //       month: "April",
  //       day: "12",
  //       year: "2025",
  //     },
  //     {
  //       month: "April",
  //       day: "19",
  //       year: "2025",
  //     },
  //     {
  //       month: "April",
  //       day: "26",
  //       year: "2025",
  //     },
  //   ],
  // },
  // {
  //   cohortId: "DR-3",
  //   label: "June Class One",
  //   classDates: [
  //     {
  //       month: "June",
  //       day: "4",
  //       year: "2025",
  //     },
  //     {
  //       month: "June",
  //       day: "5",
  //       year: "2025",
  //     },
  //     {
  //       month: "June",
  //       day: "6",
  //       year: "2025",
  //     },
  //     {
  //       month: "June",
  //       day: "7",
  //       year: "2025",
  //     },
  //   ],
  // },
  // {
  //   cohortId: "DR-4",
  //   label: "June Class Two",
  //   classDates: [
  //     {
  //       month: "June",
  //       day: "25",
  //       year: "2025",
  //     },
  //     {
  //       month: "June",
  //       day: "26",
  //       year: "2025",
  //     },
  //     {
  //       month: "June",
  //       day: "27",
  //       year: "2025",
  //     },
  //     {
  //       month: "June",
  //       day: "28",
  //       year: "2025",
  //     },
  //   ],
  // },
  // {
  //   cohortId: "DR-5",
  //   label: "July/August Class",
  //   classDates: [
  //     {
  //       month: "July",
  //       day: "30",
  //       year: "2025",
  //     },
  //     {
  //       month: "July",
  //       day: "31",
  //       year: "2025",
  //     },
  //     {
  //       month: "August",
  //       day: "1",
  //       year: "2025",
  //     },
  //     {
  //       month: "August",
  //       day: "2",
  //       year: "2025",
  //     },
  //   ],
  // },
  {
    cohortId: "DR-6",
    label: "November Class",
    classDates: [
      {
        month: "November",
        day: "1",
        year: "2025",
      },
      {
        month: "November",
        day: "8",
        year: "2025",
      },
      {
        month: "November",
        day: "15",
        year: "2025",
      },
      {
        month: "November",
        day: "22",
        year: "2025",
      },
    ],
  },
];

const useCohorts = () => cohorts;

export default useCohorts;
