const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
  },
  {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
    }
  ];

    console.log("hello")
    let soru1 = person.filter(user => user.age > 30);
    const soru2 = person.filter(user => user.languages.includes("JavaScript"))
    console.log(soru1)