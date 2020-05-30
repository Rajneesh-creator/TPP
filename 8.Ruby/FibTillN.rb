print("Enter the number : ");
n=gets.chomp().to_i;

def fibTillN(n)
    a=0;
    b=1;
    while(a<=n)
        puts(a);
        temp=a+b;
        a=b;
        b=temp;
    end
end

fibTillN(n);