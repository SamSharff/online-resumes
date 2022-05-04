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
              <h1>{{ `${firstName} ${lastName}` }}</h1>
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

<script>
export default {
  name: "HomeView",
  data() {
    return {
      firstName: "Kobe",
      lastName: "Bryant",
      email: "kobebryant@nba.com",
      phoneNumber: "081-888-2424",
      shortBio:
        "Kobe Bean Bryant was an American professional basketball player. A shooting guard, he spent his entire 20-year career with the Los Angeles Lakers in the National Basketball Association (NBA). Widely regarded as one of the greatest basketball players of all time, Bryant won five NBA championships, was an 18-time All-Star, a 15-time member of the All-NBA Team, a 12-time member of the All-Defensive Team, the 2008 NBA Most Valuable Player (MVP), and a two-time NBA Finals MVP. Bryant also led the NBA in scoring twice, and ranks fourth in league all-time regular season and postseason scoring. He was posthumously voted into the Naismith Memorial Basketball Hall of Fame in 2020.",
      linkedIn: "kobe-bryant-3b87b8205",
      twitterHandle: "@kobebryant",
      personalWebsite: "granitystudios.com",
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
          details: ["detail 1", "detail 2"],
        },
        {
          jobTitle: "job 2",
          startDate: "start 2",
          endDate: "end 2",
          companyName: "company 2",
          details: ["detail 1", "detail 2"],
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
