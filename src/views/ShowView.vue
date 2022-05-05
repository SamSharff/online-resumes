<script>
import axios from "axios";

export default {
  data() {
    return {
      student: {
        // firstName: "",
        // lastName: "",
        // email: "",
        // phoneNumber: "",
        // shortBio: "",
        // linkedIn: "",
        // twitterHandle: "",
        // personalWebsite: "",
        // onlineResume: "",
        // github: "",
        // photo: "",
        // educations: [
        //   {
        //     startDate: "",
        //     endDate: "",
        //     degree: "",
        //     universityName: "",
        //     details: [],
        //   },
        // ],
        // skills: [],
        // experiences: [
        //   {
        //     jobTitle: "",
        //     startDate: "",
        //     endDate: "",
        //     companyName: "",
        //     details: [],
        //   },
        //   {
        //     jobTitle: "",
        //     startDate: "",
        //     endDate: "",
        //     companyName: "",
        //     details: [],
        //   },
        // ],
        // capstone: {
        //   name: "",
        //   description: "",
        //   url: "",
        //   screenshot: "",
        // },
      },
    };
  },
  created: function () {
    axios.get("http://localhost:3000/students/" + this.$route.params.id + ".json").then((response) => {
      console.log("show student", response);
      this.student = response.data;
    });
  },
  methods: {},
};
</script>

<template>
  <div class="container">
    <div id="resume">
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
            <div>{{ `${email} | ${phoneNumber}` }}</div>
            <div>
              <a :href="personalWebsite">{{ personalWebsite }}</a>
              |
              <a :href="onlineResume">{{ onlineResume }}</a>
              |
              <a :href="'https://www.linkedin.com/in/' + linkedIn">
                <!-- <img src="../assets/linkedin.png" alt="" class="logo" /> -->
                {{ linkedIn }}
              </a>
              |
              <a :href="github">
                <!-- <img src="../assets/github.png" alt="" class="logo" /> -->
                {{ github }}
              </a>
              |
              <a :href="'https://twitter.com/' + twitterHandle">
                <img src="../assets/twitter.webp" alt="" class="logo" />
                {{ twitterHandle }}
              </a>
            </div>
          </div>
        </div>

        <!-- Bio -->
        <div id="header-bio" class="header-item">
          {{ shortBio }}
        </div>
      </div>

      <div id="education" class="section">
        <h2>Education</h2>
        <div v-for="education in educations" :key="education.universityName" class="list-group">
          <div>
            <b>
              {{ education.universityName }}
            </b>
            |
            {{ education.startDate }}
            -
            {{ education.endDate }}
          </div>
          <div>
            <i>
              {{ education.degree }}
            </i>
          </div>
          <ul v-for="detail in education.details" :key="detail">
            <li>
              {{ detail }}
            </li>
          </ul>
        </div>
      </div>

      <div id="experience" class="section">
        <h2>Experience</h2>

        <div v-for="experience in experiences" :key="experience.companyName" class="list-group">
          <div>
            <b>
              {{ experience.companyName }}
            </b>
            |
            {{ experience.startDate }}
            -
            {{ experience.endDate }}
          </div>
          <div>
            <i>
              {{ experience.jobTitle }}
            </i>
          </div>
          <ul v-for="detail in experience.details" :key="detail">
            <li>
              {{ detail }}
            </li>
          </ul>
        </div>
      </div>

      <div id="skills" class="section">
        <h2>Skills</h2>
        <div class="list-group">
          {{ skills.join(" | ") }}
        </div>
      </div>
    </div>
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
