function solution(a, c) {
    var answer = [];    
    for(var i=0;i<c.length;i++){
        var arr2 = a.slice(c[i][0]-1,c[i][1]);
        arr2.sort((k,j)=>k-j);
        answer.push(arr2[c[i][2]-1]);
    }
    return answer;
}

// 자바스크립트의 경우 sort시 숫자가 아닌 문자로 인식하기 때문에
// .sort((a,b)=>a-b) 를 comparefuntion해줘야 숫자 정렬이 된다.