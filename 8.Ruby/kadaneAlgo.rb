arr=[-2, -3, 4, -1, -2, 1, 5, -3];
arr1=[2,5,-1,3,-2,4];
arr2=[-1,-2,-3,-4,-5];

def largestSumContiguosSubarray(arr)
    max_so_far=positive_so_far=0;
    for i in (0..arr.length-1)
        positive_so_far=positive_so_far+arr[i]
        if(positive_so_far < 0)
            positive_so_far=0
        end
        if positive_so_far>max_so_far
            max_so_far=positive_so_far;
        end
    end
    puts("The maximum sum of the subarray is : #{max_so_far}")
end

largestSumContiguosSubarray(arr)
largestSumContiguosSubarray(arr1)
largestSumContiguosSubarray(arr2)