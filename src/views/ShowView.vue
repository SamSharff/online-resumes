<template>
  <div class="container">
    <div id="resume">
      <div id="header" class="section">
        <!-- container to hold picture, if it exists -->
        <!-- Container to hold text information -->

        <!-- Question to back end people: will they be doing formatting of the data for consistency amongst students? e.g. capitalizing names, same format for phone numbers, etc.  -->

        <!-- Stuff above the bio -->
        <div id="header-above-bio">
          <div id="header-photo" class="header-item">
            <img :src="photo" alt="photo" id="photo" />
          </div>
          <div id="header-contact-info" class="header-item">
            <div>
              <h1>{{ `${firstName} ${lastName}` }}</h1>
            </div>
            <div>{{ `${email} | ${phoneNumber}` }}</div>
            <div>
              <a :href="personalWebsite">{{ personalWebsite }}</a>
              |
              <a :href="onlineResume">{{ onlineResume }}</a>
              |
              <a :href="linkedIn">{{ linkedIn }}</a>
              |
              <a :href="github">{{ github }}</a>
              |
              <a :href="twitterHandle">{{ twitterHandle }}</a>
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
        <div v-for="education in educations" :key="education.universityName">
          <div>
            {{ education.universityName }}
          </div>
          <div>
            {{ education.degree }}
            |
            {{ education.startDate }}
            -
            {{ education.endDate }}
          </div>
          <ul v-for="detail in education.details" :key="detail">
            <li>
              {{ detail }}
            </li>
          </ul>
        </div>
      </div>

      <div id="experience" class="section">
        <div v-for="experience in experiences" :key="experience.jobTitle">
          {{ experience.companyName }}
          {{ experience.jobTitle }}
        </div>
      </div>

      <div id="skills" class="section">
        <div v-for="skill in skills" :key="skill">
          {{ skill }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      firstName: "first name",
      lastName: "last name",
      email: "example@example.com",
      phoneNumber: "832",
      shortBio:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatem error ad maiores atque distinctio facilis voluptas vel, at, a ut corrupti aspernatur asperiores maxime enim alias expedita accusamus fugiat!",
      linkedIn: "LIurl",
      twitterHandle: "Twitter",
      personalWebsite: "website",
      onlineResume: "resume",
      github: "git",
      photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/977.png",
      educations: [
        {
          startDate: "1992",
          endDate: "1996",
          degree: "GED",
          universityName: "Lower Marion High School",
          details: [
            "Bryant became the first freshman in decades to start for Lower Merion's varsity team.",
            "During his junior year, he averaged 31.1 points, 10.4 rebounds, 5.2 assists, 3.8 blocks and 2.3 steals[38] and was named Pennsylvania Player of the Year",
          ],
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
  methods: {},
};
</script>

<style>
/* Removes extra margin from the h1 */
h1 {
  margin: 0px;
}

h2 {
  margin: 0px;
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
  border-style: solid;
  /* align-items: center; */
  /* justify-content: center; */
}

.section {
  display: flex;
  flex-direction: column;
  border-style: solid;
  /* align-items: center; */
  /* justify-content: center; */
  width: 80%;
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
  border-style: solid;
}

#header-photo {
  align-self: center;
}

#photo {
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-style: solid;
  border-color: black;
}

#header-contact-info {
  align-self: center;
}

.section {
  padding: 5px;
}
</style>
