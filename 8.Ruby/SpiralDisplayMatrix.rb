n=ARGV[0].to_i;
m=ARGV[1].to_i;
ARGV.clear();

mat=[]
for i in 0..n-1
    row=[]
    for j in (0..m-1)
        row.push(gets.chomp.to_i)
    end
    mat.push(row)
end

def SpiralDisplay(mat)
    puts("\n******************************SPIRAL DISPLAY*********************************")
     irow=0;
     nrow=mat.length-1;
     icol=0;
     ncol=mat[0].length-1;
     nele=(nrow+1)*(ncol+1);
     iele=0;
while(iele<nele)
        for i in (irow..nrow)
            if(iele<=nele)
            print(mat[i][icol]);
            print(" ");
            iele+=1;
        end
    end
    icol+=1;
    for i in (icol..ncol)
        if(iele<=nele)
            print(mat[nrow][i]);
            print(" ");
            iele+=1;
        end
    end
    nrow-=1;
    for i in nrow.downto(irow)
        if(iele<=nele)
            print(mat[i][ncol]);
            print(" ");
            iele+=1;
        end
    end
    ncol-=1;
    for i in ncol.downto(icol)
        if(iele<=nele)
            print(mat[irow][i]);
            print(" ");
            iele+=1;
        end
    end
    irow+=1;
end
    puts("\n*****************************************************************************")
end

SpiralDisplay(mat)