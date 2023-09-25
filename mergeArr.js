function merge(nums1, m, nums2, n) {
    let p1 = m - 1; 
    let p2 = n - 1; 
    let p = m + n - 1; 

    // Start from the end of both arrays and work backwards
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1]; // Copy the larger element from nums1
            p1--;
        } else {
            nums1[p] = nums2[p2]; // Copy the larger element from nums2
            p2--;
        }
        p--;
    }

    // If there are remaining elements in nums2, copy them to nums1
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
}
