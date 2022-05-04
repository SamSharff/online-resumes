<script>
import axios from "axios";

export default {
  data() {
    return {
      students: [
        {
          firstName: "first name",
          lastName: "last name",
          email: "example@example.com",
          // phoneNumber: "832",
          shortBio: "bio",
          linkedIn: "LIurl",
          // twitterHandle: "Twitter",
          // personalWebsite: "website",
          // onlineResume: "resume",
          github: "git",
          // photo: "img",
        },
      ],
      educations: [
        {
          startDate: "start",
          endDate: "end",
          degree: "degree",
          universityName: "uni",
          details: "details",
        },
      ],
      skills: ["Ruby", "HTML"],
      experiences: [
        {
          jobTitle: "job",
          startDate: "start",
          endDate: "end",
          companyName: "company",
          details: "details",
        },
      ],
      capstone: {
        name: "name",
        description: "desc",
        url: "url",
        screenshot: "img",
      },
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
      <h2>First Name: {{ student.firstName }}</h2>
      <h2>Last Name: {{ student.lastName }}</h2>
      <h3>Bio: {{ student.shortBio }}</h3>
      <span>LinkedIn: {{ student.linkedIn }} | github: {{ student.github }}</span>
      <br />
      <a href="`/students/${student.id}`">Read more</a>

      <h2>First Name: {{ student.firstName }}</h2>
      <h2>Last Name: {{ student.lastName }}</h2>
      <h3>Bio: {{ student.shortBio }}</h3>
      <span>LinkedIn: {{ student.linkedIn }} | github: {{ student.github }}</span>
      <br />
      <a href="`/students/${student.id}`">Read more</a>

      <h2>First Name: {{ student.firstName }}</h2>
      <h2>Last Name: {{ student.lastName }}</h2>
      <h3>Bio: {{ student.shortBio }}</h3>
      <span>LinkedIn: {{ student.linkedIn }} | github: {{ student.github }}</span>
      <br />
      <a href="`/students/${student.id}`">Read more</a>
    </div>
  </div>
</template>

<style></style>
