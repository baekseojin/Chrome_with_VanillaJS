const quotes = [
  {
    quotes:
      "훌륭한 삶에는 세가지 요소가 있다. 배우는 일, 돈 버는 일, 무엇인가 하고 싶은 일.",
    author: "크리스토퍼 달링턴 몰리",
  },
  {
    quotes: "회복의 유일한 길은 다시 시작하는 것이다.",
    author: "체이즈",
  },
  {
    quotes: "할 수 있는 한 휼륭한 인생을 만들라. 인생은 짧고 곧 지나간다.",
    author: "오울디즈",
  },
  {
    quotes: "좋은 밤을 찾다가 좋은 낮을 잃어버리는 사람들이 많다.",
    author: "네덜란드 격언",
  },
  {
    quotes: "정직은 가장 확실한 자본이다.",
    author: "에머슨",
  },
  {
    quotes:
      "정의란 각기 자기가 할 일을 다하고 타인을 방해하거나 간섭하지 않는 것이다.",
    author: "플라톤",
  },
  {
    quotes:
      "잠자리에 들 때 이튿날 일어날 일을 즐거움으로 삼고 있는 인간은 행복하다.",
    author: "힐티",
  },
  {
    quotes: "잔잔한 바다에서는 좋은 뱃사공이 만들어지지 않는다.",
    author: "영국 속담",
  },
  {
    quotes:
      "자연은 결코 우리를 속이지 않는다. 우리를 속이는 것은 언제나 우리 자신이다.",
    author: "장 자크 루소",
  },
  {
    quotes: "자신에 대한 신뢰가 타인을 신뢰하는 중요한 요소가 된다.",
    author: "프랑수아 드 라 로슈푸코",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
