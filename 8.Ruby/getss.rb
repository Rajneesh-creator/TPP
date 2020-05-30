def getss(str)
    if str.length == 0
      base = []
      base.push(".")
      return base
    end
    
    res = str[0,1]
    ros = str[1,str.length-1]
    recres = getss(ros)
    myres =[]
    for ch in recres
      myres.push(ch)
      myres.push(res+ch)
      
    end
   return myres
  end
   
  puts getss("abc")