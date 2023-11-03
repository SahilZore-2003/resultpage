

const scorecard = document.querySelector("#scorecard");

let data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ]
  

data.forEach((e) => {
    scorecard.innerHTML += `<div>
    <span>
      <img src="${e.icon}">
      ${e.category}
    </span>
    <span>
      ${e.score}/100
    </span>
  </div>`
})

