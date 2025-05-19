
const challengesList = [
  {
    id: 123,
    slug: "two-sum",
    title: "Two-sum",
    difficulty: "Easy",
    description: `
### Problem Statement

Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

### Example

Input: \`nums = [2,7,11,15]\`, \`target = 9\`  
Output: \`[0,1]\`

### Constraints

- \`2 <= nums.length <= 10^4\`
- \`-10^9 <= nums[i] <= 10^9\`
- \`-10^9 <= target <= 10^9\`
- Only one valid answer exists.

### Approach

Use a hash map to store seen values and check for the complement.
`.trim()
  }
];

export default challengesList;
