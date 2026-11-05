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
    detail: "5-Star rating in Java — algorithms and data structures problem solving.",
    badge: "5-Star Java",
    verified: true,
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/profile/sachinkhjk",
    detail: "150+ problems solved. Active Problem of the Day participant.",
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
