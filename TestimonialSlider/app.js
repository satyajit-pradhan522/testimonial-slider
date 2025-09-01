const testimonials = [
    {
        name: "Courtney Cook",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "With apple, we have finally accomplished things that have been waiting forever to get done."
    },
    {
        name: "Cherise G",
        photoUrl: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I love apple! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come."
    },
    {
        name: "Harry New",
        photoUrl: "https://images.unsplash.com/photo-1755140302411-9a7a9f523c1e?q=80&w=1047&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "apple makes me more productive and gets the job done in a fraction of the time. I'm glad I found apple."
    },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial()

function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerHTML = text;
    usernameEl.innerHTML = name;
    idx++;
    if (idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial() 
    }, 2000);
}