<script>
import axios from "axios";

export default {
  data() {
    return {
      students: [
        {
          first_name: "First Name",
          last_name: "Last Name",
          email: "example@example.com",
          short_bio:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsum dolorem possimus aut, cumque temporibus atque maiores et eligendi nam in corrupti quasi? Labore ea tenetur ullam pariatur voluptates? Dolorum!",
          linkedin_url: "First-Last",
          github_url: "First-Last",
        },
        {
          first_name: "First Name",
          last_name: "Last Name",
          email: "example@example.com",
          short_bio:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsum dolorem possimus aut, cumque temporibus atque maiores et eligendi nam in corrupti quasi? Labore ea tenetur ullam pariatur voluptates? Dolorum!",
          linkedin_url: "First-Last",
          github_url: "First-Last",
        },
        {
          first_name: "First Name",
          last_name: "Last Name",
          email: "example@example.com",
          short_bio:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsum dolorem possimus aut, cumque temporibus atque maiores et eligendi nam in corrupti quasi? Labore ea tenetur ullam pariatur voluptates? Dolorum!",
          linkedin_url: "First-Last",
          github_url: "First-Last",
        },
        {
          first_name: "First Name",
          last_name: "Last Name",
          email: "example@example.com",
          short_bio:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ipsum dolorem possimus aut, cumque temporibus atque maiores et eligendi nam in corrupti quasi? Labore ea tenetur ullam pariatur voluptates? Dolorum!",
          linkedin_url: "First-Last",
          github_url: "First-Last",
        },
      ],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/students.json").then((response) => {
      this.students = response.data;
      console.log("All students", this.students);
    });
  },
};
</script>

<template>
  <div class="container">
    <h1>Candidate Resumes</h1>
    <div class="row">
      <div class="col-xl-6" v-for="student in students" v-bind:key="student.firstName">
        <div class="card my-3">
          <div class="row">
            <!-- picture -->
            <div class="col-auto m-2" style="align-self: center">
              <img
                src="https://cdn.cnn.com/cnnnext/dam/assets/190517103414-01-grumpy-cat-file-restricted.jpg"
                alt=""
                class="student-photo align-middle"
              />
            </div>
            <!-- text info -->
            <div class="col text-left">
              <!-- Name and links -->
              <div class="row p-2">
                <div class="col p-0">
                  <h4>
                    {{ `${student.first_name} ${student.last_name}` }}
                  </h4>
                </div>
                <div class="col-auto text-right">
                  <a :href="`https://github.com/` + student.github_url">
                    <img src="../assets/github.png" alt="" class="icon" />
                  </a>
                  <a :href="`https://www.linkedin.com/in/` + student.linkedin_url">
                    <img src="../assets/linkedin.png" alt="" class="icon" />
                  </a>
                </div>
              </div>

              <!-- Bio -->
              <div class="row">
                <div class="col px-2">
                  <p>{{ student.short_bio }}</p>
                </div>
              </div>

              <!-- More info -->
              <div class="row px-2">
                <a :href="`/students/${student.id}`">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.icon {
  height: 25px;
  width: 25px;
  object-fit: cover;
}

.student-photo {
  height: 150px;
  width: 150px;
  object-fit: cover;
}
</style>
