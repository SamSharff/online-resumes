<template>
  <div class="about">
    {{ firstName }}
    {{ lastName }}
    {{ email }}
    {{ phoneNumber }}
    {{ shortBio }}
    {{ linkedIn }}
    {{ twitterHandle }}
    {{ personalWebsite }}
    {{ onlineResume }}
    {{ github }}
    {{ photo }}
    <div v-for="experience in experiences" :key="experience.jobTitle">
      {{ experience }}
    </div>
    <div v-for="education in educations" :key="education.universityName">
      {{ education }}
    </div>
    <div v-for="skill in skills" :key="skill">
      {{ skill }}
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
      shortBio: "bio",
      linkedIn: "LIurl",
      twitterHandle: "Twitter",
      personalWebsite: "website",
      onlineResume: "resume",
      github: "git",
      photo: "img",
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
  methods: {},
};
</script>
