<template>
  <section id="team">
    <h2 class="section-title">Team</h2>
    <div class="max-w-container mx-auto p-6 md:p-12 my-0">
      <div
        each="loop=person in dato.person"
        if="condition={{ person.teamMember == true }}"
        class="person">
        <div class="name">
          <h2>{{ person.name }}</h2>
          <h3>{{ person.title }}</h3>
          <p class="twitter" if="condition={{ person.twitter }}">
            <a
              class="btn btn-primary"
              href="https://twitter.com/{{ person.twitter }}"
              >{{ person.twitter }}</a
            >
          </p>
          <img
            if="condition={{ person.photo }}"
            src="//{{ dato._meta.imgixHost + person.photo.path }}?bm=normal&fit=facearea&facepad=20&w=300&h=500&auto=compress"
            style="max-width: 100%" />
        </div>
        <div class="bio" md if="condition={{ person.bio }}">
          {{ person.bio }}
        </div>
      </div>
    </div>
  </section>
</template>
