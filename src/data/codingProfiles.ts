export interface CodingProfile {
  name: string;
  url: string;
  detail: string;
  badge?: string;
  verified: boolean;
}

export const codingProfiles: CodingProfile[] = [
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/sachinm9548",
    detail: "Problem-solving practice across algorithms and data structures.",
    badge: "5-Star Problem Solving",
    verified: true,
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/profile/sachinkhjk",
    detail: "Consistent practice, including active participation in Problem of the Day.",
    badge: "150+ problems solved",
    verified: true,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Sachin_9548/",
    detail: "Interview-style problem solving — profile linked as-is, with no claimed stats.",
    verified: true,
  },
];
