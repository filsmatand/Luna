export const challenges = [

{
id:1,


title:"Two Sum",


difficulty:"Easy",


timeLimit:"1 seconde",

memoryLimit:"256 MB",


tags:[

"Array",

"Hash Table",

"Algorithms"

],


description:
`
Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.
`,


examples:[

{
input:
"nums = [2,7,11,15], target = 9",

output:
"[0,1]",

explanation:
"Because nums[0] + nums[1] == 9"
},


{
input:
"nums = [3,2,4], target = 6",

output:
"[1,2]",

explanation:
"Because nums[1] + nums[2] == 6"
}

],


constraints:[

"2 <= nums.length <= 10⁴",

"-10⁹ <= nums[i] <= 10⁹",

"Only one valid answer exists"

],


tests:[

{
input:"[2,7,11,15],9",
expected:"[0,1]"
},


{
input:"[3,3],6",
expected:"[0,1]"
}

]

}

];