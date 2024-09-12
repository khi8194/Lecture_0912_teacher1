console.log("test");
/*
  조건문 
  - 비교연산자를 활용한 조건식을 이용해서 특정 조건일때 서로 다른 코드가 실행되도록 분기처리

  if(조건식1){
    조건식1이 참이면 이곳의 구문이 실행되며 종료
    거짓이면 이곳의 구문을 무시하고 다음 조건식으로 넘어감
  }
  else if(조건식2){
    조건식2가 참이면 이곳의 구문이 실행되며 종료
    거짓이면 이곳의 구문을 무시하고 다음 조건식으로 넘어감
  }
  else {
    위의 모든 조건조건이 참이 아닐때 이곳의 구문을 무조건 실행하고 종료
  }
*/

const hour = new Date().getHours();
console.log(hour);

//0~9 :lightblue
//10~15 : orange
//16~20 : pink
//21~24 : purple

/*
if (hour >= 0 && hour < 10) {
  document.body.style.backgroundColor = "lightblue";
} else if (hour >= 10 && hour < 16) {
  document.body.style.backgroundColor = "orange";
} else if (hour >= 16 && hour < 21) {
  document.body.style.backgroundColor = "pink";
} else {
  document.body.style.backgroundColor = "purple";
}
*/

// if (hour >= 0 && hour < 10) document.body.style.backgroundColor = "lightblue";
// else if (hour >= 10 && hour < 16) document.body.style.backgroundColor = "orange";
// else if (hour >= 16 && hour < 21) document.body.style.backgroundColor = "pink";
// else document.body.style.backgroundColor = "purple";

const dataArr = [
	{ cond: hour >= 0 && hour < 10, color: "lightblue" },
	{ cond: hour >= 10 && hour < 16, color: "violet" },
	{ cond: hour >= 16 && hour < 21, color: "pink" },
	{ cond: hour >= 21 && hour < 25, color: "purple" }
];

dataArr.forEach(data => {
	if (data.cond) document.body.style.backgroundColor = data.color;
});

//dataArr.forEach(data => data.cond && (document.body.style.backgroundColor = data.color));

// if (hour >= 0 && hour < 10) document.body.style.backgroundColor = "lightblue";
// if (hour >= 10 && hour < 16) document.body.style.backgroundColor = "orange";
// if (hour >= 16 && hour < 21) document.body.style.backgroundColor = "pink";
// if (hour >= 21 && hour < 25) document.body.style.backgroundColor = "purple";
