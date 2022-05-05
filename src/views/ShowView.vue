<script>
import axios from "axios";

export default {
  data() {
    return {
      student: {},
      educations: {},
      experiences: {},
      skills: {},
    };
  },
  created: function () {
    axios.get("http://localhost:3000/students/" + this.$route.params.id + ".json").then((response) => {
      console.log("show student", response);
      this.student = response.data;
    });
    axios.get("http://localhost:3000/educations/" + this.$route.params.id + ".json").then((response) => {
      console.log("show education", response);
      this.educations = response.data;
    });
    axios.get("http://localhost:3000/experience/" + this.$route.params.id + ".json").then((response) => {
      console.log("show experience", response);
      this.experiences = response.data;
    });
    axios.get("http://localhost:3000/skills/" + this.$route.params.id + ".json").then((response) => {
      console.log("show skills", response);
      this.skills = response.data;
    });
  },
  methods: {},
};
</script>

<template>
  <div class="container">
    <div id="header" class="section">
      <!-- Stuff above the bio -->
      <div id="header-above-bio">
        <div id="header-photo" class="header-item">
          <img :src="photo" alt="photo" id="photo" />
        </div>
        <div id="header-contact-info" class="header-item">
          <div>
            <h1>{{ `${student.first_name} ${student.last_name}` }}</h1>
          </div>
          <div>{{ `${student.email} | ${student.phone_number}` }}</div>
          <div>
            <a :href="student.website_url">{{ student.website_url }}</a>
            |
            <a :href="student.online_resume_url">{{ student.online_resume_url }}</a>
            |
            <a :href="'https://www.linkedin.com/in/' + student.linkedin_url">
              <!-- <img src="../assets/linkedin.png" alt="" class="logo" /> -->
              {{ student.linkedin_url }}
            </a>
            |
            <a :href="student.github_url">
              <!-- <img src="../assets/github.png" alt="" class="logo" /> -->
              {{ student.github_url }}
            </a>
            |
            <a :href="'https://twitter.com/' + student.twitter_handle">
              <img src="../assets/twitter.webp" alt="" class="logo" />
              {{ student.twitter_handle }}
            </a>
          </div>
        </div>
      </div>
      <!-- Bio -->
      <div id="header-bio" class="header-item">
        {{ student.short_bio }}
      </div>
    </div>
    <div id="education" class="section">
      <h2>Education</h2>
      <div class="list-group">
        <div>
          <b>
            {{ educations.university_name }}
          </b>
          |
          {{ educations.start_date }}
          -
          {{ educations.end_date }}
        </div>
        <div>
          <i>
            {{ educations.degree }}
          </i>
        </div>
        {{ educations.details }}
      </div>
    </div>
    <!-- <div id="experience" class="section">
        <h2>Experience</h2>

        <div class="list-group">
          <div>
            <b>
              {{ experiences.company_name }}
            </b>
            |
            {{ experiences.start_date }}
            -
            {{ experiences.end_date }}
          </div>
          <div>
            <i>
              {{ experiences.job_title }}
            </i>
          </div>
          {{ experiences.detail }}
        </div>
      </div> -->
    <div id="skills" class="section">
      <h2>Skills</h2>
      <div class="list-group">
        {{ skills.skill_name }}
      </div>
    </div>
  </div>
  <div id="twitter-feed">
    <a class="twitter-timeline" :href="'https://twitter.com/alyankovic'" data-tweet-limit="5" data-width="399"></a>
  </div>
</template>

<style>
/* Removes extra margin from the h1 */
h1 {
  margin: 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  color: #2f448f;
}

h2 {
  margin: 0px;
  color: #2f448f;
}

ul {
  margin: 0px;
}

/******************/
/* RESUME CONTENT */
/******************/

#resume {
  display: flex;
  flex-direction: column;
  font-family: ‘Manrope’;
}

.section {
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 5px auto;
  text-align: start;
}

/* give margin to all items in header */
.header-item {
  margin: 5px;
}

#header-above-bio {
  display: flex;
  justify-content: left;
}

#header-photo {
  align-self: center;
}

#photo {
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-style: solid;
  background-color: grey;
}

#header-contact-info {
  align-self: center;
}

.logo {
  height: 15px;
  width: 15px;
  object-fit: cover;
}

.section {
  padding: 5px;
}

.list-group {
  margin: 5px 0px;
}
</style>
