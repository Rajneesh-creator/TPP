def fib(num , dp)
    if(num == 0 || num == 1)
        return num
    end
    if(dp[num] != 0 )
        return dp[num];
    end
    dp[num] = (fib(num-1 , dp)  + fib(num-2 , dp));
    return dp[num];  
end
   
print fib(3 , Array.new(4 , 0));
