function solution(a){
    var student1 = new Array();
    var student2 = new Array();
    var student3 = new Array();
    //수포자들 찍은 정답 
    var num1=1;
    var num2=1;
    var num3=[3,1,2,4,5];
    var g=0;
    //위의 배열을 구현하기 위한 변수
    var score=[0,0,0];
    //정답 맞춘 갯수
    var result=new Array();

    for(var i=0;i<a.length;i++){

         // 첫번째 학생 찍는 방법
        student1.push(num1);
        num1++;
        if(num1==6){
            num1=1;
        }
        // 두번째 학생 찍는 방법
        if(i%2==0){
            student2.push(2);
        }
        else if(i%2==1){
            student2.push(num2);
            num2++;
            if(num2==2){
                num2++;
            }
            if(num2==6){
                num2=1;
            }
        }
        
        // 세번째 학생 찍는 방법
        student3.push(num3[parseInt(g/2)]);
        g++;
        if(g==10){
            g=0;
        }

    }

    for(var i=0;i<a.length;i++){
        if(student1[i]==a[i]){
            score[0]++;
        }
        if(student2[i]==a[i]){
            score[1]++;
        }
        if(student3[i]==a[i]){
            score[2]++;
        }
    }
    //console.log("score:"+score)
    //각 학생마다 얼마나 맞췄는지 배열에 넣어줌
    for(var i=0;i<score.length;i++){
        if(score[i]==0){
            score.splice(i,1);
            i--;
        }
    }
    //console.log("new score:"+score);
    for(var i=0;i<score.length;i++){
        result[i]=(score.indexOf(Math.max(...score)))+1;
        score[score.indexOf(Math.max(...score))]=-1;
    }
    //console.log("result:"+result);
    //최댓값을 가지고 있는 index의 번호를 결과배열에 넣어줌
    //작업이 실행되면 최댓값을 가지고 있는 score의 인덱스를 -1로 초기화
   return result;
}