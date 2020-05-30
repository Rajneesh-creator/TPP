def perm(qsf , asf)
    if qsf.empty?
        puts asf
        return
    end

    ch = qsf[0,1];
    ros = qsf[1,qsf.length()-1];

    for i in (0..asf.length()-1)
        left = asf[0 , i];
        right = asf[i , asf.length() - i];
        perm(ros, left+ch+right)
    end
end

perm("abc" , " ")