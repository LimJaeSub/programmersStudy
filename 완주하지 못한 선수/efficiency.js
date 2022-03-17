function solution(p,c){
    p.sort();
    c.sort();
    for(var i=0;i<p.length;i++){
        for(var j=0;j<c.length;j++){
            if(p[i]==c[j]){
                p[i]=0;
                c[j]=0;
                break;
            }
        }
    }
    for(var i=0;p.length;i++){
        if(p[i]!==0){
            return p[i];
        }
    }
}