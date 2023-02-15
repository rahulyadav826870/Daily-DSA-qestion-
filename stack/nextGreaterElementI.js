let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];

nextGreaterElement(nums1, nums2);

function nextGreaterElement(nums1, nums2) {
  const index = [];
  const greaterElements = [];

  const stack = [];

  for (let i = 0; i < nums2.length; i++) {
    index[nums2[i]] = i;

    while (stack.length > 0 && nums2[i] > nums2[stack[stack.length - 1]]) {
      greaterElements[stack.pop()] = nums2[i];
    }

    stack.push(i);
  }

  for (const i of stack) {
    greaterElements[i] = -1;
  }

  return nums1.map((e) => greaterElements[index[e]]);
}
