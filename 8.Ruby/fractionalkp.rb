class Item

    attr_accessor :wt ,:profit ,:ratio
    def initialize(wt , profit)
        @wt = wt
        @profit = profit 
        @ratio = profit.to_f()/wt
    end

    def to_s()      
        return "#{profit.to_s} - #{wt.to_s} - #{ratio.to_s}";
    end
    def <=>(other)
        if (@ratio > other.ratio)
            return -1
        
        elsif (@ratio < other.ratio)
            return +1
        
        else (@ratio = other.ratio)
            return 0;
        end
    end

end

profits = [15 ,14 ,10 ,45 ,30];
wieght = [2 , 5, 1, 3 ,4];
items_Arr = []

for i in (0..profits.length()-1)
    items = Item.new(wieght[i] , profits[i]);
    items_Arr.push(items)
end

sorted_Arr = items_Arr.sort()

for i in 0..items_Arr.length()-1
    puts (sorted_Arr[i]);
end

idx = 0;
cap = 7;
tot_profit = 0;

while(idx<sorted_Arr.length())
    if(cap>sorted_Arr[idx].wt)
        tot_profit += sorted_Arr[idx].profit;
        cap -= sorted_Arr[idx].wt;
    else
        tot_profit += cap*(sorted_Arr[idx].ratio);    
        cap = 0;
        break
    end
    idx += 1;
end
puts tot_profit