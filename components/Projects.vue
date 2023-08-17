<template>
  <section id='main'>
    <div class='max-w-container mx-auto p-6 md:p-12 my-0 '>
      <h2 class='section-title'>Projects</h2>
      <div id='tag-buttons'>
        <button class='btn btn-on reset' data-filter='project-list' data-reset='true'>All</button>
        <button each='loop=tag in dato.category' class='btn btn-off btn-tag' data-filter='project-list'
          data-filter-tag='{{ tag.slug }}'>{{ tag.title }}</button>
      </div>
      <section id='projects' class='grid project-list'>
        <div each='loop=project in dato.project' class='project {{ project.featured ? "featured" : "" }}'
          style='order: {{ project.position }}' data-tags='{{ project.tags.map(a => a.slug).join(" ") }}'>
          <div class='cd'>
            <img if='condition={{ project.images[0] }}'
              src='//{{ dato._meta.imgixHost + project.images[0].path }}?bm=normal&w=400&fit=clip&auto=compress,format'>
            <img else src='/img/gem.png'>
          </div>
          <div class='copy'>
            <h2 class='title'>{{ project.title }}</h2>
            <h3 class='clients'>
              <span each='loop=client in project.clients' if='condition={{ client }}'>{{ client.name }}</span>
            </h3>
            <p class='date' if='condition={{ project.date !== null }}'>{{ df(project.date, "mmm yyyy") }}</p>
            <p class='date' else>Coming soon!</p>
            <div class='description' md if='condition={{ project.description }}'>
              {{ project.description }}
            </div>

            <div class='services' if='condition={{ project.services.length !== 0 }}'>
              <h4><span>Services</span></h4>
              <span each='loop=service in project.services' class='service'>{{ service.name }}</span>
            </div>
            <div class='credits' if='condition={{ project.credits.length !== 0 }}'>
              <h4><span>Credits</span></h4>
              <p each='loop=credit in project.credits' if='condition={{ credit.role }}'>
              <p if='condition={{ credit.contributor }}'>{{ credit.role }} by <b>{{ credit.contributor.name }}</b></p>
              <p else>Featuring <b>{{ credit.contributor }}</b></p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>