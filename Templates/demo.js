starpattern=()=>{
    let i,j,a=7,b=3,string1="",string2="";
        for( i=1;i<=7;i++)
            {if (i == 1 || i == 2 || i == 3 || i == 4)
                {
                    for (j = 1; j <= a; j++)
                    {
                        string1+="*";
                    }
                    string1+="\n";
                    a -= 2;
                
                }
            
            else if(i==5||i==6||i==7)
                { 
                    for(j=1;j<=b;j++)
                    {
                        string1+="*";
                    }
                    string1+="\n";
                    b += 2;
                }
                
            }
   console.log(string1)
    
    
}
starpattern();