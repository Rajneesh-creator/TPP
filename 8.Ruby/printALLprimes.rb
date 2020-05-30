def is_primr(num)
    div = 2
    while div * div <= num
      return false if num % div == 0
  
      div += 1
    end
    true
  end
  
  def print_ALLprimes(num)
    (2..num - 1).each do |i|
    if(is_primr(i))
      puts i.to_s + '  ' 
    end
  end
  end
  
  print_ALLprimes(20)