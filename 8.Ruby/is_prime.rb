def is_primr(num)
    div = 2
    while(div*div <= num)
      if(num%div == 0)
        return false
      end
      div = div+1;
    end
    return true;
  end    
  
  a = is_primr(11);
  
  puts "Is 11 prime?"+ a.to_s()