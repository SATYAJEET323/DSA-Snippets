export const codes = [
    // FizzBuzz in all languages
    {
      id: 1,
      title: 'FizzBuzz',
      code: 'for(let i=1; i<=100; i++) { console.log(i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i) }',
      difficulty: 'easy',
      language: 'JavaScript',
    },
    {
      id: 2,
      title: 'FizzBuzz',
      code: 'for i in range(1, 101):\n    if i % 3 == 0 and i % 5 == 0:\n        print("FizzBuzz")\n    elif i % 3 == 0:\n        print("Fizz")\n    elif i % 5 == 0:\n        print("Buzz")\n    else:\n        print(i)',
      difficulty: 'easy',
      language: 'Python',
    },
    {
      id: 3,
      title: 'FizzBuzz',
      code: '#include <iostream>\nusing namespace std;\nint main() {\n    for (int i = 1; i <= 100; i++) {\n        if (i % 3 == 0 && i % 5 == 0)\n            cout << "FizzBuzz\\n";\n        else if (i % 3 == 0)\n            cout << "Fizz\\n";\n        else if (i % 5 == 0)\n            cout << "Buzz\\n";\n        else\n            cout << i << "\\n";\n    }\n    return 0;\n}',
      difficulty: 'easy',
      language: 'C++',
    },
  
    // Two Sum in all languages
    {
      id: 4,
      title: 'Two Sum',
      code: 'function twoSum(nums, target) {\n    const map = new Map();\n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        if (map.has(complement)) {\n            return [map.get(complement), i];\n        }\n        map.set(nums[i], i);\n    }\n    return [];\n}',
      difficulty: 'medium',
      language: 'JavaScript',
    },
    {
      id: 5,
      title: 'Two Sum',
      code: 'def two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []',
      difficulty: 'medium',
      language: 'Python',
    },
    {
      id: 6,
      title: 'Two Sum',
      code: '#include <unordered_map>\n#include <vector>\nusing namespace std;\nvector<int> twoSum(vector<int>& nums, int target) {\n    unordered_map<int, int> map;\n    for (int i = 0; i < nums.size(); i++) {\n        int complement = target - nums[i];\n        if (map.find(complement) != map.end()) {\n            return {map[complement], i};\n        }\n        map[nums[i]] = i;\n    }\n    return {};\n}',
      difficulty: 'medium',
      language: 'C++',
    },

    // Palindrome ---------------
    {
        id: 6,
        title: 'Palindrome',
        code: 'class Solution(object): def isPalindrome(self, x): \nif x < 0:\n return False \noriginal = x\n   reversed_num = 0  \nwhile x > 0:\n last_digit = x % 10 \nreversed_num = reversed_num * 10 + last_digit \n x = x // 10 \n return original == reversed_num',
        difficulty: 'easy',
        language: 'Python',
      },
  
    // Add more problems like Binary Search, Knapsack Problem, etc., for all languages
  ];
  