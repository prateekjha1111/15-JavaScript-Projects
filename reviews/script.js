const persons = [
  {
    author: "Bill Anderson",
    job: "Software Engineer",
    img: "person.jpg",
    about: "As a software engineer, I was impressed with the delivery service. The efficiency, timely deliveries, and intuitive tracking system made the entire process seamless and reliable for me."
  },
  {
    author: "Sarah Mitchell",
    job: "Digital Marketing Specialist",
    img: "https://media.istockphoto.com/id/1303206630/photo/portrait-of-smiling-caucasian-businesswoman-pose-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=vXQ6jnbUYRi4qn4GzRGJKDBH3PAezENQzM6b5_6FImI=",
    about: "As a digital marketing specialist, I found the service outstanding. Their fast, reliable deliveries and excellent communication allowed me to focus on my campaigns without any worries."
  },
  {
    author: "James Carter",
    job: "Civil Engineer",
    img: "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    about: "As a civil engineer, I rely on timely deliveries for my projects. The service was dependable and efficient, ensuring materials arrived on time without delays, which kept my work on schedule."
  },
  {
    author: "David Thompson",
    job: "Data Scientist",
    img: "https://media.istockphoto.com/id/1358458873/photo/portrait-of-a-man-with-down-syndrome.webp?a=1&s=612x612&w=0&k=20&c=QeyGehvohJ9LKxeyAxiMslkwR8Vn9kT7R8VV7C6KgYM=",
    about: "As a data scientist, I appreciated the precision and reliability of the delivery service. The seamless tracking system, timely arrivals, and clear communication ensured I was always informed. This efficiency allowed me to focus on my analyses without interruptions, knowing my deliveries were handled with care and punctuality."
  },
];

let image = document.querySelector("#person-img");
let author_name = document.querySelector("#author");
let job_title = document.querySelector("#job");
let info = document.querySelector("#more-info");
let prev_button = document.querySelector("#prev-btn");
let next_button = document.querySelector("#next-btn");
let id = 0, person = persons[id];
let surprise_button = document.querySelector("#surprise-btn");

let updateDisplay = ()=>{
    image.setAttribute("src", persons[id].img);
    author_name.innerHTML = persons[id].author;
    job_title.innerHTML = persons[id].job;
    info.innerHTML = persons[id].about;
};

next_button.addEventListener("click", ()=>{
  id++;
  if(id >= persons.length){
    id = 0;
  }
    updateDisplay();
});

prev_button.addEventListener("click", ()=>{
  id--;
  if(id < 0){
    id = persons.length - 1;
  }
    updateDisplay();
});

surprise_button.addEventListener("click", ()=>{
    id = Math.floor(Math.random() * persons.length);
    updateDisplay();
});

updateDisplay();
