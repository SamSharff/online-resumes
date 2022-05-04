<script>
import axios from "axios";

export default {
  data() {
    return {
      students: [
        {
          firstName: "",
          lastName: "",
          email: "",
          shortBio: "",
          linkedIn: "",
          github: "",
        },
      ],
      // educations: [
      //   {
      //     startDate: "start",
      //     endDate: "end",
      //     degree: "degree",
      //     universityName: "uni",
      //     details: "details",
      //   },
      // ],
      // skills: ["Ruby", "HTML"],
      // experiences: [
      //   {
      //     jobTitle: "job",
      //     startDate: "start",
      //     endDate: "end",
      //     companyName: "company",
      //     details: "details",
      //   },
      // ],
      // capstone: {
      //   name: "name",
      //   description: "desc",
      //   url: "url",
      //   screenshot: "img",
      // },
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
  <div class="index">
    <div v-for="student in students" v-bind:key="student.firstName">
      <h1>Candidate Resumes</h1>
      <h2>First Name: {{ student.first_name }}</h2>
      <h2>Last Name: {{ student.last_name }}</h2>
      <h3>Bio: {{ student.short_bio }}</h3>
      <span>LinkedIn: {{ student.linkedin_url }} | github: {{ student.github_url }}</span>
      <br />
      <a href="`/students/${student.id}`">Read more</a>
    </div>
  </div>
</template>

<style></style>
