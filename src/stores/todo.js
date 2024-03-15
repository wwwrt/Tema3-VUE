import { defineStore } from "pinia";
export const useTodoStore = defineStore("todo", {
  state: () => {
    return {
      lists: [
        {
          image:
            "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
          name: "Max Jeremy",
          role: "Antrepreneur",
        },
        {
          image:
            "https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B",
          name: "Alyssa Tyson",
          role: "Web Designer",
        },
        {
          image:
            "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
          name: "Daniel Clark",
          role: "Frontend Developer",
        },
        {
          image:
            "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
          name: "Melyssa Lavalez",
          role: "Web Developer",
        },
      ],
    };
  },
  actions: {
    saveToLocalStorage() {
      if (localStorage.getItem("todo-lists") === null) {
        localStorage.setItem("todo-lists", JSON.stringify(this.lists));
      } else {
        localStorage.removeItem("todo-lists");
        localStorage.setItem("todo-lists", JSON.stringify(this.lists));
      }
    },
  },
});
